"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const slides = [
  {
    mobile: "/banner1.png",
    desktop: "/bannerpc1.png"
  },
  {
    mobile: "/banner2.png",
    desktop: "/bannerpc2.png"
  },
  {
    mobile: "/banner3.png",
    desktop: "/bannerpc3.png"
  },
  {
    mobile: "/banner4.png",
    desktop: "/bannerpc4.png"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const { t, language } = useLanguage();
  const [banners, setBanners] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("ist_banners");
    if (saved) {
      try {
        setBanners(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    } else {
      // Default sliders utilizing premium logistics graphics
      const initialBanners = [
        {
          id: "banner-1",
          image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
          title: { th: "บริษัท อินเตอร์ ชิปปิ้ง แอนด์ ทรานสปอร์ต จำกัด", en: "INTER SHIPPING & TRANSPORT CO., LTD." },
          subtitle: { th: "ผู้ให้บริการด้านโลจิสติกส์และพิธีการศุลกากรแบบครบวงจร", en: "Complete Logistics & Customs Clearance Solutions" },
          btnText: { th: "บริการของเรา", en: "Our Services" }
        },
        {
          id: "banner-2",
          image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80",
          title: { th: "การบริการนำเข้าและส่งออกสินค้าอย่างมืออาชีพ", en: "Professional Import-Export Services" },
          subtitle: { th: "ดูแลจัดการเอกสารและเดินพิธีการศุลกากรอย่างรวดเร็วและถูกต้อง", en: "Fast, accurate document processing and customs clearance brokerage." },
          btnText: { th: "ติดต่อสอบถาม", en: "Contact Us" }
        },
        {
          id: "banner-3",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
          title: { th: "บริการขนส่งสินค้าทุกช่องทางระดับมาตรฐานสากล", en: "Global Land, Sea, and Air Freight Solutions" },
          subtitle: { th: "ปลอดภัย มั่นใจได้ด้วยระบบติดตามตรวจสอบสถานะสินค้าอย่างมีประสิทธิภาพ", en: "Safe, secure logistics tracking and reliable fleet performance." },
          btnText: { th: "รายละเอียดบริการ", en: "Service Details" }
        }
      ];
      setBanners(initialBanners);
    }
  }, []);

  useEffect(() => {
    if (banners.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [banners]);

  const nextSlide = () => {
    if (banners.length === 0) return;
    setCurrent((prev) => (prev + 1) % banners.length);
  };
  const prevSlide = () => {
    if (banners.length === 0) return;
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  if (banners.length === 0) {
    return (
      <div className="h-[400px] md:h-[550px] w-full bg-zinc-950 flex items-center justify-center text-zinc-500 font-light">
        Loading sliders...
      </div>
    );
  }

  return (
    <section id="home" className="relative pt-20 bg-white">
      {/* Banner Container with limited height */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative h-[400px] md:h-[550px] w-full overflow-hidden rounded-2xl md:rounded-[3.5rem] shadow-2xl bg-zinc-50">
          {/* Slider Background */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image
                  src={banners[current]?.image}
                  alt="Intershipping Banner"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            {/* Elegant Gradient Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/45 to-transparent z-[5]"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex items-center">
            <div className="px-6 md:px-16 w-full">
              <div className="max-w-2xl text-white">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-accent font-bold tracking-[0.15em] uppercase text-xs md:text-sm mb-3 block">
                    {language === "th" ? banners[current]?.subtitle.th : banners[current]?.subtitle.en}
                  </span>
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">
                    {language === "th" ? banners[current]?.title.th : banners[current]?.title.en}
                  </h1>
                  <p className="text-white/80 text-xs md:text-base leading-relaxed mb-6 md:mb-8 font-light max-w-xl">
                    {language === "th"
                      ? "ให้บริการด้านการนำเข้า-ส่งออก และการขนส่งสินค้าทางบก ทางทะเล และทางอากาศ ด้วยมาตรฐานการบริการระดับมืออาชีพ"
                      : "Providing professional import-export services and transportation solutions by land, sea, and air with reliability and efficiency."}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#contact"
                      className="bg-accent hover:bg-accent/90 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all shadow-lg hover:shadow-accent/30 cursor-pointer"
                    >
                      {language === "th" ? "ติดต่อเรา" : "Contact Us"}
                    </a>
                    <a
                      href="#services"
                      className="bg-white/15 hover:bg-white/25 text-white border border-white/20 px-5 py-2.5 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all backdrop-blur-sm cursor-pointer"
                    >
                      {language === "th" ? banners[current]?.btnText.th : banners[current]?.btnText.en}
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-8 right-8 flex gap-3 z-20">
            <button
              onClick={prevSlide}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/20 backdrop-blur-sm transition-all cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/20 backdrop-blur-sm transition-all cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${i === current ? "w-10 bg-accent" : "w-2.5 bg-white/30"}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
