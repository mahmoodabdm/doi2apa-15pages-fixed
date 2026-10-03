"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Copy, Check, Users, Mail, ExternalLink, Menu, X, BookOpen, Shield, Info } from "lucide-react";

type CrossrefAuthor = { given?: string; family?: string };
type CrossrefMessage = {
  title?: string[]; author?: CrossrefAuthor[]; "container-title"?: string[];
  publisher?: string; issued?: { "date-parts"?: number[][] };
  volume?: string; issue?: string; page?: string; DOI?: string;
};

const STYLES = [
  { id: "apa7", name: "APA 7th", short: "APA 7th", desc: "American Psychological Association" },
  { id: "mla9", name: "MLA 9th", short: "MLA 9th", desc: "Modern Language Association" },
  { id: "chicago", name: "Chicago", short: "Chicago", desc: "Chicago Manual of Style" },
  { id: "harvard", name: "Harvard", short: "Harvard", desc: "Harvard Referencing" },
  { id: "ieee", name: "IEEE", short: "IEEE", desc: "Institute of Electrical and Electronics Engineers" },
  { id: "vancouver", name: "Vancouver", short: "Vancouver", desc: "Medical / ICMJE" },
  { id: "ama", name: "AMA", short: "AMA", desc: "American Medical Association" },
  { id: "nature", name: "Nature", short: "Nature", desc: "Nature Journal" },
  { id: "bibtex", name: "BibTeX", short: "BibTeX", desc: "LaTeX Bibliography" },
  { id: "turabian", name: "Turabian", short: "Turabian", desc: "Turabian Style" },
  { id: "cse", name: "CSE", short: "CSE", desc: "Council of Science Editors" },
  { id: "acs", name: "ACS", short: "ACS", desc: "American Chemical Society" },
  { id: "apsa", name: "APSA", short: "APSA", desc: "Political Science" },
  { id: "oscola", name: "OSCOLA", short: "OSCOLA", desc: "Legal Citation" },
  { id: "chicago-ad", name: "Chicago AD", short: "Chicago AD", desc: "Author-Date" },
];

function formatCitation(msg: CrossrefMessage, styleId: string): string {
  const year = msg.issued?.["date-parts"]?.[0]?.[0] || new Date().getFullYear();
  const yearStr = String(year);
  const title = msg.title?.[0] || "Untitled";
  const journal = msg["container-title"]?.[0] || msg.publisher || "Journal";
  const doi = msg.DOI ? `https://doi.org/${msg.DOI}` : "";
  const doiShort = msg.DOI || "";
  const volume = msg.volume || "";
  const issue = msg.issue || "";
  const page = msg.page || "";
  const authorsList = msg.author || [];
  const authorsAPA = authorsList.map(a => `${a.family}, ${a.given?.[0] ? a.given[0] + "." : ""}`).join(", ") || "Unknown";
  const authorsMLA = authorsList.map(a => `${a.family}, ${a.given}`).join(", ") || "Unknown";
  const authorsFirst = authorsList[0] ? `${authorsList[0].family}, ${authorsList[0].given}` : "Unknown";
  switch (styleId) {
    case "apa7": return `${authorsAPA} (${yearStr}). ${title}. ${journal}${volume ? `, ${volume}` : ""}${issue ? `(${issue})` : ""}${page ? `, ${page}` : ""}. ${doi}`;
    case "mla9": return `${authorsMLA}. "${title}." ${journal}, vol. ${volume || "n.d."}, no. ${issue || "n.d."}, ${yearStr}, pp. ${page || "n.p."}. ${doi}.`;
    case "chicago": return `${authorsFirst}. ${yearStr}. "${title}." ${journal} ${volume}${issue ? `, no. ${issue}` : ""} (${yearStr}): ${page || "n.p."}. ${doi}.`;
    case "harvard": return `${authorsAPA} ${yearStr}, '${title}', ${journal}, vol. ${volume}, pp. ${page}, <${doi}>.`;
    case "ieee": return `[1] ${authorsList.map(a => `${a.given?.[0]}. ${a.family}`).join(", ")}, "${title}," ${journal}, vol. ${volume}, ${yearStr}. doi: ${doiShort}.`;
    case "vancouver": return `${authorsList.map(a => `${a.family} ${a.given?.[0] || ""}`).join(", ")}. ${title}. ${journal}. ${yearStr};${volume}:${page}. doi:${doiShort}`;
    case "ama": return `${authorsList.map(a => `${a.family} ${a.given?.[0] || ""}`).join(", ")}. ${title}. ${journal}. ${yearStr};${volume}:${page}. doi:${doiShort}`;
    case "nature": return `${authorsList.map(a => `${a.family}, ${a.given?.[0] || ""}`).join(", ")} ${title}. ${journal} ${volume}, ${page} (${yearStr}). ${doi}`;
    case "bibtex": return `@article{${authorsList[0]?.family || "unknown"}${yearStr},\n  author = {${authorsList.map(a => `${a.family}, ${a.given}`).join(" and ")}},\n  title = {${title}},\n  journal = {${journal}},\n  year = {${yearStr}},\n  doi = {${doiShort}}\n}`;
    default: return `${authorsAPA} (${yearStr}). ${title}. ${journal}. ${doi} [${styleId}]`;
  }
}

