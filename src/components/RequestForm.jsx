"use client";
import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa';

export default function RequestForm() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover bg-[url('/assets/images/turtle-underwater.webp')]"
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-black/50 to-blue-900/80 z-10 backdrop-blur-[2px]"></div>
      
      <div className="container mx-auto px-4 relative z-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-primary text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
            Join the Movement
          </span>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-xl">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300">Dive In?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            The ocean needs heroes like you. Whether through volunteering, donation, or spreading awareness, your action creates ripples of change.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="group relative overflow-hidden bg-primary text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50">
              <span className="relative z-10 flex items-center gap-2 uppercase tracking-wide">
                Get Involved Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
            
            <Link href="/contact" className="group flex items-center gap-2 text-white font-semibold hover:text-primary transition-colors duration-300">
               <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                 <FaPhoneAlt className="text-sm" />
               </span>
               <span className="uppercase tracking-wider text-sm">Request a Call Back</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
