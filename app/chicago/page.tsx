import ChicagoClient from "./ChicagoClient";

export const metadata = {
  title: "DOI to Chicago Citation Generator - Free & Accurate",
  description: "Convert any DOI to Chicago citation format instantly. Free Chicago citation generator, no signup, accurate from Crossref.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-2">DOI to Chicago Citation Generator</h1>
        <p className="text-gray-600 mb-6">Free tool to convert DOI to Chicago 17th edition format. No signup required.</p>
        <ChicagoClient />
        <div className="mt-10 bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-3">What is Chicago Citation?</h2>
          <p className="text-gray-700">Chicago style is widely used in history and humanities. Our tool generates accurate Chicago citations from DOI using Crossref API.</p>
        </div>
      </div>
    </main>
  );
}
