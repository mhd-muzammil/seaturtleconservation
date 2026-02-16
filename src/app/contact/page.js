"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPlus, FaMinus, FaPaperPlane, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGlobe } from 'react-icons/fa';

const ContactCard = ({ icon: Icon, title, info, subInfo, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group text-center relative overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
      <Icon className="text-2xl text-primary group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-dark mb-3">{title}</h3>
    <p className="text-gray-600 font-medium">{info}</p>
    {subInfo && <p className="text-gray-500 text-sm mt-1">{subInfo}</p>}
  </motion.div>
);

const SocialLink = ({ href, icon: Icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
  >
    <Icon size={20} />
  </a>
);

export default function ContactPage() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      alert("Thank you! Your message has been sent successfully.");
      setFormStatus('idle');
      e.target.reset();
    }, 1500);
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I volunteer?",
      answer: "We welcome volunteers passionate about marine life! Visit our 'Join Us' page to fill out an application. Opportunities range from beach patrols and nest monitoring to community education and fundraising events."
    },
    {
      question: "Where are you located?",
      answer: "Our headquarters is in Shanthi Nagar, Chengalpattu, Tamil Nadu. However, our conservation efforts extend along the coastline, with field stations in key nesting areas."
    },
    {
      question: "Do you accept donations?",
      answer: "Yes! Donations are vital to our work. You can contribute securely via our Donation page. Funds go directly towards equipment, hatchary maintenance, and educational programs."
    },
    {
      question: "Can I report a stranded turtle?",
      answer: "Absolutely. If you spot an injured or stranded sea turtle, please contact our emergency hotline immediately. Avoid touching the animal and wait for our rescue team to arrive."
    }
  ];

  return (
    <div className="bg-gray-50 font-sans min-h-screen">
      
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
           <Image 
              src="/assets/images/slide_01 (3).jpg" 
              alt="Contact Hero" 
              fill 
              className="object-cover brightness-[0.4]"
              priority
           />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md text-primary-light text-sm font-bold tracking-widest uppercase mb-6 border border-white/20"
          >
            Get in Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Let's <span className="text-primary">Connect</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto font-light"
          >
            Have a question, want to volunteer, or just want to say hello? We'd love to hear from you.
          </motion.p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="container mx-auto px-4 -mt-20 relative z-20 mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          <ContactCard 
            icon={FaPhone} 
            title="Call Us" 
            info="+91 94449 58197" 
            subInfo="+91 99944 01291"
            delay={0.3} 
          />
          <ContactCard 
            icon={FaEnvelope} 
            title="Email Us" 
            info="seaturtleconservation2016@gmail.com" 
            subInfo="We reply within 24 hours"
            delay={0.4} 
          />
          <ContactCard 
            icon={FaMapMarkerAlt} 
            title="Visit Us" 
            info="Shanthi Nagar, Chengalpattu" 
            subInfo="Tamil Nadu, India - 603 003"
            delay={0.5} 
          />
        </div>
      </div>

      {/* Main Content: Form & Map Split */}
      <div className="container mx-auto px-4 mb-24">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
           
           {/* Left: Contact Form */}
           <div className="lg:w-1/2 p-10 md:p-16">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-dark mb-4">Send us a Message</h2>
                <p className="text-gray-600">Fill out the form below and our team will get back to you shortly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Your Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Your Email</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Subject</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Volunteering Inquiry" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Message</label>
                  <textarea rows="5" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none" placeholder="How can we help you?" required></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={formStatus === 'sending'}
                  className="w-full bg-dark text-white font-bold py-4 rounded-xl hover:bg-primary transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group disabled:opacity-70"
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'} 
                  <FaPaperPlane className={`group-hover:translate-x-1 transition-transform ${formStatus === 'sending' ? 'animate-pulse' : ''}`} />
                </button>
              </form>
           </div>

           {/* Right: Map & Socials */}
           <div className="lg:w-1/2 bg-dark relative min-h-[500px] flex flex-col">
              <div className="absolute inset-0">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4019.2772183845677!2d80.00247487516039!3d12.676431221280767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52fd56e6099f17%3A0x97423dfeee7ece61!2sSea%20Turtle%20Conservation%20Trust!5e1!3m2!1sen!2sin!4v1771223673607!5m2!1sen!2sin" 
                   width="100%" 
                   height="100%" 
                   style={{border:0}} 
                   allowFullScreen="" 
                   loading="lazy" 
                   className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                 ></iframe>
              </div>
              
              {/* Overlay Content */}
              <div className="relative z-10 mt-auto p-12 bg-gradient-to-t from-dark via-dark/80 to-transparent">
                 <h3 className="text-2xl font-bold text-white mb-6">Connect on Social Media</h3>
                 <div className="flex gap-4">
                    <SocialLink href="https://facebook.com/seaturtletrust" icon={FaFacebookF} />
                    <SocialLink href="https://twitter.com/seaturtletrust" icon={FaTwitter} />
                    <SocialLink href="https://instagram.com/seaturtletrust" icon={FaInstagram} />
                    <SocialLink href="https://linkedin.com/company/seaturtletrust" icon={FaLinkedinIn} />
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 max-w-3xl mb-24">
         <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
         </div>
         <div className="space-y-4">
            {faqs.map((faq, index) => (
               <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <button 
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                     <span className="text-lg font-bold text-dark pr-8">{faq.question}</span>
                     <div className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center transition-all duration-300 ${activeAccordion === index ? 'bg-primary text-white rotate-180' : 'text-gray-400'}`}>
                        {activeAccordion === index ? <FaMinus size={12} /> : <FaPlus size={12} />}
                     </div>
                  </button>
                  <AnimatePresence>
                     {activeAccordion === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                           <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                              {faq.answer}
                           </div>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>
            ))}
         </div>
      </div>

    </div>
  );
}
