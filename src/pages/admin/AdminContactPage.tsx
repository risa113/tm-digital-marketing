import React, { useState, useEffect } from 'react';
import { PhoneCall, Save, CheckCircle2, MapPin, Mail, Globe, MessageSquare } from 'lucide-react';
import { CMSService, CMSContactSettings } from '../../services/cmsService';

export default function AdminContactPage() {
  const [settings, setSettings] = useState<CMSContactSettings>(CMSService.getContactSettings());
  const [savedMessage, setSavedMessage] = useState(false);

  useEffect(() => {
    setSettings(CMSService.getContactSettings());
  }, []);

  const handleChange = (field: keyof CMSContactSettings, val: string) => {
    setSettings((prev) => ({ ...prev, [field]: val }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    CMSService.saveContactSettings(settings);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Contact Details & Communications
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Update executive phone numbers, WhatsApp routing, office location, and social media channels.
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
            <span>Save Changes</span>
          </button>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6 text-xs">
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <PhoneCall className="w-4 h-4 text-[#2563EB]" />
            <h2 className="font-heading font-extrabold text-base text-slate-900 dark:text-white">
              Primary Direct Communication Channels
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">Mohamed Thariq (Phone 1)</label>
              <input
                type="text"
                value={settings.phone1}
                onChange={(e) => handleChange('phone1', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">Muja (Phone 2)</label>
              <input
                type="text"
                value={settings.phone2}
                onChange={(e) => handleChange('phone2', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">Direct WhatsApp Target Number</label>
              <input
                type="text"
                value={settings.whatsappNumber}
                onChange={(e) => handleChange('whatsappNumber', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">Official Business Email</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
              />
            </div>
          </div>

          <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800">
            <label className="font-bold text-slate-700 dark:text-slate-300">Physical Office Address</label>
            <textarea
              rows={2}
              value={settings.address}
              onChange={(e) => handleChange('address', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none leading-relaxed"
            />
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700 dark:text-slate-300">Google Maps Location URL</label>
            <input
              type="url"
              value={settings.googleMapsUrl}
              onChange={(e) => handleChange('googleMapsUrl', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none font-mono"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">Official Instagram Profile URL</label>
              <input
                type="url"
                value={settings.instagramUrl}
                onChange={(e) => handleChange('instagramUrl', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">Official LinkedIn Company URL</label>
              <input
                type="url"
                value={settings.linkedinUrl}
                onChange={(e) => handleChange('linkedinUrl', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
              />
            </div>
          </div>
        </div>

        {/* Save Bar */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>Save Contact Settings</span>
          </button>
        </div>
      </form>

    </div>
  );
}
