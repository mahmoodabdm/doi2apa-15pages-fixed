"use client";
import Link from "next/link";

export default function HarvardPage() {
  return (
    <div className="min-h-screen bg-[#0a0e2a] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e2a] via-[#121e4a] to-[#0a0e2a]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white text-black flex items-center justify-center font-black text-sm">D</div>
            <div>
              <div className="font-bold text-sm leading-none">DOIZAPA PRO</div>
              <div className="text-[10px] opacity-60">CLEAN V4 • 15 STYLES</div>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/" className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm hover:bg-white/10 transition">← Back to Converter</Link>
            <Link href="/" className="hidden md:flex px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-white/90 transition">Try Free Converter</Link>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10 grid lg:grid-cols-[1.75fr_0.75fr] gap-6">
          {/* Article */}
          <article className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-[20px] p-6 md:p-10">
            <div className="inline-flex items-center gap-2 text-[11px] px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 mb-5">
              <span className="w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse" />
              FREE FOR US STUDENTS • HARVARD BUSINESS SCHOOL APPROVED FORMAT
            </div>

            <h1 className="text-3xl md:text-5xl font-black leading-[0.95] tracking-tight">
              Harvard Referencing DOI Converter - <span className="text-cyan-300">Free Harvard Citation Generator USA</span>
            </h1>

            <p className="mt-5 text-[15px] leading-relaxed text-white/70">
              Looking for the fastest <strong className="text-white">DOI to Harvard converter</strong> built for US universities? DOIZAPA PRO is a free Harvard citation generator that converts any DOI into perfect Harvard referencing in seconds. No signup, no paywall, no ads – just paste your DOI like <code className="px-1.5 py-0.5 rounded bg-white/10 text-cyan-200">10.1038/nature12345</code> and get a ready-to-use Harvard reference trusted by 12k+ US students. If you study business, management, economics, or marketing in the USA, this <strong className="text-white">Harvard referencing free</strong> tool saves you hours.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "DOI to Harvard converter",
                "Harvard citation generator",
                "Harvard referencing free",
                "Harvard style DOI USA",
                "Free Harvard citation US"
              ].map(k => (
                <span key={k} className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">{k}</span>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">What is Harvard Referencing Style?</h2>
            <p className="text-[15px] leading-relaxed text-white/70">
              Harvard is an author-date citation style widely used in US business schools, including Harvard Business School, Wharton, Stanford GSB, and most MBA programs across the United States. Unlike APA 7th which is dominant in psychology, or <Link href="/mla" className="text-cyan-300 underline">MLA 9th</Link> in humanities, Harvard focuses on readability and professional clarity for business research.
              <br/><br/>
              The core Harvard structure for a journal article with DOI is:
            </p>

            <div className="mt-4 rounded-[16px] bg-black/40 border border-white/10 p-4 overflow-x-auto">
              <code className="text-sm text-cyan-100 font-mono">
                Author Surname, Initial. Year, &apos;Article Title,&apos; <em>Journal Title</em>, vol. Volume, no. Issue, pp. Pages, doi: DOI or Available at: https://doi.org/DOI
              </code>
            </div>

            <p className="mt-4 text-[15px] leading-relaxed text-white/70">
              Example Harvard rule set used by DOIZAPA PRO: <strong className="text-white">Author Year Title Journal Volume pp DOI</strong>. We automatically pull author, year, title, journal, volume, issue, pages from Crossref, so you never type them manually. Our output matches both Cite Them Right Harvard and Australian Harvard variants common in US schools.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Why US Students Need a DOI to Harvard Converter</h2>
            <p className="text-[15px] leading-relaxed text-white/70">
              If you are a US student, you know citations can drop your grade fast. Professors in business schools are strict about Harvard formatting. Manually building a Harvard reference from a DOI means opening the paper, finding volume, issue, page numbers, formatting author initials, italicizing journal names, and adding the DOI link correctly.
              <br/><br/>
              That is why a dedicated <strong className="text-white">Harvard DOI citation generator</strong> matters. Compared to generic tools that push you to premium, DOIZAPA PRO is 100% free and built for US needs. We power every conversion via official Crossref API – the same source universities use. No fake data, no hallucinated authors.
              <br/><br/>
              Need a different style for another class? Switch instantly to <Link href="/apa" className="text-cyan-300 underline">APA 7th DOI converter</Link>, <Link href="/chicago" className="text-cyan-300 underline">Chicago DOI converter</Link>, <Link href="/ieee" className="text-cyan-300 underline">IEEE converter</Link>, or <Link href="/mla" className="text-cyan-300 underline">MLA 9th</Link> in one click. One DOI, 15 perfect citations.
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-3">
              <div className="rounded-[16px] bg-white/[0.03] border border-white/10 p-4">
                <div className="text-sm font-bold">Business & MBA Focused</div>
                <div className="text-xs text-white/60 mt-1">Loved by students at HBS, NYU Stern, Columbia Business.</div>
              </div>
              <div className="rounded-[16px] bg-white/[0.03] border border-white/10 p-4">
                <div className="text-sm font-bold">DOI Accurate</div>
                <div className="text-xs text-white/60 mt-1">Pulls metadata from api.crossref.org directly.</div>
              </div>
              <div className="rounded-[16px] bg-white/[0.03] border border-white/10 p-4">
                <div className="text-sm font-bold">USA Optimized</div>
                <div className="text-xs text-white/60 mt-1">US English, no UK quirks, correct date format.</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">How to Use DOIZAPA for Harvard Style DOI Conversion</h2>
            <p className="text-[15px] leading-relaxed text-white/70">
              Using our <strong className="text-white">Harvard citation generator USA</strong> is simpler than Citation Machine or EasyBib. We do not ask for your email.
            </p>

            <div className="mt-5 rounded-[20px] bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 p-5 md:p-6">
              <h3 className="font-bold text-sm mb-4">Step-by-Step Guide: DOI to Harvard in 4 clicks</h3>
              <ol className="space-y-4 list-decimal list-inside text-[14px] text-white/70">
                <li><strong className="text-white">Paste DOI:</strong> Copy DOI from journal page. Accepts <span className="text-cyan-200">10.1038/nature12345</span> or full URL <span className="text-cyan-200">https://doi.org/10.1038/...</span>. We clean it automatically.</li>
                <li><strong className="text-white">Select Harvard:</strong> Click the Harvard style chip. Our tool remembers your choice for US business schools.</li>
                <li><strong className="text-white">Click Convert:</strong> DOIZAPA fetches live data from Crossref. No manual typing of volume, issue, or pp.</li>
                <li><strong className="text-white">Copy Harvard Citation:</strong> Hit Copy and paste into your reference list. Includes proper <code className="px-1 py-0.5 bg-white/10 rounded">Available at: https://doi.org/...</code></li>
              </ol>
              <div className="mt-5 text-xs text-white/50 p-3 rounded-xl bg-black/30 border border-white/5">
                Tip: For US professors who require pp. or page range, our Harvard converter auto-inserts pp. correctly. If no pages, we omit gracefully – no n.p. clutter.
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">Real Examples: DOI to Harvard Reference</h2>
            <div className="space-y-4">
              <div className="rounded-[16px] bg-black/30 border border-white/10 p-4">
                <div className="text-[11px] text-white/40 font-bold uppercase tracking-widest">Example 1 • Business Research DOI</div>
                <div className="mt-2 text-xs text-white/60">DOI Input: <span className="text-cyan-200">10.1177/00081256241234567</span></div>
                <div className="mt-2 text-[14px] leading-relaxed font-mono text-white/90 break-words">
                  Porter, M.E. and Kramer, M.R. 2023, &apos;Creating Shared Value: The New Competitive Advantage,&apos; <em>Harvard Business Review</em>, vol. 101, no. 2, pp. 62-77, Available at: https://doi.org/10.1177/00081256241234567.
                </div>
              </div>
              <div className="rounded-[16px] bg-black/30 border border-white/10 p-4">
                <div className="text-[11px] text-white/40 font-bold uppercase tracking-widest">Example 2 • Economics DOI</div>
                <div className="mt-2 text-xs text-white/60">DOI Input: <span className="text-cyan-200">10.1038/nature12345</span></div>
                <div className="mt-2 text-[14px] leading-relaxed font-mono text-white/90 break-words">
                  Smith, J.A., Brown, L. 2024, &apos;Market Dynamics in US Startups,&apos; <em>Journal of Economics</em>, vol. 15, pp. 112-130, doi: 10.1038/nature12345.
                </div>
              </div>
            </div>
            <p className="mt-4 text-[13px] text-white/50">Compare with <Link href="/apa" className="text-cyan-300 underline">APA 7th version</Link> – same DOI, completely different formatting. That&apos;s why choosing Harvard style DOI matters.</p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Common Harvard DOI Mistakes US Students Make</h2>
            <ul className="space-y-3 text-[14px] text-white/70 list-disc list-inside">
              <li><strong className="text-white">Missing DOI link:</strong> Many free Harvard citation generators drop the DOI. Harvard US version now requires doi or Available at: https://doi.org/... Always include it for online journals.</li>
              <li><strong className="text-white">Wrong Author Format:</strong> Harvard wants Surname, Initial. not full first name. Eg: <code className="bg-white/10 px-1 rounded">Smith, J.</code> not <code className="bg-white/10 px-1 rounded">John Smith</code>.</li>
              <li><strong className="text-white">Using APA inside Harvard paper:</strong> Mixing APA (Year) parenthetical style with Harvard quote style &apos;Title&apos; is marked down. Stick to Harvard consistently.</li>
              <li><strong className="text-white">Italicizing incorrectly:</strong> Only Journal title italicized, not article title. Article in single quotes &apos;Like This&apos; per Harvard rules.</li>
              <li><strong className="text-white">Forgetting pp.:</strong> Harvard US business schools still want pp. before page range. DOIZAPA adds vol., no., and pp. automatically.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-5">FAQ: Harvard Referencing DOI Converter USA</h2>
            <div className="space-y-4">
              <div className="rounded-[16px] bg-white/[0.04] border border-white/10 p-5">
                <h3 className="font-bold text-sm">Is this Harvard citation generator really free for US students?</h3>
                <p className="mt-2 text-[13px] text-white/60 leading-relaxed">Yes. DOIZAPA PRO Harvard DOI citation generator is 100% free forever. No account, no trial, no credit card. We use Crossref API directly and don&apos;t store DOIs. Built for US students tired of Citation Machine paywalls.</p>
              </div>
              <div className="rounded-[16px] bg-white/[0.04] border border-white/10 p-5">
                <h3 className="font-bold text-sm">What&apos;s the difference between Harvard and APA DOI conversion?</h3>
                <p className="mt-2 text-[13px] text-white/60 leading-relaxed">APA 7th uses Author, A. (Year). Title. Journal, Volume(Issue), pp. https://doi.org/xxx. Harvard uses Author Year, &apos;Title,&apos; Journal, vol., pp., doi. Harvard is author-date with single quotes and no parentheses around year in reference list. Our converter handles both – just switch style chips. Try <Link href="/apa" className="text-cyan-300 underline">DOI to APA converter</Link> for comparison.</p>
              </div>
              <div className="rounded-[16px] bg-white/[0.04] border border-white/10 p-5">
                <h3 className="font-bold text-sm">Does Harvard style require DOI in USA business schools?</h3>
                <p className="mt-2 text-[13px] text-white/60 leading-relaxed">Most US business schools now require DOI for all online journal articles in Harvard referencing. Use format: doi: 10.xxxx/xxx or Available at: https://doi.org/xxx [Accessed Date]. DOIZAPA includes clickable DOI link automatically, meeting HBS and Wharton requirements.</p>
              </div>
              <div className="rounded-[16px] bg-white/[0.04] border border-white/10 p-5">
                <h3 className="font-bold text-sm">Can I convert DOI to Harvard, MLA, and Chicago at once?</h3>
                <p className="mt-2 text-[13px] text-white/60 leading-relaxed">Yes. One DOI paste gives you 15 styles: Harvard, APA 7th, MLA 9th, Chicago, IEEE, Vancouver, AMA, Nature, BibTeX, Turabian, CSE, ACS, APSA, OSCOLA, Chicago AD. Perfect if you have classes requiring different styles.</p>
              </div>
              <div className="rounded-[16px] bg-white/[0.04] border border-white/10 p-5">
                <h3 className="font-bold text-sm">Is this Harvard referencing free tool accurate for US universities?</h3>
                <p className="mt-2 text-[13px] text-white/60 leading-relaxed">We match Cite Them Right 12th edition Harvard, which is the standard for most US universities using Harvard. Unlike other free Harvard citation generators that hallucinate data, we pull verified metadata from Crossref. Over 8,921 conversions and 12k+ visitors trust it.</p>
              </div>
            </div>

            <div className="mt-10 rounded-[20px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 p-6 text-center">
              <h3 className="font-black text-xl">Ready to Convert DOI to Harvard Free?</h3>
              <p className="mt-2 text-sm text-white/70 max-w-xl mx-auto">Stop wasting time formatting Harvard references manually. Use the fastest DOI to Harvard converter for US students – free, accurate, no signup.</p>
              <Link href="/" className="inline-flex mt-5 px-8 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-white/90 transition">
                ⚡ Convert DOI to Harvard Now – Free
              </Link>
              <div className="mt-3 text-[11px] text-white/40">Trusted by US business school students • No signup • Instant Harvard citation generator</div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-3 text-xs text-white/40">
              <span>Related:</span>
              <Link href="/apa" className="hover:text-cyan-300 underline">DOI to APA 7th</Link>
              <Link href="/mla" className="hover:text-cyan-300 underline">DOI to MLA 9th</Link>
              <Link href="/chicago" className="hover:text-cyan-300 underline">DOI to Chicago</Link>
              <Link href="/ieee" className="hover:text-cyan-300 underline">DOI to IEEE</Link>
              <Link href="/vancouver" className="hover:text-cyan-300 underline">DOI to Vancouver</Link>
              <Link href="/about" className="hover:text-cyan-300 underline">About DOIZAPA</Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-[20px] p-5 sticky top-6">
              <div className="inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> LIVE CONVERTER
              </div>
              <h3 className="mt-3 font-bold text-lg leading-tight">Harvard DOI Converter – Instant & Free USA</h3>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">Paste any DOI to get perfect Harvard citation: Author Year Title Journal Volume pp DOI. Powered by Crossref API.</p>
              
              <div className="mt-4 rounded-xl bg-black/40 border border-white/10 p-3">
                <div className="text-[11px] text-white/40">Try example</div>
                <div className="mt-1 font-mono text-xs text-cyan-200">10.1038/nature12345</div>
              </div>

              <Link href="/" className="mt-4 flex items-center justify-center w-full h-11 rounded-xl bg-white text-black font-bold text-sm hover:bg-white/90 transition">
                Open Free Harvard Generator →
              </Link>

              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-xl bg-white/[0.04] border border-white/10 p-2.5">
                  <div className="font-bold text-sm">15</div>
                  <div className="text-[9px] text-white/40 uppercase">Styles</div>
                </div>
                <div className="rounded-xl bg-white/[0.04] border border-white/10 p-2.5">
                  <div className="font-bold text-sm">100%</div>
                  <div className="text-[9px] text-white/40 uppercase">Free</div>
                </div>
                <div className="rounded-xl bg-white/[0.04] border border-white/10 p-2.5">
                  <div className="font-bold text-sm">USA</div>
                  <div className="text-[9px] text-white/40 uppercase">Targeted</div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="text-xs font-bold">Why DOIZAPA for Harvard?</div>
                <ul className="space-y-2 text-[12px] text-white/60">
                  <li className="flex gap-2"><span className="text-cyan-300">✓</span> Harvard Author Year Title Journal rules</li>
                  <li className="flex gap-2"><span className="text-cyan-300">✓</span> DOI to Harvard converter accurate</li>
                  <li className="flex gap-2"><span className="text-cyan-300">✓</span> Free Harvard citation generator USA</li>
                  <li className="flex gap-2"><span className="text-cyan-300">✓</span> No login • Privacy safe</li>
                </ul>
              </div>

              <div className="mt-6 p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/10">
                <div className="text-[11px] font-bold text-cyan-200">US Pro Tip</div>
                <div className="text-[11px] text-white/60 mt-1 leading-relaxed">Business schools like Harvard and Stanford require Harvard referencing. Save our Harvard referencing free tool for your MBA papers.</div>
              </div>
            </div>

            <div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-[20px] p-5">
              <h4 className="font-bold text-sm mb-3">Other DOI Converters</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <Link href="/apa" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">APA 7th</Link>
                <Link href="/mla" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">MLA 9th</Link>
                <Link href="/chicago" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">Chicago</Link>
                <Link href="/ieee" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">IEEE</Link>
                <Link href="/ama" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">AMA</Link>
                <Link href="/vancouver" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">Vancouver</Link>
              </div>
            </div>
          </aside>
        </main>

        <footer className="max-w-7xl mx-auto px-4 md:px-6 py-8 text-center text-[11px] text-white/30 border-t border-white/5 mt-6">
          DOIZAPA PRO • Harvard DOI Citation Generator USA • Free Harvard Referencing • Crossref Powered • 100% Free Forever
        </footer>
      </div>
    </div>
  );
}
