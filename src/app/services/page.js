"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaAngleRight, FaUsers, FaHandsHelping, FaGlobeAmericas, FaLeaf } from 'react-icons/fa';

export default function ServicesPage() {
  const services = [
    {
      title: "Public Awareness And Education",
      icon: <FaUsers className="text-4xl" />,
      image: "/assets/images/st0.jpg",
      content: (
        <>
          <p className="mb-6 leading-relaxed text-gray-600">
            We strongly believe in the power of education to drive positive change. Through community outreach programs, school visits, and interactive workshops, we raise awareness about the importance of sea turtle conservation. By engaging with the public, we inspire a sense of responsibility and foster a deeper appreciation for these remarkable creatures and their habitats.
          </p>
          <p className="leading-relaxed text-gray-600">
            At Sea Turtle Conservation, we recognize that public awareness and education are key to fostering a culture of conservation. Through our dedicated efforts, we strive to empower individuals, communities, and decision-makers to become advocates for sea turtle conservation, working together to safeguard these remarkable creatures for generations to come.
          </p>
        </>
      )
    },
    {
      title: "Community Workshops and Events",
      icon: <FaHandsHelping className="text-4xl" />,
      image: "/assets/images/st1.jpg",
      content: (
        <>
           <p className="mb-6 leading-relaxed text-gray-600">
             We organize community workshops and events to reach a broader audience and promote public participation in sea turtle conservation. These events feature informative sessions on sea turtle biology, threats they face, and simple actions individuals can take to make a difference. By creating a platform for dialogue and knowledge-sharing, we encourage community members to become advocates for sea turtles in their daily lives.
           </p>
        </>
      )
    },
    {
      title: "Research and Monitoring",
      icon: <FaGlobeAmericas className="text-4xl" />,
      image: "/assets/images/st4.jpg",
      content: (
        <>
          <p className="mb-6 leading-relaxed text-gray-600">
             We actively engage in research initiatives to expand our knowledge of sea turtle biology, behavior, and migration patterns. Through satellite tracking, genetic studies, and population assessments, we gather valuable data that contributes to scientific understanding and conservation efforts. By staying at the forefront of research, we can better protect and conserve sea turtles and their habitats.
          </p>
        </>
      )
    },
    {
       title: "Advocacy and Policy Development",
       icon: <FaLeaf className="text-4xl" />,
       image: "/assets/images/st2.jpg",
       content: (
         <>
           <p className="mb-6 leading-relaxed text-gray-600">
            We actively advocate for the protection of sea turtles at local, national, and international levels. Through collaborations with government agencies, NGOs, and other stakeholders, we work to strengthen existing conservation policies and develop new ones where needed. By raising our voices, we aim to ensure that sea turtles receive the legal protection and conservation measures necessary for their survival.
           </p>
         </>
       )
     },
     {
      title: "Reduce plastic use and promote recycling",
      icon: <FaLeaf className="text-4xl" />, // Reusing icon for simplicity or add specific one
      image: "/assets/images/st5.jpg",
      content: (
        <>
          <p className="mb-6 leading-relaxed text-gray-600">
            Plastics pose a significant threat to sea turtles. Reduce your plastic consumption, particularly single-use plastics, and encourage others to do the same. Properly dispose of and recycle plastic waste to prevent it from ending up in the ocean.
          </p>
        </>
      )
    }
  ];

  const stats = [
    { label: "Volunteers Engaged", value: "500+" },
    { label: "Turtles Rescued", value: "1,200+" },
    { label: "Workshops Held", value: "50+" },
    { label: "Beaches Cleaned", value: "25+" },
  ];

  return (
    <div className="bg-white text-text-dark font-sans selection:bg-primary/20">
      
      {/* Hero Section */}
      <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('/assets/images/page-heading-bg.jpg')" }}
        ></div>
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold uppercase tracking-wider mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl font-light italic text-gray-200"
          >
            "Nurturing sea turtles through dedicated care and conservation services."
          </motion.p>
        </div>
      </div>

      {/* Impact Stats Section */}
      <div className="bg-primary py-16 text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('/assets/images/pattern.png')]"></div>
         <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
               {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  >
                     <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</h3>
                     <p className="text-sm md:text-base uppercase tracking-widest opacity-90">{stat.label}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </div>

      {/* Services List - Zig Zag Layout */}
      <div className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
           {services.map((service, index) => (
             <div key={index} className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-24 last:mb-0">
                {/* Image Side */}
                <motion.div 
                  className={`w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'md:order-2' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                   <Image
                     src={service.image}
                     alt={service.title}
                     fill
                     className="object-cover transform hover:scale-110 transition-transform duration-700"
                   />
                </motion.div>

                {/* Content Side */}
                <motion.div 
                  className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                   <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-primary/10 rounded-full text-primary">
                         {service.icon}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-dark">{service.title}</h2>
                   </div>
                   <div className="bg-gray-50 p-8 rounded-tr-[3rem] rounded-bl-[3rem] border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow duration-300">
                      {service.content}
                   </div>
                </motion.div>
             </div>
           ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900 text-white text-center">
         <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Join us in our mission to protect sea turtles. Your support, whether through volunteering or donation, creates a ripple of positive change.</p>
            <div className="flex justify-center gap-4">
               <a href="/contact" className="bg-primary hover:bg-white hover:text-primary text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                  Become a Volunteer
               </a>
               <a href="/donation" className="bg-transparent border-2 border-white hover:bg-white hover:text-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
                  Donate Now
               </a>
            </div>
         </div>
      </div>

    </div>
  );
}
