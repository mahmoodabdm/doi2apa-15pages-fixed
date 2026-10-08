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
      let clean = doi.trim();
      clean = clean.replace("https://doi.org/", "").replace("http://doi.org/", "").replace("doi:", "").trim();
      const res = await fetch("https://api.crossref.org/works/" + clean);
      const data = await res.json();
      const m = data.message;
      let authors = "Author";
      if (m.author && m.author.length > 0) {
        authors = m.author.map((a:any) => a.family + ", " + (a.given ? a.given[0] + "." : "")).join(", ");
      }
      const year = (m.published && m.published["date-parts"] && m.published["date-parts"][0] && m.published["date-parts"][0][0]) || 2024;
      const pTitle = (m.title && m.title[0]) || "";
      const journal = (m["container-title"] && m["container-title"][0]) || "";
      let out = "";
      if ("BibTeX" === "APA") out = authors + " (" + year + "). " + pTitle + ". " + journal + ". https://doi.org/" + clean;
      else if ("BibTeX" === "MLA") out = authors + '. "' + pTitle + '." ' + journal + ", " + year + ", https://doi.org/" + clean + ".";
      else if ("BibTeX" === "Chicago") out = authors + '. "' + pTitle + '." ' + journal + " (" + year + "). https://doi.org/" + clean + ".";
      else if ("BibTeX" === "Harvard") out = authors + " " + year + ", '" + pTitle + "', " + journal + ", https://doi.org/" + clean;
      else if ("BibTeX" === "IEEE") out = authors + ', "' + pTitle + '," ' + journal + ", " + year + ". Available: https://doi.org/" + clean;
      else if ("BibTeX" === "BibTeX") out = "@article{" + clean.replace("/", "_") + ",\n  author = {" + authors + "},\n  title = {" + pTitle + "},\n  journal = {" + journal + "},\n  year = {" + year + "},\n  doi = {" + clean + "}\n}";
      else out = authors + " (" + year + "). " + pTitle + ". " + journal + ". https://doi.org/" + clean;
      setResult(out);
    } catch (e) {
      setResult("Invalid DOI. Try 10.1038/s41586-019-1233-x");
    }
    setLoading(false);
  };
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-2">DOI to BibTeX Generator</h1>
        <p className="text-gray-600 mb-6">Free BibTeX citation generator from DOI. Fast, accurate, no signup.</p>
        <div className="bg-white p-6 rounded-xl shadow border">
          <input value={doi} onChange={e=>setDoi(e.target.value)} placeholder="Enter DOI: 10.xxxx/xxxx" className="w-full p-3 border rounded mb-4" />
          <button onClick={generate} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold">{loading ? "Generating..." : "Generate BibTeX"}</button>
          {result && <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded break-words whitespace-pre-wrap">{result}</div>}
        </div>
      </div>
    </main>
  );
}
