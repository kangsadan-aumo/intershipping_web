"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Album {
  id: string;
  category: { th: string; en: string };
  title: { th: string; en: string };
  desc: { th: string; en: string };
  date: string;
  location: { th: string; en: string };
  cover: string;
  photos: string[];
}

export default function Activities() {
  const { t, language } = useLanguage();
  const [activeAlbum, setActiveAlbum] = useState<Album | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(0);
  const [albums, setAlbums] = useState<Album[]>([]);
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

  useEffect(() => {
    const initialAlbums: Album[] = [
      {
        id: "album-chinese-new-year",
        category: { th: "กิจกรรมเทศกาล", en: "Festive Activities" },
        title: { th: "วันตรุษจีน", en: "Chinese New Year Celebration" },
        desc: { 
          th: "กิจกรรมเฉลิมฉลองเทศกาลตรุษจีนประจำปี เพื่อความเป็นสิริมงคล ความรุ่งเรือง และร่วมส่งเสริมความสุขในการทำงานร่วมกันของครอบครัว IST", 
          en: "Annual celebration of Chinese New Year at the IST office to welcome prosperity, good fortune, and promote team happiness." 
        },
        date: "16 กุมภาพันธ์ 2569",
        location: { th: "หน้าบริษัท", en: "In front of the Company Office" },
        cover: "/img01.JPG",
        photos: [
          "/img01.JPG",
          "/img02.JPG",
          "/img03.JPG",
          "/img04.JPG"
        ]
      },
      {
        id: "album-songkran",
        category: { th: "กิจกรรมประเพณี", en: "Traditional Events" },
        title: { th: "ร่วมสืบสานประเพณีสงกรานต์", en: "Preserving Songkran Festival" },
        desc: { 
          th: "กิจกรรมสรงน้ำพระพุทธรูป รดน้ำดำหัวผู้ใหญ่ และการละเล่นสงกรานต์ของพนักงานเพื่อสืบสานประเพณีไทยและสร้างขวัญกำลังใจที่ดีให้กับทีมงาน", 
          en: "Traditional water pouring ceremony and activities for the Songkran festival to celebrate Thai New Year and foster unity." 
        },
        date: "12 เมษายน 2569",
        location: { th: "หน้าบริษัท", en: "In front of the Company Office" },
        cover: "/img05.JPG",
        photos: [
          "/img05.JPG",
          "/img06.JPG",
          "/img07.JPG",
          "/img08.JPG",
          "/img09.JPG"
        ]
      },
      {
        id: "album-sports-day",
        category: { th: "กีฬา & กิจกรรมทีมเวิร์ก", en: "Sports & Teamwork" },
        title: { th: "กีฬาสีพนักงาน", en: "Employee Sports Day" },
        date: "8 สิงหาคม 2568",
        desc: { 
          th: "กิจกรรมกีฬาสีและสานสัมพันธ์พนักงานประจำปี เพื่อส่งเสริมสุขภาพที่ดี สร้างความร่วมมือร่วมใจ และกระชับความสัมพันธ์ของทุกคนในครอบครัว IST", 
          en: "Annual sports day event designed to promote physical health, enhance teamwork, and strengthen relationships across the organization." 
        },
        location: { th: "สนามกีฬา", en: "Sports Stadium" },
        cover: "/img10.JPG",
        photos: [
          "/img10.JPG",
          "/img11.JPG",
          "/img12.JPG",
          "/img13.JPG",
          "/img14.JPG",
          "/img15.JPG",
          "/img16.JPG"
        ]
      }
    ];
    setAlbums(initialAlbums);
  }, []);

  const handleOpenAlbum = (album: Album) => {
    setActiveAlbum(album);
    setSelectedPhotoIndex(0);
  };

  const handleCloseAlbum = () => {
    setActiveAlbum(null);
  };

  const nextPhoto = () => {
    if (!activeAlbum) return;
    const len = activeAlbum.photos?.length || 1;
    setSelectedPhotoIndex((prev) => (prev + 1) % len);
  };

  const prevPhoto = () => {
    if (!activeAlbum) return;
    const len = activeAlbum.photos?.length || 1;
    setSelectedPhotoIndex((prev) => (prev - 1 + len) % len);
  };

  return (
    <section id="activities" className="pt-24 pb-6 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            {t.activitiesTitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
            {t.activitiesHeading}
          </h2>
          <p className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {t.activitiesSub}
          </p>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mt-6"></div>
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
            {albums.map((album, i) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                onClick={() => handleOpenAlbum(album)}
                className="flex-shrink-0 w-[290px] sm:w-[340px] md:w-[360px] snap-start group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-zinc-100 flex flex-col h-full"
              >
                {/* Cover Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={album.cover}
                    alt={language === "th" ? album.title.th : album.title.en}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
                  
                  {/* Category tag */}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm text-primary font-semibold text-xs py-2 px-4 rounded-xl shadow-md border border-white/20">
                    {language === "th" ? album.category.th : album.category.en}
                  </div>

                  {/* Cover View Action Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-accent/90 text-white p-4 rounded-full shadow-lg backdrop-blur-sm">
                      <Eye size={24} className="animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Photo count and Date row */}
                    <div className="flex justify-between items-center text-xs text-zinc-400 font-medium mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {album.date}
                      </span>
                      <span className="bg-zinc-100 text-zinc-500 py-1 px-2.5 rounded-lg">
                        {t.activitiesCount.replace("{count}", (album.photos?.length || 0).toString())}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-primary mb-3 leading-snug group-hover:text-accent transition-colors line-clamp-1">
                      {language === "th" ? album.title.th : album.title.en}
                    </h3>
                    <p className="text-zinc-500 text-sm font-light leading-relaxed mb-6 line-clamp-2">
                      {language === "th" ? album.desc.th : album.desc.en}
                    </p>
                  </div>

                  <div className="text-accent font-bold text-sm flex items-center gap-2 group-hover:translate-x-1.5 transition-transform duration-300 self-start">
                    {t.activitiesViewAlbum} <span>→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Gallery Theater Modal */}
      <AnimatePresence>
        {activeAlbum && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-[2.5rem] overflow-hidden max-w-6xl w-full h-[90vh] md:h-[80vh] flex flex-col md:flex-row relative border border-white/10 shadow-2xl"
            >
              {/* Left Side: Photo Theater Area */}
              <div className="md:w-3/5 w-full bg-zinc-950 flex flex-col relative h-[50vh] md:h-full">
                
                {/* Current Active Image in Large View */}
                <div className="flex-1 relative w-full h-full flex items-center justify-center">
                  <Image
                    src={(activeAlbum.photos && activeAlbum.photos[selectedPhotoIndex]) || activeAlbum.cover}
                    alt={`${language === "th" ? activeAlbum.title.th : activeAlbum.title.en} photo ${selectedPhotoIndex + 1}`}
                    fill
                    className="object-contain p-4"
                    priority
                  />
                  
                  {/* Left Navigation Arrow */}
                  <button 
                    onClick={prevPhoto}
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-accent text-white p-3 rounded-full backdrop-blur-sm transition-all shadow-lg hover:scale-115 cursor-pointer z-10"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  {/* Right Navigation Arrow */}
                  <button 
                    onClick={nextPhoto}
                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-accent text-white p-3 rounded-full backdrop-blur-sm transition-all shadow-lg hover:scale-115 cursor-pointer z-10"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Top-Right Close Button for Mobile Views */}
                  <button 
                    onClick={handleCloseAlbum}
                    className="absolute top-6 right-6 md:hidden bg-black/60 text-white p-2.5 rounded-full backdrop-blur-md hover:bg-accent transition-colors z-20 cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Bottom Strip: Thumbnails Sliding Bar */}
                <div className="h-24 bg-zinc-900 border-t border-zinc-800 flex items-center gap-3 px-6 overflow-x-auto select-none">
                  {(activeAlbum.photos || [activeAlbum.cover]).map((photo, index) => (
                    <div 
                      key={index}
                      onClick={() => setSelectedPhotoIndex(index)}
                      className={`relative h-16 w-24 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer transition-all duration-300 ${
                        selectedPhotoIndex === index 
                          ? "border-2 border-accent scale-95 shadow-md shadow-accent/25" 
                          : "opacity-45 hover:opacity-100 hover:scale-95"
                      }`}
                    >
                      <Image
                        src={photo}
                        alt="thumbnail"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Deep Blue Album Info Panel */}
              <div className="md:w-2/5 w-full bg-primary text-white p-8 md:p-12 flex flex-col justify-between overflow-y-auto h-[40vh] md:h-full relative">
                
                {/* Desktop Close Button */}
                <button 
                  onClick={handleCloseAlbum}
                  className="hidden md:flex absolute top-8 right-8 bg-white/10 hover:bg-accent text-white p-3 rounded-full transition-all duration-300 hover:rotate-90 hover:scale-110 cursor-pointer shadow-lg"
                >
                  <X size={18} />
                </button>

                <div className="space-y-6 md:space-y-8 pr-4">
                  {/* Category Pill Tag */}
                  <span className="bg-accent text-white font-bold text-xs uppercase tracking-widest py-1.5 px-4 rounded-full inline-block">
                    {language === "th" ? activeAlbum.category.th : activeAlbum.category.en}
                  </span>

                  {/* Album Title */}
                  <h3 className="text-2xl md:text-3xl font-extrabold leading-snug">
                    {language === "th" ? activeAlbum.title.th : activeAlbum.title.en}
                  </h3>

                  {/* Full Description */}
                  <p className="text-white/70 text-sm md:text-base font-light leading-relaxed">
                    {language === "th" ? activeAlbum.desc.th : activeAlbum.desc.en}
                  </p>

                  <div className="w-16 h-1 bg-accent rounded-full"></div>

                  {/* Event Details Grid */}
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-3 text-white/80">
                      <div className="bg-white/10 p-2.5 rounded-xl text-accent">
                        <Calendar size={18} />
                      </div>
                      <div>
                        <p className="text-white/40 text-xs uppercase tracking-wider">{language === "th" ? "วันที่จัดกิจกรรม" : "Event Date"}</p>
                        <p className="font-semibold text-sm">{activeAlbum.date}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-white/80">
                      <div className="bg-white/10 p-2.5 rounded-xl text-accent mt-0.5">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-white/40 text-xs uppercase tracking-wider">{language === "th" ? "สถานที่จัดกิจกรรม" : "Location"}</p>
                        <p className="font-semibold text-sm leading-relaxed">{language === "th" ? activeAlbum.location.th : activeAlbum.location.en}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer copy for Modal */}
                <div className="pt-8 border-t border-white/10 flex items-center justify-between text-xs text-white/30 font-light mt-8">
                  <span>© IST Employee Gallery</span>
                  <span>{selectedPhotoIndex + 1} / {(activeAlbum.photos?.length || 1)}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
