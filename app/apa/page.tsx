"use client";
import { useState } from "react";
export default function Page() {
  const [doi, setDoi] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const generate = async () => {
    if (!doi.trim()) return;
    setLoading(true);
    try {
      const clean = doi.trim().replace("https://doi.org/","").replace("http://doi.org/","").replace("doi:","").trim();
      const res = await fetch(`https://api.crossref.org/works/${clean}`);
      if(!res.ok) throw new Error();
      const data = await res.json();
      const m = data.message;
      const authors = m.author?.map((a:any)=>`${a.family}, ${a.given?.[0]}.`).join(", ") || "Author";
      const year = m.published?.["date-parts"]?.[0]?.[0] || new Date().getFullYear();
      const title = m.title?.[0] || "";
      const journal = m["container-title"]?.[0] || "";
      const vol = m.volume || "";
      // simple formatting switch
      const formats: any = {
        "APA": `${authors} (${year}). ${title}. ${journal}. https://doi.org/${clean}`,
        "MLA": `${authors}. "${title}." ${journal}, vol. ${vol}, ${year}, https://doi.org/${clean}.`,
        "Chicago": `${authors}. "${title}." ${journal} (${year}). https://doi.org/${clean}.`,
        "Harvard": `${authors} ${year}, '${title}', ${journal}, viewed <today>, <https://doi.org/${clean}>.`,
        "IEEE": `${authors}, "${title}," ${journal}, ${year}. [Online]. Available: https://doi.org/${clean}`,
        "BibTeX": `@article{{${clean.replace(/\//g,'_')},
  author={${authors}},
  title={${title}},
  journal={${journal}},
  year={${year}},
  doi={${clean}}
}}`,
      };
      setResult(formats["APA"] || formats["APA"]);
    } catch{ setResult("Invalid DOI. Try 10.1038/s41586-019-1233-x"); }
    setLoading(false);
  };
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-2">DOI to APA 7th Citation Generator</h1>
        <p className="text-gray-600 mb-6">Free APA citation generator from DOI. Fast, accurate, no signup. Powered by Crossref.</p>
        <div className="bg-white p-6 rounded-xl shadow border">
          <input value={doi} onChange={e=>setDoi(e.target.value)} placeholder="Enter DOI: 10.xxxx/xxxx" className="w-full p-3 border rounded mb-4" />
          <button onClick={generate} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold">{loading?"Generating...":"Generate APA"}</button>
          {result && <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded break-words whitespace-pre-wrap">{result}</div>}
        </div>
        <div className="mt-10 bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-3">What is APA Citation?</h2>
          <p className="text-gray-700">Example: Author, A. (2024). Title. Journal.</p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Why Use Our Tool?</h3>
          <ul className="list-disc pl-6 text-gray-700"><li>Free & No Signup</li><li>Accurate Crossref Data</li><li>Instant Copy</li><li>SEO Optimized for Students</li></ul>
        </div>
      </div>
    </main>
  );
}
