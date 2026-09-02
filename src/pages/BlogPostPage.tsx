import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Clock, 
  Calendar, 
  ArrowLeft, 
  Share2, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  PhoneCall, 
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { BLOG_ARTICLES } from '../data/blogData';
import AdSenseBanner from '../components/AdSenseBanner';

interface BlogPostPageProps {
  onOpenConsultation: () => void;
}

export default function BlogPostPage({ onOpenConsultation }: BlogPostPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const article = BLOG_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const relatedArticles = BLOG_ARTICLES.filter((a) => 
    article.relatedSlugs.includes(a.slug) || (a.category === article.category && a.slug !== article.slug)
  ).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.metaDescription,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="w-full pt-20 sm:pt-28 pb-16 bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen">
      
      {/* Article Header & Title */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Link */}
        <div className="flex items-center justify-between pt-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#2563EB] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
          <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[11px] font-extrabold text-[#2563EB]">
            {article.category}
          </span>
        </div>

        {/* H1 Primary Title */}
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#111827] dark:text-white tracking-tight leading-tight">
          {article.title}
        </h1>

        {/* Meta Byline */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
            />
            <div>
              <p className="font-bold text-slate-900 dark:text-white">{article.author.name}</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">{article.author.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Updated: {article.updatedDate}</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#2563EB] hover:bg-blue-50 transition-colors flex items-center gap-1 font-bold text-xs"
              title="Share article"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Copied Link!' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-64 sm:h-96 rounded-3xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-800">
          <img
            src={article.featuredImage}
            alt={`${article.title} - TM Digital Marketing`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quick Summary Box */}
        <div className="p-6 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/80 text-sm text-slate-800 dark:text-slate-200 space-y-2">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#2563EB]">Executive Summary</span>
          <p className="leading-relaxed font-medium">{article.summary}</p>
        </div>

        {/* Table of Contents Accordion / List */}
        {article.tableOfContents && article.tableOfContents.length > 0 && (
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
            <h2 className="font-heading font-extrabold text-sm uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#2563EB]" />
              <span>Table of Contents</span>
            </h2>
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {article.tableOfContents.map((toc) => (
                <a
                  key={toc.id}
                  href={`#${toc.id}`}
                  className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-blue-950/60 hover:text-[#2563EB] text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5 truncate"
                >
                  <ChevronRight className="w-3 h-3 text-[#2563EB] shrink-0" />
                  <span className="truncate">{toc.title}</span>
                </a>
              ))}
            </nav>
          </div>
        )}

        {/* Main Article Content Body */}
        <div className="space-y-10 py-6 text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
          {article.content.map((sec, secIdx) => (
            <div key={sec.sectionId} className="space-y-8">
              <section id={sec.sectionId} className="space-y-4 scroll-mt-28">
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight border-b border-slate-100 dark:border-slate-800 pb-2">
                  {sec.heading}
                </h2>

                {sec.paragraphs.map((p, idx) => (
                  <p key={idx} className="leading-relaxed text-slate-700 dark:text-slate-300 text-justify sm:text-left">
                    {p}
                  </p>
                ))}

                {sec.callout && (
                  <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs sm:text-sm font-semibold text-amber-900 dark:text-amber-200">
                    {sec.callout}
                  </div>
                )}

                {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5">
                    {sec.bulletPoints.map((bp, bidx) => (
                      <div key={bidx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* Mid-Article Contextual AdSense Ad Unit (Compliant Placement on Long Editorial Articles) */}
              {secIdx === 1 && (
                <AdSenseBanner slot="4970893672" className="my-6" />
              )}
            </div>
          ))}
        </div>

        {/* AdSense Unit Before FAQs */}
        <AdSenseBanner slot="4970893672" className="my-4" />

        {/* FAQ Section */}
        {article.faqs && article.faqs.length > 0 && (
          <section id="faqs" className="py-6 border-t border-slate-200 dark:border-slate-800 space-y-6 scroll-mt-28">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#2563EB]" />
              <h2 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {article.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm"
                >
                  <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Author Bio Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg space-y-4">
          <span className="text-[10px] font-extrabold text-[#2563EB] uppercase tracking-wider">About the Author</span>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-blue-500 shadow-md shrink-0"
            />
            <div className="space-y-2 flex-1">
              <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white">
                {article.author.name}
              </h3>
              <p className="text-xs text-[#64748B] dark:text-slate-300">
                {article.author.role}. Direct strategy lead helping brands scale through high-ROI digital marketing, SEO, and paid performance advertising across Tirunelveli and global markets.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs">
                <a
                  href={`tel:${article.author.phone.replace(/[^0-9]/g, '')}`}
                  className="inline-flex items-center gap-1.5 font-bold text-[#2563EB] hover:underline"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call {article.author.name}: {article.author.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Strategy Consultation Inline Box */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-sky-600 text-white space-y-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <h3 className="font-heading font-extrabold text-2xl">Ready to Grow Your Business in Tirunelveli?</h3>
            <p className="text-xs sm:text-sm text-blue-100">
              Get a tailored growth audit and marketing roadmap directly from Mohamed Thariq &amp; Muja.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 rounded-2xl bg-white text-[#2563EB] font-btn font-bold text-xs shadow-xl hover:bg-blue-50 transition-all shrink-0 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Book Free Strategy Call</span>
          </button>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="pt-10 border-t border-slate-200 dark:border-slate-800 space-y-6">
            <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">
              Related Growth Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/blog/${rel.slug}`}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#2563EB] transition-all space-y-2 shadow-sm block"
                >
                  <p className="text-[10px] font-extrabold text-[#2563EB] uppercase">{rel.category}</p>
                  <h4 className="font-heading font-bold text-xs text-slate-900 dark:text-white line-clamp-2 leading-snug">
                    {rel.title}
                  </h4>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {rel.readTime}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

      </article>

    </div>
  );
}
