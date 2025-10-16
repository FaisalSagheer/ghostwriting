import { Playfair_Display, Prompt } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Popover } from "@/components/ui/popover";

const PromptFont = Prompt({
  variable: "--font-prompt-serif",
  weight: ["100","200","300","400"],
  subsets: ["latin"],
});

const PoetsenOne = Playfair_Display({
  variable: "--font-poetsen-one",
  subsets: ["latin"],
});

export const metadata = {
  title: "GhostWriting",
  description: "Created By Faisal Sagheer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`text-primary ${PromptFont.variable} ${PoetsenOne.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
