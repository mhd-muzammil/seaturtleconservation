import React from 'react';
import Image from 'next/image';

export default function BenefitsPage() {
  return (
    <div className="bg-white text-text-dark font-sans pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-dark uppercase leading-tight mb-4">
              Unveiling the Human Life <span className="text-primary">Benefits of Sea Turtle</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
        </header>

        <div className="space-y-12">
            {/* Section 1: Introduction & Jellyfish Control */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
               <div className="w-full md:w-1/2 relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                 <Image src="/assets/images/sts0.jpg" alt="Sea Turtles" fill className="object-cover" />
               </div>
               <div className="w-full md:w-1/2 space-y-4">
                  <p className="text-lg leading-relaxed text-gray-700">
                    Sea turtles play a vital role in maintaining the health and balance of marine ecosystems, and their presence offers numerous benefits to human life. First and foremost, sea turtles help control jellyfish populations. They are known to feed on jellyfish, which can sometimes become problematic when their numbers increase rapidly. By keeping jellyfish populations in check, sea turtles help maintain the ecological balance of the ocean and protect other marine species.
                  </p>
               </div>
            </div>

            {/* Section 2: Beach Health */}
            <div className="bg-gray-50 p-8 rounded-lg">
               <h2 className="text-2xl font-bold text-dark mb-4 border-b pb-2 inline-block">Beach Health</h2>
               <p className="text-lg leading-relaxed text-gray-700">
                 Additionally, sea turtles contribute to beach health. When female sea turtles come ashore to lay their eggs, they dig nests in the sand, which helps to aerate and oxygenate the beach ecosystem. The eggs that are not successfully hatched also provide essential nutrients to the beach environment as they decompose. This process enhances the overall health of the beach ecosystem, benefiting coastal communities and tourism.
               </p>
            </div>

            {/* Section 3: Indicators of Health */}
            <div>
               <h2 className="text-2xl font-bold text-dark mb-4 border-b pb-2 inline-block">Indicators of Marine Health</h2>
               <p className="text-lg leading-relaxed text-gray-700">
                 Furthermore, sea turtles are indicators of the overall health of the marine environment. These ancient creatures are highly sensitive to changes in their surroundings, including pollution, habitat destruction, and climate change. By monitoring sea turtle populations, scientists can gain valuable insights into the state of the oceans. This knowledge helps us make informed decisions about conservation and sustainable practices to protect not only sea turtles but also the entire marine ecosystem.
               </p>
            </div>

             {/* Section 4: Eco-Tourism */}
            <div>
               <h2 className="text-2xl font-bold text-dark mb-4 border-b pb-2 inline-block">Eco-Tourism Benefits</h2>
               <p className="text-lg leading-relaxed text-gray-700">
                 Turtles also attract eco-tourism, benefiting local communities economically. Many people are drawn to coastal areas to witness sea turtles nesting or hatching. Tourists contribute to local economies by staying in hotels, eating at restaurants, participating in guided tours and educational programs centered around sea turtles. This eco-tourism helps support local businesses and communities that rely on a healthy marine environment for their livelihoods.
               </p>
            </div>

            {/* Ecosystem Health Detailed */}
             <div className="bg-gray-50 p-8 rounded-lg mt-8">
               <h1 className="text-3xl font-bold text-primary mb-6 uppercase">Ecosystem Health</h1>
               <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-gray-700">
                    Sea turtles play a significant role in maintaining the health of marine ecosystems, making their conservation essential for ecosystem health. As keystone species, sea turtles have a direct impact on the balance and functioning of their habitats. Their foraging habits help control populations of jellyfish, preventing the unchecked proliferation of these organisms, which can disrupt marine food webs.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                     Furthermore, sea turtles contribute to nutrient cycling and energy flow within ecosystems. When sea turtles nest on beaches, their eggs provide nutrients to the surrounding dune vegetation as they hatch or decompose. This process enriches the beach ecosystem and supports the growth of plants that stabilize the sand and provide habitat for other species. Additionally, as sea turtles migrate and forage in different areas, they transport nutrients between different parts of the ocean, contributing to the overall health and productivity of marine ecosystems.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                     The presence of sea turtles also indicates the overall health of the marine environment. As sensitive creatures, they are particularly vulnerable to environmental changes such as pollution, habitat degradation, and climate change. Monitoring sea turtle populations and studying their behaviors can provide valuable insights into the state of the oceans. By understanding the challenges faced by sea turtles, scientists can identify and address broader issues that may affect the entire ecosystem.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                     Moreover, sea turtles contribute to the economic and social well-being of coastal communities. Many coastal regions rely on tourism, and sea turtles attract visitors who come to witness nesting or hatching events. This ecotourism provides economic opportunities for local businesses and communities, supporting conservation efforts and encouraging sustainable practices that benefit the overall ecosystem health.
                  </p>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
}
