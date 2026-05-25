"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Activities from "@/components/Activities";
import Image from "next/image";
import Link from "next/link";
import { Ship, Share2, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* About Section Snippet */}
      <section id="about" className="pt-24 pb-6 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left side text column */}
            <div className="lg:w-1/2">
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                {t.aboutTitle}
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
                {t.aboutHeading}
              </h2>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6 font-light">
                {t.aboutDesc1}
              </p>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-8 font-light">
                {t.aboutDesc2}
              </p>

              {/* Vision section with border accent */}
              <div className="bg-zinc-50 border-l-4 border-accent p-6 rounded-r-3xl shadow-sm mb-6">
                <h4 className="text-primary font-bold text-xl mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-accent rounded-full"></span>
                  {t.visionTitle}
                </h4>
                <p className="text-zinc-600 leading-relaxed font-light">{t.visionDesc}</p>
              </div>
            </div>

            {/* Right side graphical column */}
            <div className="lg:w-1/2 w-full relative">
              <div className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/pic1.png"
                  alt="IST Logistics operations"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/10"></div>
              </div>
              {/* Decorative accent card */}
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-2xl shadow-xl hidden md:block max-w-[220px] z-10">
                <p className="text-3xl font-extrabold mb-1">IST</p>
                <p className="text-xs text-white/80 font-medium uppercase tracking-wider">Professional Logistics Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* Why Choose Us Section */}
      <section className="pt-12 pb-24 bg-primary text-white overflow-hidden relative">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full -mr-48 -mb-48 blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              {t.whyTitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.whyHeading}
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto font-light">
              {t.whySub}
            </p>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mt-6"></div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left side card stats */}
            <div className="lg:w-2/5 w-full">
              <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-md shadow-2xl relative">
                <div className="absolute top-6 right-6 bg-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  Licensed Broker
                </div>
                <h3 className="text-2xl font-bold mb-6">INTER SHIPPING</h3>
                <p className="text-white/60 leading-relaxed mb-8 font-light">
                  {language === "th"
                    ? "เรามุ่งมั่นในการส่งมอบการบริการโลจิสติกส์ที่รวดเร็ว ถูกต้อง ปลอดภัย เพื่อช่วยให้ธุรกิจของคุณเติบโตอย่างไร้ขีดจำกัด"
                    : "We are committed to delivering fast, accurate, and secure logistics services to help your business grow without limits."}
                </p>
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-white/50 text-sm">{language === "th" ? "มาตรฐานบริการ" : "Service Standard"}</span>
                    <span className="font-bold text-accent">ISO Standard</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-white/50 text-sm">{language === "th" ? "การครอบคลุม" : "Coverage"}</span>
                    <span className="font-bold text-white">{language === "th" ? "ทั่วโลก / ทั่วประเทศ" : "Global & Nationwide"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-sm">{language === "th" ? "บริการเดินพิธีการ" : "Customs Brokerage"}</span>
                    <span className="font-bold text-accent">{language === "th" ? "มืออาชีพได้รับอนุญาต" : "Licensed & Experienced"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side list grid */}
            <div className="lg:w-3/5 w-full grid md:grid-cols-2 gap-6">
              {[
                t.whyBenefit1,
                t.whyBenefit2,
                t.whyBenefit3,
                t.whyBenefit4,
                t.whyBenefit5,
                t.whyBenefit6
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-sm"
                >
                  <div className="bg-accent p-2 rounded-xl mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 leading-snug">{benefit}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Activities />
      <Contact />

      {/* Footer */}
      <footer className="bg-primary text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="bg-white p-1 rounded-xl shadow-md overflow-hidden flex items-center justify-center w-12 h-12 shrink-0">
                  <Image 
                    src="/LOGO-IST.jpg"
                    alt="IST Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-bold text-xl tracking-tight uppercase">Intershipping</span>
              </div>
              <p className="text-white/60 leading-relaxed mb-6">
                {t.footerDesc}
              </p>
              <div className="flex gap-4">
                <div className="bg-white/10 p-2 rounded-lg hover:bg-accent transition-colors cursor-pointer">
                  <Share2 size={20} />
                </div>
                <div className="bg-white/10 p-2 rounded-lg hover:bg-accent transition-colors cursor-pointer">
                  <Globe size={20} />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">{t.footerServicesTitle}</h4>
              <ul className="space-y-4 text-white/60">
                <li className="hover:text-accent transition-colors"><a href="#services">{t.service5Title.split(" (")[0]}</a></li>
                <li className="hover:text-accent transition-colors"><a href="#services">{t.service6Title.split(" (")[0]}</a></li>
                <li className="hover:text-accent transition-colors"><a href="#services">{t.service7Title.split(" (")[0]}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">{t.footerLinksTitle}</h4>
              <ul className="space-y-4 text-white/60">
                <li className="hover:text-accent transition-colors"><a href="#about">{t.footerLinkAbout}</a></li>
                <li className="hover:text-accent transition-colors"><a href="#">{t.footerLinkCareers}</a></li>
                <li className="hover:text-accent transition-colors"><a href="#">{t.footerLinkNews}</a></li>
                <li className="hover:text-accent transition-colors"><a href="#">{t.footerLinkPrivacy}</a></li>
                <li className="pt-2 border-t border-white/5 hover:text-accent transition-colors"></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">{t.footerNewsletterTitle}</h4>
              <p className="text-white/60 mb-6">{t.footerNewsletterDesc}</p>
              <div className="flex bg-white/10 p-1 rounded-xl">
                <input
                  type="email"
                  placeholder={t.footerNewsletterPlaceholder}
                  className="bg-transparent border-none flex-1 px-4 py-2 outline-none text-sm"
                />
                <button className="bg-accent px-4 py-2 rounded-lg font-bold text-sm transition-all hover:bg-accent/90 cursor-pointer">
                  {t.footerNewsletterSubmit}
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
            <p>© {new Date().getFullYear()}INTER SHIPPING & TRANSPORT CO., LTD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
