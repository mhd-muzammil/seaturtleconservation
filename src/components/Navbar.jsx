"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { 
      name: "Blog", 
      href: "/blog", 
      subLinks: [
        { name: "Benefits of Sea Turtles", href: "/blog/benefits" },
        { name: "Protect Sea Turtles", href: "/blog/protection" },
        { name: "Thriving Ecology", href: "/blog/ecology" },
      ] 
    },
    { name: "Our Services", href: "/services", subLinks: [{ name: "Gallery", href: "/gallery" }] },
    { name: "Donation", href: "/donation" },
    { name: "Contact Us", href: "/contact" },
    { name: "One Page", href: "/one-page" },
  ];

  const isActive = (path) => pathname === path;

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const isHeroPage = ["/", "/about", "/services", "/contact", "/one-page", "/gallery"].includes(pathname);
  const showSolidNav = isSticky || !isHeroPage;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        showSolidNav
          ? "top-0 bg-white/95 backdrop-blur-md shadow-lg py-4"
          : "top-[46px] bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="outline-none z-50 relative">
            <motion.h2 
              layout
              className={`uppercase text-2xl md:text-3xl font-bold tracking-tight ${
                showSolidNav ? "text-primary" : "text-white"
              }`}
            >
              Sea Turtle <span className={showSolidNav ? "text-dark" : "text-white/80"}>Trust</span>
            </motion.h2>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`relative py-2 text-sm font-semibold tracking-wide uppercase transition-colors duration-300 ${
                    isActive(link.href)
                      ? "text-primary"
                      : showSolidNav
                      ? "text-dark hover:text-primary"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                     showSolidNav ? "bg-primary" : "bg-white"
                  }`}></span>
                </Link>

                {/* Desktop Dropdown */}
                {link.subLinks && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white rounded-lg shadow-xl py-2 min-w-[220px] overflow-hidden border-t-2 border-primary">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden z-50 outline-none p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
               <FaTimes className={`text-2xl ${showSolidNav || isMobileMenuOpen ? "text-dark" : "text-white"}`} />
            ) : (
               <FaBars className={`text-2xl ${showSolidNav ? "text-primary" : "text-white"}`} />
            )}
          </button>

          {/* Mobile Overlay Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col pt-24 px-6 h-screen overflow-y-auto"
              >
                <ul className="space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-gray-100 pb-2"
                    >
                      <div className="flex justify-between items-center">
                        <Link
                          href={link.href}
                          className={`text-xl font-bold uppercase tracking-wide ${
                            isActive(link.href) ? "text-primary" : "text-dark"
                          }`}
                          onClick={() => !link.subLinks && setIsMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                        {link.subLinks && (
                          <button 
                            onClick={() => toggleDropdown(link.name)}
                            className="p-2 text-gray-500 hover:text-primary focus:outline-none"
                          >
                            <FaChevronDown className={`transform transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                          </button>
                        )}
                      </div>
                      
                      {/* Mobile Dropdown */}
                      <AnimatePresence>
                        {link.subLinks && activeDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-gray-50 rounded-lg mt-2"
                          >
                            <ul className="py-2">
                              {link.subLinks.map((sub) => (
                                <li key={sub.name}>
                                  <Link
                                    href={sub.href}
                                    className="block px-4 py-3 text-gray-600 hover:text-primary text-sm font-medium border-l-4 border-transparent hover:border-primary transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {sub.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="mt-8 text-center text-gray-400 text-sm">
                  <p>© 2023 Sea Turtle Conservation Trust</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
}
