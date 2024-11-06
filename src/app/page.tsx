"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, Globe } from "lucide-react";
import FeaturedAnnouncement from "@/components/FeaturedAnnouncement";

// Utility function to replace Turkish characters with English equivalents
const replaceTurkishChars = (text: string) => {
  const map: { [key: string]: string } = {
    ç: "c",
    Ç: "C",
    ğ: "g",
    Ğ: "G",
    ı: "i",
    İ: "I",
    ö: "o",
    Ö: "O",
    ş: "s",
    Ş: "S",
    ü: "u",
    Ü: "U",
  };
  return text.replace(/[çğışüöÇĞİŞÜÖ]/g, (char) => map[char] || char);
};

export default function Component() {
  const [language, setLanguage] = useState<"en" | "tr">("en");

  const categories = {
    en: [
      "News",
      "Cafes",
      "Restaurants",
      "PP Foods",
      "Dormitories",
      "Health",
      "Fitness",
      "Events",
      "Clubs",
      "Entertainment",
      "Faculties",
      "Scholarships",
      "Transportation",
      "Private Classes",
      "For Sale",
      "Communities",
      "I am New",
      "Stationery",
      "Discounts",
      "Markets",
      "Stores",
      "Guides",
    ],
    tr: [
      "Haberler",
      "Kafeler",
      "Restoranlar",
      "FP Yemekler",
      "Yurtlar",
      "Sağlık",
      "Fitness",
      "Etkinlikler",
      "Kulüpler",
      "Eğlence",
      "Fakülteler",
      "Burslar",
      "Ulaşım",
      "Özel Dersler",
      "Satılık",
      "Topluluklar",
      "Yeni Geldim",
      "Kırtasiye",
      "Indirimler",
      "Marketler",
      "Mağazalar",
      "Rehberler",
    ],
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "tr" : "en"));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link
            href="/"
            className="text-xl font-bold text-gray-800 hover:underline"
          >
            emu.guide
          </Link>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
              aria-label={
                language === "en" ? "Switch to Turkish" : "İngilizce'ye geç"
              }
            >
              <Globe className="h-6 w-6" />
              <span>{language === "en" ? "TR" : "EN"}</span>
            </button>
            <button className="md:hidden sm:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Featured Announcement */}
      <FeaturedAnnouncement
        show={true}
        language={language}
        link="https://www.instagram.com/dauhub"
        announcementEN="<p>Check out <strong>DauHub</strong>: the top Instagram humor page at EMU</p>"
        announcementTR="<p><strong>DauHub'ı</strong> keşfedin: Daü'deki en iyi Instagram mizah sayfası</p>"
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Welcome Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-50">
          <div className="container mx-auto max-w-screen-lg px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  {language === "en"
                    ? "Welcome to emu.guide"
                    : "emu.guide'a Hoş Geldiniz"}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {language === "en"
                    ? "Your comprehensive guide to Eastern Mediterranean University"
                    : "Doğu Akdeniz Üniversitesi için kapsamlı rehberiniz"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto max-w-screen-lg px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-4">
              {language === "en" ? "Categories" : "Kategoriler"}
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {categories[language].map((category, index) => (
                <Link
                  key={index}
                  className="p-4 text-center rounded-lg bg-white shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
                  href={`/${replaceTurkishChars(
                    category.toLowerCase().replace(/\s+/g, "-")
                  )}`}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t py-4 mt-8">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p className="text-sm text-gray-500">
            © 2024 emu.guide. All rights reserved.
          </p>
          <nav className="flex space-x-4 text-sm">
            <Link
              href="https://www.emu.edu.tr/tr"
              className="text-gray-600 hover:text-blue-600"
            >
              {language === "en" ? "Official Website" : "Resmi Web Sitesi"}
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">
              {language === "en" ? "Partner With Us" : "Bizimle Çalışın"}
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
