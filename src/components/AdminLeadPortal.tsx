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
  Calendar
} from 'lucide-react';
import { fetchLeadsFromDatabase } from '../services/apiService';

interface AdminLeadPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminLeadPortal({ isOpen, onClose }: AdminLeadPortalProps) {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinError, setPinError] = useState(false);
  const [leads, setLeads] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  // Official Admin Passcode: 8608
  const validPins = ['8608'];

  const loadLeads = async () => {
    setLoading(true);
    const data = await fetchLeadsFromDatabase();
    setLeads(data);
    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadLeads();
    }
  }, [isAuthenticated]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (validPins.includes(pin)) {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const filteredLeads = leads.filter(l => 
    l.name.toLowerCase().includes(search.toLowerCase()) ||
    l.email.toLowerCase().includes(search.toLowerCase()) ||
    l.service.toLowerCase().includes(search.toLowerCase()) ||
    l.phone.includes(search)
  );

  const handleDeleteLead = async (id: string) => {
    try {
      await fetch(`/api/leads/${id}`, { method: 'DELETE' });
    } catch (err) {
      console.warn(err);
    }
    const updated = leads.filter(l => l.id !== id);
    setLeads(updated);
    localStorage.setItem('tm_leads', JSON.stringify(updated));
  };

  const handleClearAllLeads = async () => {
    if (window.confirm('Are you sure you want to clear all lead records from MongoDB database?')) {
      try {
        await fetch('/api/leads/clear', { method: 'POST' });
      } catch (err) {
        console.warn(err);
      }
      setLeads([]);
      localStorage.removeItem('tm_leads');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        className="glass-card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 w-[96vw] max-w-[1500px] h-[92vh] relative shadow-2xl overflow-y-auto flex flex-col justify-between"
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
          <div className="space-y-8 h-full flex flex-col justify-between">
            <div>
              {/* Header Status Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-6">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-[#10B981] text-xs font-bold border border-emerald-200 dark:border-emerald-800">
                    <Database className="w-4 h-4" />
                    <span>MongoDB Database Connected</span>
                  </div>

                  <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111827] dark:text-white pt-2">
                    MongoDB Client Leads ({leads.length} Records)
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleClearAllLeads}
                    className="px-4 py-3 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 hover:bg-rose-100 flex items-center gap-2 text-xs font-bold border border-rose-200 dark:border-rose-800 transition-all"
                    title="Clear All Lead Records"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Clear All Leads</span>
                  </button>

                  <button
                    onClick={loadLeads}
                    className="px-6 py-3 rounded-2xl glass-card text-[#2563EB] hover:bg-blue-50 dark:hover:bg-slate-800 flex items-center gap-2 text-xs font-bold border border-slate-200 dark:border-slate-800 shadow-sm"
                  >
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                    <span>Sync MongoDB Leads</span>
                  </button>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative max-w-xl my-6">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
                <input
                  type="text"
                  placeholder="Search MongoDB leads by client name, email, service, or phone..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl glass-card text-sm text-[#111827] dark:text-white focus:outline-none focus:border-[#2563EB] border border-slate-200 dark:border-slate-800 shadow-sm"
                />
              </div>

              {/* Leads Table / List */}
              {filteredLeads.length === 0 ? (
                <div className="text-center py-20 text-slate-400 text-sm">
                  No lead records in MongoDB database. Ready to receive client messages!
                </div>
              ) : (
                <div className="space-y-4 overflow-y-auto max-h-[60vh] pr-2">
                  {filteredLeads.map((lead) => (
                    <div
                      key={lead.id}
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
                          <span className="flex items-center gap-1.5 font-bold text-[#2563EB]">
                            <Phone className="w-4 h-4" />
                            {lead.phone}
                          </span>
                          <span className="flex items-center gap-1.5 text-slate-400">
                            <Calendar className="w-4 h-4" />
                            {new Date(lead.createdAt).toLocaleString()}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/60 px-4 py-2 rounded-xl inline-block border border-slate-200 dark:border-slate-700">
                          Requested Service: <strong className="text-[#2563EB]">{lead.service}</strong>
                        </p>

                        {lead.message && (
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic pt-1 leading-relaxed">
                            "{lead.message}"
                          </p>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0">
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

                        <a
                          href={`mailto:${lead.email}`}
                          className="px-4 py-3 rounded-2xl bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 text-white text-xs font-bold flex items-center gap-2 transition-all"
                          title="Email Client"
                        >
                          <Mail className="w-4 h-4" />
                          <span className="hidden sm:inline">Email</span>
                        </a>

                        <button
                          onClick={() => handleDeleteLead(lead.id)}
                          className="p-3 rounded-2xl bg-rose-100 text-rose-600 hover:bg-rose-200 transition-colors"
                          title="Delete Lead Record"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Summary */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>TM Digital Marketing Executive Lead Portal (MongoDB Cloud/Local)</span>
              <span>Mohamed Thariq & Muja Access</span>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
