import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const RequestForm = dynamic(() => import("@/components/RequestForm"));
const Services = dynamic(() => import("@/components/Services"));
const MoreInfo = dynamic(() => import("@/components/MoreInfo"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const CallbackForm = dynamic(() => import("@/components/CallbackForm"));
const Partners = dynamic(() => import("@/components/Partners"));

export const metadata = {
  title: "Sea Turtle Conservation India | Protect Sea Turtles & Marine Life",
  description: "Join Sea Turtle Conservation India in protecting endangered sea turtles and preserving marine ecosystems. Support conservation programs, awareness campaigns, and sustainable ocean initiatives.",
  alternates: {
    canonical: "https://www.seaturtleconservation.in",
  },
  openGraph: {
    title: "Sea Turtle Conservation India",
    description: "Protecting sea turtles and marine ecosystems.",
    url: "https://www.seaturtleconservation.in",
    siteName: "Sea Turtle Conservation",
    images: [
      {
        url: "/assets/images/slide_01 (3).jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Sea Turtle Conservation",
    "url": "https://www.seaturtleconservation.in",
    "logo": "https://www.seaturtleconservation.in/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9444958197",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/groups/729945823774911/?ref=share",
      "https://instagram.com/seaturtleconservation",
      "https://linkedin.com/company/seaturtleconservation",
      "https://twitter.com/seaturtletrust",
      "https://youtube.com/seaturtleconservation"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <RequestForm />
        <Services />
        <MoreInfo />
        <Testimonials />
        <CallbackForm />
        <Partners />
      </main>
    </>
  );
}
