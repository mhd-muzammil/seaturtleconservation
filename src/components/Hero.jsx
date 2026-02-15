"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Custom Arrows
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute top-1/2 right-[30px] z-20 cursor-pointer text-white text-[36px] bg-black/20 hover:bg-primary/80 rounded-full p-2 transition-all duration-300 transform -translate-y-1/2 backdrop-blur-sm" onClick={onClick}>
      <FaChevronRight className="text-xl md:text-2xl" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute top-1/2 left-[30px] z-20 cursor-pointer text-white text-[36px] bg-black/20 hover:bg-primary/80 rounded-full p-2 transition-all duration-300 transform -translate-y-1/2 backdrop-blur-sm" onClick={onClick}>
      <FaChevronLeft className="text-xl md:text-2xl" />
    </div>
  );
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = React.useMemo(() => ({
    dots: true,
    infinite: true,
    speed: 1000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: dots => (
      <div style={{ bottom: "30px" }}>
        <ul className="m-0 p-0 flex justify-center gap-2 custom-dots"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 rounded-full transition-all duration-300 bg-white/50 hover:bg-white dot-item"></div>
    )
  }), []);

  const slides = [
    {
      id: 1,
      image: "/assets/images/slide_01 (3).jpg",
      h6: "Discover the Magnificent World of Sea Turtles",
      h4: "Unveiling the Human Life Benefits of Sea Turtles & Ecosystem Health",
      p: "Welcome to Sea Turtle Conservation Trust - A Sanctuary for Sea Turtles and Marine Ecosystem",
      link: "/blog/benefits", 
      linkText: "Read more",
      extraLink: { text: "One-page version", href: "/one-page" }
    },
    {
      id: 2,
      image: "/assets/images/modern_02.jpeg",
      h6: "Unveiling the Ecological, Cultural, and Economic Importance",
      h4: "Protect Sea Turtles & Guardians of the Sea",
      p: "Sea turtles - a vital thread in the intricate tapestry of ocean life.",
      link: "/blog/protection", 
      linkText: "Read more"
    },
    {
      id: 3,
      image: "/assets/images/slide_03 (2).jpg",
      h6: "Protecting sea turtles today ensures a thriving marine tomorrow",
      h4: "In the delicate dance of nature, balance is the key to a thriving ecology",
      p: "Coexisting for a Sustainable Future",
      link: "/blog/ecology", 
      linkText: "Read more"
    }
  ];

  return (
    <div className="relative text-white font-sans overflow-hidden h-screen" id="home">
       <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative h-screen outline-none">
            {/* Background Image with Ken Burns Effect */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div 
                  key={`bg-${index}-${currentSlide === index}`} // Force remount on active
                  initial={{ scale: 1 }}
                  animate={{ scale: currentSlide === index ? 1.1 : 1 }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${slide.image}')` }}
                />
                <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
            </div>

            {/* Content centered */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
              <div className="max-w-4xl mx-auto space-y-6 relative z-10">
                
                <AnimatePresence mode="wait">
                  {currentSlide === index && (
                    <>
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="text-primary text-lg md:text-xl font-bold uppercase tracking-widest mb-4"
                      >
                        {slide.h6}
                      </motion.div>

                      <motion.h1 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        className="text-3xl md:text-6xl font-bold uppercase tracking-wide leading-tight mb-6 drop-shadow-lg"
                        dangerouslySetInnerHTML={{ __html: slide.h4.replace("&", "<br class='hidden md:block' /><span class='text-primary'>&</span>") }} 
                      />

                      <motion.div
                         initial={{ opacity: 0, y: 40 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                      >
                        <p className="text-base md:text-xl leading-relaxed font-light mb-8 max-w-2xl mx-auto text-gray-100">
                          {slide.p}
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <Link href={slide.link} className="bg-primary hover:bg-white hover:text-primary text-white font-bold py-3 px-8 rounded-full transition-all duration-300 uppercase tracking-wider shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                {slide.linkText}
                            </Link>
                            
                            {slide.extraLink && (
                                <Link href={slide.extraLink.href} className="text-white hover:text-primary font-semibold py-3 px-6 rounded-full border-2 border-white hover:border-primary transition-all duration-300 uppercase tracking-wider text-sm">
                                    {slide.extraLink.text}
                                </Link>
                            )}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </div>
        ))}
       </Slider>
       <style jsx global>{`
         .slick-active .dot-item {
           background-color: #fca311 !important; /* using primary color */
           transform: scale(1.25);
         }
       `}</style>
    </div>
  );
}
