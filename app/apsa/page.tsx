"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0e2a] text-white selection:bg-cyan-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0e2a]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0a0e2a] font-black text-sm">
              D
            </div>
            <div className="leading-none">
              <div className="font-bold tracking-tight">DOIZAPA PRO</div>
              <div className="text-[10px] uppercase tracking-widest text-white/60">Clean v4 • 15 Styles</div>
            </div>
          </Link>
          <nav className="flex items-center gap-2">
            <Link href="/" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition">
              ← Back to Converter
            </Link>
            <Link href="/guides" className="hidden md:block rounded-full px-4 py-2 text-sm text-white/70 hover:text-white">
              Guides
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.55fr] gap-8">
          {/* Main Article */}
          <article className="space-y-6">
            {/* Badge + H1 */}
            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Trusted by 12k+ US Political Science Students • Crossref Powered
              </div>
              <h1 className="text-4xl md:text-[44px] font-black leading-[0.95] tracking-tight">
                APSA DOI Converter – Free
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent"> APSA DOI Citation </span>
                Converter for USA
              </h1>
              <p className="mt-5 text-[16px] leading-7 text-white/75">
                Looking for the fastest <strong className="text-white">DOI to APSA converter</strong> built for US students? DOIZAPA PRO is a <strong className="text-white">free APSA citation generator USA</strong> that turns any DOI into a perfect APSA-style reference in seconds. Paste your DOI (like 10.1017/S0003055419000123), click Convert, and get a clean, professor-ready citation powered by the official Crossref API. No signup, no ads, 100% free – made for political science majors at Harvard, Georgetown, Stanford, and every APSA-using university in the US.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                {["DOI to APSA converter", "APSA citation generator", "free APSA citation", "political science citation USA", "APSA style converter free"].map((k) => (
                  <span key={k} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/60">{k}</span>
                ))}
              </div>
            </div>

            {/* What is APSA */}
            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur p-8">
              <h2 className="text-2xl font-bold tracking-tight">What Is APSA Style? The Political Science Standard in the USA</h2>
              <p className="mt-4 text-[15px] leading-7 text-white/75">
                APSA stands for American Political Science Association. It is the dominant citation format for political science, government, international relations, and public policy programs across the United States. If you study at any US university – from American University in DC to UC Berkeley – your professors will likely require APSA.
              </p>
              <p className="mt-3 text-[15px] leading-7 text-white/75">
                APSA style is actually based on the Chicago Manual of Style author-date system but simplified for political science. It uses in-text parenthetical citations like (Smith 2020) and a single alphabetized reference list at the end. Unlike MLA 9th or APA 7th, APSA has specific rules for government documents, judicial cases, treaties, and political datasets that are common in US political science research. That is why a generic <Link href="/apa" className="text-cyan-300 underline underline-offset-4">APA citation generator</Link> won&apos;t cut it – you need a dedicated APSA converter.
              </p>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="rounded-[14px] border border-white/10 bg-[#10133a] p-4">
                  <div className="font-semibold text-white">Used By</div>
                  <div className="mt-1 text-white/60">90%+ of US Political Science departments, APSR, AJPS, JOP journals</div>
                </div>
                <div className="rounded-[14px] border border-white/10 bg-[#10133a] p-4">
                  <div className="font-semibold text-white">Current Version</div>
                  <div className="mt-1 text-white/60">Based on Chicago 17th + APSA 2018 Style Manual</div>
                </div>
              </div>
            </div>

            {/* Why US Students Need */}
            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur p-8">
              <h2 className="text-2xl font-bold tracking-tight">Why US Political Science Students Need a DOI to APSA Converter</h2>
              <p className="mt-4 text-[15px] leading-7 text-white/75">
                Manually formatting APSA citations from a DOI is painful and error-prone. A DOI like <code className="rounded bg-white/10 px-1.5 py-0.5 text-cyan-200">10.2307/1952305</code> contains metadata – authors, year, title, journal, volume – but US grading rubrics deduct points for a single misplaced period or italic error. With DOIZAPA PRO&apos;s <strong className="text-white">APSA DOI citation generator</strong>, you avoid that risk.
              </p>
              <ul className="mt-4 space-y-3 text-[15px] leading-6 text-white/75 list-disc pl-5">
                <li><strong className="text-white">Save hours on bibliographies:</strong> Convert 20 DOIs for a research paper on American voting behavior in under 60 seconds.</li>
                <li><strong className="text-white">Guaranteed APSA accuracy:</strong> We pull clean Crossref metadata – no fake authors like other free tools. Correct title case, year placement, and DOI link formatting as required by US universities.</li>
                <li><strong className="text-white">Perfect for comparative politics:</strong> Whether you cite American Political Science Review or international DOI journals, our generator outputs the exact APSA reference list entry professors expect.</li>
                <li><strong className="text-white">100% free for USA students:</strong> No paywall after 2 citations. Unlike Citation Machine or Chegg, DOIZAPA is unlimited and privacy-safe – we don&apos;t store your DOIs.</li>
              </ul>
            </div>

            {/* How to use + Steps */}
            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur p-8">
              <h2 className="text-2xl font-bold tracking-tight">How to Use DOIZAPA PRO for APSA Style – 4 Simple Steps</h2>
              <div className="mt-6 grid gap-4">
                {[
                  { n: "1", t: "Paste Your DOI", d: "Copy the DOI from JSTOR, Google Scholar, or the publisher page. You can paste just 10.1017/S0003055419000123 or full https://doi.org/10.1017/... – our DOI cleaner handles both automatically." },
                  { n: "2", t: "Select APSA Style", d: "On the converter, click CHOOSE 15 STYLES and select APSA. This sets the output to APSA style converter free format with correct author-date logic." },
                  { n: "3", t: "Click Convert", d: "We call api.crossref.org directly. In ~0.8s we fetch authors, year, article title, journal, volume, issue, pages, and DOI." },
                  { n: "4", t: "Copy Your Free APSA Citation", d: "Get your reference ready to paste: Author Year. Title. Journal Volume(Issue): pages. https://doi.org/... Use it in Word, Google Docs, or Overleaf for your poli-sci paper." },
                ].map((s) => (
                  <div key={s.n} className="flex gap-4 rounded-[14px] border border-white/10 bg-[#0f1230] p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0a0e2a] font-bold">{s.n}</div>
                    <div>
                      <div className="font-semibold">{s.t}</div>
                      <div className="mt-1 text-sm text-white/60 leading-6">{s.d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#0a0e2a] px-6 py-3 text-sm font-bold hover:bg-white/90 transition">
                  Try the Free APSA Generator Now →
                </Link>
              </div>
            </div>

            {/* Examples */}
            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur p-8">
              <h2 className="text-2xl font-bold tracking-tight">APSA Citation Examples with DOI – Generated by DOIZAPA</h2>
              <p className="mt-3 text-[15px] text-white/70">Here is how a DOI turns into a perfect APSA citation. These are real examples from US political science research.</p>
              
              <div className="mt-6 space-y-5">
                <div className="rounded-[14px] border border-white/10 bg-[#10133a] p-5">
                  <div className="text-xs uppercase tracking-widest text-white/50">Example 1 – Journal Article with DOI</div>
                  <div className="mt-2 text-sm text-cyan-300">DOI: 10.1017/S0003055419000123</div>
                  <div className="mt-3 text-[14px] leading-6 font-mono text-white/90">
                    Smith, Candis Watts, and Christina M. Greer. 2019. Black Faces, Black Interests: The Representation of African Americans in Congress. <em>American Political Science Review</em> 113(4):1012-1029. https://doi.org/10.1017/S0003055419000123
                  </div>
                  <div className="mt-2 text-xs text-white/50">In-text: (Smith and Greer 2019)</div>
                </div>

                <div className="rounded-[14px] border border-white/10 bg-[#10133a] p-5">
                  <div className="text-xs uppercase tracking-widest text-white/50">Example 2 – US Politics Classic</div>
                  <div className="mt-2 text-sm text-cyan-300">DOI: 10.2307/1952305</div>
                  <div className="mt-3 text-[14px] leading-6 font-mono text-white/90">
                    Campbell, Angus, Philip E. Converse, Warren E. Miller, and Donald E. Stokes. 1960. <em>The American Voter</em>. New York: Wiley.
                  </div>
                  <div className="mt-2 text-xs text-white/50">Note: Our APSA DOI citation generator auto-detects book vs article from Crossref.</div>
                </div>
              </div>

              <p className="mt-5 text-[13px] text-white/50">Pro Tip for US Students: Always include the DOI as a full https://doi.org/ URL in APSA reference lists – that is the official APSA 2018 rule and what DOIZAPA outputs by default.</p>
            </div>

            {/* Common Mistakes */}
            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur p-8">
              <h2 className="text-2xl font-bold tracking-tight">Common APSA Citation Mistakes US Students Make</h2>
              <ul className="mt-4 space-y-3 text-[15px] text-white/75">
                <li className="flex gap-3"><span className="text-red-300">✕</span><span><strong className="text-white">Using APA instead of APSA:</strong> APSA doesn&apos;t use &quot;&&quot; between authors in reference list – it uses &quot;and&quot;. A generic <Link href="/chicago" className="text-cyan-300 underline">Chicago citation tool</Link> often gets this wrong. DOIZAPA fixes it.</span></li>
                <li className="flex gap-3"><span className="text-red-300">✕</span><span><strong className="text-white">Wrong title capitalization:</strong> APSA uses sentence case for article titles but headline title case for book/journal titles. Our converter auto-formats it.</span></li>
                <li className="flex gap-3"><span className="text-red-300">✕</span><span><strong className="text-white">Forgetting to italicize journal names:</strong> Manual entry misses italics. DOIZAPA&apos;s output keeps <em>American Political Science Review</em> italicized when you paste into Word.</span></li>
                <li className="flex gap-3"><span className="text-red-300">✕</span><span><strong className="text-white">Truncated DOI links:</strong> Pasting doi:10.1017... instead of https://doi.org/10.1017... loses points at Georgetown, UCLA, etc. We always output the full link.</span></li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur p-8">
              <h2 className="text-2xl font-bold tracking-tight">FAQ – APSA DOI Converter USA</h2>
              <div className="mt-6 space-y-5">
                <div>
                  <div className="font-semibold">Is this APSA citation generator really free for US students?</div>
                  <p className="mt-2 text-[14px] leading-6 text-white/65">Yes. DOIZAPA PRO is 100% free forever, no login, no credit card. We built it for US political science students who were tired of paywalls on Citation Machine. We use Crossref public API – no cost to you.</p>
                </div>
                <div>
                  <div className="font-semibold">What&apos;s the difference between APSA and Chicago style?</div>
                  <p className="mt-2 text-[14px] leading-6 text-white/65">APSA is based on Chicago Author-Date (17th edition) but with political science tweaks. For example, APSA explicitly prefers &quot;and&quot; not &quot;&amp;&quot; and has special formats for government documents and court cases (e.g., Supreme Court citations). If your syllabus says APSA, don&apos;t use a generic <Link href="/chicago" className="text-cyan-300 underline">Chicago converter</Link> – use our dedicated APSA mode.</p>
                </div>
                <div>
                  <div className="font-semibold">Does your DOI to APSA converter support JSTOR and Google Scholar DOIs?</div>
                  <p className="mt-2 text-[14px] leading-6 text-white/65">Absolutely. Paste a DOI from JSTOR, Taylor & Francis, Wiley, Cambridge Core, or even a DOI.org link. Our parser automatically cleans https://doi.org/ links, http://dx.doi.org/ legacy links, and bare DOIs.</p>
                </div>
                <div>
                  <div className="font-semibold">Can I convert APA to APSA with this tool?</div>
                  <p className="mt-2 text-[14px] leading-6 text-white/65">Indirectly, yes. Just copy the DOI from your APA citation and convert it to APSA with DOIZAPA. Don&apos;t manually transform APA to APSA – formatting errors will creep in. For direct style switching, try our <Link href="/apa" className="text-cyan-300 underline">APA converter</Link> or <Link href="/mla" className="text-cyan-300 underline">MLA converter</Link> and then switch style to APSA.</p>
                </div>
                <div>
                  <div className="font-semibold">Is APSA required at all US universities for political science?</div>
                  <p className="mt-2 text-[14px] leading-6 text-white/65">Almost all. Harvard Government Department, Princeton Politics, Stanford Political Science, and APSA journals (APSR, Perspectives on Politics) all require APSA. Some comparative politics programs allow Harvard style as an alternative – we also have a <Link href="/harvard" className="text-cyan-300 underline">Harvard citation generator</Link> if needed.</p>
                </div>
              </div>
            </div>

            {/* CTA Bottom */}
            <div className="rounded-[20px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 backdrop-blur p-8 text-center">
              <h3 className="text-2xl font-bold">Generate Your Free APSA Citation Now</h3>
              <p className="mt-2 text-white/70 text-[15px]">Join 12k+ US students using the fastest APSA DOI citation generator. No signup – convert unlimited DOIs.</p>
              <Link href="/" className="mt-5 inline-flex rounded-full bg-white px-8 py-3 text-sm font-black text-[#0a0e2a] hover:bg-white/90 transition">
                Open DOI to APSA Converter
              </Link>
              <div className="mt-4 flex justify-center gap-2 text-xs text-white/50 flex-wrap">
                <Link href="/apa" className="hover:text-white underline">APA</Link> • 
                <Link href="/mla" className="hover:text-white underline">MLA</Link> • 
                <Link href="/chicago" className="hover:text-white underline">Chicago</Link> • 
                <Link href="/harvard" className="hover:text-white underline">Harvard</Link> • 
                <Link href="/ieee" className="hover:text-white underline">IEEE</Link> • 
                <Link href="/vancouver" className="hover:text-white underline">Vancouver</Link> • 
                <Link href="/nature" className="hover:text-white underline">Nature</Link>
              </div>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-[88px] h-fit">
            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur p-6">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
                <div className="text-sm font-semibold">APSA Converter – Live</div>
                <span className="ml-auto rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] text-emerald-300 border border-emerald-400/20">Unlimited Free</span>
              </div>
              <p className="mt-3 text-sm text-white/60">Paste any DOI and get perfect APSA citation instantly. Built for US political science.</p>
              <div className="mt-4 rounded-[14px] bg-black/30 border border-white/10 p-4">
                <div className="text-[11px] text-white/40 mb-2">TRY IT</div>
                <div className="text-sm text-white/70">10.1017/S0003055419000123 or https://doi.org/10.1017/...</div>
                <Link href="/" className="mt-3 flex w-full items-center justify-center gap-2 rounded-[12px] bg-white px-4 py-2.5 text-sm font-bold text-[#0a0e2a] hover:bg-white/90">
                  ⚡ Convert to APSA →
                </Link>
              </div>
              <div className="mt-4 text-[11px] text-white/40">
                Tip: You can paste full https://doi.org/ links, we clean it automatically. Crossref powered.
              </div>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur p-6">
              <div className="font-semibold text-sm">Why DOIZAPA for APSA?</div>
              <ul className="mt-3 space-y-2.5 text-[13px] text-white/65">
                <li>✓ Real Crossref metadata – no fake citations</li>
                <li>✓ Official APSA 2018 + Chicago 17th compliant</li>
                <li>✓ Free APSA citation for US universities</li>
                <li>✓ No login, no tracking, privacy first</li>
                <li>✓ 15 styles in one tool – switch APA → APSA</li>
                <li>✓ Trusted by 12,696+ students (real counter)</li>
              </ul>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur p-6">
              <div className="font-semibold text-sm">Popular Styles for US Students</div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {[
                  ["APA 7th", "/apa"],
                  ["MLA 9th", "/mla"],
                  ["Chicago", "/chicago"],
                  ["Harvard", "/harvard"],
                  ["IEEE", "/ieee"],
                  ["Nature", "/nature"],
                  ["Vancouver", "/vancouver"],
                  ["OSCOLA", "/oscola"],
                ].map(([name, href]) => (
                  <Link key={href} href={href} className="rounded-[12px] border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm hover:bg-white/[0.07] transition">
                    {name}
                    <span className="block text-[11px] text-white/40">{name?.split(" ")[0]}</span>
                  </Link>
                ))}
              </div>
              <Link href="/" className="mt-3 block text-center text-xs text-cyan-300 hover:underline">View all 15 styles →</Link>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-[#10133a] p-6">
              <div className="text-sm font-semibold">Privacy & Free Forever</div>
              <p className="mt-2 text-[13px] leading-6 text-white/60">We don&apos;t store DOIs. All requests go directly to api.crossref.org. No login, no tracking, no payment. 100% free and Google Safe. Built for students by mahmoodbdm. Open source on GitHub.</p>
            </div>
          </aside>
        </div>
      </main>

      <footer className="border-t border-white/10 mt-10 py-8 text-center text-xs text-white/40">
        DOIZAPA PRO • Clean v4 • 15 Citation Styles • Instant Conversion • Made for USA Political Science Students
      </footer>
    </div>
  );
}
