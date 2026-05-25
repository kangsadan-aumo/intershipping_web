"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "th" | "en";

export const translations = {
  th: {
    // Navbar
    navHome: "หน้าแรก",
    navAbout: "เกี่ยวกับเรา",
    navServices: "บริการของเรา",
    navContact: "ติดต่อเรา",
    navQuote: "เสนอราคา",

    // Hero Section
    heroTitle: "INTER SHIPPING & TRANSPORT CO., LTD.",
    heroSub: "ผู้ให้บริการด้านโลจิสติกส์และพิธีการศุลกากรแบบครบวงจร",
    heroDesc: "ให้บริการด้านการนำเข้า-ส่งออก และการขนส่งสินค้าทางบก ทางทะเล และทางอากาศ ด้วยมาตรฐานการบริการระดับมืออาชีพ รวดเร็ว ปลอดภัย และเชื่อถือได้",

    // About Section (Home Page)
    aboutTitle: "ABOUT US",
    aboutHeading: "เกี่ยวกับเรา",
    aboutDesc1: "เราคือผู้ให้บริการด้านโลจิสติกส์และซัพพลายเชน (Logistics and Supply Chain) ที่มีประสบการณ์นานกว่า 20 ปี โดยมุ่งเน้นให้บริการโลจีสติกส์ที่ครบวงจร มีทีมงานมืออาชีพที่มีความเชี่ยวชาญในทุกๆ ด้านของการขนส่งสินค้าระหว่างประเทศ การเดินพิธีการทางศุลกากรนำเข้าและส่งออกสินค้า และการจัดการทางด้านคลังสินค้า รวมถึงการส่งมอบสินค้าและบริการต่างๆ ให้กับลูกค้าแบบครบวงจรและมีประสิทธิภาพ",
    aboutDesc2: "ด้วยบุคลากรที่มีประสบการณ์และการบริหารจัดการการดำเนินงานที่มีประสิทธิภาพ เรามุ่งมั่นที่จะส่งมอบบริการที่น่าเชื่อถือ รวดเร็ว และมีคุณภาพสูง เพื่อสนับสนุนการดำเนินธุรกิจของลูกค้าในกลุ่มอุตสาหกรรมต่าง ๆ",
    visionTitle: "วิสัยทัศน์ (VISION)",
    visionDesc: "บริษัทฯเรากำลังนำพาประเทศไทยไปสู่งานบริการ และการขนส่งในรูปแบบใหม่ และครอบคลุม ไม่ว่าจะเป็นทางอากาศ ทางเรือ หรือทางรถ โดยอนาคตที่กำลังจะก้าวไปสู่ โรงเก็บสินค้าขนาดใหญ่ที่ครอบคลุมพื้นที่อุตสาหกรรม พาหนะขนาดใหญ่ทุกรูปแบบรวมถึงเครือข่ายที่ครอบคลุมทุกมุมทั่วโลก",

    // Services
    servicesTitle: "OUR SERVICES",
    servicesHeading: "บริการของเรา",
    readMore: "อ่านเพิ่มเติม",

    service1Title: "บริการดำเนินพิธีการศุลกากร (Customs Clearance Services)",
    service1Desc: "ให้บริการดำเนินพิธีการศุลกากรสำหรับสินค้านำเข้าและส่งออก พร้อมดูแลเอกสารและประสานงานกับหน่วยงานที่เกี่ยวข้องอย่างครบวงจร",
    service1Bullet1: "บริการพิธีการนำเข้าและส่งออก",
    service1Bullet2: "ตรวจสอบและจัดเตรียมเอกสารศุลกากร",
    service1Bullet3: "ให้คำปรึกษาด้านภาษีและข้อกำหนดต่าง ๆ",
    service1Bullet4: "บริการประสานงานด้านขนส่งสินค้า",

    service2Title: "ตัวแทนรับเดินพิธีการทางศุลกากร (Customs Brokerage Services)",
    service2Desc: "บริการตัวแทนรับเดินพิธีการทางศุลกากรโดยทีมงานมืออาชีพ เพื่อให้ทุกขั้นตอนดำเนินไปอย่างถูกต้องและมีประสิทธิภาพ",

    service3Title: "บริการตัวแทนนำเข้าและส่งออกสินค้า (Import & Export Services)",
    service3Desc: "ให้บริการด้านนำเข้าและส่งออกสินค้าแบบครบวงจร พร้อมดูแลการประสานงาน เอกสาร และกระบวนการขนส่งทั้งหมด",

    service4Title: "บริการขนส่งสินค้าภายในประเทศและระหว่างประเทศ (Domestic & International Transportation)",
    service4Desc: "บริการขนส่งสินค้าทั้งภายในประเทศและระหว่างประเทศ ด้วยระบบการจัดส่งที่มีประสิทธิภาพ ปลอดภัย และตรงต่อเวลา",

    service5Title: "บริการขนส่งทางบก (Land Freight Services)",
    service5Desc: "บริการขนส่งสินค้าทางบก รองรับสินค้าหลากหลายประเภท ครอบคลุมเส้นทางทั่วประเทศ",

    service6Title: "บริการขนส่งทางทะเล (Sea Freight Services)",
    service6Desc: "บริการขนส่งทางทะเลระหว่างประเทศ รองรับทั้งแบบเต็มตู้คอนเทนเนอร์และไม่เต็มตู้ พร้อมเครือข่ายขนส่งทั่วโลก",

    service7Title: "บริการขนส่งทางอากาศ (Air Freight Services)",
    service7Desc: "บริการขนส่งทางอากาศที่รวดเร็วและปลอดภัย เหมาะสำหรับสินค้าที่ต้องการความเร่งด่วนและตรงต่อเวลา",

    // Why Choose Us
    whyTitle: "WHY CHOOSE US",
    whyHeading: "ทำไมต้องเลือกเรา",
    whySub: "พันธมิตรด้านโลจิสติกส์ที่คุณไว้วางใจได้ (Professional Logistics Partner You Can Trust)",
    whyBenefit1: "ทีมงานมืออาชีพด้านโลจิสติกส์และศุลกากร",
    whyBenefit2: "บริการครบวงจรในที่เดียว (One Stop Service)",
    whyBenefit3: "ดำเนินงานรวดเร็วและเชื่อถือได้",
    whyBenefit4: "ประสานงานและดูแลลูกค้าอย่างใกล้ชิด",
    whyBenefit5: "ติดตามสถานะสินค้าอย่างต่อเนื่อง",
    whyBenefit6: "มุ่งมั่นด้านคุณภาพและความพึงพอใจของลูกค้า",

    // Employee Activities
    activitiesTitle: "STAFF ACTIVITIES",
    activitiesHeading: "กิจกรรมพนักงาน",
    activitiesSub: "ภาพความประทับใจและกิจกรรมร่วมกันของครอบครัว IST ที่มุ่งมั่นและเติบโตไปด้วยกัน",
    activitiesCount: "{count} รูปภาพ",
    activitiesViewAlbum: "ดูรูปภาพกิจกรรม",
    activitiesClose: "ปิดหน้าต่าง",
    activitiesAlbum1Title: "กิจกรรมทีมบิลดิ้งและการสัมมนาประจำปี",
    activitiesAlbum1Desc: "การสัมมนาพัฒนาศักยภาพทีมงานและกิจกรรมทีมเวิร์ก เพื่อสร้างความสามัคคีและเพิ่มประสิทธิภาพในการทำงานร่วมกันเพื่อลูกค้าของเรา",
    activitiesAlbum2Title: "กิจกรรมเพื่อสังคมและสิ่งแวดล้อม (CSR)",
    activitiesAlbum2Desc: "กิจกรรมปันน้ำใจคืนสู่สังคมและการอนุรักษ์สิ่งแวดล้อมของทีมงาน IST เพื่อส่งเสริมการเติบโตอย่างยั่งยืน",
    activitiesAlbum3Title: "งานเลี้ยงสังสรรค์และท่องเที่ยวประจำปี",
    activitiesAlbum3Desc: "ทริปท่องเที่ยวพักผ่อนประจำปีและงานเลี้ยงสังสรรค์ส่งท้ายปีเก่าต้อนรับปีใหม่ เพื่อตอบแทนความทุ่มเทของทุกคนในครอบครัว IST",

    // Contact
    contactTitle: "CONTACT US",
    contactHeading: "ติดต่อเรา",
    contactDesc: "หากคุณกำลังมองหาพันธมิตรด้านโลจิสติกส์สำหรับธุรกิจนำเข้า-ส่งออก ทีมงานของเราพร้อมให้บริการและให้คำปรึกษาอย่างมืออาชีพ",
    contactPhone: "โทรศัพท์ (Tel)",
    contactEmail: "อีเมล (Email)",
    contactAddressTitle: "ที่ตั้งสำนักงาน (Address)",
    contactAddressLine1: "บริษัท อินเตอร์ ชิปปิ้ง แอนด์ ทรานสปอร์ต จำกัด",
    contactAddressLine2: "68/28 หมู่ที่ 5 ตำบลราชาเทวะ อำเภอบางพลี จ.สมุทรปราการ 10540",

    // Contact Form
    contactFormTitle: "ส่งข้อความถึงเรา",
    contactFormName: "ชื่อ-นามสกุล",
    contactFormEmail: "อีเมล",
    contactFormService: "บริการที่สนใจ",
    contactFormServicePlaceholder: "เลือกบริการ...",
    contactFormMessage: "ข้อความ",
    contactFormMessagePlaceholder: "รายละเอียดความต้องการของคุณ...",
    contactFormSubmit: "ส่งข้อมูล",

    // Footer
    footerDesc: "ผู้ให้บริการด้านโลจิสติกส์และพิธีการศุลกากรแบบครบวงจร มั่นใจในคุณภาพและการบริการระดับมืออาชีพ",
    footerServicesTitle: "บริการของเรา",
    footerLinksTitle: "ลิงก์ที่เป็นประโยชน์",
    footerLinkAbout: "เกี่ยวกับเรา",
    footerLinkCareers: "ร่วมงานกับเรา",
    footerLinkNews: "ข่าวสาร/บทความ",
    footerLinkPrivacy: "นโยบายความเป็นส่วนตัว",
    footerNewsletterTitle: "จดหมายข่าว",
    footerNewsletterDesc: "สมัครเพื่อรับข่าวสารและโปรโมชั่นพิเศษจากเรา",
    footerNewsletterPlaceholder: "อีเมลของคุณ",
    footerNewsletterSubmit: "ติดตาม",
  },
  en: {
    // Navbar
    navHome: "Home",
    navAbout: "About Us",
    navServices: "Our Services",
    navContact: "Contact Us",
    navQuote: "Get a Quote",

    // Hero Section
    heroTitle: "INTER SHIPPING & TRANSPORT CO., LTD.",
    heroSub: "Complete Logistics & Customs Clearance Solutions",
    heroDesc: "Providing professional import-export services and transportation solutions by land, sea, and air with reliability, efficiency, and international standards.",

    // About Section (Home Page)
    aboutTitle: "ABOUT US",
    aboutHeading: "About Us",
    aboutDesc1: "INTER SHIPPING & TRANSPORT CO., LTD. is a professional logistics and customs clearance service provider specializing in domestic and international transportation, import-export operations, and integrated logistics solutions.",
    aboutDesc2: "With experienced personnel and efficient operational management, we are committed to delivering reliable, fast, and high-quality services that support our clients’ business operations across various industries.",
    visionTitle: "VISION",
    visionDesc: "To become a trusted logistics and customs clearance partner delivering professional services with international standards.",

    // Services
    servicesTitle: "OUR SERVICES",
    servicesHeading: "Our Services",
    readMore: "Read More",

    service1Title: "Customs Clearance Services",
    service1Desc: "Professional customs clearance services for import and export shipments with complete documentation support and coordination with related authorities.",
    service1Bullet1: "Import & Export Customs Clearance",
    service1Bullet2: "Customs Documentation Support",
    service1Bullet3: "Duty & Regulation Consultation",
    service1Bullet4: "Cargo Coordination Services",

    service2Title: "Customs Brokerage Services",
    service2Desc: "Licensed customs brokerage services managed by experienced professionals to ensure accurate and smooth customs procedures.",

    service3Title: "Import & Export Services",
    service3Desc: "Providing complete import-export solutions including shipping coordination, documentation handling, and logistics management.",

    service4Title: "Domestic & International Transportation",
    service4Desc: "Reliable transportation services covering domestic distribution and international freight forwarding with flexible logistics solutions.",

    service5Title: "Land Freight Services",
    service5Desc: "Efficient trucking and inland transportation services for various types of cargo across nationwide routes.",

    service6Title: "Sea Freight Services",
    service6Desc: "International sea freight services for both FCL and LCL shipments with global shipping network support.",

    service7Title: "Air Freight Services",
    service7Desc: "Fast and reliable air freight services designed for urgent and time-sensitive shipments.",

    // Why Choose Us
    whyTitle: "WHY CHOOSE US",
    whyHeading: "Why Choose Us",
    whySub: "Professional Logistics Partner You Can Trust",
    whyBenefit1: "Experienced logistics and customs specialists",
    whyBenefit2: "One Stop Service solutions",
    whyBenefit3: "Fast and reliable operations",
    whyBenefit4: "Professional coordination and customer support",
    whyBenefit5: "Real-time shipment monitoring",
    whyBenefit6: "Commitment to service quality and customer satisfaction",

    // Employee Activities
    activitiesTitle: "STAFF ACTIVITIES",
    activitiesHeading: "Staff Activities",
    activitiesSub: "Memorable moments and collaborative milestones of the IST family growing together.",
    activitiesCount: "{count} Photos",
    activitiesViewAlbum: "View Gallery",
    activitiesClose: "Close",
    activitiesAlbum1Title: "Annual Team Building & Workshop",
    activitiesAlbum1Desc: "Professional development seminars and team-building exercises designed to strengthen synergy and maximize workplace efficiency.",
    activitiesAlbum2Title: "Corporate Social Responsibility (CSR)",
    activitiesAlbum2Desc: "Charitable and environmental activities conducted by the IST team to promote sustainable community development.",
    activitiesAlbum3Title: "Annual Outing & Celebration Party",
    activitiesAlbum3Desc: "A memorable year-end outing and celebration party organized to honor the hard work and dedication of the IST team.",

    // Contact
    contactTitle: "CONTACT US",
    contactHeading: "Contact Us",
    contactDesc: "If you are looking for a reliable logistics partner for your import-export business, our professional team is ready to support you.",
    contactPhone: "Tel",
    contactEmail: "Email",
    contactAddressTitle: "Address",
    contactAddressLine1: "INTER SHIPPING & TRANSPORT CO., LTD.",
    contactAddressLine2: "68/28 Moo 5, Racha Thewa, Bang Phli, Samut Prakan 10540",

    // Contact Form
    contactFormTitle: "Send Us a Message",
    contactFormName: "Full Name",
    contactFormEmail: "Email Address",
    contactFormService: "Interested Service",
    contactFormServicePlaceholder: "Select service...",
    contactFormMessage: "Message",
    contactFormMessagePlaceholder: "Details of your requirements...",
    contactFormSubmit: "Send Message",

    // Footer
    footerDesc: "Comprehensive logistics & customs clearance solution provider. Trust in our quality and professional service.",
    footerServicesTitle: "Our Services",
    footerLinksTitle: "Useful Links",
    footerLinkAbout: "About Us",
    footerLinkCareers: "Careers",
    footerLinkNews: "News & Articles",
    footerLinkPrivacy: "Privacy Policy",
    footerNewsletterTitle: "Newsletter",
    footerNewsletterDesc: "Subscribe to receive our latest news and special promotions.",
    footerNewsletterPlaceholder: "Your email address",
    footerNewsletterSubmit: "Subscribe",
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.th;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("th");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load preference from localStorage
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang === "th" || savedLang === "en") {
      setLanguageState(savedLang);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
