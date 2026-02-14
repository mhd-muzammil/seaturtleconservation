"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// --- Components for Magic UI Effects ---

const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(14, 165, 233, 0.1), transparent 40%)`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};

const TextReveal = ({ text, className = "" }) => {
    const letters = text.split("");
    const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
      }),
    };
  
    const child = {
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", damping: 12, stiffness: 100 },
      },
      hidden: {
        opacity: 0,
        y: 20,
        transition: { type: "spring", damping: 12, stiffness: 100 },
      },
    };
  
    return (
      <motion.div
        style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={className}
      >
        {letters.map((letter, index) => (
          <motion.span variants={child} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    );
};

// --- Main Page Component ---

export default function AboutPage() {
  return (
    <div className="bg-white text-text-dark font-sans selection:bg-primary/20">
        
      {/* Hero Section with Grid Pattern */}
      <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-white">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
            Since 2023
          </span>
          <TextReveal 
            text="About Us" 
            className="text-5xl md:text-7xl font-bold text-dark justify-center mb-6 tracking-tight"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-500 font-light italic"
          >
            "Preserving sea turtles, safeguarding our oceans."
          </motion.p>
        </div>
      </div>

      {/* Mission Section - Bento Grid Style */}
      <div className="py-20 container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Mission Text Card */}
            <div className="lg:col-span-7">
                <SpotlightCard className="h-full p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-primary text-sm font-bold uppercase tracking-wider block mb-4">
                        Our Purpose
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
                        Dedicated to sea turtle conservation and ocean preservation.
                    </h2>
                    <div className="text-gray-600 leading-relaxed text-[16px] space-y-6 font-light">
                        <p>
                            At the Sea Turtle Conservation Trust, our mission is to protect and conserve sea turtles and their habitats for the benefit of present and future generations. We are dedicated to ensuring the survival of these incredible creatures through research, education, and community engagement.
                        </p>
                        <p>
                            The Sea Turtle Conservation Trust is a non-profit organization committed to the conservation of sea turtles worldwide. With a team of passionate experts and volunteers, we work tirelessly to safeguard these magnificent creatures and the fragile ecosystems they inhabit.
                        </p>
                    </div>
                </SpotlightCard>
            </div>

            {/* Mission Image Card */}
            <div className="lg:col-span-5">
                <SpotlightCard className="h-full min-h-[400px] relative group">
                    <Image 
                        src="/assets/images/turtle2.jpg" 
                        alt="Sea Turtle Mission" 
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                     <div className="absolute bottom-6 left-6 text-white">
                        <p className="font-bold text-lg">Guardians of the Deep</p>
                        <p className="text-sm opacity-80">Protecting the future, one hatchling at a time.</p>
                     </div>
                </SpotlightCard>
            </div>
        </div>
      </div>

      {/* Efforts Section - 3 Column Spotlight */}
      <div className="bg-gray-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-dark tracking-tight">
              Championing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Guardians</span> of the Sea
            </h2>
            <p className="text-lg text-gray-500 mb-2">Our Efforts in Sea Turtle Conservation</p>
            <p className="text-sm text-gray-400 italic">"Protecting sea turtles, preserving our oceans, securing a brighter future."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                {
                    title: "RESEARCH",
                    img: "/assets/images/green turtle.jpg",
                    quote: "Exploring the depths, unlocking a future for sea turtle",
                    desc: "We conduct extensive scientific research to better understand sea turtles' behavior, migration patterns, nesting habits, and population dynamics. This knowledge allows us to develop effective conservation strategies."
                },
                {
                    title: "CONSERVATION",
                    img: "/assets/images/loggerhead.jpg",
                    quote: "Uniting hearts and hands to protect our natural heritage",
                    desc: "We collaborate with local communities, governments, and organizations to implement conservation initiatives aimed at safeguarding sea turtle nesting beaches, foraging areas, and migratory routes."
                },
                {
                    title: "REHABILITATION",
                    img: "/assets/images/olive ridley1.jpg",
                    quote: "Reviving hope, one rescue at a time",
                    desc: "In collaboration with marine rescue centers, we provide care and rehabilitation to injured or stranded sea turtles. Our goal is to nurse them back to health and release them into their natural habitats."
                }
            ].map((item, index) => (
                <SpotlightCard key={index} className="flex flex-col h-full group">
                    <div className="relative h-64 overflow-hidden border-b border-gray-100">
                        <Image 
                            src={item.img} 
                            alt={item.title} 
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                    </div>
                    <div className="p-8 flex-grow flex flex-col">
                        <h4 className="text-xl font-bold mb-3 text-dark group-hover:text-primary transition-colors">{item.title}</h4>
                        <span className="block text-primary text-xs font-bold uppercase tracking-wider mb-4 border-b border-gray-100 pb-4">
                            "{item.quote}"
                        </span>
                        <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                            {item.desc}
                        </p>
                    </div>
                </SpotlightCard>
            ))}
          </div>
        </div>
      </div>

       {/* Vision Section - Asymmetrical Layout */}
      <div className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Future Forward</span>
          <h2 className="text-4xl font-bold text-dark mt-2 mb-4">Our Vision</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            "Committed to the preservation of sea turtles and the conservation of our oceans."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SpotlightCard className="p-10 border-l-8 border-l-primary bg-gradient-to-br from-white to-gray-50">
                 <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-3 text-dark">Nesting Site Protection</h4>
                        <p className="text-gray-600 leading-relaxed text-sm">
                        "Every year, sea turtles return to specific beaches to lay their eggs. However, these nesting sites face numerous threats. We actively engage in nesting site protection by implementing measures such as beach cleanups, nest monitoring, and educating communities."
                        </p>
                    </div>
                 </div>
            </SpotlightCard>

            <SpotlightCard className="p-10 border-l-8 border-l-blue-400 bg-gradient-to-br from-white to-gray-50">
                 <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-400/10 rounded-full text-blue-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-3 text-dark">Habitat Preservation</h4>
                        <p className="text-gray-600 leading-relaxed text-sm">
                         "We recognize the significance of healthy habitats. Our organization focuses on protecting nesting beaches, coral reefs, and seagrass beds. By working with local communities and agencies, we aim to establish protected areas."
                        </p>
                    </div>
                 </div>
            </SpotlightCard>
        </div>
      </div>

    </div>
  );
}
