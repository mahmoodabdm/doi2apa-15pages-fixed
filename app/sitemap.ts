export default function sitemap() {
  const base = 'https://doi2apa-15pages-fixed.vercel.app';
  const routes = [
    '',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/apa',
    '/apa-7th',
    '/mla',
    '/chicago',
    '/chicago-author-date',
    '/harvard',
    '/ieee',
    '/bibtex',
    '/vancouver',
    '/acs',
    '/ama',
    '/apsa',
    '/cse',
  ];
  return routes.map((r) => ({
    url: base + r,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: r === '' ? 1 : 0.8,
  }));
}
