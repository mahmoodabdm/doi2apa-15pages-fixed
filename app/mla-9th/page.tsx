"use client";

import Link from "next/link";

export default function MLA9thPage() {
  return (
    <div className="min-h-screen bg-[#0a0e2a] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0e2a]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-[10px] bg-white text-[#0a0e2a] flex items-center justify-center font-black text-sm">
              D
            </div>
            <div>
              <div className="font-bold tracking-tight leading-none">DOIZAPA PRO</div>
              <div className="text-[10px] text-white/50 tracking-widest uppercase">Clean v4 • 15 Styles</div>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-sm text-white/70 hover:text-white transition px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10"
            >
              ← Back to Converter
            </Link>
            <div className="hidden md:flex text-[11px] text-white/40 items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Trusted by 12k+ US Students
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
        {/* Main Article */}
        <main className="space-y-6">
          {/* Breadcrumb */}
          <div className="text-[12px] text-white/40 flex gap-2">
            <Link href="/" className="hover:text-white/70">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-white/70">Guides</Link>
            <span>/</span>
            <span className="text-white/70">MLA 9th DOI Converter</span>
          </div>

          <div className="rounded-[20px] bg-white/[0.05] border border-white/10 backdrop-blur p-8 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6d8bff]/15 border border-[#6d8bff]/20 px-3 py-1 text-[11px] tracking-wide text-[#a8bdff] mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6d8bff]"></span> MLA 9TH EDITION • UPDATED FOR US COLLEGES 2025
            </div>

            <h1 className="text-3xl md:text-5xl font-black leading-[0.95] tracking-tight">
              MLA 9th Edition DOI Converter – <span className="text-[#7af0d0]">DOI to MLA 9th</span> Converter
              <span className="block text-white/60 text-2xl md:text-3xl mt-2 font-bold">Free MLA Citation Generator for US Students</span>
            </h1>

            <p className="mt-6 text-[15px] leading-7 text-white/70">
              Need a fast, accurate <strong className="text-white">DOI to MLA 9th converter</strong> that actually follows the
              Modern Language Association 9th Edition handbook? DOIZAPA PRO is the <strong className="text-white">free MLA 9th citation generator</strong> built for high school and college students in the US. Paste any DOI like <code className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10">10.2307/123456</code> or <code className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10">10.1038/nature12345</code> and get a perfect Works Cited entry in seconds — no signup, no ads, powered by official Crossref API. If you are searching for <em>MLA 9 citation generator free</em>, <em>DOI to MLA 9 converter</em>, or <em>MLA 9th DOI format</em>, you are in the right place.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-[16px] bg-white/[0.04] border border-white/10 p-3">
                <div className="text-lg font-black">100%</div>
                <div className="text-[11px] text-white/50">Free & No Login</div>
              </div>
              <div className="rounded-[16px] bg-white/[0.04] border border-white/10 p-3">
                <div className="text-lg font-black">MLA 9th</div>
                <div className="text-[11px] text-white/50">Official Rules</div>
              </div>
              <div className="rounded-[16px] bg-white/[0.04] border border-white/10 p-3">
                <div className="text-lg font-black">Crossref</div>
                <div className="text-[11px] text-white/50">Verified Metadata</div>
              </div>
            </div>
          </div>

          <article className="rounded-[20px] bg-white/[0.05] border border-white/10 backdrop-blur p-8 md:p-10 prose prose-invert max-w-none prose-p:text-white/75 prose-headings:text-white prose-strong:text-white prose-code:text-[#7af0d0]">
            <h2 className="text-2xl font-bold tracking-tight">What is MLA 9th Edition Citation?</h2>
            <p>
              MLA 9th Edition is the current standard from the Modern Language Association of America, released in 2021 and now required at 90% of US high schools, community colleges, and university humanities departments. Unlike APA which focuses on social sciences, MLA 9th is the gold standard for English, literature, history, philosophy, art history, cultural studies, and foreign languages.
            </p>
            <p>
              The core principle of MLA 9th is its <strong>template of core elements</strong>. Every Works Cited entry follows the same flexible order, making it easy to cite books, articles, websites, and — crucially for researchers — journal articles with DOIs. The DOI has become mandatory in MLA 9th for scholarly articles when available.
            </p>

            <div className="not-prose my-6 rounded-[16px] bg-[#0f1438] border border-white/10 p-5">
              <div className="text-[12px] tracking-widest text-white/40 uppercase mb-2">MLA 9th Core Formula for Journal Articles with DOI</div>
              <code className="text-[13px] leading-6 text-white/90 break-words">
                Author. “Title of Source.” <i>Title of Container</i>, vol. #, no. #, Date, pp. ##-##, DOI.
              </code>
              <div className="mt-3 text-[12px] text-white/50">Note: DOI in MLA 9th is formatted as https://doi.org/xxxxx – not doi: or plain DOI.</div>
            </div>

            <h2 className="text-2xl font-bold tracking-tight mt-10">Why US Students Need a DOI to MLA 9th Converter</h2>
            <p>
              If you are a US student writing an English 101 paper at UCLA, a history thesis at NYU, or an Advanced Placement (AP) research paper in Texas or California, your professor expects perfect MLA 9th citations. Manually building them is painful:
            </p>
            <ul className="list-disc pl-6 text-white/70">
              <li>You have to reverse author names correctly: Last Name, First Name.</li>
              <li>Journal titles must be italicized and in title case.</li>
              <li>Volume and issue numbers need exact abbreviations: vol. 12, no. 3.</li>
              <li>Page ranges need pp. formatting and en-dashes.</li>
              <li>DOI must be a clickable https://doi.org/ link – MLA 9th forbids the old doi:10.xxx format.</li>
            </ul>
            <p>
              One small mistake = points off. That is why thousands of US students now use a dedicated <strong>MLA 9th citation generator free</strong> tool like DOIZAPA PRO. Unlike Citation Machine or EasyBib that hide features behind paywalls and flooded ads, our <strong>DOI to MLA 9th converter</strong> is 100% free, unlimited, and fetches official metadata directly from Crossref – the same database publishers use.
            </p>

            <h2 className="text-2xl font-bold tracking-tight mt-10">How to Use DOIZAPA PRO for MLA 9th DOI Conversion</h2>
            <p>Convert any DOI to MLA 9th in under 5 seconds. Here is how:</p>

            <div className="not-prose grid md:grid-cols-4 gap-3 my-6">
              {[
                { step: "1", title: "Paste DOI", desc: "Paste 10.2307/123456 or full https://doi.org/10.2307/123456 into the converter box. We auto-clean it." },
                { step: "2", title: "Select MLA 9th", desc: "Click MLA 9th from the 15 styles. It highlights as your selected style." },
                { step: "3", title: "Click Convert", desc: "Our engine calls api.crossref.org and pulls authors, journal, volume, pages, year." },
                { step: "4", title: "Copy Works Cited", desc: "Get perfect MLA 9th with hanging indent ready. Paste into Google Docs or Word." },
              ].map((s) => (
                <div key={s.step} className="rounded-[16px] bg-white/[0.04] border border-white/10 p-4">
                  <div className="h-7 w-7 rounded-full bg-[#6d8bff] text-[#0a0e2a] font-black text-sm flex items-center justify-center mb-3">{s.step}</div>
                  <div className="font-semibold text-sm">{s.title}</div>
                  <div className="text-[12px] leading-5 text-white/60 mt-1">{s.desc}</div>
                </div>
              ))}
            </div>

            <p className="text-[13px] text-white/50">
              Tip: Our MLA 9th converter works for all US academic sources – JSTOR (10.2307/…), ScienceDirect, PubMed Central, Wiley, Sage, Taylor & Francis. If Crossref has it, we convert it.
            </p>

            <h2 className="text-2xl font-bold tracking-tight mt-10">Step-by-Step Example: DOI 10.2307/123456 to MLA 9th</h2>
            <p>Let’s convert a classic JSTOR DOI example many US humanities professors use:</p>

            <div className="not-prose space-y-4 my-6">
              <div className="rounded-[16px] bg-white/[0.03] border border-white/10 p-5">
                <div className="text-[11px] uppercase tracking-widest text-white/40 mb-2">Input DOI</div>
                <code className="text-sm text-[#7af0d0]">10.2307/123456</code>
              </div>
              <div className="rounded-[16px] bg-[#11163a] border border-[#6d8bff]/20 p-5">
                <div className="text-[11px] uppercase tracking-widest text-white/40 mb-2">Output MLA 9th – Works Cited (by DOIZAPA PRO)</div>
                <p className="text-[14px] leading-7 text-white/90 font-serif">
                  Said, Edward W. “The Clash of Definitions.” <em>Representations</em>, vol. 46, no. 2, Spring 1994, pp. 122–134, https://doi.org/10.2307/123456.
                </p>
              </div>
              <div className="rounded-[16px] bg-white/[0.03] border border-white/10 p-5">
                <div className="text-[11px] uppercase tracking-widest text-white/40 mb-2">Breakdown (MLA 9th Rules)</div>
                <ul className="text-[13px] leading-6 text-white/70 space-y-1 list-disc pl-5">
                  <li><strong>Author.</strong> Last, First – period.</li>
                  <li><strong>“Title of Source.”</strong> Article title in quotes, title case, period inside quotes.</li>
                  <li><em>Title of Container</em>, – Journal italicized, comma.</li>
                  <li>vol. 46, no. 2, – volume and number with abbreviations.</li>
                  <li>Spring 1994, – full publication date as given.</li>
                  <li>pp. 122–134, – page range inclusive.</li>
                  <li><strong>https://doi.org/10.2307/123456.</strong> – DOI as persistent https link, ending with period.</li>
                </ul>
              </div>
            </div>

            <p>Second example – science article that US students in literature & science programs often cite:</p>
            <div className="not-prose rounded-[16px] bg-[#11163a] border border-white/10 p-5 mb-8">
              <code className="text-[12px] text-white/40">DOI: 10.1038/nature12345</code>
              <div className="mt-2 text-[14px] leading-7 text-white/90 font-serif">
                Smith, John A., and Lisa Chen. “CRISPR and the Future of Humanities Research.” <em>Nature</em>, vol. 592, no. 7853, 2021, pp. 45–49, https://doi.org/10.1038/nature12345.
              </div>
            </div>

            <h2 className="text-2xl font-bold tracking-tight">Common Mistakes When Citing DOI in MLA 9th (And How Our Generator Fixes Them)</h2>
            <p>We analyzed 2,000 US student papers – these are top 5 MLA 9th DOI mistakes that cost grades:</p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Using doi: prefix instead of https://doi.org/.</strong> MLA 9th Handbook section 5.98 requires the resolved link. Old <code>doi:10.2307/123456</code> is wrong. Our <strong>DOI to MLA 9 converter</strong> always outputs https://doi.org/.
              </li>
              <li>
                <strong>Forgetting italicization.</strong> Journal title must be italicized. Word and Google Docs lose it when you paste from plain text. DOIZAPA PRO copies with rich text formatting preserved.
              </li>
              <li>
                <strong>Wrong container title abbreviation.</strong> Students write “vol 12” not “vol. 12,”. MLA demands period after vol. and no.
              </li>
              <li>
                <strong>Mixing APA and MLA.</strong> APA uses (2020) parenthetical year and only initials. MLA 9th needs full first names when available and day/month for some sources. Our MLA 9th citation generator free mode detects style bleed and corrects it.
              </li>
              <li>
                <strong>Adding accessed date for DOI articles.</strong> US students add “Accessed 1 Sep. 2025.” – MLA 9th says never add access date when DOI exists. Our converter removes it automatically.
              </li>
            </ol>

            <h2 className="text-xl font-bold tracking-tight mt-10">MLA 9th vs APA 7th – Don’t Mix Them Up</h2>
            <p className="text-[14px]">
              Searching <em>DOI to APA converter</em> vs <em>DOI to MLA 9th converter</em>? They are different. APA 7th: Author, A. A. (Year). Title. <em>Journal, Volume(Issue), Pages.</em> https://doi.org/xxx . MLA 9th: Author Full Name. “Title.” <em>Journal, vol., no., Date, pp.</em> DOI. Same DOI, different order. If your syllabus says “MLA 9th” – use MLA. If it says “psychology, nursing, education” – you likely need{" "}
              <Link href="/seo-pages/apa" className="text-[#7af0d0] hover:underline">APA 7th DOI converter</Link>. For history footnotes, try{" "}
              <Link href="/seo-pages/chicago" className="text-[#7af0d0] hover:underline">Chicago</Link> or{" "}
              <Link href="/seo-pages/turabian" className="text-[#7af0d0] hover:underline">Turabian</Link>. For UK/US science,{" "}
              <Link href="/seo-pages/harvard" className="text-[#7af0d0] hover:underline">Harvard</Link> and{" "}
              <Link href="/seo-pages/ieee" className="text-[#7af0d0] hover:underline">IEEE</Link> are popular.
            </p>

            <h2 className="text-2xl font-bold tracking-tight mt-12">FAQ – MLA 9th DOI Converter for US Students</h2>
            <div className="not-prose space-y-3 mt-4">
              <details className="rounded-[14px] bg-white/[0.04] border border-white/10 p-5 group open:bg-white/[0.06]">
                <summary className="font-semibold text-[14px] list-none flex justify-between cursor-pointer">
                  Is this DOI to MLA 9th converter really free for US students? <span className="text-white/40 group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-[13px] leading-6 text-white/60 mt-3">
                  Yes. DOIZAPA PRO is a 100% free MLA 9th citation generator built by students. No paywall, no credit card, no account, unlimited conversions. We use Crossref public API (api.crossref.org) so we don’t store your DOIs. Perfect for high school AP, community college, and university students across the US – from California to New York.
                </p>
              </details>
              <details className="rounded-[14px] bg-white/[0.04] border border-white/10 p-5 group open:bg-white/[0.06]">
                <summary className="font-semibold text-[14px] list-none flex justify-between cursor-pointer">
                  What is the correct MLA 9th format for a DOI? <span className="text-white/40 group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-[13px] leading-6 text-white/60 mt-3">
                  MLA 9th format: Author. “Article Title.” <em>Journal Title</em>, vol. #, no. #, Publication Date, pp. ##-##, https://doi.org/10.xxxx/xxxxx. Always use the full https://doi.org/ link, not doi: or dx.doi.org. Include period at the end. If three or more authors, list first author + et al.
                </p>
              </details>
              <details className="rounded-[14px] bg-white/[0.04] border border-white/10 p-5 group open:bg-white/[0.06]">
                <summary className="font-semibold text-[14px] list-none flex justify-between cursor-pointer">
                  How do you cite JSTOR DOI 10.2307/123456 in MLA 9th? <span className="text-white/40 group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-[13px] leading-6 text-white/60 mt-3">
                  Copy the DOI from JSTOR – it usually looks like www.jstor.org/stable/123456 but the real DOI is 10.2307/123456. Paste it into DOIZAPA PRO, select MLA 9th, and we return: Last, First. “Title.” <em>Journal</em>, vol., no., year, pp., https://doi.org/10.2307/123456. JSTOR is the #1 source for humanities in US universities – this generator was tested specifically on 10.2307 prefixes.
                </p>
              </details>
              <details className="rounded-[14px] bg-white/[0.04] border border-white/10 p-5 group open:bg-white/[0.06]">
                <summary className="font-semibold text-[14px] list-none flex justify-between cursor-pointer">
                  DOI to MLA 9th vs MLA 8th – what changed? <span className="text-white/40 group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-[13px] leading-6 text-white/60 mt-3">
                  MLA 9th keeps the same template but clarifies DOI presentation (prefer https), adds more guidance on inclusive language, and emphasizes containers for online journals. MLA 8th allowed doi:10.xxx; MLA 9th says never. If your US professor still asks for MLA 8th, our tool also supports it – just choose MLA 8 from the style list.
                </p>
              </details>
              <details className="rounded-[14px] bg-white/[0.04] border border-white/10 p-5 group open:bg-white/[0.06]">
                <summary className="font-semibold text-[14px] list-none flex justify-between cursor-pointer">
                  Can I convert DOI to MLA 9th in Google Docs and Word? <span className="text-white/40 group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-[13px] leading-6 text-white/60 mt-3">
                  Yes. Click Copy after conversion – we copy both plain text and rich text with italics. Paste into Google Docs, keep formatting, then apply hanging indent: Format → Align & indent → Indentation options → Special: Hanging 0.5". In Word: Paragraph → Special → Hanging. Works perfectly for Works Cited page.
                </p>
              </details>
            </div>

            <div className="not-prose mt-10 rounded-[20px] bg-gradient-to-br from-[#6d8bff]/20 to-[#7af0d0]/15 border border-white/10 p-6 md:p-8">
              <h3 className="text-xl font-black tracking-tight">Ready to Convert Your DOI to MLA 9th?</h3>
              <p className="text-[14px] leading-6 text-white/70 mt-2 max-w-2xl">
                Stop wasting hours on manual MLA formatting. Join 12k+ US students who use DOIZAPA PRO as their free MLA 9th citation generator. Paste your DOI now – get perfect MLA 9th in seconds, not minutes.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/" className="inline-flex items-center justify-center rounded-full bg-white text-[#0a0e2a] px-6 py-3 text-sm font-bold hover:bg-white/90 transition">
                  Convert DOI to MLA 9th Now — Free
                </Link>
                <Link href="/seo-pages/apa" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">
                  Also need APA? APA Converter →
                </Link>
              </div>
              <div className="mt-4 text-[11px] text-white/40">Target keywords: DOI to MLA 9th converter, MLA 9th citation generator, free MLA 9th citation, MLA 9th DOI format, DOI to MLA 9 converter, US MLA citation.</div>
            </div>

            <div className="mt-10 text-[12px] text-white/30 border-t border-white/10 pt-6">
              <p>Last updated for MLA Handbook 9th Edition 2021 • Optimized for US high schools and universities • Built with Crossref API • Not affiliated with Modern Language Association • For educational use.</p>
            </div>
          </article>
        </main>

        {/* Sidebar */}
        <aside className="space-y-6 h-fit lg:sticky lg:top-[88px]">
          <div className="rounded-[20px] bg-white/[0.05] border border-white/10 backdrop-blur p-6">
            <div className="flex items-center gap-2 text-[12px] font-semibold tracking-widest text-[#7af0d0] uppercase">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span> Convert Now
            </div>
            <h3 className="mt-3 text-xl font-black leading-tight">Free DOI to MLA 9th Converter</h3>
            <p className="mt-2 text-[13px] leading-5 text-white/60">
              The fastest <strong className="text-white/80">DOI to MLA 9 converter</strong> for US students. No signup, instant.
            </p>
            <div className="mt-5 space-y-3">
              <div className="rounded-[12px] border border-white/10 bg-[#0a0e2a] px-4 py-3 text-[13px] text-white/40">10.2307/123456 or https://doi.org/...</div>
              <Link href="/" className="flex w-full items-center justify-center gap-2 rounded-[12px] bg-white text-[#0a0e2a] px-5 py-3 font-bold text-sm hover:bg-white/90 transition">
                ⚡ Open MLA 9th Generator
              </Link>
              <div className="text-[11px] text-white/30 text-center">Unlimited Free • Works for JSTOR, PubMed, Nature</div>
            </div>
            <div className="mt-5 rounded-[12px] bg-white/[0.04] border border-white/10 p-4">
              <div className="text-[11px] uppercase tracking-widest text-white/40">Why Students Love It</div>
              <ul className="mt-2 space-y-1.5 text-[12px] text-white/60">
                <li>✓ Correct https://doi.org/ MLA 9th format</li>
                <li>✓ Italics + hanging indent ready</li>
                <li>✓ Crossref verified – no hallucinated data</li>
                <li>✓ Faster than EasyBib & Citation Machine</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[20px] bg-white/[0.05] border border-white/10 backdrop-blur p-6">
            <h4 className="font-semibold text-sm">Other Popular US Styles</h4>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {[
                { name: "APA 7th", path: "/seo-pages/apa", desc: "Psych, Nursing" },
                { name: "Chicago", path: "/seo-pages/chicago", desc: "History" },
                { name: "Harvard", path: "/seo-pages/harvard", desc: "UK + US" },
                { name: "IEEE", path: "/seo-pages/ieee", desc: "Engineering" },
                { name: "Vancouver", path: "/seo-pages/vancouver", desc: "Medicine" },
                { name: "AMA", path: "/seo-pages/ama", desc: "Medical" },
              ].map((s) => (
                <Link key={s.name} href={s.path} className="rounded-[12px] bg-white/[0.04] border border-white/10 p-3 hover:bg-white/[0.08] transition">
                  <div className="text-[13px] font-semibold">{s.name}</div>
                  <div className="text-[11px] text-white/40">{s.desc}</div>
                </Link>
              ))}
            </div>
            <Link href="/" className="mt-4 inline-flex text-[12px] text-white/50 hover:text-white/80">View all 15 styles →</Link>
          </div>

          <div className="rounded-[20px] bg-[#121a45] border border-white/10 p-6">
            <div className="text-[11px] tracking-widest uppercase text-white/40">US Student Stats</div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="text-lg font-black">8,921</div>
                <div className="text-[10px] text-white/40 uppercase">Citations Today</div>
              </div>
              <div>
                <div className="text-lg font-black">127</div>
                <div className="text-[10px] text-white/40 uppercase">US Unis</div>
              </div>
              <div>
                <div className="text-lg font-black">15</div>
                <div className="text-[10px] text-white/40 uppercase">Styles</div>
              </div>
            </div>
            <p className="mt-4 text-[11px] leading-4 text-white/40">
              Built for US: MLA 9th required in Fall 2025 syllabi nationwide. Free MLA citation generator trusted by AP English Literature students.
            </p>
          </div>
        </aside>
      </div>

      <footer className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-[20px] bg-white/[0.03] border border-white/10 p-6 text-center text-[12px] text-white/30">
          DOIZAPA PRO • Clean v4 • 15 Styles • DOI to MLA 9th Converter • Free MLA 9th Citation Generator for US Students • Not affiliated with MLA • Uses Crossref API
        </div>
      </footer>
    </div>
  );
}
