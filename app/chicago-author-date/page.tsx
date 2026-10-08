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
      const clean = doi.trim().replace("https://doi.org/","").replace("http://doi.org/","");
      const res = await fetch(`https://api.crossref.org/works/${clean}`);
      const data = await res.json();
      const m = data.message;
      const authors = m.author?.map((a:any)=>`${a.family}, ${a.given?.[0]}.`).join(", ") || "Author";
      const year = m.published?.["date-parts"]?.[0]?.[0] || "2024";
      const title = m.title?.[0] || "";
      const journal = m["container-title"]?.[0] || "";
      setResult(`${authors} (${year}). ${title}. ${journal}. https://doi.org/${clean}`);
    } catch{ setResult("Invalid DOI. Try 10.1038/s41586-019-1233-x"); }
    setLoading(false);
  };
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Chicago Author-Date</h1>
        <div className="bg-white p-6 rounded shadow border">
          <input value={doi} onChange={e=>setDoi(e.target.value)} placeholder="10.xxxx/xxxx" className="w-full p-3 border rounded mb-4" />
          <button onClick={generate} className="bg-blue-600 text-white px-6 py-3 rounded">{loading?"Loading...":"Generate CHICAGO-AUTHOR-DATE"}</button>
          {result && <div className="mt-4 p-4 bg-blue-50 border rounded break-words">{result}</div>}
        </div>
      </div>
    </main>
  );
}
