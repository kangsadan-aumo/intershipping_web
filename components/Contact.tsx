"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="pt-12 pb-24 bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-primary/5 overflow-hidden flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-2/5 bg-primary p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-8">{t.contactHeading}</h2>
              <p className="text-white/70 mb-12 text-base md:text-lg font-light leading-relaxed">
                {t.contactDesc}
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">{t.contactPhone}</p>
                    <p className="text-lg md:text-xl font-semibold">02 134 7781</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-white/60 text-sm mb-1">{t.contactEmail}</p>
                    <p className="text-base md:text-lg font-semibold break-all">intershipping@istshipping.co.th</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">{t.contactAddressTitle}</p>
                    <p className="text-sm md:text-base font-medium leading-relaxed font-light">
                      <strong>{t.contactAddressLine1}</strong><br />
                      {t.contactAddressLine2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-12 lg:p-20">
            <h3 className="text-3xl font-bold text-primary mb-10">{t.contactFormTitle}</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary/60 uppercase tracking-wider">{t.contactFormName}</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-zinc-100 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-accent outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary/60 uppercase tracking-wider">{t.contactFormEmail}</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-zinc-100 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-accent outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary/60 uppercase tracking-wider">{t.contactFormService}</label>
                <div className="relative">
                  <select className="w-full bg-zinc-100 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-accent outline-none transition-all appearance-none cursor-pointer">
                    <option>{t.contactFormServicePlaceholder}</option>
                    <option>{t.service5Title.split(" (")[0]}</option>
                    <option>{t.service6Title.split(" (")[0]}</option>
                    <option>{t.service7Title.split(" (")[0]}</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-zinc-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary/60 uppercase tracking-wider">{t.contactFormMessage}</label>
                <textarea
                  rows={4}
                  placeholder={t.contactFormMessagePlaceholder}
                  className="w-full bg-zinc-100 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-accent outline-none transition-all"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent text-white font-bold py-5 rounded-2xl shadow-xl shadow-accent/20 flex items-center justify-center gap-3 text-lg cursor-pointer"
              >
                {t.contactFormSubmit} <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
