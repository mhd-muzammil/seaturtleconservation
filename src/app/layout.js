import { Poppins } from "next/font/google";
import "./globals.css";
import SubHeader from "@/components/SubHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Sea Turtle Conservation",
  description: "Sea Turtle Conservation Trust - Protecting and preserving sea turtles and their habitats.",
  metadataBase: new URL('http://localhost:3000'),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased text-white bg-dark`}>
        <SubHeader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
