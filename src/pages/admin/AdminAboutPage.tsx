import React, { useState, useEffect } from 'react';
import { Save, CheckCircle2, UserCheck, ShieldCheck } from 'lucide-react';
import { CMSService, CMSAboutContent } from '../../services/cmsService';

export default function AdminAboutPage() {
  const [content, setContent] = useState<CMSAboutContent>(CMSService.getAboutContent());
  const [savedMessage, setSavedMessage] = useState(false);

  useEffect(() => {
    setContent(CMSService.getAboutContent());
  }, []);

  const handleChange = (field: keyof CMSAboutContent, value: any) => {
    setContent((prev) => ({ ...prev, [field]: value }));
  };

  const handleValuesChange = (valStr: string) => {
    const list = valStr.split('\n').map((v) => v.trim()).filter(Boolean);
    setContent((prev) => ({ ...prev, values: list }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    CMSService.saveAboutContent(content);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            About Us & Founders Story
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Edit the agency narrative, company mission, core values, and founders accountability pledge.
          </p>
        </div>

        {savedMessage && (
          <div className="px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-800 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>About Us updated live!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6 text-xs">
        
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <UserCheck className="w-4 h-4 text-[#2563EB]" />
            <h2 className="font-heading font-extrabold text-base text-slate-900 dark:text-white">
              Company Narrative & Mission
            </h2>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">Badge Tag</label>
              <input
                type="text"
                value={content.badge}
                onChange={(e) => handleChange('badge', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">Section Title</label>
              <input
                type="text"
                value={content.title}
                onChange={(e) => handleChange('title', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none font-bold"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">Company Overview Story</label>
              <textarea
                rows={3}
                value={content.description}
                onChange={(e) => handleChange('description', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none leading-relaxed"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Mission Statement</label>
                <textarea
                  rows={3}
                  value={content.mission}
                  onChange={(e) => handleChange('mission', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none leading-relaxed"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Vision Statement</label>
                <textarea
                  rows={3}
                  value={content.vision}
                  onChange={(e) => handleChange('vision', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none leading-relaxed"
                />
              </div>
            </div>

            <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
              <label className="font-bold text-slate-700 dark:text-slate-300">Core Agency Values (One per line)</label>
              <textarea
                rows={5}
                value={content.values.join('\n')}
                onChange={(e) => handleValuesChange(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none font-mono"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>Save About Us Content</span>
          </button>
        </div>

      </form>

    </div>
  );
}
