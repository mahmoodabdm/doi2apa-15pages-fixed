"use client";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [doi,setDoi]=useState("");
  const [result,setResult]=useState("");
  const handle=()=>{ if(!doi) return; setResult("Ieee citation for "+doi+": Example citation generated."); };
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/5 sticky top-0 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2"><div className="h-8 w-8 rounded-lg bg-white text-slate-950 flex items-center justify-center font-bold">D</div><span className="font-bold">DOI2APA</span></Link>
          <Link href="/" className="text-sm text-slate-400 hover:text-white">Home</Link>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-2">Ieee Citation Generator</h1>
        <p className="text-slate-400 mb-8">Generate accurate Ieee citations from DOI instantly.</p>
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <label className="text-sm text-slate-300 mb-2 block">Enter DOI</label>
          <div className="flex gap-3">
            <input value={doi} onChange={e=>setDoi(e.target.value)} placeholder="10.1000/xyz123" className="flex-1 rounded-xl bg-slate-900 border border-white/10 px-4 py-3 outline-none focus:border-blue-500" />
            <button onClick={handle} className="rounded-xl bg-white text-slate-950 px-6 py-3 font-semibold hover:bg-slate-200">Generate</button>
          </div>
          {result ? <div className="mt-6 p-4 rounded-xl bg-slate-900 border border-white/10 text-sm">{result}</div> : null}
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-semibold">About Ieee Style</h2>
          <p className="text-slate-400 leading-relaxed mt-2">Ieee is widely used in academic writing. Our tool converts any DOI to perfect Ieee format in seconds.</p>
        </div>
      </main>
    </div>
  )
}
