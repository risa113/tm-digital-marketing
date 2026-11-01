import React, { useState, useEffect } from 'react';
import { Save, CheckCircle2, Home, Sparkles } from 'lucide-react';
import { CMSService, CMSHomeContent } from '../../services/cmsService';

export default function AdminHomePage() {
  const [content, setContent] = useState<CMSHomeContent>(CMSService.getHomeContent());
  const [savedMessage, setSavedMessage] = useState(false);

  useEffect(() => {
    setContent(CMSService.getHomeContent());
  }, []);

  const handleChange = (field: keyof CMSHomeContent, value: any) => {
    setContent((prev) => ({ ...prev, [field]: value }));
  };

  const handleStatChange = (index: number, field: string, value: string) => {
    const updatedStats = [...content.heroStats];
    updatedStats[index] = { ...updatedStats[index], [field]: value };
    setContent((prev) => ({ ...prev, heroStats: updatedStats }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    CMSService.saveHomeContent(content);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  return (
    <div className="space-y-6">
      
      {/* Header with Sticky Save Option */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Homepage Content Management
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Edit hero headlines, badges, call-to-actions, and statistics counters with immediate live updates.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {savedMessage && (
            <div className="px-3.5 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-800 flex items-center gap-1.5 animate-fade-in">
              <CheckCircle2 className="w-4 h-4" />
              <span>Saved live!</span>
            </div>
          )}
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-md shadow-blue-600/30 cursor-pointer active:scale-95 transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        
        {/* Hero Section Card */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <Sparkles className="w-4 h-4 text-[#2563EB]" />
            <h2 className="font-heading font-extrabold text-base text-slate-900 dark:text-white">
              Hero Header Configuration
            </h2>
          </div>

          <div className="space-y-4 text-xs">
            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">Top Badge Text</label>
              <input
                type="text"
                value={content.badge}
                onChange={(e) => handleChange('badge', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Main Heading (Part 1)</label>
                <input
                  type="text"
                  value={content.heroHeading}
                  onChange={(e) => handleChange('heroHeading', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Heading Gradient Highlight</label>
                <input
                  type="text"
                  value={content.heroHeadingHighlight}
                  onChange={(e) => handleChange('heroHeadingHighlight', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none text-[#2563EB] font-bold"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">Hero Subtitle & Value Proposition</label>
              <textarea
                rows={3}
                value={content.heroSubtitle}
                onChange={(e) => handleChange('heroSubtitle', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none leading-relaxed"
              />
            </div>

            {/* CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="space-y-2">
                <label className="font-bold text-slate-700 dark:text-slate-300">Primary CTA Button</label>
                <input
                  type="text"
                  value={content.primaryCtaText}
                  onChange={(e) => handleChange('primaryCtaText', e.target.value)}
                  placeholder="Button Label"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none mb-1.5"
                />
                <input
                  type="text"
                  value={content.primaryCtaLink}
                  onChange={(e) => handleChange('primaryCtaLink', e.target.value)}
                  placeholder="Target Link / Hash"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none font-mono text-[11px]"
                />
              </div>

              <div className="space-y-2">
                <label className="font-bold text-slate-700 dark:text-slate-300">Secondary CTA Button</label>
                <input
                  type="text"
                  value={content.secondaryCtaText}
                  onChange={(e) => handleChange('secondaryCtaText', e.target.value)}
                  placeholder="Button Label"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none mb-1.5"
                />
                <input
                  type="text"
                  value={content.secondaryCtaLink}
                  onChange={(e) => handleChange('secondaryCtaLink', e.target.value)}
                  placeholder="Target Link / Route"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none font-mono text-[11px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Statistics Counters */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4 shadow-xs">
          <h2 className="font-heading font-extrabold text-base text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800">
            Verified Statistics Counters (4 Metrics)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {content.heroStats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 space-y-2 border border-slate-200/60 dark:border-slate-700">
                <span className="text-[10px] font-bold uppercase text-slate-400">Metric #{idx + 1}</span>
                <input
                  type="text"
                  value={stat.value}
                  onChange={(e) => handleStatChange(idx, 'value', e.target.value)}
                  placeholder="e.g. +340%"
                  className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-extrabold text-[#2563EB] text-base"
                />
                <input
                  type="text"
                  value={stat.label}
                  onChange={(e) => handleStatChange(idx, 'label', e.target.value)}
                  placeholder="Label"
                  className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-bold"
                />
                <input
                  type="text"
                  value={stat.sublabel}
                  onChange={(e) => handleStatChange(idx, 'sublabel', e.target.value)}
                  placeholder="Sublabel"
                  className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[10px] text-slate-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Save Bar */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>Save All Homepage Content</span>
          </button>
        </div>

      </form>

    </div>
  );
}
