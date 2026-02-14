"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPaperPlane, FaUser, FaEnvelope, FaTag } from "react-icons/fa";

export default function CallbackForm() {
  return (
    <section className="callback-form py-24 bg-gray-50 relative overflow-hidden">
       {/* Background decorative elements */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
            
            {/* Left Side: Image/Inspiration */}
            <div className="lg:w-5/12 relative min-h-[400px] lg:min-h-full">
                <Image 
                    src="/assets/images/modern_02.jpeg" 
                    alt="Sea Turtle Conservation" 
                    fill 
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute bottom-12 left-10 p-4 max-w-sm">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                        Join Together
                    </span>
                    <h3 className="text-4xl font-bold text-white mb-4 leading-tight">Make a <br/>Difference Today</h3>
                    <p className="text-gray-300 font-light leading-relaxed">
                        "Your small contribution can help save thousands of lives in the ocean. Let's work together for a better future."
                    </p>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:w-7/12 p-10 md:p-16 flex flex-col justify-center">
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-2">
                        Request a <span className="text-primary italic relative">Call Back
                             <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                             </svg>
                        </span>
                    </h2>
                    <p className="text-gray-500 mt-4">Have questions? Fill out the form and our team will get back to you within 24 hours.</p>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative group">
                            <FaUser className="absolute top-4 left-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                            <input 
                                type="text" 
                                name="name" 
                                className="w-full bg-gray-50 border border-gray-200 text-dark rounded-xl px-12 py-3.5 outline-none focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-300 placeholder-gray-400" 
                                placeholder="Full Name" 
                                required 
                            />
                        </div>
                        <div className="relative group">
                            <FaEnvelope className="absolute top-4 left-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                            <input 
                                type="email" 
                                name="email" 
                                className="w-full bg-gray-50 border border-gray-200 text-dark rounded-xl px-12 py-3.5 outline-none focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-300 placeholder-gray-400" 
                                placeholder="Email Address" 
                                required 
                            />
                        </div>
                    </div>
                    
                    <div className="relative group">
                         <FaTag className="absolute top-4 left-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                         <input 
                           type="text" 
                           name="subject" 
                           className="w-full bg-gray-50 border border-gray-200 text-dark rounded-xl px-12 py-3.5 outline-none focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-300 placeholder-gray-400" 
                           placeholder="Subject" 
                           required 
                         />
                    </div>

                    <div className="relative group">
                        <textarea 
                            name="message" 
                            rows="4" 
                            className="w-full bg-gray-50 border border-gray-200 text-dark rounded-xl px-6 py-4 outline-none focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-300 placeholder-gray-400 resize-none" 
                            placeholder="How can we help you?" 
                            required
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-dark/20 hover:bg-primary hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 uppercase tracking-wide text-sm"
                    >
                        Send Message <FaPaperPlane className="text-sm" />
                    </button>
                </form>
             </div>
        </motion.div>
      </div>
    </section>
  );
}
