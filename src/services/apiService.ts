export interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  preferredExecutive?: string;
  message?: string;
}

const STORAGE_KEY = 'tm_leads_master';

export const getStoredLeads = (): any[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    return [];
  }
};

export const saveStoredLeads = (leads: any[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
  } catch (err) {
    console.warn('Storage error:', err);
  }
};

// Direct HTTPS SQL API Saver matching exact Neon Table Columns (name, email, phone, service)
export const saveLeadToNeonCloud = async (payload: LeadPayload) => {
  const neonUrl = import.meta.env.VITE_NEON_DATABASE_URL || 'postgresql://neondb_owner:npg_RCv3sodfH0DA@ep-holy-rain-azcxkbzb-pooler.c-3.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';

  try {
    const match = neonUrl.match(/postgresql:\/\/([^:]+):([^@]+)@([^/]+)\/([^?]+)/);
    if (match) {
      const [, user, password, hostWithPort] = match;
      const cleanHost = hostWithPort.replace('-pooler', '');
      const sqlApiEndpoint = `https://${cleanHost}/sql`;

      // Combine service and message cleanly so all detail is stored in 'service' column
      const serviceDetail = payload.message 
        ? `${payload.service || 'General Inquiry'} (Message: ${payload.message})`
        : (payload.service || 'General Inquiry');

      const query = `
        INSERT INTO leads (name, email, phone, service)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
      `;

      const params = [
        payload.name,
        payload.email,
        payload.phone || 'Not provided',
        serviceDetail
      ];

      const response = await fetch(sqlApiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${password}`
        },
        body: JSON.stringify({ query, params })
      });

      if (response.ok) {
        const resData = await response.json();
        console.log('✅ Lead saved to Neon Cloud Database:', resData);
        return true;
      } else {
        const errText = await response.text();
        console.warn('Neon Cloud DB Error:', errText);
      }
    }
  } catch (err) {
    console.warn('Neon Cloud save notice:', err);
  }
  return false;
};

export const submitLeadToDatabase = async (payload: LeadPayload) => {
  const newLead = {
    id: Date.now().toString(),
    name: payload.name,
    email: payload.email,
    phone: payload.phone || 'Not provided',
    service: payload.service || 'General Marketing Audit',
    preferredExecutive: payload.preferredExecutive || 'Mohamed Thariq (+91 86087 24931)',
    message: payload.message || '',
    createdAt: new Date().toISOString()
  };

  // 1. Save to local browser master storage
  const existing = getStoredLeads();
  existing.unshift(newLead);
  saveStoredLeads(existing);

  // 2. Save directly to Neon PostgreSQL Cloud Database via HTTPS API
  await saveLeadToNeonCloud(payload);

  // 3. Generate WhatsApp alert URL
  const isMuja = payload.preferredExecutive && payload.preferredExecutive.includes('Muja');
  const targetNumber = isMuja ? '916369480812' : '918608724931';

  const whatsappMsg = encodeURIComponent(
    `🚨 NEW CLIENT LEAD RECEIVED! 🚨\n\n` +
    `👤 Name: ${payload.name}\n` +
    `📧 Email: ${payload.email}\n` +
    `📞 Phone: ${payload.phone || 'N/A'}\n` +
    `🎯 Service Requested: ${payload.service || 'N/A'}\n` +
    `👤 Assigned Executive: ${payload.preferredExecutive || 'Mohamed Thariq'}\n` +
    `💬 Message: ${payload.message || 'N/A'}\n\n` +
    `Saved in Neon PostgreSQL Database`
  );

  return {
    success: true,
    lead: newLead,
    whatsappUrl: `https://wa.me/${targetNumber}?text=${whatsappMsg}`
  };
};

export const fetchLeadsFromDatabase = async () => {
  return getStoredLeads();
};

export const createSampleTestLead = async () => {
  const testPayload: LeadPayload = {
    name: 'Mohamed Thariq (Sample Lead)',
    email: 'tmdigitalgrow@gmail.com',
    phone: '+91 86087 24931',
    service: 'SEO & Performance Marketing',
    preferredExecutive: 'Mohamed Thariq (+91 86087 24931)',
    message: 'Hello TM Digital Team! Testing direct Neon DB saving.'
  };
  return await submitLeadToDatabase(testPayload);
};
