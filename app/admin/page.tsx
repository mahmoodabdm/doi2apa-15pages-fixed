"use client";
import { useState } from "react";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState("");
  const ADMIN_PASS = "admin123"; // غيره بعدين

  if (!authed) {
    return (
      <div style={{minHeight:"100vh", background:"linear-gradient(135deg,#0a0e2a,#1e2a6a)", display:"flex", alignItems:"center", justifyContent:"center", color:"white"}}>
        <div style={{background:"rgba(255,255,255,0.05)", padding:32, borderRadius:16, border:"1px solid rgba(255,255,255,0.1)", width:350}}>
          <h1 style={{fontSize:20, fontWeight:"bold", marginBottom:16}}>Admin Login - DOI2APA</h1>
          <input value={pass} onChange={e=>setPass(e.target.value)} placeholder="Password" type="password" style={{width:"100%", padding:10, borderRadius:8, background:"rgba(0,0,0,0.3)", border:"1px solid rgba(255,255,255,0.2)", color:"white", marginBottom:12}}/>
          <button onClick={()=> pass===ADMIN_PASS ? setAuthed(true) : alert("Wrong password")} style={{width:"100%", padding:10, background:"#3b82f6", borderRadius:8, fontWeight:"bold"}}>Enter as Admin</button>
          <p style={{fontSize:12, opacity:0.6, marginTop:12}}>Default: admin123 - change in code later</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{minHeight:"100vh", background:"linear-gradient(135deg,#0a0e2a,#1e2a6a)", color:"white", padding:24, fontFamily:"sans-serif"}}>
      <h1 style={{fontSize:24, fontWeight:"bold", marginBottom:8}}>DOI2APA Admin Panel</h1>
      <p style={{opacity:0.7, marginBottom:24}}>Welcome احسان - Manage your site safely</p>
      
      <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16, marginBottom:24}}>
        <div style={{background:"rgba(255,255,255,0.07)", padding:16, borderRadius:12, border:"1px solid rgba(255,255,255,0.1)"}}><div style={{opacity:0.6, fontSize:12}}>TOTAL</div><div style={{fontSize:24, fontWeight:"bold"}}>8,921</div></div>
        <div style={{background:"rgba(255,255,255,0.07)", padding:16, borderRadius:12, border:"1px solid rgba(255,255,255,0.1)"}}><div style={{opacity:0.6, fontSize:12}}>TODAY</div><div style={{fontSize:24, fontWeight:"bold"}}>127</div></div>
        <div style={{background:"rgba(255,255,255,0.07)", padding:16, borderRadius:12, border:"1px solid rgba(255,255,255,0.1)"}}><div style={{opacity:0.6, fontSize:12}}>VISITORS</div><div style={{fontSize:24, fontWeight:"bold"}}>12,682</div></div>
      </div>

      <div style={{background:"rgba(255,255,255,0.07)", padding:16, borderRadius:12, border:"1px solid rgba(255,255,255,0.1)", marginBottom:16}}>
        <h3 style={{fontWeight:"bold", marginBottom:8}}>Donate Wallet (TRC20)</h3>
        <div style={{display:"flex", gap:8}}><input defaultValue="TUQrUsLTBQG9aYHjZzWmh8tBxExample" style={{flex:1, padding:8, borderRadius:6, background:"rgba(0,0,0,0.3)", border:"1px solid rgba(255,255,255,0.2)", color:"white"}}/><button style={{padding:"8px 12px", background:"#3b82f6", borderRadius:6}}>Copy</button></div>
      </div>

      <div style={{background:"rgba(255,255,255,0.07)", padding:16, borderRadius:12, border:"1px solid rgba(255,255,255,0.1)"}}>
        <h3 style={{fontWeight:"bold", marginBottom:8}}>Actions - Safe</h3>
        <p style={{fontSize:13, opacity:0.7, marginBottom:12}}>هذني الأزرار ما يأثرن على الواجهة الرئيسية</p>
        <div style={{display:"flex", gap:8}}>
          <button style={{padding:"8px 12px", background:"rgba(239,68,68,0.2)", border:"1px solid #ef4444", borderRadius:6}}>Reset Counters</button>
          <button style={{padding:"8px 12px", background:"rgba(234,179,8,0.2)", border:"1px solid #eab308", borderRadius:6}}>Clear Cache</button>
          <button onClick={()=>setAuthed(false)} style={{padding:"8px 12px", background:"rgba(255,255,255,0.1)", borderRadius:6}}>Logout</button>
        </div>
      </div>

      <p style={{marginTop:24, fontSize:12, opacity:0.5}}>File location: app/admin/page.tsx - This page does NOT touch main page.tsx</p>
    </div>
  )
}
