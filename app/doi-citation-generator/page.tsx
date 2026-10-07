export const metadata = {
  title: "DOI Citation Generator - Free Tool",
  description: "Free DOI to citation converter for all styles.",
}

export default function Page() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">DOI Citation Generator - Free Tool</h1>
      <p className="text-lg text-gray-600 mb-8">Free DOI to citation converter for all styles.</p>
      
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-2xl font-semibold mb-4">DOI to DOI-CITATION-GENERATOR Converter</h2>
        <p className="mb-4">Enter your DOI below to generate DOI-CITATION-GENERATOR citation:</p>
        <input 
          type="text" 
          placeholder="Enter DOI e.g. 10.1000/xyz123" 
          className="w-full p-3 border rounded-lg mb-4"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Generate Citation
        </button>
      </div>

      <div className="mt-8 prose">
        <h2 className="text-2xl font-semibold">How to Cite DOI in DOI-CITATION-GENERATOR?</h2>
        <p>Our tool makes it easy to convert any DOI to DOI-CITATION-GENERATOR format. Just paste your DOI and get accurate citation instantly.</p>
        <ul className="list-disc pl-5 mt-4">
          <li>Free and fast</li>
          <li>Accurate DOI-CITATION-GENERATOR formatting</li>
          <li>No registration required</li>
        </ul>
      </div>
    </main>
  )
}
