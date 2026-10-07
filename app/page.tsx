export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">DOI2APA - Free DOI Converter</h1>
        <p className="text-xl mb-8">Convert any DOI to citation format instantly</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <a href="/apa-7th" className="bg-white p-4 rounded shadow border hover:bg-blue-50">APA 7th</a>
          <a href="/bibtex" className="bg-white p-4 rounded shadow border hover:bg-blue-50">BibTeX</a>
          <a href="/acs" className="bg-white p-4 rounded shadow border hover:bg-blue-50">ACS</a>
          <a href="/ama" className="bg-white p-4 rounded shadow border hover:bg-blue-50">AMA</a>
          <a href="/chicago" className="bg-white p-4 rounded shadow border hover:bg-blue-50">Chicago</a>
          <a href="/cse" className="bg-white p-4 rounded shadow border hover:bg-blue-50">CSE</a>
          <a href="/apsa" className="bg-white p-4 rounded shadow border hover:bg-blue-50">APSA</a>
          <a href="/doi-citation-generator" className="bg-white p-4 rounded shadow border hover:bg-blue-50">DOI Generator</a>
          <a href="/about" className="bg-white p-4 rounded shadow border hover:bg-blue-50">About</a>
          <a href="/contact" className="bg-white p-4 rounded shadow border hover:bg-blue-50">Contact</a>
        </div>
        <div className="mt-8">
          <a href="/sitemap.xml" className="text-blue-600">Sitemap</a>
        </div>
      </div>
    </main>
  )
}
