"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes } from 'react-icons/fa';

export default function GalleryPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
   
    {
      src: "/assets/images/videoplayback.mp4",
      title: "Sea Turtle Conservation",
      description: "Witness our dedicated efforts in protecting sea turtle habitats."
    },
    {
      src: "/assets/images/videoplayback (1).mp4",
      title: "Marathon for Turtles",
      description: "Community coming together to run for a cause."
    },
    {
       src: "/assets/images/videoplayback (2).mp4",
       title: "Olive Ridley in Chennai",
       description: "Documenting the nesting season of Olive Ridleys."
    }
  ];

  return (
    <div className="bg-neutral-900 min-h-screen text-white font-sans selection:bg-primary/30">
      {/* Cinematic Hero Section */}
      <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
            className="absolute inset-0 bg-cover bg-center blur-sm scale-110" 
            style={{ backgroundImage: "url('/assets/images/page-heading-bg.jpg')" }}
        ></div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-widest mb-4 border border-white/20"
          >
            Visual Stories
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-2xl"
          >
            Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl font-light text-gray-300 italic max-w-2xl mx-auto"
          >
            "Immerse yourself in the breathtaking world of marine life and our conservation journey."
          </motion.p>
        </div>
      </div>

      {/* Video Grid */}
      <div className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {videos.map((video, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
               {/* Card Container */}
               <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-neutral-800 border border-white/5 aspect-video md:aspect-[16/9] transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:border-primary/50">
                 
                 {/* Video Preview (Autoplay Muted Loop on Hover could go here, for now static video poster or just the video element acting as thumbnail) */}
                 <div className="absolute inset-0 bg-black">
                    <video 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        preload="metadata"
                        muted
                    >
                        <source src={video.src} type="video/mp4" />
                    </video>
                 </div>

                 {/* Overlay Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

                 {/* Play Button */}
                 <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 text-white shadow-[0_0_30px_rgba(255,255,255,0.2)] group-hover:scale-110 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                        <FaPlay className="text-2xl md:text-3xl ml-1 group-hover:text-white" />
                    </div>
                 </div>

                 {/* Content Overlay */}
                 <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{video.title}</h3>
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                        {video.description}
                    </p>
                 </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
               <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
               >
                 <FaTimes />
               </button>
               
               <div className="aspect-video">
                 <video 
                   controls 
                   autoPlay 
                   className="w-full h-full"
                 >
                   <source src={selectedVideo.src} type="video/mp4" />
                   Your browser does not support the video tag.
                 </video>
               </div>
               
               <div className="p-6 bg-neutral-900 border-t border-white/10">
                 <h2 className="text-2xl font-bold text-white mb-2">{selectedVideo.title}</h2>
                 <p className="text-gray-400">{selectedVideo.description}</p>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
