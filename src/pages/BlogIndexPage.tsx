import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Search, 
  Clock, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import { BLOG_ARTICLES } from '../data/blogData';

interface BlogIndexPageProps {
  onOpenConsultation: () => void;
}

export default function BlogIndexPage({ onOpenConsultation }: BlogIndexPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'SEO', 'Paid Ads', 'Web Development', 'Social Media', 'Growth Strategy'];

  const filteredArticles = BLOG_ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.metaDescription.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = BLOG_ARTICLES[0];

  return (
    <div className="w-full pt-20 sm:pt-28 pb-16 bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen">
      
      {/* Hero Header Banner */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-transparent dark:from-blue-950/20 dark:via-[#0F172A] dark:to-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-bold text-[#2563EB]">
            <BookOpen className="w-4 h-4" />
            <span>Digital Growth &amp; Local SEO Insights</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-[#111827] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
            TM Digital Marketing <br />
            <span className="text-[#2563EB]">Growth Insights &amp; SEO Hub</span>
          </h1>

          <p className="text-base sm:text-xl text-[#64748B] dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Data-backed strategies, Google SEO blueprints, Meta ad scaling frameworks, and website engineering guides for ambitious businesses in Tirunelveli and beyond.
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto relative pt-4">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                placeholder="Search SEO guides, pricing, ad tactics, local growth..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white shadow-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                  selectedCategory === cat
                    ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-lg shadow-blue-600/30'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-[#2563EB]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pillar Article Banner */}
      {selectedCategory === 'All' && !searchTerm && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <Link
            to={`/blog/${featuredArticle.slug}`}
            className="block group p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl hover:border-[#2563EB] transition-all overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={featuredArticle.featuredImage}
                  alt={featuredArticle.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#2563EB] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                  Featured Guide
                </span>
              </div>

              <div className="lg:col-span-6 space-y-4 text-left">
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-extrabold text-[#2563EB]">{featuredArticle.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredArticle.readTime}</span>
                  <span>•</span>
                  <span>{featuredArticle.publishedDate}</span>
                </div>

                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white group-hover:text-[#2563EB] transition-colors leading-tight">
                  {featuredArticle.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">
                  {featuredArticle.summary}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredArticle.author.avatar}
                      alt={featuredArticle.author.name}
                      className="w-9 h-9 rounded-full object-cover border-2 border-blue-500"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">{featuredArticle.author.name}</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">Founder Strategy</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] group-hover:translate-x-1 transition-transform">
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 space-y-4">
            <p className="text-slate-500 dark:text-slate-400 text-sm">No articles matched your criteria "{searchTerm}".</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="text-xs font-bold text-[#2563EB] underline"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to={`/blog/${article.slug}`}
                  className="group flex flex-col justify-between h-full p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#2563EB] transition-all shadow-lg hover:shadow-2xl"
                >
                  <div className="space-y-4">
                    <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <img
                        src={article.featuredImage}
                        alt={article.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider">
                        {article.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                      <span>•</span>
                      <span>{article.publishedDate}</span>
                    </div>

                    <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white group-hover:text-[#2563EB] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs text-[#64748B] dark:text-slate-300 line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-5 flex items-center justify-between text-xs font-bold text-[#2563EB]">
                    <span className="text-slate-600 dark:text-slate-400 text-[11px] font-normal">By {article.author.name}</span>
                    <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Bottom Growth Consultation CTA */}
      <section className="mt-16 py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">Want Customized Marketing Insights for Your Business?</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Book a free 30-minute growth strategy consultation with agency founders Mohamed Thariq &amp; Muja to audit your website and ad campaigns.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Book Strategy Call</span>
            </button>
            <Link
              to="/services"
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center justify-center gap-2"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
