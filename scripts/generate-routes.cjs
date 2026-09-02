const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

const routes = [
  'about',
  'founders',
  'leadership',
  'services',
  'digital-marketing-agency-tirunelveli',
  'seo-services-tirunelveli',
  'social-media-marketing-tirunelveli',
  'google-ads-tirunelveli',
  'meta-ads-tirunelveli',
  'web-development-tirunelveli',
  'branding-tirunelveli',
  'lead-generation-tirunelveli',
  'blog',
  'blog/how-to-choose-best-digital-marketing-agency-tirunelveli',
  'blog/local-seo-guide-tirunelveli-businesses',
  'blog/google-ads-vs-meta-ads-tirunelveli-roi',
  'blog/website-development-cost-in-tirunelveli',
  'blog/instagram-marketing-strategy-local-brands-tamil-nadu',
  'blog/ai-marketing-automation-business-guide-2026',
  'blog/conversion-rate-optimization-funnel-guide-2026',
  'process',
  'deliverables',
  'why-us',
  'testimonials',
  'faq',
  'contact',
  'privacy',
  'privacy-policy',
  'terms',
  'terms-of-service',
  'cookies',
  'cookie-policy',
  'disclaimer',
  'ad-disclosure'
];

routes.forEach((route) => {
  const routeDir = path.join(distDir, route);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtml, 'utf8');
});

// Also overwrite dist/404.html with index.html for direct SPA rendering
fs.writeFileSync(path.join(distDir, '404.html'), indexHtml, 'utf8');

console.log(`Successfully generated static HTML endpoints for ${routes.length} routes + 404.html!`);
