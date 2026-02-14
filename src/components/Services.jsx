"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "WHY SEA TURTLES",
      image: "/assets/images/turtle1.jpg",
      text: "Sea turtles are not just extraordinary creatures; they play a crucial role in maintaining the health of our oceans. As ancient mariners, they have roamed the seas for millions of years, acting as key indicators of ecosystem balance. By conserving sea turtles, we protect the biodiversity of our marine environments and safeguard the delicate equilibrium of our planet."
    },
    {
      title: "OUR COMMITMENTS", // Fixed typo "COMMITEMENTS"
      image: "/assets/images/turtle4.jpg",
      text: "At our Sea Turtle Conservation Hub, we are dedicated to making a real difference. Through a combination of scientific research, habitat restoration, education, and community engagement, we are actively working towards a sustainable future for sea turtles. Our efforts aim to ensure their nesting beaches remain protected, reduce threats such as pollution and habitat destruction, and promote responsible tourism practices."
    },
    {
      title: "HOW YOU CAN HELP!!!",
      image: "/assets/images/turtle9.jpg",
      text: "Join us in our mission to save sea turtles by becoming an advocate, a volunteer, or a donor. Every small action contributes to the bigger cause. Whether you're passionate about joining beach clean-ups, supporting our research initiatives, or spreading awareness on social media, your involvement matters. Together, we can create a brighter future for these extraordinary creatures."
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="services py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            "Discover the Majestic Beauty of Sea Turtles" 
            <span className="block mt-2 text-primary font-serif italic"> "Inspiring Conservation for a Sustainable Ocean Legacy"</span>
          </h2>
          <span className="block mt-4 uppercase text-sm font-semibold text-gray-500 tracking-widest">
            "Explore the captivating world of sea turtles"
          </span>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden group transition-all duration-300"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                     <h4 className="text-xl font-bold text-white tracking-wider border-l-4 border-primary pl-3">{service.title}</h4>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light group-hover:text-gray-800 transition-colors">
                  {service.text}
                </p>
                <button className="text-primary font-bold text-sm uppercase tracking-wider hover:underline underline-offset-4 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <span className="text-lg">&rarr;</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
