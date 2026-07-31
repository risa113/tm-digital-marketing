import { db, collection, addDoc, serverTimestamp, isFirebaseConfigured } from '../lib/firebase';

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
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (err) {}
  return [];
};

export const saveStoredLeads = (leads: any[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
  } catch (err) {
    console.warn('Storage error:', err);
  }
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

  // 1. Save to local browser storage fallback
  const existing = getStoredLeads();
  existing.unshift(newLead);
  saveStoredLeads(existing);

  // 2. Direct Firebase Firestore Saving
  if (isFirebaseConfigured() && db) {
    try {
      const docRef = await addDoc(collection(db, 'leads'), {
        name: payload.name,
        email: payload.email,
        phone: payload.phone || 'Not provided',
        service: payload.service || 'General Marketing Audit',
        preferredExecutive: payload.preferredExecutive || 'Mohamed Thariq (+91 86087 24931)',
        message: payload.message || '',
        createdAt: serverTimestamp()
      });
      console.log('🔥 Lead directly saved to Firebase Firestore ID:', docRef.id);
    } catch (firebaseErr) {
      console.warn('⚠️ Firebase save attempt:', firebaseErr);
    }
  } else {
    console.log('ℹ️ Firebase credentials not detected in .env yet. Saved locally.');
  }

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
    `💬 Message: ${payload.message || 'N/A'}\n`
  );

  return {
    success: true,
    lead: newLead,
    whatsappUrl: `https://wa.me/${targetNumber}?text=${whatsappMsg}`
  };
};
