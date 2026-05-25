"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  
  // Status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Send a request to our local PHP mail script which will run on HostAtom
      const response = await fetch("/send-mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          service: service || "ไม่ได้ระบุบริการ",
          message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        // Reset form fields
        setName("");
        setEmail("");
        setService("");
        setMessage("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="lg:w-3/5 p-12 lg:p-20 relative">
            <h3 className="text-3xl font-bold text-primary mb-10">{t.contactFormTitle}</h3>
            
            <AnimatePresence mode="wait">
              {submitStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-8 rounded-[2rem] flex flex-col items-center text-center space-y-4"
                >
                  <CheckCircle2 size={56} className="text-emerald-500 animate-bounce" />
                  <h4 className="text-2xl font-bold">ส่งข้อมูลการติดต่อสำเร็จ!</h4>
                  <p className="text-sm text-emerald-600 font-light leading-relaxed max-w-md">
                    ขอบคุณที่ติดต่อเรา ทีมงานอินเตอร์ชิปปิ้งได้รับข้อความเรียบร้อยแล้ว และเจ้าหน้าที่ผู้เชี่ยวชาญจะติดต่อกลับหาคุณผ่านอีเมลหรือเบอร์โทรศัพท์โดยเร็วที่สุด
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-xl text-sm transition-colors cursor-pointer"
                  >
                    ส่งข้อความอื่นเพิ่มเติม
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary/60 uppercase tracking-wider">{t.contactFormName} *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-zinc-100 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-accent outline-none transition-all text-slate-800 font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary/60 uppercase tracking-wider">{t.contactFormEmail} *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full bg-zinc-100 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-accent outline-none transition-all text-slate-800 font-medium"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary/60 uppercase tracking-wider">{t.contactFormService}</label>
                    <div className="relative">
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-zinc-100 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-accent outline-none transition-all appearance-none cursor-pointer text-slate-800 font-medium"
                      >
                        <option value="">{t.contactFormServicePlaceholder}</option>
                        <option value={t.service5Title.split(" (")[0]}>{t.service5Title.split(" (")[0]}</option>
                        <option value={t.service6Title.split(" (")[0]}>{t.service6Title.split(" (")[0]}</option>
                        <option value={t.service7Title.split(" (")[0]}>{t.service7Title.split(" (")[0]}</option>
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
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.contactFormMessagePlaceholder}
                      className="w-full bg-zinc-100 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-accent outline-none transition-all text-slate-800 font-medium"
                    ></textarea>
                  </div>

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border border-red-100 text-red-800 p-4 rounded-xl flex items-center gap-3 text-sm font-medium"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                      <span>เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง หรือติดต่อเราทางโทรศัพท์โดยตรง</span>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-accent text-white font-bold py-5 rounded-2xl shadow-xl shadow-accent/20 flex items-center justify-center gap-3 text-lg cursor-pointer disabled:bg-zinc-400 disabled:shadow-none disabled:cursor-not-allowed transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <span>กำลังส่งข้อความ...</span>
                        <Loader2 className="w-5 h-5 animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>{t.contactFormSubmit}</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
