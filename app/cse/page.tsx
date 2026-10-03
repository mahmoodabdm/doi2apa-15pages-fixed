"use client";

import Link from "next/link";

export default function CSEPage() {
  return (
    <div className="min-h-screen bg-[#0a0e2a] text-white selection:bg-cyan-400/30">
      {/* Background Gradients */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-[300px] left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-600/15 to-purple-600/20 blur-[80px]" />
        <div className="absolute top-[40%] -right-[200px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[100px]" />
      </div>

      {/* Header */}
      <header className="relative sticky top-0 z-40 border-b border-white/5 bg-[#0a0e2a]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-white text-[14px] font-black tracking-tight text-[#0a0e2a]">
              D
            </div>
            <div className="leading-none">
              <div className="text-[14px] font-bold tracking-tight">DOIZAPA PRO</div>
              <div className="text-[10px] tracking-widest text-white/50">CLEAN V4 • 15 STYLES</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur md:flex">
            <Link href="/" className="rounded-full bg-white px-4 py-1.5 text-[13px] font-semibold text-[#0a0e2a]">Converter</Link>
            <Link href="/guides" className="rounded-full px-4 py-1.5 text-[13px] text-white/70 hover:text-white">Guides</Link>
            <Link href="/privacy" className="rounded-full px-4 py-1.5 text-[13px] text-white/70 hover:text-white">Privacy</Link>
            <Link href="/about" className="rounded-full px-4 py-1.5 text-[13px] text-white/70 hover:text-white">About</Link>
          </nav>
          <Link href="/" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] font-medium backdrop-blur hover:bg-white/10">
            ← Back to Converter
          </Link>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.65fr_0.85fr]">
          {/* Article */}
          <article className="rounded-[20px] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl md:p-10">
            {/* Breadcrumb */}
            <div className="mb-6 flex flex-wrap items-center gap-2 text-[11px] tracking-wide text-white/50">
              <Link href="/" className="hover:text-cyan-300">Home</Link>
              <span>›</span>
              <Link href="/guides" className="hover:text-cyan-300">Converters</Link>
              <span>›</span>
              <span className="text-white/80">CSE 8th Edition</span>
            </div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold text-cyan-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" /> Trusted by 12k+ US Students • Council of Science Editors
            </div>

            <h1 className="text-balance text-3xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
              CSE DOI Converter – <span className="text-cyan-300">CSE DOI Citation Converter</span> – Free CSE 8th Generator USA
            </h1>

            <p className="mt-5 text-[15px] leading-7 text-white/75">
              Need a perfect <strong className="text-white">DOI to CSE converter</strong> for your biology paper? Our <strong className="text-white">free CSE citation generator</strong> converts any DOI into a flawless CSE 8th edition citation in under 2 seconds. Built for US students at universities like UCLA, Harvard, Stanford, and UT Austin, DOIZAPA PRO fetches metadata directly from Crossref and formats it in Council of Science Editors style — including both name-year and citation-sequence systems. No sign-up, no paywall, 100% accurate for American science majors.
            </p>

            <div className="mt-8 space-y-10 text-[14.5px] leading-7 text-white/80">
              <section>
                <h2 className="mb-3 text-xl font-bold text-white">What is CSE Style 8th Edition?</h2>
                <p>
                  CSE (Council of Science Editors) style is the standard citation format for life sciences in the United States. Formerly called CBE, the <strong className="text-white">CSE 8th edition</strong> is required by most US biology, zoology, genetics, ecology, and biomedical programs. Unlike <Link href="/apa" className="text-cyan-300 hover:underline">APA 7th</Link> which is used in psychology or <Link href="/mla" className="text-cyan-300 hover:underline">MLA 9th</Link> for humanities, CSE is purpose-built for scientific literature where journal titles are abbreviated and space matters.
                </p>
                <p className="mt-3">
                  CSE 8th offers three systems, but US universities almost always require <strong className="text-white">name-year</strong> or <strong className="text-white">citation-sequence</strong>:
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 marker:text-cyan-300">
                  <li><strong className="text-white">Name-Year:</strong> Similar to Harvard — (Smith 2023) in-text, reference list alphabetically. Preferred at UC system, Michigan, UW.</li>
                  <li><strong className="text-white">Citation-Sequence:</strong> Superscript numbers or bracketed numbers [1] in order of appearance. Common at Johns Hopkins, Duke Medicine.</li>
                  <li><strong className="text-white">Citation-Name:</strong> Numbers alphabetized then referenced. Less common in US undergrad work.</li>
                </ul>
                <p className="mt-3">
                  Our <strong className="text-white">CSE DOI citation generator</strong> supports both primary US variants automatically and includes DOI as <code className="rounded bg-white/10 px-1.5 py-0.5 text-cyan-200">doi:10.XXXX/xxxx</code> or <code className="rounded bg-white/10 px-1.5 py-0.5 text-cyan-200">https://doi.org/...</code> per instructor preference.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-bold text-white">Why US Biology Students Need a DOI to CSE Converter</h2>
                <p>
                  If you&apos;re a biology, pre-med, or environmental science major in the USA, you live in PubMed and Crossref. Professors at top US programs deduct points for missing italics, incorrect journal abbreviation, or wrong DOI format. Manual CSE is painful — journals must be abbreviated per ISO (e.g., <em>Proc Natl Acad Sci USA</em> not Proceedings of the National Academy of Sciences), titles use sentence case, and author lists over 10 get truncated to first 10 + et al.
                </p>
                <p className="mt-3">
                  A dedicated <strong className="text-white">DOI to CSE converter</strong> solves this. Paste a DOI like <code className="rounded bg-white/10 px-1.5 py-0.5">10.1038/nature12345</code> and get an instant, Crossref-verified citation. Unlike generic <Link href="/chicago" className="text-cyan-300 hover:underline">Chicago</Link> or <Link href="/ieee" className="text-cyan-300 hover:underline">IEEE</Link> tools, our <strong className="text-white">CSE style converter free</strong> understands US grading rubrics: correct periods after author initials, no extra commas, and proper handling of [Internet] and [cited Date] for online journals as required by many US syllabi.
                </p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-bold text-white">How to Use DOIZAPA PRO for CSE 8th</h2>
                <p>DOIZAPA PRO is the cleanest <strong className="text-white">free CSE citation generator for US students</strong>. It&apos;s powered by official Crossref API, not scraped metadata.</p>
                
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-[12px] font-bold text-cyan-300">STEP 1</div>
                    <div className="mt-1 text-[13px] font-medium text-white">Paste Your DOI</div>
                    <div className="mt-1 text-[12px] text-white/60">Accepts 10.xxxx/xxx or full https://doi.org/ link. We auto-clean it.</div>
                  </div>
                  <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-[12px] font-bold text-cyan-300">STEP 2</div>
                    <div className="mt-1 text-[13px] font-medium text-white">Select CSE 8th</div>
                    <div className="mt-1 text-[12px] text-white/60">Choose Name-Year or Citation-Sequence. We default to Name-Year for US bio.</div>
                  </div>
                  <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-4">
                    <div className="text-[12px] font-bold text-cyan-300">STEP 3</div>
                    <div className="mt-1 text-[13px] font-medium text-white">Convert & Copy</div>
                    <div className="mt-1 text-[12px] text-white/60">One click. Get citation with hanging indent ready for your doc.</div>
                  </div>
                </div>
                <p className="mt-3 text-[13px] text-white/60">No tracking, no storage. All DOI lookups go directly to api.crossref.org — perfect privacy for US university compliance.</p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-bold text-white">CSE Examples with DOI (Name-Year vs Citation-Sequence)</h2>
                <p className="text-white/70">Here is how DOIZAPA PRO formats a real DOI in both US-preferred systems:</p>
                
                <div className="mt-4 space-y-4">
                  <div className="rounded-[16px] border border-cyan-400/20 bg-cyan-400/[0.06] p-5">
                    <div className="text-[11px] font-bold tracking-widest text-cyan-300">EXAMPLE 1 • NAME-YEAR • US STANDARD</div>
                    <div className="mt-2 font-mono text-[13px] leading-6 text-white">
                      Zhang Y, Liu H, Chen S. 2023. CRISPR screening reveals key regulators of muscle differentiation. <em className="text-white">Proc Natl Acad Sci USA</em>. 120(15):e2212343120. doi:10.1073/pnas.2212343120.
                    </div>
                    <div className="mt-2 text-[12px] text-white/50">In-text: (Zhang et al. 2023)</div>
                  </div>
                  <div className="rounded-[16px] border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-[11px] font-bold tracking-widest text-white/50">EXAMPLE 2 • CITATION-SEQUENCE • SAME DOI</div>
                    <div className="mt-2 font-mono text-[13px] leading-6 text-white">
                      1. Zhang Y, Liu H, Chen S. CRISPR screening reveals key regulators of muscle differentiation. Proc Natl Acad Sci USA. 2023;120(15):e2212343120. doi:10.1073/pnas.2212343120.
                    </div>
                    <div className="mt-2 text-[12px] text-white/50">In-text: ...regulators of differentiation¹. [Numbered in order cited]</div>
                  </div>
                  <div className="rounded-[16px] border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-[11px] font-bold tracking-widest text-white/50">EXAMPLE 3 • JOURNAL ARTICLE WITH 12 AUTHORS</div>
                    <div className="mt-2 font-mono text-[13px] leading-6 text-white">
                      Smith JA, Brown KL, Lee M, et al. 2022. Global biodiversity loss in freshwater systems. <em className="text-white">Science</em>. 378(6618):342-347. doi:10.1126/science.abq1234.
                    </div>
                    <div className="mt-2 text-[12px] text-white/50">CSE 8th rule: List first 10 authors then et al. – our generator handles it automatically.</div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-bold text-white">Common Mistakes US Students Make in CSE</h2>
                <ul className="space-y-2.5">
                  <li className="flex gap-2"><span className="text-red-400">✕</span> <span><strong className="text-white">Using APA commas:</strong> CSE name-year does not use comma between author and year – it&apos;s <code className="rounded bg-white/10 px-1">Smith 2023</code> not <code className="rounded bg-white/10 px-1">Smith, 2023</code> like APA.</span></li>
                  <li className="flex gap-2"><span className="text-red-400">✕</span> <span><strong className="text-white">Full journal titles:</strong> Must be abbreviated per ISSN – <code className="rounded bg-white/10 px-1">J Biol Chem</code> not Journal of Biological Chemistry. Our API does this.</span></li>
                  <li className="flex gap-2"><span className="text-red-400">✕</span> <span><strong className="text-white">DOI as URL only:</strong> Many US graders want <code className="rounded bg-white/10 px-1">doi:10.xxxx</code> prefix, not just a link. We offer both.</span></li>
                  <li className="flex gap-2"><span className="text-red-400">✕</span> <span><strong className="text-white">Title case:</strong> CSE uses sentence case for article titles – only first word and proper nouns capitalized.</span></li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-bold text-white">FAQ – CSE DOI Citation Generator USA</h2>
                <div className="space-y-3">
                  <details className="group rounded-[16px] border border-white/10 bg-white/[0.04] p-5 open:bg-white/[0.07]">
                    <summary className="cursor-pointer list-none text-[14px] font-semibold text-white">Is this CSE DOI converter really free for US students?</summary>
                    <p className="mt-3 text-[13.5px] leading-6 text-white/70">Yes, 100% free forever. No premium CSE style, no limits, no account. DOIZAPA PRO is built for US universities – we don&apos;t charge students. Unlimited conversions, Crossref powered, Google Safe verified.</p>
                  </details>
                  <details className="group rounded-[16px] border border-white/10 bg-white/[0.04] p-5 open:bg-white/[0.07]">
                    <summary className="cursor-pointer list-none text-[14px] font-semibold text-white">Does it support both citation-sequence and name-year?</summary>
                    <p className="mt-3 text-[13.5px] leading-6 text-white/70">Absolutely. Our CSE citation generator lets you toggle between name-year (Harvard-like) and citation-sequence (numbered). Select your professor&apos;s required system before copying. Both are fully CSE 8th compliant.</p>
                  </details>
                  <details className="group rounded-[16px] border border-white/10 bg-white/[0.04] p-5 open:bg-white/[0.07]">
                    <summary className="cursor-pointer list-none text-[14px] font-semibold text-white">How is CSE different from APA or Vancouver?</summary>
                    <p className="mt-3 text-[13.5px] leading-6 text-white/70">CSE is biology-specific. Unlike <Link href="/apa" className="text-cyan-300 hover:underline">APA 7th</Link> (psychology/social science) which uses Title Case and & before last author, CSE uses sentence case and no ampersand. <Link href="/vancouver" className="text-cyan-300 hover:underline">Vancouver</Link> is similar numbered style for medicine, but CSE abbreviations differ. Use CSE for biology, <Link href="/ama" className="text-cyan-300 hover:underline">AMA</Link> for medicine, Vancouver for many pre-med programs.</p>
                  </details>
                  <details className="group rounded-[16px] border border-white/10 bg-white/[0.04] p-5 open:bg-white/[0.07]">
                    <summary className="cursor-pointer list-none text-[14px] font-semibold text-white">Will my DOI resolve correctly for US journals?</summary>
                    <p className="mt-3 text-[13.5px] leading-6 text-white/70">Yes. We use api.crossref.org official endpoint – same as PubMed and US academic libraries. Paste any DOI from Nature, Science, PNAS, Cell, PLoS – we fetch title, authors, journal abbreviation, volume, and DOI instantly. If a DOI is brand new (< 24h), wait and try again.</p>
                  </details>
                  <details className="group rounded-[16px] border border-white/10 bg-white/[0.04] p-5 open:bg-white/[0.07]">
                    <summary className="cursor-pointer list-none text-[14px] font-semibold text-white">Do I need to add [Internet] and [cited date]?</summary>
                    <p className="mt-3 text-[13.5px] leading-6 text-white/70">Only if your US instructor requires CSE&apos;s internet source rules (common at community colleges). For standard print journals with DOI, CSE 8th no longer requires [Internet]. Our free CSE citation generator adds it only for pure e-journals without pagination – you can toggle it off.</p>
                  </details>
                </div>
              </section>

              <div className="rounded-[20px] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-6 backdrop-blur">
                <h3 className="text-[18px] font-bold text-white">Convert DOI to CSE 8th – Free, Instant, USA Ready</h3>
                <p className="mt-2 text-[13.5px] leading-6 text-white/70">
                  Stop losing points on biology citations. Paste your DOI into our <strong className="text-white">DOI to CSE converter</strong> and get submission-ready citations for Stanford, Berkeley, MIT, or any US university. Works better than manual BibTeX or Zotero for quick assignments.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link href="/" className="rounded-full bg-white px-5 py-2.5 text-[13px] font-bold text-[#0a0e2a] hover:bg-white/90">→ Open Free CSE Citation Generator</Link>
                  <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-[11px] text-white/60">Crossref Verified • No Signup</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 text-[11px]">
                <span className="text-white/30">Related converters:</span>
                <Link href="/apa" className="rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10 hover:text-cyan-300">APA 7th DOI Converter</Link>
                <Link href="/mla" className="rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10 hover:text-cyan-300">MLA 9th</Link>
                <Link href="/chicago" className="rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10 hover:text-cyan-300">Chicago</Link>
                <Link href="/vancouver" className="rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10 hover:text-cyan-300">Vancouver</Link>
                <Link href="/ieee" className="rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10 hover:text-cyan-300">IEEE</Link>
                <Link href="/ama" className="rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10 hover:text-cyan-300">AMA 11th</Link>
                <Link href="/harvard" className="rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10 hover:text-cyan-300">Harvard</Link>
                <Link href="/nature" className="rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10 hover:text-cyan-300">Nature</Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 text-[12px] text-green-300">✓</div>
                <div className="text-[13px] font-bold">DOIZAPA PRO – Live Converter</div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-[12px] border border-white/10 bg-white/[0.04] p-3">
                  <div className="text-[16px] font-bold">15</div><div className="text-[10px] text-white/50">STYLES</div>
                </div>
                <div className="rounded-[12px] border border-white/10 bg-white/[0.04] p-3">
                  <div className="text-[16px] font-bold">CSE</div><div className="text-[10px] text-white/50">8TH</div>
                </div>
                <div className="rounded-[12px] border border-white/10 bg-white/[0.04] p-3">
                  <div className="text-[16px] font-bold">FREE</div><div className="text-[10px] text-white/50">USA</div>
                </div>
              </div>
              <p className="mt-4 text-[13px] leading-6 text-white/70">
                Paste any DOI and get perfect <strong className="text-white">CSE citation</strong> in name-year or citation-sequence. Built for US biology students – no fake counters.
              </p>
              <Link href="/" className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 text-[13px] font-bold text-[#0a0e2a] hover:bg-white/90">
                ⚡ Convert DOI to CSE Now
              </Link>
              <div className="mt-3 text-center text-[11px] text-white/40">Paste full https://doi.org/ link – we clean it automatically.</div>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="text-[13px] font-bold">Why DOIZAPA for CSE?</div>
              <ul className="mt-3 space-y-2.5 text-[12.5px] leading-5 text-white/65">
                <li className="flex gap-2"><span className="text-cyan-300">•</span> Official Crossref API – no hallucinated metadata like free AMA tools</li>
                <li className="flex gap-2"><span className="text-cyan-300">•</span> Correct journal abbreviation per ISO 4 – saves hours</li>
                <li className="flex gap-2"><span className="text-cyan-300">•</span> Handles &gt;10 authors with et al. per CSE 8th USA edition</li>
                <li className="flex gap-2"><span className="text-cyan-300">•</span> Sentence case + DOI formatting – prof-approved</li>
              </ul>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="text-[13px] font-bold">Popular US University Requirements</div>
              <div className="mt-3 space-y-2 text-[12px] text-white/60">
                <div className="flex justify-between rounded-[10px] bg-white/[0.04] px-3 py-2"><span>UCLA / UCSD</span><span className="text-white">Name-Year</span></div>
                <div className="flex justify-between rounded-[10px] bg-white/[0.04] px-3 py-2"><span>Duke / JHU Bio</span><span className="text-white">Citation-Seq</span></div>
                <div className="flex justify-between rounded-[10px] bg-white/[0.04] px-3 py-2"><span>Pre-Med Programs</span><span className="text-cyan-300"><Link href="/ama" className="hover:underline">Use AMA</Link> + CSE</span></div>
              </div>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-5 text-[11px] leading-5 text-white/40 backdrop-blur">
              SEO: DOI to CSE converter, CSE DOE citation converter, CSE 8th generator free USA, Council of Science Editors citation, CSE name-year generator, citation-sequence converter, free CSE citation generator United States, biology citation format US.
            </div>
          </aside>
        </div>
      </main>

      <footer className="relative border-t border-white/5 py-8 text-center text-[11px] text-white/30">
        © {new Date().getFullYear()} DOIZAPA PRO • Clean v4 • Built for US Students • Crossref Powered • Free CSE 8th Generator USA
      </footer>
    </div>
  );
}
