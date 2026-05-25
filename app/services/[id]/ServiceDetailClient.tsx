"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Ship,
  Truck,
  ShieldCheck,
  Globe,
  Plane,
  FileText,
  ArrowLeftRight,
  ArrowLeft,
  CheckCircle,
  FileSignature,
  Clock,
  Sparkles,
  Send,
  Package
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";
import { ServiceDetail } from "@/data/services";

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "truck": return <Truck className="w-8 h-8 text-accent" />;
    case "ship": return <Ship className="w-8 h-8 text-accent" />;
    case "plane": return <Plane className="w-8 h-8 text-accent" />;
    case "globe": return <Globe className="w-8 h-8 text-accent" />;
    case "file-text": return <FileText className="w-8 h-8 text-accent" />;
    case "shield-check": return <ShieldCheck className="w-8 h-8 text-accent" />;
    case "arrow-left-right": return <ArrowLeftRight className="w-8 h-8 text-accent" />;
    case "package": return <Package className="w-8 h-8 text-accent" />;
    default: return <Truck className="w-8 h-8 text-accent" />;
  }
};

interface ServiceDetailClientProps {
  service: ServiceDetail;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const { t, language } = useLanguage();
  const [successSubmit, setSuccessSubmit] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const currentContent = language === "th" ? service.fullContent.th : service.fullContent.en;

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    // Create a new inbox message compatible with the admin portal
    const newInquiry = {
      id: `msg-${Date.now()}`,
      name: name,
      email: email,
      service: language === "th" ? service.title.th : service.title.en,
      message: message || "สนใจขอข้อมูลบริการและการเสนอราคาเพิ่มเติมสำหรับบริการนี้",
      date: new Date().toLocaleDateString("th-TH", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }),
      status: "unread"
    };

    // Load and push to localStorage ist_inbox
    const savedInbox = localStorage.getItem("ist_inbox");
    let inboxList = [];
    if (savedInbox) {
      try {
        inboxList = JSON.parse(savedInbox);
      } catch (e) {
        console.error(e);
      }
    }
    inboxList.unshift(newInquiry);
    localStorage.setItem("ist_inbox", JSON.stringify(inboxList));

    setSuccessSubmit(true);
    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setSuccessSubmit(false);
    }, 5000);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />

      {/* Hero Banner Section */}
      <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden bg-primary">
        <Image
          src={service.image}
          alt={language === "th" ? service.title.th : service.title.en}
          fill
          priority
          className="object-cover opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-primary/80 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent font-bold text-xs uppercase tracking-widest animate-pulse">
            <Sparkles size={12} />
            <span>IST Logistics Excellence</span>
          </div>
          <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
            {language === "th" ? service.title.th : service.title.en}
          </h1>
          <p className="text-zinc-300 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {currentContent.subtitle}
          </p>
        </div>
      </section>

      {/* Content Container */}
      <section className="py-16 md:py-24 container mx-auto px-6 max-w-7xl">
        {/* Breadcrumb Back Navigation */}
        <div className="mb-12">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-primary hover:text-accent font-bold text-sm group transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1.5 transition-transform duration-300" />
            <span>
              {language === "th" ? "กลับสู่หน้าหลักบริการ" : "Back to Services"}
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* LEFT: Core Details (2 columns width) */}
          <div className="lg:col-span-2 space-y-12">

            {/* Header Description & Icon */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden flex flex-col md:flex-row gap-8 items-start">
              <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>

              <div className="bg-accent/10 p-5 rounded-3xl shrink-0 flex items-center justify-center shadow-inner">
                {getIconComponent(service.iconName)}
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary leading-snug">
                  {language === "th" ? "รายละเอียดความสำคัญของบริการ" : "Key Significance of Service"}
                </h2>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
                  {currentContent.description}
                </p>
              </div>
            </div>

            {/* Core Features Checkbox List */}
            <div className="space-y-6">
              <h3 className="text-2xl font-extrabold text-primary flex items-center gap-2.5">
                <FileSignature className="text-accent" size={24} />
                <span>
                  {language === "th" ? "คุณลักษณะและขอบเขตงานบริการหลัก" : "Key Service Features & Scope"}
                </span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentContent.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-white hover:bg-slate-50/50 p-6 rounded-3xl border border-slate-100 flex items-start gap-4 shadow-sm hover:shadow transition-all group"
                  >
                    <div className="bg-emerald-500/10 text-emerald-500 p-2 rounded-xl group-hover:scale-110 transition-transform">
                      <CheckCircle size={18} />
                    </div>
                    <p className="font-bold text-slate-700 text-sm md:text-base leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
            </div>
            </div>

            {/* Custom Sections (Alternating Rows) */}
            {currentContent.sections && currentContent.sections.length > 0 && (
              <div className="space-y-8 pt-4">
                {currentContent.sections.map((section, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group/section animate-fade-in"
                  >
                    <div className={`w-full md:w-1/2 space-y-4 ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                      <h4 className="text-xl md:text-2xl font-extrabold text-primary flex items-center gap-2.5">
                        <span className="w-3 h-3 bg-accent rounded-full border-2 border-white shadow-sm shrink-0"></span>
                        {section.title}
                      </h4>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                        {section.content}
                      </p>
                    </div>
                    <div className="w-full md:w-1/2">
                      <div className="relative w-full h-[220px] md:h-[260px] rounded-3xl overflow-hidden shadow-lg border border-slate-100">
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover/section:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary/10"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* RIGHT: Advantages & Inquiry Form (1 column width) */}
          <div className="space-y-8">

            {/* key Advantages Card (Slate-Blue) */}
            <div className="bg-[#1e293b] text-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-white/5 relative overflow-hidden space-y-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

              <h3 className="text-xl font-bold border-b border-white/10 pb-4 flex items-center gap-2 relative z-10 text-accent">
                <ShieldCheck size={22} />
                <span>
                  {language === "th" ? "ทำไมต้องเลือกใช้บริการกับเรา?" : "Key Strategic Benefits"}
                </span>
              </h3>

              <div className="space-y-6 relative z-10">
                {currentContent.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="bg-accent p-1.5 rounded-lg shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-zinc-200 text-xs md:text-sm font-light leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Quotation Request Form */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-slate-100 space-y-6">
              <div>
                <h3 className="text-lg font-extrabold text-primary flex items-center gap-2">
                  <Clock className="text-accent" size={18} />
                  <span>
                    {language === "th" ? "ขอใบเสนอราคาด่วน" : "Request a Rapid Quote"}
                  </span>
                </h3>
                <p className="text-slate-400 text-xs font-light mt-1.5">
                  {language === "th"
                    ? "กรอกข้อมูลของคุณเพื่อให้เจ้าหน้าที่ติดต่อกลับภายใน 24 ชม."
                    : "Submit details and our specialists will contact you within 24h."}
                </p>
              </div>

              {successSubmit ? (
                <div className="bg-emerald-50 text-emerald-800 p-6 rounded-2xl border border-emerald-100 flex flex-col items-center text-center space-y-3 animate-fade-in-up">
                  <CheckCircle size={36} className="text-emerald-500 animate-bounce" />
                  <p className="font-bold text-sm">
                    {language === "th" ? "ส่งคำเสนอราคาสำเร็จ!" : "Quote Requested Successfully!"}
                  </p>
                  <p className="text-xs text-emerald-600 font-light leading-relaxed">
                    {language === "th"
                      ? "ทีมงาน INTER SHIPPING ได้รับข้อความเรียบร้อยแล้วและจะติดต่อกลับโดยด่วนที่สุดครับ"
                      : "The IST logistics team has received your message and will respond shortly."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                      {language === "th" ? "ชื่อผู้ติดต่อ *" : "Your Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="เช่น คุณกฤษฎา"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-accent rounded-xl px-4 py-3 text-xs outline-none transition-colors text-slate-700"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                      {language === "th" ? "อีเมล/เบอร์โทรศัพท์ติดต่อ *" : "Email / Telephone *"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="yourname@email.com หรือ 081-xxxxxxx"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-accent rounded-xl px-4 py-3 text-xs outline-none transition-colors text-slate-700"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                      {language === "th" ? "รายละเอียดความสนใจเพิ่มเติม (ตัวเลือก)" : "Additional Requirements (Optional)"}
                    </label>
                    <textarea
                      rows={3}
                      placeholder="เช่น ต้องการราคาเหมาตู้ FCL จากจีนมาแหลมฉบัง..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-accent rounded-xl p-4 text-xs outline-none resize-none transition-colors text-slate-700"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3.5 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer text-xs"
                  >
                    <Send size={14} />
                    <span>
                      {language === "th" ? "ส่งคำขอดำเนินการเสนอราคา" : "Submit Quote Request"}
                    </span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Footer Copy */}
      <footer className="bg-primary text-white py-12 border-t border-white/5">
        <div className="container mx-auto px-6 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()}INTER SHIPPING & TRANSPORT CO., LTD. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
