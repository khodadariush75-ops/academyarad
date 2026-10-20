'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Sparkles, 
  ArrowLeft, 
  ArrowRight, 
  Brain, 
  Cpu, 
  Eye, 
  Terminal, 
  GraduationCap, 
  ShieldCheck, 
  Users, 
  Layers, 
  Calendar,
  CheckCircle2,
  MapPin,
  Send
} from 'lucide-react';
import { motion } from 'motion/react';

export default function HomePage() {
  const { language, t, direction } = useLanguage();
  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: 'genai',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate consultation submission (ready for PHP/MySQL cPanel backend)
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', course: 'genai', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  const tracks = [
    {
      id: 'genai',
      title: language === 'fa' ? 'هوش مصنوعی مولد و مدل‌های زبانی (LLMs)' : 'Generative AI & LLMs',
      desc: language === 'fa' 
        ? 'آموزش جامع معماری ترنسفورمرها، مهندسی پرامپت پیشرفته، Fine-tuning و RAG سازمانی.'
        : 'Comprehensive mastery of Transformer architectures, fine-tuning, enterprise RAG, and multi-agent systems.',
      icon: Sparkles,
      color: 'from-[#00F0FF]/20 to-[#38BDF8]/10',
      borderColor: 'border-[#00F0FF]/30',
      badgeColor: 'text-[#00F0FF]',
      duration: language === 'fa' ? '۱۲۰ ساعت تخصصی' : '120 Hours',
      level: language === 'fa' ? 'پیشرفته' : 'Advanced',
    },
    {
      id: 'vision',
      title: language === 'fa' ? 'بینایی ماشین و سامانه‌های خودران' : 'Computer Vision & Autonomous AI',
      desc: language === 'fa'
        ? 'پردازش تصویر بلادرنگ، ردیابی اشیاء با YOLOv8، بخش‌بندی معنایی و مدل‌های Vision-Language.'
        : 'Real-time perception, object tracking, semantic segmentation with YOLOv8, and Vision-Language models.',
      icon: Eye,
      color: 'from-[#A855F7]/20 to-[#C084FC]/10',
      borderColor: 'border-[#A855F7]/30',
      badgeColor: 'text-[#A855F7]',
      duration: language === 'fa' ? '۱۰۰ ساعت تخصصی' : '100 Hours',
      level: language === 'fa' ? 'متوسط تا پیشرفته' : 'Intermediate/Adv',
    },
    {
      id: 'deeplearning',
      title: language === 'fa' ? 'یادگیری عمیق و شبکه‌های عصبی' : 'Deep Learning & Neural Networks',
      desc: language === 'fa'
        ? 'پیاده‌سازی عمیق با PyTorch، شبکه‌های کانولوشنی، بازگشتی، بهینه‌سازی گرادیان و گرافیک شتاب‌یافته.'
        : 'Hands-on PyTorch development, CNNs, RNNs, gradient optimization, and GPU cluster training.',
      icon: Brain,
      color: 'from-[#3B82F6]/20 to-[#60A5FA]/10',
      borderColor: 'border-[#3B82F6]/30',
      badgeColor: 'text-[#3B82F6]',
      duration: language === 'fa' ? '۹۰ ساعت کاربردی' : '90 Hours',
      level: language === 'fa' ? 'پایه‌ای تا پیشرفته' : 'Core to Advanced',
    },
    {
      id: 'mlops',
      title: language === 'fa' ? 'مهندسی داده، پایپ‌لاین و MLOps' : 'Data Engineering & MLOps',
      desc: language === 'fa'
        ? 'استقرار مدل‌ها روی سرورهای ابری، کانتینرسازی با Docker، ابزارهای CI/CD هوش مصنوعی و مانیتورینگ.'
        : 'Model serving, containerization with Docker, MLflow, CI/CD pipelines for AI, and real-time telemetry.',
      icon: Terminal,
      color: 'from-[#10B981]/20 to-[#34D399]/10',
      borderColor: 'border-[#10B981]/30',
      badgeColor: 'text-[#10B981]',
      duration: language === 'fa' ? '۸۰ ساعت تخصصی' : '80 Hours',
      level: language === 'fa' ? 'حرفه‌ای' : 'Professional',
    },
  ];

  const highlights = [
    {
      number: '۱,۴۰۰+',
      numberEn: '1,400+',
      label: language === 'fa' ? 'فارغ‌التحصیل متخصص' : 'Graduated Engineers',
    },
    {
      number: '۹۴٪',
      numberEn: '94%',
      label: language === 'fa' ? 'نرخ ورود به بازار کار' : 'Industry Employment',
    },
    {
      number: '۴',
      numberEn: '4',
      label: language === 'fa' ? 'آزمایشگاه تخصصی پردازش' : 'Specialized GPU Labs',
    },
    {
      number: '۱۰۰٪',
      numberEn: '100%',
      label: language === 'fa' ? 'پروژه‌محور و صنعتی' : 'Industrial Projects',
    },
  ];

  return (
    <div className="w-full relative overflow-hidden" id="home">
      
      {/* Ambient background glow spots */}
      <div 
        aria-hidden="true" 
        className="absolute top-12 start-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#00F0FF]/15 via-[#A855F7]/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" 
      />

      {/* =========================================
          HERO SECTION
         ========================================= */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Subtle text kicker (Anti-slop compliant: clean unboxed text) */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6"
          >
            <span className="text-[#00F0FF]">{language === 'fa' ? 'قطب آموزش هوش مصنوعی' : 'Center of AI Excellence'}</span>
            <span aria-hidden="true">·</span>
            <span>{t('footer.locationShort')}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-500">academy-arad.ir</span>
          </motion.div>

          {/* Main Hero Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.25] sm:leading-[1.2] mb-6"
            style={{ textWrap: 'balance' }}
          >
            {language === 'fa' ? (
              <>
                تربیت نسل نوین{' '}
                <span className="bg-gradient-to-r from-[#00F0FF] via-[#38BDF8] to-[#A855F7] bg-clip-text text-transparent">
                  مهندسان و پژوهشگران
                </span>{' '}
                هوش مصنوعی
              </>
            ) : (
              <>
                Empowering the Next Era of{' '}
                <span className="bg-gradient-to-r from-[#00F0FF] via-[#38BDF8] to-[#A855F7] bg-clip-text text-transparent">
                  AI Engineers & Researchers
                </span>
              </>
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
          >
            {language === 'fa' 
              ? 'آکادمی هوش مصنوعی آراد در قزوین، مرجع تخصصی دوره‌های پروژه‌محور یادگیری عمیق، مدل‌های زبانی بزرگ، بینایی ماشین و مهندسی داده با سرورهای پردازش ابری پیشرفته.'
              : 'Arad AI Academy in Qazvin provides rigorous, hands-on masterclasses in Deep Learning, Large Language Models, Computer Vision, and MLOps powered by high-performance GPU labs.'}
          </motion.p>

          {/* Dual Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#courses"
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-[#00F0FF] to-[#38BDF8] hover:from-[#38BDF8] hover:to-[#00F0FF] shadow-[0_0_25px_-5px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_-3px_rgba(0,240,255,0.6)] transition-all duration-200 active:scale-95"
            >
              <span>{language === 'fa' ? 'مشاهده دوره‌های تخصصی' : 'Explore AI Tracks'}</span>
              <ArrowIcon className="w-4 h-4" />
            </a>

            <a
              href="#consultation"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-[#00F0FF]/40 transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-[#00F0FF]" />
              <span>{language === 'fa' ? 'درخواست مشاوره رایگان' : 'Book Free Consultation'}</span>
            </a>
          </motion.div>

          {/* KPI Strip */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full mt-16 pt-10 border-t border-white/10"
          >
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center p-4 rounded-xl bg-slate-900/40 border border-white/5 backdrop-blur-sm"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  {language === 'fa' ? item.number : item.numberEn}
                </span>
                <span className="text-xs text-slate-400 mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* =========================================
          COURSES & TRACKS SECTION
         ========================================= */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="courses">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00F0FF] mb-2">
              <Cpu className="w-4 h-4" />
              <span>{language === 'fa' ? 'برنامه آموزشی ۱۴۰۵' : 'Curriculum 2026'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {language === 'fa' ? 'مسیرهای جامع یادگیری و مهندسی AI' : 'Comprehensive AI Learning Tracks'}
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            {language === 'fa' 
              ? 'محتوای آموزشی مطابق سرفصل‌های دانشگاه‌های استنفورد و MIT، بازنویسی شده برای نیازهای صنعت و بازارهای بین‌المللی.'
              : 'Curricula benchmarked against Stanford and MIT syllabi, optimized for production delivery and global career standards.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <div
                key={track.id}
                className={`p-6 sm:p-8 rounded-2xl bg-slate-900/60 border ${track.borderColor} backdrop-blur-md hover:bg-slate-900/90 transition-all duration-300 group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${track.color} border border-white/10`}>
                      <Icon className={`w-6 h-6 ${track.badgeColor}`} />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                      <span>{track.duration}</span>
                      <span aria-hidden="true">·</span>
                      <span className={track.badgeColor}>{track.level}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00F0FF] transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {track.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href="#consultation"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00F0FF] hover:text-white transition-colors"
                  >
                    <span>{language === 'fa' ? 'سرفصل‌ها و ثبت‌نام' : 'Syllabus & Enrollment'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[11px] text-slate-400">
                    {language === 'fa' ? 'حضوری و آنلاین' : 'In-person & Remote'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================
          ABOUT & CAMPUS SECTION (QAZVIN)
         ========================================= */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10" id="about">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A855F7]">
              <ShieldCheck className="w-4 h-4" />
              <span>{language === 'fa' ? 'درباره آکادمی آراد' : 'About Arad Academy'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              {language === 'fa' ? (
                <>
                  پیشگام تحول دیجیتال و پرورش استعدادهای هوش مصنوعی در استان قزوین
                </>
              ) : (
                <>
                  Pioneering Digital Transformation & AI Talent in Qazvin
                </>
              )}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {language === 'fa' 
                ? 'آکادمی هوش مصنوعی آراد با هدف پل زدن میان دانش آکادمیک و نیازهای فوری صنعت تأسیس گردیده است. ما با مجهزترین سخت‌افزارهای پردازشی و اساتید مجرب حوزه هوش مصنوعی، مسیری مطمئن برای تسلط کاربردی بر الگوریتم‌های مدرن هوش مصنوعی فراهم کرده‌ایم.'
                : 'Founded to bridge the critical gap between academic theory and high-stakes production environments, Arad AI Academy equips engineers with real-world competencies using dedicated GPU infrastructure and industry-tested mentors.'}
            </p>

            <div className="flex flex-col gap-3">
              {[
                language === 'fa' ? 'دسترسی اختصاصی به کلاسترهای پردازش ابری GPU در طول دوره' : 'Dedicated GPU cluster access throughout all laboratory projects',
                language === 'fa' ? 'منتورینگ یک‌به‌یک توسط مهندسان ارشد شرکت‌های فناوری' : '1-on-1 mentorship by senior engineers from leading technology firms',
                language === 'fa' ? 'اعطای گواهی‌نامه رسمی دو زبانه و معرفی به شرکت‌های معتبر همکار' : 'Bilingual verified certification & placement referrals to partner firms',
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-[#A855F7]" />
                <span>{t('footer.location')}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-white/10 shadow-2xl overflow-hidden">
              <div 
                aria-hidden="true" 
                className="absolute top-0 end-0 w-64 h-64 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" 
              />
              
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#00F0FF]" />
                    <span className="font-bold text-white text-base">
                      {language === 'fa' ? 'مرکز نوآوری و تحقیقات آراد' : 'Arad Research & Innovation Hub'}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#00F0FF]">Qazvin, IR</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-800/50 border border-white/5">
                    <span className="text-xs text-slate-400 block mb-1">
                      {language === 'fa' ? 'ساعات کاری دپارتمان' : 'Lab Working Hours'}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {language === 'fa' ? 'شنبه تا پنجشنبه ۸ الی ۲۰' : 'Sat - Thu: 08:00 - 20:00'}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/50 border border-white/5">
                    <span className="text-xs text-slate-400 block mb-1">
                      {language === 'fa' ? 'ظرفیت کارگاه‌ها' : 'Cohort Size'}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {language === 'fa' ? 'حداکثر ۱۵ نفر (تخصصی)' : 'Max 15 Students (VIP)'}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-[#00F0FF]/10 to-[#A855F7]/10 border border-white/10">
                  <span className="text-xs text-slate-300 block mb-1 font-medium">
                    {language === 'fa' ? 'دامنه رسمی سامانه' : 'Official Academy Domain'}
                  </span>
                  <span className="text-sm font-mono text-[#00F0FF]" dir="ltr">
                    https://academy-arad.ir
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          CONSULTATION & ENROLLMENT FORM SECTION
         ========================================= */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" id="consultation">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div 
            aria-hidden="true" 
            className="absolute -top-24 -end-24 w-80 h-80 bg-[#00F0FF]/15 rounded-full blur-3xl pointer-events-none" 
          />

          <div className="relative z-10">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#00F0FF] mb-2 block">
                {language === 'fa' ? 'شروع مسیر یادگیری' : 'Get Started'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {language === 'fa' ? 'درخواست مشاوره تخصصی و ثبت‌نام' : 'Request Career Consultation'}
              </h2>
              <p className="text-sm text-slate-400">
                {language === 'fa' 
                  ? 'مشاوران آموزشی ما جهت بررسی پیش‌نیازها و راهنمایی انتخاب دوره، حداکثر ظرف ۲۴ ساعت با شما تماس خواهند گرفت.'
                  : 'Our academic advisors will contact you within 24 hours to review your background and guide track selection.'}
              </p>
            </div>

            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center flex flex-col items-center gap-3"
              >
                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                <h3 className="text-lg font-bold text-emerald-200">
                  {language === 'fa' ? 'درخواست شما با موفقیت ثبت شد' : 'Consultation Request Received!'}
                </h3>
                <p className="text-xs text-emerald-300 max-w-md">
                  {language === 'fa' 
                    ? 'کارشناسان آکادمی هوش مصنوعی آراد به زودی با شماره تماس شما تماس خواهند گرفت.'
                    : 'Our admissions counselor will reach out shortly. Welcome to Arad AI Academy!'}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {language === 'fa' ? 'نام و نام خانوادگی' : 'Full Name'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={language === 'fa' ? 'مثال: داریوش خدابنده‌لو' : 'e.g. Dariush Khoda'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-sm text-white focus:outline-none focus:border-[#00F0FF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {language === 'fa' ? 'شماره تماس همراه' : 'Phone Number'}
                    </label>
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      placeholder="0912..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-sm text-white focus:outline-none focus:border-[#00F0FF] transition-colors text-start"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {language === 'fa' ? 'دوره مورد نظر' : 'Preferred AI Track'}
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-sm text-white focus:outline-none focus:border-[#00F0FF] transition-colors"
                  >
                    <option value="genai">{t('track.genai')}</option>
                    <option value="deeplearning">{t('track.deepLearning')}</option>
                    <option value="vision">{t('track.computerVision')}</option>
                    <option value="mlops">{t('track.mlops')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {language === 'fa' ? 'توضیحات یا سابقه قبلی (اختیاری)' : 'Background / Questions (Optional)'}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={language === 'fa' ? 'سابقه برنامه‌نویسی یا اهداف خود را بنویسید...' : 'Briefly share your goals...'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-sm text-white focus:outline-none focus:border-[#00F0FF] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-[#00F0FF] to-[#38BDF8] hover:from-[#38BDF8] hover:to-[#00F0FF] shadow-lg shadow-[#00F0FF]/25 hover:shadow-[#00F0FF]/40 transition-all active:scale-[0.99] cursor-pointer"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>{language === 'fa' ? 'ارسال درخواست مشاوره' : 'Submit Consultation Request'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
