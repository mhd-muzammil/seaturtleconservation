"use client";
import React from "react";
import Image from "next/image";

export default function Partners() {
  const partners = [
    { image: "/assets/images/turtle1.jpg" },
    { image: "/assets/images/turtle4.jpg" },
    { image: "/assets/images/turtle2.jpg" },
    { image: "/assets/images/st0.jpg" },
    { image: "/assets/images/sea turtleee.jpg" },
  ];

  // Duplicate the array multiple times to ensure smooth infinite scrolling
  const allPartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="partners py-20 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-4 mb-12 text-center">
         <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            Trusted By
         </span>
         <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Our Conservation Partners
         </h2>
      </div>
      
      {/* Gradient Masks for Fade Effect */}
      <div className="absolute top-0 left-0 w-20 md:w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-20 md:w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

      {/* Marquee Container */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll group-hover:paused">
           {allPartners.map((partner, index) => (
             <div key={index} className="mx-4 w-[200px] flex-shrink-0 group">
                <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex items-center justify-center h-[120px] border border-gray-100 hover:border-primary/20 transform hover:-translate-y-1 cursor-pointer">
                  <div className="relative w-full h-full">
                    <Image 
                        src={partner.image} 
                        alt={`Partner ${index + 1}`} 
                        fill
                        className="object-contain transition-all duration-300 transform group-hover:scale-110"
                    />
                  </div>
                </div>
             </div>
           ))}
        </div>
        {/* Second set for seamless looping (if needed, but duplicating array helps) */}
         <div className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll group-hover:paused" aria-hidden="true">
           {allPartners.map((partner, index) => (
             <div key={`dup-${index}`} className="mx-4 w-[200px] flex-shrink-0 group">
                <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex items-center justify-center h-[120px] border border-gray-100 hover:border-primary/20 transform hover:-translate-y-1 cursor-pointer">
                  <div className="relative w-full h-full">
                    <Image 
                        src={partner.image} 
                        alt={`Partner ${index + 1}`} 
                        fill
                        className="object-contain transition-all duration-300 transform group-hover:scale-110"
                    />
                  </div>
                </div>
             </div>
           ))}
        </div>
      </div>

    </section>
  );
}
