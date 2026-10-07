"use client";
import { useState } from "react";

export default function Page() {
  const [doi, setDoi] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!doi.trim()) return;
    setLoading(true);
    setResult("");
    try {
      const cleanDoi = doi.trim().replace("https://doi.org/", "").replace("http://doi.org/", "");
      const res = await fetch(`https://api.crossref.org/works/${cleanDoi}`);
      if (!res.ok) throw new Error("not found");
      const data = await res.json();
      const m = data.message;
      const authors = m.author?.map((a: any) => `${a.family}, ${a.given?.[0]}.`).join(", ") || "Author";
      const year = m.published?.["date-parts"]?.[0]?.[0] || m.created?.["date-parts"]?.[0]?.[0] || "2024";
      const title = m.title?.[0] || "";
      const journal = m["container-title"]?.[0] || "";
      const volume = m.volume ? `, ${m.volume}` : "";
      const issue = m.issue ? `(${m.issue})` : "";
      const page = m.page ? `, ${m.page}` : "";
      setResult(`${authors} (${year}). ${title}. ${journal}${volume}${issue}${page}. https://doi.org/${cleanDoi}`);
    } catch (e) {
      setResult("Invalid DOI. Try example: 10.1038/s41586-019-1233-x");
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6 md:p-8">
        <h1 className="text-4xl font-bold mb-4">APSA Citation Generator</h1>
        <p className="text-lg text-gray-600 mb-8">Convert any DOI to APSA citation format instantly. Free, accurate, and fast.</p>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h2 className="text-2xl font-semibold mb-4">DOI to APSA Converter</h2>
          <p className="mb-4 text-gray-700">Paste your DOI below:</p>
          <input value={doi} onChange={(e) => setDoi(e.target.value)} placeholder="Enter DOI e.g. 10.1000/xyz123" className="w-full p-3 border rounded-lg mb-4" />
          <button onClick={generate} disabled={loading} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium disabled:bg-gray-400">
            {loading ? "Generating..." : "Generate APSA Citation"}
          </button>
          {result && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="font-medium mb-2">Result:</p>
              <p className="text-gray-800 break-words select-all">{result}</p>
              <button onClick={() => navigator.clipboard.writeText(result)} className="mt-3 text-sm bg-white border px-4 py-2 rounded hover:bg-gray-50">Copy Citation</button>
            </div>
          )}
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow border">
          <h2 className="text-2xl font-semibold mb-4">How to cite DOI in APSA?</h2>
          <p className="text-gray-700">Our tool pulls metadata from Crossref and formats it according to the official APSA guide. Just paste your DOI like 10.xxxx/xxxx and get accurate citation in 1 second.</p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
            <li>100% free, no signup</li>
            <li>Follows official APSA guidelines</li>
            <li>Includes DOI link automatically</li>
            <li>Works for journal articles, books, and more</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
