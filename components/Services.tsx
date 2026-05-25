"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Ship, 
  Truck, 
  ShieldCheck, 
  Globe, 
  Plane, 
  FileText, 
  ArrowLeftRight,
  ChevronLeft,
  ChevronRight,
  Package
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { servicesData } from "@/data/services";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "truck": return <Truck className="w-6 h-6" />;
    case "ship": return <Ship className="w-6 h-6" />;
    case "plane": return <Plane className="w-6 h-6" />;
    case "globe": return <Globe className="w-6 h-6" />;
    case "file-text": return <FileText className="w-6 h-6" />;
    case "shield-check": return <ShieldCheck className="w-6 h-6" />;
    case "arrow-left-right": return <ArrowLeftRight className="w-6 h-6" />;
    case "package": return <Package className="w-6 h-6" />;
    default: return <Truck className="w-6 h-6" />;
  }
};

export default function Services() {
  const { t, language } = useLanguage();
  const services = servicesData;
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const cardWidth = 360 + 32; // card width + gap
      
      let scrollTo = 0;
      if (direction === "left") {
        if (scrollLeft <= 20) {
          // Loop to end
          scrollTo = scrollWidth - clientWidth;
        } else {
          scrollTo = scrollLeft - cardWidth;
        }
      } else {
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          // Loop to start
          scrollTo = 0;
        } else {
          scrollTo = scrollLeft + cardWidth;
        }
      }
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="pt-12 pb-6 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            {t.servicesTitle}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-primary mb-6"
          >
            {t.servicesHeading}
          </motion.h2>
          
          {/* Custom red dot and line divider exactly like screenshot */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-16 h-0.5 bg-zinc-300"></div>
            <div className="w-2.5 h-2.5 bg-accent rounded-full border-2 border-white shadow-sm"></div>
            <div className="w-16 h-0.5 bg-zinc-300"></div>
          </div>
        </div>

        {/* Carousel Slider Wrapper */}
        <div className="relative group/slider max-w-[1240px] mx-auto px-4 md:px-12">
          
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 md:left-2 top-[35%] -translate-y-1/2 z-20 bg-white hover:bg-accent text-primary hover:text-white w-12 h-12 rounded-full shadow-lg border border-zinc-200 flex items-center justify-center transition-all duration-300 opacity-90 hover:opacity-100 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 md:right-2 top-[35%] -translate-y-1/2 z-20 bg-white hover:bg-accent text-primary hover:text-white w-12 h-12 rounded-full shadow-lg border border-zinc-200 flex items-center justify-center transition-all duration-300 opacity-90 hover:opacity-100 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Horizontally scrolling list */}
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-smooth pb-12 pt-4 px-2 scrollbar-none snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {services.map((service, i) => (
              <motion.div
                key={service.id || i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.1, 0.3) }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[290px] sm:w-[340px] md:w-[360px] bg-transparent overflow-hidden flex flex-col snap-start group"
              >
                {/* Image Area with premium rounded corners */}
                <div className="relative h-64 overflow-hidden rounded-[2rem] shadow-md">
                  <Image
                    src={service.image}
                    alt={language === "th" ? service.title.th : service.title.en}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
                  
                  {/* Stored Icon rendering */}
                  <div className="absolute top-6 left-6 bg-white p-3 rounded-2xl shadow-lg text-primary">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Floating Content Card (Slate-Blue/Navy background overlapping bottom) */}
                <div className="px-4 pb-4 flex-1 flex flex-col justify-between">
                  <div className="bg-[#1e293b] text-white rounded-[2rem] p-6 shadow-xl border border-white/5 -mt-16 relative z-10 min-h-[170px] flex flex-col justify-center transition-transform duration-500 group-hover:-translate-y-1">
                    <h3 className="text-base md:text-lg font-bold text-center leading-snug mb-3 line-clamp-2">
                      {language === "th" ? service.title.th : service.title.en}
                    </h3>
                    <p className="text-zinc-300 text-xs text-center leading-relaxed line-clamp-3 font-light">
                      {language === "th" ? service.shortDesc.th : service.shortDesc.en}
                    </p>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <Link 
                      href={`/services/${service.id}`}
                      className="text-primary hover:text-accent font-bold text-sm flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      {t.readMore} <span className="translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
