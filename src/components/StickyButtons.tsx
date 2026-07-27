import React, { useState } from 'react';
import { Phone, MessageSquare, User, ChevronUp } from 'lucide-react';
import { CONTACT_INFO } from '../data/marketingData';

export default function StickyButtons() {
  const [showCallMenu, setShowCallMenu] = useState(false);

  const whatsappMessage = encodeURIComponent(
    'Hi TM Digital Marketing! I am interested in growing my business with your services.'
  );

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
      {/* Sticky WhatsApp Button */}
      <a
        href={`https://wa.me/918608724931?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative p-3.5 rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-600/30 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-white" />
        <span className="absolute left-full ml-3 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Chat on WhatsApp
        </span>
      </a>

      {/* Sticky Book Call Button */}
      <div className="relative">
        {showCallMenu && (
          <div className="absolute bottom-full mb-3 left-0 glass-card p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-2 min-w-[220px]">
            <p className="text-[10px] uppercase font-extrabold tracking-wider text-[#2563EB] px-2">Select Executive to Call</p>
            {CONTACT_INFO.contacts.map((c) => (
              <a
                key={c.name}
                href={`tel:${c.phone}`}
                className="flex items-center gap-2 p-2 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/60 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors"
              >
                <User className="w-4 h-4 text-[#2563EB]" />
                <div>
                  <p>{c.name}</p>
                  <p className="text-[10px] text-[#2563EB] font-normal">{c.formattedPhone}</p>
                </div>
              </a>
            ))}
          </div>
        )}

        <button
          onClick={() => setShowCallMenu(!showCallMenu)}
          className="group relative p-3.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-xl shadow-blue-600/30 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
          title="Call Us Directly"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute left-full ml-3 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Call Mohamed Thariq / Muja
          </span>
        </button>
      </div>
    </div>
  );
}
