import "./globals.css";
export const metadata = {
  title: "DOI2APA - Free DOI to Citation",
  description: "Convert DOI to APA, MLA, Chicago, BibTeX instantly",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <div className="flex-grow">{children}</div>
        
        <footer className="bg-gray-900 text-white py-8 mt-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-6">
              <div>
                <h3 className="font-bold mb-3">Citation Styles</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="/apa-7th" className="hover:text-white">APA 7th</a></li>
                  <li><a href="/bibtex" className="hover:text-white">BibTeX</a></li>
                  <li><a href="/acs" className="hover:text-white">ACS</a></li>
                  <li><a href="/ama" className="hover:text-white">AMA</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">More Styles</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="/chicago" className="hover:text-white">Chicago</a></li>
                  <li><a href="/cse" className="hover:text-white">CSE</a></li>
                  <li><a href="/apsa" className="hover:text-white">APSA</a></li>
                  <li><a href="/doi-citation-generator" className="hover:text-white">DOI Generator</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Company</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="/about" className="hover:text-white">About Us</a></li>
                  <li><a href="/contact" className="hover:text-white">Contact</a></li>
                  <li><a href="/sitemap.xml" className="hover:text-white">Sitemap</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Legal</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="/privacy-policy" className="hover:text-white font-bold text-blue-400">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
              <p>© 2026 DOI2APA - Free, No Signup, Accurate - Made for researchers worldwide</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
