"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Ship,
  Truck,
  ShieldCheck,
  Globe,
  Plane,
  FileText,
  ArrowLeftRight,
  ArrowRight,
  Sparkles,
  Package
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";
import { servicesData } from "@/data/services";

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "truck": return <Truck className="w-6 h-6 text-accent" />;
    case "ship": return <Ship className="w-6 h-6 text-accent" />;
    case "plane": return <Plane className="w-6 h-6 text-accent" />;
    case "globe": return <Globe className="w-6 h-6 text-accent" />;
    case "file-text": return <FileText className="w-6 h-6 text-accent" />;
    case "shield-check": return <ShieldCheck className="w-6 h-6 text-accent" />;
    case "arrow-left-right": return <ArrowLeftRight className="w-6 h-6 text-accent" />;
    case "package": return <Package className="w-6 h-6 text-accent" />;
    default: return <Truck className="w-6 h-6 text-accent" />;
  }
};

export default function ServicesDirectoryPage() {
  const { t, language } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />

      {/* Hero Header */}
      <section className="relative h-[300px] w-full flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/90 via-slate-900 to-black"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent font-bold text-xs uppercase tracking-widest">
            <Sparkles size={10} />
            <span>IST Logistics & Freight Forwarding</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
            {language === "th" ? "บริการโลจิสติกส์ทั้งหมดของเรา" : "Our Global Logistics Services"}
          </h1>
          <p className="text-zinc-400 text-xs md:text-base max-w-xl mx-auto font-light">
            {language === "th"
              ? "ผู้ให้บริการด้านการขนส่งสินค้าและดำเนินพิธีการศุลกากรอย่างเป็นระบบ ครบวงจร ได้มาตรฐานสากล"
              : "Comprehensive domestic and international freight forwarding solutions driven by excellence."}
          </p>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="py-16 md:py-24 container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-xl border border-slate-100 flex flex-col justify-between transition-all duration-300 group"
            >
              {/* Image Header */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={language === "th" ? service.title.th : service.title.en}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10"></div>
                <div className="absolute top-6 left-6 bg-white p-3 rounded-2xl shadow-lg flex items-center justify-center">
                  {getIconComponent(service.iconName)}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="font-extrabold text-lg md:text-xl text-primary leading-snug group-hover:text-accent transition-colors">
                    {language === "th" ? service.title.th : service.title.en}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-light line-clamp-3">
                    {language === "th" ? service.shortDesc.th : service.shortDesc.en}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-50">
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-accent font-bold text-sm group/link transition-colors"
                  >
                    <span>
                      {language === "th" ? "อ่านรายละเอียดเพิ่มเติม" : "View Service Details"}
                    </span>
                    <ArrowRight size={16} className="group-hover/link:translate-x-1.5 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Copy */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-6 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()}INTER SHIPPING & TRANSPORT CO., LTD. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
