import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  User, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { CONTACT_INFO } from '../data/marketingData';
import { submitLeadToDatabase } from '../services/apiService';
import { fadeInUp, fadeInDown, slideInLeft, slideInRight, defaultViewport } from '../utils/animations';

const InstagramIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

interface ContactSectionProps {
  preselectedService?: string;
}

export default function ContactSection({ preselectedService }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || 'SEO (Search Engine Optimization)',
    preferredExecutive: 'Mohamed Thariq (+91 86087 24931)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

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
    <section id="contact" className="py-16 sm:py-24 bg-[#F8FAFC] dark:bg-[#0F172A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Upper to Down & Down to Up) */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-20">
          <motion.div 
            variants={fadeInDown}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-xs font-bold text-[#2563EB] border border-blue-200 dark:border-blue-800"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>CONTACT US</span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            custom={1}
            className="font-heading font-extrabold text-3xl sm:text-5xl text-[#111827] dark:text-white tracking-tight leading-tight"
          >
            Start Your Growth <span className="gradient-text">Journey Today</span>
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            custom={2}
            className="text-[#64748B] dark:text-slate-300 text-sm sm:text-lg"
          >
            Connect directly with Mohamed Thariq and Muja for a free growth consultation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Form (Slide in Left) */}
          <motion.div 
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="lg:col-span-7"
          >
            <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
              {submitted ? (
                <div className="text-center py-10 space-y-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-[#111827] dark:text-white">
                    Lead Sent to Mohamed Thariq!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 max-w-md mx-auto">
                    Thank you, {formData.name}. Opening WhatsApp to send your request directly to Mohamed Thariq (+91 86087 24931).
                  </p>

                  {whatsappUrl && (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 font-btn font-semibold px-6 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1EBE57] text-white text-xs sm:text-sm shadow-xl shadow-emerald-600/30 hover:scale-105 transition-all w-full sm:w-auto"
                    >
                      <MessageSquare className="w-5 h-5 fill-white" />
                      <span>Click to Open WhatsApp to Mohamed Thariq</span>
                    </a>
                  )}

                  <div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="font-btn font-semibold text-xs text-[#2563EB] underline hover:text-[#1D4ED8] mt-4 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#111827] dark:text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl glass-card text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#2563EB] border border-slate-200 dark:border-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#111827] dark:text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl glass-card text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#2563EB] border border-slate-200 dark:border-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#111827] dark:text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 86087 24931"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl glass-card text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#2563EB] border border-slate-200 dark:border-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#111827] dark:text-slate-300 mb-2">
                        Preferred Executive
                      </label>
                      <select
                        value={formData.preferredExecutive}
                        onChange={(e) => setFormData({ ...formData, preferredExecutive: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl glass-card text-[#111827] dark:text-slate-200 text-sm focus:outline-none focus:border-[#2563EB] border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F172A]"
                      >
                        <option value="Mohamed Thariq (+91 86087 24931)">Mohamed Thariq (+91 86087 24931)</option>
                        <option value="Muja (+91 63694 80812)">Muja (+91 63694 80812)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#111827] dark:text-slate-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-card text-[#111827] dark:text-slate-200 text-sm focus:outline-none focus:border-[#2563EB] border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F172A]"
                    >
                      <option value="SEO (Search Engine Optimization)">SEO (Search Engine Optimization)</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Meta Ads (Facebook & Instagram)">Meta Ads (Facebook & Instagram)</option>
                      <option value="Google Ads (Search & Display)">Google Ads (Search & Display)</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Branding & Brand Identity">Branding & Brand Identity</option>
                      <option value="Video Editing & Motion Graphics">Video Editing & Motion Graphics</option>
                      <option value="WhatsApp & Email Marketing">WhatsApp & Email Marketing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#111827] dark:text-slate-300 mb-2">
                      Your Message / Business Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your business goals and marketing requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-card text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#2563EB] border border-slate-200 dark:border-slate-800"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="font-btn font-semibold w-full py-4 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-base shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message to TM Digital</span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right Column: Direct Contact Person Cards & Map (Slide in Right) */}
          <motion.div 
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="lg:col-span-5 space-y-5 sm:space-y-6"
          >
            {/* Founder Contact Cards */}
            {CONTACT_INFO.contacts.map((founder) => (
              <motion.div
                whileHover={{ y: -4 }}
                key={founder.name}
                className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-[#2563EB] transition-all group shadow-md hover:shadow-xl bg-white dark:bg-slate-900 space-y-4"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl p-0.5 bg-gradient-to-tr from-blue-600 to-sky-400 shrink-0 shadow-lg overflow-hidden">
                    <img
                      src={founder.image}
                      alt={`${founder.name} - Agency Founder`}
                      className="w-full h-full object-cover rounded-[14px] group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-heading font-extrabold text-lg sm:text-xl text-[#111827] dark:text-white">
                        {founder.name}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[#2563EB] text-[10px] font-extrabold uppercase tracking-wider">
                        Co-Founder
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-bold text-[#2563EB]">
                      {founder.role}
                    </p>

                    <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-snug">
                      {founder.specialty}
                    </p>
                  </div>
                </div>

                {/* Direct Action Buttons: WhatsApp & Call */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    href={founder.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 sm:py-3 px-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 hover:bg-[#25D366] text-emerald-700 dark:text-emerald-300 hover:text-white border border-emerald-200/80 dark:border-emerald-800/60 text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
                    title={`WhatsApp ${founder.name}`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    href={`tel:${founder.phone}`}
                    className="py-2.5 sm:py-3 px-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 hover:bg-[#2563EB] text-[#2563EB] dark:text-blue-300 hover:text-white border border-blue-200/80 dark:border-blue-800/60 text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
                    title={`Call ${founder.name}`}
                  >
                    <Phone className="w-4 h-4" />
                    <span>{founder.formattedPhone}</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}

            {/* Email Card */}
            <motion.a
              whileHover={{ y: -3 }}
              href={`mailto:${CONTACT_INFO.email}`}
              className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between hover:border-[#2563EB] transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 dark:bg-blue-950 text-[#2563EB] flex items-center justify-center font-bold">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-[#111827] dark:text-white">Email Address</h4>
                  <p className="text-xs text-[#64748B] dark:text-slate-300 font-semibold">{CONTACT_INFO.email}</p>
                </div>
              </div>
              <Mail className="w-5 h-5 text-[#2563EB]" />
            </motion.a>

            {/* Instagram Official Logo Card */}
            <motion.a
              whileHover={{ y: -3 }}
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between hover:border-[#2563EB] transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center font-bold shadow-md">
                  <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6 stroke-white" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-[#111827] dark:text-white">Follow Us on Instagram</h4>
                  <p className="text-xs text-[#2563EB] font-bold">@tm_digital_marketing_</p>
                </div>
              </div>
              <InstagramIcon className="w-5 h-5 stroke-pink-500 group-hover:scale-110 transition-transform" />
            </motion.a>

            {/* Official Google Maps Card */}
            <div className="glass-card rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-lg space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/60 text-red-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-[#111827] dark:text-white">Company Google Map Location</h4>
                    <p className="text-xs text-[#64748B] dark:text-slate-400">TM Digital Marketing HQ</p>
                  </div>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-btn font-semibold w-full py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MapPin className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
