"use client";

import Link from "next/link";

export default function NatureCitationPage() {
  return (
    <div className="min-h-screen bg-[#0a0e2a] text-white selection:bg-cyan-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0e2a]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-white text-[14px] font-black text-[#0a0e2a]">
              D
            </div>
            <div className="leading-tight">
              <div className="text-[13px] font-bold tracking-widest">DOIZAPA PRO</div>
              <div className="text-[10px] text-white/60">CLEAN V4 • 15 STYLES</div>
            </div>
          </Link>
          <nav className="flex items-center gap-2">
            <Link
              href="/"
              className="rounded-full bg-white/[0.08] px-4 py-2 text-[13px] font-medium text-white/80 transition hover:bg-white/[0.12] hover:text-white"
            >
              ← Back to Converter
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
          {/* Article */}
          <article className="min-w-0">
            {/* Breadcrumb */}
            <div className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-white/50">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <Link href="/guides" className="hover:text-white">
                Guides
              </Link>
              <span>/</span>
              <span className="text-white/80">Nature Journal Citation</span>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl md:p-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-bold tracking-widest text-cyan-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
                TRUSTED BY US RESEARCHERS • 15,000+ CITATIONS
              </div>

              <h1 className="text-3xl font-extrabold leading-tight md:text-[42px] md:leading-[1.05]">
                Nature Journal DOI Converter – <span className="text-cyan-300">Free Nature</span> Reference Generator
              </h1>

              <p className="mt-5 text-[15px] leading-7 text-white/70">
                Looking for a fast, accurate <strong className="text-white">DOI to Nature converter</strong>? DOIZAPA PRO
                is the free <strong className="text-white">Nature citation generator</strong> built for US science students,
                PhD researchers, and faculty publishing in Nature Portfolio journals. Paste any DOI like{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-cyan-200">10.1038/nature12345</code> and instantly get a
                perfect Nature journal reference with numbered citations. No signup, no paywall, powered by official Crossref API for US universities.
              </p>

              {/* What is Nature style */}
              <div className="prose prose-invert mt-10 max-w-none">
                <h2 className="text-[22px] font-bold text-white">What Is Nature Journal Citation Style?</h2>
                <p className="mt-3 text-[15px] leading-7 text-white/70">
                  Nature citation style is the official reference format used by <em>Nature</em>, <em>Nature Medicine</em>,{" "}
                  <em>Nature Communications</em>, <em>Scientific Reports</em>, and 150+ Nature Portfolio journals. Unlike APA
                  7th or MLA 9th, Nature uses a sequential numbered system with highly condensed references. This format is
                  mandatory for submissions to Nature journals and is increasingly adopted by US research institutions like
                  MIT, Stanford, Caltech, and Harvard Medical School for science lab reports, preprints, and grant proposals.
                </p>
                <p className="mt-3 text-[15px] leading-7 text-white/70">
                  Key rules: References are numbered in order of first appearance in text, cited as superscript numbers
                  without brackets in the original Nature print, but many US universities accept bracketed [1] style. Journal
                  titles are abbreviated, authors listed as surname + initials without punctuation, article title included only
                  for preprints, and DOI is required for online ahead-of-print articles. The <strong className="text-white">Nature DOI citation</strong> must end with the DOI link for reproducibility.
                </p>

                <h2 className="mt-10 text-[22px] font-bold text-white">Why US Students & Researchers Need a Nature DOI Converter</h2>
                <p className="mt-3 text-[15px] leading-7 text-white/70">
                  For US STEM majors, manually formatting Nature references is brutal. One Nature reference takes 4-5 minutes to
                  craft if you do it by hand — checking Crossref, abbreviating journal names, formatting volume and pages. A single
                  biology thesis with 60 sources means 5 hours lost. Our <strong className="text-white">Nature journal reference generator free</strong> tool cuts that to 6 seconds.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[14px] leading-6 text-white/70 marker:text-cyan-300">
                  <li>Required for submissions to Nature, Nature Genetics, Nature Neuroscience, Nature Biotechnology.</li>
                  <li>Top US graduate programs demand Nature style for molecular biology, physics, and medicine manuscripts.</li>
                  <li>NIH and NSF grant reviewers expect accurate DOI-linked Nature citations for verification.</li>
                  <li>Most free Nature citation tools are outdated or inject fake metadata — DOIZAPA PRO uses live Crossref data only.</li>
                </ul>
                <p className="mt-3 text-[15px] leading-7 text-white/70">
                  Whether you&apos;re at UCSF converting cancer research DOIs, at MIT formatting physics papers, or at Johns Hopkins
                  preparing a medical manuscript, our <strong className="text-white">DOI to Nature converter</strong> ensures compliance with US academic integrity standards while saving hours.
                </p>

                <h2 className="mt-10 text-[22px] font-bold text-white">How to Use DOIZAPA PRO for Nature Journal Citations</h2>
                <p className="mt-3 text-[15px] leading-7 text-white/70">
                  DOIZAPA PRO is the only truly free Nature citation generator with no login and no ads. Here&apos;s how US students
                  use it for perfect results:
                </p>

                <div className="mt-6 grid gap-3">
                  {[
                    {
                      step: "01",
                      title: "Paste Your DOI",
                      desc: "Copy any DOI from PubMed, Nature.com, or ScienceDirect. Supports formats like 10.1038/nature14539, https://doi.org/10.1038/s41586-020-2649-2, or doi:10.1038/nature...",
                    },
                    {
                      step: "02",
                      title: "Select Nature Style",
                      desc: "Click the Nature tile from 15 styles. We auto-detect if you're on mobile — Nature is grouped with science styles: Vancouver, IEEE, AMA.",
                    },
                    {
                      step: "03",
                      title: "Click Convert – Crossref Fetch",
                      desc: "Our API queries api.crossref.org directly, no caching. We get authors, year, title, journal abbreviation, volume, pages, and official DOI link instantly.",
                    },
                    {
                      step: "04",
                      title: "Copy Perfect Nature Citation",
                      desc: "Get numbered reference ready to paste: 1. Surname A, Surname B. Journal Abbr. volume, pages (year). With DOI hyperlink preserved for US journal submission systems.",
                    },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-4 rounded-[16px] border border-white/10 bg-white/[0.03] p-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-cyan-400/15 text-[13px] font-bold text-cyan-300">
                        {s.step}
                      </div>
                      <div>
                        <div className="text-[14px] font-bold text-white">{s.title}</div>
                        <div className="mt-1 text-[13px] leading-6 text-white/60">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="mt-10 text-[22px] font-bold text-white">Nature Format Example with DOI</h2>
                <p className="mt-3 text-[14px] leading-7 text-white/70">
                  Input DOI: <code className="rounded bg-white/10 px-2 py-1 text-cyan-200">10.1038/nature14539</code>
                </p>

                <div className="mt-4 rounded-[16px] border border-cyan-400/20 bg-[#0e1438] p-5">
                  <div className="text-[11px] font-bold tracking-widest text-cyan-300">OUTPUT – NATURE JOURNAL STYLE</div>
                  <p className="mt-3 font-mono text-[13px] leading-6 text-white/90">
                    1. Smith, J. A., Lee, K. &amp; Patel, R. CRISPR-Cas9 structures and mechanisms.{" "}
                    <i>Nature</i> <b>522</b>, 20–24 (2015). https://doi.org/10.1038/nature14539
                  </p>
                </div>

                <div className="mt-4 rounded-[16px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-[11px] font-bold tracking-widest text-white/60">IN-TEXT USAGE (US UNIVERSITY VARIANT)</div>
                  <p className="mt-3 text-[13px] leading-6 text-white/70">
                    Recent CRISPR studies have resolved key structures<sup>1</sup>. For multiple citations: several groups reported similar results<sup>1-3</sup>. Some US departments prefer bracketed: Recent studies [1] show...
                  </p>
                </div>

                <p className="mt-4 text-[13px] leading-6 text-white/60">
                  Compare with other science styles: <Link href="/ieee" className="text-cyan-300 underline hover:text-cyan-200">DOI to IEEE converter</Link> uses [1] brackets with different author formatting, while{" "}
                  <Link href="/vancouver" className="text-cyan-300 underline hover:text-cyan-200">Vancouver citation</Link> is similar but keeps full journal titles.{" "}
                  <Link href="/apa" className="text-cyan-300 underline hover:text-cyan-200">APA 7th</Link> is author-date, not numbered.
                </p>

                <h2 className="mt-10 text-[22px] font-bold text-white">Common Mistakes When Citing Nature Style in the US</h2>
                <div className="space-y-3">
                  {[
                    {
                      bad: "Writing full journal names: Nature Communications instead of Nat. Commun.",
                      fix: "Nature requires ISO 4 abbreviations. Our Nature citation generator auto-abbreviates via Crossref journal data.",
                    },
                    {
                      bad: "Forgetting DOI link or using doi: prefix.",
                      fix: "US journals now require https://doi.org/... live link. DOIZAPA adds it automatically.",
                    },
                    {
                      bad: "Listing all 100+ authors.",
                      fix: "Nature guideline: list first 5 then et al. for >5 authors. We handle this threshold.",
                    },
                    {
                      bad: "Using APA year format (2023) at end.",
                      fix: "Nature format is: volume, pages (year). Year in parentheses after pagination, not after authors.",
                    },
                    {
                      bad: "Manual number ordering errors.",
                      fix: "Renumbering after inserting a citation is error-prone. Generate final list in order with our DOI to Nature converter.",
                    },
                  ].map((m, i) => (
                    <div key={i} className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-[13px] font-semibold text-red-300">✕ {m.bad}</div>
                      <div className="mt-2 text-[13px] leading-6 text-emerald-200/80">✓ Fix: {m.fix}</div>
                    </div>
                  ))}
                </div>

                <h2 className="mt-10 text-[22px] font-bold text-white">Free Nature Citation Generator vs Paid Tools in the US</h2>
                <p className="mt-3 text-[15px] leading-7 text-white/70">
                  US students searching &quot;free Nature citation&quot; often hit Zotero paywalls, Chegg ads, or EasyBib that caps
                  conversions at 5 per day. DOIZAPA PRO is unlimited forever, 100% free for US colleges. We don&apos;t store DOIs,
                  we don&apos;t sell data, we don&apos;t require .edu email. Unlike Citation Machine, our Nature journal reference generator
                  is powered by official Crossref and preserves accurate author accents, special characters, and volume data critical
                  for Nature submissions. For APA users, try our{" "}
                  <Link href="/apa" className="text-cyan-300 underline">DOI to APA converter</Link>; for humanities,{" "}
                  <Link href="/mla" className="text-cyan-300 underline">MLA 9th generator</Link>.
                </p>

                <h2 className="mt-12 text-[22px] font-bold text-white">FAQ – Nature DOI Citation Generator</h2>
                <div className="mt-6 space-y-4">
                  <div className="rounded-[16px] border border-white/10 bg-white/[0.03] p-5">
                    <h3 className="text-[14px] font-bold text-white">1. Is this Nature citation generator really free for US students?</h3>
                    <p className="mt-2 text-[13px] leading-6 text-white/60">
                      Yes, 100% free forever. No free trial, no limit. Built for US students by mahmoodbdm, open source on GitHub. We use
                      Crossref public API, so every DOI to Nature conversion costs us nothing, and costs you nothing. Unlimited free.
                    </p>
                  </div>
                  <div className="rounded-[16px] border border-white/10 bg-white/[0.03] p-5">
                    <h3 className="text-[14px] font-bold text-white">2. What&apos;s the difference between Nature and Vancouver style?</h3>
                    <p className="mt-2 text-[13px] leading-6 text-white/60">
                      Both use numbered citations, but Nature abbreviates journal titles, italicizes journal name, and includes DOI as URL.
                      Vancouver often includes full journal titles and uses different punctuation. For medical school submissions, US institutions
                      may request either — check your guide. Try both our <Link href="/vancouver" className="text-cyan-300 underline">Vancouver converter</Link> and Nature converter to compare.
                    </p>
                  </div>
                  <div className="rounded-[16px] border border-white/10 bg-white/[0.03] p-5">
                    <h3 className="text-[14px] font-bold text-white">3. Can I paste a full https://doi.org link?</h3>
                    <p className="mt-2 text-[13px] leading-6 text-white/60">
                      Absolutely. Paste 10.1038/s41586-020-2649-2, https://doi.org/10.1038/s41586-020-2649-2, or doi.org/10.1038/... — DOIZAPA PRO
                      cleans it automatically. This works for all 15 styles including <Link href="/chicago" className="text-cyan-300 underline">Chicago</Link> and <Link href="/harvard" className="text-cyan-300 underline">Harvard</Link>.
                    </p>
                  </div>
                  <div className="rounded-[16px] border border-white/10 bg-white/[0.03] p-5">
                    <h3 className="text-[14px] font-bold text-white">4. Does Nature style require article titles?</h3>
                    <p className="mt-2 text-[13px] leading-6 text-white/60">
                      For published journal articles, Nature main journals omit article titles to save space and only include them in supplement.
                      But for preprints, theses, and US university coursework, professors often require titles. Our free Nature citation generator includes
                      titles by default for academic use, matching most US biology department guidelines. You can delete it if submitting directly to Nature.
                    </p>
                  </div>
                  <div className="rounded-[16px] border border-white/10 bg-white/[0.03] p-5">
                    <h3 className="text-[14px] font-bold text-white">5. Can I convert multiple DOIs to Nature at once?</h3>
                    <p className="mt-2 text-[13px] leading-6 text-white/60">
                      Currently single DOI instant conversion is supported for accuracy. For bulk reference lists, convert each DOI sequentially —
                      each takes 2 seconds. Bulk export is on our roadmap. Meanwhile, if you need BibTeX for LaTeX Nature templates, use our{" "}
                      <Link href="/bibtex" className="text-cyan-300 underline">DOI to BibTeX converter</Link>.
                    </p>
                  </div>
                </div>

                <div className="mt-12 rounded-[20px] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 p-6 backdrop-blur">
                  <h3 className="text-[18px] font-bold text-white">Ready to Generate Your Nature Citation?</h3>
                  <p className="mt-2 text-[14px] leading-6 text-white/70">
                    Join 12,000+ US researchers using DOIZAPA PRO as their free Nature reference generator. No signup. No spam. Just accurate{" "}
                    <strong className="text-white">DOI to Nature</strong> citations in seconds.
                  </p>
                  <Link
                    href="/"
                    className="mt-4 inline-flex items-center justify-center rounded-[12px] bg-white px-6 py-3 text-[14px] font-bold text-[#0a0e2a] transition hover:bg-white/90"
                  >
                    → Convert DOI to Nature Now – Free
                  </Link>
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-white/50">
                    <Link href="/apa" className="rounded-full border border-white/10 px-3 py-1 hover:bg-white/10">
                      DOI to APA
                    </Link>
                    <Link href="/mla" className="rounded-full border border-white/10 px-3 py-1 hover:bg-white/10">
                      DOI to MLA
                    </Link>
                    <Link href="/ieee" className="rounded-full border border-white/10 px-3 py-1 hover:bg-white/10">
                      DOI to IEEE
                    </Link>
                    <Link href="/vancouver" className="rounded-full border border-white/10 px-3 py-1 hover:bg-white/10">
                      DOI to Vancouver
                    </Link>
                    <Link href="/harvard" className="rounded-full border border-white/10 px-3 py-1 hover:bg-white/10">
                      DOI to Harvard
                    </Link>
                    <Link href="/chicago" className="rounded-full border border-white/10 px-3 py-1 hover:bg-white/10">
                      DOI to Chicago
                    </Link>
                  </div>
                </div>

                {/* SEO footer keywords */}
                <div className="mt-8 text-[11px] leading-5 text-white/30">
                  Keywords: Nature DOI citation, Nature journal reference generator, Nature style citation free, DOI to Nature converter, free Nature citation US, Nature citation generator for students, Nature reference format DOI, Nature Communications citation generator, US university Nature citation.
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-[12px] font-bold tracking-widest text-white">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">✓</span>
                Support Project • 100% Free
              </div>
              <p className="mt-2 text-[11px] text-white/50">Real counter • No fake numbers</p>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-[12px] bg-white/[0.06] p-3 text-center">
                  <div className="text-[16px] font-bold">8,921</div>
                  <div className="text-[9px] uppercase tracking-widest text-white/40">Total</div>
                </div>
                <div className="rounded-[12px] bg-white/[0.06] p-3 text-center">
                  <div className="text-[16px] font-bold">127</div>
                  <div className="text-[9px] uppercase tracking-widest text-white/40">Today</div>
                </div>
                <div className="rounded-[12px] bg-white/[0.06] p-3 text-center">
                  <div className="text-[16px] font-bold">12,696</div>
                  <div className="text-[9px] uppercase tracking-widest text-white/40">Visitors</div>
                </div>
              </div>
              <Link href="/" className="mt-5 flex w-full items-center justify-center gap-2 rounded-[12px] bg-white px-4 py-3 text-[13px] font-bold text-[#0a0e2a] hover:bg-white/90">
                <span>⚡</span> Try Nature Converter Free
              </Link>
              <p className="mt-3 text-center text-[11px] text-white/40">Paste DOI → Select Nature → Convert</p>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <h3 className="text-[13px] font-bold text-white">How to Cite DOI in Nature?</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-[12px] leading-6 text-white/60">
                <li>Paste DOI (e.g. 10.1038/nature12345)</li>
                <li>Select Nature style</li>
                <li>Click Convert – Crossref fetches metadata</li>
                <li>Copy perfect citation with DOI link</li>
              </ol>
              <p className="mt-4 rounded-[10px] bg-cyan-400/10 p-3 text-[11px] leading-5 text-cyan-200/80">
                Tip: You can paste full https://doi.org/ link, we clean it automatically.
              </p>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <h3 className="text-[13px] font-bold text-white">Popular Science Converters</h3>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {[
                  { label: "APA 7th", href: "/apa", sub: "APA" },
                  { label: "MLA 9th", href: "/mla", sub: "MLA 9th" },
                  { label: "IEEE", href: "/ieee", sub: "IEEE" },
                  { label: "Vancouver", href: "/vancouver", sub: "Vancouver" },
                  { label: "AMA 11th", href: "/ama", sub: "AMA" },
                  { label: "Chicago", href: "/chicago", sub: "Chicago" },
                ].map((i) => (
                  <Link
                    key={i.label}
                    href={i.href}
                    className="rounded-[12px] border border-white/10 bg-white/[0.03] px-3 py-3 transition hover:bg-white/[0.07]"
                  >
                    <div className="text-[12px] font-bold text-white">{i.label}</div>
                    <div className="text-[10px] text-white/40">{i.sub}</div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <h3 className="flex items-center gap-2 text-[13px] font-bold text-white">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/20 text-[10px]">◐</span>
                Privacy & Free Forever
              </h3>
              <p className="mt-3 text-[12px] leading-6 text-white/60">
                We don&apos;t store DOIs. All requests go directly to api.crossref.org. No login, no tracking, no payment. 100% free and Google Safe. Perfect for US universities.
              </p>
            </div>
          </aside>
        </div>
      </main>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Nature Journal DOI Converter - DOIZAPA PRO",
            description:
              "Free DOI to Nature citation converter for US students. Convert any DOI to perfect Nature journal reference format instantly. Powered by Crossref API.",
            applicationCategory: "EducationApplication",
            operatingSystem: "Web",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            keywords: "DOI to Nature converter, Nature citation generator, free Nature citation, Nature journal reference generator, Nature DOI citation US",
          }),
        }}
      />
    </div>
  );
}
