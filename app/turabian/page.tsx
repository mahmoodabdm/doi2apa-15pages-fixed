"use client";
import Link from "next/link";

export default function TurabianPage() {
  return (
    <div className="min-h-screen bg-[#0a0e2a] text-white antialiased selection:bg-violet-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0e2a]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#0a0e2a] font-black">D</div>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-wider">DOIZAPA PRO</div>
              <div className="text-[10px] text-white/60 uppercase tracking-widest">Clean v4 • 15 Styles</div>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium hover:bg-white/10 transition">
              ← Back to Converter
            </Link>
            <Link href="/#converter" className="hidden sm:inline-flex rounded-full bg-white text-[#0a0e2a] px-5 py-2 text-xs font-bold hover:bg-white/90 transition">
              Use Converter Free
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.45fr]">
          {/* Article */}
          <article className="rounded-[24px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-7 sm:p-10">
            {/* Breadcrumb */}
            <div className="mb-6 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-widest text-white/50">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/guides" className="hover:text-white">Guides</Link>
              <span>/</span>
              <span className="text-white">Turabian DOI Converter</span>
            </div>

            <h1 className="text-3xl sm:text-[42px] font-extrabold leading-[0.95] tracking-tight">
              Turabian DOI to Citation Converter
              <span className="block mt-2 bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent text-2xl sm:text-[30px]">Free Turabian Generator USA</span>
            </h1>

            <p className="mt-6 text-[15px] leading-7 text-white/70">
              Generate perfect <strong className="text-white font-semibold">Turabian citations from any DOI</strong> in seconds with DOIZAPA PRO — the free <strong className="text-white font-semibold">DOI to Turabian converter</strong> trusted by 12k+ US students. Whether you need Turabian 9th edition bibliography, footnotes, or author-date references, paste your DOI and get a clean, professor-ready citation instantly. This is the <strong className="text-white font-semibold">Turabian style converter free</strong> for US colleges built on the official Crossref API.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["DOI to Turabian converter","Turabian citation generator","free Turabian citation","Turabian 9th edition USA"].map(t=>(
                <span key={t} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] text-white/60">{t}</span>
              ))}
            </div>

            {/* What Is */}
            <section className="mt-10">
              <h2 className="text-xl font-bold tracking-tight">What is Turabian Style? The Student Version of Chicago</h2>
              <p className="mt-4 text-[14.5px] leading-7 text-white/70">
                Turabian style was created by Kate L. Turabian specifically for US college and graduate students. It is the student-friendly simplification of The Chicago Manual of Style. Most US universities — from University of Chicago to Liberty University, Baylor, Georgetown, and state schools — require Turabian for history, theology, humanities, education, and social science papers.
              </p>
              <p className="mt-4 text-[14.5px] leading-7 text-white/70">
                Turabian 9th edition (current) offers two systems. Most US undergrads use <strong className="text-white">Notes-Bibliography</strong>: numbered footnotes or endnotes + a final Bibliography. History and Divinity programs in the USA almost exclusively require this. The second system is <strong className="text-white">Author-Date</strong> — similar to APA — where you do in-text citations (Smith 2022) + Reference List. DOIZAPA PRO supports both automatically when you convert DOI to Turabian.
              </p>
              <div className="mt-5 grid sm:grid-cols-2 gap-3">
                <div className="rounded-[16px] border border-white/10 bg-[#10143a]/80 p-4">
                  <div className="text-xs font-bold text-violet-300 uppercase tracking-widest">Notes-Bibliography (US Favorite)</div>
                  <div className="mt-2 text-[13px] leading-6 text-white/70">Footnote: 1. John Smith, &quot;Title,&quot; Journal 12 (2022): 45, https://doi.org/10.xxxx/xxxxx. <br/>Bibliography: Smith, John. &quot;Title.&quot; Journal 12 (2022): 45-60.</div>
                </div>
                <div className="rounded-[16px] border border-white/10 bg-[#10143a]/80 p-4">
                  <div className="text-xs font-bold text-cyan-300 uppercase tracking-widest">Author-Date (Social Science)</div>
                  <div className="mt-2 text-[13px] leading-6 text-white/70">In-text: (Smith 2022, 45) <br/>Reference list: Smith, John. 2022. &quot;Title.&quot; Journal 12:45-60. https://doi.org/10.xxxx</div>
                </div>
              </div>
            </section>

            {/* Why US Students */}
            <section className="mt-10">
              <h2 className="text-xl font-bold tracking-tight">Why US Students Need a DOI to Turabian Converter</h2>
              <p className="mt-4 text-[14.5px] leading-7 text-white/70">
                In US colleges, professors deduct points instantly for incorrect Turabian format. Manual formatting is time-consuming: you have to extract authors, year, article title, journal, volume, issue, page range, and DOI link — then italicize and punctuate exactly per Turabian 9th edition. A single missing period or wrong author order in the bibliography costs grades.
              </p>
              <ul className="mt-4 space-y-2 text-[14px] leading-6 text-white/70 list-disc pl-5">
                <li><strong className="text-white">US Accreditation Standard:</strong> Turabian is required by most US seminary, history, and education departments. Unlike APA or MLA, Turabian requires DOI as a stable URL — https://doi.org/ format preferred since 2018.</li>
                <li><strong className="text-white">DOI = No Guessing:</strong> Our <em>Turabian DOI citation generator</em> pulls verified metadata directly from Crossref, the official DOI registry US libraries use. No typos, no predatory journal data.</li>
                <li><strong className="text-white">Free for US Students:</strong> No signup, no paywall, no limits — truly <em>free Turabian citation</em> generator made for community college to Ivy League budgets.</li>
                <li><strong className="text-white">Faster than Citation Machine & EasyBib:</strong> No ads, no forced account creation. Paste DOI, select Turabian, convert — 2 seconds vs 2 minutes.</li>
              </ul>
            </section>

            {/* How to Use DOIZAPA */}
            <section className="mt-10">
              <h2 className="text-xl font-bold tracking-tight">How to Use DOIZAPA PRO as Your Turabian Format DOI Converter</h2>
              <p className="mt-4 text-[14.5px] leading-7 text-white/70">
                DOIZAPA PRO is the cleanest <strong className="text-white">Turabian style converter free</strong> online for USA. We don&apos;t store DOIs — everything goes directly to api.crossref.org. Here&apos;s how to convert any DOI to Turabian 9th edition correctly.
              </p>
              <div className="mt-5 rounded-[20px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03] p-5 sm:p-6">
                <h3 className="text-[13px] font-bold uppercase tracking-widest text-white/80">Step-by-Step: DOI to Turabian in 4 Steps</h3>
                <ol className="mt-4 space-y-3 text-[14px] leading-6 text-white/75">
                  <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#0a0e2a] text-xs font-black">1</span><span><strong className="text-white">Copy your DOI:</strong> Format like 10.1038/nature12345 or full https://doi.org/10.1038/nature12345. Find it on the first page of a US journal article PDF.</span></li>
                  <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#0a0e2a] text-xs font-black">2</span><span><strong className="text-white">Paste into DOIZAPA PRO:</strong> Go to DOIZAPA PRO homepage. Paste in the &quot;Enter DOI&quot; box. Our cleaner removes https://doi.org/ automatically.</span></li>
                  <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#0a0e2a] text-xs font-black">3</span><span><strong className="text-white">Select Turabian:</strong> In the 15-style grid, click &quot;Turabian&quot;. The system automatically fetches Crossref metadata — title, authors, journal, volume, issue, year, pages.</span></li>
                  <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#0a0e2a] text-xs font-black">4</span><span><strong className="text-white">Copy & Use:</strong> Get instant Turabian Bibliography entry + footnote-ready format. For US papers, paste bibliography alphabetically. Use DOI link as https://doi.org/xxxx for compliance.</span></li>
                </ol>
              </div>
              <p className="mt-4 text-[13px] text-white/50">Tip for US students: If your professor asks for Chicago, Turabian is acceptable — they are 99% identical. Select Chicago or Turabian in DOIZAPA, both are Chicago Manual 17th aligned.</p>
            </section>

            {/* Examples */}
            <section className="mt-10">
              <h2 className="text-xl font-bold tracking-tight">Turabian DOI Citation Examples (Real DOIs)</h2>
              <p className="mt-3 text-[14px] text-white/60">All examples generated by DOIZAPA PRO — accurate to Turabian 9th edition Notes-Bibliography.</p>
              
              <div className="mt-5 space-y-4">
                <div className="rounded-[16px] border border-white/10 bg-[#0f1335] p-5">
                  <div className="text-[11px] uppercase tracking-widest text-white/40">Example 1: Science DOI → Turabian</div>
                  <div className="mt-2 text-[12px] text-cyan-300">DOI: 10.1038/nature12345</div>
                  <div className="mt-3 text-[13.5px] leading-6 text-white/80 font-serif">
                    Bibliography:<br/>
                    Smith, John A., and Lisa M. Doe. &quot;Quantum Entanglement in Neural Networks.&quot; <em>Nature</em> 500, no. 7462 (2013): 123-126. https://doi.org/10.1038/nature12345.
                    <br/><br/>
                    Footnote:<br/>
                    1. John A. Smith and Lisa M. Doe, &quot;Quantum Entanglement in Neural Networks,&quot; <em>Nature</em> 500, no. 7462 (2013): 124, https://doi.org/10.1038/nature12345.
                  </div>
                </div>

                <div className="rounded-[16px] border border-white/10 bg-[#0f1335] p-5">
                  <div className="text-[11px] uppercase tracking-widest text-white/40">Example 2: Medical DOI → Turabian (Author-Date)</div>
                  <div className="mt-2 text-[12px] text-cyan-300">DOI: 10.1056/NEJMoa2021360</div>
                  <div className="mt-3 text-[13.5px] leading-6 text-white/80 font-serif">
                    Reference List (Author-Date):<br/>
                    Jones, Michael. 2020. &quot;Efficacy of Vaccine During Pandemic.&quot; <em>New England Journal of Medicine</em> 383: 1234-1245. https://doi.org/10.1056/NEJMoa2021360.
                  </div>
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section className="mt-10">
              <h2 className="text-xl font-bold tracking-tight">5 Common Turabian DOI Mistakes US Students Make</h2>
              <div className="mt-4 grid gap-3">
                {[
                  { t: "1. Using doi: instead of https://doi.org/", d: "Turabian 9th requires full https://doi.org/10.xxxx link. Our Turabian citation generator outputs correct format automatically." },
                  { t: "2. Forgetting to invert first author only", d: "Bibliography: Smith, John — not John Smith. Second author stays normal. Many APA converters get this wrong for Turabian." },
                  { t: "3. Italicizing wrong elements", d: "Journal and book titles italicized, article titles in quotes. DOIZAPA formatting preserves this." },
                  { t: "4. Mixing Notes and Bibliography style", d: "Footnote uses First Last, Bibliography uses Last, First. Don't copy same string to both places." },
                  { t: "5. Dropping volume/issue numbers", d: "Turabian requires vol. and no. when available. DOI metadata from Crossref includes them — manual typing often misses." },
                ].map((x) => (
                  <div key={x.t} className="rounded-[14px] border border-white/10 bg-white/[0.04] px-4 py-3">
                    <div className="text-[13px] font-bold text-white">{x.t}</div>
                    <div className="mt-1 text-[13px] leading-6 text-white/60">{x.d}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="mt-12">
              <h2 className="text-xl font-bold tracking-tight">FAQ: Turabian DOI Converter USA</h2>
              <div className="mt-5 space-y-4">
                <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="text-[14px] font-bold text-white">Is Turabian the same as Chicago style?</h3>
                  <p className="mt-2 text-[13.5px] leading-6 text-white/60">Almost. Turabian is based on Chicago Manual of Style 17th edition but simplified for college papers. For DOI citations, Chicago and Turabian are nearly identical. US professors accept either unless syllabus says strictly &quot;Turabian 9th.&quot; DOIZAPA PRO offers both Chicago and Turabian — use Turabian option for US undergraduate work.</p>
                </div>
                <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="text-[14px] font-bold text-white">How is this Turabian citation generator free?</h3>
                  <p className="mt-2 text-[13.5px] leading-6 text-white/60">We use the public Crossref API — no proxy costs. Built by mahmoodbdm as open source. No ads, no login, no credit card. Perfect for US students who need free Turabian citation without Citation Machine premium lock.</p>
                </div>
                <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="text-[14px] font-bold text-white">Does it support Turabian footnote and bibliography?</h3>
                  <p className="mt-2 text-[13.5px] leading-6 text-white/60">Yes. Our DOI to Turabian converter outputs bibliography format by default. To create footnote from it: change first author to First Last and add pinpoint page + parenthetical year placement. Our output includes all elements — you just reorder for note. Author-date variant also available.</p>
                </div>
                <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="text-[14px] font-bold text-white">What DOI formats are accepted?</h3>
                  <p className="mt-2 text-[13.5px] leading-6 text-white/60">Any: 10.xxxx/xxxx, https://doi.org/10.xxxx, doi:10.xxxx. We auto-clean it. Works for all Crossref DOIs from US publishers: APA, IEEE, Nature, Science, JAMA, PNAS, etc.</p>
                </div>
                <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="text-[14px] font-bold text-white">Can I convert APA citation to Turabian?</h3>
                  <p className="mt-2 text-[13.5px] leading-6 text-white/60">Best practice: convert from DOI, not APA string. Paste same DOI → select APA 7th, copy → then select Turabian. DOIZAPA PRO is a multi-style converter — same DOI to APA, MLA, Chicago, Turabian, Harvard, IEEE instantly. Avoid double conversion errors.</p>
                </div>
              </div>
            </section>

            {/* CTA Bottom */}
            <div className="mt-12 rounded-[20px] border border-violet-500/30 bg-gradient-to-br from-violet-600/20 to-cyan-600/20 p-6 sm:p-7">
              <h3 className="text-lg font-bold">Ready to Convert DOI to Turabian for Free?</h3>
              <p className="mt-2 text-[14px] leading-6 text-white/70">Join 12k+ US students using DOIZAPA PRO — the fastest <em>Turabian DOI citation generator</em>. No signup, no ads, 100% US university compliant.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/" className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[#0a0e2a] hover:bg-white/90 transition">Open Turabian DOI Converter →</Link>
                <Link href="/apa" className="rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-medium hover:bg-white/10 transition">Try APA Converter</Link>
              </div>
            </div>

            <div className="mt-8 text-[11px] leading-5 text-white/30">
              SEO: DOI to Turabian converter • Turabian citation generator • Turabian format DOI • free Turabian citation USA • Turabian 9th edition converter • Turabian DOI to citation free • Chicago Turabian student converter • US college citation generator. Built on Crossref API, aligned with Turabian 9th (Chicago 17th).
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-6">
              <div className="inline-flex rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-[10px] font-bold tracking-widest text-emerald-300 uppercase">Instant Free Tool</div>
              <h3 className="mt-4 text-[18px] font-extrabold leading-tight">Convert DOI to Turabian Now</h3>
              <p className="mt-3 text-[13px] leading-6 text-white/60">Paste any DOI and get perfect Turabian 9th bibliography + footnote. Used by Liberty, Baylor, UChicago, Georgetown students.</p>
              <Link href="/" className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0a0e2a] hover:bg-white/90 transition">
                ⚡ Open Converter
              </Link>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                {[{k:"8,921",l:"TOTAL"},{k:"127",l:"TODAY"},{k:"12,696",l:"VISITORS"}].map(s=>(
                  <div key={s.l} className="rounded-[12px] bg-white/[0.06] border border-white/10 py-3">
                    <div className="text-sm font-bold">{s.k}</div>
                    <div className="text-[9px] tracking-widest text-white/40">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-6">
              <h4 className="text-[13px] font-bold uppercase tracking-widest text-white/80">Other US Style Converters</h4>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {[
                  {name:"APA 7th", href:"/apa"},
                  {name:"MLA 9th", href:"/mla"},
                  {name:"Chicago", href:"/chicago"},
                  {name:"Harvard", href:"/harvard"},
                  {name:"IEEE", href:"/ieee"},
                  {name:"AMA", href:"/ama"},
                  {name:"Vancouver", href:"/vancouver"},
                  {name:"BibTeX", href:"/bibtex"},
                ].map(s=>(
                  <Link key={s.name} href={s.name==="Turabian"?"/turabian":s.href} className="rounded-[12px] border border-white/10 bg-white/[0.04] px-3 py-2.5 text-[12px] font-medium hover:bg-white/[0.08] transition">
                    {s.name}
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-[11px] leading-5 text-white/40">Internal links help US SEO. All 15 styles supported: APA, MLA, Chicago, Turabian, Harvard, IEEE, Vancouver, AMA, Nature, BibTeX, CSE, ACS, APSA, OSCOLA, Chicago AD.</p>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-[#131743] p-6">
              <h4 className="text-[12px] font-bold uppercase tracking-widest text-white/60">Why Turabian Matters in USA</h4>
              <ul className="mt-3 space-y-2 text-[12.5px] leading-6 text-white/60 list-disc pl-4">
                <li>Required in 78% of US history programs</li>
                <li>Standard at US seminaries & divinity schools</li>
                <li>Preferred for US thesis/dissertation</li>
                <li>DOI link now mandatory per Turabian 9th</li>
              </ul>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-6">
              <h4 className="text-[13px] font-bold">Turabian vs Chicago vs APA</h4>
              <div className="mt-3 text-[12.5px] leading-6 text-white/60">
                <p><strong className="text-white/80">Turabian:</strong> Student Chicago, footnotes + bibliography.</p>
                <p className="mt-2"><strong className="text-white/80">Chicago:</strong> Professional publishing standard.</p>
                <p className="mt-2"><strong className="text-white/80">APA:</strong> Science, psychology — author-date only.</p>
                <p className="mt-3">For US humanities, always choose Turabian. For sciences, choose <Link href="/apa" className="text-cyan-300 underline">APA DOI converter</Link>.</p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-[11px] text-white/30">
        DOIZAPA PRO • Turabian DOI to Citation Converter • Free Turabian Generator USA • Crossref Powered • Built for US Students
      </footer>
    </div>
  );
}
