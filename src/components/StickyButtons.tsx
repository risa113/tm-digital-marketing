import { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from '../data/marketingData';

export default function StickyButtons() {
  const [showCallMenu, setShowCallMenu] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const whatsappMessage = encodeURIComponent(
    'Hi TM Digital Marketing team! I am interested in scaling my business with your services. Let us connect!'
  );

  return (
    <>
      {/* Floating Action Buttons (Left) */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/918608724931?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-emerald-600/30 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
          <span className="absolute left-full ml-3 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Chat on WhatsApp
          </span>
        </a>

        {/* Floating Founder Call Button */}
        <div className="relative">
          {showCallMenu && (
            <div className="absolute bottom-full mb-3 left-0 bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-2 min-w-[230px]">
              <p className="text-[10px] uppercase font-extrabold tracking-wider text-[#2563EB] px-2">Call Agency Founders</p>
              {CONTACT_INFO.contacts.map((c) => (
                <a
                  key={c.name}
                  href={`tel:${c.phone}`}
                  className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/60 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                >
                  <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-blue-400/50 shadow-sm bg-slate-100 dark:bg-slate-800">
                    <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold">{c.name}</p>
                    <p className="text-[10px] text-[#2563EB] font-semibold">{c.role}</p>
                  </div>
                </a>
              ))}
            </div>
          )}

          <button
            onClick={() => setShowCallMenu(!showCallMenu)}
            className="group relative p-3.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-xl shadow-blue-600/30 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
            title="Call Founders Directly"
            aria-label="Call Founders Directly"
          >
            <Phone className="w-5 h-5" />
            <span className="absolute left-full ml-3 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
              Call Mohamed Thariq / Muja
            </span>
          </button>
        </div>
      </div>

      {/* Floating Scroll-To-Top Button (Right) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-slate-900/90 dark:bg-slate-800/90 hover:bg-[#2563EB] dark:hover:bg-[#2563EB] text-white backdrop-blur-md border border-slate-700 shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
          title="Scroll to Top"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
