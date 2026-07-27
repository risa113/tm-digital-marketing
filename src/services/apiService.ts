export interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  preferredExecutive?: string;
  message?: string;
}

export const submitLeadToDatabase = async (payload: LeadPayload) => {
  const newLead = {
    id: Date.now().toString(),
    name: payload.name,
    email: payload.email,
    phone: payload.phone || '',
    service: payload.service || '',
    preferredExecutive: payload.preferredExecutive || 'Mohamed Thariq (+91 86087 24931)',
    message: payload.message || '',
    createdAt: new Date().toISOString()
  };

  // Send lead directly to MongoDB backend Express server endpoint
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (data && data.whatsappUrl) {
      return data;
    }
  } catch (error) {
    console.warn('[MongoDB Server] Server offline, using fallback route:', error);
  }

  // Direct WhatsApp alert URL to Mohamed Thariq (+91 86087 24931)
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
    `Sent from TM Digital Marketing Website`
  );

  return {
    success: true,
    lead: newLead,
    whatsappUrl: `https://wa.me/${targetNumber}?text=${whatsappMsg}`
  };
};

export const fetchLeadsFromDatabase = async () => {
  // Fetch real-time client lead messages from MongoDB backend
  try {
    const response = await fetch('/api/leads');
    const data = await response.json();
    if (data.success && data.leads) {
      return data.leads;
    }
  } catch (error) {
    console.warn('[MongoDB Server] Fetch offline fallback');
  }
  return [];
};
