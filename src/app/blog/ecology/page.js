"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaRecycle, FaUmbrellaBeach, FaFish, FaTrashAlt, FaTemperatureHigh, FaUsers, FaPlaneDeparture, FaCity, FaLightbulb, FaChalkboardTeacher, FaHandsHelping } from 'react-icons/fa';

const EcologyCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-primary group"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-primary transition-colors duration-300">
        <Icon className="text-2xl text-primary group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-dark">{title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{description}</p>
  </motion.div>
);

const FutureSection = ({ icon: Icon, title, description }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex gap-6 p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
  >
    <div className="flex-shrink-0">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
        <Icon size={20} />
      </div>
    </div>
    <div>
      <h3 className="text-lg font-bold text-dark mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    </div>
  </motion.div>
);

export default function EcologyPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20 font-sans">
      
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Marine Ecology</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-dark mb-6 leading-tight">
            Balancing is the Key to <span className="text-primary">Thriving Ecology</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Understanding the delicate equilibrium of our oceans and the vital role every species plays in sustaining life.
          </p>
        </motion.div>
      </div>

      {/* Main Grid Section */}
      <div className="container mx-auto px-4 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <EcologyCard 
            icon={FaBalanceScale}
            title="Biodiversity"
            description="A balanced ecosystem promotes high biodiversity, supporting a wide variety of plant and animal species. Each species contributes to the ecosystem's overall health, stability, and resilience against disturbances."
            delay={0.1}
          />
          <EcologyCard 
            icon={FaRecycle}
            title="Nutrient Cycling"
            description="Efficient nutrient cycling is essential. Organisms decompose organic matter, releasing carbon, nitrogen, and phosphorus back into the environment. Disruptions can lead to imbalances that harm productivity."
            delay={0.2}
          />
          <EcologyCard 
            icon={FaUmbrellaBeach}
            title="Habitat Protection"
            description="Preserving nesting beaches and foraging areas is critical. Mitigating coastal development and reducing pollution helps maintain healthy ecosystems for sea turtles and other marine life."
            delay={0.3}
          />
          <EcologyCard 
            icon={FaFish}
            title="Sustainable Fishing"
            description="Encouraging turtle-friendly fishing gear and sustainable practices reduces accidental bycatch. This helps maintain sea turtle populations and preserves the broader marine food web."
            delay={0.4}
          />
          <EcologyCard 
            icon={FaTrashAlt}
            title="Pollution Reduction"
            description="Combating marine debris, especially plastics, is vital. Sea turtles often mistake plastic for food. Waste management, recycling, and awareness are key to reducing these fatal threats."
            delay={0.5}
          />
          <EcologyCard 
            icon={FaTemperatureHigh}
            title="Climate Mitigation"
            description="Fighting climate change is crucial. Rising temperatures and ocean acidification threaten nesting sites and food sources. Sustainable practices and renewable energy are needed for long-term survival."
            delay={0.6}
          />
        </div>
      </div>

      {/* Sustainable Future Section */}
      <div className="bg-white py-20 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">For a Sustainable Future</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Building a harmonious relationship between human activities and marine ecosystems requires multifaceted action.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-6xl mx-auto">
            <FutureSection 
              icon={FaUsers} 
              title="Stakeholder Engagement" 
              description="Involving local communities, fishermen, and businesses in decision-making fosters ownership and cooperation, making conservation efforts effective and sustainable." 
            />
            <FutureSection 
              icon={FaPlaneDeparture} 
              title="Sustainable Tourism" 
              description="Promoting responsible wildlife viewing and educational programs minimizes negative impacts on sea turtles while providing economic benefits to local communities." 
            />
            <FutureSection 
              icon={FaCity} 
              title="Coastal Development" 
              description="Careful planning and regulation prevent the destruction of critical habitats. Implementing setback guidelines and respecting nesting areas are essential." 
            />
            <FutureSection 
              icon={FaLightbulb} 
              title="Lighting Management" 
              description="Using turtle-friendly low-intensity lighting near beaches prevents disorienting nesting females and hatchlings, ensuring successful reproduction." 
            />
            <FutureSection 
              icon={FaChalkboardTeacher} 
              title="Conservation Education" 
              description="Raising awareness in schools and communities promotes responsible behavior and empowers individuals to become active protectors of marine life." 
            />
            <FutureSection 
              icon={FaHandsHelping} 
              title="Collaboration & Research" 
              description="Partnerships between scientists, governments, and NGOs enable effective monitoring, knowledge sharing, and adaptive strategies for conservation." 
            />
          </div>
        </div>
      </div>

    </div>
  );
}
