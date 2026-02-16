"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowDown, FaDna, FaMicrochip, FaGlobe, FaWater, FaEye, FaShieldAlt } from 'react-icons/fa';

export default function AnatomyContent() {
  const [activePart, setActivePart] = useState(null);
  const [isScanning, setIsScanning] = useState(true);

  // Stop scanning animation when a user interacts
  useEffect(() => {
    if (activePart) setIsScanning(false);
  }, [activePart]);

  const anatomyPoints = [
    {
      id: "shell",
      label: "Hydrodynamic Carapace",
      x: 50,
      y: 45,
      icon: FaShieldAlt,
      shortDesc: "Nature's perfect armor.",
      description: "Unlike land tortoises, a sea turtle's shell is flattened and streamlined for reducing drag. It’s fused to the spine and ribs, making it impossible for them to shed it.",
      science: "The scutes (scales) are made of keratin, the same protein as human fingernails. Leatherbacks are the only exception, having a leathery, rubbery skin instead of hard scutes."
    },
    {
      id: "flippers",
      label: "Propulsion Forelimbs",
      x: 20,
      y: 55,
      icon: FaWater,
      shortDesc: "Wings of the ocean.",
      description: "These powerful, paddle-shaped limbs generate thrust like wings. A green turtle can reach speeds of 35 km/h (22 mph) when fleeing predators.",
      science: "Sea turtles cannot retract their limbs into their shells. This vulnerability is compensated by their size and swimming speed. The claws on male flippers are used for grasping females during mating."
    },
    {
      id: "head",
      label: "Sensory & Navigation",
      x: 82,
      y: 18,
      icon: FaGlobe,
      shortDesc: "Built-in GPS system.",
      description: "Sea turtles have an uncanny ability to navigate thousands of miles back to the exact beach where they hatched.",
      science: "Magnetoreception: Their brains contain magnetite crystals that detect the Earth's magnetic field, acting as an internal biological compass. They also have salt glands near their eyes to excrete excess salt from seawater (often mistaken for crying)."
    },
    {
      id: "plastron",
      label: "Ventral Plastron",
      x: 50,
      y: 65,
      icon: FaDna,
      shortDesc: "Protective underbelly.",
      description: "The mostly flat underneath part of the shell. It provides protection while swimming over coral reefs and rocky bottoms.",
      science: "Functionally, the plastron is lighter in color than the carapace. This 'countershading' camouflages the turtle from predators looking up from the depths, blending them with the bright ocean surface."
    },
    {
      id: "vision",
      label: "Visual Adaptation",
      x: 75,
      y: 28,
      icon: FaEye,
      shortDesc: "See underwater & air.",
      description: "Their eyes are adapted for seeing clearly underwater. On land, they are near-sighted, but in the ocean, their vision is sharp enough to spot jellyfish and predators.",
      science: "They have a nicitating membrane (third eyelid) that protects their eyes while feeding and swimming. They can see UV light, which helps them track bioluminescent prey."
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white font-sans overflow-hidden selection:bg-[rgba(164,198,57,0.3)]">
      
      {/* Background with Grid scan effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[rgba(164,198,57,0.2)] via-black to-black"></div>
        <div className="w-full h-full opacity-10" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(164, 198, 57, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(164, 198, 57, 0.1) 1px, transparent 1px)',
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col md:flex-row items-center">
        
        {/* Left Panel: Interface & Data */}
        <div className="w-full md:w-1/3 order-2 md:order-1 relative z-20">
          <AnimatePresence mode="wait">
             {activePart ? (
               <motion.div 
                 key={activePart.id}
                 initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
                 animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                 exit={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
                 transition={{ duration: 0.4 }}
                 className="bg-black/40 backdrop-blur-md border border-[rgba(164,198,57,0.3)] p-8 rounded-2xl relative overflow-hidden"
               >
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary shadow-[0_0_15px_rgba(164,198,57,0.8)]"></div>
                  <div className="flex items-center gap-4 mb-4">
                     <div className="p-3 bg-[rgba(164,198,57,0.1)] rounded-lg text-primary border border-[rgba(164,198,57,0.2)]">
                        <activePart.icon size={24} />
                     </div>
                     <div>
                       <h2 className="text-3xl font-bold text-white tracking-wide">{activePart.label}</h2>
                       <p className="text-primary text-sm uppercase tracking-widest font-mono">{activePart.shortDesc}</p>
                     </div>
                  </div>
                  
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                     <p className="text-lg">{activePart.description}</p>
                     <div className="p-4 bg-[rgba(164,198,57,0.1)] rounded-lg border border-[rgba(164,198,57,0.2)] text-sm">
                        <strong className="text-primary block mb-1 font-mono uppercase text-xs">Analysis // Bio-Data</strong>
                        {activePart.science}
                     </div>
                  </div>

                  <button 
                     onClick={() => { setActivePart(null); setIsScanning(true); }}
                     className="mt-6 text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                     <span className="group-hover:-translate-x-1 transition-transform">←</span> RESUME SCAN
                  </button>
               </motion.div>
             ) : (
               <motion.div 
                 key="idle"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 className="text-center md:text-left"
               >
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="inline-block px-3 py-1 border border-[rgba(164,198,57,0.3)] rounded-full bg-[rgba(164,198,57,0.05)] text-primary text-xs tracking-[0.2em] font-mono mb-4"
                  >
                     SYSTEM ONLINE // TARGET LOCKED
                  </motion.div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                    Anatomy <br />
                    <span className="text-primary drop-shadow-[0_0_10px_rgba(164,198,57,0.5)]">Explorer</span>
                  </h1>
                  <p className="text-xl text-gray-400 max-w-sm">
                    Interactive bio-scan of the <em className="text-white">Chelonia mydas</em>. Select a node to initiate analysis.
                  </p>
               </motion.div>
             )}
          </AnimatePresence>
        </div>

        {/* Right Panel: The Visual */}
        <div className="w-full md:w-2/3 h-[50vh] md:h-full relative flex items-center justify-center order-1 md:order-2">
            
            {/* Rotating Tech Ring */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute w-[600px] h-[600px] border border-[rgba(164,198,57,0.1)] rounded-full border-dashed"
            ></motion.div>
             <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="absolute w-[450px] h-[450px] border border-[rgba(164,198,57,0.1)] rounded-full"
            ></motion.div>

            {/* The Turtle */}
            <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="relative w-full max-w-3xl aspect-square flex items-center justify-center"
            >
               <Image 
                  src="/assets/images/turtle green.jpeg" 
                  alt="Sea Turtle Scan Target" 
                  fill
                  className="object-contain drop-shadow-2xl z-10"
                  style={{ filter: activePart ? 'grayscale(0%) brightness(0.6)' : 'grayscale(0%)' }}
                  priority
               />
               
               {/* Scanning Laser Effect */}
               {isScanning && (
                  <motion.div 
                     initial={{ top: '0%' }}
                     animate={{ top: '100%' }}
                     transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
                     className="absolute left-0 right-0 h-1 bg-primary/50 z-20 shadow-[0_0_20px_rgba(164,198,57,0.8)]"
                  >
                     <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-[rgba(164,198,57,0.2)] to-transparent -mt-[100px]"></div>
                  </motion.div>
               )}

               {/* Interactive Nodes */}
               {anatomyPoints.map((point) => (
                  <button
                    key={point.id}
                    onClick={() => setActivePart(point)}
                    className="absolute z-30 group"
                    style={{ top: `${point.y}%`, left: `${point.x}%` }}
                  >
                     {/* Outer Ring */}
                     <motion.div 
                       animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                       transition={{ duration: 2, repeat: Infinity }}
                       className="absolute w-12 h-12 -ml-6 -mt-6 border border-cyan-400/50 rounded-full"
                     ></motion.div>
                     
                     {/* Core */}
                     <div className={`w-4 h-4 -ml-2 -mt-2 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,1)] transition-transform duration-300 ${activePart?.id === point.id ? 'scale-150 bg-white' : 'group-hover:scale-125'}`}></div>
                     
                     {/* Connecting Line to Label */}
                     <div className="absolute top-1/2 left-1/2 w-[60px] h-[1px] bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-100 -rotate-45"></div>
                     <div className="absolute top-1/2 left-1/2 -translate-y-[45px] translate-x-[45px] px-2 py-1 bg-black/80 border border-cyan-400/30 text-primary text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 whitespace-nowrap">
                        {point.label}
                     </div>
                  </button>
               ))}

            </motion.div>
        </div>
      </div>
    </div>
  );
}
