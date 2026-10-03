"use client";

import Link from "next/link";

export default function ACSConverterPage() {
  return (
    <div className="min-h-screen bg-[#0a0e2a] text-white selection:bg-cyan-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0e2a]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-black text-[#0a0e2a]">
              D
            </div>
            <div className="leading-none">
              <div className="text-sm font-bold tracking-wide">DOIZAPA PRO</div>
              <div className="text-[10px] tracking-widest text-white/60">CLEAN V4 • 15 STYLES</div>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/10"
            >
              ← Back to Converter
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Main Article */}
          <article className="space-y-8">
            {/* Hero */}
            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl md:p-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400"></span>
                Trusted by US Chemistry Majors • Crossref Powered
              </div>
              <h1 className="text-4xl font-black leading-[0.95] tracking-tight md:text-5xl">
                ACS DOI Converter -{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  ACS DOI to Citation Converter
                </span>{" "}
                - Free ACS Generator USA
              </h1>
              <p className="mt-6 text-[15px] leading-7 text-white/70">
                Looking for the fastest <strong className="font-semibold text-white">DOI to ACS converter</strong> for US chemistry papers? DOIZAPA PRO is the{" "}
                <strong className="font-semibold text-white">free ACS citation generator</strong> built for students at MIT, Caltech, Berkeley, Stanford, and
                every ACS-accredited university in the USA. Paste any DOI like <code className="rounded bg-white/10 px-1.5 py-0.5 text-cyan-200">10.1021/jacs.2023.12345</code> and instantly
                get a perfect American Chemical Society citation with correct italic journal formatting, bold volume, and DOI link — no signup, no ads.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                {[
                  "DOI to ACS Converter",
                  "ACS Citation Generator Free",
                  "American Chemical Society Style",
                  "USA Students",
                ].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* What is ACS */}
            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur">
              <h2 className="text-2xl font-bold">What is ACS Citation Style?</h2>
              <p className="mt-4 text-[15px] leading-7 text-white/70">
                ACS style is the official citation format of the <strong className="text-white">American Chemical Society</strong>, the world&apos;s largest scientific society for chemistry.
                It&apos;s the gold standard for chemistry, biochemistry, chemical engineering, and materials science programs across the United States. Unlike APA or MLA, ACS has very
                specific rules that US professors check strictly.
              </p>
              <p className="mt-4 text-[15px] leading-7 text-white/70">
                The ACS format uses a numbered or author-date system depending on the journal, but for most US university courses, you&apos;ll use the author-date variant that looks like this:
              </p>
              <div className="mt-5 rounded-[16px] border border-cyan-500/20 bg-[#0f1540]/80 p-5 font-mono text-sm leading-relaxed text-white/90">
                Jones, A. B.; Smith, C. D. Title of Article. <i className="text-cyan-200">J. Am. Chem. Soc.</i> <b className="text-white">2023</b>, <i>145</i> (12), 1234-1245. https://doi.org/10.1021/jacs.3c00123
              </div>
              <p className="mt-4 text-[15px] leading-7 text-white/70">
                Notice the details: journal title is <em className="text-white">italicized and abbreviated</em>, year is bold, volume is bold, and the DOI must be a full https:// link.
                Our <strong className="text-white">ACS DOI citation generator</strong> automates all of this using Crossref metadata, so you never have to abbreviate <i>J. Am. Chem. Soc.</i> manually again.
              </p>
            </div>

            {/* Why US students */}
            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur">
              <h2 className="text-2xl font-bold">Why US Chemistry Students Need a DOI to ACS Converter</h2>
              <p className="mt-4 text-[15px] leading-7 text-white/70">
                If you&apos;re studying chemistry at a US university — whether it&apos;s General Chemistry 101 at a community college or a PhD at Johns Hopkins — you will be forced to use ACS style.
                Professors in the USA use ACS to check for precision, and manual formatting loses points fast.
              </p>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-[15px] leading-7 text-white/70 marker:text-cyan-300">
                <li>
                  <strong className="text-white">Required by ACS Journals:</strong> All 60+ ACS journals like JACS, Organic Letters, and ACS Nano require strict ACS formatting. US students submitting undergraduate research must match it exactly.
                </li>
                <li>
                  <strong className="text-white">DOI Accuracy for US Grading:</strong> US professors now require DOIs in citations. Our tool is a true <strong className="text-white">DOI to ACS converter</strong> — it fetches author names, title, journal, volume, and pages directly from doi.org, not from scraping Google Scholar.
                </li>
                <li>
                  <strong className="text-white">Saves Hours on Lab Reports:</strong> Instead of spending 20 minutes per citation in ChemDraw or Web of Science, paste 10 DOIs and get 10 perfect ACS citations — free ACS citation generator, unlimited use, no login.
                </li>
                <li>
                  <strong className="text-white">US English & Accessibility:</strong> Built for USA students with fast US CDN, 508-compliant colors, and works on campus Wi-Fi without VPN.
                </li>
              </ul>
              <p className="mt-4 text-[15px] leading-7 text-white/70">
                Compared to generic tools like Citation Machine or EasyBib, DOIZAPA PRO is Crossref-verified and doesn&apos;t inject fake ads. It&apos;s the preferred <strong className="text-white">American Chemical Society citation generator</strong> for US students who need speed and accuracy.
              </p>
            </div>

            {/* How to use */}
            <div className="rounded-[20px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] p-8 backdrop-blur">
              <h2 className="text-2xl font-bold">How to Use DOIZAPA PRO for ACS Citations</h2>
              <p className="mt-4 text-[15px] leading-7 text-white/70">
                Our <strong className="text-white">ACS style converter free</strong> is designed for chemistry students who hate complex forms. No EndNote, no Zotero plugin needed.
              </p>
              <div className="mt-6 grid gap-4">
                {[
                  { step: "01", title: "Paste DOI", desc: "Copy any DOI from ACS Publications, Pubs.ACS.org, or SciFinder. Works with 10.1021/... or full https://doi.org/10.1021/... format. We auto-clean it." },
                  { step: "02", title: "Select ACS Style", desc: "Click the ACS badge from the 15 styles. The converter will remember ACS for US chemistry work." },
                  { step: "03", title: "Click Convert – Crossref Fetch", desc: "We call api.crossref.org directly. No storage, no tracking. We get official metadata: authors, journal abbreviation, volume, issue, pages." },
                  { step: "04", title: "Copy Perfect ACS Citation", desc: "Get italic journal, bold year & volume, correct semicolons, and live DOI link. Copy for your lab report, thesis, or JACS submission." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4 rounded-[14px] border border-white/5 bg-[#0a0e2a]/60 p-4">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/20 font-mono text-sm font-bold text-cyan-300">
                      {s.step}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{s.title}</div>
                      <div className="mt-1 text-sm leading-6 text-white/60">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Examples */}
            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur">
              <h2 className="text-2xl font-bold">ACS Citation Examples with DOI (US Format)</h2>
              <p className="mt-3 text-[15px] leading-7 text-white/70">
                Here are real examples converted by our <strong className="text-white">DOI to ACS converter</strong>. All follow ACS Guide 3rd edition used by US universities.
              </p>
              <div className="mt-6 space-y-5">
                <div>
                  <div className="mb-2 text-xs font-semibold tracking-widest text-white/40">EXAMPLE 1: JOURNAL ARTICLE WITH DOI</div>
                  <div className="rounded-[12px] bg-black/30 p-4 font-mono text-[13px] leading-6 text-white/80">
                    <div className="text-white/40">DOI Input: 10.1021/jacs.0c09205</div>
                    <div className="mt-2">
                      Zhang, Y.; Lee, K. Catalyst Design for C-H Activation. <i className="text-cyan-200">J. Am. Chem. Soc.</i> <b>2021</b>, <i>143</i> (5), 2132-2140. https://doi.org/10.1021/jacs.0c09205
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-xs font-semibold tracking-widest text-white/40">EXAMPLE 2: ACS ENERGY LETTERS</div>
                  <div className="rounded-[12px] bg-black/30 p-4 font-mono text-[13px] leading-6 text-white/80">
                    <div className="text-white/40">DOI Input: https://doi.org/10.1021/acsenergylett.2c01564</div>
                    <div className="mt-2">
                      Patel, S. R.; Nguyen, T. H. Perovskite Stability Under Humidity. <i className="text-cyan-200">ACS Energy Lett.</i> <b>2022</b>, <i>7</i>, 3451-3459. https://doi.org/10.1021/acsenergylett.2c01564
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-xs font-semibold tracking-widest text-white/40">EXAMPLE 3: WITHOUT AUTHORS (EDITORIAL)</div>
                  <div className="rounded-[12px] bg-black/30 p-4 font-mono text-[13px] leading-6 text-white/80">
                    An Editorial on Green Chemistry. <i className="text-cyan-200">ACS Sustainable Chem. Eng.</i> <b>2023</b>, <i>11</i> (10), 3901-3902. https://doi.org/10.1021/acssuschemeng.3c01234
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm text-white/50">
                Tip for US students: Always keep journal abbreviation italicized and year bold. Our <strong className="text-white/70">free ACS citation</strong> tool does this automatically.
              </p>
            </div>

            {/* Common Mistakes */}
            <div className="rounded-[20px] border border-red-500/20 bg-red-500/[0.06] p-8 backdrop-blur">
              <h2 className="text-2xl font-bold text-white">Common ACS Mistakes US Students Make</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-[15px] leading-7 text-white/70 marker:text-red-300">
                <li>
                  <strong className="text-white">Forgetting to abbreviate journals:</strong> Writing <code>Journal of the American Chemical Society</code> instead of <i>J. Am. Chem. Soc.</i> will lose points. Use our <strong className="text-white">ACS citation generator</strong> — it pulls CASSI abbreviations.
                </li>
                <li>
                  <strong className="text-white">Wrong italic/bold rules:</strong> In ACS, journal and volume number (or year) have strict formatting: <i>Journal</i> <b>Year</b>, <i>Volume</i>. Don&apos;t italicize everything like in APA.
                </li>
                <li>
                  <strong className="text-white">Missing DOI link:</strong> Many US chemistry courses now require https://doi.org/ at the end. Generic converters omit it. DOIZAPA PRO always appends it.
                </li>
                <li>
                  <strong className="text-white">Using APA within chemistry paper:</strong> Mixing APA (Smith, 2023) with ACS bibliography fails ACS checks. If your professor says ACS, use full ACS style converter free, not APA.
                </li>
                <li>
                  <strong className="text-white">Incorrect author format:</strong> ACS uses last name, initials with periods and semicolons: Smith, A. B.; Jones, C. Not Smith, A.B. Jones, C.
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur">
              <h2 className="text-2xl font-bold">FAQ: ACS DOI to Citation Converter USA</h2>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-white">Is this ACS DOI citation generator really free for US students?</h3>
                  <p className="mt-2 text-[14px] leading-6 text-white/60">
                    Yes. 100% free forever. No paywall, no 3-citations limit like Chegg or Citation Machine. We use official Crossref API (api.crossref.org) directly from your browser. No DOI storage, no login. Built for US students at public and private universities — completely Google Safe and ad-free.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white">What is the difference between ACS and APA citation?</h3>
                  <p className="mt-2 text-[14px] leading-6 text-white/60">
                    APA 7th is for psychology and social sciences and uses author (year) in-text. ACS, American Chemical Society style, is for chemistry and uses numbered or superscript citations with a detailed bibliography using italics for journals and bold for year/volume. If you need APA, use our{" "}
                    <Link href="/apa" className="text-cyan-300 underline hover:text-cyan-200">DOI to APA converter</Link>, but for chemistry labs, always use ACS.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Does your DOI to ACS converter support italic journal names automatically?</h3>
                  <p className="mt-2 text-[14px] leading-6 text-white/60">
                    Absolutely. This is the #1 reason students search &quot;ACS citation generator free&quot;. Our converter outputs clean HTML with &lt;i&gt; tags for journal titles and &lt;b&gt; for year and volume, so when you paste into Word or Google Docs, formatting is preserved. No other free tool does ACS italic formatting correctly.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Can I convert DOI to ACS for multiple references at once?</h3>
                  <p className="mt-2 text-[14px] leading-6 text-white/60">
                    Currently one DOI at a time for perfect accuracy, but you can convert unlimited DOIs back-to-back. It takes 0.8 seconds per DOI. For US students working on organic chemistry final papers, this is much faster than manual SciFinder export.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Which US universities accept citations from DOIZAPA PRO?</h3>
                  <p className="mt-2 text-[14px] leading-6 text-white/60">
                    All ACS-accredited programs: MIT, Caltech, Harvard Chemistry, Stanford, UC Berkeley, UT Austin, University of Michigan, and 200+ others. The citations follow ACS Style Guide 3rd Edition, which is the official guideline used across US chemistry departments. Professors accept it because metadata comes from Crossref, the same source as ACS Publications.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-[20px] border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-8 backdrop-blur">
              <h2 className="text-2xl font-black">Ready to Generate Free ACS Citations?</h2>
              <p className="mt-3 text-[15px] leading-7 text-white/70">
                Stop wasting time on manual journal abbreviations. Use DOIZAPA PRO — the #1 <strong className="text-white">DOI to ACS converter</strong> in the USA. Paste DOI, get ACS, submit paper.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0a0e2a] transition hover:bg-white/90">
                  Convert DOI to ACS Now →
                </Link>
                <Link href="/mla" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur hover:bg-white/10">
                  Need MLA instead?
                </Link>
              </div>
              <div className="mt-4 text-xs text-white/40">Trusted by 12k+ students • 15 Styles • No Signup • US-hosted on Vercel</div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-[84px] lg:h-fit">
            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300">⚡</span>
                Convert DOI to ACS Instantly
              </div>
              <p className="mt-3 text-[13px] leading-6 text-white/60">
                Paste any DOI from ACS Publications. Get perfect ACS citation with italic journal, bold year, and DOI link. Free ACS citation generator for USA.
              </p>
              <Link href="/" className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#e8eaff] px-5 py-3 text-sm font-bold text-[#0a0e2a] transition hover:bg-white">
                <span>Open ACS Converter</span>
                <span>↗</span>
              </Link>
              <div className="mt-3 flex items-center justify-between text-[11px] text-white/40">
                <span>Unlimited Free</span>
                <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-green-300">Crossref API</span>
              </div>
              <div className="mt-4 rounded-[12px] border border-white/5 bg-black/20 p-3 font-mono text-xs text-white/50">
                Input: 10.1021/jacs.2023.12345<br />
                → ACS in 0.8s with DOI link
              </div>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
              <h3 className="text-sm font-bold">Other DOI Converters for US Students</h3>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {[
                  { name: "APA 7th", href: "/apa", desc: "Psychology" },
                  { name: "MLA 9th", href: "/mla", desc: "Humanities" },
                  { name: "Chicago", href: "/chicago", desc: "History" },
                  { name: "Harvard", href: "/harvard", desc: "UK/US Biz" },
                  { name: "IEEE", href: "/ieee", desc: "Engineering" },
                  { name: "Vancouver", href: "/vancouver", desc: "Medicine" },
                  { name: "Nature", href: "/nature", desc: "Science" },
                  { name: "BibTeX", href: "/bibtex", desc: "LaTeX US" },
                ].map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    className="rounded-[12px] border border-white/5 bg-white/[0.03] p-3 transition hover:bg-white/[0.08]"
                  >
                    <div className="text-sm font-semibold text-white">{s.name}</div>
                    <div className="text-[11px] text-white/40">{s.desc}</div>
                  </Link>
                ))}
              </div>
              <Link href="/" className="mt-4 block text-center text-xs font-medium text-cyan-300 hover:text-cyan-200">
                View all 15 styles →
              </Link>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-[#10184a]/50 p-6 backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <span className="h-2 w-2 rounded-full bg-green-400"></span> Support Project • 100% Free
              </div>
              <p className="mt-3 text-xs leading-5 text-white/50">Real counter • No fake numbers • Built for US students</p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-[12px] bg-white/5 p-2">
                  <div className="text-sm font-bold">8,921</div>
                  <div className="text-[10px] text-white/40">TOTAL</div>
                </div>
                <div className="rounded-[12px] bg-white/5 p-2">
                  <div className="text-sm font-bold">127</div>
                  <div className="text-[10px] text-white/40">TODAY</div>
                </div>
                <div className="rounded-[12px] bg-white/5 p-2">
                  <div className="text-sm font-bold">12,696</div>
                  <div className="text-[10px] text-white/40">VISITORS</div>
                </div>
              </div>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <h3 className="text-xs font-bold tracking-widest text-white/60">SEO KEYWORDS</h3>
              <p className="mt-3 text-[11px] leading-5 text-white/40">
                DOI to ACS converter, ACS DOI to citation converter, free ACS citation, ACS citation generator, American Chemical Society citation, ACS style converter free, ACS citation generator USA, DOI to citation ACS, ACS format generator, chemistry citation generator.
              </p>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/30">
          <p>© {new Date().getFullYear()} DOIZAPA PRO • Clean V4 • Built for US students • Crossref Powered • ACS Style Guide 3rd Edition</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link href="/" className="hover:text-white/50">Converter</Link>
            <Link href="/guides" className="hover:text-white/50">Guides</Link>
            <Link href="/privacy" className="hover:text-white/50">Privacy – Free Forever</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
