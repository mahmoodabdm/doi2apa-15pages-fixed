"use client";
import { useState } from "react";

export default function Home() {
  const [doi, setDoi] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const generate = async () => {
    if (!doi.trim()) return;
    setLoading(true);
    try {
      const clean = doi.trim().replace("https://doi.org/","").replace("http://doi.org/","");
      const res = await fetch(`https://api.crossref.org/works/${clean}`);
      const data = await res.json();
      const m = data.message;
      const authors = m.author?.map((a:any)=>`${a.family}, ${a.given?.[0]}.`).join(", ") || "Author";
      const year = m.published?.["date-parts"]?.[0]?.[0] || "2024";
      const title = m.title?.[0] || "";
      const journal = m["container-title"]?.[0] || "";
      setResult(`${authors} (${year}). ${title}. ${journal}. https://doi.org/${clean}`);
    } catch { setResult("Invalid DOI"); }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto p-6 md:p-12">
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-black mb-4">DOI<span className="text-blue-600">2</span>APA</h1>
          <p className="text-xl text-gray-600">Free DOI to Citation Converter - 11 Styles Instantly</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border mb-10">
          <h2 className="text-2xl font-bold mb-4">Paste your DOI</h2>
          <div className="flex gap-3">
            <input value={doi} onChange={e=>setDoi(e.target.value)} placeholder="10.1038/s41586-019-1233-x" className="flex-1 p-4 border-2 rounded-xl text-lg" />
            <button onClick={generate} className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700">{loading?"...":"Convert"}</button>
          </div>
          {result && <div className="mt-6 p-5 bg-blue-50 rounded-xl border border-blue-200 text-left break-words">{result}</div>}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["APA 7th","/apa-7th","bg-blue-600"],["BibTeX","/bibtex","bg-gray-800"],["ACS","/acs","bg-green-600"],["AMA","/ama","bg-red-600"],
            ["Chicago","/chicago","bg-purple-600"],["CSE","/cse","bg-orange-600"],["APSA","/apsa","bg-teal-600"],["DOI Generator","/doi-citation-generator","bg-black"]
          ].map(([name,link,color])=>(
            <a key={link} href={link} className={`${color} text-white p-6 rounded-xl font-bold text-center hover:opacity-90`}>{name}</a>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-500">
          <p>© 2026 DOI2APA - Free, No Signup, Accurate</p>
          <a href="/sitemap.xml" className="text-blue-600 underline">Sitemap</a>
        </div>
      </div>
    </main>
  );
}
