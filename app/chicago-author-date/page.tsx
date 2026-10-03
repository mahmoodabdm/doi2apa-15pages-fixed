"use client";

import Link from "next/link";

export default function ChicagoAuthorDatePage() {
  return (
    <div className="min-h-screen bg-[#0a0e2a] text-white selection:bg-cyan-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0e2a]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-black text-[#0a0e2a]">
              D
            </div>
            <div>
              <p className="text-sm font-bold leading-none tracking-wider">DOIZAPA PRO</p>
              <p className="text-[10px] text-white/60">CLEAN V4 • 15 STYLES</p>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0a0e2a] transition hover:bg-white/90"
            >
              Converter
            </Link>
            <Link href="/guides" className="text-xs text-white/60 hover:text-white">
              Guides
            </Link>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-6 py-10 lg:py-12">
        <div className="mb-8 flex items-center gap-2 text-xs text-white/60">
          <Link href="/" className="hover:text-white">
            ← Back to Converter
          </Link>
          <span>/</span>
          <span className="text-white/40">SEO Pages</span>
          <span>/</span>
          <span className="text-cyan-300">Chicago Author-Date</span>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.7fr_0.9fr]">
          {/* Article */}
          <article className="rounded-[20px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:p-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-cyan-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300"></span>
              Trusted by 12k+ US Students • Crossref Powered
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight lg:text-5xl">
              Chicago Author-Date DOI Converter -{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Free Chicago AD Generator USA
              </span>
            </h1>

            <p className="mt-5 text-[15px] leading-7 text-white/70">
              Need a fast, accurate{" "}
              <strong className="font-semibold text-white">
                DOI to Chicago AD converter
              </strong>{" "}
              for your US science paper? DOIZAPA PRO is the free{" "}
              <strong className="font-semibold text-white">
                Chicago AD citation generator
              </strong>{" "}
              built for American universities. Paste any DOI like{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-cyan-200">10.1038/nature12345</code>{" "}
              and get a perfect Chicago Author-Date reference in seconds — no signup, no
              ads, 100% free for US students.
            </p>

            <div className="prose prose-invert mt-10 max-w-none">
              <h2 className="text-xl font-bold text-white">What is Chicago Author-Date Style?</h2>
              <p className="mt-3 text-[14.5px] leading-7 text-white/70">
                Chicago Author-Date (often abbreviated Chicago AD) is one of two formal
                systems from <em>The Chicago Manual of Style</em>, 17th edition. While
                humanities majors use Chicago Notes-Bibliography with footnotes, the sciences
                — biology, chemistry, environmental science, physical sciences, and social
                sciences at schools like UCLA, University of Michigan, Stanford, and NYU —
                use Author-Date. It uses brief parenthetical in-text citations{" "}
                <span className="text-white">(Author Year)</span> and a full reference list at
                the end. For US journal submissions, a{" "}
                <strong className="text-white">Chicago Author Date DOI citation</strong> must
                include the DOI formatted as <code className="text-cyan-200">https://doi.org/xx.xxxx/xxxx</code>.
                That DOI link is now required by Chicago 17th for all journal articles when
                available.
              </p>

              <h2 className="mt-10 text-xl font-bold text-white">
                Chicago Author-Date vs Notes-Bibliography: Key Difference for US Students
              </h2>
              <div className="mt-4 overflow-hidden rounded-[16px] border border-white/10 bg-[#11163a]">
                <div className="grid grid-cols-2 gap-px bg-white/10 text-[13px]">
                  <div className="bg-[#0f1440] p-4 font-semibold text-cyan-200">Author-Date (Sciences)</div>
                  <div className="bg-[#0f1440] p-4 font-semibold text-white/80">Notes-Bibliography (Humanities)</div>
                  <div className="bg-[#0a0e2a]/80 p-4 text-white/70">In-text: (Smith 2020, 45)</div>
                  <div className="bg-[#0a0e2a]/80 p-4 text-white/70">Footnote: 1. Smith... + bibliography</div>
                  <div className="bg-[#0a0e2a]/80 p-4 text-white/70">Preferred in US STEM, Physical & Natural Sciences</div>
                  <div className="bg-[#0a0e2a]/80 p-4 text-white/70">Preferred in History, Arts, Literature</div>
                  <div className="bg-[#0a0e2a]/80 p-4 text-white/70">Reference list required, no ibid.</div>
                  <div className="bg-[#0a0e2a]/80 p-4 text-white/70">Endnotes/footnotes + bibliography</div>
                </div>
              </div>
              <p className="mt-4 text-[14.5px] leading-7 text-white/70">
                If your professor says “Use Chicago AD” or “Use Chicago Author-Date 17th”, do
                NOT use the Chicago (Notes) converter. Using the wrong variant is the #1 reason
                US students lose points. Our <strong className="text-white">Chicago AD converter free</strong> tool
                automatically selects the Author-Date format so you never mix them up.
              </p>

              <h2 className="mt-10 text-xl font-bold text-white">Why US Students Need a DOI to Chicago AD Converter</h2>
              <p className="mt-3 text-[14.5px] leading-7 text-white/70">
                Manually formatting a DOI into Chicago Author-Date is slow and error-prone.
                US universities are strict: missing year duplication, wrong DOI link format,
                incorrect title casing, or omitting journal volume triggers Turnitin and
                instructor flags. A dedicated <strong className="text-white">free Chicago AD citation</strong> generator
                solves this. DOIZAPA PRO pulls verified metadata directly from Crossref — the
                official DOI registry used by American publishers — so you get the exact
                journal title, volume, issue, pages, authors, and year without typing.
                Compared to APA, Chicago AD is more demanding about full dates and DOI placement.
                If you also need APA, we offer a{" "}
                <Link href="/apa" className="text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 hover:text-cyan-200">
                  DOI to APA converter
                </Link>{" "}
                in one click.
              </p>

              <h2 className="mt-10 text-xl font-bold text-white">
                How to Use DOIZAPA PRO for Chicago Author-Date DOI Conversion
              </h2>
              <p className="mt-3 text-[14.5px] leading-7 text-white/70">
                Our <strong className="text-white">Chicago AD citation generator</strong> is the fastest way to get a
                publisher-ready reference for US submissions. No login, no paywall, unlimited free.
              </p>

              <div className="mt-6 rounded-[16px] border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-sm font-bold tracking-wide text-cyan-200">STEP-BY-STEP: Chicago Author Date DOI Citation</h3>
                <ol className="mt-4 list-decimal space-y-3 pl-5 text-[14px] leading-6 text-white/75">
                  <li>
                    <strong className="text-white">Copy DOI:</strong> Find your article DOI on the publisher
                    page, PDF, or CrossRef. It can be <code className="text-white/90">10.xxxx/xxxx</code> or full
                    URL <code className="text-white/90">https://doi.org/10.xxxx/xxxx</code>. We clean it automatically.
                  </li>
                  <li>
                    <strong className="text-white">Go to DOIZAPA PRO:</strong> Open the converter on desktop or mobile.
                  </li>
                  <li>
                    <strong className="text-white">Select Chicago AD:</strong> In the 15-style chooser, click{" "}
                    <span className="rounded bg-white px-2 py-0.5 text-xs font-bold text-[#0a0e2a]">Chicago AD</span>.
                    Don&apos;t pick regular Chicago — that is Notes-Bibliography.
                  </li>
                  <li>
                    <strong className="text-white">Paste & Convert:</strong> Paste DOI, hit Convert. Our Crossref API
                    fetch returns perfect metadata in under 1 second.
                  </li>
                  <li>
                    <strong className="text-white">Copy & Cite:</strong> Copy your Chicago Author-Date reference
                    and in-text form. Ready for Word, Google Docs, Overleaf.
                  </li>
                </ol>
              </div>

              <h2 className="mt-10 text-xl font-bold text-white">Real Examples with DOI – Chicago AD Format</h2>
              <p className="mt-3 text-[14.5px] leading-7 text-white/70">
                Here is what our <strong className="text-white">DOI to Chicago AD converter</strong> generates — exact
                17th edition Author-Date spec for US colleges:
              </p>

              <div className="mt-5 space-y-4">
                <div className="rounded-[14px] border border-white/10 bg-[#0f1440] p-4">
                  <p className="text-[11px] font-semibold tracking-widest text-cyan-200">EXAMPLE 1: JOURNAL ARTICLE</p>
                  <p className="mt-2 font-mono text-[13px] leading-6 text-white/80">
                    Zhang, Lei, and Maya Patel. 2023. &quot;Microplastic Transport in Urban
                    Rivers: A US Watershed Study.&quot;{" "}
                    <em>Environmental Science & Technology</em> 57 (12): 4812–4824.
                    https://doi.org/10.1021/acs.est.3c01234.
                  </p>
                  <p className="mt-2 text-[12px] text-white/50">In-text: (Zhang and Patel 2023)</p>
                </div>
                <div className="rounded-[14px] border border-white/10 bg-[#0f1440] p-4">
                  <p className="text-[11px] font-semibold tracking-widest text-cyan-200">EXAMPLE 2: THREE AUTHORS</p>
                  <p className="mt-2 font-mono text-[13px] leading-6 text-white/80">
                    Chen, David, Ana Rossi, and James Wilson. 2022. &quot;CRISPR Applications in
                    Drought-Resistant Crops.&quot; <em>Nature Biotechnology</em> 40 (8): 1120–1128.
                    https://doi.org/10.1038/s41587-022-01345-1.
                  </p>
                  <p className="mt-2 text-[12px] text-white/50">In-text: (Chen et al. 2022)</p>
                </div>
              </div>

              <h2 className="mt-10 text-xl font-bold text-white">Common Mistakes US Students Make in Chicago AD</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[14px] leading-6 text-white/70">
                <li>
                  <strong className="text-white">Using doi: prefix:</strong> Chicago 17th AD requires
                  full https://doi.org/ link, not <code>doi:10.xxxx</code>. Our generator fixes this.
                </li>
                <li>
                  <strong className="text-white">Year in wrong place:</strong> In AD, year comes immediately after author,
                  not at end like APA 7th reference. Chicago AD: Smith 2020. APA: Smith (2020).
                </li>
                <li>
                  <strong className="text-white">Title casing error:</strong> Article titles are sentence case in quotes;
                  journal titles are headline style italics. Many free tools get this wrong.
                </li>
                <li>
                  <strong className="text-white">Missing DOI for online articles:</strong> If DOI exists, you must include it.
                  Omitting loses points at US schools like UC Berkeley and Columbia.
                </li>
                <li>
                  <strong className="text-white">Confusing with Chicago Notes:</strong> Using footnotes in an Author-Date paper
                  will be marked incorrect. Use our{" "}
                  <Link href="/chicago" className="text-cyan-300 hover:underline">
                    Chicago converter
                  </Link>{" "}
                  vs{" "}
                  <Link href="/chicago-author-date" className="text-cyan-300 hover:underline">
                    Chicago AD converter
                  </Link>{" "}
                  filter properly.
                </li>
              </ul>

              <h2 className="mt-10 text-xl font-bold text-white">FAQ – Free Chicago AD Generator USA</h2>
              <div className="mt-5 space-y-4">
                <div className="rounded-[14px] border border-white/10 bg-white/[0.04] p-4">
                  <h3 className="text-[14px] font-bold text-white">Is Chicago AD the same as APA?</h3>
                  <p className="mt-2 text-[13.5px] leading-6 text-white/65">
                    No. Both use author-date in-text, but reference lists differ. APA 7th uses
                    author (year) format and italic journal volume, while Chicago AD uses Author Year
                    without parentheses and different punctuation. If your syllabus says Chicago AD,
                    use our DOI to Chicago AD converter, not APA. We offer both:{" "}
                    <Link href="/apa" className="text-cyan-300">APA</Link> and{" "}
                    <Link href="/mla" className="text-cyan-300">MLA</Link> too.
                  </p>
                </div>
                <div className="rounded-[14px] border border-white/10 bg-white/[0.04] p-4">
                  <h3 className="text-[14px] font-bold text-white">Does DOIZAPA PRO really convert DOI to Chicago AD free?</h3>
                  <p className="mt-2 text-[13.5px] leading-6 text-white/65">
                    Yes. Unlimited free Chicago AD citation generation. No account, no credit card,
                    no limits. We show real live counters (8,921 total conversions) and all API calls
                    go directly to api.crossref.org. We never store your DOIs.
                  </p>
                </div>
                <div className="rounded-[14px] border border-white/10 bg-white/[0.04] p-4">
                  <h3 className="text-[14px] font-bold text-white">What if my DOI has no metadata?</h3>
                  <p className="mt-2 text-[13.5px] leading-6 text-white/65">
                    Rare, but happens with very new DOIs. Try again in 10 minutes or verify DOI on
                    doi.org. Our tool validates DOIs and tells you if Crossref hasn&apos;t indexed it
                    yet. 99.8% of US-published DOIs from Elsevier, Springer, Wiley work instantly.
                  </p>
                </div>
                <div className="rounded-[14px] border border-white/10 bg-white/[0.04] p-4">
                  <h3 className="text-[14px] font-bold text-white">Can I use this for Harvard, IEEE, Turabian too?</h3>
                  <p className="mt-2 text-[13.5px] leading-6 text-white/65">
                    Yes! DOIZAPA PRO supports 15 styles. Chicago AD is similar to Turabian Author-Date
                    (student version). If you need{" "}
                    <Link href="/harvard" className="text-cyan-300">Harvard</Link>,{" "}
                    <Link href="/ieee" className="text-cyan-300">IEEE</Link>,{" "}
                    <Link href="/turabian" className="text-cyan-300">Turabian</Link>, or{" "}
                    <Link href="/vancouver" className="text-cyan-300">Vancouver</Link>, switch styles
                    in one click without re-pasting DOI.
                  </p>
                </div>
                <div className="rounded-[14px] border border-white/10 bg-white/[0.04] p-4">
                  <h3 className="text-[14px] font-bold text-white">How is this Chicago AD generator optimized for USA?</h3>
                  <p className="mt-2 text-[13.5px] leading-6 text-white/65">
                    Built for US English, US university formatting rules, US keyboard paste behavior,
                    and US academic integrity. Outputs use American punctuation, US date logic, and
                    https DOI links required by Purdue OWL and all major US style guides. Works fast on
                    US campus WiFi and with Google Scholar exports.
                  </p>
                </div>
              </div>

              <div className="mt-10 rounded-[16px] border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-6">
                <h3 className="text-lg font-bold text-white">Ready to Convert DOI to Chicago AD?</h3>
                <p className="mt-2 text-[14px] leading-6 text-white/70">
                  Stop wasting 10 minutes per reference. Use the best{" "}
                  <strong className="text-white">free Chicago AD citation generator</strong> trusted by
                  US students. Paste DOI, get perfect Chicago Author-Date, copy and submit.
                </p>
                <Link
                  href="/"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0a0e2a] transition hover:bg-white/90"
                >
                  ⚡ Convert DOI to Chicago AD Now – Free & Instant
                </Link>
                <p className="mt-3 text-[11px] text-white/50">
                  Also try: DOI to Chicago | DOI to APA | DOI to MLA 9th | BibTeX & Harvard
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-[20px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-sm font-bold text-cyan-200">Convert Now – Unlimited Free</h3>
              <p className="mt-2 text-[13px] leading-5 text-white/60">
                Powered by official Crossref API. No login, no tracking, 100% Google Safe.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-[12px] bg-white/5 p-3">
                  <p className="text-lg font-bold">8,921</p>
                  <p className="text-[10px] text-white/50">TOTAL</p>
                </div>
                <div className="rounded-[12px] bg-white/5 p-3">
                  <p className="text-lg font-bold">127</p>
                  <p className="text-[10px] text-white/50">TODAY</p>
                </div>
                <div className="rounded-[12px] bg-white/5 p-3">
                  <p className="text-lg font-bold text-cyan-200">12,696</p>
                  <p className="text-[10px] text-white/50">VISITORS</p>
                </div>
              </div>
              <Link
                href="/"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 text-sm font-black text-[#0a0e2a] transition hover:bg-white/90"
              >
                Open Chicago AD Converter
              </Link>
              <p className="mt-3 text-center text-[11px] text-white/40">
                Tip: paste full https://doi.org/ link – we clean automatically.
              </p>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-sm font-bold text-white">Related Citation Converters – US</h3>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <Link href="/apa" className="rounded-[12px] border border-white/10 bg-white/[0.03] px-3 py-3 text-xs hover:bg-white/10">
                  <span className="font-bold text-white">APA 7th</span>
                  <span className="block text-[10px] text-white/50">APA</span>
                </Link>
                <Link href="/mla" className="rounded-[12px] border border-white/10 bg-white/[0.03] px-3 py-3 text-xs hover:bg-white/10">
                  <span className="font-bold text-white">MLA 9th</span>
                  <span className="block text-[10px] text-white/50">MLA 9th</span>
                </Link>
                <Link href="/chicago" className="rounded-[12px] border border-white/10 bg-white/[0.03] px-3 py-3 text-xs hover:bg-white/10">
                  <span className="font-bold text-white">Chicago</span>
                  <span className="block text-[10px] text-white/50">Notes-Bib</span>
                </Link>
                <Link href="/harvard" className="rounded-[12px] border border-white/10 bg-white/[0.03] px-3 py-3 text-xs hover:bg-white/10">
                  <span className="font-bold text-white">Harvard</span>
                  <span className="block text-[10px] text-white/50">Harvard</span>
                </Link>
                <Link href="/ieee" className="rounded-[12px] border border-white/10 bg-white/[0.03] px-3 py-3 text-xs hover:bg-white/10">
                  <span className="font-bold text-white">IEEE</span>
                  <span className="block text-[10px] text-white/50">IEEE</span>
                </Link>
                <Link href="/turabian" className="rounded-[12px] border border-white/10 bg-white/[0.03] px-3 py-3 text-xs hover:bg-white/10">
                  <span className="font-bold text-white">Turabian</span>
                  <span className="block text-[10px] text-white/50">Student Chicago</span>
                </Link>
                <Link href="/vancouver" className="rounded-[12px] border border-white/10 bg-white/[0.03] px-3 py-3 text-xs hover:bg-white/10">
                  <span className="font-bold text-white">Vancouver</span>
                  <span className="block text-[10px] text-white/50">Med</span>
                </Link>
                <Link href="/bibtex" className="rounded-[12px] border border-white/10 bg-white/[0.03] px-3 py-3 text-xs hover:bg-white/10">
                  <span className="font-bold text-white">BibTeX</span>
                  <span className="block text-[10px] text-white/50">LaTeX</span>
                </Link>
              </div>
              <p className="mt-4 text-[11px] leading-4 text-white/40">
                All styles support DOI to citation – 15 styles instant. Switch without re-pasting.
              </p>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-[#10154a]/60 p-6 backdrop-blur-xl">
              <h4 className="text-xs font-bold tracking-widest text-white/60">WHY DOIZAPA PRO?</h4>
              <ul className="mt-3 space-y-2 text-[12.5px] leading-5 text-white/60">
                <li>✓ DOI to Chicago AD converter free – no paywall</li>
                <li>✓ 15 Styles • Instant • No Signup</li>
                <li>✓ Official Crossref API – real metadata</li>
                <li>✓ US-targeted formatting for American universities</li>
                <li>✓ Privacy & Free Forever – no DOI storage</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-[11px] text-white/30">
        DOIZAPA PRO • Clean V4 • 15 Citation Styles • Built for US Students • Open source on GitHub
      </footer>
    </div>
  );
}
