"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaBook, FaSearch, FaArrowDown, FaCamera } from 'react-icons/fa';

// --- DATA: ZONES & SPECIES ---
const ZONES = [
    { start: 0, end: 500, name: "Sunlight Zone", color: "from-cyan-400 via-blue-400 to-blue-600", text: "text-cyan-900" },
    { start: 500, end: 1500, name: "Twilight Zone", color: "from-blue-700 via-indigo-900 to-slate-900", text: "text-blue-200" },
    { start: 1500, end: 10000, name: "Midnight Zone", color: "from-slate-950 via-black to-black", text: "text-white" }
];

const SPECIES_DB = [
    { id: 'clownfish', name: 'Clownfish', depthMin: 0, depthMax: 400, rare: 0.3, size: 20, color: '#f97316' },
    { id: 'turtle', name: 'Green Turtle', depthMin: 0, depthMax: 800, rare: 0.1, size: 60, color: '#22c55e' },
    { id: 'jelly', name: 'Moon Jelly', depthMin: 200, depthMax: 2000, rare: 0.2, size: 40, color: '#a855f7' },
    { id: 'whale', name: 'Sperm Whale', depthMin: 400, depthMax: 2000, rare: 0.05, size: 150, color: '#64748b' },
    { id: 'angler', name: 'Anglerfish', depthMin: 1500, depthMax: 5000, rare: 0.1, size: 50, color: '#ef4444' },
    { id: 'squid', name: 'Giant Squid', depthMin: 1800, depthMax: 5000, rare: 0.02, size: 120, color: '#ffffff' },
];

