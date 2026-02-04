import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// import { Dancing_Script } from "next/font/google";

// export const dancing = Dancing_Script({
//   subsets: ["latin"],
//   weight: ["400", "500"],
// });


export const metadata = {
  title: "Punjab Modular Kitchen",
  description: "Premium modular kitchens designed for modern Punjab homes.",
};

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * The root layout of the app.
 *
 * This component is responsible for rendering the base HTML structure
 * of the app, including the navbar, main content area, and footer.
 *
 * It accepts a single child, which is the main content of the page.
 *
 * @param {React.ReactNode} children - The main content of the page.
 * @returns {JSX.Element} The root layout of the app.
 */
/*******  796941b0-c5f8-4b54-ae82-7b14a5e60805  *******/export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f7f6f3] text-[#1c1c1c]">
        <Navbar />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
