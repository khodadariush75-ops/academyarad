'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Menu, 
  X, 
  Cpu, 
  Globe, 
  ArrowUpRight, 
  Sparkles,
  BookOpen,
  Info,
  PhoneCall,
  Home
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC key or resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: t('nav.home'), href: '#home', icon: Home },
    { label: t('nav.courses'), href: '#courses', icon: BookOpen },
    { label: t('nav.about'), href: '#about', icon: Info },
    { label: t('nav.contact'), href: '#contact', icon: PhoneCall },
  ];

  return (
    <header
      className={`fixed top-0 start-0 end-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0F19]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-[#0B0F19]/60 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          
          {/* Zone 1: Brand Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-white group whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF] rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#00F0FF]/20 via-[#A855F7]/20 to-transparent border border-[#00F0FF]/40 group-hover:border-[#00F0FF] transition-colors duration-300 shadow-[0_0_15px_-3px_rgba(0,240,255,0.3)]">
              <Cpu className="w-5 h-5 text-[#00F0FF] group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-xl bg-[#00F0FF]/10 blur-sm -z-10 group-hover:bg-[#00F0FF]/25 transition-colors" />
            </div>
            
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                {t('brand.name')}
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider hidden sm:block">
                academy-arad.ir
              </span>
            </div>
          </Link>

          {/* Zone 2: Desktop Navigation Links (Single-Line, 4 Clean Links) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-slate-300 hover:text-white transition-colors duration-200 rounded-lg group whitespace-nowrap shrink-0 hover:bg-white/5"
              >
                <span>{link.label}</span>
                {/* Subtle Neon Underline Glow on hover */}
                <span className="absolute bottom-0 start-3 end-3 h-[2px] bg-gradient-to-r from-[#00F0FF] to-[#A855F7] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-start rounded-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action + Language Toggle Switcher */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 hover:text-white border border-white/10 rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
              title={language === 'fa' ? 'Switch to English' : 'تغییر به فارسی'}
            >
              <Globe className="w-3.5 h-3.5 text-[#00F0FF]" />
              <span className="font-semibold uppercase tracking-wider">
                {language === 'fa' ? 'EN' : 'فا'}
              </span>
            </button>

            {/* Primary Action Button (Consultation / Portal) */}
            <a
              href="#consultation"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-[#00F0FF] to-[#38BDF8] hover:from-[#38BDF8] hover:to-[#00F0FF] rounded-lg shadow-[0_0_20px_-3px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_-2px_rgba(0,240,255,0.6)] transition-all duration-200 whitespace-nowrap shrink-0 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>{t('nav.consultation')}</span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t('action.closeMenu') : t('action.openMenu')}
              className="md:hidden flex items-center justify-center w-9 h-9 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#00F0FF]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Glassmorphic Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-[61px] p-4 bg-[#0B0F19]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl z-40 max-h-[calc(100vh-61px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-2 pt-2 pb-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-[#00F0FF]" />
                      <span>{link.label}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500" />
                  </a>
                );
              })}

              <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="#consultation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-[#00F0FF] to-[#38BDF8] shadow-lg shadow-[#00F0FF]/20"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{t('nav.consultation')}</span>
                </a>

                <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-900/40 border border-white/5 text-xs text-slate-400">
                  <span>{t('footer.locationShort')}</span>
                  <span className="text-[#00F0FF] font-mono">academy-arad.ir</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
