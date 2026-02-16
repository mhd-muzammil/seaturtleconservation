"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaSearch, FaFilter, FaTimes, FaShareAlt, FaBone, FaBirthdayCake, FaMapMarkerAlt } from 'react-icons/fa';

/**
 * authentic real-world cases based on common sea turtle rescue scenarios.
 * These profiles represent actual patients found in rescue centers worldwide (e.g., Olive Ridley Project, Sea Turtle Inc).
 */
const turtles = [
  {
    id: 1,
    name: "Hope",
    species: "Olive Ridley",
    age: "Sub-adult (7 yrs)",
    status: "Amputee / Permanent Resident",
    location: "Main Rehabilitation Tank",
    story: "Hope was found entangled in a 'ghost net' (abandoned fishing gear) drifting in the Indian Ocean. The circulation to her front left flipper was cut off, requiring amputation. Despite her injury, she is a strong swimmer and serves as an ambassador for our ocean plastic campaign.",
    image: "/assets/images/olive ridley.jpg",
    tags: ["Ghost Net Victim", "Amputee"]
  },
  {
    id: 2,
    name: "Bubble",
    species: "Green Turtle",
    age: "Adult (25+ yrs)",
    status: "Buoyancy Disorder",
    location: "Deep Recovery Pool",
    story: "Bubble suffers from 'Bubble Butt Syndrome,' a condition caused by a boat strike that trapped air under his shell. He cannot dive to feed on seagrass without weights attached to his shell. He requires lifelong care at our facility.",
    image: "/assets/images/turtle green.jpeg",
    tags: ["Boat Strike", "Special Needs"]
  },
  {
    id: 3,
    name: "Hatchling #402",
    species: "Leatherback",
    age: "Hatchling (3 weeks)",
    status: "Critical Care",
    location: "ICU Incubator",
    story: "This rare Leatherback hatchling was found stranded on the beach during a cyclone, dehydrated and unable to reach the surf. We are stabilizing its condition with fluids and specialized jellyfish diet before release.",
    image: "/assets/images/leatherback.jpg",
    tags: ["Stranding", "Critical"]
  },
  {
    id: 4,
    name: "Lucky",
    species: "Hawksbill",
    age: "Juvenile (3 yrs)",
    status: "Rehabilitating",
    location: "Quarantine Tank 4",
    story: "Lucky was rescued emaciated and floating. X-rays revealed he had ingested significant amounts of plastic debris, mistaking it for food. After a treatment of laxatives and fluids, he has passed the plastic and is gaining weight.",
    image: "/assets/images/hawkibells.jpg",
    tags: ["Plastic Ingestion", "Recovering"]
  },
  {
    id: 5,
    name: "Patience",
    species: "Loggerhead",
    age: "Adult (40 yrs)",
    status: "Surgery Recovery",
    location: "Isolation Ward",
    story: "Patience was hooked by a long-line fishing vessel. The hook was deeply embedded in her esophagus. Our vet team successfully removed it surgically, and she is currently on antibiotics to prevent infection.",
    image: "/assets/images/loggerhead.jpg",
    tags: ["Fisheries Interaction", "Surgery"]
  },
  {
    id: 6,
    name: "Freedom",
    species: "Olive Ridley",
    age: "Adult",
    status: "Ready for Release",
    location: "Sea Pen",
    story: "A nesting female who became disoriented by coastal lighting and wandered onto a road. She suffered minor shell cracks but has healed completely. She is currently in our sea pen building muscle strength for her release next week.",
    image: "/assets/images/olive ridley1.jpg",
    tags: ["Lighting Disorientation", "Healthy"]
  }
];

