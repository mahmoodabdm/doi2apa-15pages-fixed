"use client";
import Link from "next/link";
export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0e2a] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e2a] via-[#121e4a] to-[#1a2a6a] fixed" />
      <div className="relative z-10">
        <header className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center border-b border-white/10">
          <Link href="/" className="font-black">DOIZAPA PRO</Link>
          <Link href="/" className="text-sm px-4 py-1.5 rounded-full bg-white text-black font-bold">Back to Converter</Link>
        </header>
        <main className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-black mb-2">Privacy Policy</h1>
          <p className="text-white/60 text-sm mb-8">Last updated: May 13, 2026</p>
          
          <div className="space-y-8 bg-white/5 border border-white/10 rounded-[20px] p-8 backdrop-blur-xl">
            <section>
              <h2 className="font-bold text-lg mb-3">1. No Data Collection</h2>
              <p className="text-white/70 text-sm leading-relaxed">DOIZAPA PRO does not collect, store, or share any personal information. We do not require signup, login, or email. All DOI conversions happen client-side and requests are sent directly to the official Crossref API (https://api.crossref.org). We do not log the DOIs you convert.</p>
            </section>
            <section>
              <h2 className="font-bold text-lg mb-3">2. Third-Party Service</h2>
              <p className="text-white/70 text-sm leading-relaxed">We use Crossref API to fetch publication metadata. Crossref's privacy policy applies to their service. We do not use Google Analytics, Facebook Pixel, or any tracking scripts. Visitor counts are stored locally in your browser via localStorage only.</p>
            </section>
            <section>
              <h2 className="font-bold text-lg mb-3">3. Cookies</h2>
              <p className="text-white/70 text-sm leading-relaxed">We use only essential localStorage for counting conversions and visitors on your device. No tracking cookies, no advertising cookies.</p>
            </section>
            <section>
              <h2 className="font-bold text-lg mb-3">4. 100% Free & Safe</h2>
              <p className="text-white/70 text-sm leading-relaxed">This service is 100% free forever. No payment, no limits, no premium plan. We are not affiliated with Crossref, APA, MLA, or Chicago. All trademarks belong to their owners.</p>
            </section>
            <section>
              <h2 className="font-bold text-lg mb-3">5. Contact</h2>
              <p className="text-white/70 text-sm leading-relaxed">For privacy concerns: support@doizapa.pro</p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
 
