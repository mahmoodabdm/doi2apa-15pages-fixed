export const metadata = {
  title: "Chicago Citation Generator - DOI to Chicago",
  description: "Convert DOI to Chicago citation format.",
}

export default function Page() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Chicago Citation Generator - DOI to Chicago</h1>
      <p className="text-lg text-gray-600 mb-8">Convert DOI to Chicago citation format.</p>
      
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-2xl font-semibold mb-4">DOI to CHICAGO Converter</h2>
        <p className="mb-4">Enter your DOI below to generate CHICAGO citation:</p>
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
        <h2 className="text-2xl font-semibold">How to Cite DOI in CHICAGO?</h2>
        <p>Our tool makes it easy to convert any DOI to CHICAGO format. Just paste your DOI and get accurate citation instantly.</p>
        <ul className="list-disc pl-5 mt-4">
          <li>Free and fast</li>
          <li>Accurate CHICAGO formatting</li>
          <li>No registration required</li>
        </ul>
      </div>
    </main>
  )
}
