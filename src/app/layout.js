import { Poppins } from "next/font/google";
import "./globals.css";
import SubHeader from "@/components/SubHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from '@next/third-parties/google';

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Sea Turtle Conservation Trust",
  description: "Sea Turtle Conservation Trust - Protecting and preserving sea turtles and their habitats.",
  metadataBase: new URL('https://www.seaturtleconservation.in'),
  keywords: ["Sea turtles", "Marine conservation", "Ocean protection", "Sea Turtle Conservation Trust", "India"],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.seaturtleconservation.in',
    siteName: 'Sea Turtle Conservation Trust',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@seaturtletrust',
    creator: '@seaturtletrust',
  },
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
        <SpeedInsights />
        <Footer />
        <GoogleAnalytics gaId="YOUR-GA-ID" />
      </body>
    </html>
  );
}
