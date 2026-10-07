export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-8 bg-white mt-8 rounded-xl shadow">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">Effective Date: October 7, 2026</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Introduction</h2>
        <p className="mb-4 text-gray-700">At DOI2APA (doi2apa.com), we respect your privacy. This policy explains what information we collect and how we use it.</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Information We Collect</h2>
        <p className="mb-4 text-gray-700">We do NOT collect personal information. When you paste a DOI, we fetch metadata from Crossref API (public data). We do not store your DOIs, citations, or IP addresses on our servers.</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Cookies & Google AdSense</h2>
        <p className="mb-4 text-gray-700">We use Google AdSense to show ads. Google may use cookies and web beacons to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-600 underline">Google Ads Settings</a>. We also use Google Analytics to understand site traffic (anonymous data).</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Third Party Services</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Crossref API - to fetch DOI metadata (public academic data)</li>
          <li>Google AdSense & Analytics - for ads and traffic analysis</li>
          <li>Vercel Hosting - for website hosting</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Data Security</h2>
        <p className="mb-4 text-gray-700">We do not store user data, so there is no risk of data breach from our side. All DOI conversions happen client-side via public APIs.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Children's Privacy</h2>
        <p className="mb-4 text-gray-700">Our service is not directed to children under 13. We do not knowingly collect data from children.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Contact</h2>
        <p className="text-gray-700">If you have questions about this Privacy Policy, contact us at: support@doi2apa.com or via our <a href="/contact" className="text-blue-600 underline">Contact page</a>.</p>
      </div>
    </main>
  )
}v
