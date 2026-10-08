import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}

const baseIndexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Load blog articles directly
const { BLOG_ARTICLES } = await import('../src/data/blogData.ts');

const STATIC_ROUTES_INFO = {
  '': {
    title: 'TM Digital Marketing | Best Digital Marketing Agency in Tirunelveli',
    description: 'TM Digital Marketing is Tirunelveli’s premier digital marketing agency. We scale business revenue with high-ROI SEO, Meta Ads, Google Ads PPC, 3D Web Development & AI Automation in Tamil Nadu.',
    keywords: 'best digital marketing agency in Tirunelveli, digital marketing company in Tirunelveli, digital marketing services in Tirunelveli, SEO company in Tirunelveli, digital marketing agency in Nellai',
    canonical: 'https://tmdigitalgrow.com/',
    heading: 'Transform Your Business with Data-Driven Digital Marketing',
    contentHtml: `
      <section class="prose max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-4xl font-extrabold text-slate-900 dark:text-white">TM Digital Marketing | Best Digital Marketing Agency in Tirunelveli</h1>
        <p class="text-lg text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
          Welcome to TM Digital Marketing, Tirunelveli's premier performance marketing agency founded by Mohamed Thariq and Muja. We specialize in scaling businesses through high-ROI Google SEO, Meta Ads, high-conversion 3D web engineering, and automated WhatsApp lead funnels across Tamil Nadu.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 class="font-bold text-xl text-blue-600">Google & Local SEO</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300 mt-2">Rank #1 on Google Search and Google Maps 3-Pack for high-intent keywords in Tirunelveli and Tamil Nadu.</p>
          </div>
          <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 class="font-bold text-xl text-blue-600">Meta & Google PPC</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300 mt-2">Scale profitable customer acquisition with surgical Meta Ads (Facebook/Instagram) and Google Search campaigns.</p>
          </div>
          <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 class="font-bold text-xl text-blue-600">3D Web Development</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300 mt-2">Ultra-fast React websites with 99+ Core Web Vitals, custom 3D visuals, and seamless lead conversion funnels.</p>
          </div>
        </div>
      </section>
    `
  },
  'about': {
    title: 'About Us | TM Digital Marketing Agency Founders & Mission',
    description: 'Meet TM Digital Marketing founders Mohamed Thariq (+91 86087 24931) and Muja (+91 63694 80812). Discover our agile 7-day sprint model, international standards, and ROI-driven marketing mission in Tirunelveli.',
    keywords: 'about TM digital marketing, agency founders, Mohamed Thariq, Muja, Tirunelveli marketing agency team',
    canonical: 'https://tmdigitalgrow.com/about',
    heading: 'About TM Digital Marketing',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">About TM Digital Marketing</h1>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Founded by Mohamed Thariq (Creative Director) and Muja (Chief Growth Officer), TM Digital Marketing is a premier performance marketing agency located in Tirunelveli, Tamil Nadu. Our mission is to bridge the gap between traditional regional businesses and modern, international-standard digital growth frameworks.
        </p>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Unlike legacy agencies that delegate client campaigns to inexperienced trainees, we operate on direct founder access and rapid 7-day sprint execution. Every client communicates directly with founders Mohamed Thariq (+91 86087 24931) and Muja (+91 63694 80812).
        </p>
      </section>
    `
  },
  'founders': {
    title: 'Agency Founders | Mohamed Thariq & Muja | TM Digital Marketing',
    description: 'Meet TM Digital Marketing co-founders Mohamed Thariq (Creative Director) & Muja (Chief Growth Officer). Direct founder access, 7-day sprints & 5.2x ROAS in Tirunelveli, Tamil Nadu.',
    keywords: 'TM digital marketing founders, Mohamed Thariq, Muja, agency leadership, Tirunelveli marketing agency founders',
    canonical: 'https://tmdigitalgrow.com/founders',
    heading: 'Meet the Founders of TM Digital Marketing',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Meet the Founders: Mohamed Thariq & Muja</h1>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Mohamed Thariq (Creative Director & 3D Web Lead) and Muja (Chief Growth Officer & Performance Marketing Lead) lead TM Digital Marketing with a combined track record of scaling healthcare clinics, retail brands, real estate developers, and manufacturing exporters across Tamil Nadu.
        </p>
      </section>
    `
  },
  'leadership': {
    title: 'Agency Leadership | Mohamed Thariq & Muja | TM Digital Marketing',
    description: 'Meet TM Digital Marketing co-founders Mohamed Thariq (Creative Director) & Muja (Chief Growth Officer). Direct founder access, 7-day sprints & 5.2x ROAS in Tirunelveli, Tamil Nadu.',
    keywords: 'TM digital marketing founders, Mohamed Thariq, Muja, agency leadership',
    canonical: 'https://tmdigitalgrow.com/leadership',
    heading: 'Agency Leadership | TM Digital Marketing',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Agency Leadership</h1>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Leadership at TM Digital Marketing is defined by accountability, transparency, and relentless focus on client revenue expansion.
        </p>
      </section>
    `
  },
  'services': {
    title: 'Services & Growth Solutions | TM Digital Marketing Tirunelveli',
    description: 'Explore our 12+ digital marketing services in Tirunelveli: Google SEO, Meta Ads, Google Search PPC, 3D Web Engineering, Video Editing, Vector Branding & D2C WhatsApp Lead Funnels.',
    keywords: 'digital marketing services Tirunelveli, SEO services, Meta Ads management, Google PPC agency, web development packages',
    canonical: 'https://tmdigitalgrow.com/services',
    heading: 'Comprehensive Growth Services for Modern Businesses',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Services & Growth Solutions</h1>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          From Search Engine Optimization and Meta PPC to cutting-edge 3D Web Development and Conversational WhatsApp Automation, we provide full-funnel digital marketing services tailored for businesses in Tirunelveli and beyond.
        </p>
      </section>
    `
  },
  'digital-marketing-agency-tirunelveli': {
    title: 'Best Digital Marketing Agency in Tirunelveli | TM Digital Marketing',
    description: 'Scale your business revenue with Tirunelveli’s top digital marketing agency. We build full-funnel Meta Ads, Google PPC campaigns, Local SEO rankings & 3D websites for brands across Tamil Nadu.',
    keywords: 'best digital marketing agency in Tirunelveli, digital marketing company in Tirunelveli, digital marketing services in Tirunelveli, digital marketing agency in Nellai',
    canonical: 'https://tmdigitalgrow.com/digital-marketing-agency-tirunelveli',
    heading: 'Premier Digital Marketing Agency in Tirunelveli',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Best Digital Marketing Agency in Tirunelveli</h1>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          TM Digital Marketing delivers proven performance marketing campaigns for businesses across Tirunelveli, Melapalayam, Palayamkottai, and southern Tamil Nadu. We combine mathematical ROI tracking with viral social creatives.
        </p>
      </section>
    `
  },
  'seo-services-tirunelveli': {
    title: 'SEO Services in Tirunelveli | #1 Google & Local SEO Agency',
    description: 'Rank #1 on Google Search and Google Maps 3-Pack with TM Digital Marketing. Technical Core Web Vitals audits, programmatic keyword maps, schema markup & high-DA link building in Tirunelveli.',
    keywords: 'SEO company in Tirunelveli, SEO agency in Tirunelveli, local SEO services Tirunelveli, SEO company in Nellai',
    canonical: 'https://tmdigitalgrow.com/seo-services-tirunelveli',
    heading: 'SEO Services in Tirunelveli - Google #1 Ranking',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">SEO Services in Tirunelveli</h1>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Dominate local and national search rankings with our technical SEO audits, Google Business Profile optimization, schema markup, and authoritative backlink strategies.
        </p>
      </section>
    `
  },
  'social-media-marketing-tirunelveli': {
    title: 'Social Media Marketing Agency in Tirunelveli | Viral Reels & Growth',
    description: 'Build a viral brand on Instagram and Facebook with TM Digital Marketing. Cinematic 9:16 Reels production, vernacular Tamil/English hooks, and comment-to-WhatsApp conversion funnels in Tirunelveli.',
    keywords: 'social media marketing agency in Tirunelveli, social media marketing company in Tirunelveli, Instagram marketing agency in Tirunelveli',
    canonical: 'https://tmdigitalgrow.com/social-media-marketing-tirunelveli',
    heading: 'Social Media Marketing in Tirunelveli',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Social Media Marketing Agency in Tirunelveli</h1>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Drive massive brand awareness and organic lead conversions across Instagram, Facebook, and LinkedIn with high-retention short-form video content and community management.
        </p>
      </section>
    `
  },
  'google-ads-tirunelveli': {
    title: 'Google Ads Agency in Tirunelveli | High-ROAS Google PPC Management',
    description: 'Capture high-intent ready-to-buy customers on Google Search and Maps. We manage Google PPC, Performance Max, and Shopping campaigns that maximize ROAS for businesses in Tirunelveli and Tamil Nadu.',
    keywords: 'Google Ads agency in Tirunelveli, Google PPC company Tirunelveli, search engine marketing Nellai',
    canonical: 'https://tmdigitalgrow.com/google-ads-tirunelveli',
    heading: 'High-ROAS Google Ads Management in Tirunelveli',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Google Ads Agency in Tirunelveli</h1>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Capture immediate in-market customer search intent on Google Search, Maps, and YouTube with precision bidding, negative keyword protection, and conversion tracking.
        </p>
      </section>
    `
  },
  'meta-ads-tirunelveli': {
    title: 'Meta Ads Agency in Tirunelveli | Facebook & Instagram Ads Experts',
    description: 'Scale sales rapidly with Meta Ads (Facebook & Instagram). We deploy high-velocity creative testing, 9:16 video ad scripts, retargeting funnels, and CAPI server tracking for Tirunelveli brands.',
    keywords: 'Facebook Ads agency in Tirunelveli, Meta Ads agency in Tirunelveli, Instagram ads company Nellai',
    canonical: 'https://tmdigitalgrow.com/meta-ads-tirunelveli',
    heading: 'Performance Meta Ads (Facebook & Instagram) Agency',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Meta Ads Agency in Tirunelveli</h1>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Scale profitable acquisition using Dynamic Creative Testing, broad audience targeting, and high-converting 9:16 video ad scripts tailored to Tamil Nadu audiences.
        </p>
      </section>
    `
  },
  'web-development-tirunelveli': {
    title: 'Website Development Company in Tirunelveli | 3D React & Next.js Sites',
    description: 'Custom, ultra-fast 3D glassmorphic websites built with React, Next.js, and Tailwind CSS. 98+ Google Lighthouse scores, mobile-first responsiveness, and high lead conversion funnels in Tirunelveli.',
    keywords: 'website development company in Tirunelveli, web development company in Tirunelveli, web design company Nellai',
    canonical: 'https://tmdigitalgrow.com/web-development-tirunelveli',
    heading: 'High-Performance 3D Web Development in Tirunelveli',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Website Development Company in Tirunelveli</h1>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          We engineer blazing fast, responsive React websites featuring interactive 3D WebGL experiences, clean semantic architecture, and 99+ Core Web Vitals performance.
        </p>
      </section>
    `
  },
  'branding-tirunelveli': {
    title: 'Branding Agency in Tirunelveli | Vector Logos & Visual Identity',
    description: 'Elevate your brand into an iconic industry leader. We create bespoke corporate vector logos, luxury brand guidelines, typography hierarchies, and packaging design in Tirunelveli.',
    keywords: 'branding agency in Tirunelveli, logo design company Tirunelveli, brand identity agency Nellai',
    canonical: 'https://tmdigitalgrow.com/branding-tirunelveli',
    heading: 'Corporate Branding & Identity Design in Tirunelveli',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Branding Agency in Tirunelveli</h1>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Build memorable brand equity with custom vector logos, distinctive typography hierarchies, packaging graphics, and comprehensive corporate brand style guidelines.
        </p>
      </section>
    `
  },
  'lead-generation-tirunelveli': {
    title: 'Lead Generation Company in Tirunelveli | Automated WhatsApp Funnels',
    description: 'Fill your sales pipeline with verified buyer leads. We build automated WhatsApp marketing funnels, 24/7 AI qualification chatbots, and direct CRM integrations in Tirunelveli and Tamil Nadu.',
    keywords: 'lead generation company in Tirunelveli, WhatsApp marketing agency Tirunelveli, B2B lead generation Nellai',
    canonical: 'https://tmdigitalgrow.com/lead-generation-tirunelveli',
    heading: 'Automated Lead Generation & WhatsApp Funnels in Tirunelveli',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Lead Generation Company in Tirunelveli</h1>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Generate consistent high-intent buyer inquiries through automated conversational WhatsApp funnels, multi-step lead qualification forms, and instant CRM synchronization.
        </p>
      </section>
    `
  },
  'blog': {
    title: 'Digital Marketing & SEO Blog | Growth Insights | TM Digital',
    description: 'Expert digital marketing guides, Local SEO blueprints, Google Ads comparisons, and website development pricing breakdowns for businesses in Tirunelveli, Nellai, and Tamil Nadu.',
    keywords: 'digital marketing blog, SEO guide Tirunelveli, Google Ads vs Meta Ads, website cost Tirunelveli',
    canonical: 'https://tmdigitalgrow.com/blog',
    heading: 'Digital Marketing & SEO Growth Blog',
    contentHtml: `
      <section class="max-w-5xl mx-auto px-4 py-12">
        <h1 class="text-4xl font-extrabold text-slate-900 dark:text-white">Digital Marketing & SEO Growth Blog</h1>
        <p class="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Authoritative, data-backed guides, strategies, and case studies published by TM Digital Marketing founders Mohamed Thariq and Muja to help businesses grow in Tirunelveli and across Tamil Nadu.
        </p>
        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          ${BLOG_ARTICLES.map(a => `
            <article class="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 space-y-3">
              <span class="text-xs font-bold uppercase tracking-wider text-blue-600">${a.category} • ${a.readTime}</span>
              <h2 class="text-xl font-bold text-slate-900 dark:text-white">
                <a href="/blog/${a.slug}" class="hover:text-blue-600 transition-colors">${a.title}</a>
              </h2>
              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${a.summary}</p>
              <div class="pt-2">
                <a href="/blog/${a.slug}" class="text-xs font-bold text-blue-600 hover:underline">Read Full Guide →</a>
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `
  },
  'process': {
    title: 'Our 6-Step Growth Blueprint | Agile 7-Day Sprint Process',
    description: 'Discover how TM Digital Marketing launches and scales high-converting marketing campaigns in 7 days with our agile growth sprint process in Tirunelveli.',
    keywords: 'marketing process, growth sprint, campaign roadmap, 7 day launch',
    canonical: 'https://tmdigitalgrow.com/process',
    heading: 'Our 6-Step Growth Blueprint',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Our 6-Step Growth Blueprint</h1>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          We operate on a rapid 7-day sprint execution roadmap: Discovery Audit, Funnel Architecture, High-Converting Asset Creation, Campaign Launch, Real-Time Optimization, and Revenue Scaling.
        </p>
      </section>
    `
  },
  'deliverables': {
    title: 'Guaranteed Client Deliverables & Timelines | TM Digital Marketing',
    description: 'Transparent deliverables for every client: 7-day campaign launch velocity, weekly video metrics reporting, dedicated WhatsApp communication channel, and 100% intellectual property ownership.',
    keywords: 'marketing deliverables, agency deliverables, client guarantees',
    canonical: 'https://tmdigitalgrow.com/deliverables',
    heading: 'Guaranteed Deliverables & Timelines',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Guaranteed Client Deliverables</h1>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Zero ambiguity, zero delays. We document every deliverable in writing before campaign launch: 7-day launch velocity, weekly executive metrics teardowns, and full creative asset ownership.
        </p>
      </section>
    `
  },
  'completed-projects': {
    title: 'Completed Client Projects & Live Case Studies | TM Digital Marketing',
    description: 'Explore live client projects delivered by TM Digital Marketing: Al-Hayath Umrah Services (340+ verified bookings, 5.8x ROAS) and HYZIN Interior (62+ premium turnkey inquiries).',
    keywords: 'digital marketing case studies, completed client projects, Tirunelveli marketing results',
    canonical: 'https://tmdigitalgrow.com/completed-projects',
    heading: 'Completed Client Projects & Live Case Studies',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Completed Client Projects & Case Studies</h1>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Verifiable client results across tourism, healthcare, architecture, and retail. Review our live deliverables for Al-Hayath Umrah Services and HYZIN Interior Architecture.
        </p>
      </section>
    `
  },
  'completed-work': {
    title: 'Completed Client Projects | TM Digital Marketing',
    description: 'Explore live client projects delivered by TM Digital Marketing.',
    keywords: 'marketing case studies, completed work',
    canonical: 'https://tmdigitalgrow.com/completed-projects',
    heading: 'Completed Projects',
    contentHtml: '<p>Explore our client results and completed projects.</p>'
  },
  'our-work': {
    title: 'Our Work & Portfolio | TM Digital Marketing',
    description: 'Review our client portfolio, creative ad designs, websites and ROI results.',
    keywords: 'agency portfolio, marketing work',
    canonical: 'https://tmdigitalgrow.com/completed-projects',
    heading: 'Our Work',
    contentHtml: '<p>Review our client portfolio and deliverables.</p>'
  },
  'why-us': {
    title: 'Why Choose TM Digital Marketing | Founders vs Trainees',
    description: 'Compare TM Digital Marketing against traditional legacy agencies in Tirunelveli. Direct founder access, 7-day sprint launch velocity, mathematical ROI focus, and zero lock-in contracts.',
    keywords: 'why choose TM digital marketing, agency comparison',
    canonical: 'https://tmdigitalgrow.com/why-us',
    heading: 'Why Choose TM Digital Marketing',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Why Choose TM Digital Marketing</h1>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Discover why growing enterprises in southern Tamil Nadu partner with us: direct founder accountability with Mohamed Thariq and Muja, agile 7-day sprints, transparent pricing, and verifiable bottom-line ROI.
        </p>
      </section>
    `
  },
  'testimonials': {
    title: 'Client Reviews & Success Stories | TM Digital Marketing Tirunelveli',
    description: 'Read verified client reviews and case studies from top businesses in Tirunelveli, Nellai, and Tamil Nadu that scaled with TM Digital Marketing.',
    keywords: 'TM digital marketing reviews, client testimonials Tirunelveli',
    canonical: 'https://tmdigitalgrow.com/testimonials',
    heading: 'Client Reviews & Testimonials',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Client Reviews & Success Stories</h1>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Real feedback from regional business owners and corporate founders who transformed their customer acquisition pipelines with TM Digital Marketing.
        </p>
      </section>
    `
  },
  'faq': {
    title: 'Frequently Asked Questions | Digital Marketing FAQ | TM Digital',
    description: 'Get answers to common questions about hiring TM Digital Marketing in Tirunelveli: campaign launch timelines, minimum budgets, ad spend allocation, contracts, and tracking.',
    keywords: 'digital marketing FAQ, hiring marketing agency FAQ',
    canonical: 'https://tmdigitalgrow.com/faq',
    heading: 'Frequently Asked Questions',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Frequently Asked Questions</h1>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Everything you need to know about partnering with TM Digital Marketing, campaign setup speed, budget requirements, and performance guarantees.
        </p>
      </section>
    `
  },
  'contact': {
    title: 'Contact Us | Book Free Strategy Call | TM Digital Marketing',
    description: 'Connect directly with founders Mohamed Thariq (+91 86087 24931) & Muja (+91 63694 80812). Book a free 30-minute growth strategy consultation in Tirunelveli.',
    keywords: 'contact TM digital marketing, book marketing consultation, Mohamed Thariq, Muja',
    canonical: 'https://tmdigitalgrow.com/contact',
    heading: 'Contact TM Digital Marketing Founders',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Contact TM Digital Marketing</h1>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Book a 30-minute growth consultation directly with co-founders Mohamed Thariq (+91 86087 24931) and Muja (+91 63694 80812). We respond within 2 hours during business hours.
        </p>
      </section>
    `
  },
  'privacy': {
    title: 'Privacy Policy | TM Digital Marketing Agency',
    description: 'TM Digital Marketing Privacy Policy. Google AdSense compliant details on cookies, DART cookies, user data protection, GDPR rights & founder contacts.',
    keywords: 'TM digital marketing privacy policy, data privacy, Google AdSense policy',
    canonical: 'https://tmdigitalgrow.com/privacy',
    heading: 'Privacy Policy',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12 prose dark:prose-invert">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Privacy Policy</h1>
        <p>At TM Digital Marketing, accessible from https://tmdigitalgrow.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information that is collected and recorded by TM Digital Marketing and how we use it.</p>
        <h2>Log Files</h2>
        <p>TM Digital Marketing follows a standard procedure of using log files. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and number of clicks.</p>
        <h2>Cookies and Web Beacons</h2>
        <p>Like any other website, TM Digital Marketing uses cookies to store information including visitors' preferences and the pages on the website that the visitor accessed or visited.</p>
        <h2>Google DoubleClick DART Cookie</h2>
        <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet.</p>
      </section>
    `
  },
  'privacy-policy': {
    title: 'Privacy Policy | TM Digital Marketing Agency',
    description: 'TM Digital Marketing Privacy Policy. Google AdSense compliant details on cookies, DART cookies, user data protection, GDPR rights & founder contacts.',
    keywords: 'TM digital marketing privacy policy, data privacy, Google AdSense policy',
    canonical: 'https://tmdigitalgrow.com/privacy',
    heading: 'Privacy Policy',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12 prose dark:prose-invert">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Privacy Policy</h1>
        <p>This Privacy Policy explains how TM Digital Marketing collects, uses, and safeguards information when you visit https://tmdigitalgrow.com.</p>
      </section>
    `
  },
  'terms': {
    title: 'Terms of Service & Original Content Policy | TM Digital Marketing',
    description: 'TM Digital Marketing Terms of Service, original content guarantee, intellectual property rights, and client service agreement terms.',
    keywords: 'TM digital marketing terms, terms of service, original content guarantee',
    canonical: 'https://tmdigitalgrow.com/terms',
    heading: 'Terms of Service',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12 prose dark:prose-invert">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Terms of Service</h1>
        <p>Welcome to TM Digital Marketing. By accessing this website, you agree to comply with and be bound by these terms and conditions.</p>
      </section>
    `
  },
  'terms-of-service': {
    title: 'Terms of Service & Original Content Policy | TM Digital Marketing',
    description: 'TM Digital Marketing Terms of Service, original content guarantee, intellectual property rights, and client service agreement terms.',
    keywords: 'TM digital marketing terms, terms of service',
    canonical: 'https://tmdigitalgrow.com/terms',
    heading: 'Terms of Service',
    contentHtml: '<p>Terms of service for TM Digital Marketing.</p>'
  },
  'cookies': {
    title: 'Cookie Policy | TM Digital Marketing Agency',
    description: 'TM Digital Marketing Cookie Policy. Details on essential cookies, Google Analytics, Google AdSense DART cookies, and browser management instructions.',
    keywords: 'TM digital marketing cookie policy, DART cookies, Google AdSense cookies',
    canonical: 'https://tmdigitalgrow.com/cookies',
    heading: 'Cookie Policy',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12 prose dark:prose-invert">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Cookie Policy</h1>
        <p>This Cookie Policy explains how TM Digital Marketing uses cookies and similar technologies to recognize you when you visit our website.</p>
      </section>
    `
  },
  'cookie-policy': {
    title: 'Cookie Policy | TM Digital Marketing Agency',
    description: 'TM Digital Marketing Cookie Policy. Details on essential cookies, Google Analytics, Google AdSense DART cookies, and browser management instructions.',
    keywords: 'TM digital marketing cookie policy, DART cookies',
    canonical: 'https://tmdigitalgrow.com/cookies',
    heading: 'Cookie Policy',
    contentHtml: '<p>Cookie Policy for TM Digital Marketing.</p>'
  },
  'disclaimer': {
    title: 'Disclaimer & Advertising Disclosure | TM Digital Marketing Agency',
    description: 'TM Digital Marketing Legal Disclaimer and Google AdSense Advertising Disclosures. Earnings disclaimer, FTC notices, and professional advice terms.',
    keywords: 'TM digital marketing disclaimer, AdSense advertising disclosure, earnings disclaimer',
    canonical: 'https://tmdigitalgrow.com/disclaimer',
    heading: 'Disclaimer & Advertising Disclosure',
    contentHtml: `
      <section class="max-w-4xl mx-auto px-4 py-12 prose dark:prose-invert">
        <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white">Disclaimer & Advertising Disclosure</h1>
        <p>The information provided by TM Digital Marketing on https://tmdigitalgrow.com is for general informational and educational purposes only.</p>
      </section>
    `
  },
  'ad-disclosure': {
    title: 'Disclaimer & Advertising Disclosure | TM Digital Marketing Agency',
    description: 'TM Digital Marketing Legal Disclaimer and Google AdSense Advertising Disclosures.',
    keywords: 'TM digital marketing disclaimer, AdSense advertising disclosure',
    canonical: 'https://tmdigitalgrow.com/disclaimer',
    heading: 'Advertising Disclosure',
    contentHtml: '<p>Advertising disclosures for TM Digital Marketing.</p>'
  }
};

