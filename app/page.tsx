export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">DOI2APA</h1>
        <p className="mb-8">Choose a style:</p>
        <div className="grid grid-cols-2 gap-4">
          <a href="/apa-7th" className="bg-white p-4 rounded border">APA 7th</a>
          <a href="/bibtex" className="bg-white p-4 rounded border">BibTeX</a>
          <a href="/acs" className="bg-white p-4 rounded border">ACS</a>
          <a href="/ama" className="bg-white p-4 rounded border">AMA</a>
        </div>
      </div>
    </main>
  )
}
