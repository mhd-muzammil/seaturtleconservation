"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { FaClock, FaPhone, FaHandHoldingHeart, FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance } from "react-icons/fa";

export default function SubHeader() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour12: false }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-primary h-[46px] leading-[46px] text-white hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-full">
          {/* Left Info */}
          <ul className="flex items-center space-x-0 h-full">
            <li className="border-l border-white/30 px-5 h-full flex items-center">
              <Link href="/contact" className="hover:opacity-75 transition-opacity flex items-center text-sm font-semibold">
                <FaClock className="mr-2 text-lg" />
                BE A VOLUNTEER
              </Link>
            </li>
            <li className="border-l border-white/30 px-5 h-full flex items-center">
              <a href="#" className="hover:opacity-75 transition-opacity flex items-center text-sm font-semibold">
                <FaPhone className="mr-2 text-lg" />
                9444958197/9994401291
              </a>
            </li>
            <li className="border-l border-r border-white/30 px-5 h-full flex items-center">
              <Link href="/donation" className="hover:opacity-75 transition-opacity flex items-center text-sm font-semibold">
                <FaHandHoldingHeart className="mr-2 text-lg" />
                DONATE
              </Link>
            </li>
          </ul>

          {/* Right Icons */}
          <ul className="flex items-center h-full">
            <li className="border-l border-white/30 w-[46px] h-full flex justify-center items-center">
              <a href="https://www.facebook.com/groups/729945823774911/?ref=share" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                <FaFacebookF />
              </a>
            </li>
            <li className="border-l border-white/30 w-[46px] h-full flex justify-center items-center">
              <a href="#" className="hover:opacity-75 transition-opacity">
                <FaTwitter />
              </a>
            </li>
            <li className="border-l border-white/30 w-[46px] h-full flex justify-center items-center">
              <a href="#" className="hover:opacity-75 transition-opacity">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="border-l border-r border-white/30 w-[46px] h-full flex justify-center items-center">
              <a href="#" className="hover:opacity-75 transition-opacity">
                <FaBehance />
              </a>
            </li>
            {/* Clock */}
            <li className="ml-4 font-mono font-bold text-xl min-w-[100px] text-center">
              {time || "00:00:00"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
