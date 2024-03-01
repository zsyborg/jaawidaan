import Header from "../components/Header";
import Footer from "../components/Footer";

// FONTS
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/playfair-display";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/300-italic.css";
import "@fontsource/roboto/400-italic.css";
import "@fontsource/roboto/700-italic.css";

// CSS Styles
import "@/styles/clear.css";
import "@/styles/comman.css";
import "@/styles/sm-clean.css";
import "@/styles/globals.css";
import "@/styles/our-styles.css";

// Types
import type { Metadata } from "next";

/*
  about
  blog (the quote is broken
  gallery
  contact 
*/

// --------------

// Metadata of the website (used to inprove SEO of the website)
export const metadata: Metadata = {
  title: "Jaawidaan - Elegant & Luxury Products",
  description: "Jaawidaan - Elegant & Luxury Products",
  keywords: ["Products", "Luxury", "Jaawidaan", "Elegant"],
  authors: [
    {
      name: "Jaawidaan",
      url: "https://www.jaawidaan.com/",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
