import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye, 
  CheckCircle2, 
  Clock, 
  X, 
  Upload, 
  Image as ImageIcon,
  Check,
  AlertCircle
} from 'lucide-react';
import { CMSService, CMSPortfolioProject } from '../../services/cmsService';
import { PORTFOLIO_CATEGORIES, PortfolioCategory, CreativeProject } from '../../data/portfolioData';

export default function AdminPortfolioPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [projects, setProjects] = useState<CMSPortfolioProject[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Partial<CMSPortfolioProject> | null>(null);
  const [previewProject, setPreviewProject] = useState<CMSPortfolioProject | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  // Form states
  const [formTitle, setFormTitle] = useState('');
  const [formClient, setFormClient] = useState('');
  const [formService, setFormService] = useState('');
  const [formCategory, setFormCategory] = useState<CreativeProject['category']>('Branding & Identity');
  const [formDescription, setFormDescription] = useState('');
  const [formLocation, setFormLocation] = useState('Melapalayam, Tirunelveli');
  const [formDeliverableTag, setFormDeliverableTag] = useState('');
  const [formImage, setFormImage] = useState('');
  const [formGallery, setFormGallery] = useState<string[]>([]);
  const [formStatus, setFormStatus] = useState<'published' | 'draft'>('published');
  const [formHighlights, setFormHighlights] = useState<string>('');

  const loadProjects = () => {
    setProjects(CMSService.getProjects(true));
  };

  useEffect(() => {
    loadProjects();
    return CMSService.subscribe(loadProjects);
  }, []);

  // Handle URL query parameters (e.g. ?cat=Branding%20%26%20Identity or ?action=new or ?edit=...)
  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat) {
      setCategoryFilter(cat);
    }
    const action = searchParams.get('action');
    if (action === 'new') {
      handleOpenCreate();
    }
    const editId = searchParams.get('edit');
    if (editId) {
      const target = CMSService.getProjectById(editId);
      if (target) handleOpenEdit(target);
    }
  }, [searchParams]);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleOpenCreate = () => {
    setEditingProject(null);
    setFormTitle('');
    setFormClient('');
    setFormService('Professional Branding & Logo Design');
    setFormCategory('Branding & Identity');
    setFormDescription('');
    setFormLocation('Melapalayam, Tirunelveli');
    setFormDeliverableTag('Vector Logo Suite & Brand System');
    setFormImage('/portfolio/branding/crescent-construction-logo-design.jpg');
    setFormGallery(['/portfolio/branding/crescent-construction-logo-design.jpg']);
    setFormStatus('published');
    setFormHighlights('Vector Scalable Suite, 300 DPI Print Ready, Commercial Brand Identity');
    setIsModalOpen(true);
  };

  const handleOpenEdit = (project: CMSPortfolioProject) => {
    setEditingProject(project);
    setFormTitle(project.title);
    setFormClient(project.client);
    setFormService(project.service);
    setFormCategory(project.category);
    setFormDescription(project.description);
    setFormLocation(project.clientLocation);
    setFormDeliverableTag(project.deliverableTag);
    setFormImage(project.image);
    setFormGallery(project.galleryImages || [project.image]);
    setFormStatus(project.status);
    setFormHighlights(project.highlights ? project.highlights.join(', ') : '');
    setIsModalOpen(true);
  };

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete "${title}"? This will remove it from the public website.`)) {
      CMSService.deleteProject(id);
      loadProjects();
      showNotification(`Deleted "${title}" successfully.`);
    }
  };

  const handleToggleStatus = (id: string) => {
    const updated = CMSService.toggleProjectStatus(id);
    if (updated) {
      loadProjects();
      showNotification(`Project status changed to ${updated.status}.`);
    }
  };

  const handleSaveForm = (e?: React.FormEvent) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    if (!formTitle.trim() || !formClient.trim()) {
      alert('Title and Client name are required.');
      return;
    }

    const highlightsArray = formHighlights
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const projectData: Partial<CMSPortfolioProject> = {
      ...(editingProject?.id ? { id: editingProject.id } : {}),
      title: formTitle.trim(),
      client: formClient.trim(),
      service: formService.trim() || 'Creative Design',
      category: formCategory,
      description: formDescription.trim(),
      clientLocation: formLocation.trim() || 'Melapalayam, Tirunelveli',
      deliverableTag: formDeliverableTag.trim() || 'Completed Client Delivery',
      image: formImage || formGallery[0] || '/portfolio/branding/crescent-construction-logo-design.jpg',
      galleryImages: formGallery.length > 0 ? formGallery : [formImage],
      status: formStatus,
      highlights: highlightsArray.length > 0 ? highlightsArray : ['High Resolution', 'Completed Delivery'],
      imageFit: 'contain'
    };

    CMSService.saveProject(projectData);
    loadProjects();
    setIsModalOpen(false);
    showNotification(editingProject?.id ? '✅ Project updated! Changes are live on your website immediately.' : '🚀 New project published immediately!');
  };

  const handleAddGalleryUrl = () => {
    const url = prompt('Enter image URL or asset path (e.g. /portfolio/banners/... or HTTPS URL):');
    if (url && url.trim()) {
      setFormGallery((prev) => [...prev, url.trim()]);
    }
  };

  const handleRemoveGalleryUrl = (idx: number) => {
    setFormGallery((prev) => prev.filter((_, i) => i !== idx));
  };

  // Filtered projects list
  const filteredProjects = projects.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = categoryFilter === 'All' || p.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6">
      
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-20 right-6 z-50 p-4 rounded-2xl bg-slate-900 text-white border border-slate-700 shadow-2xl flex items-center gap-2 text-xs font-bold animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{notification}</span>
        </div>
      )}

      {/* Header & New Project Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Portfolio Management
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Add, edit, unpublish, and manage all public creative design projects and client deliverables.
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-md shadow-blue-600/25 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>New Project</span>
        </button>
      </div>

      {/* Search & Category Filter Toolbar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by client, title, category..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto overflow-x-auto">
          {['All', 'Branding & Identity', 'Banner Designing', 'Advertisement Designing', 'Visiting Card Designing'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                categoryFilter === cat
                  ? 'bg-[#2563EB] text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Table / Grid */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-slate-400 font-extrabold uppercase text-[10px] tracking-wider">
                <th className="p-4">Visual Cover</th>
                <th className="p-4">Client & Project</th>
                <th className="p-4">Category</th>
                <th className="p-4">Deliverable</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {filteredProjects.map((project) => (
                <tr key={project.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  
                  {/* Visual Cover */}
                  <td className="p-4">
                    <div className="w-16 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center p-1 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </td>

                  {/* Title & Client */}
                  <td className="p-4 min-w-[200px]">
                    <div className="font-bold text-slate-900 dark:text-white leading-tight">
                      {project.title}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      Client: <strong>{project.client}</strong> • {project.clientLocation}
                    </div>
                  </td>

                  {/* Category */}
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-[#2563EB] dark:text-blue-400 text-[10px] font-bold border border-blue-200 dark:border-blue-800 whitespace-nowrap">
                      {project.category}
                    </span>
                  </td>

                  {/* Deliverable Tag */}
                  <td className="p-4 text-slate-600 dark:text-slate-300 whitespace-nowrap">
                    {project.deliverableTag}
                  </td>

                  {/* Status Toggle */}
                  <td className="p-4 whitespace-nowrap">
                    <button
                      onClick={() => handleToggleStatus(project.id)}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold cursor-pointer transition-all ${
                        project.status === 'published'
                          ? 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                          : 'bg-amber-50 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800'
                      }`}
                      title="Click to toggle publish/draft"
                    >
                      {project.status === 'published' ? '● Published' : '○ Draft'}
                    </button>
                  </td>

                  {/* Action Buttons */}
                  <td className="p-4 text-right whitespace-nowrap">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => setPreviewProject(project)}
                        className="p-2 rounded-xl text-slate-500 hover:text-[#2563EB] hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                        title="Live Preview"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleOpenEdit(project)}
                        className="p-2 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/50 cursor-pointer"
                        title="Edit Project"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(project.id, project.title)}
                        className="p-2 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50 cursor-pointer"
                        title="Delete Project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CREATE / EDIT PROJECT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/75 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
            
            {/* Modal Header (ALWAYS FIXED AT TOP) */}
            <div className="flex-shrink-0 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/80">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-[#2563EB]">
                  <Edit className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="font-heading font-extrabold text-base text-slate-900 dark:text-white">
                    {editingProject?.id ? 'Edit Portfolio Project' : 'Add New Portfolio Project'}
                  </h2>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {editingProject?.id ? `Client: ${editingProject.client}` : 'Publish new completed work to your website'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleSaveForm()}
                  className="px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-md shadow-blue-600/30 flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all"
                  title="Quick Save"
                >
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Save</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800 cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body Form (SCROLLS SMOOTHLY) */}
            <form id="portfolio-project-form" onSubmit={handleSaveForm} className="flex-1 overflow-y-auto p-6 space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Project Title *</label>
                  <input
                    type="text"
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="e.g. Professional Branding & Logo Design"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#2563EB] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Client / Company Name *</label>
                  <input
                    type="text"
                    value={formClient}
                    onChange={(e) => setFormClient(e.target.value)}
                    placeholder="e.g. Crescent Construction"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#2563EB] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Category *</label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value as CreativeProject['category'])}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#2563EB] outline-none cursor-pointer"
                  >
                    <option value="Branding & Identity">Branding & Identity</option>
                    <option value="Banner Designing">Banner Designing</option>
                    <option value="Advertisement Designing">Advertisement Designing</option>
                    <option value="Visiting Card Designing">Visiting Card Designing</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Deliverable Tag</label>
                  <input
                    type="text"
                    value={formDeliverableTag}
                    onChange={(e) => setFormDeliverableTag(e.target.value)}
                    placeholder="e.g. Large Format Outdoor Hoarding Banner"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#2563EB] outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 dark:text-slate-300">Project Description *</label>
                <textarea
                  rows={3}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="Detailed summary of the design architecture, creative goals, and client impact..."
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#2563EB] outline-none"
                />
              </div>

              {/* Cover Image & Gallery */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Cover & Gallery Images</label>
                  <button
                    type="button"
                    onClick={handleAddGalleryUrl}
                    className="text-[11px] font-bold text-[#2563EB] hover:underline cursor-pointer"
                  >
                    + Add Image URL
                  </button>
                </div>

                <div className="space-y-2">
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-400">Primary Cover Image URL:</span>
                    <input
                      type="text"
                      value={formImage}
                      onChange={(e) => setFormImage(e.target.value)}
                      placeholder="/portfolio/banners/..."
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#2563EB] outline-none font-mono text-[11px]"
                    />
                  </div>

                  {/* Gallery List */}
                  {formGallery.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                      {formGallery.map((url, i) => (
                        <div key={i} className="relative group rounded-xl border border-slate-200 dark:border-slate-700 p-1 bg-slate-100 dark:bg-slate-800 flex items-center justify-center h-20 overflow-hidden">
                          <img src={url} alt="Gallery item" className="max-h-full max-w-full object-contain" />
                          <button
                            type="button"
                            onClick={() => handleRemoveGalleryUrl(i)}
                            className="absolute top-1 right-1 p-1 rounded-full bg-red-600 text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                            title="Remove"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Highlights & Publication Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Deliverable Highlights (Comma separated)</label>
                  <input
                    type="text"
                    value={formHighlights}
                    onChange={(e) => setFormHighlights(e.target.value)}
                    placeholder="Vector Scalable, 300 DPI, Print Ready"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#2563EB] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Publication Status</label>
                  <select
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value as 'published' | 'draft')}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#2563EB] outline-none cursor-pointer"
                  >
                    <option value="published">Published (Visible on Public Website)</option>
                    <option value="draft">Draft (Hidden from Public Website)</option>
                  </select>
                </div>
              </div>

            </form>

            {/* Modal Footer (STICKY AT BOTTOM, 100% VISIBLE WITH BRIGHT SAVE BUTTON) */}
            <div className="flex-shrink-0 px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Edits take effect immediately across all website pages</span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800 font-bold text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form="portfolio-project-form"
                  className="px-8 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-xs shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 cursor-pointer flex items-center gap-2 active:scale-95 transition-all"
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>{editingProject?.id ? 'SAVE CHANGES' : 'PUBLISH PROJECT'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* QUICK PREVIEW LIGHTBOX */}
      {previewProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <button
              onClick={() => setPreviewProject(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-[#2563EB] text-[10px] font-bold">
              {previewProject.category}
            </span>

            <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">
              {previewProject.title}
            </h3>

            <div className="h-60 rounded-2xl bg-slate-100 dark:bg-slate-800 p-4 flex items-center justify-center overflow-hidden">
              <img src={previewProject.image} alt="Preview" className="max-h-full max-w-full object-contain" />
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {previewProject.description}
            </p>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-400">
              <span>Client: {previewProject.client}</span>
              <span>Status: {previewProject.status}</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
