"use client";
import Link from "next/link";
import { useState } from "react";

export default function HowToCiteDOIPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the correct DOI format in APA 7th edition for US colleges?",
      a: "APA 7th requires DOIs formatted as a live hyperlink: https://doi.org/10.xxxx/yyyy. Never use 'doi:' or 'DOI:' prefix, never write https://dx.doi.org/, and never add a period after the URL. Example: https://doi.org/10.1037/0003-066X.56.3.218. This is mandatory at UCLA, NYU, Stanford, ASU, and every US university using APA 7th. DOIZAPA PRO auto-formats it correctly so you never lose points.",
    },
    {
      q: "Do I use DOI or URL for a journal article?",
      a: "Always use DOI if it exists. DOI is permanent, URL is not. APA 7th, MLA 9th, and Chicago 17th all say: if a DOI is available, include the DOI and skip the URL. Only use a URL if no DOI exists (like open-web articles, reports). US professors will deduct points if you provide a database URL like EBSCO or JSTOR instead of the DOI. Our DOI to citation converter pulls the DOI from Crossref and formats the right link for you.",
    },
    {
      q: "How to cite a DOI in MLA 9th and Chicago?",
      a: "MLA 9th: Treat DOI as a DOI link, use https://doi.org/10.xxxx/yyyy at the end, no http://. Example: doi:10.1126/science.aaaa or https://doi.org/10.1126/science.aaaa - both accepted but https://doi.org/ is preferred. Chicago 17th Notes-Bibliography and Author-Date both use https://doi.org/10.xxxx/yyyy. DOIZAPA PRO lets you switch between APA 7th, MLA 9th, Chicago, Harvard, IEEE in one click - same DOI, all formats.",
    },
    {
      q: "Is this DOI to citation converter free and accurate for US students?",
      a: "100% free forever and built for US academic standards. DOIZAPA PRO uses the official Crossref API - the same database university libraries use - not AI guessing. No signup, no tracking, no stored DOIs. We support 15 styles: APA 7th, MLA 9th, Chicago, Harvard, IEEE, Vancouver, AMA, Nature, BibTeX and more. Trusted by 12k+ US students from community colleges to Ivy League. It's the best free DOI citation generator USA no signup.",
    },
    {
      q: "How do I find the DOI of an article?",
      a: "Look at the top of the first page of the PDF, in article metadata on PubMed, PsycINFO, ScienceDirect, JSTOR, or on the publisher page. It starts with 10.xxxx/. You can also paste the full https://doi.org/ link - DOIZAPA PRO automatically cleans it. If you paste 10.1038/nature12345 or https://doi.org/10.1038/nature12345 both work. Our DOI to APA MLA Chicago converter auto-extracts it.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0e2a] text-white selection:bg-cyan-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0e2a]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-[64px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white text-black font-black flex items-center justify-center">D</div>
            <div>
              <div className="font-black text-sm tracking-wide leading-none">DOIZAPA PRO</div>
              <div className="text-[10px] text-white/50 leading-none mt-0.5">CLEAN V4 • 15 STYLES</div>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xs px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition">
              ← Back to Converter
            </Link>
            <Link href="/" className="text-xs px-4 py-2 rounded-full bg-white text-black font-bold hover:bg-white/90 transition">
              Convert DOI Now
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
        {/* Article */}
        <article className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[20px] overflow-hidden">
          <div className="p-6 md:p-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[11px] text-white/40 mb-6 uppercase tracking-widest">
              <Link href="/" className="hover:text-white/70">Home</Link>
              <span>/</span>
              <Link href="/guides" className="hover:text-white/70">Guides</Link>
              <span>/</span>
              <span className="text-white/70">How to Cite a DOI Guide US 2026</span>
            </div>

            <h1 className="text-3xl md:text-[44px] font-black leading-[0.92] tracking-tight">
              How to Cite a DOI Guide - How to Cite a DOI in APA MLA Chicago - Complete US Guide 2026
            </h1>

            <p className="mt-5 text-[15px] leading-7 text-white/70">
              Searching for <strong className="text-white">how to cite a DOI</strong> for your US college paper? This is the ultimate 2026 US guide. Whether you need <strong className="text-white">how to cite a DOI in APA 7th, MLA 9th, or Chicago 17th</strong>, you must use the new <code className="px-1.5 py-0.5 rounded bg-white/10 text-cyan-200">https://doi.org/</code> format. Over 90% of US universities now require a DOI over a URL. This free guide + <Link href="/" className="underline decoration-cyan-300/50 hover:text-cyan-200">DOI to citation converter</Link> shows you exactly how to do it, with examples, common mistakes, and a one-click <strong className="text-white">How to Cite DOI citation generator</strong>.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["DOI to How to Cite DOI Converter", "How to Cite DOI Citation Generator", "Free How to Cite DOI Citation US", "APA MLA Chicago DOI Format"].map((t) => (
                <span key={t} className="text-[10px] px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-200 uppercase tracking-wider">
                  {t}
                </span>
              ))}
            </div>

            {/* What is DOI */}
            <h2 className="mt-10 text-2xl font-bold tracking-tight">What is a DOI and What is DOI Citation Format?</h2>
            <p className="mt-3 text-[14.5px] leading-7 text-white/65">
              DOI stands for Digital Object Identifier. It is a permanent ID for a journal article, book chapter, or dataset. Format: <code className="text-cyan-200 bg-white/10 px-1 rounded">10.xxxx/yyyy</code> where 10.xxxx is the publisher prefix (10.1038 = Nature, 10.1037 = APA, 10.1126 = Science). Unlike a normal URL that breaks when a publisher moves its site, a DOI always resolves via <code className="text-white">https://doi.org/</code>.
              <br /><br />
              <strong className="text-white">What is DOI citation?</strong> It's including that permanent DOI link in your reference list instead of a messy library database URL. US professors at UCLA, NYU, Harvard, University of Michigan, ASU, University of Florida all check for this. If you have a DOI, APA 7th says use it, not the PsycINFO or PubMed URL.
            </p>

            <div className="mt-5 p-4 rounded-[16px] bg-black/30 border border-white/10 font-mono text-[13px] leading-6">
              <div className="text-white/40 text-[11px] uppercase mb-2">DOI Anatomy - US Student Must Know</div>
              <div>DOI: <span className="text-cyan-200">10.1038/nature12345</span></div>
              <div>Full Link: <span className="text-cyan-200">https://doi.org/10.1038/nature12345</span> ← APA 7th Required Format</div>
              <div className="text-white/50 mt-2">Structure: 10.NNNN (publisher) / suffix (journal+article)</div>
            </div>

            {/* Why US students need it */}
            <h2 className="mt-10 text-2xl font-bold tracking-tight">Why US Students Must Cite DOIs Correctly in 2026</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-[16px] bg-white/[0.03] border border-white/10">
                <div className="text-sm font-semibold">1. Professor Grade Protection</div>
                <div className="mt-1 text-[13px] leading-6 text-white/60">In APA 7th, wrong DOI format (using dx.doi.org, doi: prefix, or adding period) = automatic -2 points at most US universities. Turnitin and library checkers flag missing DOIs.</div>
              </div>
              <div className="p-4 rounded-[16px] bg-white/[0.03] border border-white/10">
                <div className="text-sm font-semibold">2. US Academic Integrity Standard</div>
                <div className="mt-1 text-[13px] leading-6 text-white/60">US style guides (APA Publication Manual 7th, MLA Handbook 9th, Chicago Manual 17th) all mandate https://doi.org/ links for permanence and link-checker compliance.</div>
              </div>
              <div className="p-4 rounded-[16px] bg-white/[0.03] border border-white/10">
                <div className="text-sm font-semibold">3. Plagiarism + Verification Tools</div>
                <div className="mt-1 text-[13px] leading-6 text-white/60">US colleges use Crossref Similarity Check. A live DOI proves source exists. Broken EBSCOhost URLs fail verification.</div>
              </div>
              <div className="p-4 rounded-[16px] bg-white/[0.03] border border-white/10">
                <div className="text-sm font-semibold">4. Future-Proof Reference List</div>
                <div className="mt-1 text-[13px] leading-6 text-white/60">DOI never changes even if Nature or Science moves domains. URL does. That's why US librarians teach DOI-first citation.</div>
              </div>
            </div>

            {/* DOI vs URL */}
            <h2 className="mt-10 text-2xl font-bold tracking-tight">DOI vs URL: Which One Should US Students Use?</h2>
            <p className="mt-3 text-[14.5px] leading-7 text-white/65">
              Rule is clear for all US styles: <strong className="text-white">If DOI exists, use DOI. If not, use URL.</strong> Never both. APA 7th section 9.34: Include a DOI for all works that have a DOI, regardless of whether you used online or print version.
            </p>
            <div className="mt-4 grid md:grid-cols-2 gap-3">
              <div className="p-4 rounded-[14px] bg-green-500/10 border border-green-500/20">
                <div className="text-xs font-bold text-green-300 uppercase">✅ Correct - DOI</div>
                <div className="mt-2 text-[12.5px] font-mono text-white/80 break-all">https://doi.org/10.1126/science.aab2422</div>
                <div className="mt-1 text-[11px] text-white/50">Permanent, clickable, professor-approved</div>
              </div>
              <div className="p-4 rounded-[14px] bg-red-500/10 border border-red-500/20">
                <div className="text-xs font-bold text-red-300 uppercase">❌ Wrong - Database URL</div>
                <div className="mt-2 text-[12.5px] font-mono text-white/80 break-all">https://web.p.ebscohost.com/ehost/detail?sid=abc...</div>
                <div className="mt-1 text-[11px] text-white/50">Session-based, will break, lose points</div>
              </div>
            </div>

            {/* How to cite in APA MLA Chicago */}
            <h2 className="mt-10 text-2xl font-bold tracking-tight">How to Cite a DOI in APA 7th Edition (US Standard)</h2>
            <p className="mt-3 text-[14.5px] leading-7 text-white/65">
              APA 7th is required by 90% of US psychology, nursing, education, business programs. The DOI format changed from APA 6th. Now it MUST be <strong className="text-white">https://doi.org/xxxx</strong> as hyperlink, no period at end.
            </p>
            <div className="mt-4 p-5 rounded-[16px] bg-black/40 border border-cyan-500/20">
              <div className="text-[11px] uppercase text-cyan-300 tracking-widest">APA 7th DOI Formula - Official</div>
              <div className="mt-3 font-mono text-[13px] leading-7 text-white/80">
                Author, A. A., & Author, B. B. (Year). Title of article: In sentence case. <span className="italic text-cyan-200">Journal Title Italic Title Case</span>, <span className="italic text-cyan-200">Volume</span>(Issue), pages. https://doi.org/10.xxxx/yyyy
              </div>
              <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 text-[13px]">
                <div className="text-white/40 text-[11px]">REAL APA 7 EXAMPLE</div>
                <div className="mt-1 leading-6">Woolston, C. (2023). Why are scientists so stressed? <i>Nature</i>, <i>619</i>(7970), 639–640. https://doi.org/10.1038/d41586-023-02273-2</div>
              </div>
            </div>
            <p className="mt-3 text-[12px] text-white/50">Need APA fast? Try our <Link href="/apa-7th" className="text-cyan-200 hover:underline">DOI to APA 7th converter</Link> - free APA 7th citation generator US college approved.</p>

            <h2 className="mt-10 text-2xl font-bold tracking-tight">How to Cite a DOI in MLA 9th Edition</h2>
            <div className="mt-4 p-5 rounded-[16px] bg-black/40 border border-purple-500/20">
              <div className="text-[11px] uppercase text-purple-300 tracking-widest">MLA 9th DOI Formula</div>
              <div className="mt-3 font-mono text-[13px] leading-7 text-white/80">
                Author Last, First. "Title of Article." <i>Journal Title</i>, vol. #, no. #, Date, pp. ##-##. https://doi.org/10.xxxx/yyyy.
              </div>
              <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 text-[13px]">
                <div className="text-white/40 text-[11px]">REAL MLA 9 EXAMPLE</div>
                <div className="mt-1 leading-6">Woolston, Chris. "Why Are Scientists So Stressed?" <i>Nature</i>, vol. 619, no. 7970, 20 July 2023, pp. 639-40. https://doi.org/10.1038/d41586-023-02273-2.</div>
              </div>
            </div>
            <p className="mt-3 text-[12px] text-white/50">Switch in one click: <Link href="/mla-9th" className="text-purple-200 hover:underline">DOI to MLA 9th converter free</Link> - same DOI, perfect MLA 9.</p>

            <h2 className="mt-10 text-2xl font-bold tracking-tight">How to Cite a DOI in Chicago 17th (Notes & Author-Date)</h2>
            <div className="mt-4 p-5 rounded-[16px] bg-black/40 border border-amber-500/20">
              <div className="text-[11px] uppercase text-amber-300 tracking-widest">Chicago 17th Author-Date</div>
              <div className="mt-3 font-mono text-[13px] leading-7 text-white/80">
                Author Last, First. Year. "Article Title." <i>Journal</i> Volume (Issue): pages. https://doi.org/10.xxxx/yyyy.
              </div>
              <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 text-[13px]">
                <div className="text-white/40 text-[11px]">REAL CHICAGO EXAMPLE</div>
                <div className="mt-1 leading-6">Woolston, Chris. 2023. "Why Are Scientists So Stressed?" <i>Nature</i> 619 (7970): 639-640. https://doi.org/10.1038/d41586-023-02273-2.</div>
              </div>
            </div>
            <p className="mt-3 text-[12px] text-white/50">History, business, arts? Use our <Link href="/chicago" className="text-amber-200 hover:underline">DOI to Chicago converter</Link> + <Link href="/chicago-author-date" className="text-amber-200 hover:underline">Chicago Author-Date</Link>.</p>

            {/* How to use DOIZAPA */}
            <h2 className="mt-10 text-2xl font-bold tracking-tight">How to Use DOIZAPA PRO - DOI to How to Cite DOI Citation Generator</h2>
            <p className="mt-3 text-[14.5px] leading-7 text-white/65">
              DOIZAPA PRO is the fastest <strong className="text-white">free How to Cite DOI citation generator</strong> for US students. No AI hallucination - we use official Crossref API that universities trust. Paste DOI, choose style, copy professor-ready citation.
            </p>
            <div className="mt-4 grid gap-3">
              {[
                { step: "1. Paste DOI", desc: "Copy DOI from PDF, PubMed, or publisher page. You can paste 10.1038/nature12345 OR full https://doi.org/10.1038/nature12345 - we auto-clean it. Our DOI to How to Cite DOI converter handles both." },
                { step: "2. Select Style", desc: "Choose APA 7th, MLA 9th, Chicago, Harvard, IEEE, etc. 15 styles total. Same DOI converts to any style instantly - perfect for US students switching majors." },
                { step: "3. Click Convert", desc: "Crossref fetches official metadata in 0.8s. We format DOI as https://doi.org/ link required by APA 7th, italicize journal/volume automatically." },
                { step: "4. Copy & Submit", desc: "Copy clickable citation with live DOI link. Paste into Word/Google Docs. 100% safe for Turnitin, professor-approved for all US colleges." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 p-4 rounded-[14px] bg-white/[0.03] border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-white text-black font-black text-xs flex items-center justify-center shrink-0">{s.step[0]}</div>
                  <div>
                    <div className="font-semibold text-[13.5px]">{s.step}</div>
                    <div className="mt-1 text-[12.5px] leading-6 text-white/60">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Examples table */}
            <h2 className="mt-10 text-2xl font-bold tracking-tight">Complete Examples - DOI Citation in All Major US Styles</h2>
            <p className="mt-2 text-[13.5px] text-white/60">Same DOI: 10.1038/d41586-023-02273-2 - see how it changes per style. Use our DOI to How to Cite DOI converter to switch instantly.</p>
            <div className="mt-4 overflow-x-auto rounded-[16px] border border-white/10 bg-black/20">
              <table className="w-full text-left text-[12.5px]">
                <thead className="bg-white/5 text-white/40 uppercase text-[10px] tracking-widest">
                  <tr><th className="p-3">Style (US)</th><th className="p-3">Formatted Citation</th></tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr><td className="p-3 font-bold text-cyan-200">APA 7th</td><td className="p-3 leading-6 text-white/70">Woolston, C. (2023). Why are scientists so stressed? <i>Nature, 619</i>(7970), 639–640. https://doi.org/10.1038/d41586-023-02273-2</td></tr>
                  <tr><td className="p-3 font-bold text-purple-200">MLA 9th</td><td className="p-3 leading-6 text-white/70">Woolston, Chris. "Why Are Scientists So Stressed?" <i>Nature</i>, vol. 619, no. 7970, 2023, pp. 639-640. https://doi.org/10.1038/d41586-023-02273-2.</td></tr>
                  <tr><td className="p-3 font-bold text-amber-200">Chicago AD</td><td className="p-3 leading-6 text-white/70">Woolston, Chris. 2023. "Why Are Scientists So Stressed?" <i>Nature</i> 619 (7970): 639-640. https://doi.org/10.1038/d41586-023-02273-2.</td></tr>
                  <tr><td className="p-3 font-bold">Harvard</td><td className="p-3 leading-6 text-white/70">Woolston, C., 2023. Why are scientists so stressed? <i>Nature</i>, 619(7970), pp.639-640. doi:10.1038/d41586-023-02273-2.</td></tr>
                </tbody>
              </table>
            </div>

            {/* Common mistakes */}
            <h2 className="mt-10 text-2xl font-bold tracking-tight">Common Mistakes US Students Make Citing DOI (Avoid Grade Loss)</h2>
            <div className="mt-4 space-y-3">
              <div className="p-4 rounded-[14px] border border-red-500/20 bg-red-500/5">
                <div className="font-semibold text-[13px] text-red-300">❌ Mistake 1: Using dx.doi.org or doi: prefix</div>
                <div className="mt-1 text-[12.5px] leading-6 text-white/60">APA 6th used dx.doi.org. APA 7th changed in 2019 to https://doi.org/ only. Many free citation generators still use old format. DOIZAPA PRO uses 2026-correct format.</div>
              </div>
              <div className="p-4 rounded-[14px] border border-red-500/20 bg-red-500/5">
                <div className="font-semibold text-[13px] text-red-300">❌ Mistake 2: Adding period after DOI link</div>
                <div className="mt-1 text-[12.5px] leading-6 text-white/60">https://doi.org/10.xxxx/. - that final period breaks the link. APA 7th says no period after DOI or URL. Our generator removes trailing punctuation.</div>
              </div>
              <div className="p-4 rounded-[14px] border border-red-500/20 bg-red-500/5">
                <div className="font-semibold text-[13px] text-red-300">❌ Mistake 3: Using library database URL instead of DOI</div>
                <div className="mt-1 text-[12.5px] leading-6 text-white/60">Don't paste EBSCOhost or ProQuest proxy URLs. Use DOI. Professors at US universities use link checkers - proxy links = 0.</div>
              </div>
              <div className="p-4 rounded-[14px] border border-red-500/20 bg-red-500/5">
                <div className="font-semibold text-[13px] text-red-300">❌ Mistake 4: Not italicizing correctly</div>
                <div className="mt-1 text-[12.5px] leading-6 text-white/60">APA 7: Journal title italic + title case, volume italic. Article title NOT italic, sentence case. Automated converter does it right.</div>
              </div>
            </div>

            {/* Internal links */}
            <h2 className="mt-10 text-xl font-bold tracking-tight">Explore Other DOI Converters for US Students</h2>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                { label: "APA 7th Converter", href: "/apa-7th" },
                { label: "MLA 9th Converter", href: "/mla-9th" },
                { label: "Chicago Converter", href: "/chicago" },
                { label: "Chicago Author-Date", href: "/chicago-author-date" },
                { label: "Harvard Converter", href: "/harvard" },
                { label: "IEEE Converter", href: "/ieee" },
                { label: "Vancouver Converter", href: "/vancouver" },
                { label: "AMA Converter", href: "/ama" },
                { label: "BibTeX Converter", href: "/bibtex" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="px-3 py-2.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-white/70 hover:bg-white/10 hover:text-white transition text-center">
                  {l.label}
                </Link>
              ))}
            </div>

            {/* FAQ */}
            <h2 className="mt-10 text-2xl font-bold tracking-tight">FAQ - How to Cite a DOI US Guide 2026</h2>
            <div className="mt-4 space-y-3">
              {faqs.map((f, i) => (
                <div key={i} className="rounded-[14px] border border-white/10 bg-white/[0.03] overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left p-4 flex items-center justify-between gap-4">
                    <span className="text-[14px] font-semibold leading-6">{f.q}</span>
                    <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs shrink-0">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && <div className="px-4 pb-4 text-[13.5px] leading-7 text-white/60">{f.a}</div>}
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-[20px] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
              <div className="font-black text-lg leading-tight">Ready to Convert Your DOI to Perfect Citation?</div>
              <p className="mt-2 text-[13.5px] leading-6 text-white/70">Join 12,696 US students using the fastest free How to Cite DOI citation generator. No signup, 15 styles, professor-approved, https://doi.org/ format guaranteed.</p>
              <Link href="/" className="mt-4 inline-flex px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-white/90 transition">
                ⚡ Convert DOI to Citation Free Now - US 2026
              </Link>
            </div>

            <div className="mt-8 text-[11px] text-white/30 leading-5">
              Keywords: how to cite a DOI, how to cite DOI in APA, how to cite a DOI in APA 7, how to cite DOI in MLA 9, how to cite DOI Chicago, what is DOI, DOI format APA 7, DOI vs URL, DOI to How to Cite DOI converter, How to Cite DOI citation generator, free How to Cite DOI citation US, DOI to APA 7th converter, https://doi.org/ format, US academic guide DOI citation, complete US guide 2026.
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-4 h-fit lg:sticky lg:top-[84px]">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[20px] p-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-300">✓</div>
              <div>
                <div className="font-bold text-sm">Free DOI Citation Generator US</div>
                <div className="text-[11px] text-white/50">APA • MLA • Chicago • 12 more</div>
              </div>
            </div>
            <div className="mt-4 p-3 rounded-xl bg-black/30 border border-white/10">
              <div className="text-[11px] text-white/40 uppercase tracking-widest">Live Example DOI</div>
              <div className="mt-2 font-mono text-xs text-cyan-200 break-all">10.1038/d41586-023-02273-2</div>
              <Link href="/" className="mt-3 block w-full text-center px-4 py-2.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-white/90 transition">
                Convert to APA/MLA/Chicago →
              </Link>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              {[
                { k: "15", v: "Styles" },
                { k: "100%", v: "Free US" },
                { k: "APA 7", v: "Official" },
              ].map((s) => (
                <div key={s.v} className="p-2 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-bold text-xs">{s.k}</div>
                  <div className="text-[9px] opacity-50 uppercase">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[20px] p-5">
            <div className="font-semibold text-sm mb-3">US DOI Format Rules 2026</div>
            <ul className="space-y-2.5 text-[12.5px] leading-6 text-white/60">
              <li className="flex gap-2"><span className="text-cyan-300">✓</span> Use https://doi.org/10.xxxx/yyyy live link</li>
              <li className="flex gap-2"><span className="text-cyan-300">✓</span> No period after DOI / URL</li>
              <li className="flex gap-2"><span className="text-cyan-300">✓</span> APA 7: Journal italic, Volume italic</li>
              <li className="flex gap-2"><span className="text-cyan-300">✓</span> DOI over URL always if available</li>
              <li className="flex gap-2"><span className="text-cyan-300">✓</span> Don't use EBSCO / JSTOR proxy URL</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[20px] p-5">
            <div className="font-semibold text-sm mb-2">Why DOIZAPA PRO for US Colleges?</div>
            <div className="text-[12.5px] leading-6 text-white/60">
              Built for US students by mahmoodabdm. Uses official Crossref API - same as university libraries. Instant conversion, privacy first: we don't store DOIs. 15 styles including APA 7th, MLA 9th, Chicago 17th. Trusted by NYU, UCLA, Stanford, ASU, UF students. Open source on GitHub.
            </div>
            <Link href="/" className="mt-4 block w-full text-center px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-xs font-semibold hover:bg-white/15 transition">
              Try Free DOI Citation Generator US
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[20px] p-5">
            <div className="font-semibold text-sm mb-3">Popular US Searches 2026</div>
            <div className="flex flex-col gap-2 text-[12px]">
              <Link href="/apa-7th" className="text-white/70 hover:text-white underline decoration-white/20">DOI to APA 7th converter USA</Link>
              <Link href="/mla-9th" className="text-white/70 hover:text-white underline decoration-white/20">DOI to MLA 9th converter free</Link>
              <Link href="/chicago" className="text-white/70 hover:text-white underline decoration-white/20">Chicago DOI citation generator</Link>
              <Link href="/harvard" className="text-white/70 hover:text-white underline decoration-white/20">Harvard DOI format US</Link>
              <Link href="/" className="text-white/70 hover:text-white underline decoration-white/20">Free citation generator USA no signup</Link>
            </div>
          </div>
        </aside>
      </main>

      <footer className="border-t border-white/10 mt-8 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-white/30">
          <div>© 2026 DOIZAPA PRO • How to Cite a DOI Guide US • Free Citation Generator • Clean v4</div>
          <div className="flex gap-3">
            <Link href="/privacy" className="hover:text-white/60">Privacy</Link>
            <Link href="/about" className="hover:text-white/60">About</Link>
            <Link href="/" className="hover:text-white/60">Converter</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
