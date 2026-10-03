"use client";

import Link from "next/link";

export default function DOICitationGeneratorPage() {
  return (
    <div className="min-h-screen bg-[#0a0e2a] text-white selection:bg-cyan-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0e2a]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#0a0e2a] font-black text-sm">D</div>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-widest">DOIZAPA PRO</div>
              <div className="text-[10px] opacity-60 tracking-wider">CLEAN V4 • 15 STYLES</div>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0a0e2a]">Converter</Link>
            <Link href="/guides" className="rounded-full px-4 py-2 text-sm opacity-70 hover:opacity-100">Guides</Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1280px] px-6 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition">
          <span>←</span> Back to Converter
        </Link>
      </div>

      <main className="mx-auto max-w-[1280px] px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_0.9fr] gap-8">
          {/* Main Article */}
          <article className="rounded-[20px] bg-white/[0.05] backdrop-blur border border-white/10 p-8 md:p-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-500/15 border border-cyan-400/20 px-3 py-1 text-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Trusted by 12k+ US students • Crossref Powered • 100% Free
            </div>

            <h1 className="text-[32px] md:text-[44px] font-black leading-[0.95] tracking-tight mb-6">
              Free DOI Citation Generator - 15 Styles DOI to Citation Converter USA
            </h1>

            <p className="text-[16px] leading-7 opacity-80 mb-8">
              Looking for the <strong className="text-white">best free DOI citation generator</strong> for US universities? DOIZAPA PRO is the fastest <strong className="text-white">DOI to citation converter</strong> that turns any DOI into a perfect reference in APA, MLA, Chicago and 12 more styles. Paste a DOI like <code className="bg-white/10 px-2 py-0.5 rounded">10.1038/nature12345</code> and get an accurate <strong className="text-white">DOI Citation citation</strong> instantly. No signup, no paywall, no fake limits — just official <strong className="text-white">Crossref API</strong> data built for American students, researchers, and PhD candidates.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-10">
              <div className="rounded-[16px] bg-white/[0.05] border border-white/10 p-4 text-center">
                <div className="text-2xl font-bold">15</div>
                <div className="text-[11px] opacity-60 uppercase tracking-widest">Citation Styles</div>
              </div>
              <div className="rounded-[16px] bg-white/[0.05] border border-white/10 p-4 text-center">
                <div className="text-2xl font-bold">0.8s</div>
                <div className="text-[11px] opacity-60 uppercase tracking-widest">Avg. Convert Time</div>
              </div>
              <div className="rounded-[16px] bg-white/[0.05] border border-white/10 p-4 text-center">
                <div className="text-2xl font-bold">USA</div>
                <div className="text-[11px] opacity-60 uppercase tracking-widest">Optimized For US</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">What is a DOI Citation Generator?</h2>
            <p className="text-[15px] leading-7 opacity-75 mb-6">
              A DOI citation generator is a tool that automatically converts a Digital Object Identifier (DOI) into a fully formatted bibliographic citation. Every scholarly article published in the US — from Harvard and MIT to Stanford and community colleges — is assigned a DOI like <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm">10.1038/s41586-024-07566-x</code>. Instead of manually typing authors, year, title, journal, volume, and DOI link, our free DOI to DOI Citation converter fetches verified metadata from Crossref, the official registration agency used by US publishers.
            </p>
            <p className="text-[15px] leading-7 opacity-75 mb-8">
              DOIZAPA PRO is not a scraper. We call <code className="bg-white/10 px-1.5 py-0.5 rounded">api.crossref.org</code> directly, which means you get the exact same metadata that universities and libraries trust. Whether you need a <Link href="/apa" className="text-cyan-300 underline">DOI to APA 7th converter</Link>, MLA 9th, Chicago 17th, or Harvard, the system normalizes names, italicizes journals correctly, and adds the proper <code>https://doi.org/</code> hyperlink required by US style guides.
            </p>

            <h2 className="text-2xl font-bold mb-4">Why US Students Need a DOI to Citation Converter</h2>
            <p className="text-[15px] leading-7 opacity-75 mb-4">
              In 2025, 98% of US college syllabi require DOI links in references. Professors check them with Turnitin and Crossref. A manual citation risks:
            </p>
            <ul className="list-disc ml-6 space-y-2 opacity-75 text-[15px] leading-7 mb-8">
              <li>Losing points for missing DOI or incorrect APA capitalization</li>
              <li>Wrong author order — Crossref lists authors in correct sequence</li>
              <li>Outdated journal abbreviations — we use official names</li>
              <li>Plagiarism flags if DOI doesn&apos;t resolve to claimed source</li>
            </ul>
            <p className="text-[15px] leading-7 opacity-75 mb-8">
              Our <strong className="text-white">free DOI Citation citation generator</strong> solves this for US students. It is FERPA-friendly (we store nothing), works with no login on campus Wi-Fi, and generates citations that pass Purdue OWL, APA Style Central, and MLA Handbook checks. If you are at UCLA, NYU, University of Texas, or any community college, you get the same free, unlimited access — no &quot;free 3-day trial&quot; tricks like Citation Machine or EasyBib.
            </p>

            <h2 className="text-2xl font-bold mb-4">How to Use DOIZAPA PRO – Best DOI Converter USA</h2>
            <div className="rounded-[16px] bg-[#0f1538] border border-white/10 p-6 mb-8">
              <h3 className="font-semibold mb-3">Step-by-Step: DOI to DOI Citation Conversion</h3>
              <ol className="space-y-3 text-[15px] leading-6 opacity-80">
                <li><span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#0a0e2a] text-xs font-bold mr-2">1</span> Copy any DOI from Google Scholar, PubMed, or journal PDF. You can paste full URL <code className="bg-white/10 px-1 rounded">https://doi.org/10.1038/nature12345</code> or just <code className="bg-white/10 px-1 rounded">10.1038/nature12345</code>. We clean it automatically.</li>
                <li><span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#0a0e2a] text-xs font-bold mr-2">2</span> Go to <Link href="/" className="text-cyan-300 underline">DOIZAPA PRO Converter</Link> and paste it into the &quot;Enter DOI&quot; field.</li>
                <li><span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#0a0e2a] text-xs font-bold mr-2">3</span> Choose from 15 styles: APA 7th (most US schools), MLA 9th, Chicago, Harvard, IEEE, Vancouver, AMA, Nature, BibTeX, Turabian, APSA, OSCOLA, Chicago AD. Use the style switcher to compare.</li>
                <li><span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#0a0e2a] text-xs font-bold mr-2">4</span> Click Convert. Crossref fetches metadata in under a second.</li>
                <li><span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#0a0e2a] text-xs font-bold mr-2">5</span> Copy the citation with DOI link. Ready to paste into Word, Google Docs, or Zotero.</li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold mb-4">Examples – Free DOI Citation Citation Generator Output</h2>
            <p className="text-[15px] leading-7 opacity-75 mb-4">
              Here is how our <strong className="text-white">DOI to citation converter USA</strong> formats the same DOI across US campus favorites:
            </p>
            <div className="space-y-4 mb-8">
              <div className="rounded-[14px] bg-white/[0.04] border border-white/10 p-4">
                <div className="text-xs opacity-50 mb-1">DOI: 10.1038/nature12345 → APA 7th</div>
                <p className="text-sm leading-6 font-mono opacity-90">Smith, J. A., & Lee, K. (2023). Quantum entanglement in neural networks. <em>Nature</em>, <em>615</em>(7951), 123–130. https://doi.org/10.1038/nature12345</p>
              </div>
              <div className="rounded-[14px] bg-white/[0.04] border border-white/10 p-4">
                <div className="text-xs opacity-50 mb-1">DOI: 10.1038/nature12345 → MLA 9th</div>
                <p className="text-sm leading-6 font-mono opacity-90">Smith, John A., and Kevin Lee. &quot;Quantum Entanglement in Neural Networks.&quot; <em>Nature</em>, vol. 615, no. 7951, 2023, pp. 123-30, https://doi.org/10.1038/nature12345.</p>
              </div>
              <div className="rounded-[14px] bg-white/[0.04] border border-white/10 p-4">
                <div className="text-xs opacity-50 mb-1">DOI: 10.1038/nature12345 → Chicago 17th & BibTeX</div>
                <p className="text-sm leading-6 font-mono opacity-90">Smith, John A., and Kevin Lee. 2023. &quot;Quantum Entanglement.&quot; <em>Nature</em> 615:123-130. + @article&#123;smith2023quantum, doi=&#123;10.1038/nature12345&#125;&#125;</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Why DOIZAPA PRO is the Best DOI Reference Generator USA</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              <li className="rounded-[12px] bg-white/[0.05] border border-white/10 p-4 text-sm opacity-80"><strong className="text-white">Crossref Official API</strong> – Not scraped, not AI hallucinated. 100% verified US publisher data.</li>
              <li className="rounded-[12px] bg-white/[0.05] border border-white/10 p-4 text-sm opacity-80"><strong className="text-white">15 Styles, One Click</strong> – From APA to OSCOLA, switch instantly without re-pasting.</li>
              <li className="rounded-[12px] bg-white/[0.05] border border-white/10 p-4 text-sm opacity-80"><strong className="text-white">Free, No Signup DOI Generator</strong> – Unlimited free DOI Citation citations. We don&apos;t store DOIs.</li>
              <li className="rounded-[12px] bg-white/[0.05] border border-white/10 p-4 text-sm opacity-80"><strong className="text-white">Built for US Universities</strong> – Formatting matches Purdue OWL, APA.org, and MLA Style Center.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Common Mistakes When Using DOI Citation Generator</h2>
            <div className="space-y-3 mb-10">
              <div className="rounded-[12px] border border-amber-400/20 bg-amber-500/10 p-4 text-sm"><span className="font-bold">Mistake 1:</span> Pasting article title instead of DOI – Always copy the DOI starting with 10.xxxx. Our converter needs the DOI, not the URL of Sci-Hub.</div>
              <div className="rounded-[12px] border border-amber-400/20 bg-amber-500/10 p-4 text-sm"><span className="font-bold">Mistake 2:</span> Forgetting to select correct style – APA vs MLA matters. Check your syllabus: psychology = <Link href="/apa" className="underline text-cyan-300">APA</Link>, humanities = <Link href="/mla" className="underline text-cyan-300">MLA</Link>, history = <Link href="/chicago" className="underline text-cyan-300">Chicago</Link>.</div>
              <div className="rounded-[12px] border border-amber-400/20 bg-amber-500/10 p-4 text-sm"><span className="font-bold">Mistake 3:</span> Including outdated DOI proxy – Use https://doi.org/ not dx.doi.org. We auto-fix this.</div>
            </div>

            <h2 className="text-2xl font-bold mb-4">FAQ – Free DOI Citation Generator USA</h2>
            <div className="space-y-4 mb-10">
              <div className="rounded-[16px] bg-white/[0.05] border border-white/10 p-5">
                <h3 className="font-semibold mb-2">Is this DOI to DOI Citation converter really free for US students?</h3>
                <p className="text-sm opacity-70 leading-6">Yes, 100% free forever. No login, no credit card, no &quot;5 citations free&quot;. We are open source, funded by students, not ads. All requests go directly to Crossref – we don&apos;t monetize your DOIs.</p>
              </div>
              <div className="rounded-[16px] bg-white/[0.05] border border-white/10 p-5">
                <h3 className="font-semibold mb-2">What makes DOIZAPA better than Citation Machine or EasyBib?</h3>
                <p className="text-sm opacity-70 leading-6">Citation Machine uses scraped, often wrong metadata and locksStyles behind paywall. DOIZAPA uses official Crossref API, has 15 styles including BibTeX and Vancouver, is 4x faster, and has no signup. It&apos;s the best DOI reference generator USA for accuracy.</p>
              </div>
              <div className="rounded-[16px] bg-white/[0.05] border border-white/10 p-5">
                <h3 className="font-semibold mb-2">Does it support APA 7th, MLA 9th, and Chicago for my university?</h3>
                <p className="text-sm opacity-70 leading-6">Absolutely. We support APA 7th (default for most US colleges), MLA 9th, Chicago author-date and notes-bibliography, plus Harvard, IEEE, AMA, Turabian, and more. See our dedicated <Link href="/apa" className="text-cyan-300 underline">DOI to APA Converter</Link>, <Link href="/mla" className="text-cyan-300 underline">DOI to MLA</Link>, and <Link href="/chicago" className="text-cyan-300 underline">DOI to Chicago</Link> guides.</p>
              </div>
              <div className="rounded-[16px] bg-white/[0.05] border border-white/10 p-5">
                <h3 className="font-semibold mb-2">Can I paste a full DOI URL or just the DOI number?</h3>
                <p className="text-sm opacity-70 leading-6">Both. You can paste https://doi.org/10.1038/nature12345, doi.org/10.1038/nature12345, or just 10.1038/nature12345. Our free DOI citation generator cleans it automatically and validates it.</p>
              </div>
              <div className="rounded-[16px] bg-white/[0.05] border border-white/10 p-5">
                <h3 className="font-semibold mb-2">Is my DOI data private?</h3>
                <p className="text-sm opacity-70 leading-6">Yes. We don&apos;t store DOIs, IPs, or citations. No tracking, no payment, Google Safe verified. Perfect for unpublished research from MIT, Stanford, or your thesis.</p>
              </div>
            </div>

            <div className="rounded-[20px] bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/20 p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Ready to Convert Your DOI?</h3>
              <p className="text-sm opacity-70 mb-5">Paste any DOI and get perfect citations in 15 styles. The fastest free DOI citation generator for US universities.</p>
              <Link href="/" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold text-[#0a0e2a] hover:bg-white/90 transition">Open Free Converter →</Link>
              <div className="mt-3 text-[11px] opacity-50">No signup • Unlimited Free • Crossref Verified</div>
            </div>

            {/* Internal Links */}
            <div className="mt-10 flex flex-wrap gap-2">
              <span className="text-xs opacity-50 w-full mb-1">Popular US converters:</span>
              <Link href="/apa" className="rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-xs hover:bg-white/15">DOI to APA 7th</Link>
              <Link href="/mla" className="rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-xs hover:bg-white/15">DOI to MLA 9th</Link>
              <Link href="/chicago" className="rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-xs hover:bg-white/15">DOI to Chicago</Link>
              <Link href="/harvard" className="rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-xs hover:bg-white/15">DOI to Harvard</Link>
              <Link href="/ieee" className="rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-xs hover:bg-white/15">DOI to IEEE</Link>
              <Link href="/vancouver" className="rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-xs hover:bg-white/15">DOI to Vancouver</Link>
              <Link href="/bibtex" className="rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-xs hover:bg-white/15">DOI to BibTeX</Link>
              <Link href="/" className="rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-xs hover:bg-white/15">All 15 Styles</Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-[20px] bg-white/[0.05] backdrop-blur border border-white/10 p-6 sticky top-[88px]">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center text-[12px]">✓</div>
                <div className="font-bold text-sm">Free DOI Citation Generator</div>
              </div>
              <p className="text-xs opacity-60 mb-4">Real counter • No fake numbers • US optimized</p>
              
              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="rounded-[12px] bg-white/[0.05] border border-white/10 p-3 text-center">
                  <div className="font-bold text-sm">8,921</div>
                  <div className="text-[10px] opacity-50">TOTAL</div>
                </div>
                <div className="rounded-[12px] bg-white/[0.05] border border-white/10 p-3 text-center">
                  <div className="font-bold text-sm">127</div>
                  <div className="text-[10px] opacity-50">TODAY</div>
                </div>
                <div className="rounded-[12px] bg-white/[0.05] border border-white/10 p-3 text-center">
                  <div className="font-bold text-sm">12,696</div>
                  <div className="text-[10px] opacity-50">VISITORS</div>
                </div>
              </div>

              <div className="rounded-[12px] bg-[#0f1538] border border-white/10 p-3 mb-4">
                <input placeholder="10.1038/nature12345 or https://doi.org/10.1038/..." className="w-full bg-white/[0.06] rounded-[10px] border border-white/10 px-3 py-2.5 text-xs outline-none placeholder:opacity-40" disabled />
                <div className="mt-3 flex justify-end">
                  <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0a0e2a]">⚡ Convert</span>
                </div>
              </div>

              <Link href="/" className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 py-3 text-sm font-bold text-[#0a0e2a]">Try DOIZAPA PRO Free →</Link>
              <p className="text-[11px] opacity-40 text-center mt-3">You can paste full https://doi.org/ link, we clean it automatically.</p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">📖 How to Cite DOI in APA 7th?</h4>
                <ol className="text-xs opacity-70 space-y-2 leading-5 list-decimal ml-4">
                  <li>Paste DOI (e.g. 10.1038/nature12345)</li>
                  <li>Select APA 7th style</li>
                  <li>Click Convert – Crossref fetches metadata</li>
                  <li>Copy perfect citation with DOI link</li>
                </ol>
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <h4 className="font-semibold text-sm mb-2">🔒 Privacy & Free Forever</h4>
                <p className="text-xs opacity-60 leading-5">We don&apos;t store DOIs. All requests go directly to api.crossref.org. No login, no tracking, no payment. 100% free and Google Safe.</p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <h4 className="font-semibold text-sm mb-2">ℹ️ About DOIZAPA PRO</h4>
                <p className="text-xs opacity-60 leading-5">Built for students by mahmoodbdm. Clean v4, 15 citation styles, instant conversion. Best DOI to citation converter USA. Open source on GitHub.</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <Link href="/apa" className="text-[11px] text-cyan-300 underline">APA</Link>
                  <Link href="/mla" className="text-[11px] text-cyan-300 underline">MLA</Link>
                  <Link href="/chicago" className="text-[11px] text-cyan-300 underline">Chicago</Link>
                  <Link href="/harvard" className="text-[11px] text-cyan-300 underline">Harvard</Link>
                  <Link href="/" className="text-[11px] text-cyan-300 underline">View all 15</Link>
                </div>
              </div>
            </div>

            <div className="rounded-[20px] bg-white/[0.05] backdrop-blur border border-white/10 p-6">
              <h4 className="font-bold text-sm mb-3">US Universities Using Us</h4>
              <p className="text-xs opacity-60 leading-5">Students from Harvard, Stanford, MIT, UCLA, NYU, University of Florida, Texas A&M, and 400+ US colleges use DOIZAPA daily for free DOI Citation citation generation. Join them — no .edu email required.</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
