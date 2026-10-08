export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-8 bg-white mt-8 rounded-xl shadow">
        <h1 className="text-4xl font-bold mb-6">About DOI2APA</h1>
        <p className="text-gray-700 mb-4">
          DOI2APA is a free online tool that converts DOI (Digital Object Identifier) into accurate academic citations.
          We support APA, MLA, Chicago, Harvard, BibTeX and 10+ other citation styles.
        </p>
        <p className="text-gray-700 mb-4">
          Our mission is to help students, researchers and writers create perfect citations in seconds, without signup.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">Why DOI2APA?</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Free and no signup required</li>
          <li>Accurate data from Crossref API</li>
          <li>15+ citation formats</li>
          <li>Fast and privacy-friendly</li>
        </ul>
        <p className="text-gray-700 mt-6">Contact us: doi2apa.com/contact</p>
      </div>
    </main>
  );
}
