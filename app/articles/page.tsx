"use client";
import Link from "next/link";
export default function ArticlesPage(){
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Citation Guides & Articles</h1>
        <p className="text-slate-400 mb-8">Learn how to cite in different styles.</p>
        <div className="grid gap-3">
          <Link href="/apa-7th" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">APA 7th Guide</Link>
          <Link href="/mla-9th" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">MLA 9th Guide</Link>
          <Link href="/chicago" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">Chicago Guide</Link>
          <Link href="/harvard" className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">Harvard Guide</Link>
        </div>
        <Link href="/" className="inline-block mt-8 text-blue-400">Back home</Link>
      </div>
    </div>
  )
}
