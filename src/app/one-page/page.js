"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function OnePage() {
  const partners = [
    "/assets/images/st0.jpg",
    "/assets/images/st1.jpg",
    "/assets/images/st2.jpg",
    "/assets/images/st3.jpg",
  ];

  return (
    <div className="bg-white text-text-dark font-sans">
      
      {/* Hero Section */}
      <div className="relative w-full h-[600px] flex items-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/slide_01.jpg')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <h6 className="text-primary text-lg font-bold uppercase tracking-wider mb-2">Lets do for our earth</h6>
            <h1 className="text-5xl md:text-6xl font-bold uppercase leading-tight mb-6">
              Lets be a volunteer <br />&amp; join together among world
            </h1>
            <p className="text-lg mb-8 leading-relaxed">
              It is protecting fishes from jelly fish connected with food chain. Join us in our mission to preserve marine life.
            </p>
            <Link href="/contact" className="bg-primary text-white font-bold py-3 px-8 rounded hover:bg-opacity-90 transition-colors uppercase tracking-wide">
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* Request for Donations CTA */}
      <div className="bg-primary py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-6 md:mb-0 text-center md:text-left">
            <h4 className="text-2xl font-bold mb-2">Request for donations</h4>
            <span className="font-light opacity-90">Lets donate to healthy habitat of marine creatures</span>
          </div>
          <div>
            <Link href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-primary transition-colors uppercase tracking-wide">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Endangered Species */}
      <div className="py-20 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark uppercase">Endangered Species</h2>
            <span className="text-primary italic text-lg">6 most endangered sea turtle species</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/assets/images/hawkibells.jpg" 
                  alt="Hawksbill Turtle" 
                  width={400} 
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-3 text-dark">Hawksbill Turtle<br/><span className="text-sm font-normal italic text-gray-500">(Eretmochelys imbricata)</span></h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The hawksbill turtle is critically endangered according to the IUCN Red List. It is threatened by habitat loss, poaching for its beautiful shell, and accidental capture in fishing gear.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/assets/images/kemp  ridley.jpg" 
                  alt="Kemp's Ridley Turtle" 
                  width={400} 
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-3 text-dark">Kemp's Ridley Turtle<br/><span className="text-sm font-normal italic text-gray-500">(Lepidochelys kempii)</span></h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The Kemp's ridley turtle is the most endangered sea turtle species. It is critically endangered and primarily found in the Gulf of Mexico. The major threats include habitat degradation and pollution.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/assets/images/leatherback.jpg" 
                  alt="Leatherback Turtle" 
                  width={400} 
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-3 text-dark">Leatherback Turtle<br/><span className="text-sm font-normal italic text-gray-500">(Dermochelys coriacea)</span></h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                   The leatherback turtle is the largest species of sea turtle and is vulnerable. Threats include egg collection, fisheries bycatch, pollution, and habitat alteration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hatching Process Section - Dark Background */}
      <div className="py-20 bg-dark text-white relative">
         {/* Background Image Overlay */}
         <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/fun-facts-bg.jpg')" }}></div>
         <div className="container mx-auto px-4 relative z-10">
            <div className="mb-12">
               <span className="text-primary font-bold uppercase tracking-wider">Save Turtles</span>
               <h2 className="text-4xl font-bold mb-8">How do <em className="text-primary not-italic">Sea Turtle Hatch?</em></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-8">
                  <div>
                     <h6 className="text-primary font-bold text-lg mb-2">NESTING</h6>
                     <p className="text-gray-300 text-sm leading-relaxed">
                        Female sea turtles come ashore, typically at night, to lay their eggs in sandy beaches. They dig a hole with their flippers and deposit a clutch of eggs into the nest. Each clutch can contain around 100 to 200 eggs.
                     </p>
                  </div>
                  <div>
                     <h6 className="text-primary font-bold text-lg mb-2">INCUBATION</h6>
                     <p className="text-gray-300 text-sm leading-relaxed">
                        The eggs are left buried in the warm sand, providing a controlled environment. The temperature plays a crucial role in determining the sex of the hatchlings: cooler for males, warmer for females.
                     </p>
                  </div>
                  <div>
                     <h6 className="text-primary font-bold text-lg mb-2">DEVELOPMENT</h6>
                     <p className="text-gray-300 text-sm leading-relaxed">
                        The embryos develop inside the eggs for several weeks or months depending on the species.
                     </p>
                  </div>
                  <div>
                     <h6 className="text-primary font-bold text-lg mb-2">HATCHING</h6>
                     <p className="text-gray-300 text-sm leading-relaxed">
                        Hatchlings use a "caruncle" to crack the shell. Once they break through, they remain in the nest briefly to absorb their yolk sac.
                     </p>
                  </div>
               </div>
               
               <div className="space-y-8">
                  <div>
                     <h6 className="text-primary font-bold text-lg mb-2">EMERGENCE</h6>
                     <p className="text-gray-300 text-sm leading-relaxed">
                        When ready, hatchlings dig to the surface, naturally attracted to the brighter horizon over the ocean to find their way.
                     </p>
                  </div>
                   <div>
                     <h6 className="text-primary font-bold text-lg mb-2">SCRAMBLE TO THE SEA</h6>
                     <p className="text-gray-300 text-sm leading-relaxed">
                        The "scramble" is a perilous journey to the ocean, relying on natural cues and moving quickly to avoid predation.
                     </p>
                  </div>
                  <div>
                     <h6 className="text-primary font-bold text-lg mb-2">OCEAN ENTRY</h6>
                     <p className="text-gray-300 text-sm leading-relaxed">
                        Reaching the water, they use their flippers to swim away from the shore, embarking on their journey in the open ocean.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Life Cycle Section */}
      <div className="py-20 container mx-auto px-4" id="about">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Images Grid */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
             <div className="relative h-40 md:h-56 rounded-lg overflow-hidden"><Image src="/assets/images/lifecycle.jpg" alt="Life Cycle" fill className="object-cover" /></div>
             <div className="relative h-40 md:h-56 rounded-lg overflow-hidden"><Image src="/assets/images/egg.jpg" alt="Egg" fill className="object-cover" /></div>
             <div className="relative h-40 md:h-56 rounded-lg overflow-hidden"><Image src="/assets/images/juvenile.jpg" alt="Juvenile" fill className="object-cover" /></div>
             <div className="relative h-40 md:h-56 rounded-lg overflow-hidden"><Image src="/assets/images/adult.jpg" alt="Adult" fill className="object-cover" /></div>
          </div>
          
          {/* Right Content */}
          <div className="w-full md:w-1/2">
             <span className="text-primary font-bold uppercase tracking-wider block mb-2">Life Cycle</span>
             <h2 className="text-3xl font-bold mb-8 text-dark">Life Cycle Of Sea Turtle</h2>
             
             <div className="space-y-6">
                <div>
                   <h6 className="font-bold text-dark">EMBRYONIC STAGE</h6>
                   <p className="text-gray-600 text-sm pl-4 border-l-2 border-primary">
                      The life cycle begins when a female lays eggs. The nest temperature determines hatchling sex.
                   </p>
                </div>
                <div>
                   <h6 className="font-bold text-dark">HATCHLING STAGE</h6>
                   <p className="text-gray-600 text-sm pl-4 border-l-2 border-primary">
                      After incubation, hatchlings emerge and make their way to the ocean, avoiding predators.
                   </p>
                </div>
                 <div>
                   <h6 className="font-bold text-dark">EARLY PELAGIC STAGE</h6>
                   <p className="text-gray-600 text-sm pl-4 border-l-2 border-primary">
                      Hatchlings drift with currents in the open ocean, feeding on plankton for several years.
                   </p>
                </div>
                 <div>
                   <h6 className="font-bold text-dark">JUVENILE & SUBADULT STAGES</h6>
                   <p className="text-gray-600 text-sm pl-4 border-l-2 border-primary">
                      They move to coastal areas, feeding on varied prey and migrating long distances as they grow.
                   </p>
                </div>
                <div>
                   <h6 className="font-bold text-dark">ADULT & REPRODUCTION</h6>
                   <p className="text-gray-600 text-sm pl-4 border-l-2 border-primary">
                      Adults return to natal beaches to reproduce. Females lay multiple clutches every 2-3 years.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>

       {/* Threats Section */}
       <div className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-dark">Threats to Sea Turtles</h2>
                <span className="text-primary italic">Control threats</span>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow border-l-4 border-green-600">
                   <div className="relative h-48 mb-6 rounded overflow-hidden">
                      <Image src="/assets/images/green turtle.jpg" alt="Climate Change" fill className="object-cover" />
                   </div>
                   <h4 className="text-xl font-bold text-green-700 mb-4 shadow-sm inline-block">Climate Change</h4>
                   <p className="text-gray-600 leading-relaxed bg-orange-100 p-4 rounded text-sm">
                      Rising temperatures, ocean acidification, and changing weather patterns affect sea turtles. It can lead to the loss of nesting beaches, skewed sex ratios, and food source disruption.
                   </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow border-l-4 border-green-600">
                   <div className="relative h-48 mb-6 rounded overflow-hidden">
                      <Image src="/assets/images/leatherback.jpg" alt="Habitat Loss" fill className="object-cover" />
                   </div>
                   <h4 className="text-xl font-bold text-green-700 mb-4 shadow-sm inline-block">Habitat Loss & Degradation</h4>
                   <p className="text-gray-600 leading-relaxed bg-orange-100 p-4 rounded text-sm">
                      The destruction of nesting beaches, coral reefs, and feeding areas due to coastal development, pollution, and erosion poses a significant threat.
                   </p>
                </div>
             </div>
          </div>
       </div>

      {/* Interesting Facts (Dark Section) */}
      <div className="py-20 bg-[#343434] text-white" id="contactus">
         <div className="container mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold mb-2">Interesting Facts <em className="text-primary not-italic">About Sea Turtles</em></h2>
               <span className="italic opacity-80">Enigmatic creatures, embodying the mysteries of the sea</span>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-10">
               <div>
                  <h4 className="text-primary text-xl font-bold mb-3">Size And LifeSpan</h4>
                  <p className="text-gray-300 leading-relaxed pl-8 border-l border-gray-600">
                     Sea turtles vary in size. The leatherback can reach 7 feet and 2,000 pounds, while the Kemp's ridley is about 2 feet and 100 pounds. Some live for several decades or over a century.
                  </p>
               </div>
               <div>
                  <h4 className="text-primary text-xl font-bold mb-3">Sense of Magnetism</h4>
                   <p className="text-gray-300 leading-relaxed pl-8 border-l border-gray-600">
                     Sea turtles have magnetite crystals in their brains acting as a biological compass, allowing them to sense Earth's magnetic fields to navigate across vast oceans.
                  </p>
               </div>
               <div>
                  <h4 className="text-primary text-xl font-bold mb-3">Reducing Competition</h4>
                   <p className="text-gray-300 leading-relaxed pl-8 border-l border-gray-600">
                     By preying on jellyfish, sea turtles help fish populations. Jellyfish compete with fish for food; keeping jellyfish numbers in check reduces this competition.
                  </p>
               </div>
            </div>
         </div>
      </div>

       {/* Partners Section (Reused) */}
       <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((imgSrc, index) => (
               <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                  <div className="relative w-full h-32 md:h-40">
                    <Image
                      src={imgSrc}
                      alt={`Partner ${index + 1}`}
                      fill
                      className="object-contain" 
                    />
                  </div>
               </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
}
