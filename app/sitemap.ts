export default function sitemap() {
  const base = 'https://doi2apa-15pages-fixed.vercel.app';
  const routes = ['', '/about', '/contact', '/privacy-policy', '/terms', '/acs', '/ama', '/apa-7th', '/apsa', '/bibtex', '/chicago', '/chicago-author-date', '/cse', '/doi-citation-generator'];
  return routes.map(r => ({ url: base + r, lastModified: new Date() }));
}
