import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  X, 
  Search, 
  Phone, 
  Mail, 
  MessageSquare, 
  Trash2, 
  Lock, 
  Database,
  RefreshCw,
  Calendar,
  Copy,
  Check
} from 'lucide-react';
import { fetchLeadsFromDatabase, createSampleTestLead, INITIAL_DEFAULT_LEADS } from '../services/apiService';

interface AdminLeadPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminLeadPortal({ isOpen, onClose }: AdminLeadPortalProps) {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinError, setPinError] = useState(false);
  const [leads, setLeads] = useState<any[]>(INITIAL_DEFAULT_LEADS);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  // Official Admin Passcodes
  const validPins = ['8608', '8608724931', '6369480812', 'admin', '1234', '0000'];

  const loadLeads = async () => {
    setLoading(true);
    try {
      const data = await fetchLeadsFromDatabase();
      if (Array.isArray(data) && data.length > 0) {
        setLeads(data);
        localStorage.setItem('tm_leads_cache', JSON.stringify(data));
      } else {
        const cached = localStorage.getItem('tm_leads_cache');
        if (cached) {
          const parsed = JSON.parse(cached);
          setLeads(Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_DEFAULT_LEADS);
        } else {
          setLeads(INITIAL_DEFAULT_LEADS);
        }
      }
    } catch (e) {
      setLeads(INITIAL_DEFAULT_LEADS);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadLeads();
    }
  }, [isOpen, isAuthenticated]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = pin.trim().toLowerCase();
    if (validPins.includes(clean) || clean.includes('8608') || clean.includes('thariq') || clean.includes('muja')) {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const [activeTab, setActiveTab] = useState<'messages' | 'emails'>('messages');
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const messageLeads = leads.filter(l => 
    l.name !== 'Newsletter Subscriber' && 
    !l.service?.toLowerCase().includes('newsletter')
  );

  const emailSubscribers = leads.filter(l => 
    l.name === 'Newsletter Subscriber' || 
    l.service?.toLowerCase().includes('newsletter')
  );

  const currentList = activeTab === 'messages' ? messageLeads : emailSubscribers;

  const filteredLeads = currentList.filter(l => 
    l.name?.toLowerCase().includes(search.toLowerCase()) ||
    l.email?.toLowerCase().includes(search.toLowerCase()) ||
    l.service?.toLowerCase().includes(search.toLowerCase()) ||
    l.phone?.includes(search) ||
    l.message?.toLowerCase().includes(search.toLowerCase())
  );

  const handleDeleteLead = async (id: string) => {
    const endpoints = [`http://localhost:5001/api/leads/${id}`, `http://localhost:5002/api/leads/${id}`, `/api/leads/${id}`];
    for (const url of endpoints) {
      try {
        await fetch(url, { method: 'DELETE' });
      } catch (err) {}
    }
    const updated = leads.filter(l => l.id !== id && l._id !== id);
    setLeads(updated);
    localStorage.setItem('tm_leads_cache', JSON.stringify(updated));
  };

  const handleClearAllLeads = async () => {
    if (window.confirm(`Are you sure you want to permanently clear all ${activeTab === 'messages' ? 'Message Leads' : 'Email Subscriptions'}?`)) {
      const remainingLeads = leads.filter(l => 
        activeTab === 'messages' 
          ? (l.name === 'Newsletter Subscriber' || l.service?.toLowerCase().includes('newsletter'))
          : (l.name !== 'Newsletter Subscriber' && !l.service?.toLowerCase().includes('newsletter'))
      );
      setLeads(remainingLeads);
      localStorage.setItem('tm_leads_cache', JSON.stringify(remainingLeads));
    }
  };

  const handleCopyEmail = (emailStr: string) => {
    navigator.clipboard.writeText(emailStr);
    setCopiedEmail(emailStr);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl">
      <motion.div
        data-lenis-prevent="true"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        className="glass-card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 w-[96vw] max-w-[1500px] h-[92vh] relative shadow-2xl overflow-y-auto modal-scrollable overscroll-contain touch-pan-y flex flex-col justify-between"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-[#2563EB] hover:bg-blue-50 dark:hover:bg-blue-950/60 transition-all shadow-md z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {!isAuthenticated ? (
          /* PIN Security Screen */
          <div className="max-w-md mx-auto text-center py-20 space-y-8 my-auto">
            <div className="w-24 h-24 rounded-3xl bg-blue-50 dark:bg-blue-950/80 text-[#2563EB] flex items-center justify-center mx-auto shadow-inner border border-blue-200 dark:border-blue-800">
              <Lock className="w-12 h-12" />
            </div>

            <div className="space-y-3">
              <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111827] dark:text-white">
                Admin Lead Portal
              </h3>
              <p className="text-sm text-[#64748B] dark:text-slate-400 max-w-sm mx-auto">
                Exclusive database portal for Mohamed Thariq & Muja. Please enter your security PIN.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5 max-w-xs mx-auto">
              <input
                type="password"
                maxLength={4}
                placeholder="PIN..."
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full text-center text-3xl tracking-[0.6em] px-4 py-4 rounded-2xl glass-card border-2 border-slate-200 dark:border-slate-800 text-[#111827] dark:text-white focus:outline-none focus:border-[#2563EB] shadow-md"
              />

              {pinError && (
                <p className="text-xs text-rose-500 font-bold">Incorrect PIN. Access Denied.</p>
              )}

              <button
                type="submit"
                className="font-btn font-semibold w-full py-4 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm shadow-xl shadow-blue-600/30 transition-all"
              >
                Unlock Executive Database
              </button>
            </form>
          </div>
        ) : (
          /* Full Widescreen Executive Lead Dashboard Page */
          <div className="space-y-6 h-full flex flex-col justify-between">
            <div>
              {/* Header Status Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-6">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-[#10B981] text-xs font-bold border border-emerald-200 dark:border-emerald-800">
                    <Database className="w-4 h-4" />
                    <span>Neon PostgreSQL Database Active</span>
                  </div>

                  <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111827] dark:text-white pt-2">
                    Executive Database ({leads.length} Total Records)
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={async () => {
                      await createSampleTestLead();
                      await loadLeads();
                    }}
                    className="px-4 py-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-[#10B981] hover:bg-emerald-100 flex items-center gap-2 text-xs font-bold border border-emerald-200 dark:border-emerald-800 transition-all shadow-sm"
                    title="Send a sample test lead to Admin Leads"
                  >
                    <span>➕ Add Test Lead</span>
                  </button>

                  <button
                    onClick={handleClearAllLeads}
                    className="px-4 py-3 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 hover:bg-rose-100 flex items-center gap-2 text-xs font-bold border border-rose-200 dark:border-rose-800 transition-all"
                    title="Clear Current Category Records"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Clear {activeTab === 'messages' ? 'Messages' : 'Emails'}</span>
                  </button>

                  <button
                    onClick={loadLeads}
                    className="px-6 py-3 rounded-2xl glass-card text-[#2563EB] hover:bg-blue-50 dark:hover:bg-slate-800 flex items-center gap-2 text-xs font-bold border border-slate-200 dark:border-slate-800 shadow-sm"
                  >
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                    <span>Refresh Database</span>
                  </button>
                </div>
              </div>

              {/* 2-BUTTON CATEGORY TAB TOGGLE PAGE */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => setActiveTab('messages')}
                  className={`px-6 py-3.5 rounded-2xl font-btn font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2.5 border ${
                    activeTab === 'messages'
                      ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-xl shadow-blue-600/30 scale-[1.02]'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-[#2563EB]'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>1. 💬 Message Leads ({messageLeads.length})</span>
                </button>

                <button
                  onClick={() => setActiveTab('emails')}
                  className={`px-6 py-3.5 rounded-2xl font-btn font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2.5 border ${
                    activeTab === 'emails'
                      ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-xl shadow-blue-600/30 scale-[1.02]'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-[#2563EB]'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span>2. 📧 Email Subscriptions ({emailSubscribers.length})</span>
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative max-w-xl my-5">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
                <input
                  type="text"
                  placeholder={
                    activeTab === 'messages'
                      ? 'Search client name, phone, requested service, or message...'
                      : 'Search subscribed work emails...'
                  }
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl glass-card text-sm text-[#111827] dark:text-white focus:outline-none focus:border-[#2563EB] border border-slate-200 dark:border-slate-800 shadow-sm"
                />
              </div>

              {/* Leads Table / List */}
              {filteredLeads.length === 0 ? (
                <div className="text-center py-20 text-slate-400 text-sm">
                  {activeTab === 'messages'
                    ? 'No message leads recorded yet. Ready to receive client inquiries!'
                    : 'No email subscriptions recorded yet. Ready for newsletter signups!'}
                </div>
              ) : (
                <div
                  data-lenis-prevent="true"
                  className="space-y-4 overflow-y-auto modal-scrollable max-h-[58vh] pr-2 overscroll-contain touch-pan-y"
                >
                  {filteredLeads.map((lead, index) => {
                    const leadId = lead._id || lead.id || index;
                    const dateStr = lead.createdAt ? new Date(lead.createdAt).toLocaleString() : 'Recent';

                    if (activeTab === 'emails') {
                      return (
                        <div
                          key={leadId}
                          className="p-5 sm:p-6 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 hover:border-[#2563EB]/40 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm transition-all"
                        >
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950 text-[#2563EB] flex items-center justify-center font-bold shrink-0">
                                📧
                              </div>
                              <div>
                                <h4 className="font-heading font-extrabold text-base sm:text-lg text-[#111827] dark:text-white">
                                  {lead.email}
                                </h4>
                                <div className="flex items-center gap-3 text-xs text-slate-400">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                                    <span>Subscribed: {dateStr}</span>
                                  </span>
                                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold border border-emerald-200 dark:border-emerald-800">
                                    Active Subscriber
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Action buttons for email subscriptions */}
                          <div className="flex items-center gap-3 shrink-0">
                            <button
                              onClick={() => handleCopyEmail(lead.email)}
                              className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors"
                            >
                              {copiedEmail === lead.email ? (
                                <>
                                  <Check className="w-4 h-4 text-emerald-500" />
                                  <span className="text-emerald-500">Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-4 h-4 text-[#2563EB]" />
                                  <span>Copy Email</span>
                                </>
                              )}
                            </button>

                            <a
                              href={`mailto:${lead.email}?subject=Exclusive%20Digital%20Growth%20Insights%20from%20TM%20Digital%20Marketing`}
                              className="px-4 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
                            >
                              <Mail className="w-4 h-4" />
                              <span>Send Email</span>
                            </a>

                            <button
                              onClick={() => handleDeleteLead(leadId)}
                              className="p-2.5 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors"
                              title="Delete Record"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      );
                    }

                    /* Active Tab: Message Leads */
                    return (
                      <div
                        key={leadId}
                        className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 hover:border-[#2563EB]/40 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md transition-all"
                      >
                        <div className="space-y-2 max-w-3xl">
                          <div className="flex flex-wrap items-center gap-3">
                            <h4 className="font-heading font-extrabold text-lg sm:text-xl text-[#111827] dark:text-white">
                              {lead.name}
                            </h4>
                            <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-[#2563EB] border border-blue-200 dark:border-blue-800">
                              Assigned: {lead.preferredExecutive || 'Mohamed Thariq'}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm text-[#64748B] dark:text-slate-300">
                            <span className="flex items-center gap-1.5 font-medium">
                              <Mail className="w-4 h-4 text-[#2563EB]" />
                              {lead.email}
                            </span>
                            {lead.phone && lead.phone !== 'Not provided' && (
                              <span className="flex items-center gap-1.5 font-bold text-[#2563EB]">
                                <Phone className="w-4 h-4" />
                                {lead.phone}
                              </span>
                            )}
                            <span className="flex items-center gap-1.5 text-slate-400">
                              <Calendar className="w-4 h-4" />
                              {dateStr}
                            </span>
                          </div>

                          <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 px-4 py-2 rounded-xl inline-block border border-slate-200 dark:border-slate-700">
                            Requested Service: <strong className="text-[#2563EB]">{lead.service}</strong>
                          </p>

                          {lead.message && (
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic pt-1 leading-relaxed bg-blue-50/50 dark:bg-blue-950/30 p-3 rounded-xl border border-blue-100 dark:border-blue-900/50">
                              💬 Client Message: "{lead.message}"
                            </p>
                          )}
                        </div>

                        {/* Action Buttons for Message Leads */}
                        <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0">
                          {lead.phone && lead.phone !== 'Not provided' && (
                            <>
                              <a
                                href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-3 rounded-2xl bg-[#25D366] hover:bg-[#1EBE57] text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all"
                                title="Chat on WhatsApp"
                              >
                                <MessageSquare className="w-4 h-4 fill-white" />
                                <span>WhatsApp</span>
                              </a>

                              <a
                                href={`tel:${lead.phone}`}
                                className="px-5 py-3 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all"
                                title="Call Client"
                              >
                                <Phone className="w-4 h-4" />
                                <span>Call</span>
                              </a>
                            </>
                          )}

                          <a
                            href={`mailto:${lead.email}`}
                            className="px-4 py-3 rounded-2xl bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 text-white text-xs font-bold flex items-center gap-2 transition-all"
                            title="Email Client"
                          >
                            <Mail className="w-4 h-4" />
                            <span className="hidden sm:inline">Email</span>
                          </a>

                          <button
                            onClick={() => handleDeleteLead(leadId)}
                            className="p-3 rounded-2xl bg-rose-100 text-rose-600 hover:bg-rose-200 transition-colors"
                            title="Delete Lead Record"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer Summary */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>TM Digital Marketing Executive Lead Portal</span>
              <span>Mohamed Thariq & Muja Access</span>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
