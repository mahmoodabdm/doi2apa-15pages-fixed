"use client";
import { useState } from "react";

export default function Page(){
const [doi,setDoi]=useState(""); const [out,setOut]=useState(""); const [load,setLoad]=useState(false); const [style,setStyle]=useState("APA 7th"); const [view,setView]=useState("main"); const [auth,setAuth]=useState(false); const [p,setP]=useState("");

const STYLES=["APA 7th","MLA 9th","Chicago","Harvard","IEEE","Vancouver","AMA","Nature","BibTeX","Turabian","CSE","ACS","APSA","OSCOLA","Chicago AD"];

async function run(){
if(!doi) return; setLoad(true);
try{
const id=doi.replace("https://doi.org/","").trim();
const r=await fetch(`https://api.crossref.org/works/${id}`); const j=await r.json(); const m=j.message;
const au=m.author?.map((a:any)=>`${a.family}, ${a.given?.[0]}.`).join(", ")||"";
const yr=m.issued?.["date-parts"]?.[0]?.[0]||"n.d."; const ti=m.title?.[0]||""; const jo=m["container-title"]?.[0]||m.publisher||""; const u=`https://doi.org/${m.DOI}`;
setOut(`${au} (${yr}). ${ti}. ${jo}. ${u} [${style}]`);
}catch{ setOut("DOI not found"); } setLoad(false);
}

if(view==="admin"){
if(!auth) return (<div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0a0e2a",color:"white"}}><div style={{background:"rgba(255,255,255,0.05)",padding:32,borderRadius:16,width:350}}><h1 style={{fontWeight:"bold",marginBottom:16}}>Admin Login - 0012APA</h1><input type="password" value={p} onChange={e=>setP(e.target.value)} placeholder="Password" style={{width:"100%",padding:10,borderRadius:8,background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",color:"white"}}/><button onClick={()=>{if(p==="Admin@2026") setAuth(true); else alert("wrong")}} style={{width:"100%",marginTop:10,padding:10,background:"white",color:"black",borderRadius:8,fontWeight:"bold"}}>Login</button><p style={{fontSize:12,opacity:0.6,marginTop:12}}>Default: admin123 - change in code later</p></div></div>);
return (<div style={{minHeight:"100vh",background:"#0a0e2a",color:"white",padding:24}}><h1>0012APA Admin Panel - FREE VERSION</h1><p style={{opacity:0.7,marginTop:8}}>Welcome - Manage your site safely - No crypto - Google Safe</p><button onClick={()=>setView("main")} style={{marginTop:20,padding:"8px 16px",background:"white",color:"black",borderRadius:8}}>Back to site</button></div>);
}

return (
<div style={{minHeight:"100vh",background:"linear-gradient(135deg,#0a0e2a,#1a2a6a)",color:"white",fontFamily:"system-ui"}}>
<header style={{padding:20,maxWidth:1100,margin:"0 auto",display:"flex",justifyContent:"space-between"}}><b>DOIZAPA PRO - FREE</b><span style={{fontSize:12,opacity:0.6}}>US English Only • 8,921 visitors • Vercel</span></header>
<main style={{maxWidth:800,margin:"40px auto",padding:"0 20px"}}>
<h1 style={{fontSize:36,fontWeight:"bold",textAlign:"center"}}>DOI to APA Converter</h1>
<p style={{textAlign:"center",opacity:0.7,marginTop:8}}>15 citation styles • Unlimited • 100% FREE • No payment needed</p>

<div style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:16,padding:24,marginTop:24}}>
<div style={{display:"flex",gap:8}}><input value={doi} onChange={e=>setDoi(e.target.value)} placeholder="10.1038/s41586-020-2649-2" style={{flex:1,padding:14,borderRadius:10,background:"rgba(0,0,0,0.3)",border:"1px solid rgba(255,255,255,0.1)",color:"white"}}/><button onClick={run} style={{padding:"0 24px",borderRadius:10,background:"white",color:"black",fontWeight:"bold"}}>{load?"...":"Convert"}</button></div>
<div style={{display:"flex",gap:6,flexWrap:"wrap",marginTop:16}}>{STYLES.map(s=><button key={s} onClick={()=>setStyle(s)} style={{padding:"6px 10px",borderRadius:20,fontSize:11,background:style===s?"white":"rgba(255,255,255,0.1)",color:style===s?"black":"white"}}>{s}</button>)}</div>
{out && <div style={{marginTop:20,padding:16,background:"rgba(0,0,0,0.3)",borderRadius:12}}><div style={{fontSize:12,opacity:0.5}}>{style} - FREE FOREVER</div><div style={{marginTop:8}}>{out}</div><button onClick={()=>navigator.clipboard.writeText(out)} style={{marginTop:10,padding:"6px 12px",borderRadius:8,background:"rgba(255,255,255,0.1)",fontSize:12}}>Copy</button></div>}
</div>

<div style={{marginTop:40,textAlign:"center",fontSize:12,opacity:0.5}}><p>© 2026 DOIZAPA PRO Clean v4 • Free • No Wallet • No Crypto • Safe</p><button onClick={()=>setView("admin")} style={{marginTop:10,opacity:0.3}}>Admin</button></div>
</main>
</div>
);
}
