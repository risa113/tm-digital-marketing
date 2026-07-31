import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import dns from 'dns';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Zero-dependency native .env file loader
try {
  const envPath = path.join(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach((line) => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
        const parts = trimmed.split('=');
        const key = parts[0].trim();
        const val = parts.slice(1).join('=').trim().replace(/^["']|["']$/g, '');
        if (key && !process.env[key]) {
          process.env[key] = val;
        }
      }
    });
  }
} catch (err) {
  // Ignore if env file cannot be read
}

// Fix DNS resolution on Windows
try {
  dns.setDefaultResultOrder('ipv4first');
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (err) {}

const app = express();
const PORT = process.env.PORT || 5001;

// Neon PostgreSQL Connection URI
const NEON_DATABASE_URL = process.env.NEON_DATABASE_URL || process.env.DATABASE_URL || '';
const DB_FILE = path.join(__dirname, 'database.json');

app.use(cors());
app.use(express.json());

let neonPool = null;
let isNeonConnected = false;

// Dynamic import for 'pg' to prevent ERR_MODULE_NOT_FOUND if npm install hasn't run
async function initNeonClient() {
  if (!NEON_DATABASE_URL) {
    console.warn(`⚠️ No NEON_DATABASE_URL found in .env file!`);
    console.warn(`👉 Please paste your Neon Database connection URL into .env file.`);
    return;
  }

  try {
    const { default: pkg } = await import('pg');
    const { Pool } = pkg;
    
    neonPool = new Pool({
      connectionString: NEON_DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    });

    const client = await neonPool.connect();
    isNeonConnected = true;
    console.log(`🐘 Neon Serverless PostgreSQL Database Connected Successfully!`);

    // Auto-Create Leads Table in Neon DB
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(100),
        service VARCHAR(255),
        preferred_executive VARCHAR(255),
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    await client.query(createTableQuery);
    client.release();
    console.log(`📋 Neon 'leads' table ready for incoming submissions.`);
  } catch (err) {
    isNeonConnected = false;
    if (err.code === 'ERR_MODULE_NOT_FOUND') {
      console.warn(`⚠️ 'pg' package not installed yet. Run 'npm install' to enable Neon DB.`);
    } else {
      console.warn(`⚠️ Neon DB Connection Warning: ${err.message}`);
    }
    console.warn(`📁 Using local storage fallback: server/database.json`);
  }
}

initNeonClient();

// Local JSON Helpers
function initJsonDb() {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ leads: [], chatSessions: [] }, null, 2));
  }
}

function readJsonDb() {
  initJsonDb();
  try {
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  } catch (err) {
    return { leads: [], chatSessions: [] };
  }
}

function writeJsonDb(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// ----------------------------------------------------
// API Endpoints
// ----------------------------------------------------

// 1. Submit Lead Form (Saves to Neon PostgreSQL Database)
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, preferredExecutive, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and Email are required fields.' });
  }

  const leadData = {
    name,
    email,
    phone: phone || 'Not provided',
    service: service || 'General Marketing Audit',
    preferredExecutive: preferredExecutive || 'Mohamed Thariq (+91 86087 24931)',
    message: message || '',
    createdAt: new Date()
  };

  let savedLead;

  try {
    if (isNeonConnected && neonPool) {
      const insertQuery = `
        INSERT INTO leads (name, email, phone, service, preferred_executive, message)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
      `;
      const values = [
        leadData.name,
        leadData.email,
        leadData.phone,
        leadData.service,
        leadData.preferredExecutive,
        leadData.message
      ];
      const dbResult = await neonPool.query(insertQuery, values);
      savedLead = dbResult.rows[0];
      console.log(`✅ [Neon Database] New Client Lead Saved: ${name} (${email})`);
    } else {
      const db = readJsonDb();
      savedLead = { id: Date.now().toString(), ...leadData };
      db.leads.unshift(savedLead);
      writeJsonDb(db);
      console.log(`📁 [JSON Fallback] New Client Lead Saved: ${name} (${email})`);
    }

    // Determine WhatsApp Executive Target Number
    const isMuja = preferredExecutive && preferredExecutive.includes('Muja');
    const targetNumber = isMuja ? '916369480812' : '918608724931';

    const whatsappMsg = encodeURIComponent(
      `🚨 NEW CLIENT LEAD RECEIVED! 🚨\n\n` +
      `👤 Name: ${name}\n` +
      `📧 Email: ${email}\n` +
      `📞 Phone: ${phone || 'N/A'}\n` +
      `🎯 Service: ${service || 'General Inquiry'}\n` +
      `💬 Message: ${message || 'N/A'}\n\n` +
      `Saved in Neon PostgreSQL Database`
    );

    const whatsappUrl = `https://wa.me/${targetNumber}?text=${whatsappMsg}`;

    res.json({
      success: true,
      message: 'Lead saved successfully to Neon Database!',
      lead: savedLead,
      whatsappUrl
    });
  } catch (error) {
    console.error('Error saving lead:', error);
    res.status(500).json({ error: 'Failed to save lead to Neon database.' });
  }
});

// 2. Get All Submitted Leads
app.get('/api/leads', async (req, res) => {
  try {
    if (isNeonConnected && neonPool) {
      const result = await neonPool.query('SELECT * FROM leads ORDER BY created_at DESC');
      return res.json({ success: true, count: result.rows.length, leads: result.rows, storage: 'Neon DB' });
    } else {
      const db = readJsonDb();
      return res.json({ success: true, count: db.leads.length, leads: db.leads, storage: 'JSON File' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve leads from Neon DB' });
  }
});

// 3. Delete Specific Lead by ID
app.delete('/api/leads/:id', async (req, res) => {
  const { id } = req.params;
  try {
    if (isNeonConnected && neonPool) {
      await neonPool.query('DELETE FROM leads WHERE id::text = $1 OR id = $2', [id, isNaN(Number(id)) ? -1 : Number(id)]);
      console.log(`[Neon Database] Lead ${id} deleted.`);
    } else {
      const db = readJsonDb();
      db.leads = db.leads.filter(l => String(l.id) !== String(id) && String(l._id) !== String(id));
      writeJsonDb(db);
    }
    res.json({ success: true, message: `Lead ${id} deleted successfully.` });
  } catch (error) {
    console.error('Error deleting lead:', error);
    res.status(500).json({ error: 'Failed to delete lead' });
  }
});

// 4. Clear All Leads
app.post('/api/leads/clear', async (req, res) => {
  try {
    if (isNeonConnected && neonPool) {
      await neonPool.query('TRUNCATE TABLE leads');
      console.log('[Neon Database] All lead records cleared.');
    } else {
      const db = readJsonDb();
      db.leads = [];
      writeJsonDb(db);
    }
    res.json({ success: true, message: 'All leads cleared from Neon DB.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to clear leads' });
  }
});

// Start Server with Recursive Port Finder
function startServer(portToTry) {
  const server = app.listen(portToTry, () => {
    console.log(`🚀 TM Digital Marketing Backend running on http://localhost:${portToTry}`);
    if (NEON_DATABASE_URL) {
      console.log(`🐘 Target Neon Connection URL: Configured`);
    } else {
      console.log(`⚠️ No NEON_DATABASE_URL found in .env!`);
    }
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`⚠️ Port ${portToTry} in use. Retrying on port ${portToTry + 1}...`);
      startServer(portToTry + 1);
    } else {
      console.error('Server startup error:', err);
    }
  });
}

startServer(Number(PORT));
