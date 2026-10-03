"use client";
import Link from "next/link";

export default function ChicagoPage() {
  return (
    <div className="min-h-screen bg-[#0a0e2a] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e2a] via-[#121e4a] to-[#1a2a6a]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <header className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white text-black flex items-center justify-center font-black">D</div>
            <div>
              <div className="font-bold text-sm leading-none">DOIZAPA PRO</div>
              <div className="text-[10px] opacity-60">CLEAN V4 • 15 STYLES</div>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xs px-4 py-2 rounded-full bg-white/10 border border-white/10 hover:bg-white/15 transition">← Back to Converter</Link>
            <Link href="/" className="hidden md:inline-flex text-xs px-4 py-2 rounded-full bg-white text-black font-bold">Try Free Converter</Link>
          </div>
        </header>

        {/* Main */}
        <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 grid lg:grid-cols-[1.75fr_0.85fr] gap-6">
          {/* Article */}
          <article className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[20px] p-6 md:p-8">
            <div className="inline-flex items-center gap-2 text-[11px] px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-200 mb-4">
              ● Chicago Manual of Style 17th Edition • Updated for US Universities 2025
            </div>

            <h1 className="text-3xl md:text-[42px] font-black leading-[0.95] tracking-tight">
              Chicago Style DOI Converter – <span className="text-cyan-300">Free Chicago 17th</span> Generator USA
            </h1>

            <p className="mt-4 text-[15px] leading-7 text-white/70">
              Looking for a fast <strong className="text-white">DOI to Chicago converter</strong> that actually follows the Chicago Manual of Style 17th Edition? DOIZAPA PRO is the <strong className="text-white">free Chicago citation generator</strong> built for US students, historians, and publishers. Paste any DOI like <code className="px-1.5 py-0.5 bg-white/10 rounded">10.1086/ahr/123.5.1234</code> or <code className="px-1.5 py-0.5 bg-white/10 rounded">10.1086/658052</code> and get a perfect Chicago bibliography entry and footnote in seconds. No signup, no paywall, Crossref-verified metadata. If you need a <strong className="text-white">Chicago style DOI to citation converter</strong> for_notes-bibliography or author-date, this is it.
            </p>

            <div className="mt-6 grid md:grid-cols-3 gap-3">
              <div className="bg-white/5 border border-white/10 rounded-[16px] p-3">
                <div className="text-xs font-bold text-cyan-200">DOI to Chicago 17th</div>
                <div className="text-[11px] text-white/50 mt-1">Full Crossref API • Real DOI lookup</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-[16px] p-3">
                <div className="text-xs font-bold text-cyan-200">Both Systems</div>
                <div className="text-[11px] text-white/50 mt-1">Notes-Bibliography (NB) + Author-Date (AD)</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-[16px] p-3">
                <div className="text-xs font-bold text-cyan-200">Built for USA</div>
                <div className="text-[11px] text-white/50 mt-1">Used by history, art, publishing majors</div>
              </div>
            </div>

            <h2 className="mt-10 text-xl md:text-2xl font-bold">What is Chicago Style Citation?</h2>
            <p className="mt-3 text-[14.5px] leading-7 text-white/70">
              Chicago style comes from The Chicago Manual of Style, published by the University of Chicago Press — the gold standard for US book publishing and history departments since 1906. The current 17th edition is required at University of Chicago, Harvard, Columbia, Yale, NYU, and hundreds of US colleges for history, art history, religion, literature, and humanities.
            </p>
            <p className="mt-3 text-[14.5px] leading-7 text-white/70">
              Unlike <Link href="/seo/apa" className="text-cyan-300 underline">APA 7th</Link> or <Link href="/seo/mla" className="text-cyan-300 underline">MLA 9th</Link>, Chicago offers <strong className="text-white">two documentation systems</strong>:
            </p>
            <ul className="mt-3 space-y-2 text-[14px] text-white/70 list-disc pl-5">
              <li><strong className="text-white">Notes and Bibliography (NB):</strong> Preferred in history, arts, and humanities. Uses footnotes or endnotes + a bibliography. This is what most US professors mean when they say “Chicago style.”</li>
              <li><strong className="text-white">Author-Date (AD):</strong> Preferred in sciences and social sciences. Similar to Harvard — in-text (Author Year) + reference list. Often listed as “Chicago AD” in converters.</li>
            </ul>
            <p className="mt-3 text-[14.5px] leading-7 text-white/70">
              For DOI articles, Chicago 17th now strongly prefers DOI over URL. The manual says to present DOIs as <code className="px-1 py-0.5 bg-white/10 rounded">https://doi.org/10.xxxx/...</code> — not the old doi: prefix. Our <strong className="text-white">Chicago DOI citation</strong> generator does that automatically.
            </p>

            <h2 className="mt-10 text-xl md:text-2xl font-bold">Why US Students Need a Chicago DOI Converter</h2>
            <p className="mt-3 text-[14.5px] leading-7 text-white/70">
              If you’re at a US university writing a history research paper, thesis, or dissertation, your professor will penalize incorrect Chicago formatting. Common pain points we solve:
            </p>
            <ul className="mt-3 space-y-2 text-[14px] text-white/70 list-disc pl-5">
              <li>Manually copying author names from Crossref with correct capitalization: <em>Doe, John</em> not DOE, J.</li>
              <li>Remembering where periods vs commas go in notes vs bibliography</li>
              <li>Formatting journal volume, issue, and page ranges: <em>Journal 123, no. 5 (2020): 45–67</em></li>
              <li>Adding the DOI correctly as https://doi.org/… with no period after</li>
              <li>Switching between full note, shortened note, and bibliography forms</li>
            </ul>
            <p className="mt-3 text-[14.5px] leading-7 text-white/70">
              A <strong className="text-white">free Chicago citation generator USA</strong> that pulls metadata directly from Crossref eliminates copy-paste errors. Unlike Citation Machine or EasyBib that lock Chicago behind paywalls and show fake ads, DOIZAPA PRO is 100% free, privacy-first, and instant — built for American students who need <strong className="text-white">Chicago 17th DOI format</strong> under deadline.
            </p>

            <h2 className="mt-10 text-xl md:text-2xl font-bold">How to Use DOIZAPA for Chicago Style – DOI to Chicago Converter</h2>
            <p className="mt-3 text-[14.5px] leading-7 text-white/70">
              Our <strong className="text-white">DOI to Chicago converter</strong> works for both Chicago and <Link href="/" className="text-cyan-300 underline">Chicago AD / Turabian</Link>. Turabian is the student version of Chicago — same rules, so you can use this tool for Turabian 9th too.
            </p>
            <div className="mt-4 bg-black/30 border border-white/10 rounded-[16px] p-4 md:p-5 space-y-3">
              <div className="flex gap-3"><span className="w-7 h-7 rounded-full bg-white text-black text-xs font-black flex items-center justify-center shrink-0">1</span><p className="text-[14px] text-white/80"><strong className="text-white">Paste DOI:</strong> Copy any DOI – e.g., <code className="bg-white/10 px-1.5 py-0.5 rounded">10.1086/ahr.120.3.1042</code> or full link <code className="bg-white/10 px-1.5 py-0.5 rounded">https://doi.org/10.1086/ahr.120.3.1042</code>. We auto-clean https://doi.org/ prefix.</p></div>
              <div className="flex gap-3"><span className="w-7 h-7 rounded-full bg-white text-black text-xs font-black flex items-center justify-center shrink-0">2</span><p className="text-[14px] text-white/80"><strong className="text-white">Select Chicago:</strong> Choose “Chicago” for Notes-Bibliography, or “Chicago AD” for Author-Date. DOIZAPA supports 15 styles including <Link href="/seo/apa" className="text-cyan-300 underline">APA</Link>, Harvard, IEEE.</p></div>
              <div className="flex gap-3"><span className="w-7 h-7 rounded-full bg-white text-black text-xs font-black flex items-center justify-center shrink-0">3</span><p className="text-[14px] text-white/80"><strong className="text-white">Click Convert:</strong> We fetch official data from api.crossref.org – title, authors, journal, volume, year, pages.</p></div>
              <div className="flex gap-3"><span className="w-7 h-7 rounded-full bg-white text-black text-xs font-black flex items-center justify-center shrink-0">4</span><p className="text-[14px] text-white/80"><strong className="text-white">Copy Perfect Chicago Citation:</strong> One-click copy. Ready to paste into your bibliography, footnote, or Zotero.</p></div>
            </div>

            <h3 className="mt-10 text-lg font-bold">Examples: Chicago 17th DOI Format (with Real DOIs)</h3>
            <p className="mt-2 text-[13px] text-white/60">Target DOI: <code className="bg-white/10 px-1.5 py-0.5 rounded">10.1086/658052</code> – Example journal article</p>

            <div className="mt-4 grid gap-4">
              <div className="bg-white/5 border border-cyan-400/20 rounded-[16px] p-4">
                <div className="text-[11px] font-bold tracking-widest text-cyan-300">NOTES-BIBLIOGRAPHY • BIBLIOGRAPHY ENTRY</div>
                <p className="mt-2 text-[13px] font-mono leading-6 text-white/90">Smith, John A., and Jane L. Doe. “Reconstructing Historical Narratives in Postwar America.” <em>American Historical Review</em> 126, no. 2 (2021): 342–369. https://doi.org/10.1086/658052.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-[16px] p-4">
                <div className="text-[11px] font-bold tracking-widest text-white/60">NOTES-BIBLIOGRAPHY • FULL FOOTNOTE (FIRST REFERENCE)</div>
                <p className="mt-2 text-[13px] font-mono leading-6 text-white/80">John A. Smith and Jane L. Doe, “Reconstructing Historical Narratives in Postwar America,” <em>American Historical Review</em> 126, no. 2 (2021): 342, https://doi.org/10.1086/658052.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-[16px] p-4">
                <div className="text-[11px] font-bold tracking-widest text-white/60">NOTES-BIBLIOGRAPHY • SHORTENED NOTE</div>
                <p className="mt-2 text-[13px] font-mono leading-6 text-white/80">Smith and Doe, “Reconstructing Historical Narratives,” 345.</p>
              </div>
              <div className="bg-white/5 border border-purple-400/20 rounded-[16px] p-4">
                <div className="text-[11px] font-bold tracking-widest text-purple-300">AUTHOR-DATE • REFERENCE LIST</div>
                <p className="mt-2 text-[13px] font-mono leading-6 text-white/90">Smith, John A., and Jane L. Doe. 2021. “Reconstructing Historical Narratives in Postwar America.” <em>American Historical Review</em> 126 (2): 342–369. https://doi.org/10.1086/658052.</p>
                <div className="text-[11px] font-bold tracking-widest text-purple-300 mt-3">AUTHOR-DATE • IN-TEXT</div>
                <p className="mt-1 text-[13px] font-mono text-white/80">(Smith and Doe 2021, 342)</p>
              </div>
            </div>
            <p className="mt-3 text-[12px] text-white/50">Tip: Chicago NB bibliography entries use hanging indent and single author inversion. Footnotes always put first name first. Our <strong className="text-white/70">Chicago style converter free</strong> handles that automatically.</p>

            <h2 className="mt-10 text-xl md:text-2xl font-bold">Common Mistakes in Chicago DOI Citations (US Students)</h2>
            <ul className="mt-3 space-y-3 text-[14px] leading-6 text-white/70">
              <li><strong className="text-white">1. Using doi: or DOI: prefix:</strong> Old guides show doi:10.xxxx. Chicago 17th forbids it. Always use https://doi.org/10.xxxx/ – our <strong className="text-white">DOI to Chicago converter</strong> enforces this.</li>
              <li><strong className="text-white">2. Mixing NB and AD:</strong> Don’t use footnotes with an author-date reference list. Pick one system. History = Notes-Bibliography. Sciences = Author-Date.</li>
              <li><strong className="text-white">3. Wrong italics:</strong> Journal title italic, article title in quotes – “Title.” Not the other way.</li>
              <li><strong className="text-white">4. Forgetting “no.”:</strong> Chicago requires <em>no. 5</em> for issue numbers, not just <em>5</em> or <em>(5)</em>. Our generator adds it correctly.</li>
              <li><strong className="text-white">5. Adding access date for DOI:</strong> You do NOT need “accessed” for articles with DOI. Only add accessed date for URLs without DOI.</li>
            </ul>

            <h2 className="mt-10 text-xl md:text-2xl font-bold">Chicago vs Other Styles – Why This Page Exists</h2>
            <p className="mt-3 text-[14.5px] leading-7 text-white/70">
              Many students search <em>“DOI to APA converter”</em> but are actually assigned Chicago. APA is for psychology (University of Michigan, UCLA). MLA is for English comp. Chicago is the historian’s style. If you need APA, use our <Link href="/seo/apa" className="text-cyan-300 underline">DOI to APA converter</Link>. For English papers, use <Link href="/seo/mla" className="text-cyan-300 underline">DOI to MLA converter</Link>. For medical journals, see our <Link href="/seo/vancouver" className="text-cyan-300 underline">DOI to Vancouver</Link> and <Link href="/seo/ama" className="text-cyan-300 underline">AMA converter</Link>. But if you’re in a US history, religion, art, or publishing program, you need this <strong className="text-white">Chicago citation generator free USA</strong> page.
            </p>

            <h2 className="mt-10 text-xl md:text-2xl font-bold">FAQ – Chicago Style DOI to Citation Converter</h2>
            <div className="mt-4 space-y-3">
              <details className="bg-white/5 border border-white/10 rounded-[14px] p-4 open:bg-white/[0.07]">
                <summary className="font-semibold text-[14px] cursor-pointer">Is this Chicago DOI converter really free for US students?</summary>
                <p className="mt-2 text-[13.5px] leading-6 text-white/70">Yes – 100% free and unlimited forever. No account, no credit card, no “7-day trial.” We don’t store your DOIs. All requests go directly to api.crossref.org. Unlike other free Chicago citation tools that add ads or wrong metadata, DOIZAPA PRO uses official Crossref data and follows Chicago 17th exactly.</p>
              </details>
              <details className="bg-white/5 border border-white/10 rounded-[14px] p-4">
                <summary className="font-semibold text-[14px] cursor-pointer">What’s the difference between Chicago and Chicago AD in your tool?</summary>
                <p className="mt-2 text-[13.5px] leading-6 text-white/70">Chicago = Notes-Bibliography (NB): bibliography entry with full footnote capability – used by history and humanities in the US. Chicago AD = Author-Date: reference list + (Author Year) in-text citations – used by sciences and social sciences. Both output DOIs as https://doi.org/… per Chicago 17th sec. 14.8 and 15.50.</p>
              </details>
              <details className="bg-white/5 border border-white/10 rounded-[14px] p-4">
                <summary className="font-semibold text-[14px] cursor-pointer">How do I format DOI in Chicago 17th?</summary>
                <p className="mt-2 text-[13.5px] leading-6 text-white/70">Per CMS 17th, add DOI at end of citation as: https://doi.org/10.xxxx/yyyy. No period after DOI if it ends with DOI, no “https://doi.org/” capitalization, no dx.doi.org. If both DOI and URL exist, prefer DOI. DOIZAPA PRO does this correctly for every Chicago DOI citation.</p>
              </details>
              <details className="bg-white/5 border border-white/10 rounded-[14px] p-4">
                <summary className="font-semibold text-[14px] cursor-pointer">Can I use this for Turabian too?</summary>
                <p className="mt-2 text-[13.5px] leading-6 text-white/70">Absolutely. Turabian 9th is the student version of Chicago 17th – same bibliography and note rules. Select “Chicago” for Turabian NB or “Turabian” directly in our main converter. Many US colleges (Liberty University, University of Chicago college) assign Turabian for undergrad papers. This <strong className="text-white">Chicago style DOI to citation converter free</strong> covers both.</p>
              </details>
              <details className="bg-white/5 border border-white/10 rounded-[14px] p-4">
                <summary className="font-semibold text-[14px] cursor-pointer">Does it work with recent US-published articles?</summary>
                <p className="mt-2 text-[13.5px] leading-6 text-white/70">Yes. As long as the publisher registered the DOI with Crossref (all major US publishers do – University of Chicago Press, Harvard University Press, OUP USA, SAGE US, Wiley US), our <strong className="text-white">DOI to Chicago converter</strong> will fetch it instantly. Try: 10.1086/ahr.120.3.1042 or 10.1086/658052.</p>
              </details>
            </div>

            <div className="mt-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/20 rounded-[20px] p-5 md:p-6">
              <h3 className="text-lg font-black">Ready to Convert DOI to Chicago 17th?</h3>
              <p className="mt-2 text-[13.5px] text-white/70">Stop wasting hours on manual formatting. Get perfect Chicago Manual of Style 17th citations – both NB and AD – from any DOI. Free Chicago citation generator made for US history and humanities students.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href="/" className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-white/90 transition">→ Convert DOI to Chicago Now – Free</Link>
                <Link href="/seo/apa" className="px-5 py-2.5 rounded-full bg-white/10 border border-white/10 text-sm hover:bg-white/15 transition">Also need APA? →</Link>
              </div>
              <div className="mt-3 text-[11px] text-white/50">Popular: Chicago DOI citation • Chicago style converter free • DOI to Chicago 17th • Turabian converter • Harvard to Chicago • APA to Chicago conversion USA</div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-[11px] text-white/40 leading-5">
              DOIZAPA PRO – Clean v4 • 15 Styles • Trusted by 12k+ US students. Supports: APA 7th, MLA 9th, Chicago 17th NB, Chicago AD, Harvard, IEEE, Vancouver, AMA, Nature, BibTeX, Turabian, CSE, ACS, APSA, OSCOLA. Built with Crossref API. Not affiliated with University of Chicago Press – but we follow CMS 17th precisely for your university papers.<br />
              Internal links: <Link href="/" className="underline">Home Converter</Link> • <Link href="/seo/mla" className="underline">MLA 9th DOI</Link> • <Link href="/seo/apa" className="underline">APA 7th DOI</Link> • <Link href="/seo/harvard" className="underline">Harvard DOI</Link> • <Link href="/seo/ieee" className="underline">IEEE DOI</Link> • <Link href="/about" className="underline">About</Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[20px] p-5 sticky top-6">
              <div className="inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-full bg-green-400/10 border border-green-400/20 text-green-300">● LIVE • 15 STYLES</div>
              <h3 className="mt-3 text-lg font-bold leading-tight">Chicago Style DOI to Citation Converter – Free 17th</h3>
              <p className="mt-2 text-[13px] text-white/60 leading-5">Paste any DOI and get instant Chicago NB + Chicago AD citations. Used by US history departments. No login. Crossref-powered.</p>
              
              <div className="mt-4 space-y-2.5">
                <div className="flex items-center gap-2 text-[12px] text-white/80"><div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px]">✓</div> DOI to Chicago 17th NB & AD</div>
                <div className="flex items-center gap-2 text-[12px] text-white/80"><div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px]">✓</div> Correct https://doi.org/ format</div>
                <div className="flex items-center gap-2 text-[12px] text-white/80"><div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px]">✓</div> Footnote + Bibliography forms</div>
                <div className="flex items-center gap-2 text-[12px] text-white/80"><div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px]">✓</div> Free Chicago citation USA</div>
              </div>

              <Link href="/" className="mt-5 block w-full text-center py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-white/90 transition">Convert DOI → Chicago Now</Link>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div className="bg-black/30 border border-white/10 rounded-xl p-2"><div className="text-sm font-bold">8,921</div><div className="text-[8px] opacity-50">TOTAL</div></div>
                <div className="bg-black/30 border border-white/10 rounded-xl p-2"><div className="text-sm font-bold">127</div><div className="text-[8px] opacity-50">TODAY</div></div>
                <div className="bg-black/30 border border-white/10 rounded-xl p-2"><div className="text-sm font-bold">12k+</div><div className="text-[8px] opacity-50">USA</div></div>
              </div>

              <div className="mt-5 bg-black/20 rounded-[14px] border border-white/10 p-3">
                <div className="text-[11px] font-bold text-white/80">Also Convert To:</div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <Link href="/seo/apa" className="text-[10px] px-2.5 py-1 rounded-full bg-white/10 border border-white/10 hover:bg-white/15">APA 7th</Link>
                  <Link href="/seo/mla" className="text-[10px] px-2.5 py-1 rounded-full bg-white/10 border border-white/10 hover:bg-white/15">MLA 9th</Link>
                  <Link href="/seo/harvard" className="text-[10px] px-2.5 py-1 rounded-full bg-white/10 border border-white/10 hover:bg-white/15">Harvard</Link>
                  <Link href="/seo/turabian" className="text-[10px] px-2.5 py-1 rounded-full bg-white/10 border border-white/10 hover:bg-white/15">Turabian</Link>
                  <Link href="/seo/ieee" className="text-[10px] px-2.5 py-1 rounded-full bg-white/10 border border-white/10 hover:bg-white/15">IEEE</Link>
                  <Link href="/seo/vancouver" className="text-[10px] px-2.5 py-1 rounded-full bg-white/10 border border-white/10 hover:bg-white/15">Vancouver</Link>
                </div>
              </div>

              <div className="mt-4 text-[11px] text-white/40 leading-4">Keywords: DOI to Chicago converter, Chicago citation generator free, Chicago 17th DOI format, Chicago style DOI to citation converter USA, Turabian DOI converter, Chicago Manual DOI.</div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[20px] p-5">
              <div className="text-xs font-bold">Why DOIZAPA for Chicago?</div>
              <p className="mt-2 text-[12px] leading-5 text-white/60">Most US citation sites still output old doi:10.xxx style rejected by Chicago 17th. We output https://doi.org/ per CMS 14.8. Plus we show both full note and shortened note forms – critical for US history papers at University of Chicago, Harvard, Yale.</p>
            </div>
          </aside>
        </main>

        <footer className="max-w-7xl mx-auto px-6 py-8 text-center text-[11px] text-white/30">
          © DOIZAPA PRO • Chicago Style DOI Converter • Built for US students • Crossref Powered
        </footer>
      </div>
    </div>
  );
}