function buildHtmlForRoute({ title, description, keywords, canonical, contentHtml, jsonLdSchema = null }) {
  let html = baseIndexHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${title}</title>`);
  html = html.replace(/<meta name="title" content=".*?" \/>/s, `<meta name="title" content="${title}" />`);

  // Replace Description
  html = html.replace(/<meta name="description"\s+content=".*?" \/>/s, `<meta name="description" content="${description}" />`);

  // Replace Keywords
  if (keywords) {
    html = html.replace(/<meta name="keywords"\s+content=".*?" \/>/s, `<meta name="keywords" content="${keywords}" />`);
  }

  // Replace Canonical Link
  html = html.replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${canonical}" />`);

  // Replace Open Graph tags
  html = html.replace(/<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${title}" />`);
  html = html.replace(/<meta property="og:description"\s+content=".*?" \/>/s, `<meta property="og:description" content="${description}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${canonical}" />`);

  // Replace Twitter card tags
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/s, `<meta name="twitter:title" content="${title}" />`);
  html = html.replace(/<meta name="twitter:description"\s+content=".*?" \/>/s, `<meta name="twitter:description" content="${description}" />`);
  html = html.replace(/<meta name="twitter:url" content=".*?" \/>/s, `<meta name="twitter:url" content="${canonical}" />`);

  // Inject JSON-LD Schema if provided
  if (jsonLdSchema) {
    const schemaTag = `\n  <script type="application/ld+json">\n${JSON.stringify(jsonLdSchema, null, 2)}\n  </script>`;
    html = html.replace('</head>', `${schemaTag}\n</head>`);
  }

  // Pre-render content inside <div id="root">
  if (contentHtml) {
    const preRenderedWrapper = `<div id="root">${contentHtml}</div>`;
    html = html.replace('<div id="root"></div>', preRenderedWrapper);
  }

  return html;
}

