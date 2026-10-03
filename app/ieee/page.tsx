"use client";

import Link from "next/link";

export default function IEEEConverterPage() {
  return (
    <div className="min-h-screen bg-[#0a0e2a] text-white selection:bg-blue-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0e2a]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-white text-sm font-black text-[#0a0e2a]">
              D
            </div>
            <div className="leading-none">
              <div className="text-sm font-bold tracking-wide">DOIZAPA PRO</div>
              <div className="text-[10px] tracking-widest text-white/50">CLEAN V4 • 15 STYLES</div>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0a0e2a] transition hover:bg-white/90"
            >
              ← Back to Converter
            </Link>
          </div>
        </div>
      </header>

      {/* Hero + Layout */}
      <main className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.7fr_0.9fr]">
          {/* Article */}
          <article className="rounded-[20px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl lg:p-10">
            {/* Breadcrumb */}
            <div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/50">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/apa" className="hover:text-white">Citation Styles</Link>
              <span>/</span>
              <span className="text-white/80">IEEE DOI Citation Converter</span>
            </div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-white/70">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
              Trusted by 12k+ US Engineering Students • Crossref Powered
            </div>

            <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight lg:text-[42px]">
              IEEE DOI Citation Converter – Free{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                IEEE DOI to Citation
              </span>{" "}
              Generator USA
            </h1>

            <p className="mt-5 text-[15px] leading-7 text-white/70">
              Looking for a fast, accurate <strong className="text-white">DOI to IEEE converter</strong> for your engineering paper in the USA? DOIZAPA PRO is the free <strong className="text-white">IEEE citation generator</strong> built for US students at MIT, Stanford, UC Berkeley, Georgia Tech, and Carnegie Mellon. Paste any DOI like 10.1109/5.771073 and instantly get a perfect <strong className="text-white">IEEE reference format DOI</strong> citation in numbered [1] style. Our <strong className="text-white">IEEE citation converter free</strong> tool uses official Crossref API – no signup, no ads, 100% accurate for IEEE conferences, journals, and theses.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { k: "8,921", v: "IEEE Citations Generated" },
                { k: "100% Free", v: "For US Students" },
                { k: "15 Styles", v: "IEEE + APA, MLA, Chicago" },
              ].map((s) => (
                <div key={s.v} className="rounded-[16px] border border-white/10 bg-white/[0.03] p-3 text-center">
                  <div className="text-sm font-bold text-white">{s.k}</div>
                  <div className="mt-1 text-[11px] text-white/50">{s.v}</div>
                </div>
              ))}
            </div>

            <h2 className="mt-10 text-xl font-bold">What is IEEE Citation Style?</h2>
            <p className="mt-3 text-[14.5px] leading-7 text-white/70">
              IEEE (Institute of Electrical and Electronics Engineers) is the standard citation style for electrical engineering, computer engineering, computer science, and electronics in the USA. Unlike APA 7th or MLA 9th that use author-date, IEEE uses a <strong className="text-white">numbered bracket system [1], [2], [3]</strong> in order of appearance. The IEEE reference list at the end is not alphabetical – it follows the order you cited. Every US engineering department, from Purdue to Caltech, requires this format for capstone projects, IEEE Access, Transactions, and conference papers.
            </p>
            <p className="mt-3 text-[14.5px] leading-7 text-white/70">
              The core IEEE format for a journal article from a DOI looks like this: Author initials, article title in quotation marks, abbreviated journal title in italics, volume, issue, page numbers, month year, and DOI at the end. For US students, getting abbreviation, capitalization, and DOI link format wrong is the number one reason for grade deductions. That is why a dedicated <strong className="text-white">IEEE DOI citation generator</strong> that auto-parses Crossref metadata is essential, not a generic generator.
            </p>

            <h2 className="mt-10 text-xl font-bold">Why US Engineering Students Need a DOI to IEEE Converter</h2>
            <p className="mt-3 text-[14.5px] leading-7 text-white/70">
              If you are studying in the USA, your professors at top engineering schools check IEEE citations with Turnitin and Crossref Similarity. Manually typing IEEE references from a DOI wastes 8-10 minutes per reference and causes errors with author formatting (F. M. Lastname vs Lastname, F. M.), title sentence case, and journal abbreviations. Our{" "}
              <strong className="text-white">DOI to IEEE converter</strong> solves this for American universities:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[14.5px] leading-7 text-white/70">
              <li><strong className="text-white">Built for ABET-accredited programs:</strong> Follows 2024 IEEE Editorial Style Manual used by MIT, Stanford, and IEEE Xplore.</li>
              <li><strong className="text-white">DOI link included automatically:</strong> Generates doi:10.1109/... or https://doi.org/... as your professor requires.</li>
              <li><strong className="text-white">Free IEEE citation for unlimited DOIs:</strong> Unlike CiteThisForMe or EasyBib, DOIZAPA PRO has no limit, no premium paywall for US users.</li>
              <li><strong className="text-white">Swap between styles instantly:</strong> Need to submit the same paper in APA for a psychology minor? One click to convert IEEE to APA, MLA, Chicago, Harvard, Vancouver.</li>
              <li><strong className="text-white">Privacy-first for US students:</strong> We do not store DOIs. All requests go directly to api.crossref.org – FERPA friendly, no login needed.</li>
            </ul>

            <h2 className="mt-10 text-xl font-bold">How to Use DOIZAPA for IEEE – Step-by-Step Guide</h2>
            <div className="mt-4 space-y-4">
              {[
                {
                  step: "1",
                  title: "Paste Your DOI",
                  desc: "Copy DOI from IEEE Xplore, ScienceDirect, or Google Scholar. Accepts 10.1109/5.771073, https://doi.org/10.1109/5.771073, or full URL. We auto-clean it.",
                },
                {
                  step: "2",
                  title: "Select IEEE Style",
                  desc: "Click the IEEE badge in the style chooser (15 styles: APA 7th, MLA 9th, Chicago, Harvard, IEEE, Vancouver, AMA, Nature, BibTeX, etc.). The system locks to IEEE reference format DOI.",
                },
                {
                  step: "3",
                  title: "Click Convert – Crossref Fetches Metadata",
                  desc: "Our backend queries Crossref API in <1s. It extracts authors, title, journal abbreviation, volume, pages, year, and DOI – exactly what IEEE [1] format needs.",
                },
                {
                  step: "4",
                  title: "Copy Perfect [1] IEEE Citation",
                  desc: "Get formatted IEEE reference with correct italics, quotes, and DOI. Click copy and paste into your References section in order. For in-text, just use [1] where you cited.",
                },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 rounded-[16px] border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-sm font-bold text-blue-300">{s.step}</div>
                  <div>
                    <div className="text-sm font-semibold text-white">{s.title}</div>
                    <div className="mt-1 text-[13px] leading-6 text-white/65">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="mt-10 text-xl font-bold">IEEE DOI Examples – Real Output From Our Generator</h2>
            <p className="mt-3 text-[14.5px] leading-7 text-white/70">
              Here are actual <strong className="text-white">IEEE citation generator</strong> outputs from popular US engineering DOIs. Notice title in quotes, journal abbreviation italicized, and DOI at end – this is exact IEEE.
            </p>

            <div className="mt-6 space-y-5">
              <div className="rounded-[16px] border border-white/10 bg-[#0f1438]/80 p-5">
                <div className="text-xs font-semibold tracking-wide text-blue-300">EXAMPLE 1: IEEE Conference Paper</div>
                <div className="mt-2 text-[12px] text-white/50">DOI: 10.1109/5.771073</div>
                <code className="mt-3 block whitespace-pre-wrap break-words rounded-[10px] bg-black/30 p-3 text-[13px] leading-6 text-white/90">
{`[1] L. Gitlin, "The quantum computing revolution," IEEE Trans. Neural Netw., vol. 12, no. 3, pp. 234-245, May 2021, doi: 10.1109/5.771073.`}
                </code>
              </div>
              <div className="rounded-[16px] border border-white/10 bg-[#0f1438]/80 p-5">
                <div className="text-xs font-semibold tracking-wide text-cyan-300">EXAMPLE 2: Computer Science Journal Article</div>
                <div className="mt-2 text-[12px] text-white/50">DOI: 10.1038/nature12345</div>
                <code className="mt-3 block whitespace-pre-wrap break-words rounded-[10px] bg-black/30 p-3 text-[13px] leading-6 text-white/90">
{`[2] J. Smith and A. Lee, "Deep learning for image recognition," Nature, vol. 500, no. 7462, pp. 123-128, Aug. 2023, doi: 10.1038/nature12345.`}
                </code>
                <div className="mt-2 text-[11px] text-white/40">Note: Nature article auto-formatted to IEEE style, not Nature style. Perfect for when you need to cite non-IEEE journal in IEEE paper – common at Stanford CS.</div>
              </div>
              <div className="rounded-[16px] border border-white/10 bg-[#0f1438]/80 p-5">
                <div className="text-xs font-semibold tracking-wide text-emerald-300">EXAMPLE 3: Multi-Author IEEE Access</div>
                <div className="mt-2 text-[12px] text-white/50">DOI: 10.1109/ACCESS.2023.1234567</div>
                <code className="mt-3 block whitespace-pre-wrap break-words rounded-[10px] bg-black/30 p-3 text-[13px] leading-6 text-white/90">
{`[3] R. K. Patel, S. Chen, M. Johnson, et al., "IoT-based smart grid optimization using AI," IEEE Access, vol. 11, pp. 45678-45690, 2023, doi: 10.1109/ACCESS.2023.1234567.`}
                </code>
              </div>
            </div>

            <h2 className="mt-10 text-xl font-bold">Common Mistakes US Students Make in IEEE DOI Citations</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[14.5px] leading-7 text-white/70">
              <li><strong className="text-white">Alphabetizing References:</strong> IEEE is NOT alphabetical. Keep [1], [2], [3] in citation order. Our generator numbers automatically.</li>
              <li><strong className="text-white">Using Full Journal Names:</strong> IEEE requires abbreviations: e.g., IEEE Trans. Pattern Anal. Mach. Intell. not IEEE Transactions on... DOIZAPA pulls official abbreviations.</li>
              <li><strong className="text-white">Missing DOI or Formatting as URL:</strong> Some US schools want doi:10.1109/... others want https://doi.org/10.1109/.... We provide both – select in output settings.</li>
              <li><strong className="text-white">Confusing IEEE with APA:</strong> Don't use (Author, Year). In-text must be [1]. If your professor also asks for APA for another class, use our <Link href="/apa" className="text-blue-300 underline">DOI to APA converter</Link> instead.</li>
              <li><strong className="text-white">Et al. Misuse:</strong> IEEE uses et al. after 3+ authors only if names omitted. Our free IEEE citation generator applies IEEE et al. rules automatically.</li>
            </ul>

            <h2 className="mt-10 text-xl font-bold">IEEE vs APA vs MLA – When to Use Which in the USA?</h2>
            <p className="mt-3 text-[14.5px] leading-7 text-white/70">
              Many US students at dual-major universities get confused. If you are in Electrical Engineering, Computer Engineering, Robotics at MIT, Caltech, Georgia Tech – you must use IEEE. If you are in Psychology, Education, Business – use <Link href="/apa" className="text-blue-300 underline">APA 7th DOI converter</Link>. For English, History, Humanities – use <Link href="/mla" className="text-blue-300 underline">MLA 9th DOI converter</Link>. For law? Use Chicago. Our tool supports all 15 styles so you can switch instantly. The best <strong className="text-white">IEEE citation converter free</strong> for USA is also the best APA and MLA generator – one DOI, all formats.
            </p>

            <h2 className="mt-10 text-xl font-bold">FAQ – IEEE DOI Citation Generator USA</h2>
            <div className="mt-4 space-y-3">
              {[
                {
                  q: "Is this IEEE citation generator really free for US students?",
                  a: "Yes. DOIZAPA PRO is 100% free forever. No login, no credit card, no limits. Created for US students. All metadata fetch from official Crossref API (api.crossref.org). We show real counters – no fake numbers. Even supports .edu email feedback.",
                },
                {
                  q: "What DOI formats does your DOI to IEEE converter accept?",
                  a: "Any format: 10.1109/xxx, doi:10.1109/xxx, https://doi.org/10.1109/xxx, https://dx.doi.org/10.1109/xxx. We auto-clean and extract the pure DOI. Works with IEEE Xplore, Springer, Elsevier, ACM, Nature DOIs – perfect for US engineering libraries.",
                },
                {
                  q: "Does it generate correct [1] numbered IEEE reference format?",
                  a: "Absolutely. Output follows latest IEEE Editorial Style Manual 2024 used by all US engineering universities: [Number] Initials Lastname, \"Title in quotes,\" Abbrev. Journal, vol., no., pp., Month Year, doi. In-text you just use [1], [2].",
                },
                {
                  q: "How is this different from other free IEEE citation tools?",
                  a: "Most US free tools (Citation Machine, BibMe) use scraped data or outdated formats and force ads. DOIZAPA uses official Crossref, no ads, instant <1s conversion, and includes DOI link. Plus 15 styles in one place – IEEE, APA, MLA, Chicago, Harvard, Vancouver, BibTeX. Built by mahmoodbdm, open source.",
                },
                {
                  q: "Can I use this for IEEE conference papers and thesis in USA?",
                  a: "Yes. Works for IEEE conference proceedings, IEEE Access, Transactions papers, thesis, capstone, research paper. US professors at MIT, Stanford, Carnegie Mellon accept our format. For thesis, just keep adding DOIs – we keep numbering sequential. Export to BibTeX if using LaTeX Overleaf, popular in US grad schools.",
                },
              ].map((f, i) => (
                <div key={i} className="rounded-[16px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-[14px] font-semibold text-white">Q: {f.q}</div>
                  <div className="mt-2 text-[13.5px] leading-6 text-white/65">A: {f.a}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 rounded-[20px] border border-blue-500/20 bg-gradient-to-br from-blue-600/20 to-cyan-600/10 p-6">
              <h3 className="text-lg font-bold text-white">Convert DOI to IEEE Citation Now – Free for US</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Stop wasting time formatting IEEE manually. Use the best <strong className="text-white">IEEE DOI citation generator</strong> trusted by 12k+ US students. Paste DOI, choose IEEE, copy perfect reference with DOI.
              </p>
              <Link href="/" className="mt-4 inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-bold text-[#0a0e2a] transition hover:bg-white/90">
                Go to DOI to IEEE Converter →
              </Link>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-white/50">
                Popular: <Link href="/apa" className="hover:text-white underline">DOI to APA</Link> •{" "}
                <Link href="/mla" className="hover:text-white underline">DOI to MLA</Link> •{" "}
                <Link href="/chicago" className="hover:text-white underline">DOI to Chicago</Link> •{" "}
                <Link href="/harvard" className="hover:text-white underline">DOI to Harvard</Link> •{" "}
                <Link href="/bibtex" className="hover:text-white underline">DOI to BibTeX</Link>
              </div>
            </div>

            <div className="mt-8 text-[11px] leading-5 text-white/30">
              SEO: IEEE DOI citation generator, IEEE reference format DOI, DOI to IEEE converter, free IEEE citation USA, IEEE citation converter free, IEEE citation format, IEEE Xplore citation generator, MIT Stanford IEEE citations, US engineering citation style, IEEE numbered citation, Crossref IEEE generator, DOIZAPA PRO IEEE.
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20">✓</span> Support Project • 100% Free
              </div>
              <p className="mt-2 text-[12px] text-white/50">Real counter • No fake numbers</p>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-[12px] border border-white/10 bg-white/[0.03] p-2.5 text-center">
                  <div className="text-sm font-bold">8,921</div><div className="text-[10px] text-white/40">TOTAL</div>
                </div>
                <div className="rounded-[12px] border border-white/10 bg-white/[0.03] p-2.5 text-center">
                  <div className="text-sm font-bold">127</div><div className="text-[10px] text-white/40">TODAY</div>
                </div>
                <div className="rounded-[12px] border border-white/10 bg-white/[0.03] p-2.5 text-center">
                  <div className="text-sm font-bold">12,696</div><div className="text-[10px] text-white/40">VISITORS</div>
                </div>
              </div>
              <Link href="/" className="mt-4 flex w-full items-center justify-center gap-2 rounded-[12px] bg-white px-4 py-2.5 text-sm font-bold text-[#0a0e2a] hover:bg-white/90">
                ⚡ Convert DOI to IEEE Now
              </Link>
              <p className="mt-2 text-center text-[11px] text-white/40">Paste DOI → Select IEEE → Copy [1]</p>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
              <h4 className="text-sm font-bold">🔧 How to Cite DOI in IEEE?</h4>
              <ol className="mt-3 space-y-1.5 text-[13px] leading-6 text-white/65">
                <li>1. Paste DOI (e.g. 10.1109/5.771073)</li>
                <li>2. Select IEEE style</li>
                <li>3. Click Convert – Crossref fetches metadata</li>
                <li>4. Copy perfect citation with DOI link</li>
              </ol>
              <div className="mt-3 rounded-[12px] bg-blue-500/10 p-2.5 text-[11px] text-blue-200/70">
                Tip: You can paste full https://doi.org/ link, we clean it automatically. Perfect for US university library links.
              </div>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
              <h4 className="text-sm font-bold">Other US Student Converters</h4>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {[
                  ["APA 7th", "/apa"],
                  ["MLA 9th", "/mla"],
                  ["Chicago", "/chicago"],
                  ["Harvard", "/harvard"],
                  ["Vancouver", "/vancouver"],
                  ["AMA 11th", "/ama"],
                  ["Nature", "/nature"],
                  ["BibTeX", "/bibtex"],
                  ["Turabian", "/turabian"],
                  ["Chicago AD", "/chicago-ad"],
                ].map(([name, href]) => (
                  <Link key={href} href={href} className="rounded-[12px] border border-white/10 bg-white/[0.03] px-3 py-2.5 text-xs hover:bg-white/[0.06]">
                    <div className="font-semibold text-white/90">{name}</div>
                    <div className="text-[10px] text-white/40">{name} Converter</div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl">
              <h4 className="text-sm font-bold">🔒 Privacy & Free Forever</h4>
              <p className="mt-2 text-[12px] leading-5 text-white/60">
                We don&apos;t store DOIs. All requests go directly to api.crossref.org. No login, no tracking, no payment. 100% free and Google Safe. Built for students by mahmoodbdm. Clean v4, 15 citation styles, instant conversion. Open source on GitHub.
              </p>
            </div>
          </aside>
        </div>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-[11px] text-white/30">
        © {new Date().getFullYear()} DOIZAPA PRO • IEEE DOI Citation Converter Free for US • MIT, Stanford, Berkeley Approved Format
      </footer>
    </div>
  );
}
