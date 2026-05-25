"use client";

import { useState, useEffect } from "react";
import { Ship, Menu, X, Phone, Mail, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, Language } from "@/context/LanguageContext";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.navHome, href: "/#home" },
    { name: t.navAbout, href: "/#about" },
    { name: t.navServices, href: "/#services" },
    { name: t.activitiesHeading, href: "/#activities" },
    { name: t.navContact, href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-md ${
        isScrolled ? "py-2 bg-primary/95 backdrop-blur-md" : "py-3 bg-primary"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2.5"
        >
          <div className="bg-white p-1 rounded-xl shadow-sm overflow-hidden flex items-center justify-center w-9 h-9 md:w-11 md:h-11 border border-white/10 shrink-0">
            <Image 
              src="/LOGO-IST.jpg"
              alt="IST Logo"
              width={44}
              height={44}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-base md:text-lg leading-tight tracking-tight uppercase">
              INTERSHIPPING
            </span>
            <span className="text-white/70 text-[8px] md:text-[9px] font-medium tracking-[0.2em] uppercase leading-none">
              & Transport
            </span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
          
          {/* Elegant Language Pill Switcher */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex items-center bg-white/10 p-0.5 rounded-full border border-white/15 backdrop-blur-sm mr-2"
          >
            {(["th", "en"] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className="relative px-2.5 py-1 text-xs font-bold uppercase transition-colors duration-300 z-10 w-9 text-center focus:outline-none cursor-pointer"
                style={{ color: language === lang ? "#ffffff" : "rgba(255,255,255,0.6)" }}
              >
                {lang}
                {language === lang && (
                  <motion.div
                    layoutId="activeLang"
                    className="absolute inset-0 bg-accent rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-accent hover:bg-accent/90 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg"
          >
            {t.navQuote}
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          {/* Elegant Language Switcher on Header for Mobile */}
          <div className="relative flex items-center bg-white/10 p-0.5 rounded-full border border-white/15">
            {(["th", "en"] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className="relative px-2 py-0.5 text-[10px] font-bold uppercase transition-colors duration-300 z-10 w-7 text-center focus:outline-none cursor-pointer"
                style={{ color: language === lang ? "#ffffff" : "rgba(255,255,255,0.6)" }}
              >
                {lang}
                {language === lang && (
                  <motion.div
                    layoutId="activeLangHeaderMobile"
                    className="absolute inset-0 bg-accent rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-1"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/90 text-lg font-bold"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10" />
              
              {/* Language Selection inside menu as well */}
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Globe size={16} />
                  <span>ภาษา / Language</span>
                </div>
                <div className="relative flex items-center bg-white/10 p-0.5 rounded-full border border-white/15">
                  {(["th", "en"] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className="relative px-3 py-1 text-xs font-bold uppercase transition-colors duration-300 z-10 w-9 text-center focus:outline-none cursor-pointer"
                      style={{ color: language === lang ? "#ffffff" : "rgba(255,255,255,0.6)" }}
                    >
                      {lang}
                      {language === lang && (
                        <motion.div
                          layoutId="activeLangMobile"
                          className="absolute inset-0 bg-accent rounded-full -z-10"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <hr className="border-white/10" />
              <div className="flex flex-col gap-3 text-white/50 text-xs">
                <div className="flex items-center gap-3">
                  <Phone size={16} /> 02-XXX-XXXX
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} /> info@intershipping.com
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
