import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES, ServiceItem } from '../data/marketingData';
import { 
  Search, 
  Share2, 
  Target, 
  TrendingUp, 
  Code, 
  Palette, 
  Sparkles, 
  Video, 
  FileText, 
  MessageSquare, 
  Mail, 
  Bot, 
  ArrowRight, 
  X,
  CheckCircle2
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const iconMap: Record<string, any> = {
    Search,
    Share2,
    Target,
    TrendingUp,
    Code,
    Palette,
    Sparkles,
    Video,
    FileText,
    MessageSquare,
    Mail,
    Bot
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F8FAFC] dark:bg-[#0F172A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-xs font-bold text-[#2563EB] border border-blue-200 dark:border-blue-800">
            <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>12 PREMIUM SERVICES</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#111827] dark:text-white tracking-tight leading-tight">
            High-Performance Digital <span className="gradient-text">Marketing Solutions</span>
          </h2>
          <p className="text-[#64748B] dark:text-slate-300 text-sm sm:text-lg">
            Engineered to generate leads, increase revenue, and scale your brand identity.
          </p>
        </div>

        {/* 10 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: (index % 3) * 0.05 }}
                onClick={() => setSelectedService(service)}
                className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl cursor-pointer group relative flex flex-col justify-between border border-slate-200 dark:border-slate-800 hover:border-[#2563EB]/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300 shadow-md">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#111827] dark:text-white mb-2.5 group-hover:text-[#2563EB] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#10B981]">{service.metric}</span>
                  <div className="flex items-center gap-1 text-xs font-semibold text-[#2563EB] group-hover:translate-x-1 transition-transform">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-[#2563EB]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#2563EB]">
                  {selectedService.tag}
                </span>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#111827] dark:text-white">
                  {selectedService.title}
                </h3>

                <p className="text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">
                  {selectedService.fullDesc}
                </p>

                <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#64748B] dark:text-slate-400">Target Outcome</p>
                    <p className="text-base font-bold text-[#2563EB]">{selectedService.metric}</p>
                  </div>
                  <button
                    onClick={() => {
                      const item = selectedService;
                      setSelectedService(null);
                      onSelectService(item);
                    }}
                    className="font-btn font-semibold px-5 py-2.5 rounded-xl bg-[#2563EB] text-white text-xs shadow-md hover:bg-[#1D4ED8]"
                  >
                    Inquire for This Service
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
