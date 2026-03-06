
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";


export const metadata = {
  title: "Digital Alchemy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`text-primary antialiased`}
        style={{fontFamily:"'Times New Roman', Times, serif"}}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
