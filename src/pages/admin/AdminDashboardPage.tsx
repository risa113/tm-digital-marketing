import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Palette, 
  FileImage, 
  Megaphone, 
  CreditCard, 
  CheckCircle2, 
  Clock, 
  Plus, 
  ArrowUpRight, 
  Zap, 
  Image as ImageIcon, 
  Activity, 
  ExternalLink,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import { CMSService, CMSPortfolioProject, CMSActivityLog } from '../../services/cmsService';

export default function AdminDashboardPage() {
  const [stats, setStats] = useState(CMSService.getDashboardStats());
  const [recentProjects, setRecentProjects] = useState<CMSPortfolioProject[]>([]);
  const [activityLogs, setActivityLogs] = useState<CMSActivityLog[]>([]);

  useEffect(() => {
    const refreshData = () => {
      setStats(CMSService.getDashboardStats());
      setRecentProjects(CMSService.getProjects(true).slice(0, 5));
      setActivityLogs(CMSService.getActivityLogs().slice(0, 8));
    };

    refreshData();
    window.addEventListener('tm_cms_updated', refreshData);
    return () => window.removeEventListener('tm_cms_updated', refreshData);
  }, []);

  const overviewCards = [
    {
      label: 'Total Projects',
      value: stats.totalProjects,
      sub: `${stats.publishedProjects} Published • ${stats.draftProjects} Drafts`,
      icon: Briefcase,
      color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-800'
    },
    {
      label: 'Branding & Identity',
      value: stats.brandingProjects,
      sub: 'Crescent Construction & Roofing',
      icon: Palette,
      color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/60 border-purple-200 dark:border-purple-800'
    },
    {
      label: 'Banner Designs',
      value: stats.bannerProjects,
      sub: 'Outdoor Hoarding & Flex',
      icon: FileImage,
      color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800'
    },
    {
      label: 'Advertisements',
      value: stats.adProjects,
      sub: 'Newspaper & Festive Flyers',
      icon: Megaphone,
      color: 'text-rose-600 bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800'
    },
    {
      label: 'Visiting Cards',
      value: stats.visitingCardProjects,
      sub: 'Corporate Double-Sided',
      icon: CreditCard,
      color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800'
    },
    {
      label: 'Active Services',
      value: stats.totalServices,
      sub: '10 Core Growth Offerings',
      icon: Zap,
      color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800'
    }
  ];

  return (
    <div className="space-y-8">
      
      {/* Page Title & Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Dashboard Overview
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Welcome back, Mohamed Thariq. Control your live portfolio and public CMS from here.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            to="/admin/portfolio?action=new"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-md shadow-blue-600/25 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Portfolio Project</span>
          </Link>
          <Link
            to="/admin/media"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-colors"
          >
            <ImageIcon className="w-4 h-4 text-[#2563EB]" />
            <span>Media Library</span>
          </Link>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {overviewCards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.label}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex items-start justify-between"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  {card.label}
                </span>
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  {card.value}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {card.sub}
                </p>
              </div>

              <div className={`p-3 rounded-2xl border ${card.color}`}>
                <IconComponent className="w-5 h-5" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Split Section: Recently Updated Projects & Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Recently Updated Projects */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 space-y-4 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#2563EB]" />
              <h2 className="font-heading font-extrabold text-base text-slate-900 dark:text-white">
                Recently Updated Projects
              </h2>
            </div>
            <Link
              to="/admin/portfolio"
              className="text-xs font-bold text-[#2563EB] hover:underline"
            >
              View All &rarr;
            </Link>
          </div>

          <div className="space-y-3">
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between gap-3 hover:border-blue-300 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center p-1 overflow-hidden shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                      {project.title}
                    </div>
                    <div className="text-[11px] text-slate-400 truncate">
                      {project.client} • {project.category}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    project.status === 'published'
                      ? 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                      : 'bg-amber-50 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800'
                  }`}>
                    {project.status === 'published' ? 'Published' : 'Draft'}
                  </span>
                  <Link
                    to={`/admin/portfolio?edit=${project.id}`}
                    className="p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-[#2563EB]"
                    title="Edit Project"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Activity Feed */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 space-y-4 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-500" />
              <h2 className="font-heading font-extrabold text-base text-slate-900 dark:text-white">
                Admin Activity Log
              </h2>
            </div>
            <span className="text-[11px] font-semibold text-slate-400">
              Audit Trail
            </span>
          </div>

          <div className="space-y-3">
            {activityLogs.map((log) => (
              <div
                key={log.id}
                className="text-xs space-y-1 pb-2.5 border-b border-slate-100 dark:border-slate-800/80 last:border-none last:pb-0"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-slate-900 dark:text-white">
                    {log.action}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                  {log.target} {log.details ? `• ${log.details}` : ''}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
