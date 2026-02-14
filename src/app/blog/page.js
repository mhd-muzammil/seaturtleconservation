"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  const blogs = [
    {
      title: "Benefits of Sea Turtles",
      slug: "benefits",
      image: "/assets/images/turtle1.jpg", 
      desc: "Discover how sea turtles contribute to a healthy marine ecosystem and their benefits to human life."
    },
    {
      title: "Protect Sea Turtles",
      slug: "protection",
      image: "/assets/images/modern_02.jpeg", 
      desc: "Learn about the threats sea turtles face and what we can do to protect these ancient mariners."
    },
    {
      title: "Thriving Ecology",
      slug: "ecology",
      image: "/assets/images/slide_03 (2).jpg",
      desc: "Understand the delicate balance of nature and how sea turtles are key to a thriving ecology."
    }
  ];

  return (
    <div className="bg-white text-text-dark font-sans min-h-screen">
      <div className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/page-heading-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">Our Blog</h1>
          <p className="text-lg md:text-xl font-light italic">"Insights and stories from the world of sea turtle conservation."</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.slug} className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={blog.image} 
                    alt={blog.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-dark group-hover:text-primary transition-colors">{blog.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{blog.desc}</p>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wide group-hover:underline">Read More &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
