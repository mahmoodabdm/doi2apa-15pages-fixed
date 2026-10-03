import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://doi2apa-15pages-fixed.vercel.app'
  const pages = [
    '',
    '/about',
    '/acs',
    '/ama',
    '/apa-7th',
    '/apsa',
    '/bibtex',
    '/chicago-author-date',
    '/chicago',
    '/contact',
    '/cse',
    '/harvard',
    '/ieee',
    '/mla-9th',
    '/oscola',
    '/vancouver',
    '/admin',
    '/api/verify-tron',
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))
}
