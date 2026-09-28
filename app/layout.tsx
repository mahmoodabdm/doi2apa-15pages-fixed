import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DOI to APA Converter - 15 Styles | APA 7th MLA 9th Chicago Free",
  description: "Free DOI to APA 7th, MLA 9th, Chicago 17th, Harvard, IEEE & 10 more styles. Convert DOI to citation instantly. Trusted by 50k+ students.",
  keywords: ["doi to apa","apa 7th","mla 9th","chicago 17th","harvard referencing","ieee citation","citation generator"],
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
