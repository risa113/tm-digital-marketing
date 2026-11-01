import React, { useState, useEffect } from 'react';
import { Settings, Save, CheckCircle2, Megaphone, ShieldCheck } from 'lucide-react';
import { CMSService, CMSWebsiteSettings } from '../../services/cmsService';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<CMSWebsiteSettings>(CMSService.getWebsiteSettings());
  const [savedMessage, setSavedMessage] = useState(false);

  useEffect(() => {
    setSettings(CMSService.getWebsiteSettings());
  }, []);

  const handleChange = (field: keyof CMSWebsiteSettings, val: any) => {
    setSettings((prev) => ({ ...prev, [field]: val }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    CMSService.saveWebsiteSettings(settings);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Global Website Settings
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Configure agency branding, site-wide announcements, and footer disclaimers.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {savedMessage && (
            <div className="px-3.5 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-800 flex items-center gap-1.5">
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
            <span>Save Settings</span>
          </button>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6 text-xs">
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <Settings className="w-4 h-4 text-[#2563EB]" />
            <h2 className="font-heading font-extrabold text-base text-slate-900 dark:text-white">
              Brand Identity & Global Text
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">Agency Brand Name</label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => handleChange('siteName', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">Brand Tagline</label>
              <input
                type="text"
                value={settings.tagline}
                onChange={(e) => handleChange('tagline', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700 dark:text-slate-300">Footer Agency Summary</label>
            <textarea
              rows={3}
              value={settings.footerText}
              onChange={(e) => handleChange('footerText', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none leading-relaxed"
            />
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700 dark:text-slate-300">Copyright Line</label>
            <input
              type="text"
              value={settings.copyrightText}
              onChange={(e) => handleChange('copyrightText', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
            />
          </div>

          {/* Announcement Bar */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Top Announcement Banner</span>
                <p className="text-[10px] text-slate-400">Show a promotional bar across the top of public website</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.enableAnnouncement}
                  onChange={(e) => handleChange('enableAnnouncement', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2563EB]" />
              </label>
            </div>

            {settings.enableAnnouncement && (
              <div className="space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Announcement Message</label>
                <input
                  type="text"
                  value={settings.announcementText}
                  onChange={(e) => handleChange('announcementText', e.target.value)}
                  placeholder="e.g. Special Launch Offer: Free 30-Minute Growth Audit!"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
                />
              </div>
            )}
          </div>
        </div>

        {/* Save Bar */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>Save Settings</span>
          </button>
        </div>
      </form>

    </div>
  );
}
