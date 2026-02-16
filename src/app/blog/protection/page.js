"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaComments, FaHandshake, FaLightbulb, FaTrash, FaGlobeAmericas, FaGem } from 'react-icons/fa';

const StorySection = ({ children, className = "" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8 }}
    className={`py-12 md:py-16 ${className}`}
  >
    {children}
  </motion.div>
);

const ActionCard = ({ icon: Icon, title, text }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center gap-3 mb-3">
      <Icon className="text-primary text-xl" />
      <h3 className="font-bold text-dark">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
  </div>
);

export default function ProtectionPage() {
  return (
    <div className="bg-white font-sans text-gray-800">
      
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center bg-dark overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <Image 
              src="/assets/images/leatherback.jpg" 
              alt="Protection Hero" 
              fill 
              className="object-cover"
              priority
           />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white uppercase tracking-wider mb-4"
          >
            Protect <span className="text-primary">Sea Turtles</span>
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-white mx-auto"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Intro Story */}
        <StorySection>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700 mb-8 border-l-4 border-primary pl-6">
            <span className="text-dark font-bold">Protecting sea turtles</span> is paramount for the preservation of our marine ecosystems. A crucial step is the preservation of nesting habitats—safeguarding the beaches where life begins.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We must limit habitat destruction and regulate coastal development. Monitoring nesting sites, gathering data, and protecting nests from predation and human interference are essential strategies for their survival.
              </p>
              <ActionCard 
                icon={FaShieldAlt} 
                title="Habitat Guarding" 
                text="Safeguarding beaches ensures safe nesting for future generations." 
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <Image src="/assets/images/green turtle.jpg" alt="Green Turtle Nesting" fill className="object-cover" />
            </div>
          </div>
        </StorySection>

        {/* Threats & Actions Grid */}
        <StorySection>
          <h2 className="text-3xl font-bold text-dark mb-10 text-center">Addressing Major Threats</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ActionCard 
              icon={FaLightbulb} 
              title="Light Pollution" 
              text="Artificial lighting disorients hatchlings. We advocate for 'Turtle-Friendly' lighting to guide them safely to the sea." 
            />
            <ActionCard 
              icon={FaTrash} 
              title="Marine Debris" 
              text="Combating plastic pollution through recycling and beach clean-ups prevents fatal ingestion and entanglement." 
            />
            <ActionCard 
              icon={FaComments} 
              title="Education" 
              text="Engaging communities and tourists promotes responsible behavior, like respecting nesting sites and reporting injuries." 
            />
             <ActionCard 
              icon={FaHandshake} 
              title="Global Cooperation" 
              text="Collaborating across borders ensures protection throughout their vast migratory ranges." 
            />
          </div>
        </StorySection>

        {/* Mid-page Image */}
        <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-2xl my-12">
          <Image src="/assets/images/hawkibells.jpg" alt="Hawksbill Turtle" fill className="object-cover hover:scale-105 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
            <p className="text-white text-lg font-medium">Hawksbill Turtles: Critical for Coral Reef Health</p>
          </div>
        </div>

        {/* Conclusion Highlight */}
        <StorySection>
           <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
             <p className="text-lg text-dark font-medium leading-relaxed text-center">
                Through a combination of habitat preservation, monitoring, regulation enforcement, public education, and international cooperation, we can make a significant difference in safeguarding sea turtles and securing their long-term survival.
             </p>
           </div>
        </StorySection>
      </div>

      {/* Guardian of the Sea Section */}
      <div className="bg-dark text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <FaGem className="text-4xl text-primary mx-auto mb-4" />
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-4">Guardians of the Sea</h2>
              <p className="text-xl text-gray-300 font-light">Ancient wisdom. Fragile beauty. Interconnected life.</p>
            </motion.div>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-10 items-center bg-white/5 p-8 rounded-3xl backdrop-blur-md border border-white/10">
               <div className="md:w-1/2">
                 <p className="text-lg leading-relaxed text-gray-300 mb-4">
                   Sea turtles play a vital role in maintaining the health and balance of our oceans. They are key indicators of the well-being of marine habitats, their presence reflecting the richness and vitality of the underwater world.
                 </p>
                 <p className="text-lg leading-relaxed text-gray-300">
                    From nesting on remote beaches to embarking on epic migrations, they connect diverse marine environments, spreading nutrients and fostering biodiversity.
                 </p>
               </div>
               <div className="md:w-1/2 relative h-64 w-full rounded-xl overflow-hidden shadow-lg border border-white/20">
                 <Image src="/assets/images/leatherback.jpg" alt="Guardian Leatherback" fill className="object-cover" />
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-center">
               <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                 <h3 className="text-2xl font-bold text-primary mb-4">Ecological Architects</h3>
                 <p className="text-gray-300">
                   As they forage on seagrass beds, they maintain vital habitats. As seed dispersers, they regenerate coastal vegetation, stabilizing shorelines against erosion.
                 </p>
               </div>
               <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                 <h3 className="text-2xl font-bold text-primary mb-4">Our Responsibility</h3>
                 <p className="text-gray-300">
                   Habitat loss, pollution, and climate change jeopardize their existence. We must stand up for these magnificent creatures and defend them against these perils.
                 </p>
               </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center pt-10"
            >
              <p className="text-2xl md:text-3xl font-serif italic text-white/90 max-w-3xl mx-auto leading-relaxed">
                "Let us unite as guardians of the sea, ensuring future generations witness the majesty of sea turtles in a thriving ocean."
              </p>
            </motion.div>
          </div>
        </div>
      </div>

    </div>
  );
}
