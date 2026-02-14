import React from 'react';

export default function EcologyPage() {
  return (
    <div className="bg-white text-text-dark font-sans pt-32 pb-20">
       {/* Marquee Style Header */}
       <div className="bg-primary text-white py-3 overflow-hidden mb-12">
         <div className="whitespace-nowrap animate-marquee text-xl font-bold uppercase tracking-wider text-center">
           Balancing is the Key to Thriving Ecology
         </div>
       </div>

      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="space-y-12">
            
            <section>
                <h1 className="text-3xl font-bold text-dark mb-4">Biodiversity:</h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                   A balanced ecosystem promotes high biodiversity, meaning it supports a wide variety of plant and animal species. Each species plays a unique role in the ecosystem, contributing to its overall health and functioning. Biodiversity enhances the stability and resilience of an ecosystem, making it better equipped to withstand disturbances or changes.
                </p>
            </section>

             <section>
                <h1 className="text-3xl font-bold text-dark mb-4">Nutrient Cycling:</h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                   Balance is necessary for efficient nutrient cycling within an ecosystem. Nutrients, such as carbon, nitrogen, and phosphorus, flow through the ecosystem in a continuous cycle. Organisms decompose organic matter and release nutrients back into the environment, allowing them to be reused by other organisms. If the balance is disrupted, nutrient imbalances can occur, leading to detrimental effects on the ecosystem's productivity and health.
                </p>
            </section>

             <section>
                <h1 className="text-3xl font-bold text-dark mb-4">Habitat Protection:</h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                   Preserving and protecting the natural habitats of sea turtles, such as nesting beaches and foraging areas, is essential. Implementing measures to mitigate coastal development and reduce pollution can help maintain healthy ecosystems for sea turtles and other marine species.
                </p>
            </section>

             <section>
                <h1 className="text-3xl font-bold text-dark mb-4">Sustainable Fishing Practices:</h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                   Encouraging sustainable fishing practices, such as using turtle-friendly fishing gear (e.g., turtle excluder devices), can reduce accidental bycatch of sea turtles. By reducing fishing-related mortality, we can help maintain the population of sea turtles and the overall health of marine ecosystems.
                </p>
            </section>

            <section>
                <h1 className="text-3xl font-bold text-dark mb-4">Pollution Reduction:</h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                   Reducing pollution, especially marine debris like plastic, is crucial for sea turtle conservation. Sea turtles often mistake plastic bags and other debris for food, which can lead to ingestion and entanglement, causing serious injuries or death. Implementing waste management strategies, promoting recycling, and raising awareness about the impacts of pollution are important steps towards reducing these threats.
                </p>
            </section>

            <section>
                <h1 className="text-3xl font-bold text-dark mb-4">Climate Change Mitigation:</h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                   Taking action to mitigate climate change is vital for the long-term survival of sea turtles and their habitats. Rising temperatures, sea-level rise, and ocean acidification can have detrimental effects on sea turtle nesting sites and food availability. By adopting sustainable practices, reducing greenhouse gas emissions, and supporting renewable energy sources, we can help minimize these impacts.
                </p>
            </section>

            {/* Sustainable Future Section */}
             <div className="mt-16 pt-10 border-t border-gray-200">
                <h1 className="text-4xl font-bold text-center text-primary uppercase mb-12">For a Sustainable Future</h1>
                
                <div className="space-y-10">
                    <section>
                       <h2 className="text-2xl font-bold text-dark mb-3">Stakeholder Engagement:</h2>
                       <p className="text-lg text-gray-700">
                          Engaging local communities, fishermen, businesses, and other stakeholders is vital for successful sea turtle conservation. By involving them in decision-making processes, raising awareness about the importance of sea turtles, and providing economic incentives for sustainable practices, we can foster a sense of ownership and cooperation towards conservation efforts.
                       </p>
                    </section>

                     <section>
                       <h2 className="text-2xl font-bold text-dark mb-3">Sustainable Tourism:</h2>
                       <p className="text-lg text-gray-700">
                          Tourism can provide economic benefits to coastal communities but can also pose challenges to sea turtles if not managed responsibly. Promoting sustainable tourism practices, such as responsible wildlife viewing, adherence to nesting site guidelines, and educational programs for tourists, can minimize negative impacts on sea turtles while supporting local economies.
                       </p>
                    </section>

                    <section>
                       <h2 className="text-2xl font-bold text-dark mb-3">Coastal Development Planning:</h2>
                       <p className="text-lg text-gray-700">
                          Careful planning and regulation of coastal development are necessary to prevent the destruction of nesting beaches and important habitats. Implementing guidelines for setback distances from the shoreline, avoiding critical nesting areas, and considering the ecological needs of sea turtles in coastal development projects can help minimize negative impacts.
                       </p>
                    </section>

                     <section>
                       <h2 className="text-2xl font-bold text-dark mb-3">Lighting Management:</h2>
                       <p className="text-lg text-gray-700">
                          Artificial lighting on beaches can disorient nesting females and hatchlings, leading to nest abandonment or misdirection. Implementing lighting management practices, such as using low-intensity amber or red lights and shielding them from the beach, can help mitigate these issues and ensure the successful nesting and hatching of sea turtles.
                       </p>
                    </section>

                     <section>
                       <h2 className="text-2xl font-bold text-dark mb-3">Conservation Education:</h2>
                       <p className="text-lg text-gray-700">
                          Education and awareness programs targeting local communities, schools, and tourists can foster a greater understanding of the importance of sea turtles and the need for their conservation. By promoting responsible behavior, encouraging the reporting of nesting events or injured turtles, and involving communities in conservation initiatives, we can empower individuals to actively contribute to sea turtle protection.
                       </p>
                    </section>
                     <section>
                       <h2 className="text-2xl font-bold text-dark mb-3">Collaboration and Research:</h2>
                       <p className="text-lg text-gray-700">
                          Collaboration between scientists, conservation organizations, and government agencies is crucial for effective sea turtle conservation. By conducting research, monitoring populations, sharing knowledge with expertise, and implementing adaptive management strategies, we can continuously improve conservation efforts and adapt to changing circumstances.
                       </p>
                    </section>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
}
