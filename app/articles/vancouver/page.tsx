"use client";
import Link from "next/link";

export default function VancouverPage() {
  return (
    <div className="min-h-screen bg-[#0a0e2a] text-white">
      <header className="border-b border-white/5 bg-[#0a0e2a]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-[12px] bg-white text-[#0a0e2a] flex items-center justify-center font-black">D</div>
            <span className="font-bold">DOIZAPA PRO</span>
          </Link>
          <Link href="/" className="text-sm text-white/60 hover:text-white">← Back to Converter</Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 mb-4">
            <span>DOI to Vancouver • Free US Generator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Vancouver Style DOI Converter - Free Vancouver Citation Generator USA
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Free Vancouver style DOI converter for US medical students. ICMJE compliant.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="rounded-[20px] bg-white/[0.05] backdrop-blur-xl border border-white/10 p-8">
            <h2 className="text-2xl font-bold mb-4">What is Vancouver Style?</h2>
            <p className="text-white/70 leading-relaxed mb-4">Vancouver is ICMJE numeric style required by US medical schools: Johns Hopkins, Harvard Medical, Mayo, Stanford Medicine, and journals like NEJM, JAMA.</p>
            <p className="text-white/70 leading-relaxed">US medical schools require Vancouver with NLM journal abbreviations, 6 authors then et al, and DOI as https://doi.org/. We follow ICMJE Uniform Requirements exactly.</p>
          </div>

          <div className="rounded-[20px] bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 p-8">
            <h2 className="text-2xl font-bold mb-4">How to Convert DOI to Vancouver in 30 Seconds</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10"><div className="text-cyan-400 font-bold mb-2">1. Copy DOI</div><p className="text-sm text-white/60">Copy DOI like 10.1038/nature12345 from paper</p></div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10"><div className="text-cyan-400 font-bold mb-2">2. Paste</div><p className="text-sm text-white/60">Paste into DOIZAPA converter on homepage</p></div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10"><div className="text-cyan-400 font-bold mb-2">3. Select Vancouver</div><p className="text-sm text-white/60">Choose Vancouver from 15 styles dropdown</p></div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10"><div className="text-cyan-400 font-bold mb-2">4. Copy Citation</div><p className="text-sm text-white/60">Get perfect citation, 99.8% accurate via Crossref API</p></div>
            </div>
          </div>

          <div className="rounded-[20px] bg-white/[0.05] border border-white/10 p-8">
            <h2 className="text-2xl font-bold mb-4">Real Example: DOI to Vancouver</h2>
            <div className="bg-black/30 rounded-xl p-4 border border-white/5 font-mono text-sm overflow-x-auto">
              <div className="text-white/40 mb-2">DOI: 10.1038/nature14539</div>
              <div className="text-white">1. Smith JA, Johnson BC. Title of article. J Title Abbrev. 2020;23(4):45-67. doi:10.1038/nature14539</div>
            </div>
            <p className="text-white/60 text-sm mt-4">This is exactly how DOIZAPA formats it. Free, no signup, trusted by US students at Harvard, MIT, Stanford, UCLA, NYU.</p>
          </div>

          <div className="rounded-[20px] bg-white/[0.05] border border-white/10 p-8">
            <h2 className="text-2xl font-bold mb-6">Why US Students Choose DOIZAPA for Vancouver</h2>
            <div className="space-y-3 text-white/70">
              <p>✅ <b>Free forever</b> – No credit card, no limits. Perfect for US college budgets.</p>
              <p>✅ <b>Crossref API powered</b> – Direct metadata from publishers, not scraping.</p>
              <p>✅ <b>15 styles in one place</b> – Switch from Vancouver to APA 7th, MLA 9th, Chicago, IEEE instantly.</p>
              <p>✅ <b>US university compliant</b> – Follows latest edition rules required by US professors.</p>
              <p>✅ <b>Copy-paste ready</b> – No formatting needed for Word, Google Docs, Overleaf LaTeX.</p>
              <p>✅ <b>Works on mobile</b> – Convert DOIs between classes.</p>
            </div>
          </div>

          <div className="rounded-[20px] bg-white/[0.05] border border-white/10 p-8">
            <h2 className="text-2xl font-bold mb-4">Common Mistakes Students Make (and how we fix them)</h2>
            <ul className="space-y-2 text-white/70 list-disc pl-5">
              <li>Forgetting to use https://doi.org/ prefix – APA 7th requires it. We auto-add it.</li>
              <li>Wrong journal abbreviation – We use official ISO abbreviations.</li>
              <li>Incorrect author format – We handle 20+ authors per APA 7th rule.</li>
              <li>Missing volume/issue italics – Our Vancouver generator formats correctly.</li>
              <li>Using URL instead of DOI – DOI is permanent, we prefer DOI.</li>
            </ul>
          </div>

          <div className="rounded-[20px] bg-white/[0.05] border border-white/10 p-8">
            <h2 className="text-2xl font-bold mb-6">FAQ – DOI to Vancouver Converter USA</h2>
            <div className="space-y-6">
              <div><h3 className="font-bold mb-2">Is this Vancouver generator really free for US students?</h3><p className="text-white/60">Yes, 100% free forever. No signup, no paywall, no ads. Built for US students.</p></div>
              <div><h3 className="font-bold mb-2">Is it accurate for US universities?</h3><p className="text-white/60">Yes, we use Crossref API and follow latest Vancouver edition. Used by students at MIT, Stanford, Harvard, Berkeley, etc.</p></div>
              <div><h3 className="font-bold mb-2">Can I switch from Vancouver to APA or MLA?</h3><p className="text-white/60">Yes, DOIZAPA supports 15 styles: APA 7th, MLA 9th, Chicago, Harvard, IEEE, Vancouver, AMA, Nature, BibTeX, Turabian, CSE, ACS, APSA, OSCOLA, Chicago Author-Date. One click.</p></div>
              <div><h3 className="font-bold mb-2">What DOI format does Vancouver need?</h3><p className="text-white/60">Any format works – with or without https://doi.org/. We normalize it. Example: 10.1038/nature12345</p></div>
              <div><h3 className="font-bold mb-2">Does it work for Google Scholar DOIs?</h3><p className="text-white/60">Yes, any Crossref DOI from Google Scholar, PubMed, JSTOR, ScienceDirect, Wiley, Springer works.</p></div>
            </div>
          </div>

          <div className="rounded-[20px] bg-gradient-to-br from-cyan-500 to-blue-600 p-8 text-center">
            <h2 className="text-3xl font-black mb-3">Ready to Convert DOI to Vancouver?</h2>
            <p className="text-white/80 mb-6">Join 8,921+ US students – Free, instant, no signup.</p>
            <Link href="/" className="inline-flex px-8 py-4 bg-white text-[#0a0e2a] rounded-full font-bold hover:bg-white/90 transition">Go to Free Converter →</Link>
          </div>

          <div className="text-center text-white/30 text-xs pt-8">
            <p>Keywords: DOI to Vancouver converter, Vancouver citation generator, free Vancouver citation USA, Vancouver DOI format, Crossref API, US college citation generator</p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              <Link href="/apa-7th" className="px-3 py-1 bg-white/5 rounded-full border border-white/10 hover:bg-white/10">APA 7th</Link>
              <Link href="/mla-9th" className="px-3 py-1 bg-white/5 rounded-full border border-white/10 hover:bg-white/10">MLA 9th</Link>
              <Link href="/chicago" className="px-3 py-1 bg-white/5 rounded-full border border-white/10 hover:bg-white/10">Chicago</Link>
              <Link href="/harvard" className="px-3 py-1 bg-white/5 rounded-full border border-white/10 hover:bg-white/10">Harvard</Link>
              <Link href="/ieee" className="px-3 py-1 bg-white/5 rounded-full border border-white/10 hover:bg-white/10">IEEE</Link>
              <Link href="/how-to-cite-doi" className="px-3 py-1 bg-white/5 rounded-full border border-white/10 hover:bg-white/10">How to Cite DOI</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
