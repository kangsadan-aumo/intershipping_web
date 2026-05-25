export interface ServiceSection {
  title: string;
  content: string;
  image: string;
}

export interface ServiceDetail {
  id: string;
  iconName: string;
  image: string;
  title: { th: string; en: string };
  shortDesc: { th: string; en: string };
  fullContent: {
    th: {
      subtitle: string;
      description: string;
      features: string[];
      benefits: string[];
      sections?: ServiceSection[];
    };
    en: {
      subtitle: string;
      description: string;
      features: string[];
      benefits: string[];
      sections?: ServiceSection[];
    };
  };
}

export const servicesData: ServiceDetail[] = [
  {
    id: "land-freight",
    iconName: "truck",
    image: "/pic1.png",
    title: {
      th: "การขนส่งและการกระจายสินค้า (Land Freight)",
      en: "Transportation & Distribution Services"
    },
    shortDesc: {
      th: "เรามีบริการขนส่งที่ครอบคลุมทั้งขาเข้าและขาออก โดยมุ่งเน้นการให้บริการที่ครบวงจรและตอบสนองความต้องการที่หลากหลายของลูกค้า",
      en: "Comprehensive inbound and outbound land transportation services, customized to meet diverse customer needs with real-time tracking."
    },
    fullContent: {
      th: {
        subtitle: "ปลอดภัย รวดเร็ว ครอบคลุมทุกความต้องการด้านการจัดส่งและกระจายสินค้า",
        description: "เรามีบริการขนส่งที่ครอบคลุมทั้งขาเข้าและขาออก โดยมุ่งเน้นการให้บริการที่ครบวงจรและตอบสนองความต้องการที่หลากหลายของลูกค้า การขนส่งสามารถเลือกได้หลายรูปแบบตามความเหมาะสม ตั้งแต่รถบรรทุกขนาดเล็ก 4 ล้อ, 6 ล้อ, 10 ล้อ ไปจนถึงรถบรรทุกตู้คอนเทนเนอร์ เพื่อรองรับการขนส่งสินค้าทุกประเภท ไม่ว่าจะเป็นสินค้าขนาดเล็กหรือขนาดใหญ่ ทีมงานมืออาชีพของเราจะดูแลการขนส่งตั้งแต่เริ่มต้นจนถึงปลายทาง เพื่อให้มั่นใจว่าสินค้าของคุณจะถูกจัดส่งตามกำหนดและอย่างมีประสิทธิภาพ",
        features: [
          "บริการขนส่งที่ครอบคลุมทั้งขาเข้าและขาออก (Inbound & Outbound)",
          "รถขนส่งหลากหลายรูปแบบ: รถบรรทุก 4 ล้อ, 6 ล้อ, 10 ล้อ และรถบรรทุกตู้คอนเทนเนอร์",
          "ทีมงานมืออาชีพดูแลการขนส่งตั้งแต่เริ่มต้นจนถึงปลายทางอย่างอบอุ่น",
          "การจัดการระบบกระจายสินค้าอย่างมีประสิทธิภาพและตรงเวลาสูงสุด"
        ],
        benefits: [
          "องค์กรทันเวลา - มุ่งเน้นการจัดส่งตรงเวลาในทุก ๆ เที่ยววิ่ง",
          "แนวทางปฏิบัติที่ดีที่สุดสำหรับงานที่มีคุณภาพ - รักษามาตรฐานการจัดส่งระดับมืออาชีพ",
          "การขับขี่อย่างปลอดภัย - มั่นใจในความปลอดภัยสูงสุดของสินค้าตลอดการเดินทาง"
        ],
        sections: [
          {
            title: "การติดตามและตรวจสอบด้วยระบบ GPS ตลอด 24 ชั่วโมง",
            content: "ทีมงานรถบรรทุกของเรามีการติดตามสถานะการขนส่งด้วยระบบ GPS ตลอด 24 ชั่วโมง ทำให้สามารถตรวจสอบตำแหน่งและสถานะของสินค้าได้แบบเรียลไทม์ ลูกค้าสามารถมั่นใจได้ว่าสินค้าจะถูกจัดส่งถึงสถานที่นัดหมายอย่างปลอดภัยและตรงเวลา การติดตามสินค้านี้เป็นการสร้างความเชื่อมั่นให้กับลูกค้าและช่วยลดความกังวลในกรณีเกิดเหตุการณ์ไม่คาดคิด ทีมงานของเรามีความพร้อมในการจัดการและแก้ไขปัญหาต่างๆ ที่อาจเกิดขึ้นระหว่างการขนส่ง เพื่อให้ลูกค้าสบายใจและได้รับบริการที่ดีที่สุด",
            image: "/pic2.png"
          }
        ]
      },
      en: {
        subtitle: "Safe, Fast, and Seamless Domestic Transportation & Distribution",
        description: "We offer comprehensive inbound and outbound transportation services, focusing on providing all-in-one solutions that satisfy diverse customer demands. Customers can choose from multiple transport configurations depending on suitability, ranging from small 4-wheel, 6-wheel, and 10-wheel trucks to full-sized container trailers to support all types of cargo, large or small. Our professional team will handle your logistics from start to finish, ensuring efficient and timely delivery.",
        features: [
          "Inbound and outbound transport coverage satisfying all logistical configurations",
          "Versatile fleet options: 4-wheel, 6-wheel, 10-wheel, and full container trailers",
          "End-to-end transport management supervised by industry specialists",
          "Highly efficient distribution management matching your precise retail schedule"
        ],
        benefits: [
          "Timely Organization - Dedicated to meeting delivery schedules for every run",
          "Best Practices for Quality Work - Serving with high professional industry standards",
          "Safe Driving - Rigorously trained drivers prioritizing maximum transit safety"
        ],
        sections: [
          {
            title: "24-Hour Real-Time GPS Tracking & Monitoring",
            content: "Furthermore, our professional trucking fleets are fully integrated with 24/7 active GPS tracking, allowing real-time status and cargo location monitoring. Customers can rest assured that their cargo will be delivered safely and punctually. This complete visibility minimizes anxiety, backed by our rapid response teams ready to resolve any unexpected transit occurrences, giving customers absolute peace of mind.",
            image: "/pic2.png"
          }
        ]
      }
    }
  },
  {
    id: "sea-freight",
    iconName: "ship",
    image: "/pic9.png",
    title: {
      th: "การจัดการขนส่งทางทะเล (Sea Freight)",
      en: "Sea Freight Management Services"
    },
    shortDesc: {
      th: "บริการขนส่งสินค้าทางทะเลอย่างครบวงจร ทั้งการนำเข้าและส่งออก ครอบคลุมเส้นทางค้าขายหลักทั่วโลกพร้อมการดูแลระดับมืออาชีพ",
      en: "Comprehensive sea freight management services for import and export cargo, covering all major routes and destinations worldwide."
    },
    fullContent: {
      th: {
        subtitle: "ด้วยประสบการณ์ด้านการจัดการขนส่งสินค้าที่พร้อมให้คุณได้มากกว่าบริการ",
        description: "ด้วยประสบการณ์อันยาวนานของการเป็นตัวแทนผู้ให้บริการด้านระบบการจัดการการส่งสินค้า (Logistics) อย่างครบวงจร ทั้งการขนส่งสินค้าระหว่างประเทศด้านนำเข้า และส่งออก ในทุกเส้นทาง ทุกจุดหมายปลายทางทั่วโลก ครอบคลุมทั้งโซนเอเชีย ยุโรป และตะวันออกกลาง ด้วยประสบการณ์ และความรอบรู้ในด้านการขนส่งอย่างคร่ำหวอด จึงสามารถให้คำปรึกษา และการแนะนำอย่างผู้ชำนาญการ",
        features: [
          "การจัดการขนส่งสินค้าระหว่างประเทศด้านนำเข้าและส่งออกอย่างครบวงจร",
          "ครอบคลุมเส้นทางและจุดหมายปลายทางหลักทั่วโลก รวมถึงเอเชีย ยุโรป และตะวันออกกลาง",
          "ทีมงานที่คร่ำหวอดและมีประสบการณ์อันยาวนานในการเดินเรือขนส่ง",
          "บริการให้คำปรึกษาและการแนะนำอย่างผู้ชำนาญการเฉพาะด้าน"
        ],
        benefits: [
          "การบริหารจัดการเส้นทางและระวางเรืออย่างมีประสิทธิภาพสูงสุด",
          "ความมั่นใจเต็มร้อยในการส่งมอบสินค้าถึงปลายทางทั่วโลกอย่างปลอดภัย",
          "บริการครบจบในที่เดียวตั้งแต่วางแผนจนถึงการเคลียร์สินค้า ณ ท่าเรือ"
        ],
        sections: [
          {
            title: "ตัวแทนผู้ให้บริการระบบจัดการโลจิสติกส์ทางทะเลแบบครบวงจร",
            content: "เราทำหน้าที่เป็นตัวแทนผู้ให้บริการด้านระบบการจัดการส่งสินค้า (Logistics) ที่พร้อมดูแลคุณในทุกทิศทาง ครอบคลุมทุกการค้าทางเรือระหว่างประเทศ ทั้งการจองตู้สินค้าแบบ FCL และ LCL การจัดการพิธีการท่าเรือแหลมฉบังและท่าเรือกรุงเทพฯ ตลอดจนเครือข่ายพันธมิตรสายการเดินเรือระดับโลก ทำให้สินค้าของลูกค้าได้รับการจัดสรรระวางเรือที่ดีที่สุด แม้ในช่วงฤดูกาลที่มีความต้องการขนส่งสูง (Peak Season)",
            image: "/pic9.png"
          }
        ]
      },
      en: {
        subtitle: "Experience and expertise in sea freight management that gives you more than just service",
        description: "With our long-standing experience as a provider of comprehensive logistics management systems, we handle international sea freight cargo for both imports and exports. We cover all routes and destinations worldwide, spanning Asia, Europe, and the Middle East. Through our deep expertise and veteran logistics knowledge, we provide highly professional advice and strategic recommendations.",
        features: [
          "End-to-end international sea freight cargo management for both imports and exports",
          "Global network covering all main routes including Asia, Europe, and the Middle East",
          "Highly seasoned team with extensive hands-on maritime shipping experience",
          "Professional advisory and consulting service by certified maritime specialists"
        ],
        benefits: [
          "Optimized vessel space allocation and highly efficient ocean routing planning",
          "Absolute peace of mind ensuring safe global cargo delivery to any destination",
          "One-stop integrated maritime solutions from initial cargo load to port clearance"
        ],
        sections: [
          {
            title: "Comprehensive Sea Logistics Partner",
            content: "We act as your dedicated logistics management partner, managing every detail of your ocean trade transactions. This includes FCL and LCL container booking, handling custom entries at major terminals like Laem Chabang and Bangkok Port, and leveraging global carrier alliances to secure the best space allocations for your business even during peak seasons.",
            image: "/pic9.png"
          }
        ]
      }
    }
  },
  {
    id: "air-freight",
    iconName: "plane",
    image: "/pic10.png",
    title: {
      th: "การจัดการขนส่งระหว่างประเทศทางอากาศ (Air Freight)",
      en: "International Air Freight Services"
    },
    shortDesc: {
      th: "บริการรับขนส่งสินค้าทางอากาศไปต่างประเทศทั่วโลก ด้วยประสบการณ์ยาวนานกว่า 10 ปี และบริการจัดส่งที่รวดเร็วตรงเวลา",
      en: "Professional international air cargo logistics representing over 10 years of reliable global shipping and terminal clearances."
    },
    fullContent: {
      th: {
        subtitle: "มุ่งมั่นและเจตนารมณ์ในการให้บริการขนส่งทางอากาศที่ดีที่สุด",
        description: "ทางบริษัทฯ ได้มีแผนพัฒนาการให้บริการรับขนส่งสินค้าทางอากาศไปต่างประเทศ ตั้งแต่เริ่มก่อตั้งบริษัทฯ โดยมีประสบการณ์ในการรับขนส่งสินค้าทางอากาศมากกว่า 10 ปี ไปยังปลายทางทั่วโลก นับเป็นการพิสูจน์ให้เห็นถึงความมุ่งมั่นและเจตนารมณ์ของประธานผู้ก่อตั้ง ในการให้บริการด้านทางอากาศ",
        features: [
          "บริการรับขนส่งสินค้าจากท่าอากาศยานหลักของประเทศไปยังปลายทางทั่วโลก ด้วยตารางเวลาที่แน่นอน",
          "ความชำนาญด้านการจัดส่งสินค้าทางอากาศที่ตอบสนองความต้องการทุกด้านของลูกค้า ทั้งในและต่างประเทศ",
          "บริการด้วยราคาที่เหมาะสม ทั้งด้านพิธีการศุลกากรและการประกันภัยสินค้า",
          "บริการขนส่งสินค้าต่อเนื่องจากท่าอากาศยานนานาชาติ ไปยังท่าอากาศยานในประเทศและทางรถบรรทุกอย่างปลอดภัยโดยมืออาชีพ"
        ],
        benefits: [
          "ประสบการณ์ทำงานมากกว่า 10 ปี มั่นใจได้ในมาตรฐานระดับสูง",
          "ความมุ่งมั่นและเจตนารมณ์ของประธานผู้ก่อตั้งในการส่งมอบงานระดับมืออาชีพ",
          "บริการขนส่งต่อเนื่องครอบคลุมทั้งในประเทศและขนส่งทางบกแบบต่อเนื่องไร้รอยต่อ"
        ],
        sections: [
          {
            title: "บริการรับขนส่งสินค้าทางอากาศและขนส่งต่อเนื่องแบบมืออาชีพ",
            content: "เรามีบริการขนส่งสินค้าต่อเนื่องจากท่าอากาศยานนานาชาติ ไปยังท่าอากาศยานต่างๆ ภายในประเทศ และต่อด้วยทางรถบรรทุก เพื่อส่งมอบสินค้าให้กับลูกค้าอย่างปลอดภัยโดยพนักงานมืออาชีพ ตลอดจนการทำพิธีการศุลกากรและประกันภัยสินค้าทางอากาศเพื่อให้คุณสบายใจในความคุ้มครองที่ดีที่สุด",
            image: "/pic10.png"
          }
        ]
      },
      en: {
        subtitle: "Dedication and vision in delivering superior international air cargo solutions",
        description: "Since our founding, we have continuously developed premium international air freight solutions. With over 10 years of professional experience shipping air cargo to global destinations, our success stands as a true testament to our founder's vision and absolute commitment to aviation logistics excellence.",
        features: [
          "Air cargo shipping from major national airports to global destinations with fixed schedules",
          "Deep specialized air logistics expertise meeting all domestic and international customer needs",
          "Highly competitive rates for both airport customs brokerage and transit cargo insurance",
          "Seamless multimodal transit from international airports to domestic hubs and secure trucking by professionals"
        ],
        benefits: [
          "Over 10 years of proven air freight expertise you can fully rely on",
          "Unwavering founder's vision dedicated to exceptional service standards",
          "Robust multimodal cargo transfers ensuring flawless and secure deliveries"
        ],
        sections: [
          {
            title: "Seamless Multimodal Air Logistics & Transit",
            content: "We provide integrated multimodal transportation forwarding from international cargo terminals to domestic airports and on-carriage via secure road trucking. Our professional teams oversee every regulatory stage, managing immediate airport customs clearances and transit insurance to ensure maximum safety and professional delivery.",
            image: "/pic10.png"
          }
        ]
      }
    }
  },
  {
    id: "customs-clearance",
    iconName: "file-text",
    image: "/pic4.png",
    title: {
      th: "บริการตัวแทนเดินพิธีการศุลกากร (Customs Clearance)",
      en: "Customs Clearance Services"
    },
    shortDesc: {
      th: "บริการพิธีการศุลกากรสำหรับการขนส่งทั้งนำเข้าและส่งออกเป็นส่วนหนึ่งของสาขาวิชาชีพของเรา เราสามารถจัดเตรียมเอกสารและขั้นตอนที่จำเป็นทุกประเภท",
      en: "Professional customs clearance for import & export cargo. We prepare all necessary documents and procedures required by customs authorities."
    },
    fullContent: {
      th: {
        subtitle: "ถูกต้อง แม่นยำ ดำเนินการรวดเร็ว หมดห่วงเรื่องเอกสารศุลกากร",
        description: "บริการพิธีการศุลกากรสำหรับการขนส่งทั้งนำเข้าและส่งออกเป็นส่วนหนึ่งของสาขาวิชาชีพของเรา เราสามารถจัดเตรียมเอกสารและขั้นตอนที่จำเป็นทุกประเภทตามที่หน่วยงานศุลกากรในประเทศไทยและประเทศอื่นๆ กำหนด ซึ่งรวมถึงการยื่นใบขนสินค้า การประมาณภาษีและภาษีนำเข้า และการขอใบอนุญาตที่จำเป็น",
        features: [
          "ตรวจสอบพิกัดศุลกากร (HS Code) และสิทธิพิเศษทางภาษี FTA (เช่น Form D, Form E, Form FTA)",
          "ยื่นใบขนสินค้าผ่านระบบศุลกากรอิเล็กทรอนิกส์ (e-Customs System)",
          "ดูแลขั้นตอนตรวจปล่อยหน้าด่านอย่างราบรื่นร่วมกับเจ้าหน้าที่ศุลกากรทุกท่าเรือและสนามบิน",
          "ให้คำปรึกษาเกี่ยวกับกฎระเบียบ กฎหมายศุลกากรล่าสุด และการขอใบอนุญาตเฉพาะ"
        ],
        benefits: [
          "มั่นใจได้ในความถูกต้อง ป้องกันปัญหาภาษีย้อนหลังและการกักกันสินค้าล่าช้า",
          "ประหยัดภาษีและต้นทุนนำเข้าด้วยการขอใช้สิทธิประโยชน์ทางศุลกากรอย่างคุ้มค่าสูงสุด",
          "ลดความตึงเครียดขององค์กรโดยมอบหน้าที่ดูแลให้กับทีมผู้เชี่ยวชาญที่มีประสบการณ์ยาวนาน"
        ],
        sections: [
          {
            title: "สำหรับพิธีการศุลกากรนำเข้า",
            content: "เราสามารถจัดเตรียมเอกสารที่จำเป็นทุกประเภทให้กับคุณได้ เช่น รายการนำเข้า ใบตราส่ง ใบกำกับสินค้า รายการบรรจุภัณฑ์ และใบอนุญาตที่จำเป็นจากทางการไทย เราสามารถปฏิบัติตามกฎระเบียบการนำเข้าที่ซับซ้อนและรับรองว่ากระบวนการพิธีการศุลกากรสำหรับสินค้าของคุณจะไม่ยุ่งยาก",
            image: "/pic5.png"
          },
          {
            title: "สำหรับพิธีการศุลกากรส่งออก",
            content: "เราสามารถจัดเตรียมเอกสารที่จำเป็นทั้งหมด รวมถึงรายการส่งออก ใบตราส่ง ใบกำกับสินค้า รายการบรรจุภัณฑ์ และใบอนุญาตส่งออกที่จำเป็นที่หน่วยงานปลายทางกำหนด นอกจากนี้เรายังสามารถจัดเตรียมเอกสารต่างๆ เช่น หนังสือรับรองแหล่งกำเนิดสินค้า เพื่อให้สอดคล้องกับข้อกำหนดเฉพาะด้านศุลกากรของแต่ละประเทศ",
            image: "/pic6.png"
          }
        ]
      },
      en: {
        subtitle: "Compliant, Accurate, and Seamless Customs Declaration Processes",
        description: "Import and export customs clearance services are an integral part of our professional expertise. We can prepare all types of necessary documentation and procedures required by customs authorities in Thailand and other countries. This includes submitting customs entries, estimating duties and import taxes, and applying for required permits.",
        features: [
          "Comprehensive HS Code verification and Free Trade Agreement (Form D, Form E, etc.) advice",
          "Smooth electronic customs declarations via the official e-Customs online portal",
          "On-site coordination with custom inspectors verifying your shipments",
          "Active legal counseling regarding local import restrictions and specialized licensing"
        ],
        benefits: [
          "100% compliance eliminating risks of cargo detentions, penalties, or retroactive audits",
          "Substantial duty savings via smart applications of dynamic global tariff concessions",
          "Peace of mind allowing your corporate teams to focus fully on scaling core operations"
        ],
        sections: [
          {
            title: "For Import Customs Clearance",
            content: "We can prepare all types of necessary documents for you, such as import declarations, bills of lading, commercial invoices, packing lists, and required permits from Thai authorities. We can navigate complex import regulations and ensure a hassle-free customs clearance process for your cargo.",
            image: "/pic5.png"
          },
          {
            title: "For Export Customs Clearance",
            content: "We can prepare all necessary documents, including export declarations, bills of lading, commercial invoices, packing lists, and required export permits specified by the destination authorities. We can also prepare various documents such as certificates of origin to comply with specific customs requirements of each country.",
            image: "/pic6.png"
          }
        ]
      }
    }
  },
  {
    id: "import-export",
    iconName: "arrow-left-right",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    title: {
      th: "บริการนำเข้า-ส่งออก (Import & Export)",
      en: "Import & Export Services"
    },
    shortDesc: {
      th: "บริการให้คำปรึกษา แนะนำ และวางแผนโครงสร้างภาษีโลจิสติกส์สำหรับการนำเข้าและส่งออกของธุรกิจคุณแบบครบวงจร",
      en: "End-to-end import-export consultations and tariff planning to optimize your trade supply chain."
    },
    fullContent: {
      th: {
        subtitle: "โซลูชันนำเข้า-ส่งออกครบวงจร ขยายตลาดการค้าของคุณอย่างไร้พรมแดน",
        description: "บริการนำเข้าและส่งออกของเรารองรับความต้องการของธุรกิจทุกขนาด ตั้งแต่ผู้เริ่มธุรกิจครั้งแรกจนถึงบริษัทมหาชนขนาดใหญ่ เราให้คำแนะนำการตลาดระหว่างประเทศ การวางแผนจัดซื้อสินค้าต่างประเทศ เอกสารการชำระเงินระหว่างประเทศ (L/C) และโลจิสติกส์ตั้งแต่ต้นทางจนถึงปลายทางทั่วโลก",
        features: [
          "ให้คำปรึกษาโครงสร้างสัญญาสินค้าระหว่างประเทศ (Incoterms 2020)",
          "จัดการและจัดหาเอกสารประกอบการค้ารวม เช่น Certificate of Origin, Phytosanitary, MSDS",
          "บริการขนส่งข้ามทวีปแบบ Multimodal Transport ผสมผสาน เรือ-รถ-เครื่องบิน เพื่อประหยัดเงิน",
          "บริการประสานงานตรวจสอบคุณภาพสินค้า ณ โรงงานต้นทางก่อนการจัดส่งสินค้ามายังไทย"
        ],
        benefits: [
          "ช่วยลดความเสี่ยงจากการทำสัญญาค้าระหว่างประเทศที่ผิดพลาด",
          "ประหยัดต้นทุนด้วยการเลือกรูปแบบการจัดส่งและการขนส่งแบบผสมผสานที่ดีที่สุด",
          "ดูแลตั้งแต่เอกสารการเงิน แบงก์ การขนส่ง จนถึงศุลกากร ครบจบในที่เดียวอย่างมืออาชีพ"
        ]
      },
      en: {
        subtitle: "Global Import-Export Solutions Driving Seamless Borderless Trades",
        description: "Our comprehensive import-export services cater to both growing ventures and multinational organizations. We help draft international purchase orders, secure dynamic banking payment documents (Letters of Credit), and implement seamless door-to-door multimodal global logistics networks.",
        features: [
          "Expert guidance on international cargo agreements and commercial contracts (Incoterms 2020)",
          "Preparation of complete trade certificates (Certificate of Origin, Phytosanitary, MSDS, etc.)",
          "Multimodal transport combinations (Sea-Land-Air) maximizing financial budget efficiencies",
          "Origin factory quality auditing coordinates checking your cargo before shipment to Thailand"
        ],
        benefits: [
          "Complete risk mitigation shielding your trade agreements from costly terminology errors",
          "Substantial logistics savings through custom-designed combined global routing",
          "Professional end-to-end support covering banking finance, shipping, and port operations"
        ]
      }
    }
  },
  {
    id: "warehousing",
    iconName: "package",
    image: "/pic7.png",
    title: {
      th: "บริการด้านคลังสินค้า (Warehouse & Storage)",
      en: "Warehouse & Storage Services"
    },
    shortDesc: {
      th: "บริการจัดเก็บสินค้าที่หลากหลาย พื้นที่โกดังสินค้าทั่วไปถึง 2,000 ตารางเมตร พร้อมระบบรักษาความปลอดภัย CCTV 24 ชม.",
      en: "Comprehensive storage solutions featuring up to 2,000 sqm of warehouse space, 24/7 management, and complete CCTV coverages."
    },
    fullContent: {
      th: {
        subtitle: "ปลอดภัย วางใจได้ ด้วยระบบจัดการคลังสินค้ามาตรฐานระดับสากล",
        description: "เรามีบริการจัดเก็บข้อมูลที่หลากหลาย พื้นที่โกดังสินค้าทั่วไปถึง 2,000 ตารางเมตร ทีมงานของเราพร้อมให้ความช่วยเหลือในการจัดการสินค้าตลอด 24 ชั่วโมง/วัน มีกล้องวงจรปิดเต็มรูปแบบสำหรับตรวจสอบพื้นที่จัดเก็บทั้งหมด มั่นใจได้ว่าสินค้าของคุณอยู่ในโซนปลอดภัยภายใต้การคุ้มครอง",
        features: [
          "พื้นที่คลังสินค้าขนาดใหญ่กว้างขวางถึง 2,000 ตารางเมตร",
          "ทีมงานมืออาชีพพร้อมช่วยเหลือดูแลจัดการสินค้าตลอด 24 ชั่วโมง",
          "ระบบกล้องวงจรปิด (CCTV) เต็มรูปแบบรอบพื้นที่คลังสินค้าทั้งหมด",
          "โซนจัดเก็บสินค้าปลอดภัยภายใต้การคุ้มครองดูแลอย่างใกล้ชิด"
        ],
        benefits: [
          "ระบบจัดการสินค้าคงคลังที่มีความแม่นยำและตรวจสอบสถานะได้ง่าย",
          "ลดอัตราความสูญเสียหรือชำรุดเสียหายของสินค้าให้อยู่ในระดับต่ำสุด",
          "ความยืดหยุ่นสูง ปรับเปลี่ยนพื้นที่จัดเก็บได้ตามความต้องการจริงของธุรกิจ"
        ],
        sections: [
          {
            title: "บริการด้านคลังสินค้าครอบคลุมกิจกรรมต่างๆ ได้แก่",
            content: "เพื่อรองรับห่วงโซ่อุปทานแบบครบวงจร เราให้บริการกิจกรรมคลังสินค้าที่หลากหลาย ได้แก่: 1. คลังสินค้าและการจัดเก็บ (Warehousing & Storage) 2. บริการรับและแพ็คสินค้า (Pick & Pack Services) 3. การบรรจุและการแกะตู้สินค้า (Stuffing & Unstuffing) 4. การเรียงลำดับสินค้า (Sorting / Sequencing) 5. การกำหนดราคาล่วงหน้า ติดป้ายกำกับใหม่ และติดแท็กสินค้า (Pre-pricing, Relabeling, Ticketing / Tagging) 6. การตรวจสอบคุณภาพสินค้า (Quality Inspection) 7. การจัดการสินค้าคงคลัง (Inventory Management) 8. การจัดการห่วงโซ่อุปทาน (Supply Chain Management) 9. การประกันภัยสินค้า (Cargo Insurance)",
            image: "/pic8.png"
          }
        ]
      },
      en: {
        subtitle: "Secure and Managed Professional Warehousing & Storage Solutions",
        description: "We offer a comprehensive range of storage solutions, featuring general warehouse space of up to 2,000 square meters. Our dedicated on-site team is available 24/7 to manage and coordinate your inventory, backed by full CCTV monitoring throughout the entire facility to guarantee your cargo remains in a highly secure zone under professional protections.",
        features: [
          "Spacious warehouse facilities spanning up to 2,000 square meters",
          "24/7 dedicated inventory handling and management team available",
          "Comprehensive full-facility CCTV surveillance and monitoring coverage",
          "Secure storage zones kept under professional protection and controls"
        ],
        benefits: [
          "Smart inventory management system providing accurate stock records",
          "Zero damage target through secure warehousing best practices",
          "Flexible storage space plans scaling according to your exact needs"
        ],
        sections: [
          {
            title: "Our Specialized Warehousing Activities Include:",
            content: "To support your supply chain end-to-end, we offer a diverse suite of warehousing services: 1. Warehousing & Storage, 2. Pick & Pack Services, 3. Container Stuffing & Unstuffing, 4. Cargo Sorting & Sequencing, 5. Pre-pricing, Relabeling, and Ticketing/Tagging, 6. Quality Inspections, 7. Inventory Management, 8. Supply Chain Management, and 9. Cargo & Goods Insurance.",
            image: "/pic8.png"
          }
        ]
      }
    }
  },
  {
    id: "inbound-express",
    iconName: "plane",
    image: "/pic11.png",
    title: {
      th: "การขนส่งสินค้าด่วนทางอากาศขาเข้า (Inbound Air Express)",
      en: "Inbound Air Express Cargo Services"
    },
    shortDesc: {
      th: "บริการนำเข้าสินค้าด่วนทางอากาศจากประเทศจีนผ่านพิธีการศุลกากรด่วนพิเศษ รองรับปริมาณงานมากกว่า 300,000 ชิ้นต่อเดือน รวดเร็ว ตรงเวลา",
      en: "High-efficiency inbound air express cargo import from China under custom express clearance, handling over 300,000 pcs monthly."
    },
    fullContent: {
      th: {
        subtitle: "ร่วมมือกับผู้ให้บริการขนส่งชั้นนำจากประเทศจีน ส่งมอบสินค้าด่วนทันใจและตรงเวลา",
        description: "บริษัทฯ ร่วมมือกับผู้ให้บริการขนส่งสินค้าจากประเทศจีน ในการดำเนินการจัดส่งสินค้าเข้าประเทศผ่านการเดินพิธีการศุลกากร Express โดยมีปริมาณงานมากกว่า 300,000 ชิ้นต่อเดือน และนำส่งให้กับลูกค้าปลายทางได้อย่างรวดเร็วและตรงเวลา",
        features: [
          "ร่วมมือกับพันธมิตรผู้ให้บริการขนส่งสินค้าประสิทธิภาพสูงจากประเทศจีน",
          "สนับสนุนการนำเข้าสินค้าผ่านกระบวนการศุลกากรประเภท Express รวดเร็วที่สุด",
          "รองรับปริมาณการจัดส่งสินค้าขนาดใหญ่มากกว่า 300,000 ชิ้นต่อเดือน",
          "นำส่งสินค้าให้ถึงมือลูกค้าปลายทางได้อย่างรวดเร็ว ปลอดภัย และตรงเวลา"
        ],
        benefits: [
          "ลดระยะเวลาในการตรวจสอบและดำเนินพิธีการที่ด่านศุลกากรอย่างมีนัยสำคัญ",
          "การไหลเวียนของสินค้าไหลเข้าประเทศได้อย่างต่อเนื่องและไม่มีสะดุด",
          "สร้างความพึงพอใจและเชื่อมั่นให้กับลูกค้าปลายทางด้วยความแม่นยำสูงสุด"
        ],
        sections: [
          {
            title: "ประสิทธิภาพการดำเนินงานศุลกากรประเภท Express",
            content: "บริษัทฯ ได้ทำการร่วมมือกับผู้ให้บริการขนส่งสินค้าจากประเทศจีน เพื่อสนับสนุนการนำเข้าสินค้าผ่านกระบวนการศุลกากรประเภท Express ที่มีประสิทธิภาพสูง โดยการดำเนินงานในลักษณะนี้ช่วยลดระยะเวลาในการตรวจสอบและดำเนินพิธีการต่างๆ ที่ด่านศุลกากร ทำให้สามารถเร่งกระบวนการขนส่งสินค้าให้รวดเร็วยิ่งขึ้น ส่งผลให้สินค้าสามารถเข้าประเทศได้อย่างต่อเนื่องและไม่ล่าช้า การดำเนินงานนี้รองรับปริมาณงานมากกว่า 300,000 ชิ้นต่อเดือน ซึ่งถือว่าเป็นปริมาณการขนส่งที่มีขนาดใหญ่และต้องการการจัดการที่มีประสิทธิภาพสูง",
            image: "/pic11.png"
          },
          {
            title: "การส่งมอบสินค้าถึงปลายทางด้วยความแม่นยำและราบรื่น",
            content: "นอกจากความสามารถในการจัดการปริมาณสินค้าที่มากแล้ว ความร่วมมือดังกล่าวยังช่วยให้บริษัทฯ สามารถจัดส่งสินค้าถึงมือลูกค้าปลายทางได้อย่างรวดเร็วและตรงเวลา สร้างความพึงพอใจให้กับลูกค้า และเพิ่มความเชื่อมั่นในบริการ โดยความแม่นยำในการจัดส่งและการประสานงานระหว่างผู้ให้บริการขนส่งจากจีนกับบริษัทฯ นั้น เป็นปัจจัยสำคัญที่ช่วยให้การขนส่งเป็นไปอย่างราบรื่น ตรงตามกำหนดเวลา",
            image: "/pic12.png"
          }
        ]
      },
      en: {
        subtitle: "Strategic Partnership with Premium China Cargo Operators Delivering Ultimate Speed",
        description: "In strategic alliance with leading cargo providers in China, we manage high-performance inbound air express logistics under accelerated Express customs clearances. Handling over 300,000 packages monthly, we ensure rapid, seamless, and punctual deliveries directly to final consignees.",
        features: [
          "Strong strategic alliances with high-efficiency logistics providers in China",
          "Accelerated customs clearance under specialized Express import customs channels",
          "High-capacity operations successfully processing over 300,000 pieces per month",
          "Reliable and extremely punctual final-mile deliveries straight to cargo owners"
        ],
        benefits: [
          "Significantly reduced examination and clearance wait-times at custom checkpoints",
          "Seamless, continuous inbound goods flows eliminating costly port delays",
          "Enhanced customer satisfaction and brand trust driven by high delivery precision"
        ],
        sections: [
          {
            title: "High-Efficiency Express Customs Clearance Processes",
            content: "We partner closely with leading China shipping providers to enable seamless imports via top-tier Express custom channels. This operational synergy minimizes inspection wait times and accelerates customs paperwork, driving faster transit rates. Consequently, cargo enters the country continuously and without bottlenecks, sustaining massive volumes exceeding 300,000 pieces monthly with superior reliability.",
            image: "/pic11.png"
          },
          {
            title: "Seamless and Precise Last-Mile Deliveries",
            content: "Beyond managing massive cargo volumes, our partnership secures punctual and swift last-mile deliveries straight to our customers' doorsteps. This precision bolsters client satisfaction and instills absolute service trust. Flawless coordinates and precise scheduling between China exporters and our domestic hubs ensure safe, smooth, and timely operations.",
            image: "/pic12.png"
          }
        ]
      }
    }
  }
];
