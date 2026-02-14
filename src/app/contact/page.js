"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPlus, FaMinus, FaPaperPlane, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function ContactPage() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! This form is currently a demo.");
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I volunteer?",
      answer: "You can sign up for our volunteer program by filling out the form on our 'Join Us' page. We have seasonal opportunities for nest monitoring and beach cleanups."
    },
    {
      question: "Where are you located?",
      answer: "Our main center is located in Shanthi Nagar, Chengalpattu, Tamil Nadu. However, our field work covers a significant stretch of the coastline."
    },
    {
      question: "Do you accept international donations?",
      answer: "Yes, we gratefully accept donations from all over the world. Please visit our Donation page for secure international payment options."
    }
  ];

  return (
    <div className="bg-white font-sans selection:bg-primary/20">
      
      {/* Split Hero / Contact Section */}
      <div className="relative min-h-[600px] flex flex-col md:flex-row">
         
         {/* Left Side: Info & Map Background */}
         <div className="w-full md:w-1/2 relative bg-dark text-white p-12 md:p-20 flex flex-col justify-center overflow-hidden">
             
             {/* Map Overlay Effect */}
             <div className="absolute inset-0 opacity-20 pointer-events-none">
                <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15570.32167780172!2d80.007378!3d12.675493!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52fc27ea82ab43%3A0x881f8239a8d025af!2sSkiez%20Technologies%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1686128864958!5m2!1sen!2sin" 
                   width="100%" 
                   height="100%" 
                   style={{border:0, filter: 'grayscale(100%) invert(100%)'}} 
                   allowFullScreen="" 
                   loading="lazy" 
                ></iframe>
             </div>
             <div className="absolute inset-0 bg-primary/90 mix-blend-multiply z-10"></div>
             
             <div className="relative z-20 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h5 className="text-primary-light font-bold tracking-widest uppercase mb-2">Get in Touch</h5>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Talk Conservation.</h1>
                  <p className="text-gray-200 text-lg max-w-md">
                    Have questions or want to get involved? We'd love to hear from you. Reach out to us directly or drop a message.
                  </p>
                </motion.div>

                <div className="space-y-6">
                   <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                         <FaPhone className="text-white" />
                      </div>
                      <div>
                         <h4 className="font-bold text-lg">Phone</h4>
                         <p className="text-gray-300">9444958197 / 9994401291</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                         <FaEnvelope className="text-white" />
                      </div>
                      <div>
                         <h4 className="font-bold text-lg">Email</h4>
                         <p className="text-gray-300">seaturtleconservation2016@gmail.com</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                         <FaMapMarkerAlt className="text-white" />
                      </div>
                      <div>
                         <h4 className="font-bold text-lg">Location</h4>
                         <p className="text-gray-300">Shanthi Nagar, Chengalpattu, Tamil Nadu</p>
                      </div>
                   </div>
                </div>

                <div className="flex gap-4 pt-4">
                   <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-colors"><FaFacebookF /></a>
                   <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-colors"><FaTwitter /></a>
                   <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-colors"><FaLinkedinIn /></a>
                </div>
             </div>
         </div>

         {/* Right Side: Form */}
         <div className="w-full md:w-1/2 bg-white p-12 md:p-20 flex items-center">
             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="w-full max-w-lg mx-auto"
             >
                <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-dark uppercase tracking-wide">Name</label>
                      <input type="text" className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-primary transition-colors bg-transparent placeholder-gray-400" placeholder="Your Name" required />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-dark uppercase tracking-wide">Email</label>
                      <input type="email" className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-primary transition-colors bg-transparent placeholder-gray-400" placeholder="your@email.com" required />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-dark uppercase tracking-wide">Subject</label>
                      <input type="text" className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-primary transition-colors bg-transparent placeholder-gray-400" placeholder="How can we help?" required />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-dark uppercase tracking-wide">Message</label>
                      <textarea rows="4" className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-primary transition-colors bg-transparent placeholder-gray-400 resize-none" placeholder="Write your message here..." required></textarea>
                   </div>
                   <button 
                     type="submit" 
                     className="bg-primary text-white font-bold py-4 px-10 rounded-full hover:bg-dark transition-colors shadow-lg hover:shadow-xl flex items-center gap-2 group"
                   >
                     Send Message <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </form>
             </motion.div>
         </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-gray-50">
         <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
               {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                     <button 
                       onClick={() => toggleAccordion(index)}
                       className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                     >
                        <span className="text-lg font-bold text-dark">{faq.question}</span>
                        <div className={`transition-transform duration-300 ${activeAccordion === index ? 'rotate-180 text-primary' : 'text-gray-400'}`}>
                           {activeAccordion === index ? <FaMinus /> : <FaPlus />}
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

      {/* Full Map Section (Optional if still needed separately, but we have one in the split layout. Keeping if user wants a full view) */}
      <div className="w-full h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15570.32167780172!2d80.007378!3d12.675493!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52fc27ea82ab43%3A0x881f8239a8d025af!2sSkiez%20Technologies%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1686128864958!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
          ></iframe>
      </div>

    </div>
  );
}