export default function JourneyGame() {
  // --- STATE ---
  const [depth, setDepth] = useState(0);
  const [currentZone, setCurrentZone] = useState(ZONES[0]);
  const [logbook, setLogbook] = useState([]); // Array of detected IDs
  const [entities, setEntities] = useState([]);
  const [scanMessage, setScanMessage] = useState(null);
  const [showLogView, setShowLogView] = useState(false);

  // --- REFS ---
  const stateRef = useRef({
      y: 0, // Pixels scrolled
      speed: 2,
      playerX: 0,
      playerY: 0,
      lastSpawn: 0
  });
  
  const playerDomRef = useRef(null);
  const requestRef = useRef();

  // --- LOAD PROGRESS ---
  useEffect(() => {
      const saved = localStorage.getItem('deep_dive_log_v1');
      if (saved) setLogbook(JSON.parse(saved));
  }, []);

  const addToLog = (species) => {
      if (!logbook.includes(species.id)) {
          const newLog = [...logbook, species.id];
          setLogbook(newLog);
          localStorage.setItem('deep_dive_log_v1', JSON.stringify(newLog));
          setScanMessage(`NEW DISCOVERY: ${species.name}`);
          setTimeout(() => setScanMessage(null), 3000);
      }
  };

  // --- ENGINE ---
  const update = () => {
      const state = stateRef.current;
      
      // Scroll Down
      state.y += state.speed;
      const currentDepth = Math.floor(state.y / 10); // 10px = 1m
      setDepth(currentDepth);

      // Zone Check
      const zone = ZONES.find(z => currentDepth >= z.start && currentDepth < z.end) || ZONES[2];
      setCurrentZone(zone);

      // Spawning System
      if (state.y > state.lastSpawn + 100) { // Check every 10m
          if (Math.random() < 0.3) {
              // Find valid species for this depth
              const valid = SPECIES_DB.filter(s => currentDepth >= s.depthMin && currentDepth <= s.depthMax);
              if (valid.length > 0) {
                  const species = valid[Math.floor(Math.random() * valid.length)];
                  setEntities(prev => [...prev, {
                      instanceId: Math.random(),
                      ...species,
                      x: Math.random() * 100 + '%',
                      y: -100, // Spawn just below viewport (we are moving down, so objects move UP relative to cam)
                      // ACTUALLY: In a scrolling world, objects are fixed Y. Camera moves +Y.
                      // Let's invert: Camera is static. Objects move UP.
                      relY: window.innerHeight + 50 // Start at bottom, move up
                  }]);
              }
          }
          state.lastSpawn = state.y;
      }

      // Move Entities Up (Simulating Descent)
      setEntities(prev => prev
          .map(e => ({ ...e, relY: e.relY - state.speed }))
          .filter(e => e.relY > -200) // Despawn if above top
      );

      // Scanner Logic (Collision)
      // Check distance between Player (fixed center-ish) and Entity
      // Player is usually mouse controlled. Let's say Player is at state.playerX, state.playerY
      // But for simplicity in React loop, let's just use the cached mouse pos from `handleMouseMove`
      // Wait, `handleMouseMove` updates React State? No, too slow. Update Ref.

      requestRef.current = requestAnimationFrame(update);
  };

  useEffect(() => {
      requestRef.current = requestAnimationFrame(update);
      return () => cancelAnimationFrame(requestRef.current);
  }, [logbook]); // Rerun if logbook changes? No, use ref for log check ideally, but logbook is small.


  // --- INPUT ---
  const handleMove = (x, y) => {
      if (playerDomRef.current) {
          playerDomRef.current.style.transform = `translate(${x}px, ${y}px)`;
          
          // Scanner Check
          const playerRect = playerDomRef.current.getBoundingClientRect();
          const pCx = playerRect.left + playerRect.width/2;
          const pCy = playerRect.top + playerRect.height/2;

          // Check all entities (This is heavy in Render loop? Better in Animation Frame)
          // We'll trust the User Interaction is slower than 60fps or just do it here for responsiveness
          entities.forEach(ent => {
             // We need DOM ref for entities to know their screen X/Y? 
             // Or map our logic `relY` to screen Y.
             // ent.relY is pixels from TOP of container. 
             // ent.x is %. 
             const entX = (parseFloat(ent.x) / 100) * window.innerWidth;
             const entY = ent.relY; 
             
             const dist = Math.hypot(pCx - entX, pCy - entY);
             if (dist < 100) { // Scan Radius
                 addToLog(ent);
             }
          });
      }
  };


  // --- RENDER ---
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black font-sans select-none cursor-crosshair"
         onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
         onTouchMove={(e) => handleMove(e.touches[0].clientX, e.touches[0].clientY)}
    >
        {/* 1. DYNAMIC BACKGROUND LAYER */}
        <div 
            className={`absolute inset-0 bg-gradient-to-b transition-colors duration-[2000ms] ${currentZone.color}`}
        ></div>
        
        {/* 2. PARTICLES (Parallax) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

        {/* 3. ENTITIES */}
        {entities.map(e => (
            <div 
                key={e.instanceId}
                className="absolute transition-transform will-change-transform"
                style={{ 
                    left: e.x, 
                    top: e.relY,
                    width: e.size, 
                    height: e.size,
                    color: e.color
                }}
            >
                {/* CSS SHAPES based on ID */}
                {e.id === 'clownfish' && <div className="w-full h-1/2 bg-orange-500 rounded-full animate-swim-fast border-2 border-white"></div>}
                {e.id === 'turtle' && (
                    <div className="w-full h-full bg-green-600 rounded-[40%] shadow-xl animate-glide relative">
                         <div className="absolute -left-2 top-2 w-1/3 h-1/2 bg-green-500 rounded-full transform -rotate-45"></div>
                         <div className="absolute -right-2 top-2 w-1/3 h-1/2 bg-green-500 rounded-full transform rotate-45"></div>
                    </div>
                )}
                {e.id === 'jelly' && (
                    <div className="w-full h-full opacity-80 animate-pulse">
                        <div className="w-full h-[60%] bg-purple-400/50 rounded-t-full"></div>
                        <div className="w-[10%] h-[40%] bg-purple-300 mx-auto"></div>
                    </div>
                )}
                {e.id === 'whale' && <div className="w-full h-full bg-slate-700 rounded-full blur-[1px]"></div>}
                
                {/* Scan Ring (Visual Feedback) */}
                <div className="absolute -inset-4 border border-white/20 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
            </div>
        ))}


        {/* 4. PLAYER (Submersible / Turtle) */}
        <div 
            ref={playerDomRef}
            className="absolute top-0 left-0 w-16 h-16 -ml-8 -mt-8 pointer-events-none z-50 overflow-visible"
        >
             {/* Scanner HUD Ring */}
             <div className="absolute -inset-12 border-2 border-cyan-400/50 rounded-full animate-spin-slow border-dashed"></div>
             <div className="absolute -inset-8 border border-white/30 rounded-full"></div>
             
             {/* Icon */}
             <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-full border border-white/50 flex items-center justify-center shadow-[0_0_20px_cyan]">
                 <FaSearch className="text-white text-xl" />
             </div>
        </div>


        {/* 5. UI OVERLAYS */}
        
        {/* Depth Meter */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 pointer-events-none z-40">
            <div className={`h-64 w-1 rounded-full bg-gradient-to-b from-transparent via-white to-transparent`}></div>
            <div className="text-4xl font-mono text-white font-bold drop-shadow-md">{depth}m</div>
            <div className={`text-xs uppercase tracking-widest ${currentZone.text}`}>{currentZone.name}</div>
        </div>

        {/* Scan Notification */}
        {scanMessage && (
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 bg-cyan-500/80 backdrop-blur-md text-black font-bold px-8 py-3 rounded-full shadow-[0_0_30px_cyan] animate-bounce z-50 whitespace-nowrap">
                <FaCamera className="inline mr-2" /> {scanMessage}
            </div>
        )}

        {/* Logbook Button */}
        <button 
            onClick={() => setShowLogView(true)}
            className="absolute top-6 right-6 bg-black/40 backdrop-blur border border-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-colors z-50 flex items-center gap-2"
        >
            <FaBook className="text-cyan-400" /> Logbook <span className="bg-cyan-500 text-black text-xs font-bold px-1.5 rounded-full">{logbook.length}/{SPECIES_DB.length}</span>
        </button>


        {/* LOGBOOK MODAL */}
        {showLogView && (
            <div className="absolute inset-0 bg-black/90 z-[100] p-8 overflow-y-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-4xl text-white font-light tracking-widest uppercase border-b border-gray-700 pb-2 w-full">Expedition Log</h2>
                        <button onClick={() => setShowLogView(false)} className="text-gray-400 hover:text-white text-xl absolute right-8 top-8">✕</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {SPECIES_DB.map(s => {
                            const unlocked = logbook.includes(s.id);
                            return (
                                <div key={s.id} className={`p-6 rounded-xl border ${unlocked ? 'bg-slate-900 border-cyan-500/50' : 'bg-gray-900/50 border-gray-800 opacity-50'}`}>
                                    <div className="flex justify-between mb-4">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-inner ${unlocked ? 'bg-cyan-900 text-cyan-400' : 'bg-black text-gray-700'}`}>
                                            {unlocked ? s.name[0] : '?'}
                                        </div>
                                        {unlocked && <span className="text-xs text-cyan-500 font-mono border border-cyan-900 px-2 py-1 rounded">SCAN COMPLETE</span>}
                                    </div>
                                    <h3 className={`text-xl font-bold mb-1 ${unlocked ? 'text-white' : 'text-gray-600'}`}>
                                        {unlocked ? s.name : 'Unknown Signal'}
                                    </h3>
                                    <p className="text-xs text-gray-500 font-mono">
                                        Depth: {s.depthMin}m - {s.depthMax}m
                                    </p>
                                    {unlocked && (
                                        <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                                            A fascinating specimen of the {currentZone.name}. Vital to the ecosystem.
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        )}

        <style jsx global>{`
           @keyframes swim-fast { 0% { transform: scaleX(1); } 50% { transform: scaleX(0.9); } }
           @keyframes glide { 0%, 100% { transform: rotate(-5deg); } 50% { transform: rotate(5deg); } }
           @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
           
           .animate-swim-fast { animation: swim-fast 0.5s linear infinite; }
           .animate-glide { animation: glide 4s ease-in-out infinite; }
           .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        `}</style>
    </div>
  );
}
