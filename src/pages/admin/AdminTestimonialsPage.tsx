import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Star, CheckCircle2, X } from 'lucide-react';
import { CMSService, CMSTestimonial } from '../../services/cmsService';

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<CMSTestimonial[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<CMSTestimonial | null>(null);

  // Form states
  const [client, setClient] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [rating, setRating] = useState(5);
  const [quote, setQuote] = useState('');
  const [verified, setVerified] = useState(true);
  const [status, setStatus] = useState<'published' | 'draft'>('published');

  const loadTestimonials = () => {
    setTestimonials(CMSService.getTestimonials(true));
  };

  useEffect(() => {
    loadTestimonials();
    window.addEventListener('tm_cms_updated', loadTestimonials);
    return () => window.removeEventListener('tm_cms_updated', loadTestimonials);
  }, []);

  const handleOpenCreate = () => {
    setEditingItem(null);
    setClient('');
    setCompany('');
    setRole('Managing Director');
    setRating(5);
    setQuote('');
    setVerified(true);
    setStatus('published');
    setIsModalOpen(true);
  };

  const handleOpenEdit = (t: CMSTestimonial) => {
    setEditingItem(t);
    setClient(t.client);
    setCompany(t.company);
    setRole(t.role);
    setRating(t.rating);
    setQuote(t.quote);
    setVerified(t.verified);
    setStatus(t.status);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Delete endorsement from "${name}"?`)) {
      CMSService.deleteTestimonial(id);
      loadTestimonials();
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!client.trim() || !quote.trim()) return;

    CMSService.saveTestimonial({
      ...(editingItem?.id ? { id: editingItem.id } : {}),
      client,
      company,
      role,
      rating,
      quote,
      verified,
      status
    });

    loadTestimonials();
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Client Testimonials & Endorsements
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Manage genuine client reviews, star ratings, and verified endorsements displayed on the public site.
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-md shadow-blue-600/25 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add Testimonial</span>
        </button>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  t.status === 'published'
                    ? 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400'
                    : 'bg-amber-50 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400'
                }`}>
                  {t.status === 'published' ? '● Published' : '○ Draft'}
                </span>
              </div>

              <blockquote className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed line-clamp-4">
                "{t.quote}"
              </blockquote>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <div className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-1">
                  <span>{t.client}</span>
                  {t.verified && <CheckCircle2 className="w-3 h-3 text-emerald-500" />}
                </div>
                <div className="text-[10px] text-slate-400">
                  {t.role} {t.company ? `• ${t.company}` : ''}
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleOpenEdit(t)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-[#2563EB] hover:bg-slate-100"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(t.id, t.client)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-red-600 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/75 backdrop-blur-sm">
          <div className="relative w-full max-w-lg max-h-[92vh] flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
            
            {/* Modal Header */}
            <div className="flex-shrink-0 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/80">
              <div>
                <h2 className="font-heading font-extrabold text-base text-slate-900 dark:text-white">
                  {editingItem?.id ? 'Edit Testimonial' : 'Add Client Endorsement'}
                </h2>
                <p className="text-[11px] text-slate-500">Updates testimonials immediately on public website</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="p-1.5 text-slate-400 hover:text-slate-600 rounded-xl">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form id="testimonial-modal-form" onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Client Name *</label>
                  <input
                    type="text"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                    placeholder="e.g. Sheik Mohammed"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Company / Enterprise</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Al Tamam Furniture"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Designation / Role</label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Proprietor / Managing Director"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Rating (1 to 5 Stars)</label>
                  <select
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
                  >
                    <option value={5}>5 Stars (Exceptional)</option>
                    <option value={4}>4 Stars (Very Good)</option>
                    <option value={3}>3 Stars (Average)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Client Endorsement Quote *</label>
                <textarea
                  rows={4}
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  placeholder="What the client said about TM Digital Marketing's results, velocity, and communication..."
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300">
                  <input
                    type="checkbox"
                    checked={verified}
                    onChange={(e) => setVerified(e.target.checked)}
                    className="w-4 h-4 rounded text-[#2563EB]"
                  />
                  <span>Verified Client Endorsement</span>
                </label>

                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as 'published' | 'draft')}
                  className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none"
                >
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
            </form>

            {/* Modal Footer */}
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
                  form="testimonial-modal-form"
                  className="px-6 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold shadow-md shadow-blue-600/30 cursor-pointer"
                >
                  Save Endorsement
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
