import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Intershipping & Transport | อินเตอร์ชิปปิ้ง แอนด์ ทรานสปอร์ต",
  description: "บริการขนส่งสินค้าและโลจิสติกส์ครบวงจร ทั้งทางบกและทางน้ำ",
  icons: {
    icon: "/LOGO-IST.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