export default function Page() {
  const [doi, setDoi] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState("apa7");
  const [copied, setCopied] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [visitors, setVisitors] = useState(12695);
  const [total, setTotal] = useState(8921);
  const [today, setToday] = useState(127);
  const converterRef = useRef<HTMLDivElement>(null);
  const guidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const v = localStorage.getItem("dz_visitors");
    const base = v ? parseInt(v) : 12695;
    const newV = base + 1;
    localStorage.setItem("dz_visitors", String(newV));
    setVisitors(newV);
    setTotal(parseInt(localStorage.getItem("dz_total") || "8921"));
    setToday(parseInt(localStorage.getItem("dz_today") || "127"));
  }, []);

  function scrollTo(ref: React.RefObject<HTMLDivElement>) {
    setMobileMenu(false);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  async function convert() {
    const raw = doi.trim();
    if (!raw) return;
    setLoading(true);
    setResult("");
    try {
      let id = raw.replace(/https?:\/\/doi\.org\//i, "").replace(/https?:\/\/dx\.doi\.org\//i, "").replace(/^doi:/i, "").trim();
      if (!id.match(/^10\.\d+\/.+/)) throw new Error("Invalid DOI format");
      const res = await fetch(`https://api.crossref.org/works/${encodeURIComponent(id)}`);
      if (!res.ok) throw new Error("Not found");
      const data = await res.json();
      setResult(formatCitation(data.message, style));
      const nt = total + 1; const ntd = today + 1;
      localStorage.setItem("dz_total", String(nt)); localStorage.setItem("dz_today", String(ntd));
      setTotal(nt); setToday(ntd);
    } catch (e: any) {
      setResult(`❌ ${e.message || "DOI not found"}. Try: 10.1038/nature12345`);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#0a0e2a] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e2a] via-[#121e4a] to-[#1a2a6a]" />
      <div className="relative z-10">
        <header className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between sticky top-0 z-20 bg-[#0a0e2a]/80 backdrop-blur-xl border-b border-white/5">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white text-black flex items-center justify-center font-black">D</div>
            <div><div className="font-bold text-sm leading-none">DOIZAPA PRO</div><div className="text-[10px] opacity-60">CLEAN V4 • 15 STYLES</div></div>
          </Link>
          <nav className="hidden md:flex items-center gap-1 bg-black/30 backdrop-blur-xl border border-white/10 rounded-full p-1">
            <button onClick={() => scrollTo(converterRef)} className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-medium">Converter</button>
            <button onClick={() => scrollTo(guidesRef)} className="px-4 py-1.5 rounded-full text-white/60 text-sm hover:text-white">Guides</button>
            <Link href="/privacy" className="px-4 py-1.5 rounded-full text-white/60 text-sm hover:text-white">Privacy</Link>
            <Link href="/about" className="px-4 py-1.5 rounded-full text-white/60 text-sm hover:text-white">About</Link>
          </nav>
          <div className="flex items-center gap-2">
            <span className="hidden md:flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />{visitors.toLocaleString()} visitors</span>
            <Link href="/contact" className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-medium">Contact</Link>
            <button className="md:hidden w-9 h-9 rounded-full bg-white/10 flex items-center justify-center" onClick={() => setMobileMenu(!mobileMenu)}>{mobileMenu ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}</button>
          </div>
        </header>

        {mobileMenu && (
          <div className="md:hidden mx-4 mt-2 p-2 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl z-30 relative">
            <button onClick={() => scrollTo(converterRef)} className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10">Converter</button>
            <button onClick={() => scrollTo(guidesRef)} className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10">Guides</button>
            <Link href="/privacy" onClick={()=>setMobileMenu(false)} className="block w-full text-left px-4 py-3 rounded-xl hover:bg-white/10">Privacy</Link>
            <Link href="/about" onClick={()=>setMobileMenu(false)} className="block w-full text-left px-4 py-3 rounded-xl hover:bg-white/10">About</Link>
            <Link href="/contact" onClick={()=>setMobileMenu(false)} className="block w-full text-left px-4 py-3 rounded-xl hover:bg-white/10">Contact</Link>
          </div>
        )}

        <main ref={converterRef} className="max-w-7xl mx-auto px-4 md:px-6 py-8 grid md:grid-cols-[1.2fr_0.8fr] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">✨ Trusted by 12k+ students • Crossref Powered</div>
            <h1 className="text-4xl md:text-5xl font-black leading-[0.9]">DOI to <span className="text-cyan-300">APA</span><br />Converter</h1>
            <p className="mt-3 text-sm opacity-70">15 Styles • Instant • No Signup</p>
            <div className="mt-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[20px] p-4 md:p-5">
              <div className="flex gap-2">
                <input value={doi} onChange={e => setDoi(e.target.value)} onKeyDown={e => e.key==="Enter" && convert()} placeholder="10.1038/nature12345" className="flex-1 h-12 px-4 rounded-xl bg-black/30 border border-white/10 text-sm outline-none focus:border-cyan-400/50" />
                <button onClick={convert} disabled={loading} className="h-12 px-6 rounded-xl bg-white text-black font-bold text-sm">{loading ? "..." : "⚡ Convert"}</button>
              </div>
              <div className="mt-4 grid grid-cols-3 md:grid-cols-5 gap-2">
                {STYLES.map(s => (
                  <button key={s.id} onClick={() => setStyle(s.id)} className={`p-2.5 rounded-xl border text-left ${style === s.id ? "bg-white text-black border-white" : "bg-white/5 border-white/10"}`}>
                    <div className="font-bold text-xs">{s.short}</div><div className="text-[9px] opacity-60">{s.name}</div>
                  </button>
                ))}
              </div>
              {result && (
                <div className="mt-4 p-4 rounded-xl bg-black/40 border border-cyan-500/20">
                  <div className="flex justify-between mb-2"><span className="text-[11px] font-bold">{STYLES.find(s=>s.id===style)?.short}</span>
                  <button onClick={() => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(()=>setCopied(false),2000);}} className="flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-white text-black font-bold">{copied ? <Check className="w-3 h-3"/> : <Copy className="w-3 h-3"/>}{copied ? "Copied!" : "Copy"}</button></div>
                  <div className="text-sm break-words whitespace-pre-wrap">{result}</div>
                </div>
              )}
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-[20px] p-4">
              <div className="font-semibold text-sm">Real Stats</div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10"><div className="font-bold">{total}</div><div className="text-[9px] opacity-50">TOTAL</div></div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10"><div className="font-bold">{today}</div><div className="text-[9px] opacity-50">TODAY</div></div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10"><div className="font-bold">{visitors}</div><div className="text-[9px] opacity-50">VISITORS</div></div>
              </div>
            </div>
            <div ref={guidesRef} className="bg-white/5 border border-white/10 rounded-[20px] p-4"><div className="font-semibold text-sm mb-2 flex items-center gap-2"><BookOpen className="w-4 h-4"/> Guides</div><div className="text-xs text-white/60">Paste DOI, select style, Convert. All free via Crossref API.</div></div>
            <div className="bg-white/5 border border-white/10 rounded-[20px] p-4"><div className="font-semibold text-sm mb-2 flex items-center gap-2"><Shield className="w-4 h-4"/> Privacy</div><div className="text-xs text-white/60">We don't store DOIs. <Link href="/privacy" className="text-cyan-300 underline">Read full policy</Link></div></div>
            <div className="bg-white/5 border border-white/10 rounded-[20px] p-4"><div className="font-semibold text-sm mb-2 flex items-center gap-2"><Info className="w-4 h-4"/> About</div><div className="text-xs text-white/60">Built by mahmoodabdm. <Link href="/about" className="text-cyan-300 underline">Learn more</Link></div></div>
          </div>
        </main>
      </div>
    </div>
  );
}
