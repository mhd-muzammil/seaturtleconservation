"use client";
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer className="relative bg-dark text-gray-300 pt-20 pb-10 overflow-hidden font-sans">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-orange-400 to-primary"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          
          {/* Column 1: Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-2xl font-bold text-white tracking-wide uppercase border-b-2 border-primary inline-block pb-2 mb-4">Sea Turtle Trust</h4>
            <div className="space-y-4 text-sm font-light leading-relaxed">
              <p>No.81/5, 6th Street,<br />Shanthi Nagar, Nemeli,</p>
              <p>Chengalpattu - 603 003<br />Tamil Nadu, India</p>
            </div>
            <ul className="flex space-x-3 mt-6">
              {[
                { Icon: FaFacebookF, href: "https://www.facebook.com/groups/729945823774911/?ref=share", label: "Facebook" },
                { Icon: FaTwitter, href: "https://twitter.com/seaturtletrust", label: "Twitter" },
                { Icon: FaLinkedinIn, href: "https://linkedin.com/company/seaturtleconservation", label: "LinkedIn" },
                { Icon: FaBehance, href: "#", label: "Behance" }
              ].map(({ Icon, href, label }, index) => (
                <li key={index}>
                  <a 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 flex items-center justify-center bg-white/10 text-white rounded-full transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2: Useful Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-xl font-bold text-white tracking-wide mb-4">Useful Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Our Services", href: "/services" },
                { name: "Donations", href: "/donation" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors duration-300 flex items-center group">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Follow Us */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-xl font-bold text-white tracking-wide mb-4">Follow Us</h4>
             <ul className="space-y-3 text-sm">
              {[
                { name: "Facebook", href: "https://www.facebook.com/groups/729945823774911/?ref=share" },
                { name: "Twitter", href: "https://twitter.com/seaturtletrust" },
                { name: "Instagram", href: "https://instagram.com/seaturtleconservation" },
                { name: "LinkedIn", href: "https://linkedin.com/company/seaturtleconservation" },
                { name: "Behance", href: "#" }
              ].map((social) => (
                <li key={social.name}>
                  <a 
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Form */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-xl font-bold text-white tracking-wide mb-4">Contact Us</h4>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                required
              />
              <input 
                type="email" 
                placeholder="E-Mail Address" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                required
              />
              <textarea 
                rows="4" 
                placeholder="Your Message" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                required
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-white hover:text-primary text-white font-bold py-3 rounded-lg transition-all duration-300 uppercase tracking-wider text-sm flex items-center justify-center gap-2 group"
              >
                Send Message
                <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </motion.div>
      </div>

      {/* Sub Footer */}
      <div className="border-t border-white/10 mt-16 pt-8">
        <div className="container mx-auto px-4 text-center">
            <p className="text-xs text-gray-500 font-light tracking-widest uppercase">
            Copyright &copy; 2023 Sea Turtle Conservation Trust. All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