console.log('Generating pre-rendered static HTML routes with rich semantic content...');

// 1. Process static routes
let count = 0;
for (const [routePath, info] of Object.entries(STATIC_ROUTES_INFO)) {
  const targetDir = routePath ? path.join(distDir, routePath) : distDir;
  fs.mkdirSync(targetDir, { recursive: true });

  const html = buildHtmlForRoute({
    title: info.title,
    description: info.description,
    keywords: info.keywords,
    canonical: info.canonical,
    contentHtml: info.contentHtml,
    isAdAllowed: routePath === 'blog'
  });

  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
  count++;
}

// 2. Process all 16 Blog Articles
for (const article of BLOG_ARTICLES) {
  const articleDir = path.join(distDir, 'blog', article.slug);
  fs.mkdirSync(articleDir, { recursive: true });

  const canonicalUrl = `https://tmdigitalgrow.com/blog/${article.slug}`;

  // Build Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': canonicalUrl
    },
    'headline': article.title,
    'description': article.metaDescription,
    'image': article.featuredImage.startsWith('http') ? article.featuredImage : `https://tmdigitalgrow.com${article.featuredImage}`,
    'author': {
      '@type': 'Person',
      'name': article.author.name,
      'jobTitle': article.author.role,
      'telephone': article.author.phone
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'TM Digital Marketing',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://tmdigitalgrow.com/favicon.svg'
      }
    },
    'datePublished': article.publishedDate,
    'dateModified': article.updatedDate
  };

  // Build Semantic HTML for the Article
  const articleHtml = `
    <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose dark:prose-invert">
      <nav class="text-xs text-slate-500 mb-4" aria-label="Breadcrumb">
        <a href="/" class="hover:underline">Home</a> &gt; 
        <a href="/blog" class="hover:underline">Blog</a> &gt; 
        <span class="text-slate-800 dark:text-slate-200">${article.category}</span>
      </nav>

      <span class="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">
        ${article.category} • ${article.readTime}
      </span>

      <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 leading-tight">
        ${article.title}
      </h1>

      <div class="flex items-center gap-4 py-4 border-b border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-500">
        <span>By <strong>${article.author.name}</strong> (${article.author.role})</span>
        <span>•</span>
        <span>Published: ${article.publishedDate} (Updated: ${article.updatedDate})</span>
      </div>

      <div class="p-6 my-6 rounded-2xl bg-blue-50/50 dark:bg-slate-900/40 border border-blue-200 dark:border-blue-900">
        <p class="text-base text-slate-700 dark:text-slate-300 italic font-medium leading-relaxed">
          ${article.summary}
        </p>
      </div>

      <div class="space-y-8 mt-8">
        ${article.content.map(sec => `
          <section id="${sec.sectionId}" class="space-y-4">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white">${sec.heading}</h2>
            ${sec.paragraphs.map(p => `<p class="text-slate-700 dark:text-slate-300 leading-relaxed">${p}</p>`).join('')}
            ${sec.bulletPoints && sec.bulletPoints.length > 0 ? `
              <ul class="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
                ${sec.bulletPoints.map(bp => `<li>${bp}</li>`).join('')}
              </ul>
            ` : ''}
            ${sec.callout ? `
              <div class="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border-l-4 border-amber-500 text-amber-900 dark:text-amber-200 text-sm font-medium">
                ${sec.callout}
              </div>
            ` : ''}
          </section>
        `).join('')}
      </div>

      ${article.faqs && article.faqs.length > 0 ? `
        <section id="faqs" class="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
          <div class="space-y-4">
            ${article.faqs.map(faq => `
              <details class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <summary class="font-bold text-slate-900 dark:text-white cursor-pointer">${faq.question}</summary>
                <p class="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${faq.answer}</p>
              </details>
            `).join('')}
          </div>
        </section>
      ` : ''}

      <div class="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-400 text-center">
        <p>Published by TM Digital Marketing Agency, Tirunelveli, Tamil Nadu. Direct founder inquiries: Mohamed Thariq (+91 86087 24931) & Muja (+91 63694 80812).</p>
      </div>
    </article>
  `;

  const html = buildHtmlForRoute({
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: `${article.category.toLowerCase()}, ${article.title.toLowerCase()}, TM digital marketing, Tirunelveli`,
    canonical: canonicalUrl,
    contentHtml: articleHtml,
    jsonLdSchema: articleSchema,
    isAdAllowed: true
  });

  fs.writeFileSync(path.join(articleDir, 'index.html'), html, 'utf8');
  count++;
}

