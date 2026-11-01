import React, { useState, useEffect, useRef } from 'react';
import { 
  Upload, 
  Search, 
  Trash2, 
  Copy, 
  Check, 
  Image as ImageIcon, 
  Filter, 
  X, 
  Eye, 
  FileCheck,
  AlertCircle
} from 'lucide-react';
import { CMSService, CMSMediaAsset } from '../../services/cmsService';

export default function AdminMediaPage() {
  const [mediaList, setMediaList] = useState<CMSMediaAsset[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedAsset, setSelectedAsset] = useState<CMSMediaAsset | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadMedia = () => {
    setMediaList(CMSService.getMedia());
  };

  useEffect(() => {
    loadMedia();
    window.addEventListener('tm_cms_updated', loadMedia);
    return () => window.removeEventListener('tm_cms_updated', loadMedia);
  }, []);

  const handleCopyUrl = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Delete media asset "${name}"?`)) {
      CMSService.deleteMedia(id);
      loadMedia();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploadError(null);
    setIsUploading(true);

    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

    Array.from(files).forEach((file) => {
      // Validation: Type
      if (!allowedTypes.includes(file.type)) {
        setUploadError(`File "${file.name}" is not supported. Please upload PNG, JPG, or WEBP.`);
        setIsUploading(false);
        return;
      }

      // Validation: Max 5MB
      if (file.size > 5 * 1024 * 1024) {
        setUploadError(`File "${file.name}" exceeds the 5MB size limit.`);
        setIsUploading(false);
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const resultUrl = event.target?.result as string;

        // Create media asset
        CMSService.saveMedia({
          name: file.name.replace(/\.[^/.]+$/, ''),
          url: resultUrl,
          size: file.size,
          type: file.type,
          category: 'general'
        });

        loadMedia();
        setIsUploading(false);
      };

      reader.readAsDataURL(file);
    });

    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Filtered media items
  const filteredMedia = mediaList.filter((m) => {
    const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = categoryFilter === 'all' || m.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Media Library
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Upload, preview, organize, and copy persistent image assets for branding, banners, and advertisements.
          </p>
        </div>

        <div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            multiple
            accept="image/png,image/jpeg,image/webp"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-50 text-white text-xs font-bold shadow-md shadow-blue-600/25 transition-all cursor-pointer"
          >
            <Upload className="w-4 h-4" />
            <span>{isUploading ? 'Uploading...' : 'Upload Images'}</span>
          </button>
        </div>
      </div>

      {/* Upload Error Alert */}
      {uploadError && (
        <div className="p-3.5 rounded-2xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{uploadError}</span>
        </div>
      )}

      {/* Toolbar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search media files by name..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {[
            { id: 'all', label: 'All Media' },
            { id: 'branding', label: 'Branding & Logos' },
            { id: 'banners', label: 'Banners' },
            { id: 'advertisements', label: 'Advertisements' },
            { id: 'visiting-cards', label: 'Visiting Cards' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoryFilter(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                categoryFilter === cat.id
                  ? 'bg-[#2563EB] text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredMedia.map((asset) => (
          <div
            key={asset.id}
            className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-2.5 space-y-2 hover:border-[#2563EB] hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
          >
            {/* Image Preview Box */}
            <div 
              onClick={() => setSelectedAsset(asset)}
              className="h-32 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center p-2 overflow-hidden cursor-pointer relative"
            >
              <img
                src={asset.url}
                alt={asset.name}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Eye className="w-5 h-5 text-white drop-shadow-md" />
              </div>
            </div>

            {/* Asset Metadata */}
            <div className="space-y-0.5 min-w-0">
              <div className="text-[11px] font-bold text-slate-900 dark:text-white truncate" title={asset.name}>
                {asset.name}
              </div>
              <div className="text-[10px] text-slate-400">
                {(asset.size / 1024).toFixed(1)} KB • {asset.category}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-1">
              <button
                onClick={() => handleCopyUrl(asset.url, asset.id)}
                className="inline-flex items-center gap-1 text-[10px] font-bold text-[#2563EB] hover:underline cursor-pointer"
                title="Copy relative path / URL to clipboard"
              >
                {copiedId === asset.id ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-500" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy URL</span>
                  </>
                )}
              </button>

              <button
                onClick={() => handleDelete(asset.id, asset.name)}
                className="p-1 text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                title="Delete Asset"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Asset Detail Preview Modal */}
      {selectedAsset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <button
              onClick={() => setSelectedAsset(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white truncate pr-8">
              {selectedAsset.name}
            </h3>

            <div className="h-72 rounded-2xl bg-slate-950 p-4 flex items-center justify-center overflow-hidden">
              <img src={selectedAsset.url} alt={selectedAsset.name} className="max-h-full max-w-full object-contain" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-slate-50 dark:bg-slate-800 p-3.5 rounded-2xl">
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Size</span>
                <div className="font-bold text-slate-900 dark:text-white">{(selectedAsset.size / 1024).toFixed(1)} KB</div>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Type</span>
                <div className="font-bold text-slate-900 dark:text-white">{selectedAsset.type}</div>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Category</span>
                <div className="font-bold text-slate-900 dark:text-white">{selectedAsset.category}</div>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Uploaded</span>
                <div className="font-bold text-slate-900 dark:text-white">{new Date(selectedAsset.uploadedAt).toLocaleDateString()}</div>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase">Asset URL</span>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={selectedAsset.url}
                  className="w-full px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-800 dark:text-slate-200 outline-none"
                />
                <button
                  onClick={() => handleCopyUrl(selectedAsset.url, selectedAsset.id)}
                  className="px-4 py-2 rounded-xl bg-[#2563EB] text-white font-bold text-xs shrink-0 cursor-pointer"
                >
                  {copiedId === selectedAsset.id ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
