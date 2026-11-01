import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Zap, 
  CheckCircle2, 
  X, 
  Sparkles,
  TrendingUp,
  Search,
  Code,
  Palette,
  MessageSquare
} from 'lucide-react';
import { CMSService, CMSService as CMSServiceType } from '../../services/cmsService';

export default function AdminServicesPage() {
  const [services, setServices] = useState<CMSServiceType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<CMSServiceType | null>(null);

  // Form states
  const [formTitle, setFormTitle] = useState('');
  const [formShortDesc, setFormShortDesc] = useState('');
  const [formFullDesc, setFormFullDesc] = useState('');
  const [formTag, setFormTag] = useState('');
  const [formMetric, setFormMetric] = useState('');
  const [formStatus, setFormStatus] = useState<'published' | 'draft'>('published');
  const [formCategory, setFormCategory] = useState('Digital Marketing');

  const loadServices = () => {
    setServices(CMSService.getServices(true));
  };

  useEffect(() => {
    loadServices();
    window.addEventListener('tm_cms_updated', loadServices);
    return () => window.removeEventListener('tm_cms_updated', loadServices);
  }, []);

  const handleOpenCreate = () => {
    setEditingService(null);
    setFormTitle('');
    setFormShortDesc('');
    setFormFullDesc('');
    setFormTag('High Growth');
    setFormMetric('+300% ROI');
    setFormStatus('published');
    setFormCategory('Performance Marketing');
    setIsModalOpen(true);
  };

  const handleOpenEdit = (srv: CMSServiceType) => {
    setEditingService(srv);
    setFormTitle(srv.title);
    setFormShortDesc(srv.shortDesc);
    setFormFullDesc(srv.fullDesc);
    setFormTag(srv.tag);
    setFormMetric(srv.metric);
    setFormStatus(srv.status);
    setFormCategory(srv.category || 'Digital Marketing');
    setIsModalOpen(true);
  };

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`Delete service "${title}"?`)) {
      CMSService.deleteService(id);
      loadServices();
    }
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) return;

    CMSService.saveService({
      ...(editingService?.id ? { id: editingService.id } : {}),
      title: formTitle,
      shortDesc: formShortDesc,
      fullDesc: formFullDesc,
      tag: formTag,
      metric: formMetric,
      status: formStatus,
      category: formCategory
    });

    loadServices();
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Services Management
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Control all public services, descriptions, metrics, and publication status in real-time.
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-md shadow-blue-600/25 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Service</span>
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((srv) => (
          <div
            key={srv.id}
            className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#2563EB]/60 transition-all"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-[#2563EB] text-[10px] font-bold border border-blue-200 dark:border-blue-800">
                  {srv.tag}
                </span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  srv.status === 'published'
                    ? 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400'
                    : 'bg-amber-50 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400'
                }`}>
                  {srv.status === 'published' ? '● Published' : '○ Draft'}
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-base text-slate-900 dark:text-white leading-tight">
                {srv.title}
              </h3>

              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                {srv.shortDesc}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{srv.metric}</span>
              </span>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleOpenEdit(srv)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-[#2563EB] hover:bg-slate-100 dark:hover:bg-slate-800"
                  title="Edit Service"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(srv.id, srv.title)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40"
                  title="Delete Service"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CREATE / EDIT SERVICE MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/75 backdrop-blur-sm">
          <div className="relative w-full max-w-xl max-h-[92vh] flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
            
            {/* Modal Header */}
            <div className="flex-shrink-0 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/80">
              <div>
                <h2 className="font-heading font-extrabold text-base text-slate-900 dark:text-white">
                  {editingService?.id ? 'Edit Service' : 'Add New Service'}
                </h2>
                <p className="text-[11px] text-slate-500">Live service details displayed across public pages</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body Form */}
            <form id="service-modal-form" onSubmit={handleSaveForm} className="flex-1 overflow-y-auto p-6 space-y-3.5 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Service Title *</label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="e.g. Google Ads PPC & Performance Max"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Tag / Badge</label>
                  <input
                    type="text"
                    value={formTag}
                    onChange={(e) => setFormTag(e.target.value)}
                    placeholder="e.g. High Intent Search"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Performance Metric</label>
                  <input
                    type="text"
                    value={formMetric}
                    onChange={(e) => setFormMetric(e.target.value)}
                    placeholder="e.g. 5.8x Average ROAS"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Short Description *</label>
                <textarea
                  rows={2}
                  value={formShortDesc}
                  onChange={(e) => setFormShortDesc(e.target.value)}
                  placeholder="Concise overview shown in card grids..."
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Full Description</label>
                <textarea
                  rows={3}
                  value={formFullDesc}
                  onChange={(e) => setFormFullDesc(e.target.value)}
                  placeholder="Detailed breakdown shown in modal or dedicated pages..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Publication Status</label>
                <select
                  value={formStatus}
                  onChange={(e) => setFormStatus(e.target.value as 'published' | 'draft')}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none cursor-pointer"
                >
                  <option value="published">Published (Visible on Public Website)</option>
                  <option value="draft">Draft (Hidden)</option>
                </select>
              </div>
            </form>

            {/* Modal Footer (ALWAYS VISIBLE) */}
            <div className="flex-shrink-0 px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/90 flex items-center justify-between">
              <span className="text-[11px] text-emerald-600 font-semibold">✓ Live sync enabled</span>
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form="service-modal-form"
                  className="px-6 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold shadow-md shadow-blue-600/30 cursor-pointer"
                >
                  Save Service
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
