"use client";
import Link from "next/link";
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0e2a] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e2a] via-[#121e4a] to-[#1a2a6a] fixed" />
      <div className="relative z-10">
        <header className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center border-b border-white/10">
          <Link href="/" className="font-black">DOIZAPA PRO</Link>
          <Link href="/" className="text-sm px-4 py-1.5 rounded-full bg-white text-black font-bold">Back to Converter</Link>
        </header>
        <main className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-black mb-2">About DOIZAPA PRO</h1>
          <p className="text-white/60 text-sm mb-8">CLEAN V4 • 15 STYLES • Built for Students</p>
          
          <div className="space-y-8 bg-white/5 border border-white/10 rounded-[20px] p-8 backdrop-blur-xl">
            <p className="text-white/80 leading-relaxed">DOIZAPA PRO is a free, fast, and accurate DOI to citation converter built for students, researchers, and universities worldwide. Our mission is to make academic citation effortless.</p>
            
            <section>
              <h2 className="font-bold text-lg mb-3">Why DOIZAPA?</h2>
              <ul className="list-disc list-inside text-white/70 text-sm space-y-2">
                <li><b>15 Citation Styles:</b> APA 7th, MLA 9th, Chicago, Harvard, IEEE, Vancouver, AMA, Nature, BibTeX, Turabian, CSE, ACS, APSA, OSCOLA, Chicago AD</li>
                <li><b>Powered by Crossref:</b> Official API - not scraping, 100% accurate metadata</li>
                <li><b>No Signup:</b> No account, no email, no limits</li>
                <li><b>US English Only:</b> Optimized for US universities and Google Scholar</li>
                <li><b>Trusted by 12k+ students</b> worldwide</li>
              </ul>
            </section>

            <section>
              <h2 className="font-bold text-lg mb-3">Who Built It?</h2>
              <p className="text-white/70 text-sm leading-relaxed">Built by Mahmood Abdm (@mahmoodabdm) - Open source on GitHub. Clean V4 is the latest version with real counters and full support for all 15 styles. Deployed on Vercel for 99.9% uptime.</p>
            </section>

            <section>
              <h2 className="font-bold text-lg mb-3">How It Works</h2>
              <p className="text-white/70 text-sm leading-relaxed">1. Paste DOI (10.1038/nature12345 or https://doi.org/...). 2. Choose style. 3. Click Convert. Crossref fetches title, authors, journal, year, volume, pages. 4. Copy perfect citation.</p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
