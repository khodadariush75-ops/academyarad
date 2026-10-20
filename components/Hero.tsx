'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Sparkles, 
  ArrowLeft, 
  ArrowRight, 
  Cpu, 
  Brain, 
  Bot, 
  MapPin, 
  Terminal,
  Zap,
  ChevronDown
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const { language, t, direction } = useLanguage();
  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Dynamic Animated Glowing Background Orbs */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none overflow-hidden -z-10"
      >
        {/* Neon Cyan Orb */}
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -35, 25, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[600px] h-[420px] sm:h-[600px] bg-gradient-to-tr from-[#00F0FF]/15 via-[#38BDF8]/10 to-transparent rounded-full blur-[130px]"
        />

        {/* Neon Purple Orb */}
        <motion.div
          animate={{
            x: [0, -45, 35, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 end-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-to-bl from-[#A855F7]/15 via-[#8B5CF6]/10 to-transparent rounded-full blur-[120px]"
        />

        {/* Ambient Grid overlay with fade mask */}
        <div className="absolute inset-0 cyber-grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Column (7 Cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-start">
            
            {/* Unboxed Metadata Kicker (Anti-slop compliant) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6"
            >
              <div className="flex items-center gap-1.5 text-[#00F0FF]">
                <Cpu className="w-3.5 h-3.5" />
                <span>{language === 'fa' ? 'آکادمی تخصصی هوش مصنوعی' : 'Specialized AI Academy'}</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#A855F7]" />
                <span>{t('footer.locationShort')}</span>
              </div>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-slate-500">academy-arad.ir</span>
            </motion.div>

            {/* Bold Glowing Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2] sm:leading-[1.15] mb-6"
              style={{ textWrap: 'balance' }}
            >
              {language === 'fa' ? (
                <>
                  تسخیر آینده با{' '}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#00F0FF] via-[#38BDF8] to-[#A855F7] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
                      آکادمی هوش مصنوعی آراد
                    </span>
                  </span>
                </>
              ) : (
                <>
                  Master the Future with{' '}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#00F0FF] via-[#38BDF8] to-[#A855F7] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
                      Arad AI Academy
                    </span>
                  </span>
                </>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed font-normal"
            >
              {language === 'fa'
                ? 'مرکز پیشرفته آموزش عملی هوش مصنوعی در قزوین؛ ویژه کودکان، نوجوانان و بزرگسالان. با محوریت ساخت پروژه‌های واقعی، مدل‌های زبانی، بینایی ماشین و عامل‌های هوشمند با مجهزترین سرورهای GPU.'
                : 'Advanced hands-on AI education in Qazvin tailored for Children, Teenagers, and Adults. Master real-world AI models, prompt engineering, computer vision, and autonomous agents.'}
            </motion.p>

            {/* Two Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
            >
              {/* Primary: View Courses (Neon Glow) */}
              <a
                href="#courses"
                className="group relative flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-[#00F0FF] to-[#38BDF8] hover:from-[#38BDF8] hover:to-[#00F0FF] shadow-[0_0_25px_-4px_rgba(0,240,255,0.45)] hover:shadow-[0_0_35px_-2px_rgba(0,240,255,0.7)] transition-all duration-300 active:scale-95"
              >
                <span>{language === 'fa' ? 'مشاهده دوره‌ها' : 'View Courses'}</span>
                <ArrowIcon className="w-4 h-4 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
              </a>

              {/* Secondary: Free Consultation (Glassmorphic) */}
              <a
                href="#consultation"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/70 hover:bg-slate-800/80 backdrop-blur-md border border-white/10 hover:border-[#00F0FF]/40 hover:text-white transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-[#00F0FF]" />
                <span>{language === 'fa' ? 'مشاوره رایگان' : 'Free Consultation'}</span>
              </a>
            </motion.div>

            {/* Key Trust Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-400"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00F0FF]" />
                <span>{language === 'fa' ? 'ویژه ۳ رده سنی' : '3 Specialized Age Tracks'}</span>
              </div>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
                <span>{language === 'fa' ? 'پروژه‌محور و صنعتی' : 'Project-Based Learning'}</span>
              </div>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                <span>{language === 'fa' ? 'پردیس حضوری قزوین' : 'Qazvin Tech Campus'}</span>
              </div>
            </motion.div>

          </div>

          {/* Interactive Futuristic Card / Tech Showcase (5 Cols on desktop) */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative p-6 sm:p-7 rounded-3xl bg-slate-900/70 border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden group hover:border-[#00F0FF]/40 transition-all duration-300"
            >
              {/* Subtle top corner gradient highlight */}
              <div 
                aria-hidden="true" 
                className="absolute -top-16 -end-16 w-44 h-44 bg-[#00F0FF]/15 rounded-full blur-2xl pointer-events-none" 
              />
              <div 
                aria-hidden="true" 
                className="absolute -bottom-16 -start-16 w-44 h-44 bg-[#A855F7]/15 rounded-full blur-2xl pointer-events-none" 
              />

              {/* Terminal / System Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#00F0FF]" />
                  <span className="font-mono text-xs font-semibold text-slate-200">
                    arad-ai-engine::ready
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF]" />
                </div>
              </div>

              {/* Interactive Neural Flow Simulation Node */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/5 mb-5 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Brain className="w-3.5 h-3.5 text-[#A855F7]" />
                    <span>Neural Pipeline</span>
                  </span>
                  <span className="text-[#00F0FF] text-[11px]">ACTIVE LAB</span>
                </div>

                <div className="space-y-1.5 text-[11px] text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Model:</span>
                    <span className="text-[#00F0FF]">Arad-Llama3-Vision</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Target Cohorts:</span>
                    <span className="text-slate-200">{language === 'fa' ? 'کودک · نوجوان · بزرگسال' : 'Kids · Teens · Adults'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">GPU Cluster:</span>
                    <span className="text-emerald-400">NVIDIA A100 (4x)</span>
                  </div>
                </div>

                {/* Simulated Neural Pulse Progress Bar */}
                <div className="pt-2">
                  <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                    <span>Curriculum Sync</span>
                    <span>100% Ready</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.2, delay: 0.4 }}
                      className="h-full bg-gradient-to-r from-[#00F0FF] via-[#38BDF8] to-[#A855F7] rounded-full" 
                    />
                  </div>
                </div>
              </div>

              {/* 3 Age Groups Quick Glance */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-slate-800/40 border border-white/5 hover:border-[#00F0FF]/30 transition-colors">
                  <span className="block text-[11px] font-bold text-white mb-0.5">
                    {language === 'fa' ? 'کودکان' : 'Children'}
                  </span>
                  <span className="text-[10px] text-[#00F0FF]">۸ تا ۱۲ سال</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-800/40 border border-white/5 hover:border-[#A855F7]/30 transition-colors">
                  <span className="block text-[11px] font-bold text-white mb-0.5">
                    {language === 'fa' ? 'نوجوانان' : 'Teens'}
                  </span>
                  <span className="text-[10px] text-[#A855F7]">۱۳ تا ۱۷ سال</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-800/40 border border-white/5 hover:border-[#3B82F6]/30 transition-colors">
                  <span className="block text-[11px] font-bold text-white mb-0.5">
                    {language === 'fa' ? 'بزرگسالان' : 'Adults'}
                  </span>
                  <span className="text-[10px] text-[#3B82F6]">۱۸+ و متخصصان</span>
                </div>
              </div>

              {/* Bottom Campus Pin */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-[#00F0FF]" />
                  <span>{language === 'fa' ? 'پردیس نوآوری قزوین' : 'Qazvin Campus'}</span>
                </span>
                <span className="text-[#00F0FF] font-mono">academy-arad.ir</span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#features"
        aria-label="Scroll to features"
        className="absolute bottom-4 start-1/2 -translate-x-1/2 p-2 text-slate-500 hover:text-[#00F0FF] transition-colors"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>

    </section>
  );
}
