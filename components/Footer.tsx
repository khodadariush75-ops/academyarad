'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Cpu, 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  Linkedin, 
  Instagram, 
  Github, 
  Youtube,
  ArrowUpRight
} from 'lucide-react';

export default function Footer() {
  const { t, language } = useLanguage();

  const socialLinks = [
    { name: 'Telegram', icon: Send, href: 'https://t.me/arad_ai', color: 'hover:text-[#00F0FF]' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/arad_ai_academy', color: 'hover:text-[#A855F7]' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/arad-ai-academy', color: 'hover:text-[#3B82F6]' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/arad-ai-academy', color: 'hover:text-white' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@arad_ai', color: 'hover:text-[#EF4444]' },
  ];

  const quickLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.courses'), href: '#courses' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const tracks = [
    { label: t('track.genai'), href: '#courses' },
    { label: t('track.deepLearning'), href: '#courses' },
    { label: t('track.computerVision'), href: '#courses' },
    { label: t('track.mlops'), href: '#courses' },
  ];

  return (
    <footer className="relative bg-[#070A11] border-t border-white/10 text-slate-400 text-sm overflow-hidden">
      {/* Background radial glow accents */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 start-1/4 -translate-y-1/2 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 end-1/4 translate-y-1/2 w-96 h-96 bg-[#A855F7]/5 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Description (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-white group whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF] rounded-lg w-fit"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#00F0FF]/20 via-[#A855F7]/20 to-transparent border border-[#00F0FF]/40 group-hover:border-[#00F0FF] transition-colors shadow-[0_0_12px_rgba(0,240,255,0.3)]">
                <Cpu className="w-4 h-4 text-[#00F0FF]" />
              </div>
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                {t('brand.name')}
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              {t('footer.description')}
            </p>

            {/* Location highlight badge - simple unboxed line */}
            <div className="flex items-center gap-2 text-xs text-slate-300 mt-2">
              <MapPin className="w-4 h-4 text-[#00F0FF] shrink-0" />
              <span>{t('footer.location')}</span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5 mt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900/80 border border-white/10 text-slate-400 ${social.color} hover:border-[#00F0FF]/40 hover:bg-slate-800 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-slate-200">
              {t('footer.quickLinks')}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#00F0FF] transition-colors duration-200 flex items-center justify-between group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#00F0FF]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Tracks & Programs (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-slate-200">
              {t('footer.programs')}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {tracks.map((track) => (
                <li key={track.label}>
                  <a
                    href={track.href}
                    className="hover:text-[#A855F7] transition-colors duration-200 flex items-center justify-between group text-xs sm:text-sm"
                  >
                    <span className="truncate">{track.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Campus Info (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-slate-200">
              {t('footer.contact')}
            </h3>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#00F0FF] shrink-0" />
                <span>{t('footer.locationShort')}</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-[#A855F7] shrink-0" />
                <span dir="ltr" className="font-mono text-xs">{t('footer.phone')}</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-[#3B82F6] shrink-0" />
                <span dir="ltr" className="font-mono text-xs">{t('footer.email')}</span>
              </li>
            </ul>

            <div className="mt-2 p-3 rounded-lg bg-slate-900/60 border border-white/5">
              <span className="block text-[11px] text-slate-400">
                {language === 'fa' 
                  ? 'سامانه رسمی آکادمی هوش مصنوعی آراد قزوین'
                  : 'Official portal for Arad AI Academy Qazvin'}
              </span>
              <span className="block text-xs font-mono text-[#00F0FF] mt-1" dir="ltr">
                academy-arad.ir
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Location Mention */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-start">
            <span>{t('footer.allRightsReserved')}</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span>{t('footer.locationShort')}</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">
              {language === 'fa' ? 'حریم خصوصی' : 'Privacy Policy'}
            </span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">
              {language === 'fa' ? 'قوانین و مقررات' : 'Terms of Service'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
