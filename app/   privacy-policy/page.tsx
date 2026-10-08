export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-8 bg-white mt-8 rounded-xl shadow">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">Effective Date: October 7, 2026</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Introduction</h2>
        <p className="mb-4 text-gray-700">At DOI2APA (doi2apa.com), we respect your privacy. This policy explains what information we collect and how we use it.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Information We Collect</h2>
        <p className="mb-4 text-gray-700">We do NOT collect personal information. When you paste a DOI, we fetch metadata from public APIs like Crossref. We do not store your DOIs.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Cookies & Google AdSense</h2>
        <p className="mb-4 text-gray-700">We use Google AdSense to show ads. Google may use cookies and web beacons to serve personalized ads. You can opt-out via Google Ad Settings.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Third Party Services</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Crossref API - to fetch DOI metadata (public academic data)</li>
          <li>Google AdSense & Analytics - for ads and traffic analysis</li>
          <li>Vercel Hosting - for website hosting</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Data Security</h2>
        <p className="mb-4 text-gray-700">We use industry-standard security measures. However, no method of transmission over the internet is 100% secure.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Contact Us</h2>
        <p className="text-gray-700">If you have questions about this Privacy Policy, contact us at: doi2apa.com/contact</p>
      </div>
    </main>
  )
}
