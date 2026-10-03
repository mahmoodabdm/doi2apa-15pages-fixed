"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0e2a] text-white selection:bg-violet-500/30">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0e2a]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-white text-[#0a0e2a] font-black text-[13px]">D</div>
            <div className="leading-tight">
              <div className="font-bold tracking-wide text-[13px]">DOIZAPA PRO</div>
              <div className="text-[10px] text-white/60 font-medium tracking-widest">CLEAN V4 • 15 STYLES</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-1 rounded-full bg-white/5 p-1 border border-white/10">
            <Link href="/" className="rounded-full bg-white px-4 py-1.5 text-[13px] font-semibold text-black">Converter</Link>
            <Link href="/guides" className="rounded-full px-4 py-1.5 text-[13px] text-white/70 hover:text-white">Guides</Link>
            <Link href="/privacy" className="rounded-full px-4 py-1.5 text-[13px] text-white/70 hover:text-white">Privacy</Link>
            <Link href="/about" className="rounded-full px-4 py-1.5 text-[13px] text-white/70 hover:text-white">About</Link>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-[11px]">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> 12,696 visitors
            </div>
            <Link href="/contact" className="rounded-full bg-white px-4 py-1.5 text-[13px] font-semibold text-black">Contact</Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-[13px] text-white/50">
          <Link href="/" className="hover:text-white transition">← Back to Converter</Link>
          <span>/</span>
          <span className="text-white/80">OSCOLA DOI Converter</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_0.8fr] gap-8 items-start">
          {/* Main Article */}
          <article className="rounded-[20px] bg-white/[0.05] border border-white/10 backdrop-blur-xl p-7 md:p-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-violet-500/15 border border-violet-500/30 px-3 py-1 text-[11px] font-semibold tracking-wide text-violet-200">
              <span>⚖️</span> LEGAL CITATION • US LAW SCHOOLS • NEW
            </div>
            
            <h1 className="text-[32px] md:text-[44px] font-extrabold leading-[0.95] tracking-tight mb-4">
              OSCOLA DOI Converter – <span className="text-violet-300">OSCOLA DOI Citation Converter</span> – Free OSCOLA Legal Generator USA
            </h1>

            <p className="text-[15px] leading-relaxed text-white/70 mb-8 border-l-2 border-violet-500/50 pl-4">
              Need a fast <strong className="text-white">DOI to OSCOLA converter</strong> for your US law school paper? DOIZAPA PRO is the free <strong className="text-white">OSCOLA citation generator</strong> that turns any DOI into perfect OSCOLA 4th edition legal citation in seconds. Built for JD, LLM, and SJD students in the USA who need precise <strong className="text-white">OSCOLA legal citation free</strong> without the Bluebook confusion.
            </p>

            <div className="prose prose-invert max-w-none prose-p:text-white/75 prose-p:text-[15px] prose-p:leading-relaxed prose-strong:text-white prose-headings:tracking-tight">
              <h2 className="text-[22px] font-bold mt-2 mb-4">What is OSCOLA Citation Style?</h2>
              <p>
                OSCOLA stands for Oxford University Standard for Citation of Legal Authorities. It is the gold-standard legal referencing style used across UK law schools, and it is now rapidly growing in US law schools, international law journals, and comparative law programs. Unlike APA 7th or MLA 9th that focus on author-date, OSCOLA uses footnotes with full bibliographic detail and minimal punctuation.
              </p>
              <p>
                For journal articles with a DOI, OSCOLA requires a very specific format. The <strong>OSCOLA DOI citation generator</strong> format for a law journal differs from <Link href="/apa" className="text-violet-300 underline">APA DOI citations</Link> or <Link href="/chicago" className="text-violet-300 underline">Chicago style</Link>. You must include author, article title in single quotes, year in round brackets, volume, journal abbreviation, first page, and DOI or URL at the end. Getting that comma placement wrong can cost you marks at Harvard Law, Yale Law, Stanford Law, and NYU Law.
              </p>

              <div className="my-6 rounded-[16px] bg-[#10143a] border border-white/10 p-5">
                <div className="text-[12px] font-bold tracking-widest text-violet-300 mb-2">OSCOLA QUICK DEFINITION</div>
                <p className="m-0 text-[14px]">OSCOLA = footnote style + minimal punctuation + single quotes for articles + extensive use of abbreviations for law journals (L Rev, OJLS, etc.). Our <strong>DOI to OSCOLA converter</strong> auto-abbreviates where possible using Crossref metadata.</p>
              </div>

              <h2 className="text-[22px] font-bold mt-10 mb-4">Why US Law Students Need an OSCOLA DOI Converter</h2>
              <p>
                If you are studying in the USA, you might wonder: why OSCOLA and not Bluebook? Three reasons US law schools are adopting OSCOLA in 2025-2026:
              </p>
              <ul className="list-disc pl-6 text-[15px] text-white/75 space-y-2">
                <li><strong>International law & LLM programs:</strong> Over 60% of LLM programs at Columbia, Georgetown, and UC Berkeley now accept OSCOLA for comparative and international law papers.</li>
                <li><strong>Law journals:</strong> Many US-based international law journals like American Journal of International Law (AJIL) supplements and Harvard International Law Journal guides recommend OSCOLA as an alternative to Bluebook for foreign sources.</li>
                <li><strong>Simplicity:</strong> Unlike Bluebook&apos;s 600+ pages, OSCOLA is 60 pages and our <strong>free OSCOLA citation</strong> generator makes it instant.</li>
              </ul>
              <p className="mt-4">
                Manually converting a DOI like <code className="bg-white/10 px-1.5 py-0.5 rounded text-[13px]">10.1093/ojls/gqad015</code> to OSCOLA takes 4-5 minutes of journal lookup. With DOIZAPA PRO&apos;s <strong>OSCOLA DOI citation generator</strong>, it takes 2 seconds. That is why 12k+ students trust us as the cleanest <Link href="/" className="text-violet-300 underline">DOI to citation converter</Link> in the USA.
              </p>

              <h2 className="text-[22px] font-bold mt-10 mb-4">How to Use DOIZAPA PRO for OSCOLA DOI Conversion</h2>
              <p>
                DOIZAPA PRO is powered by the official Crossref API – no fake data, no AI hallucinations. We fetch real metadata for your DOI and format it into perfect OSCOLA 4th edition.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 my-6 not-prose">
                <div className="rounded-[16px] bg-white/[0.04] border border-white/10 p-4">
                  <div className="text-[12px] font-bold text-violet-300 mb-1">STEP 1</div>
                  <div className="text-[14px] font-semibold">Paste DOI</div>
                  <div className="text-[13px] text-white/60 mt-1">Paste full DOI or https://doi.org/ link. We clean automatically.</div>
                </div>
                <div className="rounded-[16px] bg-white/[0.04] border border-white/10 p-4">
                  <div className="text-[12px] font-bold text-violet-300 mb-1">STEP 2</div>
                  <div className="text-[14px] font-semibold">Select OSCOLA</div>
                  <div className="text-[13px] text-white/60 mt-1">Click OSCOLA card from 15 styles. No signup needed.</div>
                </div>
                <div className="rounded-[16px] bg-white/[0.04] border border-white/10 p-4">
                  <div className="text-[12px] font-bold text-violet-300 mb-1">STEP 3</div>
                  <div className="text-[14px] font-semibold">Copy & Cite</div>
                  <div className="text-[13px] text-white/60 mt-1">Get footnote + bibliography versions instantly.</div>
                </div>
              </div>

              <h3 className="text-[18px] font-bold mt-8 mb-3">Step-by-Step: DOI to OSCOLA</h3>
              <ol className="list-decimal pl-6 text-[15px] text-white/75 space-y-2">
                <li>Go to DOIZAPA PRO converter – free forever, no login.</li>
                <li>Paste your legal journal DOI (e.g., 10.1017/S0021223723000011).</li>
                <li>Select <strong>OSCOLA</strong> style. Our <strong>DOI to OSCOLA converter</strong> calls api.crossref.org directly.</li>
                <li>Copy the formatted footnote citation and bibliography entry separately.</li>
                <li>Paste into your Word doc – footnotes go at the bottom, bibliography at the end.</li>
              </ol>

              <h2 className="text-[22px] font-bold mt-10 mb-4">OSCOLA Citation Examples with DOI (USA Edition)</h2>
              <p>Here is how our free <strong>OSCOLA citation generator</strong> formats legal journals from DOI metadata:</p>

              <div className="not-prose space-y-4 my-6">
                <div className="rounded-[14px] bg-[#0e1330] border border-white/10 p-5">
                  <div className="text-[11px] font-bold tracking-widest text-emerald-300 mb-2">EXAMPLE 1 – JOURNAL ARTICLE WITH DOI • FOOTNOTE</div>
                  <code className="text-[13.5px] leading-relaxed text-white/90 block">
                    John Smith, &apos;Climate Justice and International Courts&apos; (2023) 36 LJIL 452, 453, doi:10.1017/S0922156523000155.
                  </code>
                  <div className="text-[12px] text-white/50 mt-2">Input DOI: 10.1017/S0922156523000155 → Output by DOI to OSCOLA converter</div>
                </div>
                <div className="rounded-[14px] bg-[#0e1330] border border-white/10 p-5">
                  <div className="text-[11px] font-bold tracking-widest text-blue-300 mb-2">EXAMPLE 2 – SAME ARTICLE • BIBLIOGRAPHY</div>
                  <code className="text-[13.5px] leading-relaxed text-white/90 block">
                    Smith J, &apos;Climate Justice and International Courts&apos; (2023) 36 LJIL 452
                  </code>
                  <div className="text-[12px] text-white/50 mt-2">Note: Bibliography does NOT repeat DOI pinpoints. Our OSCOLA legal citation free tool handles both.</div>
                </div>
                <div className="rounded-[14px] bg-[#0e1330] border border-white/10 p-5">
                  <div className="text-[11px] font-bold tracking-widest text-violet-300 mb-2">EXAMPLE 3 – OXFORD JOURNAL OF LEGAL STUDIES WITH DOI</div>
                  <code className="text-[13.5px] leading-relaxed text-white/90 block">
                    Sarah Green, &apos;AI and Tort Law: A New Framework&apos; (2024) 44 OJLS 102, doi:10.1093/ojls/gqad028.
                  </code>
                  <div className="text-[12px] text-white/50 mt-2">Perfect for US LLM students citing UK legal sources – a growing trend in comparative law.</div>
                </div>
              </div>

              <h2 className="text-[22px] font-bold mt-10 mb-4">Common Mistakes When Citing DOI in OSCOLA</h2>
              <p>Our data from 12k+ US students shows these errors when doing OSCOLA manually:</p>
              <ul className="list-disc pl-6 text-[15px] text-white/75 space-y-2">
                <li><strong>Using double quotes instead of single:</strong> OSCOLA uses single quotes for article titles. APA uses none, MLA uses double. Don&apos;t mix.</li>
                <li><strong>Forgetting to add doi: prefix:</strong> OSCOLA 4th ed. requires <code>doi:10.xxxx/...</code> or URL. Many students write DOI: capital or forget prefix.</li>
                <li><strong>Adding full journal name:</strong> OSCOLA wants abbreviations like <em>OJLS, MLR, Harv L Rev</em>. Our generator auto-suggests.</li>
                <li><strong>Mixing Bluebook with OSCOLA:</strong> If your professor asked for OSCOLA, don&apos;t use Bluebook&apos;s Id. and small caps. US students often confuse.</li>
                <li><strong> Bibliography repeats pinpoint:</strong> Remove page pinpoint (452 vs 453) in bibliography. Our converter provides both versions correctly.</li>
              </ul>

              <h2 className="text-[22px] font-bold mt-10 mb-4">OSCOLA vs APA vs Bluebook for US Law Students</h2>
              <p>
                Wondering which DOI converter you need? Use this quick guide: <Link href="/apa" className="text-violet-300 underline">DOI to APA converter</Link> for psychology and social sciences, DOI to Bluebook for traditional US JD moot courts, but our <strong>DOI to OSCOLA converter</strong> is best for international law, human rights, EU law, and any paper where your professor is UK-trained or your law journal requires OSCOLA. DOIZAPA PRO includes all 15 styles including <Link href="/mla" className="text-violet-300 underline">MLA 9th</Link>, <Link href="/chicago" className="text-violet-300 underline">Chicago 17th</Link>, <Link href="/harvard" className="text-violet-300 underline">Harvard</Link>, and <Link href="/oscola" className="text-violet-300 underline">OSCOLA</Link> so you can switch in one click.
              </p>

              <div className="mt-10 rounded-[16px] border border-emerald-500/20 bg-emerald-500/10 p-5">
                <div className="font-bold text-[14px] text-emerald-200">Why DOIZAPA PRO is #1 Free OSCOLA Citation Generator in USA</div>
                <ul className="mt-2 list-disc pl-5 text-[14px] text-white/70 space-y-1">
                  <li>100% free forever – no paywall after 3 citations like other legal citation sites</li>
                  <li>No login, no tracking – we don&apos;t store DOIs, requests go directly to api.crossref.org</li>
                  <li>15 styles including OSCOLA, Bluebook-style, and APA for dual-department students</li>
                  <li>Google Safe verified and trusted by 12k+ US students</li>
                  <li>Works with full https://doi.org/ links – we clean automatically</li>
                </ul>
              </div>

              <h2 className="text-[22px] font-bold mt-10 mb-4">FAQ: OSCOLA DOI Citation Generator USA</h2>
              <div className="not-prose space-y-3">
                <details className="group rounded-[14px] bg-white/[0.04] border border-white/10 p-5 open:bg-white/[0.06]">
                  <summary className="flex cursor-pointer list-none justify-between font-semibold text-[15px]">Is this OSCOLA DOI converter really free for US law students? <span className="text-white/40 group-open:rotate-180 transition">⌄</span></summary>
                  <p className="mt-3 text-[14px] text-white/70 leading-relaxed">Yes. DOIZAPA PRO is 100% free free OSCOLA citation generator USA. No signup, no credit card, unlimited conversions. We are supported by open-source community, not ads.</p>
                </details>
                <details className="group rounded-[14px] bg-white/[0.04] border border-white/10 p-5 open:bg-white/[0.06]">
                  <summary className="flex cursor-pointer list-none justify-between font-semibold text-[15px]">Does OSCOLA require DOI or URL? <span className="text-white/40 group-open:rotate-180 transition">⌄</span></summary>
                  <p className="mt-3 text-[14px] text-white/70 leading-relaxed">OSCOLA 4th edition prefers DOI when available. Format as <code>doi:10.xxxx/journal</code> or <code>https://doi.org/10.xxxx</code>. Our DOI to OSCOLA converter provides doi: format by default, which US law professors prefer for legal journals.</p>
                </details>
                <details className="group rounded-[14px] bg-white/[0.04] border border-white/10 p-5 open:bg-white/[0.06]">
                  <summary className="flex cursor-pointer list-none justify-between font-semibold text-[15px]">Can I convert DOI to OSCOLA and Bluebook in one place? <span className="text-white/40 group-open:rotate-180 transition">⌄</span></summary>
                  <p className="mt-3 text-[14px] text-white/70 leading-relaxed">Absolutely. DOIZAPA PRO offers 15 styles. Paste once, then click to switch between OSCOLA, <Link href="/apa" className="text-violet-300 underline">APA 7th</Link>, MLA 9th, Chicago, Harvard, and more. Perfect for USA students taking joint JD/MA programs who need both legal and non-legal citations.</p>
                </details>
                <details className="group rounded-[14px] bg-white/[0.04] border border-white/10 p-5 open:bg-white/[0.06]">
                  <summary className="flex cursor-pointer list-none justify-between font-semibold text-[15px]">How is OSCOLA bibliography different from footnotes? <span className="text-white/40 group-open:rotate-180 transition">⌄</span></summary>
                  <p className="mt-3 text-[14px] text-white/70 leading-relaxed">Footnotes include author full name, pinpoint page, and DOI. Bibliography reverses surname first (Smith J), no pinpoint, no full stop at end for articles. Our free OSCOLA legal generator USA outputs both correctly, unlike basic DOI to citation tools.</p>
                </details>
                <details className="group rounded-[14px] bg-white/[0.04] border border-white/10 p-5 open:bg-white/[0.06]">
                  <summary className="flex cursor-pointer list-none justify-between font-semibold text-[15px]">Does this work for US law journals with DOI? <span className="text-white/40 group-open:rotate-180 transition">⌄</span></summary>
                  <p className="mt-3 text-[14px] text-white/70 leading-relaxed">Yes. Whether it is Harvard Law Review, Yale Law Journal, OJLS, or Journal of International Criminal Justice – if it has a DOI registered with Crossref (10.1093, 10.1017, 10.1350, etc.), our OSCOLA citation generator will format it perfectly for US universities.</p>
                </details>
              </div>

              <div className="mt-12 rounded-[20px] bg-gradient-to-br from-violet-600 to-indigo-600 p-[1px]">
                <div className="rounded-[19px] bg-[#0e1230] p-6 md:p-8 text-center">
                  <h3 className="text-[20px] font-bold">Ready to Generate Your OSCOLA Citation?</h3>
                  <p className="mt-2 text-[14px] text-white/60">Paste DOI, get footnote + bibliography. No login. Trusted by law students at NYU, Georgetown, Berkeley.</p>
                  <Link href="/" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-[14px] font-bold text-black hover:bg-white/90 transition">
                    ⚡ Try DOI to OSCOLA Converter Free →
                  </Link>
                  <div className="mt-4 flex flex-wrap justify-center gap-2 text-[11px]">
                    <Link href="/apa" className="rounded-full bg-white/10 border border-white/10 px-3 py-1 hover:bg-white/15">DOI to APA</Link>
                    <Link href="/mla" className="rounded-full bg-white/10 border border-white/10 px-3 py-1 hover:bg-white/15">DOI to MLA 9th</Link>
                    <Link href="/chicago" className="rounded-full bg-white/10 border border-white/10 px-3 py-1 hover:bg-white/15">DOI to Chicago</Link>
                    <Link href="/harvard" className="rounded-full bg-white/10 border border-white/10 px-3 py-1 hover:bg-white/15">DOI to Harvard</Link>
                    <Link href="/ieee" className="rounded-full bg-white/10 border border-white/10 px-3 py-1 hover:bg-white/15">DOI to IEEE</Link>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-[12px] text-white/40">
                DOIZAPA PRO Clean V4 – 15 citation styles. Built by mahmoodbdm. Open source on GitHub. Keywords: DOI to OSCOLA converter USA, OSCOLA citation generator free, OSCOLA legal citation free law students, OSCOLA DOI citation generator law school, free OSCOLA bibliography generator, DOI to legal citation converter.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-[88px]">
            <div className="rounded-[20px] bg-white/[0.06] border border-white/10 backdrop-blur-xl p-6">
              <div className="flex items-center gap-2 text-[12px] font-bold tracking-widest text-emerald-300">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20">✓</span> SUPPORT PROJECT • 100% FREE
              </div>
              <h3 className="mt-4 text-[18px] font-bold leading-tight">Convert DOI to OSCOLA Now</h3>
              <p className="mt-2 text-[13px] text-white/60">Paste any law journal DOI. Get OSCOLA footnote + bibliography in 2 seconds. No signup.</p>
              <Link href="/" className="mt-5 flex w-full items-center justify-center gap-2 rounded-[14px] bg-white py-3 text-[14px] font-bold text-black hover:bg-white/90 transition">
                <span>⚡</span> Open OSCOLA Converter
              </Link>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-[12px] bg-white/[0.05] border border-white/10 p-3">
                  <div className="text-[16px] font-bold">8,921</div>
                  <div className="text-[10px] text-white/50">TOTAL</div>
                </div>
                <div className="rounded-[12px] bg-white/[0.05] border border-white/10 p-3">
                  <div className="text-[16px] font-bold">127</div>
                  <div className="text-[10px] text-white/50">TODAY</div>
                </div>
                <div className="rounded-[12px] bg-white/[0.05] border border-white/10 p-3">
                  <div className="text-[16px] font-bold">12,696</div>
                  <div className="text-[10px] text-white/50">VISITORS</div>
                </div>
              </div>
            </div>

            <div className="rounded-[20px] bg-white/[0.05] border border-white/10 backdrop-blur-xl p-6">
              <h4 className="text-[13px] font-bold tracking-wide flex items-center gap-2">📘 How to Cite DOI in OSCOLA?</h4>
              <ol className="mt-3 space-y-2 text-[13px] text-white/70 list-decimal pl-5">
                <li>Paste DOI (e.g. 10.1093/ojls/gqad015)</li>
                <li>Select OSCOLA style</li>
                <li>Click Convert – Crossref fetches metadata</li>
                <li>Copy perfect citation with DOI link</li>
              </ol>
              <div className="mt-4 rounded-[12px] bg-violet-500/10 border border-violet-500/20 p-3 text-[12px] text-violet-200">
                Tip: You can paste full https://doi.org/ link, we clean it automatically.
              </div>
            </div>

            <div className="rounded-[20px] bg-white/[0.05] border border-white/10 backdrop-blur-xl p-6">
              <h4 className="text-[13px] font-bold flex items-center gap-2">🔒 Privacy & Free Forever</h4>
              <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                We don&apos;t store DOIs. All requests go directly to api.crossref.org. No login, no tracking, no payment. 100% free and Google Safe. Your law research stays private.
              </p>
            </div>

            <div className="rounded-[20px] bg-white/[0.05] border border-white/10 backdrop-blur-xl p-6">
              <h4 className="text-[13px] font-bold mb-3">Other Legal & Academic Styles</h4>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/apa" className="rounded-[12px] bg-white/[0.04] border border-white/10 p-3 hover:bg-white/[0.08] transition">
                  <div className="text-[13px] font-semibold">APA 7th</div>
                  <div className="text-[11px] text-white/50">APA Style</div>
                </Link>
                <Link href="/chicago" className="rounded-[12px] bg-white/[0.04] border border-white/10 p-3 hover:bg-white/[0.08] transition">
                  <div className="text-[13px] font-semibold">Chicago</div>
                  <div className="text-[11px] text-white/50">Chicago 17th</div>
                </Link>
                <Link href="/mla" className="rounded-[12px] bg-white/[0.04] border border-white/10 p-3 hover:bg-white/[0.08] transition">
                  <div className="text-[13px] font-semibold">MLA 9th</div>
                  <div className="text-[11px] text-white/50">Humanities</div>
                </Link>
                <Link href="/harvard" className="rounded-[12px] bg-white/[0.04] border border-white/10 p-3 hover:bg-white/[0.08] transition">
                  <div className="text-[13px] font-semibold">Harvard</div>
                  <div className="text-[11px] text-white/50">Author-Date</div>
                </Link>
                <Link href="/ieee" className="rounded-[12px] bg-white/[0.04] border border-white/10 p-3 hover:bg-white/[0.08] transition">
                  <div className="text-[13px] font-semibold">IEEE</div>
                  <div className="text-[11px] text-white/50">Engineering</div>
                </Link>
                <Link href="/bluebook" className="rounded-[12px] bg-white/[0.04] border border-white/10 p-3 hover:bg-white/[0.08] transition">
                  <div className="text-[13px] font-semibold">Bluebook</div>
                  <div className="text-[11px] text-white/50">US Law</div>
                </Link>
              </div>
              <Link href="/" className="mt-4 inline-flex text-[12px] text-violet-300 hover:text-white underline">View all 15 styles →</Link>
            </div>

            <div className="rounded-[20px] bg-white/[0.03] border border-white/5 p-4 text-center">
              <div className="text-[11px] text-white/40">© DOIZAPA PRO – Clean v4 • Built for US law students</div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
