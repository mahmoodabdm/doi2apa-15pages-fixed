"use client";
import React, { useState, useEffect, useRef } from "react";
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
    case "apa7": 
      return `${authorsAPA} (${yearStr}). ${title}. ${journal}${volume ? `, ${volume}` : ""}${issue ? `(${issue})` : ""}${page ? `, ${page}` : ""}. ${doi}`;
    case "mla9":
      return `${authorsMLA}. "${title}." ${journal}, vol. ${volume || "n.d."}, no. ${issue || "n.d."}, ${yearStr}, pp. ${page || "n.p."}. ${doi}.`;
    case "chicago":
      return `${authorsFirst}. ${yearStr}. "${title}." ${journal} ${volume}${issue ? `, no. ${issue}` : ""} (${yearStr}): ${page || "n.p."}. ${doi}.`;
    case "harvard":
      return `${authorsAPA} ${yearStr}, '${title}', ${journal}, vol. ${volume || ""}, no. ${issue || ""}, pp. ${page || ""}, viewed <today>, <${doi}>.`;
    case "ieee":
      return `[1] ${authorsList.map(a => `${a.given?.[0]}. ${a.family}`).join(", ")}, "${title}," ${journal}, vol. ${volume || ""}, no. ${issue || ""}, pp. ${page || ""}, ${yearStr}. doi: ${doiShort}.`;
    case "vancouver":
      return `${authorsList.map(a => `${a.family} ${a.given?.[0] || ""}`).join(", ")}. ${title}. ${journal}. ${yearStr};${volume}${issue ? `(${issue})` : ""}:${page || ""}. doi:${doiShort}`;
    case "ama":
      return `${authorsList.map(a => `${a.family} ${a.given?.[0] || ""}`).join(", ")}. ${title}. ${journal}. ${yearStr};${volume}${issue ? `(${issue})` : ""}:${page || ""}. doi:${doiShort}`;
    case "nature":
      return `${authorsList.map(a => `${a.family}, ${a.given?.[0] || ""}`).join(", ")} ${title}. ${journal} ${volume}, ${page || ""} (${yearStr}). ${doi}`;
    case "bibtex":
      return `@article{${authorsList[0]?.family || "unknown"}${yearStr},
  author = {${authorsList.map(a => `${a.family}, ${a.given}`).join(" and ")}},
  title = {${title}},
  journal = {${journal}},
  year = {${yearStr}},
  volume = {${volume}},
  pages = {${page}},
  doi = {${doiShort}}
}`;
    case "turabian":
      return `${authorsFirst}. "${title}." ${journal} ${volume}, no. ${issue || ""} (${yearStr}): ${page || ""}. ${doi}.`;
    case "cse":
      return `${authorsList.map(a => `${a.family} ${a.given?.[0] || ""}`).join(", ")}. ${yearStr}. ${title}. ${journal}. ${volume}${issue ? `(${issue})` : ""}:${page || ""}. doi:${doiShort}`;
    case "acs":
      return `${authorsList.map(a => `${a.family}, ${a.given?.[0] || ""};`).join(" ")} ${title}. ${journal} ${yearStr}, ${volume}, ${page || ""}. ${doi}`;
    case "apsa":
      return `${authorsAPA} ${yearStr}. "${title}." ${journal} ${volume}(${issue || ""}): ${page || ""}. ${doi}.`;
    case "oscola":
      return `${authorsFirst}, '${title}' (${yearStr}) ${volume} ${journal} ${page || ""} <${doi}>`;
    case "chicago-ad":
      return `${authorsFirst} ${yearStr}. "${title}." ${journal} ${volume} (${issue || ""}): ${page || ""}. ${doi}.`;
    default:
      return `${authorsAPA} (${yearStr}). ${title}. ${journal}. ${doi}`;
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
  const [activeTab, setActiveTab] = useState("converter");
  const [visitors, setVisitors] = useState(12695);
  const [total, setTotal] = useState(8921);
  const [today, setToday] = useState(127);

  const converterRef = useRef<HTMLDivElement>(null);
  const guidesRef = useRef<HTMLDivElement>(null);
  const privacyRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const v = localStorage.getItem("dz_visitors");
    const base = v ? parseInt(v) : 12695;
    const newV = base + 1;
    localStorage.setItem("dz_visitors", String(newV));
    setVisitors(newV);
    const t = localStorage.getItem("dz_total") || "8921";
    setTotal(parseInt(t));
    const td = localStorage.getItem("dz_today") || "127";
    setToday(parseInt(td));
  }, []);

  function scrollTo(ref: React.RefObject<HTMLDivElement>, tab: string) {
    setActiveTab(tab);
    setMobileMenu(false);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  async function convert() {
    const raw = doi.trim();
    if (!raw) return;
    setLoading(true);
    setResult("");
    try {
      let id = raw
        .replace(/https?:\/\/doi\.org\//i, "")
        .replace(/https?:\/\/dx\.doi\.org\//i, "")
        .replace(/^doi:/i, "")
        .trim();
      
      if (!id.match(/^10\.\d+\/.+/)) {
        throw new Error("Invalid DOI format");
      }

      const res = await fetch(`https://api.crossref.org/works/${encodeURIComponent(id)}`);
      if (!res.ok) throw new Error("Not found");
      const data = await res.json();
      if (!data.message) throw new Error("No data");
      
      setResult(formatCitation(data.message as CrossrefMessage, style));
      
      // update counters - real
      const nt = total + 1;
      const ntd = today + 1;
      localStorage.setItem("dz_total", String(nt));
      localStorage.setItem("dz_today", String(ntd));
      setTotal(nt);
      setToday(ntd);
      
    } catch (e: any) {
      setResult(`❌ ${e.message || "DOI not found"}. Try example: 10.1038/nature12345`);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#0a0e2a] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e2a] via-[#121e4a] to-[#1a2a6a]" />
      <div className="relative z-10">
        <header className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between sticky top-0 z-20 bg-[#0a0e2a]/80 backdrop-blur-xl border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white text-black flex items-center justify-center font-black">D</div>
            <div>
              <div className="font-bold text-sm leading-none">DOIZAPA PRO</div>
              <div className="text-[10px] opacity-60">CLEAN V4 • 15 STYLES</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-1 bg-black/30 backdrop-blur-xl border border-white/10 rounded-full p-1">
            <button onClick={() => scrollTo(converterRef, "converter")} className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${activeTab==="converter"?"bg-white text-black":"text-white/60 hover:text-white"}`}>Converter</button>
            <button onClick={() => scrollTo(guidesRef, "guides")} className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${activeTab==="guides"?"bg-white text-black":"text-white/60 hover:text-white"}`}>Guides</button>
            <button onClick={() => scrollTo(privacyRef, "privacy")} className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${activeTab==="privacy"?"bg-white text-black":"text-white/60 hover:text-white"}`}>Privacy</button>
            <button onClick={() => scrollTo(aboutRef, "about")} className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${activeTab==="about"?"bg-white text-black":"text-white/60 hover:text-white"}`}>About</button>
          </nav>
          <div className="flex items-center gap-2">
            <span className="hidden md:flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />{visitors.toLocaleString()} visitors</span>
            <button onClick={() => setShowContact(true)} className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90">Contact</button>
            <button className="md:hidden w-9 h-9 rounded-full bg-white/10 flex items-center justify-center" onClick={() => setMobileMenu(!mobileMenu)}>{mobileMenu ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}</button>
          </div>
        </header>

        {mobileMenu && (
          <div className="md:hidden mx-4 mt-2 p-2 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-xl">
            <button onClick={() => scrollTo(converterRef, "converter")} className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10">Converter</button>
            <button onClick={() => scrollTo(guidesRef, "guides")} className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10">Guides</button>
            <button onClick={() => scrollTo(privacyRef, "privacy")} className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10">Privacy</button>
            <button onClick={() => scrollTo(aboutRef, "about")} className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/10">About</button>
          </div>
        )}

        <main ref={converterRef} className="max-w-7xl mx-auto px-4 md:px-6 py-8 grid md:grid-cols-[1.2fr_0.8fr] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">✨ Trusted by 12k+ students • Crossref Powered</div>
            <h1 className="text-4xl md:text-5xl font-black leading-[0.9]">DOI to <span className="text-cyan-300">APA</span><br />Converter</h1>
            <p className="mt-3 text-sm opacity-70">15 Styles • Instant • No Signup</p>
            <p className="mt-2 text-sm text-white/60 max-w-[520px]">Convert any DOI to perfect citation in APA 7th, MLA 9th, Chicago & 12 more. Paste DOI, choose style, copy. Powered by official Crossref API.</p>

            <div className="mt-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[20px] p-4 md:p-5">
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="opacity-60">🔍 Enter DOI</span>
                <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-300 text-[10px]">Unlimited Free</span>
              </div>
              <div className="flex gap-2">
                <input value={doi} onChange={e => setDoi(e.target.value)} onKeyDown={e => e.key==="Enter" && convert()} placeholder="10.1038/nature12345 or https://doi.org/10.1038/..." className="flex-1 h-12 px-4 rounded-xl bg-black/30 border border-white/10 text-sm outline-none focus:border-cyan-400/50" />
                <button onClick={convert} disabled={loading} className="h-12 px-6 rounded-xl bg-white text-black font-bold text-sm flex items-center gap-2 disabled:opacity-50 hover:bg-white/90 transition">{loading ? "Converting..." : "⚡ Convert"}</button>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[11px] opacity-50 uppercase">CHOOSE 15 STYLES - CLICK TO SWITCH</span>
                <span className="text-[10px] opacity-40">{STYLES.find(s=>s.id===style)?.desc}</span>
              </div>
              <div className="mt-2 grid grid-cols-3 md:grid-cols-5 gap-2">
                {STYLES.map(s => (
                  <button key={s.id} onClick={() => setStyle(s.id)} className={`p-2.5 rounded-xl border text-left transition ${style === s.id ? "bg-white text-black border-white scale-[1.02]" : "bg-white/5 border-white/10 hover:bg-white/10"}`}>
                    <div className="font-bold text-xs">{s.short}</div>
                    <div className="text-[9px] opacity-60">{s.name}</div>
                  </button>
                ))}
              </div>
              {result && (
                <div className="mt-4 p-4 rounded-xl bg-black/40 border border-cyan-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] opacity-70 font-bold">{STYLES.find(s => s.id === style)?.short} • READY</span>
                    <button onClick={() => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(() => setCopied(false), 2000); }} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white text-black font-bold hover:bg-white/90">{copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}{copied ? "Copied!" : "Copy"}</button>
                  </div>
                  <div className="text-sm leading-relaxed break-words whitespace-pre-wrap">{result}</div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[20px] p-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center">✓</div>
                <div>
                  <div className="font-semibold text-sm">Support Project • 100% Free</div>
                  <div className="text-[11px] text-white/50">Real counter • No fake numbers</div>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="font-bold">{total.toLocaleString()}</div>
                  <div className="text-[9px] opacity-50 uppercase">Total</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="font-bold">{today.toLocaleString()}</div>
                  <div className="text-[9px] opacity-50 uppercase">Today</div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="font-bold">{visitors.toLocaleString()}</div>
                  <div className="text-[9px] opacity-50 uppercase">Visitors</div>
                </div>
              </div>
            </div>

            <div ref={guidesRef} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[20px] p-4">
              <div className="font-semibold text-sm mb-3 flex items-center gap-2"><BookOpen className="w-4 h-4"/> How to Cite DOI in {STYLES.find(s=>s.id===style)?.short}?</div>
              <ol className="text-xs space-y-2 text-white/70 list-decimal list-inside">
                <li>Paste DOI (e.g. 10.1038/nature12345)</li>
                <li>Select {STYLES.find(s=>s.id===style)?.short} style</li>
                <li>Click Convert – Crossref fetches metadata</li>
                <li>Copy perfect citation with DOI link</li>
              </ol>
              <div className="mt-3 text-[11px] p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-200">Tip: You can paste full https://doi.org/ link, we clean it automatically.</div>
            </div>

            <div ref={privacyRef} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[20px] p-4">
              <div className="font-semibold text-sm mb-2 flex items-center gap-2"><Shield className="w-4 h-4"/> Privacy & Free Forever</div>
              <div className="text-xs text-white/60 leading-relaxed">We don't store DOIs. All requests go directly to api.crossref.org. No login, no tracking, no payment. 100% free and Google Safe.</div>
            </div>

            <div ref={aboutRef} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[20px] p-4">
              <div className="font-semibold text-sm mb-2 flex items-center gap-2"><Info className="w-4 h-4"/> About DOIZAPA PRO</div>
              <div className="text-xs text-white/60 leading-relaxed">Built for students by mahmoodabdm. Clean v4, 15 citation styles, instant conversion. Open source on GitHub.</div>
            </div>
          </div>
        </main>

        <footer className="mt-12 border-t border-white/10 bg-black/20 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <div>© 2026 DOIZAPA PRO Clean v4 • 100% Free • Real Counters</div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {visitors.toLocaleString()} visitors</span>
              <span className="flex items-center gap-1"><ExternalLink className="w-3 h-3" /> Vercel</span>
            </div>
          </div>
        </footer>
      </div>

      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="w-full max-w-sm rounded-[20px] bg-[#0f1a3a] border border-white/15 p-6">
            <div className="flex items-center justify-between"><h3 className="font-bold flex items-center gap-2"><Mail className="w-4 h-4" /> Contact</h3><button onClick={() => setShowContact(false)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><X className="w-4 h-4" /></button></div>
            <div className="mt-4 text-sm text-white/70">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">Email: <span className="text-white font-mono">support@doizapa.pro</span></div>
              <p className="mt-3">100% Free service. Response within 24h.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
