import React from 'react';
import Image from 'next/image';

export default function ProtectionPage() {
  return (
    <div className="bg-white text-text-dark font-sans pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12 text-center bg-gray-100 py-6 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-primary uppercase tracking-wide">
              Protect Sea Turtles
            </h1>
        </header>

        <div className="space-y-12">
            
            <div className="prose max-w-none text-lg text-gray-700 space-y-6">
                <p>
                    Protecting sea turtles is of the most importance for the preservation of our marine ecosystems. One crucial step in their conservation is the preservation of nesting habitats. This involves safeguarding the beaches and coastal areas where sea turtles lay their eggs by implementing measures to limit habitat destruction and regulate coastal development. Additionally, it is essential to monitor nesting sites, gather data on nesting activities, and implement strategies to protect the nests from predation and human interference.
                </p>
                <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-md my-8">
                     <Image src="/assets/images/green turtle.jpg" alt="Green Turtle" fill className="object-cover" />
                </div>
                
                <p>
                    Artificial lighting on nesting beaches poses a significant threat to sea turtles, as it can disorient hatchlings and deter nesting females. To mitigate this, regulations should be enforced to minimize beachfront lighting and promote the use of turtle-friendly lighting practices. Furthermore, addressing the issue of accidental capture and entanglement in fishing gear is crucial. By promoting turtle-friendly fishing methods and gear modifications, we can reduce the risk of bycatch and protect sea turtles.
                </p>

                <p>
                    Marine pollution, particularly marine debris, is a grave concern for sea turtles. Taking action to combat plastic pollution and reduce marine debris is vital. Implementing recycling programs, organizing beach clean-ups, and raising awareness about the impact of marine debris can significantly contribute to the protection of sea turtles.
                </p>
                 <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-md my-8">
                     <Image src="/assets/images/hawkibells.jpg" alt="Hawksbill Turtle" fill className="object-cover" />
                </div>

                <p>
                    Establishing marine protected areas and marine reserves provides safe havens for sea turtles, ensuring the conservation of critical habitats, foraging grounds, migration routes, and nesting beaches. These protected areas play a vital role in allowing sea turtle populations to recover and flourish.
                </p>

                <p>
                    Education and outreach programs are essential in raising awareness about sea turtles and their conservation. By engaging local communities, fishermen, tourists, and policymakers, we can promote responsible behavior, such as not disturbing nesting turtles, abstaining from consuming sea turtle products, and reporting injured or stranded turtles.
                </p>
                <p>
                    Cooperation is key in the conservation of sea turtles. Collaborating with other countries, organizations, and stakeholders allows for the implementation of effective conservation measures. Supporting international agreements and regional conservation initiatives ensures the protection of sea turtles throughout their migratory range.
                </p>
                 <p className="font-semibold bg-primary/10 p-4 rounded border-l-4 border-primary">
                    Through a combination of habitat preservation, monitoring, regulation enforcement, public education, and international cooperation, we can make a significant difference in safeguarding sea turtles and securing their long-term survival for future generations.
                </p>
            </div>

            <div className="mt-16">
                 <h1 className="text-4xl font-bold text-center text-primary uppercase mb-8 border-t pt-8">Guardian of the Sea</h1>
                 <div className="text-lg text-gray-700 space-y-6">
                    <p>
                        Sea turtles, majestic creatures of the ocean, serve as the guardians of the sea. With their ancient wisdom and grace, they embody the fragile beauty and interconnectedness of marine ecosystems. As guardians, sea turtles play a vital role in maintaining the health and balance of our oceans. They are key indicators of the well-being of marine habitats, their presence reflecting the richness and vitality of the underwater world.
                    </p>
                    <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-md my-8">
                     <Image src="/assets/images/leatherback.jpg" alt="Leatherback Turtle" fill className="object-cover" />
                    </div>
                    <p>
                        These remarkable creatures navigate vast distances, guided by an innate sense of direction imprinted in their very being. From nesting on remote beaches to embarking on epic migrations across oceans, sea turtles traverse the depths with resilience and determination. In their journeys, they connect diverse marine environments, spreading life-sustaining nutrients and fostering biodiversity.
                    </p>
                    <p>
                        The tireless efforts of sea turtles in shaping marine ecosystems cannot be overstated. As they forage on seagrass beds, they help maintain the health of these vital habitats, ensuring their survival and providing shelter for countless marine species. Furthermore, their role as seed dispersers contributes to the regeneration of coastal vegetation, stabilizing shorelines and protecting against erosion.
                    </p>
                    <p>
                        Yet, despite their intrinsic value and ecological significance, sea turtles face numerous threats. Habitat loss, pollution, climate change, entanglement in fishing gear, and poaching all jeopardize their existence. As guardians of the sea, it is our responsibility to stand up for these magnificent creatures, to protect and defend them against the perils they encounter.
                    </p>
                    <p>
                        We must strive to safeguard their nesting grounds, ensuring these precious habitats remain undisturbed and free from encroachment. By embracing sustainable practices and reducing pollution, we can create a cleaner and safer environment for sea turtles and the countless species that rely on healthy oceans.
                    </p>
                    <p>
                         Education and awareness are fundamental in nurturing a sense of stewardship for these gentle guardians. Through sharing knowledge, inspiring action, and fostering empathy, we can empower individuals and communities to become advocates for sea turtle conservation. By promoting responsible tourism and supporting initiatives that protect sea turtles, we contribute to their well-being and the preservation of our oceans.
                    </p>
                     <p className="font-bold text-xl text-center italic text-primary mt-8">
                        Let us unite as guardians of the sea, honoring and protecting these ancient mariners. Together, we can ensure that future generations will witness the majesty of sea turtles and experience the wonders of a thriving, vibrant ocean.
                    </p>
                 </div>
            </div>

        </div>
      </div>
    </div>
  );
}
