"use client";
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

export default function MoreInfo() {
  return (
    <section className="more-info py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row">
            
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="md:w-1/2"
            >
              <div className="relative w-full h-[300px] md:h-full min-h-[500px]">
                <Image 
                  src="/assets/images/fish1.jpeg" 
                  alt="About Us" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="md:w-1/2 flex items-center bg-gray-50"
            >
              <div className="p-10 md:p-14 lg:p-16">
                <span className="block uppercase text-sm font-bold text-gray-500 tracking-[2px] mb-4">
                  <span className="text-primary mr-2">/</span> Who we are
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-dark leading-tight">
                  Get to know about <span className="text-primary italic">our Trust</span>
                </h2>
                
                <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                    <p>
                    Davidraj is the founder of the Sea Turtle Conservation Trust in Chennai, India. He has dedicated his life to protecting sea turtles and their habitats along the Entire World coastline. He has worked tirelessly to raise awareness about the threats facing sea turtles, such as habitat loss, pollution, and poaching, and has implemented various conservation programs to protect their nesting and hatching grounds.
                    </p>
                    <p className="border-l-4 border-primary pl-4 italic text-gray-700 font-normal">
                    Through his efforts, He has helped to save countless nests and hatchlings, ensuring that these magnificent creatures continue to thrive in the wild.
                    </p>
                </div>

                <div className="mt-10">
                    <button className="bg-transparent border-2 border-dark text-dark font-bold py-3 px-8 rounded hover:bg-dark hover:text-white transition-all duration-300 uppercase tracking-widest text-sm">
                        About Founder
                    </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
