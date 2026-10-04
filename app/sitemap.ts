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
    '/chicago',
    '/chicago-author-date',
    '/contact',
    '/cse',
    '/doi-citation-generator',
    '/harvard',
    '/how-to-cite-doi',
    '/ieee',
    '/mla-9th',
    '/nature',
    '/oscola',
    '/privacy',
    '/turabian',
    '/vancouver',
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))
}