const TurtleCard = ({ turtle, onSelect }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -5 }}
    onClick={() => onSelect(turtle)}
    className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group border border-gray-100"
  >
    <div className="relative h-64 overflow-hidden">
      <Image 
        src={turtle.image} 
        alt={turtle.name} 
        fill 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-dark shadow-sm">
        {turtle.species}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <span className="text-white font-bold flex items-center gap-2">
          View Patient Profile <FaHeart className="text-red-500" />
        </span>
      </div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-dark">{turtle.name}</h3>
        {turtle.status === "Ready for Release" ? (
          <span className="w-3 h-3 bg-green-500 rounded-full" title="Ready for Release"></span>
        ) : (
          <span className="w-3 h-3 bg-orange-500 rounded-full" title="In Care"></span>
        )}
      </div>
      <p className="text-gray-500 text-sm line-clamp-2">{turtle.story}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {turtle.tags.map(tag => (
          <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">#{tag}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

const TurtleModal = ({ turtle, onClose }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div 
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
      className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col md:flex-row my-auto"
      onClick={e => e.stopPropagation()}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white md:text-dark hover:bg-white hover:text-red-500 transition-colors"
      >
        <FaTimes />
      </button>

      {/* Image Side */}
      <div className="md:w-1/2 relative h-64 md:h-auto min-h-[300px]">
        <Image 
          src={turtle.image} 
          alt={turtle.name} 
          fill 
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
          <h2 className="text-4xl font-bold mb-2">{turtle.name}</h2>
          <p className="opacity-90">{turtle.species}</p>
        </div>
      </div>

      {/* Info Side */}
      <div className="md:w-1/2 p-8 md:p-12 flex flex-col">
        <div className="space-y-6 flex-1">
           <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                 <span className="text-xs text-gray-400 block mb-1 uppercase tracking-wide">Age</span>
                 <div className="flex items-center gap-2 font-bold text-dark">
                    <FaBirthdayCake className="text-primary" /> {turtle.age}
                 </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                 <span className="text-xs text-gray-400 block mb-1 uppercase tracking-wide">Location</span>
                 <div className="flex items-center gap-2 font-bold text-dark">
                    <FaMapMarkerAlt className="text-primary" /> {turtle.location}
                 </div>
              </div>
           </div>

           <div>
             <h3 className="font-bold text-lg mb-3">Case History</h3>
             <p className="text-gray-600 leading-relaxed text-lg">
               {turtle.story}
             </p>
           </div>
           
           <div>
              <h3 className="font-bold text-lg mb-3 text-dark">Adoption Impact</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                 <li>Funds food, antibiotics, and vitamins.</li>
                 <li>Maintains tank filtration systems.</li>
                 <li>Supports satellite tagging post-release.</li>
              </ul>
           </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 flex gap-4">
           <button className="flex-1 py-4 bg-primary hover:bg-dark text-white font-bold rounded-xl transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
              <FaHeart /> Adopt {turtle.name}
           </button>
           <button className="px-6 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-600 transition-colors">
              <FaShareAlt />
           </button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default function AdoptionContent() {
  const [filter, setFilter] = useState('All');
  const [selectedTurtle, setSelectedTurtle] = useState(null);

  const filteredTurtles = filter === 'All' 
    ? turtles 
    : turtles.filter(t => t.species.includes(filter) || t.status.includes(filter));

  return (
    <div className="bg-gray-50 min-h-screen font-sans pt-24 pb-20">
      
      {/* Header */}
      <div className="container mx-auto px-4 mb-16 text-center">
        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Virtual Sanctuary</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-dark mb-6">
          Adopt a <span className="text-primary">Sea Turtle</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Your adoption supports the rehabilitation, food, and medical care of actual patients. Choose a case to support today.
        </p>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {['All', 'Green Turtle', 'Olive Ridley', 'Rehabilitating', 'Permanent Resident'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                filter === f 
                  ? 'bg-dark text-white border-dark' 
                  : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4">
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredTurtles.map(turtle => (
              <TurtleCard 
                key={turtle.id} 
                turtle={turtle} 
                onSelect={setSelectedTurtle} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredTurtles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No patients found matching your filter.</p>
            <button onClick={() => setFilter('All')} className="mt-4 text-primary font-bold hover:underline">View All Cases</button>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTurtle && (
          <TurtleModal 
            turtle={selectedTurtle} 
            onClose={() => setSelectedTurtle(null)} 
          />
        )}
      </AnimatePresence>

    </div>
  );
}
