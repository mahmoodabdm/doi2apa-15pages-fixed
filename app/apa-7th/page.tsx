"use client";
import { useState } from "react";

export default function Page() {
  const [doi, setDoi] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!doi) return;
    setLoading(true);
    setResult("");
    try {
      const cleanDoi = doi.trim().replace("https://doi.org/", "");
      const res = await fetch(`https://api.crossref.org/works/${cleanDoi}`);
      const data = await res.json();
      const m = data.message;
      const authors = m.author?.map((a: any) => `${a.family}, ${a.given?.[0]}.`).join(", ") || "Author";
      const year = m.published?.["date-parts"]?.[0]?.[0] || "2024";
      const title = m.title?.[0] || "";
      const journal = m["container-title"]?.[0] || "";
      const volume = m.volume || "";
      const issue = m.issue || "";
      const page = m.page || "";
      const citation = `${authors} (${year}). ${title}. ${journal}${volume ? `, ${volume}` : ""}${issue ? `(${issue})` : ""}${page ? `, ${page}` : ""}. https://doi.org/${cleanDoi}`;
      setResult(citation);
    } catch (e) {
      setResult("Invalid DOI. Please check and try again. Example: 10.1000/xyz123");
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6 md:p-8">
        <h1 className="text-4xl font-bold mb-4">APA 7th Citation Generator</h1>
        <p className="text-lg text-gray-600 mb-8">
          Convert any DOI to APA 7th citation format instantly. Free, accurate, and fast.
        </p>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h2 className="text-2xl font-semibold mb-4">DOI to APA 7th Converter</h2>
          <p className="mb-4 text-gray-700">Paste your DOI below:</p>
          <input
            type="text"
            value={doi}
            onChange={(e) => setDoi(e.target.value)}
            placeholder="Enter DOI e.g. 10.1000/xyz123"
            className="w-full p-3 border rounded-lg mb-4"
          />
          <button onClick={generate} disabled={loading} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium w-full md:w-auto disabled:bg-gray-400">
            {loading ? "Generating..." : "Generate APA 7th Citation"}
          </button>

          {result && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="font-medium mb-2">Result:</p>
              <p className="text-gray-800 select-all">{result}</p>
              <button onClick={() => navigator.clipboard.writeText(result)} className="mt-3 text-sm bg-white border px-4 py-2 rounded
