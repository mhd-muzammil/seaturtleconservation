"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaShieldAlt, FaGlobe, FaCreditCard, FaLock, FaHandHoldingHeart, FaApple, FaGoogle, FaMedkit, FaUmbrellaBeach, FaSchool } from 'react-icons/fa';
import { GiTurtle, GiTurtleShell } from 'react-icons/gi';

export default function DonationPage() {
  const [donationAmount, setDonationAmount] = useState(50);
  const [impactLevel, setImpactLevel] = useState(2); // Index of the current tier

  const tiers = [
    {
      amount: 10,
      title: "Hatchling Snack",
      description: "Provides specialized food for 5 rescued hatchlings for a week.",
      icon: <FaApple className="text-4xl" />,
      color: "from-green-400 to-green-600"
    },
    {
      amount: 25,
      title: "Nest Guardian",
      description: "Funds the protective fencing for one vulnerable turtle nest.",
      icon: <GiTurtleShell className="text-4xl" />,
      color: "from-yellow-400 to-orange-500"
    },
    {
      amount: 50,
      title: "Medical Specialist",
      description: "Supplies a full medical kit for treating injured turtles.",
      icon: <FaMedkit className="text-4xl" />,
      color: "from-red-400 to-pink-600"
    },
    {
      amount: 100,
      title: "Satellite Tracker",
      description: "Contributes to a satellite tag to track migration patterns.",
      icon: <FaGlobe className="text-4xl" />,
      color: "from-blue-400 to-indigo-600"
    },
    {
      amount: 250,
      title: "Education Workshop",
      description: "Sponsors a full day conservation workshop for a local school.",
      icon: <FaSchool className="text-4xl" />,
      color: "from-purple-400 to-violet-600"
    },
    {
      amount: 500,
      title: "Beach Cleanup",
      description: "Funds a massive community beach cleanup operation.",
      icon: <FaUmbrellaBeach className="text-4xl" />,
      color: "from-teal-400 to-cyan-600"
    }
  ];

  // Snap to nearest tier logic or just simple slider
  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setDonationAmount(value);
    
    // Find closest tier for visual feedback
    const closestIndex = tiers.reduce((prev, curr, index) => {
       return (Math.abs(curr.amount - value) < Math.abs(tiers[prev].amount - value) ? index : prev);
    }, 0);
    setImpactLevel(closestIndex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your generous donation of $${donationAmount}!`);
  };

  const currentTier = tiers[impactLevel];

  return (
    <div className="bg-neutral-900 min-h-screen font-sans text-white overflow-hidden selection:bg-primary/30">
      
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* LEFT SIDE: Interactive Slider Experience */}
        <div className="w-full lg:w-1/2 relative p-8 md:p-16 flex flex-col justify-center items-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
            
            {/* Background Glow Effect */}
            <motion.div 
               animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r ${currentTier.color} blur-[100px] opacity-20 pointer-events-none transition-colors duration-1000`}
            ></motion.div>

            <div className="relative z-10 w-full max-w-md text-center">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="mb-12"
               >
                  <h5 className="text-gray-400 uppercase tracking-widest text-sm font-bold mb-2">See Your Impact</h5>
                  <h1 className="text-5xl md:text-7xl font-bold mb-2 relative inline-block">
                    ${donationAmount}
                    <span className="text-lg text-gray-400 absolute -top-2 -right-6 font-normal">USD</span>
                  </h1>
               </motion.div>

               {/* The Interaction Area */}
               <div className="mb-16 relative">
                  <input 
                    type="range" 
                    min="10" 
                    max="500" 
                    step="5"
                    value={donationAmount} 
                    onChange={handleSliderChange}
                    className="w-full h-4 bg-gray-700 rounded-lg appearance-none cursor-pointer focus:outline-none slider-thumb z-20 relative"
                  />
                  {/* Visual Ticks */}
                  <div className="flex justify-between text-xs text-gray-500 mt-2 px-1 font-mono">
                     <span>$10</span>
                     <span>$100</span>
                     <span>$250</span>
                     <span>$500</span>
                  </div>
               </div>

               {/* Dynamic Impact Display */}
               <AnimatePresence mode="wait">
                 <motion.div
                   key={currentTier.title}
                   initial={{ opacity: 0, y: 20, scale: 0.9 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   exit={{ opacity: 0, y: -20, scale: 0.9 }}
                   transition={{ duration: 0.3 }}
                   className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl"
                 >
                    <motion.div 
                      className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${currentTier.color} flex items-center justify-center text-white shadow-lg`}
                      layoutId="icon-bg"
                    >
                       {currentTier.icon}
                    </motion.div>
                    <h2 className="text-2xl font-bold mb-2">{currentTier.title}</h2>
                    <p className="text-gray-300 leading-relaxed">
                       {currentTier.description}
                    </p>
                 </motion.div>
               </AnimatePresence>
            </div>
        </div>

        {/* RIGHT SIDE: Payment Form */}
        <div className="w-full lg:w-1/2 bg-white text-dark p-8 md:p-16 flex items-center justify-center relative">
            <div className="w-full max-w-md">
               <div className="text-center lg:text-left mb-10">
                  <h2 className="text-3xl font-bold mb-2">Complete Donation</h2>
                  <p className="text-gray-500">Securely donate <span className="font-bold text-primary">${donationAmount}</span> to Sea Turtle Conservation.</p>
               </div>

               <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Payment Methods */}
                  <div className="flex gap-4 mb-6">
                     <button type="button" className="flex-1 py-3 border border-gray-200 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                        <FaCreditCard className="text-gray-500" />
                        <span className="font-semibold text-sm">Card</span>
                     </button>
                     <button type="button" className="flex-1 py-3 border border-gray-200 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                        <FaGoogle className="text-gray-500" />
                        <span className="font-semibold text-sm">Pay</span>
                     </button>
                     <button type="button" className="flex-1 py-3 border border-gray-200 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                        <FaApple className="text-gray-500" />
                        <span className="font-semibold text-sm">Pay</span>
                     </button>
                  </div>

                  <div className="space-y-4">
                     <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email</label>
                        <input type="email" className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-primary p-3 rounded-t-lg outline-none transition-colors" placeholder="you@example.com" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Card Information</label>
                        <div className="bg-gray-50 border-b-2 border-gray-200 focus-within:border-primary rounded-t-lg transition-colors">
                           <input type="text" className="w-full bg-transparent p-3 outline-none" placeholder="1234 1234 1234 1234" />
                           <div className="flex border-t border-gray-200">
                              <input type="text" className="w-1/2 p-3 bg-transparent outline-none border-r border-gray-200" placeholder="MM / YY" />
                              <input type="text" className="w-1/2 p-3 bg-transparent outline-none" placeholder="CVC" />
                           </div>
                        </div>
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Name on Card</label>
                        <input type="text" className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-primary p-3 rounded-t-lg outline-none transition-colors" placeholder="John Doe" />
                     </div>
                  </div>

                  <button 
                    type="submit" 
                    className={`w-full py-5 rounded-xl text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all bg-gradient-to-r ${currentTier.color}`}
                  >
                    Donate ${donationAmount}
                  </button>
                  
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-4">
                     <FaLock />
                     <span>256-bit SSL Ecrypted Payment</span>
                  </div>
               </form>
            </div>
        </div>

      </div>

      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: transform 0.1s;
        }
        .slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}
