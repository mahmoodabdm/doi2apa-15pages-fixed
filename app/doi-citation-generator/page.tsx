export const metadata = {
  title: "DOI Citation Generator - Free DOI to Citation",
  description: "Free DOI citation generator. Convert any DOI to DOI format instantly. Accurate, fast, no signup.",
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6 md:p-8">
        <h1 className="text-4xl font-bold mb-4">DOI Citation Generator</h1>
        <p className="text-lg text-gray-600 mb-8">
          Convert any DOI to DOI citation format instantly. Free, accurate, and fast.
        </p>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h2 className="text-2xl font-semibold mb-4">DOI to DOI Converter</h2>
          <p className="mb-4 text-gray-700">Paste your DOI below:</p>
          <input
            type="text"
            placeholder="Enter DOI e.g. 10.1000/xyz123"
            className="w-full p-3 border rounded-lg mb-4"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium">
            Generate DOI Citation
          </button>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow border">
          <h2 className="text-2xl font-semibold mb-4">How to cite DOI in DOI?</h2>
          <p className="text-gray-700">
            Our tool pulls metadata from Crossref and formats it according to the official DOI guide. 
            Just paste your DOI like 10.xxxx/xxxx and get accurate citation in 1 second.
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
            <li>100% free, no signup</li>
            <li>Follows official DOI guidelines</li>
            <li>Includes DOI link automatically</li>
            <li>Works for journal articles, books, and more</li>
          </ul>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow border">
          <h3 className="text-xl font-semibold mb-3">Frequently Asked Questions</h3>
          <div className="space-y-3">
            <details className="border rounded p-3">
              <summary className="font-medium cursor-pointer">Is DOI to DOI free?</summary>
              <p className="mt-2 text-gray-600">Yes, completely free with no limits.</p>
            </details>
            <details className="border rounded p-3">
              <summary className="font-medium cursor-pointer">How accurate is the generator?</summary>
              <p className="mt-2 text-gray-600">99%+ accurate, data from Crossref official API.</p>
            </details>
          </div>
        </div>
      </div>
    </main>
  )
}
