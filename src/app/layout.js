import { Poppins } from "next/font/google";
import "./globals.css";
import SubHeader from "@/components/SubHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from '@next/third-parties/google';

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Sea Turtle Conservation Trust | Protecting Marine Life",
  description: "Join the Sea Turtle Conservation Trust. We protect endangered sea turtles, restore habitats, and educate communities across India. Volunteer today!",
  metadataBase: new URL('https://www.seaturtleconservation.in'),
  keywords: ["Sea turtles", "Marine conservation", "Ocean protection", "Sea Turtle Conservation Trust", "India", "Volunteer", "Marine Wildlife", "Endangered Species"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NGO",
        "name": "Sea Turtle Conservation Trust",
        "url": "https://www.seaturtleconservation.in",
        "logo": "https://www.seaturtleconservation.in/assets/images/logo.png",
        "sameAs": [
          "https://facebook.com/seaturtletrust",
          "https://twitter.com/seaturtletrust",
          "https://instagram.com/seaturtletrust",
          "https://linkedin.com/company/seaturtletrust"
        ],
        "description": "Dedicated to the protection and conservation of sea turtles and their habitats in India."
      },
      {
        "@type": "LocalBusiness",
        "name": "Sea Turtle Conservation Trust",
        "image": "https://www.seaturtleconservation.in/assets/images/logo.png",
        "@id": "https://www.seaturtleconservation.in",
        "url": "https://www.seaturtleconservation.in",
        "telephone": "+919876543210", // Placeholder - user should update
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ECR Road", // Placeholder
          "addressLocality": "Chennai",
          "addressRegion": "TN",
          "postalCode": "603112",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.6375, // Approximate Chennai coast
          "longitude": 80.1973
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased text-white bg-dark`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SubHeader />
        <Navbar />
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
        <GoogleAnalytics gaId="YOUR-GA-ID" />
      </body>
    </html>
  );
}