// 3. Generate Pristine Compliant 404.html (WITHOUT AdSense code!)
console.log('Generating compliant 404.html (free of AdSense code)...');
let notFoundHtml = baseIndexHtml;
// Completely strip AdSense meta tag and any ad tags from 404
notFoundHtml = notFoundHtml.replace(/<meta name="google-adsense-account" content=".*?" \/>/g, '');
notFoundHtml = notFoundHtml.replace(/<title>.*?<\/title>/s, '<title>404 - Page Not Found | TM Digital Marketing</title>');
notFoundHtml = notFoundHtml.replace(/<meta name="robots" content=".*?" \/>/s, '<meta name="robots" content="noindex, follow" />');

const notFoundContent = `
  <div style="min-height: 80vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px; font-family: 'Poppins', sans-serif;">
    <h1 style="font-size: 64px; font-weight: 900; color: #2563EB; margin-bottom: 8px;">404</h1>
    <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 16px;">Page Not Found</h2>
    <p style="max-width: 450px; color: #64748B; margin-bottom: 24px; font-size: 14px; line-height: 1.6;">
      The page you requested could not be found. It may have been moved, renamed, or is temporarily unavailable.
    </p>
    <div style="display: flex; gap: 12px;">
      <a href="/" style="padding: 12px 24px; background-color: #2563EB; color: #ffffff; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 13px;">Return to Home</a>
      <a href="/services" style="padding: 12px 24px; background-color: #E2E8F0; color: #0F172A; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 13px;">View Services</a>
      <a href="/blog" style="padding: 12px 24px; background-color: #E2E8F0; color: #0F172A; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 13px;">Read Blog</a>
    </div>
  </div>
`;

notFoundHtml = notFoundHtml.replace('<div id="root"></div>', `<div id="root">${notFoundContent}</div>`);
fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf8');

console.log(`Successfully generated ${count} rich, pre-rendered static HTML routes + clean 404.html!`);
