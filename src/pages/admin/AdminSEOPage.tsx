import React, { useState, useEffect } from 'react';
import { Search, Save, CheckCircle2, Globe, ShieldCheck } from 'lucide-react';
import { CMSService, CMSSEOSettings } from '../../services/cmsService';

export default function AdminSEOPage() {
  const [selectedPage, setSelectedPage] = useState<string>('home');
  const [seoList, setSeoList] = useState<CMSSEOSettings[]>([]);
  const [formData, setFormData] = useState<CMSSEOSettings>({
    pageId: 'home',
    pageTitle: '',
    metaDescription: '',
    keywords: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
    canonicalUrl: ''
  });
  const [savedMessage, setSavedMessage] = useState(false);

  const pages = [
    { id: 'home', label: 'Home Page (/)' },
    { id: 'completed-projects', label: 'Completed Projects (/completed-projects)' },
    { id: 'services', label: 'Services (/services)' },
    { id: 'about', label: 'About Us (/about)' },
    { id: 'contact', label: 'Contact Us (/contact)' },
    { id: 'why-us', label: 'Why Us (/why-us)' }
  ];

  const loadData = () => {
    const list = CMSService.getSEOSettings() as CMSSEOSettings[];
    setSeoList(list);
    const target = list.find((s) => s.pageId === selectedPage) || {
      pageId: selectedPage,
      pageTitle: 'TM Digital Marketing | Best Digital Marketing Agency in Tirunelveli',
      metaDescription: 'TM Digital Marketing is Tirunelveli’s premier digital marketing agency.',
      keywords: 'digital marketing agency tirunelveli, branding services, banner designing',
      ogTitle: 'TM Digital Marketing',
      ogDescription: 'Scale your business revenue with high-ROI digital marketing.',
      ogImage: '/logo-full.png',
      canonicalUrl: `https://tmdigitalgrow.com/${selectedPage === 'home' ? '' : selectedPage}`
    };
    setFormData(target);
  };

  useEffect(() => {
    loadData();
  }, [selectedPage]);

  const handleChange = (field: keyof CMSSEOSettings, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    CMSService.saveSEOSettings(selectedPage, formData);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Search Engine Optimization (SEO) & Meta Tags
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Customize page-specific meta titles, descriptions, keyword indexing, and social graph cards.
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
            <span>Save SEO Settings</span>
          </button>
        </div>
      </div>

      {/* Page Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
        {pages.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelectedPage(p.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedPage === p.id
                ? 'bg-[#2563EB] text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* SEO Form */}
      <form onSubmit={handleSave} className="space-y-6 text-xs">
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <Search className="w-4 h-4 text-[#2563EB]" />
            <h2 className="font-heading font-extrabold text-base text-slate-900 dark:text-white">
              Google Search Meta Information
            </h2>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between">
                <label className="font-bold text-slate-700 dark:text-slate-300">Page Meta Title</label>
                <span className="text-[10px] text-slate-400">{formData.pageTitle.length}/65 characters</span>
              </div>
              <input
                type="text"
                value={formData.pageTitle}
                onChange={(e) => handleChange('pageTitle', e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between">
                <label className="font-bold text-slate-700 dark:text-slate-300">Meta Description</label>
                <span className="text-[10px] text-slate-400">{formData.metaDescription.length}/160 characters</span>
              </div>
              <textarea
                rows={3}
                value={formData.metaDescription}
                onChange={(e) => handleChange('metaDescription', e.target.value)}
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none leading-relaxed"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">SEO Keywords (Comma separated)</label>
              <textarea
                rows={2}
                value={formData.keywords}
                onChange={(e) => handleChange('keywords', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Canonical URL</label>
                <input
                  type="url"
                  value={formData.canonicalUrl}
                  onChange={(e) => handleChange('canonicalUrl', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Social Share Image (OG Image)</label>
                <input
                  type="text"
                  value={formData.ogImage}
                  onChange={(e) => handleChange('ogImage', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Open Graph Title</label>
                <input
                  type="text"
                  value={formData.ogTitle}
                  onChange={(e) => handleChange('ogTitle', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Open Graph Description</label>
                <textarea
                  rows={2}
                  value={formData.ogDescription}
                  onChange={(e) => handleChange('ogDescription', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
                />
              </div>
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
            <span>Save SEO Settings</span>
          </button>
        </div>
      </form>

    </div>
  );
}
