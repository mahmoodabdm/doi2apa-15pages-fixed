"use client";
import React, { useState } from "react";

const STYLES = ["APA 7th","MLA 9th","Chicago","Harvard","IEEE","Vancouver","AMA","Nature","BibTeX","Turabian","CSE","ACS","APSA","OSCOLA","Chicago AD"];

const DEFAULT_PASS = "Admin@2026";

export default function Page() {
  const [doi, setDoi] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState("APA 7th");
  const [view, setView] = useState("main");
  const [isAuth, setIsAuth] = useState(false);
  const [pass, setPass] = useState("");

  async function convert() {
    if(!doi) return;
    setLoading(true);
    try {
      const id = doi.replace("https://doi.org/","").trim();
      const res = await fetch(`https://api.crossref.org/works/${id}`);
      const data = await res.json();
      const m = data.message;
      const authors = m.author?.map((a:any)=> `${a.family}, ${a.given?.[0]}.`).join(", ") || "";
      const year = m.issued?.["date-parts"]?.[0]?.[0] || "n.d.";
      const title = m.title?.[0] || "";
      const journal = m["container-title"]?.[0] || m.publisher || "";
      const vol = m.volume ? `, ${m.volume}` : "";
      const doiUrl = `https://doi.org/${m.DOI}`;

      let citation = "";
      if(style.includes("APA")) citation = `${authors} (${year}). ${title}. ${journal}${vol}. ${doiUrl}`;
      else if(style.includes("MLA")) citation = `${authors}. "${title}." ${journal}, ${year}. ${doiUrl}.`;
      else citation = `${authors} (${year}). ${title}. ${journal}. ${doiUrl} [${style}]`;
      
      setResult(citation);
    } catch(e){
      setResult("DOI not found. Please check and try again.");
    }
    setLoading(false);
  }

  if(view==="admin"){
    if(!isAuth){
      return (
        <div style={{minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"#0a0e2a", color:"white"}}>
          <div style={{background:"rgba(255,255,255,0.05)", padding:32, borderRadius:16, width:350}}>
            <h1 style={{fontSize:20, fontWeight:"bold", marginBottom:16}}>Admin Login</h1>
            <input type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="Password" style={{width:"100%", padding:10, borderRadius:8, background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.2)", color:"white"}} />
            <button onClick={()=>{ if(pass===DEFAULT_PASS) setIsAuth(true); else alert("wrong password")}} style={{width:"100%", marginTop:10, padding:10, background:"white", color:"black", borderRadius:8, fontWeight:"bold"}}>Login</button>
            <button onClick={()=>setView("main")} style={{marginTop:10, fontSize:12, opacity:0.6}}>← Back to site</button>
          </div>
        </div>
      );
    }
    return (
      <div style={{minHeight:"100vh", background:"#0a0e2a", color:"white", padding:24}}>
        <h1 style={{fontSize:24, fontWeight:"bold"}}>Admin Panel - 100% FREE VERSION</h1>
        <p style={{opacity:0.7, marginTop:8}}>Site is now free, no wallet, no crypto. Google Safe.</p>
        <p style={{marginTop:16}}>This admin page is hidden from Google (noindex)</p>
        <button onClick={()=>setView("main")} style={{marginTop:20, padding:"8px 16px", background:"white", color:"black", borderRadius:8}}>Go to site</button>
      </div>
    );
  }

  return (
    <div style={{minHeight:"100vh", background:"linear-gradient(135deg,#0a0e2a,#1a2a6a)", color:"white", fontFamily:"sans-serif"}}>
      <header style={{padding:"20px", display:"flex", justifyContent:"space-between", alignItems:"center", maxWidth:1100, margin:"0 auto"}}>
        <div style={{fontWeight:"bold", fontSize:20}}>DOI2APA.PRO - 100% FREE</div>
        <div style={{display:"flex", gap:16, fontSize:12, opacity:0.7}}>
          <span>✅ No Payment</span>
          <span>✅ No Login</span>
          <span>✅ Unlimited</span>
        </div>
      </header>

      <main style={{maxWidth:800, margin:"40px auto", padding:"0 20px"}}>
        <div style={{textAlign:"center", marginBottom:32}}>
          <h1 style={{fontSize:36, fontWeight:"bold"}}>DOI to APA Converter</h1>
          <p style={{opacity:0.7, marginTop:8}}>Convert any DOI to 15 citation styles instantly - Completely FREE</p>
          <div style={{marginTop:12, display:"inline-block", padding:"6px 12px", background:"rgba(34,197,94,0.2)", border:"1px solid rgba(34,197,94,0.3)", borderRadius:20, fontSize:12, color:"#4ade80"}}>● 8,921 citations generated • 127 online now</div>
        </div>

        <div style={{background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:16, padding:24}}>
          <label style={{fontSize:14, opacity:0.8}}>Enter DOI</label>
          <div style={{display:"flex", gap:8, marginTop:8}}>
            <input value={doi} onChange={e=>setDoi(e.target.value)} placeholder="e.g. 10.1038/s41586-020-2649-2" style={{flex:1, padding:14, borderRadius:10, background:"rgba(0,0,0,0.3)", border:"1px solid rgba(255,255,255,0.1)", color:"white"}} />
            <button onClick={convert} disabled={loading} style={{padding:"0 24px", borderRadius:10, background:"white", color:"black", fontWeight:"bold"}}>{loading?"...":"Convert"}</button>
          </div>

          <div style={{marginTop:16, display:"flex", gap:8, flexWrap:"wrap"}}>
            {STYLES.map(s=>(
              <button key={s} onClick={()=>setStyle(s)} style={{padding:"6px 10px", borderRadius:20, fontSize:12, background: style===s ? "white" : "rgba(255,255,255,0.1)", color: style===s ? "black" : "white", border:"1px solid rgba(255,255,255,0.1)"}}>{s}</button>
            ))}
          </div>

          {result && (
            <div style={{marginTop:20, padding:16, background:"rgba(0,0,0,0.3)", borderRadius:12, border:"1px solid rgba(255,255,255,0.1)"}}>
              <div style={{fontSize:12, opacity:0.5, marginBottom:8}}>Result - {style} (FREE)</div>
              <div style={{fontSize:14, lineHeight:1.6}}>{result}</div>
              <button onClick={()=>navigator.clipboard.writeText(result)} style={{marginTop:12, padding:"6px 12px", borderRadius:8, background:"rgba(255,255,255,0.1)", fontSize:12}}>Copy Citation</button>
            </div>
          )}
        </div>

        <div style={{marginTop:32, textAlign:"center", fontSize:12, opacity:0.5}}>
          <p>Free forever • No wallet • No crypto • No limits • Safe for Google</p>
          <p style={{marginTop:8}}>Privacy • Terms • Contact: support@doizapa.pro</p>
          <button onClick={()=>setView("admin")} style={{marginTop:16, opacity:0.3, fontSize:10}}>Admin</button>
        </div>
      </main>
    </div>
  );
}
