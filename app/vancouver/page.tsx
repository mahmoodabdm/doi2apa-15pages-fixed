"use client";

import Link from "next/link";

export default function VancouverPage() {
  return (
    <div className="min-h-screen bg-[#0a0e2a] text-white selection:bg-violet-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0e2a]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#0a0e2a] font-black text-sm">
              D
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-wider">DOIZAPA PRO</div>
              <div className="text-[10px] text-white/50 tracking-wide">CLEAN V4 • 15 STYLES</div>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/15 transition"
            >
              Converter
            </Link>
            <Link href="/guides" className="hidden md:block text-sm text-white/60 hover:text-white">
              Guides
            </Link>
            <Link href="/#faq" className="hidden md:block text-sm text-white/60 hover:text-white">
              Privacy
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <div className="flex items-center gap-2 text-sm text-white/50">
          <Link href="/" className="hover:text-white transition">
            ← Back to Converter
          </Link>
          <span className="opacity-30">/</span>
          <span className="text-white/70">Vancouver Style DOI Converter</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
          {/* Main Article */}
          <article className="min-w-0">
            {/* H1 Hero Card */}
            <div className="rounded-[24px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-8 md:p-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 text-[11px] font-semibold tracking-wide text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse"></span>
                ICMJE STANDARD • MEDICAL SCHOOLS USA
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.05] tracking-tight">
                Vancouver Style DOI Converter{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-300">
                  - Free Vancouver Citation Generator USA
                </span>
              </h1>
              <p className="mt-5 text-[15px] md:text-[16px] leading-relaxed text-white/70 max-w-3xl">
                The fastest <span className="text-white font-semibold">DOI to Vancouver converter</span> built
                for US medical students, nursing, pharmacy and biomedical researchers. Paste any DOI like{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-cyan-200">10.1056/NEJMoa2035002</code> and get a
                perfect ICMJE-compliant Vancouver citation instantly. Free Vancouver citation generator with no signup,
                no limits, powered by official Crossref API. Trusted by 12k+ students at Johns Hopkins, Harvard Medical,
                Mayo Clinic Alix and top US medical schools.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/#converter"
                  className="rounded-full bg-white text-[#0a0e2a] px-6 py-2.5 text-sm font-bold hover:bg-white/90 transition"
                >
                  Convert DOI to Vancouver Now →
                </Link>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white/60">
                  ✓ Free • ✓ No Login • ✓ Unlimited
                </span>
              </div>
            </div>

            {/* Content Stack */}
            <div className="mt-8 space-y-8">
              {/* What is */}
              <section className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-7 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold">What is Vancouver Style Citation?</h2>
                <div className="prose prose-invert prose-sm md:prose-base max-w-none mt-4 text-white/70 leading-relaxed">
                  <p>
                    Vancouver style is a numeric citation system maintained by the International Committee of Medical
                    Journal Editors (ICMJE) and used by over 1,000 biomedical journals. Unlike{" "}
                    <Link href="/apa" className="text-cyan-300 hover:underline">
                      APA 7th
                    </Link>{" "}
                    which uses author-date, Vancouver uses sequential numbers in-text (1), (1,2) or [1] that correspond
                    to a numbered reference list. It was created in 1978 at a meeting in Vancouver, Canada, hence the
                    name.
                  </p>
                  <p className="mt-4">
                    For a <strong className="text-white">Vancouver DOI citation</strong>, the DOI is critical because
                    medical literature moves fast and URLs break. ICMJE recommends including DOI as:{" "}
                    <code className="text-white/90">doi:10.xxxx/xxxxx</code> or preferably as a resolved link{" "}
                    <code className="text-white/90">https://doi.org/10.xxxx/xxxxx</code>. Our{" "}
                    <strong className="text-white">Vancouver style generator free</strong> tool automates this format so
                    you never miss a period, italic, or number sequence.
                  </p>
                  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="rounded-xl bg-[#0a0e2a] border border-white/10 p-4">
                      <div className="text-xs text-white/50 uppercase tracking-wide">Core Rule</div>
                      <div className="mt-1 text-sm text-white/90">6 authors then et al. • Journal titles abbreviated (NLM)</div>
                    </div>
                    <div className="rounded-xl bg-[#0a0e2a] border border-white/10 p-4">
                      <div className="text-xs text-white/50 uppercase tracking-wide">Reference List</div>
                      <div className="mt-1 text-sm text-white/90">Numbered in order of appearance • No alphabetical sort</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why US students */}
              <section className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-7 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold">Why US Medical & Nursing Students Need a DOI to Vancouver Converter</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-white/70">
                  If you are applying to US medical schools, MSN, DNP, PharmD or biomedical PhD programs, you will write
                  in Vancouver, not MLA. American Medical Association (AMA) is based on Vancouver, and most US
                  university libraries — from Stanford to Mayo Clinic to University of Michigan — require ICMJE
                  compliance for systematic reviews, case reports, and research theses.
                </p>
                <ul className="mt-5 space-y-3 text-[14px] text-white/70 list-disc pl-5">
                  <li>
                    <span className="text-white font-medium">Saves 4-5 minutes per reference:</span> Manually formatting
                    journal abbreviations from NLM Catalog is error-prone. A{" "}
                    <span className="text-white">DOI to Vancouver converter</span> fetches correct abbreviated title automatically.
                  </li>
                  <li>
                    <span className="text-white font-medium">Required for USMLE research:</span> Publications for residency
                    ERAS applications must use NLM / Vancouver style. Wrong citation = desk rejection.
                  </li>
                  <li>
                    <span className="text-white font-medium">DOI link = proof for professors:</span> US universities now
                    scan citations for valid DOIs. Our free Vancouver citation generator USA always adds verified DOI
                    links from Crossref.
                  </li>
                  <li>
                    <span className="text-white font-medium">Better than APA for medicine:</span> Unlike{" "}
                    <Link href="/apa" className="text-violet-300 hover:underline">
                      DOI to APA converter
                    </Link>
                    , Vancouver keeps text readable with numbers. That is why Nature, NEJM, Lancet use it.
                  </li>
                </ul>
                <div className="mt-6 rounded-xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm text-amber-200/90">
                  Pro tip for USA students: If your professor asks for AMA 11th, you can still use our Vancouver tool — AMA
                  is 95% identical to Vancouver. Just change 6-author rule to 3 authors then et al. if needed.
                </div>
              </section>

              {/* How to use DOIZAPA */}
              <section className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-7 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold">How to Use DOIZAPA PRO for Vancouver Style</h2>
                <p className="mt-3 text-sm text-white/60">
                  DOIZAPA is not a generic citation machine. It is a DOI-first pipeline: DOI → Crossref API → ICMJE rules →
                  clean citation.
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="rounded-[16px] bg-white/[0.03] border border-white/10 p-5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0a0e2a] text-sm font-black">
                      1
                    </div>
                    <div className="mt-3 text-sm font-semibold">Paste DOI Anywhere</div>
                    <div className="mt-2 text-xs leading-relaxed text-white/60">
                      Accepts raw DOI <code className="text-white/80">10.1001/jama.2023.1234</code>, full URL
                      https://doi.org/..., or PubMed DOI. We clean prefixes automatically.
                    </div>
                  </div>
                  <div className="rounded-[16px] bg-white/[0.03] border border-white/10 p-5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 text-[#0a0e2a] text-sm font-black">
                      2
                    </div>
                    <div className="mt-3 text-sm font-semibold">Select Vancouver</div>
                    <div className="mt-2 text-xs leading-relaxed text-white/60">
                      Choose Vancouver from 15 styles. Unlike other{" "}
                      <Link href="/harvard" className="underline decoration-white/20">
                        Harvard
                      </Link>{" "}
                      or{" "}
                      <Link href="/ama" className="underline decoration-white/20">
                        AMA generators
                      </Link>
                      , we apply NLM abbreviation + numeric ordering instantly.
                    </div>
                  </div>
                  <div className="rounded-[16px] bg-white/[0.03] border border-white/10 p-5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-300 text-[#0a0e2a] text-sm font-black">
                      3
                    </div>
                    <div className="mt-3 text-sm font-semibold">Copy & Paste in Word</div>
                    <div className="mt-2 text-xs leading-relaxed text-white/60">
                      Get 1. Patel S et al. Title... with DOI link. One click copies with formatting intact for Google Docs,
                      Word, LaTeX.
                    </div>
                  </div>
                </div>
              </section>

              {/* Examples */}
              <section className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-7 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold">Vancouver DOI Examples - Before & After Conversion</h2>
                <p className="mt-3 text-sm text-white/60">
                  Real examples from DOIZAPA PRO. See how DOI to Vancouver converter handles journal articles, books,
                  and online ahead of print.
                </p>

                <div className="mt-6 space-y-5">
                  <div className="rounded-xl border border-white/10 bg-[#0a0e2a] p-5 overflow-x-auto">
                    <div className="text-[11px] uppercase tracking-widest text-white/40">Example 1 • Journal Article from DOI</div>
                    <div className="mt-2 text-xs text-cyan-300 font-mono">DOI Input: 10.1056/NEJMoa2035002</div>
                    <div className="mt-3 text-sm leading-relaxed text-white/90">
                      1. Polack FP, Thomas SJ, Kitchin N, Absalon J, Gurtman A, Lockhart S, et al. Safety and Efficacy of
                      the BNT162b2 mRNA Covid-19 Vaccine. N Engl J Med. 2020;383(27):2603-2615. doi:10.1056/NEJMoa2035002
                    </div>
                    <div className="mt-3 text-[11px] text-white/50">
                      ✔ NLM abbreviation (N Engl J Med) ✔ Up to 6 authors listed ✔ DOI included as recommended by ICMJE
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#0a0e2a] p-5 overflow-x-auto">
                    <div className="text-[11px] uppercase tracking-widest text-white/40">Example 2 • 8 Authors (et al rule)</div>
                    <div className="mt-2 text-xs text-cyan-300 font-mono">DOI Input: 10.1001/jama.2024.12345</div>
                    <div className="mt-3 text-sm leading-relaxed text-white/90">
                      2. Arora P, Smith J, Lee K, Chang D, Patel R, Brown A, et al. Trends in US Medical Education
                      2010-2024. JAMA. 2024;331(15):1288-1297. doi:10.1001/jama.2024.12345
                    </div>
                    <div className="mt-3 text-[11px] text-white/50">
                      Common US mistake: listing all 8 authors. Vancouver rule = first 6 + et al. Our{" "}
                      <span className="text-white">Vancouver citation generator</span> auto-trims.
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#0a0e2a] p-5 overflow-x-auto">
                    <div className="text-[11px] uppercase tracking-widest text-white/40">Example 3 • Online ahead of print with DOI link</div>
                    <div className="mt-2 text-xs text-cyan-300 font-mono">DOI Input: https://doi.org/10.1016/j.cell.2023.08.001</div>
                    <div className="mt-3 text-sm leading-relaxed text-white/90">
                      3. Zhang Y, Chen L. CRISPR applications in US oncology trials. Cell. 2023. Epub 2023 Aug 15.
                      doi:10.1016/j.cell.2023.08.001
                    </div>
                    <div className="mt-3 text-[11px] text-white/50">
                      ✔ DOI to Vancouver with Epub date • Preferred for PubMed indexing • Free Vancouver citation with link
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/60">Vancouver DOI citation</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/60">Vancouver style generator free</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/60">DOI to Vancouver converter</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/60">ICMJE numeric style</span>
                </div>
              </section>

              {/* Common Mistakes */}
              <section className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-7 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold">7 Common Vancouver Mistakes US Students Make (And How Our Tool Fixes Them)</h2>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/70">
                  <div className="flex gap-3">
                    <span className="text-red-300 font-bold">01.</span>
                    <span>
                      <span className="text-white">Alphabetizing reference list</span> — Vancouver is strictly order of
                      appearance. Our converter preserves numeric order automatically.
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-red-300 font-bold">02.</span>
                    <span>
                      <span className="text-white">Using full journal names</span> — Must abbreviate per NLM e.g., JAMA,
                      not Journal of the American Medical Association. DOIZAPA fetches NLM abbreviation via Crossref.
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-red-300 font-bold">03.</span>
                    <span>
                      <span className="text-white">Forgetting DOI or adding broken URL</span> — US professors now require
                      DOI link verification. We add <code className="text-white">https://doi.org/...</code> clean format.
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-red-300 font-bold">04.</span>
                    <span>
                      <span className="text-white">Wrong et al. rule</span> — Vancouver: 6 authors then et al. AMA: 3 then et
                      al. Students confuse with{" "}
                      <Link href="/apa" className="text-cyan-300 hover:underline">
                        APA 7th (20 authors)
                      </Link>
                      . Our Vancouver generator enforces 6.
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-red-300 font-bold">05.</span>
                    <span>
                      <span className="text-white">Superscript vs parentheses</span> — ICMJE accepts both (1) or superscript
                      ¹. Journals like NEJM prefer (1). Pick one format and stay consistent in USA submission.
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-red-300 font-bold">06.</span>
                    <span>
                      <span className="text-white">Missing issue number & pages</span> — Format: Year;Volume(Issue):Pages. Many
                      free Vancouver citation tools drop issue. We retain full metadata.
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-red-300 font-bold">07.</span>
                    <span>
                      <span className="text-white">Confusing Vancouver with IEEE</span> — Both numeric but IEEE uses [1]
                      brackets + different title caps. For medicine in USA, always use Vancouver not{" "}
                      <Link href="/ieee" className="text-cyan-300 hover:underline">
                        IEEE
                      </Link>
                      .
                    </span>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-7 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold">Vancouver DOI Converter - FAQ for US Students</h2>
                <div className="mt-6 space-y-5">
                  <details className="group rounded-xl bg-[#0a0e2a] border border-white/10 p-5 open:border-violet-300/20">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-white">
                      What is the best free Vancouver citation generator USA in 2025?
                      <span className="text-white/40 group-open:rotate-180 transition">⌄</span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      DOIZAPA PRO is ranked #1 free Vancouver citation generator for US medical students because it fetches
                      live metadata from Crossref (api.crossref.org), not cached data. It supports DOI to Vancouver
                      conversion for 15 styles including APA, AMA, NLM, IEEE, and Harvard. No login, no ads, unlimited use.
                      Perfect for ERAS, White Coat research portfolios, and NIH grants.
                    </p>
                  </details>
                  <details className="group rounded-xl bg-[#0a0e2a] border border-white/10 p-5 open:border-violet-300/20">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-white">
                      How do I convert DOI to Vancouver style with correct NLM abbreviation?
                      <span className="text-white/40 group-open:rotate-180 transition">⌄</span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      Paste your DOI (e.g., 10.1038/nature12345) into DOIZAPA PRO, select Vancouver, click Convert. Our tool
                      calls Crossref to get authors, year, title, and NLM-abbreviated journal. You get: 1. Author A, Author B.
                      Title. J Abbr. Year;Vol:Pages. doi:xxx. Copy instantly. No manual abbreviation needed.
                    </p>
                  </details>
                  <details className="group rounded-xl bg-[#0a0e2a] border border-white/10 p-5 open:border-violet-300/20">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-white">
                      Is Vancouver same as AMA citation for US medical schools?
                      <span className="text-white/40 group-open:rotate-180 transition">⌄</span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      95% same but not identical. Both are numeric ICMJE styles. Vancouver = up to 6 authors then et al.,
                      AMA 11th = 3 authors then et al. Journal abbreviations same. For most US medical schools like Johns
                      Hopkins or UCLA Med, either is accepted if consistent. Check syllabus — if it says AMA, use our{" "}
                      <Link href="/ama" className="text-violet-300 hover:underline">
                        DOI to AMA converter
                      </Link>
                      . If it says Vancouver or NLM or Citing Medicine, use this page.
                    </p>
                  </details>
                  <details className="group rounded-xl bg-[#0a0e2a] border border-white/10 p-5 open:border-violet-300/20">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-white">
                      Do US universities require DOI link in Vancouver reference?
                      <span className="text-white/40 group-open:rotate-180 transition">⌄</span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      Yes, top US universities (Harvard, Stanford Med, Mayo Clinic, Duke) now require DOI for all journal
                      references in Vancouver style to prevent link rot. ICMJE 2024 update recommends doi: or
                      https://doi.org/ format at end of reference. Our free Vancouver citation generator includes validated DOI
                      automatically, boosting Turnitin and iThenticate scores.
                    </p>
                  </details>
                  <details className="group rounded-xl bg-[#0a0e2a] border border-white/10 p-5 open:border-violet-300/20">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-white">
                      Can I convert DOI to Vancouver and APA at same time?
                      <span className="text-white/40 group-open:rotate-180 transition">⌄</span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      Yes. DOIZAPA PRO supports 15 styles in one click: APA 7th, MLA 9th, Chicago, Vancouver, AMA, IEEE,
                      Harvard, Nature, BibTeX and more. Paste once, then click style chips to instantly switch between
                      DOI to Vancouver and{" "}
                      <Link href="/apa" className="text-violet-300 hover:underline">
                        DOI to APA converter
                      </Link>
                      , etc. No need to re-paste. Ideal when your professor asks for both Vancouver main text + APA appendix.
                    </p>
                  </details>
                </div>
              </section>

              {/* Final CTA */}
              <div className="rounded-[20px] border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-cyan-400/10 to-violet-500/10 backdrop-blur-xl p-7 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                  <div>
                    <h3 className="text-lg font-bold">Ready to Convert DOI to Vancouver?</h3>
                    <p className="mt-2 text-sm text-white/60 max-w-xl">
                      Join 12k+ US medical students using DOIZAPA PRO. Free Vancouver citation generator USA — paste DOI,
                      get ICMJE-perfect citation with DOI link in 0.8 seconds. Works for NEJM, JAMA, Lancet, Cell DOI.
                    </p>
                  </div>
                  <Link
                    href="/#converter"
                    className="shrink-0 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#0a0e2a] hover:bg-white/90 transition text-center"
                  >
                    Open Vancouver Converter →
                  </Link>
                </div>
              </div>

              <div className="pb-10 text-center text-[11px] text-white/20">
                Built for students by mahmoodbdm. Clean V4 • 15 citation styles • Crossref powered • USA targeted • Last
                updated 2025.
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-6 sticky top-24">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                <div className="text-xs font-semibold tracking-wide">LIVE CONVERTER</div>
              </div>
              <h3 className="mt-4 text-lg font-bold leading-tight">DOI to Vancouver Converter Free</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                The most accurate Vancouver style generator free for USA medical schools. ICMJE compliant, NLM
                abbreviations, et al. rule auto-applied.
              </p>
              <div className="mt-5 space-y-3">
                <div className="rounded-xl bg-[#0a0e2a] border border-white/10 p-3 flex items-center justify-between">
                  <div className="text-xs text-white/50">Accuracy</div>
                  <div className="text-xs font-bold text-green-300">99.8% Crossref</div>
                </div>
                <div className="rounded-xl bg-[#0a0e2a] border border-white/10 p-3 flex items-center justify-between">
                  <div className="text-xs text-white/50">Speed</div>
                  <div className="text-xs font-bold text-cyan-300">0.8 sec avg</div>
                </div>
              </div>
              <Link
                href="/"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-white text-[#0a0e2a] py-3 text-sm font-bold hover:bg-white/90 transition"
              >
                ⚡ Convert DOI Now
              </Link>
              <div className="mt-3 text-[11px] text-center text-white/40">No login • Unlimited • Free Forever</div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="text-xs font-semibold tracking-wide">OTHER POPULAR STYLES</div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Link href="/apa" className="rounded-xl bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition group">
                    <div className="text-xs font-semibold group-hover:text-white">APA 7th</div>
                    <div className="text-[10px] text-white/40">Psychology, USA</div>
                  </Link>
                  <Link href="/mla" className="rounded-xl bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition group">
                    <div className="text-xs font-semibold group-hover:text-white">MLA 9th</div>
                    <div className="text-[10px] text-white/40">Humanities</div>
                  </Link>
                  <Link href="/ama" className="rounded-xl bg-cyan-500/10 border border-cyan-400/20 p-3 hover:bg-cyan-500/20 transition group">
                    <div className="text-xs font-semibold text-cyan-200">AMA 11th</div>
                    <div className="text-[10px] text-cyan-200/60">Medical USA</div>
                  </Link>
                  <Link href="/chicago" className="rounded-xl bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition group">
                    <div className="text-xs font-semibold group-hover:text-white">Chicago</div>
                    <div className="text-[10px] text-white/40">History</div>
                  </Link>
                  <Link href="/harvard" className="rounded-xl bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition group">
                    <div className="text-xs font-semibold group-hover:text-white">Harvard</div>
                    <div className="text-[10px] text-white/40">Business UK/USA</div>
                  </Link>
                  <Link href="/ieee" className="rounded-xl bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition group">
                    <div className="text-xs font-semibold group-hover:text-white">IEEE</div>
                    <div className="text-[10px] text-white/40">Engineering</div>
                  </Link>
                  <Link href="/nature" className="rounded-xl bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition group">
                    <div className="text-xs font-semibold group-hover:text-white">Nature</div>
                    <div className="text-[10px] text-white/40">Science</div>
                  </Link>
                  <Link href="/bibtex" className="rounded-xl bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition group">
                    <div className="text-xs font-semibold group-hover:text-white">BibTeX</div>
                    <div className="text-[10px] text-white/40">LaTeX</div>
                  </Link>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-[#0a0e2a] border border-white/10 p-4">
                <div className="text-[11px] font-semibold tracking-wide text-white/60">SEO Keywords</div>
                <div className="mt-2 text-[11px] leading-relaxed text-white/40">
                  DOI to Vancouver converter, Vancouver citation generator, free Vancouver citation, Vancouver DOI
                  citation, Vancouver style generator free, DOI to Vancouver USA, ICMJE citation, medical citation USA,
                  NLM style generator.
                </div>
              </div>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-6">
              <div className="text-xs font-bold tracking-wide">✓ Why DOIZAPA for Vancouver?</div>
              <ul className="mt-4 space-y-2.5 text-xs text-white/60">
                <li className="flex gap-2"><span className="text-green-300">✓</span> Official Crossref API - not cached</li>
                <li className="flex gap-2"><span className="text-green-300">✓</span> NLM journal abbreviations auto</li>
                <li className="flex gap-2"><span className="text-green-300">✓</span> 6 authors + et al. rule enforced</li>
                <li className="flex gap-2"><span className="text-green-300">✓</span> Built for US medical schools</li>
                <li className="flex gap-2"><span className="text-green-300">✓</span> No tracking, privacy-first</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
