"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dotsClass: "slick-dots custom-dots-testimonials"
  };

  const testimonials = [
    {
      name: "MD RAMACHANDRAN",
      role: "Volunteer",
      text: "Their unwavering commitment to sea turtle conservation is an inspiration to all, making a profound impact on the protection of these majestic creatures."
    },
    {
      name: "HEMALATHA",
      role: "Volunteer",
      text: "Their passion for sea turtle rehabilitation and rescue shines through in every act of compassion and care, giving injured or stranded turtles a lifeline to recovery."
    },
    {
      name: "NANDHINI",
      role: "Volunteer",
      text: "I am proud to be a part of a team that is deeply committed to protecting and preserving these majestic creatures. The level of dedication and professionalism is truly commendable."
    },
    {
      name: "PRIYADHARSHINI",
      role: "Volunteer",
      text: "The impact we make in the lives of sea turtles and the environment is tangible, and I am proud to be part of this vital conservation effort."
    }
  ];

  return (
    <section className="testimonials py-20 bg-dark relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4"> 
            What they say <span className="text-primary italic">about us</span>
          </h2>
          <span className="block mt-4 uppercase text-sm font-semibold text-gray-400 tracking-[2px]">
            "A BEACON OF HOPE FOR OUR MARINE FRIENDS"
          </span>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div key={index} className="px-4 pb-12 outline-none">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-14 rounded-2xl text-center relative shadow-xl hover:bg-white/10 transition-colors duration-300">
                  <FaQuoteLeft className="text-4xl text-primary/30 absolute top-8 left-8" />
                  
                  <p className="mt-6 text-lg md:text-xl font-light text-gray-200 italic leading-relaxed relative z-10">
                    "{item.text}"
                  </p>
                  
                  <div className="mt-8 border-t border-white/10 pt-6">
                    <h4 className="text-xl font-bold text-white tracking-wide uppercase">{item.name}</h4>
                    <span className="block mt-2 font-medium text-sm text-primary uppercase tracking-widest">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
