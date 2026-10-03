"use client";
import { useState } from "react";
import Link from "next/link";
export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-[#0a0e2a] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e2a] via-[#121e4a] to-[#1a2a6a] fixed" />
      <div className="relative z-10">
        <header className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center border-b border-white/10">
          <Link href="/" className="font-black">DOIZAPA PRO</Link>
          <Link href="/" className="text-sm px-4 py-1.5 rounded-full bg-white text-black font-bold">Back to Converter</Link>
        </header>
        <main className="max-w-2xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-black mb-2">Contact Us</h1>
          <p className="text-white/60 text-sm mb-8">We reply within 24 hours. 100% Free Support.</p>
          
          <div className="bg-white/5 border border-white/10 rounded-[20px] p-8 backdrop-blur-xl space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-black/30 border border-white/10">
                <div className="text-xs opacity-50">EMAIL</div>
                <div className="font-mono text-sm mt-1">support@doizapa.pro</div>
              </div>
              <div className="p-4 rounded-xl bg-black/30 border border-white/10">
                <div className="text-xs opacity-50">GITHUB</div>
                <div className="font-mono text-sm mt-1">@mahmoodabdm</div>
              </div>
            </div>

            {!sent ? (
              <form onSubmit={(e)=>{e.preventDefault(); setSent(true)}} className="space-y-4">
                <input required placeholder="Your Email" className="w-full h-12 px-4 rounded-xl bg-black/30 border border-white/10 outline-none text-sm" />
                <input required placeholder="Subject (e.g. DOI not working)" className="w-full h-12 px-4 rounded-xl bg-black/30 border border-white/10 outline-none text-sm" />
                <textarea required placeholder="Message..." rows={5} className="w-full p-4 rounded-xl bg-black/30 border border-white/10 outline-none text-sm"></textarea>
                <button className="w-full h-12 rounded-xl bg-white text-black font-bold">Send Message</button>
              </form>
            ) : (
              <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
                <div className="text-2xl mb-2">✓</div>
                <div className="font-bold">Message Sent!</div>
                <div className="text-sm opacity-70 mt-1">We will reply within 24h to your email.</div>
              </div>
            )}

            <p className="text-[11px] text-white/40 text-center">This is a free educational project. For university partnerships, please email us.</p>
          </div>
        </main>
      </div>
    </div>
  );
}
