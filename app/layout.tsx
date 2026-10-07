import "./globals.css";
export const metadata = { title: "DOI2APA", description: "DOI Converter" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer className="text-center py-6 bg-gray-50 border-t mt-12 text-sm text-gray-600">
          <a href="/privacy-policy" className="mx-3 text-blue-600 underline">Privacy Policy</a>
          <a href="/terms" className="mx-3 text-blue-600 underline">Terms</a>
          <a href="/about" className="mx-3 text-blue-600 underline">About</a>
          <a href="/contact" className="mx-3 text-blue-600 underline">Contact</a>
          <p className="mt-3">© 2026 DOI2APA</p>
        </footer>
      </body>
    </html>
  );
}
