import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import RequestForm from "@/components/RequestForm";
import Services from "@/components/Services";
import MoreInfo from "@/components/MoreInfo";

const Testimonials = dynamic(() => import("@/components/Testimonials"));
const CallbackForm = dynamic(() => import("@/components/CallbackForm"));
const Partners = dynamic(() => import("@/components/Partners"));

export const metadata = {
  title: "Sea Turtle Conservation Trust - Home",
  description: "Join us in our mission to protect and preserve sea turtles and their habitats.",
  alternates: {
    canonical: "https://seaturtleconservation.com",
  },
  openGraph: {
    title: "Sea Turtle Conservation Trust",
    description: "Protecting sea turtles and marine ecosystems.",
    url: "https://seaturtleconservation.com",
    siteName: "Sea Turtle Conservation Trust",
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
    "@type": "Organization",
    "name": "Sea Turtle Conservation Trust",
    "url": "https://seaturtleconservation.com",
    "logo": "https://seaturtleconservation.com/assets/images/logo.png", // Assuming logo exists or using hero image
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9444958197",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/groups/729945823774911/?ref=share"
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
