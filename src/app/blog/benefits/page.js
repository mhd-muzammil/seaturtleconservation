"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaWater, FaUmbrellaBeach, FaGlobeAmericas, FaSuitcaseRolling, FaHeartbeat, FaLeaf, FaBinoculars, FaHandHoldingHeart } from 'react-icons/fa';

const Section = ({ children, className = "" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`py-16 md:py-24 ${className}`}
  >
    {children}
  </motion.div>
);

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 group"
  >
    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
      <Icon className="text-2xl text-primary group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-dark mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

export default function BenefitsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/images/sts0.jpg" 
            alt="Sea Turtle Hero" 
            fill 
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/80 backdrop-blur-sm text-sm font-bold tracking-wider mb-6">
              MARINE ECOSYSTEM
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Benefits of <br/>
              <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">
                Sea Turtles
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto font-light">
              Unveiling the profound impact sea turtles have on human life and ocean health.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-20">
        
        {/* Intro Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">Guardians of the Ocean Balance</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Sea turtles are not just ancient mariners; they are vital architects of the marine environment. Their presence is a direct indicator of ocean health, and their daily activities maintain the delicate balance required for a thriving ecosystem.
              </p>
              <div className="flex items-center gap-4 text-primary font-semibold">
                <FaHeartbeat className="text-2xl" />
                <span>Vital for Marine Life Support</span>
              </div>
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg group">
              <Image 
                src="/assets/images/sea turtleee.jpg" 
                alt="Sea Turtle Swimming" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
            </div>
          </div>
        </motion.div>

        {/* Key Benefits Grid */}
        <Section className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">Ecological Impact</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={FaWater}
              title="Jellyfish Control" 
              description="Sea turtles, especially Leatherbacks, consume massive amounts of jellyfish. This natural predation keeps jellyfish populations in check, preventing them from dominating the ecosystem and depleting fish stocks vital for human consumption."
              delay={0.1}
            />
            <FeatureCard 
              icon={FaUmbrellaBeach}
              title="Beach Health" 
              description="Nesting sea turtles deposit nutrients in beach dunes through their eggs. Unhatched eggs decompose and provide essential high-quality nutrients for dune vegetation, which in turn prevents beach erosion."
              delay={0.2}
            />
            <FeatureCard 
              icon={FaGlobeAmericas}
              title="Ocean Health Indicators" 
              description="As species that travel vast distances and inhabit diverse marine environments, sea turtles are barometers of ocean health. Their well-being reflects the impact of pollution, climate change, and habitat destruction."
              delay={0.3}
            />
          </div>
        </Section>

        {/* Highlight Section: Eco-Tourism */}
        <Section>
          <div className="bg-dark text-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="relative h-80 md:h-auto min-h-[400px]">
                <Image 
                  src="/assets/images/slide_01 (3).jpg" 
                  alt="Eco Tourism" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              </div>
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-primary mb-4">
                  <FaSuitcaseRolling className="text-2xl" />
                  <span className="font-bold tracking-widest uppercase text-sm">Economic Value</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Boosting Local Economies through Eco-Tourism</h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                  Sea turtles are a major draw for wildlife enthusiasts. Responsibly managed turtle watching generates significant revenue for coastal communities, creating jobs and providing an economic incentive to protect rather than exploit these creatures.
                </p>
                <button className="self-start px-8 py-3 bg-primary hover:bg-white hover:text-primary text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-primary/50">
                  Support Our Mission
                </button>
              </div>
            </div>
          </div>
        </Section>

        {/* Detailed Ecosystem Health */}
        <Section className="max-w-5xl mx-auto mb-20">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 md:p-16">
            <div className="text-center mb-12">
               <span className="text-primary font-bold tracking-wider uppercase">Deep Dive</span>
               <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2">Comprehensive Ecosystem Health</h2>
            </div>
            
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <FaLeaf className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark mb-2">Nutrient Cycling & Energy Flow</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sea turtles act as biological transporters of nutrients. By foraging in nutrient-rich areas and nesting on nutrient-poor beaches, they transfer energy between marine and terrestrial ecosystems. This process is crucial for the growth of coastal vegetation and the stability of shoreline dunes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <FaBinoculars className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark mb-2">Scientific Insight & Monitoring</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Studying sea turtles provides critical data on the state of the oceans. Because they are sensitive to environmental changes, shifts in their population or health can alert scientists to broader issues like rising sea temperatures, pollution levels, and the health of seagrass beds and coral reefs.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                  <FaHandHoldingHeart className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark mb-2">Community & Cultural Significance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Beyond biology, sea turtles hold immense cultural value for many coastal societies. Protecting them preserves cultural heritage while fostering community pride. Engagement in conservation efforts strengthens social bonds and promotes a culture of environmental stewardship.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Section>

      </div>
    </div>
  );
}
