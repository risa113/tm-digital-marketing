import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, Phone, Mail, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/marketingData';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: string[];
}

interface ChatbotWidgetProps {
  onOpenConsultation: () => void;
}

export default function ChatbotWidget({ onOpenConsultation }: ChatbotWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: '👋 Welcome to TM Digital Marketing! I am your 24/7 AI Growth Assistant. How can I help scale your business today?',
      options: [
        '📞 Call Mohamed Thariq (8608724931)',
        '📞 Call Muja (6369480812)',
        '🚀 What services do you offer?',
        '📅 Book Free Consultation'
      ]
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    setTimeout(() => {
      let botReplyText = '';
      let replyOptions: string[] | undefined = undefined;

      const lower = query.toLowerCase();

      if (lower.includes('thariq') || lower.includes('8608724931')) {
        botReplyText = 'You can reach MOHAMED THARIQ directly at +91 86087 24931 or via WhatsApp!';
        replyOptions = ['📅 Book Free Consultation', '🚀 What services do you offer?'];
      } else if (lower.includes('muja') || lower.includes('6369480812')) {
        botReplyText = 'You can reach MUJA directly at +91 63694 80812 or via WhatsApp!';
        replyOptions = ['📅 Book Free Consultation', '🚀 What services do you offer?'];
      } else if (
        lower.includes('service') || 
        lower.includes('offer') || 
        lower.includes('10') || 
        lower.includes('12') || 
        lower.includes('graphic') || 
        lower.includes('ai') || 
        lower.includes('automation')
      ) {
        botReplyText = 'We offer 12 premium services: SEO, Social Media Marketing, Meta Ads, Google Ads, Web Development, Branding, Graphic Design, Video Editing, Content Creation, WhatsApp Marketing, Email Marketing, and AI Automation.';
        replyOptions = ['📅 Book Free Consultation', '📞 Call Mohamed Thariq (8608724931)'];
      } else if (lower.includes('consultation') || lower.includes('book')) {
        botReplyText = 'Opening our consultation booking window for you right now...';
        onOpenConsultation();
      } else {
        botReplyText = `Thank you for asking! For custom growth inquiries about "${query}", you can contact Mohamed Thariq (+91 86087 24931), Muja (+91 63694 80812), or email tmdigitalgrow@gmail.com. We provide 12 premium digital growth services including SEO, Meta Ads, Google Ads, Graphic Design, Web Dev & AI Automation.`;
        replyOptions = ['📅 Book Free Consultation', '🚀 What services do you offer?'];
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botReplyText,
        options: replyOptions
      };

      setMessages((prev) => [...prev, botMsg]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Assistant"
          className="p-4 rounded-2xl bg-[#2563EB] text-white shadow-2xl shadow-blue-600/40 hover:scale-105 transition-transform flex items-center gap-3 group border border-white/20"
        >
          <div className="relative">
            <Bot className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#10B981] border-2 border-[#2563EB]" />
          </div>
          <span className="hidden sm:inline font-heading font-extrabold text-xs tracking-wide">
            AI Assistant
          </span>
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-[340px] sm:w-[380px] h-[500px] rounded-3xl glass-card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-[#2563EB] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm flex items-center gap-1.5">
                    <span>TM Assistant</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </h4>
                  <p className="text-[10px] text-blue-100">24/7 AI Customer Support</p>
                </div>
              </div>

              <button onClick={() => setIsOpen(false)} aria-label="Close AI Assistant" className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div
              data-lenis-prevent="true"
              className="p-4 overflow-y-auto modal-scrollable flex-1 space-y-4 text-xs overscroll-contain touch-pan-y"
            >
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#2563EB] text-white rounded-br-none'
                        : 'glass-card text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.options && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {msg.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSend(opt)}
                          className="px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-[#2563EB] border border-blue-200 dark:border-blue-800 text-[11px] font-semibold transition-all text-left flex items-center gap-1"
                        >
                          <span>{opt}</span>
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask TM Assistant..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2 text-xs text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#2563EB]"
              />
              <button
                onClick={() => handleSend()}
                aria-label="Send message"
                className="p-2.5 rounded-xl bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-md transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
