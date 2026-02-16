"use client";
import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGlobeAmericas, FaShieldAlt, FaExclamationTriangle, FaLeaf, FaWater } from 'react-icons/fa';

export default function TrackerContent() {
  const canvasRef = useRef();
  const [activePoint, setActivePoint] = useState(null);

  // Data Points: [lat, long, size, type (0=threat, 1=sanctuary)]
  // 1 = Sanctuary (Green), 0 = Threat (Red)
  const features = [
    { location: [20.5937, 78.9629], size: 0.05, type: 1, name: "Odisha Coast Sanctuary", desc: "Major Olive Ridley nesting site.", stats: "500k+ Hatchlings" },
    { location: [-0.7893, 113.9213], size: 0.04, type: 1, name: "Derawan Islands", desc: "Green Turtle protected habitat.", stats: "Stable Population" },
    { location: [15.8700, 100.9925], size: 0.06, type: 0, name: "Gulf of Thailand", desc: "High plastic pollution zone.", stats: "Critical Threat" },
    { location: [-25.2744, 133.7751], size: 0.05, type: 1, name: "Great Barrier Reef", desc: "Vital coral ecosystem.", stats: "Protected Area" },
    { location: [35.6895, 139.6917], size: 0.04, type: 0, name: "Pacific Gyre", desc: "Great Pacific Garbage Patch edge.", stats: "Severe Pollution" },
    { location: [-4.4419, 39.7432], size: 0.05, type: 1, name: "Watamu Marine Park", desc: "Kenyan rehabilitation center.", stats: "Active Rescue" },
    { location: [25.7617, -80.1918], size: 0.05, type: 1, name: "Florida Coast", desc: "Loggerhead nesting monitoring.", stats: "Rising Numbers" },
  ];

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 800 * 2,
      height: 800 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.1],
      markerColor: [0.64, 0.77, 0.22], // Primary Green #a4c639 converted to RGB/255 approximations: 164/255, 198/255, 57/255
      glowColor: [0.1, 0.2, 0.1],
      opacity: 0.8,
      markers: features.map(f => ({ location: f.location, size: f.size })),
      onRender: (state) => {
        // Called on every animation frame.
        // state.phi = phi
        state.phi = phi + 0.005; // Auto rotation
        phi += 0.003;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-sans overflow-hidden flex flex-col pt-24 pb-12 relative">
      
      {/* Background Tech Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#a4c639 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 z-10 relative flex flex-col md:flex-row items-center h-full flex-1">
        
        {/* Left Panel: Dashboard */}
        <div className="w-full md:w-1/3 mb-10 md:mb-0">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
             <div className="flex items-center gap-2 mb-4 text-primary tracking-widest uppercase text-xs font-bold">
               <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
               Live Global Monitoring
             </div>
             <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
               Global <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Impact Report</span>
             </h1>
             <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
               Real-time visualization of conservation victories and oceanic threats. 
               We monitor nesting grounds and fight pollution zones worldwide.
             </p>

             <div className="grid grid-cols-2 gap-4">
               <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm hover:border-primary/50 transition-colors">
                  <FaShieldAlt className="text-primary text-2xl mb-2" />
                  <h3 className="text-2xl font-bold">12</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Protected Sanctuaries</p>
               </div>
               <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm hover:border-red-500/50 transition-colors">
                  <FaExclamationTriangle className="text-red-500 text-2xl mb-2" />
                  <h3 className="text-2xl font-bold">5</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Critical Threat Zones</p>
               </div>
             </div>
          </motion.div>
        </div>

        {/* Center/Right: The Globe */}
        <div className="w-full md:w-2/3 h-[50vh] md:h-[80vh] flex items-center justify-center relative">
          <div className="w-full max-w-[800px] aspect-square relative place-items-center grid">
             <canvas
               ref={canvasRef}
               style={{ width: '100%', height: '100%', maxWidth: '800px', maxHeight: '800px' }}
               className="drop-shadow-[0_0_50px_rgba(164,198,57,0.3)] opacity-90 transition-opacity hover:opacity-100"
             />
             
             {/* Interactive Overlay Points (Simulated for this demo as canvas points aren't clickable in cobe easily) */}
             {/* In a production app, we would map 2D coordinates from 3D sphere. For now, we listed the data on the left. */}
          </div>
        </div>

        {/* Floating Data Panel (Simulated Interaction) */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-64 space-y-4 hidden lg:block">
           <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest border-b border-gray-800 pb-2 mb-4">Active Deployments</h3>
           {features.slice(0, 3).map((f, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.5 + (i * 0.1) }}
               className={`p-4 rounded-lg border backdrop-blur-md ${f.type === 1 ? 'bg-primary/10 border-primary/30' : 'bg-red-500/10 border-red-500/30'}`}
             >
                <div className="flex justify-between items-start mb-1">
                   <h4 className="font-bold text-sm">{f.name}</h4>
                   {f.type === 1 ? <FaLeaf className="text-primary text-xs" /> : <FaExclamationTriangle className="text-red-500 text-xs" />}
                </div>
                <p className="text-xs text-gray-300 mb-2">{f.desc}</p>
                <span className={`text-[10px] font-mono px-2 py-1 rounded-full ${f.type === 1 ? 'bg-primary/20 text-primary' : 'bg-red-500/20 text-red-500'}`}>
                  {f.stats}
                </span>
             </motion.div>
           ))}
        </div>

      </div>
    </div>
  );
}
