'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'fa' | 'en';
export type Direction = 'rtl' | 'ltr';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fa: {
    // Brand & General
    'brand.name': 'آکادمی هوش مصنوعی آراد',
    'brand.tagline': 'مرکز تخصصی آموزش و نوآوری هوش مصنوعی قزوین',
    'brand.short': 'آراد AI',

    // Navigation
    'nav.home': 'صفحه اصلی',
    'nav.courses': 'دوره‌ها',
    'nav.about': 'درباره ما',
    'nav.contact': 'تماس با ما',
    'nav.portal': 'پورتال دانشجویان',
    'nav.consultation': 'مشاوره رایگان',

    // Footer
    'footer.description': 'پیشرو در آموزش‌های تخصصی و کاربردی هوش مصنوعی، یادگیری عمیق، و بینایی ماشین با استاندارد بین‌المللی در استان قزوین.',
    'footer.quickLinks': 'دسترسی سریع',
    'footer.programs': 'مسیرهای تخصصی',
    'footer.contact': 'اطلاعات ارتباطی',
    'footer.location': 'قزوین، میدان جانبازان، بلوار مطهری، مرکز نوآوری دانشگاهی',
    'footer.locationShort': 'قزوین، ایران',
    'footer.phone': '۰۲۸-۳۳۶۵۴۳۲۱',
    'footer.email': 'info@academy-arad.ir',
    'footer.domain': 'academy-arad.ir',
    'footer.rights': 'تمامی حقوق برای آکادمی هوش مصنوعی آراد محفوظ است.',
    'footer.allRightsReserved': '© ۲۰۲۶ آکادمی هوش مصنوعی آراد.',

    // Tracks
    'track.genai': 'هوش مصنوعی مولد و LLM',
    'track.deepLearning': 'یادگیری عمیق و شبکه‌های عصبی',
    'track.computerVision': 'بینایی ماشین و پردازش تصویر',
    'track.nlp': 'پردازش زبان طبیعی',
    'track.mlops': 'مهندسی داده و MLOps',

    // Action buttons
    'action.openMenu': 'باز کردن منو',
    'action.closeMenu': 'بستن منو',
    'action.switchLang': 'English',
  },
  en: {
    // Brand & General
    'brand.name': 'Arad AI Academy',
    'brand.tagline': 'Advanced Center for Artificial Intelligence Education & Research',
    'brand.short': 'Arad AI',

    // Navigation
    'nav.home': 'Home',
    'nav.courses': 'Courses',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.portal': 'Student Portal',
    'nav.consultation': 'Free Consultation',

    // Footer
    'footer.description': 'Leading academy for specialized, production-grade Artificial Intelligence, Deep Learning, and Computer Vision education in Qazvin, Iran.',
    'footer.quickLinks': 'Quick Links',
    'footer.programs': 'Specialized Tracks',
    'footer.contact': 'Contact Information',
    'footer.location': 'Innovation Hub, Motahari Blvd, Janbazan Sq, Qazvin, Iran',
    'footer.locationShort': 'Qazvin, Iran',
    'footer.phone': '+98 28 3365 4321',
    'footer.email': 'info@academy-arad.ir',
    'footer.domain': 'academy-arad.ir',
    'footer.rights': 'All rights reserved for Arad AI Academy.',
    'footer.allRightsReserved': '© 2026 Arad AI Academy.',

    // Tracks
    'track.genai': 'Generative AI & LLMs',
    'track.deepLearning': 'Deep Learning & Neural Networks',
    'track.computerVision': 'Computer Vision & Real-time Perception',
    'track.nlp': 'Natural Language Processing',
    'track.mlops': 'Data Engineering & MLOps',

    // Action buttons
    'action.openMenu': 'Open Navigation Menu',
    'action.closeMenu': 'Close Navigation Menu',
    'action.switchLang': 'فارسی',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to Persian ('fa') as requested, initialized lazily
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('arad_lang') as Language | null;
      if (saved && (saved === 'fa' || saved === 'en')) {
        return saved;
      }
    }
    return 'fa';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('arad_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  };

  const toggleLanguage = () => {
    const next = language === 'fa' ? 'en' : 'fa';
    setLanguage(next);
  };

  const direction: Direction = language === 'fa' ? 'rtl' : 'ltr';

  const t = (key: string): string => {
    return translations[language][key] || translations['fa'][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        direction,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
