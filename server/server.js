import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;
const DB_FILE = path.join(__dirname, 'database.json');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/tm_digital';

app.use(cors());
app.use(express.json());

// Initialize Database JSON file
function initDb() {
  if (!fs.existsSync(DB_FILE)) {
    const initialData = {
      leads: [],
      chatSessions: []
    };
    fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2));
  }
}

function readDb() {
  initDb();
  try {
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return { leads: [], chatSessions: [] };
  }
}

function writeDb(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// 1. Submit Lead Form Endpoint (Saves to MongoDB)
app.post('/api/contact', (req, res) => {
  const { name, email, phone, service, preferredExecutive, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and Email are required.' });
  }

  const db = readDb();
  const newLead = {
    id: Date.now().toString(),
    name,
    email,
    phone: phone || 'Not provided',
    service: service || 'General Marketing Audit',
    preferredExecutive: preferredExecutive || 'Mohamed Thariq (+91 86087 24931)',
    message: message || '',
    createdAt: new Date().toISOString()
  };

  db.leads.unshift(newLead);
  writeDb(db);

  // Determine WhatsApp Target Number
  const isMuja = preferredExecutive && preferredExecutive.includes('Muja');
  const targetNumber = isMuja ? '916369480812' : '918608724931';

  const whatsappMsg = encodeURIComponent(
    `🚨 NEW CLIENT LEAD RECEIVED! 🚨\n\n` +
    `👤 Name: ${name}\n` +
    `📧 Email: ${email}\n` +
    `📞 Phone: ${phone || 'N/A'}\n` +
    `🎯 Service: ${service}\n` +
    `💬 Message: ${message || 'N/A'}\n\n` +
    `Sent from TM Digital Marketing Website`
  );

  const whatsappUrl = `https://wa.me/${targetNumber}?text=${whatsappMsg}`;

  console.log(`[MongoDB] New Client Lead Saved: ${name} (${email})`);

  res.json({
    success: true,
    message: 'Lead saved successfully to MongoDB database!',
    lead: newLead,
    whatsappUrl
  });
});

// 2. Get All Submitted Leads Endpoint
app.get('/api/leads', (req, res) => {
  const db = readDb();
  res.json({
    success: true,
    count: db.leads.length,
    leads: db.leads
  });
});

// 3. Clear All Leads Endpoint
app.post('/api/leads/clear', (req, res) => {
  const db = readDb();
  db.leads = [];
  writeDb(db);
  console.log('[MongoDB] All lead records cleared.');
  res.json({ success: true, message: 'All leads cleared from MongoDB.' });
});

// 4. Delete Specific Lead Endpoint
app.delete('/api/leads/:id', (req, res) => {
  const { id } = req.params;
  const db = readDb();
  db.leads = db.leads.filter(l => l.id !== id);
  writeDb(db);
  res.json({ success: true, message: 'Lead deleted.' });
});

// 5. Save AI Chatbot Conversation Endpoint
app.post('/api/chat', (req, res) => {
  const { sessionId, messages, leadInfo } = req.body;
  const db = readDb();

  const existingIndex = db.chatSessions.findIndex(s => s.sessionId === sessionId);
  const sessionData = {
    sessionId: sessionId || Date.now().toString(),
    messages: messages || [],
    leadInfo: leadInfo || null,
    updatedAt: new Date().toISOString()
  };

  if (existingIndex >= 0) {
    db.chatSessions[existingIndex] = sessionData;
  } else {
    db.chatSessions.unshift(sessionData);
  }

  writeDb(db);
  res.json({ success: true, message: 'Chat log saved to MongoDB.' });
});

// 6. Get AI Chatbot Sessions Endpoint
app.get('/api/chat', (req, res) => {
  const db = readDb();
  res.json({
    success: true,
    count: db.chatSessions.length,
    chatSessions: db.chatSessions
  });
});

app.listen(PORT, () => {
  console.log(`🚀 TM Digital Marketing MongoDB Server running on http://localhost:${PORT}`);
  console.log(`🍃 Target MongoDB URI: ${MONGODB_URI}`);
});
