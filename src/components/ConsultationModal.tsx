import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { X, Send, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { submitLeadToDatabase } from '../services/apiService';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ConsultationModal({ isOpen, onClose, defaultService }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService || 'SEO & Performance Marketing',
    preferredExecutive: 'Mohamed Thariq (+91 86087 24931)'
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Save lead directly to Neon Cloud Database via HTTPS API
    const res = await submitLeadToDatabase(formData);
    
    // 2. Open WhatsApp immediately after Neon Cloud insertion completes!
    if (res && res.whatsappUrl) {
      window.location.href = res.whatsappUrl;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md">
      <motion.div
        data-lenis-prevent="true"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="glass-card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-xl w-full relative shadow-2xl overflow-y-auto modal-scrollable overscroll-contain touch-pan-y max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-[#2563EB]"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-6">
            <div className="w-20 h-20 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-[#111827] dark:text-white">
              Lead Sent to Mohamed Thariq!
            </h3>
            <p className="text-sm text-[#64748B] dark:text-slate-300 max-w-md mx-auto">
              Thank you, {formData.name}. Opening WhatsApp to send your request directly to Mohamed Thariq (+91 86087 24931).
            </p>

            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-btn font-semibold px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE57] text-white text-xs shadow-lg hover:scale-105 transition-transform"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Open WhatsApp to Mohamed Thariq</span>
              </a>
            )}

            <div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="font-btn font-semibold px-6 py-3 rounded-xl bg-[#2563EB] text-white text-xs shadow-md mt-2"
              >
                Done & Close
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-[#2563EB] text-xs font-bold border border-blue-200 dark:border-blue-800">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book Free Consultation</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-[#111827] dark:text-white">
                Book Your Growth Audit
              </h3>
              <p className="text-xs text-[#64748B] dark:text-slate-300">
                Discuss your business goals directly with Mohamed Thariq or Muja.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#111827] dark:text-slate-300 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl glass-card text-[#111827] dark:text-white text-xs focus:outline-none focus:border-[#2563EB] border border-slate-200 dark:border-slate-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#111827] dark:text-slate-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl glass-card text-[#111827] dark:text-white text-xs focus:outline-none focus:border-[#2563EB] border border-slate-200 dark:border-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111827] dark:text-slate-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 86087 24931"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl glass-card text-[#111827] dark:text-white text-xs focus:outline-none focus:border-[#2563EB] border border-slate-200 dark:border-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#111827] dark:text-slate-300 mb-1">Preferred Contact Person</label>
                <select
                  value={formData.preferredExecutive}
                  onChange={(e) => setFormData({ ...formData, preferredExecutive: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl glass-card text-[#111827] dark:text-slate-200 text-xs focus:outline-none focus:border-[#2563EB] border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F172A]"
                >
                  <option value="Mohamed Thariq (+91 86087 24931)">Mohamed Thariq (+91 86087 24931)</option>
                  <option value="Muja (+91 63694 80812)">Muja (+91 63694 80812)</option>
                </select>
              </div>

              <button
                type="submit"
                className="font-btn font-semibold w-full py-3.5 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 mt-4"
              >
                <Send className="w-4 h-4" />
                <span>Confirm & Submit</span>
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}
