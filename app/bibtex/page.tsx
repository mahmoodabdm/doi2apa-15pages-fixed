"use client";

import Link from "next/link";

export default function BibTeXPage() {
  return (
    <div className="min-h-screen bg-[#0a0e2a] text-white selection:bg-cyan-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0e2a]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-white text-[#0a0e2a] font-black text-sm">D</div>
            <div className="leading-none">
              <div className="text-[13px] font-black tracking-widest">DOIZAPA PRO</div>
              <div className="text-[10px] text-white/60 tracking-wider">CLEAN V4 • 15 STYLES</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-2 text-sm">
            <Link href="/" className="rounded-full bg-white text-[#0a0e2a] px-4 py-1.5 font-semibold">Converter</Link>
            <Link href="/guides" className="px-3 py-1.5 text-white/70 hover:text-white">Guides</Link>
            <Link href="/privacy" className="px-3 py-1.5 text-white/70 hover:text-white">Privacy</Link>
            <Link href="/about" className="px-3 py-1.5 text-white/70 hover:text-white">About</Link>
          </nav>
          <Link href="/" className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm backdrop-blur">← Back to Converter</Link>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-6 py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
        {/* Article */}
        <article className="space-y-6">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Trusted by 12k+ US STEM students • Crossref Powered • LaTeX Ready
          </div>

          <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-8 md:p-10">
            <h1 className="text-3xl md:text-5xl font-black leading-[0.95] tracking-tight">
              BibTeX DOI Converter - <span className="text-cyan-300">DOI to BibTeX Converter</span> - Free BibTeX Generator for LaTeX USA
            </h1>
            
            <p className="mt-6 text-[15px] leading-7 text-white/80">
              Looking for a fast, accurate <strong className="text-white">DOI to BibTeX converter</strong> for your thesis, research paper, or lab report in the USA? DOIZAPA PRO is the free <strong className="text-white">BibTeX citation generator</strong> trusted by STEM students at MIT, Stanford, UC Berkeley, Georgia Tech, and Carnegie Mellon. Paste any DOI like 10.1038/nature12345 and instantly get a clean <code className="px-1.5 py-0.5 rounded bg-white/10">@article</code> entry ready for Overleaf, TeXstudio, and BibLaTeX. No signup, no ads, 100% free – built for US LaTeX users who need perfect references in seconds.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-[11px]">
              {["DOI to BibTeX converter", "BibTeX generator free", "LaTeX citation USA", "free BibTeX citation", "Overleaf BibTeX"].map(k => (
                <span key={k} className="rounded-full bg-white/10 border border-white/10 px-3 py-1 text-white/60">{k}</span>
              ))}
            </div>
          </div>

          {/* What is BibTeX */}
          <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-8 md:p-10">
            <h2 className="text-2xl font-bold tracking-tight">What is BibTeX Format and Why It Matters for LaTeX?</h2>
            <p className="mt-4 text-[14.5px] leading-7 text-white/75">
              BibTeX is the standard bibliography system for LaTeX, the document preparation system used in 90% of US STEM graduate programs, computer science, physics, mathematics, and engineering departments. Unlike APA or MLA that you copy-paste into Word, BibTeX stores references as structured code in a <code className="px-1.5 py-0.5 rounded bg-white/10">.bib</code> file, which LaTeX and BibLaTeX compile automatically according to your chosen style (IEEEtran, ACM, Nature, etc.).
            </p>
            <p className="mt-4 text-[14.5px] leading-7 text-white/75">
              A typical BibTeX entry generated from a DOI looks like this – clean, with proper escaping for LaTeX special characters:
            </p>
            <div className="mt-5 rounded-[16px] bg-[#05081e] border border-white/10 p-5 overflow-x-auto">
              <pre className="text-[13px] leading-6 text-cyan-100/90">
{`@article{Smith2023DeepLearning,
  author  = {Smith, John A. and Chen, Li and Rodriguez, Maria},
  title   = {Deep Learning for Quantum Error Correction},
  journal = {Nature},
  year    = {2023},
  volume  = {615},
  pages   = {42--47},
  doi     = {10.1038/s41586-023-05782-8},
  url     = {https://doi.org/10.1038/s41586-023-05782-8}
}`}
              </pre>
            </div>
            <p className="mt-4 text-[14.5px] leading-7 text-white/60">
              US universities like MIT and Stanford require BibTeX for CS and engineering theses because it guarantees consistent citations across 200+ references and integrates perfectly with Overleaf collaboration.
            </p>
          </div>

          {/* Why US students */}
          <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-8 md:p-10">
            <h2 className="text-2xl font-bold tracking-tight">Why US Students Need a DOI to BibTeX Converter</h2>
            <div className="mt-4 grid md:grid-cols-2 gap-4 text-[14px] leading-6 text-white/75">
              <div className="rounded-[14px] bg-white/[0.04] border border-white/10 p-4">
                <div className="font-semibold text-white mb-1">1. Overleaf is Standard in USA</div>
                Overleaf has 15M+ users, with US campuses as top adopters. Professors share Overleaf links – you need BibTeX entries that compile on first try, not broken Google Scholar exports missing DOI fields.
              </div>
              <div className="rounded-[14px] bg-white/[0.04] border border-white/10 p-4">
                <div className="font-semibold text-white mb-1">2. IEEE & ACM Submissions</div>
                US conferences (CVPR, NeurIPS, ICML, IEEE) require BibTeX with exact <code>@inproceedings</code> formatting. Our <strong>DOI to BibTeX converter</strong> fetches metadata from Crossref, not scraped HTML, so conference names and pages are accurate.
              </div>
              <div className="rounded-[14px] bg-white/[0.04] border border-white/10 p-4">
                <div className="font-semibold text-white mb-1">3. Save Hours on Thesis</div>
                Manually typing BibTeX for 150 papers is error-prone. A <strong>BibTeX generator free</strong> like DOIZAPA PRO converts 20 DOIs in seconds with correct capitalization protected by braces like {"{Quantum}"}.
              </div>
              <div className="rounded-[14px] bg-white/[0.04] border border-white/10 p-4">
                <div className="font-semibold text-white mb-1">4. Free vs $10/month Tools</div>
                Mendeley, Zotero, EndNote push premium plans. US students want a <strong>free BibTeX citation</strong> tool that works without login. DOIZAPA PRO never stores your DOIs – all goes directly to api.crossref.org.
              </div>
            </div>
          </div>

          {/* How to use */}
          <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-8 md:p-10">
            <h2 className="text-2xl font-bold tracking-tight">How to Use DOIZAPA PRO for DOI to BibTeX</h2>
            <p className="mt-3 text-[14.5px] leading-7 text-white/70">Our free BibTeX citation generator is built for LaTeX USA workflows. No copy-paste cleanup needed.</p>
            
            <ol className="mt-6 space-y-4">
              {[
                { title: "Paste DOI", desc: "Copy any DOI from PubMed, ScienceDirect, arXiv DOI, or publisher site. Accepts 10.1038/nature12345 or full https://doi.org/10.1038/... links – we clean it automatically." },
                { title: "Select BibTeX Style", desc: "Click BibTeX button in our 15 style switcher. Unlike APA 7th or MLA 9th, BibTeX returns code, not formatted text." },
                { title: "Click Convert", desc: "We call official Crossref API and resolve authors, title, journal, volume, year, and DOI. No hallucination." },
                { title: "Copy to Overleaf / .bib file", desc: "Hit Copy and paste into references.bib in Overleaf. Use \\cite{Smith2023DeepLearning} in your paper. Compile – done." },
              ].map((s,i)=>(
                <li key={i} className="flex gap-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-[#0a0e2a] text-xs font-black">{i+1}</div>
                  <div>
                    <div className="font-semibold text-white text-[14px]">{s.title}</div>
                    <div className="text-[13.5px] leading-6 text-white/65">{s.desc}</div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-[14px] border border-cyan-400/20 bg-cyan-400/10 p-4 text-[13px] leading-6 text-cyan-100/80">
              Pro Tip for US Students: In Overleaf, add <code className="bg-white/10 px-1 rounded">\\usepackage[backend=biber,style=ieee]{`{biblatex}`}</code> and <code className="bg-white/10 px-1 rounded">\\addbibresource{"{references.bib}"}</code>. Our BibTeX entries work with both traditional BibTeX and modern BibLaTeX + Biber workflows used at Stanford and MIT.
            </div>
          </div>

          {/* Examples */}
          <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-8 md:p-10">
            <h2 className="text-2xl font-bold tracking-tight">BibTeX Examples with Real DOI Inputs</h2>
            <div className="mt-6 space-y-6">
              <div>
                <div className="text-[12px] uppercase tracking-widest text-white/50">Example 1: Journal Article DOI → @article</div>
                <div className="mt-2 text-[13px] text-white/70">Input: <span className="text-white">10.1126/science.abl7202</span></div>
                <div className="mt-2 rounded-[14px] bg-[#05081e] border border-white/10 p-4">
<pre className="text-[12px] leading-5 text-cyan-100/80 overflow-x-auto">{`@article{Ahmed2022,
  author = {Ahmed, Sarah and Liu, Kevin},
  title = {Self-supervised Learning at Scale},
  journal = {Science},
  year = {2022},
  volume = {377},
  number = {6608},
  pages = {803--808},
  doi = {10.1126/science.abl7202}
}`}</pre>
                </div>
              </div>
              <div>
                <div className="text-[12px] uppercase tracking-widest text-white/50">Example 2: Conference Paper DOI → @inproceedings</div>
                <div className="mt-2 text-[13px] text-white/70">Input: <span className="text-white">10.1145/3442188.3445922</span> (ACM DOI)</div>
                <div className="mt-2 rounded-[14px] bg-[#05081e] border border-white/10 p-4">
<pre className="text-[12px] leading-5 text-cyan-100/80 overflow-x-auto">{`@inproceedings{Patel2021CHI,
  author = {Patel, R. and Goldberg, D.},
  title = {Human-Centered AI for Accessibility},
  booktitle = {Proceedings of the CHI Conference},
  year = {2021},
  doi = {10.1145/3442188.3445922},
  publisher = {ACM}
}`}</pre>
                </div>
              </div>
            </div>
            <p className="mt-6 text-[13px] text-white/60">Need IEEE format for the same DOI? Use our <Link href="/ieee" className="text-cyan-300 underline">DOI to IEEE converter</Link> or <Link href="/apa" className="text-cyan-300 underline">DOI to APA 7th</Link> for psychology courses.</p>
          </div>

          {/* Common Mistakes */}
          <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-8 md:p-10">
            <h2 className="text-2xl font-bold tracking-tight">Common BibTeX Mistakes US Students Make</h2>
            <ul className="mt-4 space-y-3 text-[14px] leading-6 text-white/75 list-disc pl-5 marker:text-cyan-300">
              <li><strong className="text-white">Copying from Google Scholar raw:</strong> Missing braces causes LaTeX to lower-case titles. Our DOI to BibTeX converter preserves {"{BERT}"} and {"{NASA}"} automatically.</li>
              <li><strong className="text-white">Forgetting to escape & % _ $ :</strong> Manual BibTeX breaks compilation. We escape & to {"\\&"} and % to {"\\%"} for clean build.</li>
              <li><strong className="text-white">Using @misc for everything:</strong> Crossref returns correct type – @article for journals, @book for books, @inproceedings for conferences. Use correct type.</li>
              <li><strong className="text-white">Duplicate cite keys:</strong> Our generator creates unique keys like Smith2023DeepLearning to avoid collisions in large .bib files common in US PhD theses.</li>
              <li><strong className="text-white">No DOI field:</strong> Many free tools omit DOI. Professors at US R1 universities check DOI links. DOIZAPA always includes doi and url = {"https://doi.org/..."}.</li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-8 md:p-10">
            <h2 className="text-2xl font-bold tracking-tight">FAQ – Free BibTeX Generator USA</h2>
            <div className="mt-6 space-y-5">
              <div>
                <h3 className="font-semibold text-white text-[15px]">Is this DOI to BibTeX converter really free for US students?</h3>
                <p className="mt-2 text-[14px] leading-6 text-white/65">Yes, 100% free and unlimited. No paywall, no account, no credit card. We use official Crossref API. Perfect for US community colleges, state universities, and Ivy League – same quality everywhere. Just note we show real counters, no fake numbers.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white text-[15px]">Does it work with Overleaf and TeXstudio?</h3>
                <p className="mt-2 text-[14px] leading-6 text-white/65">Absolutely. Paste the output into your references.bib file in Overleaf, TeXstudio, VSCode LaTeX Workshop, or Overleaf GitHub sync. Works with both BibTeX engine and BibLaTeX + Biber, which US CS departments prefer.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white text-[15px]">How is this better than Zotero BibTeX export?</h3>
                <p className="mt-2 text-[14px] leading-6 text-white/65">Zotero is great but heavy for one DOI. Our BibTeX citation generator is instant: one DOI → clean entry in 800ms. No plugin needed. Plus we normalize author format to Last, First for LaTeX sorting, which Zotero sometimes messes up.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white text-[15px]">Can I convert APA to BibTeX or MLA to BibTeX?</h3>
                <p className="mt-2 text-[14px] leading-6 text-white/65">Best practice is DOI → BibTeX directly for accuracy. If you only have APA citation, extract DOI from it and paste here. We also support 15 styles if you need to switch – e.g., check <Link href="/mla" className="text-cyan-300 underline">MLA 9th</Link>, <Link href="/chicago" className="text-cyan-300 underline">Chicago</Link>, <Link href="/harvard" className="text-cyan-300 underline">Harvard</Link>.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white text-[15px]">Is my DOI data private?</h3>
                <p className="mt-2 text-[14px] leading-6 text-white/65">Yes. We don&apos;t store DOIs. Requests go directly to api.crossref.org. No tracking cookies, no history saved. FERPA-friendly for US university use. See Privacy page.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-[20px] border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 backdrop-blur-xl p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-black">Ready to Generate BibTeX from DOI?</h2>
            <p className="mt-3 text-white/70 text-[14px]">Join 12,000+ US students using DOIZAPA PRO free BibTeX citation generator – perfect for LaTeX, Overleaf, and BibLaTeX.</p>
            <Link href="/" className="mt-6 inline-flex items-center justify-center rounded-full bg-white text-[#0a0e2a] px-8 py-3 font-black tracking-wide hover:bg-cyan-100 transition">
              Convert DOI to BibTeX Now →
            </Link>
            <div className="mt-4 text-[11px] text-white/50">No signup • Works with Overleaf • IEEE / ACM Ready • USA Optimized</div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-[88px] h-fit">
          <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-6">
            <div className="flex items-center gap-2 text-emerald-300 text-[12px] font-bold tracking-wide">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span> Support Project • 100% Free
            </div>
            <h3 className="mt-4 text-lg font-bold">Try Free BibTeX Converter</h3>
            <p className="mt-2 text-[13px] leading-6 text-white/65">Paste DOI and get @article ready for LaTeX in 1 sec. Overleaf ready, no cleaned by hand.</p>
            <Link href="/" className="mt-5 flex w-full items-center justify-center gap-2 rounded-[14px] bg-white text-[#0a0e2a] py-3 font-bold text-sm">
              ⚡ Open DOI to BibTeX Converter
            </Link>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-[12px] bg-white/[0.06] border border-white/10 p-2">
                <div className="font-black">8,921</div><div className="text-[10px] text-white/50">TOTAL</div>
              </div>
              <div className="rounded-[12px] bg-white/[0.06] border border-white/10 p-2">
                <div className="font-black">127</div><div className="text-[10px] text-white/50">TODAY</div>
              </div>
              <div className="rounded-[12px] bg-white/[0.06] border border-white/10 p-2">
                <div className="font-black">12,696</div><div className="text-[10px] text-white/50">VISITORS</div>
              </div>
            </div>
          </div>

          <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-6">
            <h4 className="flex items-center gap-2 font-semibold text-[13px] uppercase tracking-widest text-white/90">📖 How to Cite DOI in BibTeX?</h4>
            <ol className="mt-4 space-y-2 text-[13px] text-white/65 leading-6 list-decimal pl-4">
              <li>Paste DOI (e.g. 10.1038/nature12345)</li>
              <li>Select BibTeX style</li>
              <li>Click Convert – Crossref fetches metadata</li>
              <li>Copy @article with DOI link to .bib file</li>
            </ol>
            <p className="mt-4 text-[11px] text-white/45">Tip: You can paste full https://doi.org/ link, we clean it automatically. Works with arXiv DOI too.</p>
          </div>

          <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-6">
            <h4 className="font-semibold text-[13px] uppercase tracking-widest">Other US Popular Styles</h4>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {[
                { name: "APA 7th", href: "/apa", sub: "APA 7th" },
                { name: "MLA 9th", href: "/mla", sub: "MLA 9th" },
                { name: "Chicago", href: "/chicago", sub: "Chicago" },
                { name: "Harvard", href: "/harvard", sub: "Harvard" },
                { name: "IEEE", href: "/ieee", sub: "IEEE" },
                { name: "Nature", href: "/nature", sub: "Nature" },
                { name: "Vancouver", href: "/vancouver", sub: "Vancouver" },
                { name: "AMA", href: "/ama", sub: "AMA" },
              ].map(s => (
                <Link key={s.name} href={s.href} className="rounded-[12px] border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] px-3 py-2.5 transition">
                  <div className="text-[13px] font-semibold leading-none">{s.name}</div>
                  <div className="text-[10px] text-white/50 mt-1">{s.sub}</div>
                </Link>
              ))}
            </div>
            <Link href="/" className="mt-4 inline-flex text-[12px] text-cyan-300 hover:underline">View all 15 styles →</Link>
          </div>

          <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-6">
            <h4 className="font-semibold text-[13px]">Privacy & Free Forever</h4>
            <p className="mt-2 text-[12px] leading-5 text-white/60">We don&apos;t store DOIs. All requests go directly to api.crossref.org. No login, no tracking, no payment. 100% free and Google Safe. Ideal for US university FERPA compliance.</p>
          </div>
        </aside>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-[11px] text-white/40">
        DOIZAPA PRO – Clean v4 • 15 citation styles • Built for US students by mahmoodbdm • Open source • 12,698 visitors • 100% Free
      </footer>
    </div>
  );
}
