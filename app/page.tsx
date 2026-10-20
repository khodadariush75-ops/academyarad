'use client';

import React, { useState } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
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
  CheckCircle2,
  MapPin,
  Send,
  Building2,
  Award,
  BookOpen
} from 'lucide-react';
import { motion } from 'motion/react';

export default function HomePage() {
  const { language, t, direction } = useLanguage();
  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    ageGroup: 'adults',
    track: 'genai',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', ageGroup: 'adults', track: 'genai', message: '' });
      setFormSubmitted(false);
    }, 4500);
  };

  const coursesList = [
    {
      id: 'genai',
      title: language === 'fa' ? 'هوش مصنوعی مولد و مدل‌های زبانی (LLMs)' : 'Generative AI & LLMs',
      desc: language === 'fa' 
        ? 'آموزش جامع معماری ترنسفورمرها، مهندسی پرامپت پیشرفته، Fine-tuning و RAG سازمانی.'
        : 'Comprehensive mastery of Transformer architectures, prompt engineering, fine-tuning, enterprise RAG, and autonomous agents.',
      icon: Sparkles,
      color: 'from-[#00F0FF]/20 to-[#38BDF8]/10',
      borderColor: 'border-[#00F0FF]/30',
      badgeColor: 'text-[#00F0FF]',
      duration: language === 'fa' ? '۱۲۰ ساعت تخصصی' : '120 Hours',
      level: language === 'fa' ? 'پیشرفته' : 'Advanced',
      cohort: language === 'fa' ? 'بزرگسالان و دانشجویان' : 'Adults & Professionals',
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
      cohort: language === 'fa' ? 'نوجوانان و بزرگسالان' : 'Teens & Adults',
    },
    {
      id: 'kids-ai',
      title: language === 'fa' ? 'آکادمی هوش مصنوعی و بازی‌سازی کودکان' : 'Kids AI & Game Creation',
      desc: language === 'fa'
        ? 'مفاهیم بنیادی هوش مصنوعی به زبان ساده، برنامه‌نویسی تصویری، ساخت بازی‌های تعاملی و داستان‌پردازی صوتی.'
        : 'Visual AI programming, voice synthesis, gesture-based games, and creative computational logic for kids.',
      icon: Brain,
      color: 'from-[#3B82F6]/20 to-[#60A5FA]/10',
      borderColor: 'border-[#3B82F6]/30',
      badgeColor: 'text-[#3B82F6]',
      duration: language === 'fa' ? '۶۰ ساعت کارگاهی' : '60 Hours',
      level: language === 'fa' ? 'پایه‌ای و خلاق' : 'Foundational',
      cohort: language === 'fa' ? 'کودکان ۸ تا ۱۲ سال' : 'Children 8-12',
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
      cohort: language === 'fa' ? 'مهندسان نرم‌افزار' : 'Engineers',
    },
  ];

  return (
    <div className="w-full relative">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Features & Highlights Section (Qazvin Campus, 3 Age Groups, Project-Based) */}
      <Features />

      {/* 3. Core Courses & Syllabi Section */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10" id="courses">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00F0FF] mb-2">
              <BookOpen className="w-4 h-4" />
              <span>{language === 'fa' ? 'دوره‌های آموزشی معتبر' : 'Certified Curricula'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {language === 'fa' ? 'مسیرهای جامع یادگیری و مهندسی AI' : 'Comprehensive AI Learning Tracks'}
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            {language === 'fa' 
              ? 'محتوای آموزشی پروژه‌محور با دسترسی رایگان به سرورهای گرافیکی پیشرفته در محیط آزمایشگاه‌های قزوین.'
              : 'Project-based masterclasses with full GPU lab access, verified certificates, and industry mentorship.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coursesList.map((course) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`p-7 sm:p-8 rounded-2xl bg-slate-900/60 border ${course.borderColor} backdrop-blur-md hover:bg-slate-900/90 hover:border-[#00F0FF]/60 hover:shadow-[0_0_25px_-5px_rgba(0,240,255,0.2)] transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${course.color} border border-white/10 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 ${course.badgeColor}`} />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                      <span>{course.duration}</span>
                      <span aria-hidden="true">·</span>
                      <span className={course.badgeColor}>{course.level}</span>
                    </div>
                  </div>

                  <span className="text-[11px] text-slate-400 block mb-1">
                    {course.cohort}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00F0FF] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {course.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href="#consultation"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00F0FF] hover:text-white transition-colors"
                  >
                    <span>{language === 'fa' ? 'درخواست سرفصل و ثبت‌نام' : 'Curriculum & Enrollment'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[11px] text-slate-400">
                    {language === 'fa' ? 'ظرفیت محدود (۱۵ نفر)' : 'Max 15 Seats'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. Qazvin Campus & Innovation Hub Spotlight */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10" id="about">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A855F7]">
              <Building2 className="w-4 h-4" />
              <span>{language === 'fa' ? 'پردیس و آزمایشگاه‌های قزوین' : 'Qazvin Tech Hub'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              {language === 'fa' ? (
                <>
                  مرکز مجهز آموزش و شتاب‌دهی هوش مصنوعی در استان قزوین
                </>
              ) : (
                <>
                  Premier AI Laboratory & Innovation Center in Qazvin
                </>
              )}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {language === 'fa' 
                ? 'آکادمی هوش مصنوعی آراد با برخورداری از پردیس تخصصی واقع در قزوین، فضای کار اشتراکی، سالن‌های ورک‌شاپ و کلاسترهای اختصاصی GPU، شرایطی ایده‌آل برای رشد علمی و مهارتی علاقه‌مندان در تمامی رده‌های سنی فراهم آورده است.'
                : 'Arad AI Academy provides specialized high-performance computer laboratories, collaborative maker spaces, and direct GPU access in Qazvin to train industry-ready engineers and researchers.'}
            </p>

            <div className="flex flex-col gap-3">
              {[
                language === 'fa' ? 'دسترسی اختصاصی به سرورهای GPU بدون نیاز به سخت‌افزار شخصی گران‌قیمت' : 'Dedicated GPU cluster access for every student',
                language === 'fa' ? 'آموزش تفکیک‌شده متناسب با سنین کودکان، نوجوانان و بزرگسالان' : 'Distinct curricula tailored for kids, teens, and professionals',
                language === 'fa' ? 'اعطای مدرک رسمی دو زبانه با قابلیت صحت‌سنجی آنلاین' : 'Verifiable bilingual certification upon capstone defense',
                language === 'fa' ? 'معرفی فارغ‌التحصیلان برتر به شرکت‌های دانش‌بنیان و صنعتی' : 'Direct hiring referral pipeline for top graduates',
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <MapPin className="w-4 h-4 text-[#A855F7] shrink-0" />
              <span>{t('footer.location')}</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative p-7 sm:p-9 rounded-3xl bg-slate-900/80 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
              <div 
                aria-hidden="true" 
                className="absolute top-0 end-0 w-64 h-64 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" 
              />
              
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#00F0FF]" />
                    <span className="font-bold text-white text-base">
                      {language === 'fa' ? 'دپارتمان آموزش هوش مصنوعی آراد' : 'Arad AI Academy Department'}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#00F0FF]">Qazvin, Iran</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-slate-800/60 border border-white/5">
                    <span className="text-slate-400 block mb-1">
                      {language === 'fa' ? 'ساعات فعالیت حضوری' : 'In-Person Hours'}
                    </span>
                    <span className="font-semibold text-white">
                      {language === 'fa' ? 'شنبه تا پنجشنبه ۸ الی ۲۰' : 'Sat - Thu: 08:00 - 20:00'}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-white/5">
                    <span className="text-slate-400 block mb-1">
                      {language === 'fa' ? 'سخت‌افزار آزمایشگاهی' : 'Lab Workstations'}
                    </span>
                    <span className="font-semibold text-[#00F0FF]">
                      RTX 4090 / NVIDIA A100
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-[#00F0FF]/10 via-[#A855F7]/10 to-transparent border border-white/10">
                  <span className="text-xs text-slate-300 block mb-1 font-medium">
                    {language === 'fa' ? 'نشانی پردیس' : 'Campus Address'}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t('footer.location')}
                  </p>
                  <span className="block text-xs font-mono text-[#00F0FF] mt-2" dir="ltr">
                    https://academy-arad.ir
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Consultation & Enrollment Request Form */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" id="consultation">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div 
            aria-hidden="true" 
            className="absolute -top-24 -end-24 w-80 h-80 bg-[#00F0FF]/15 rounded-full blur-3xl pointer-events-none" 
          />

          <div className="relative z-10">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#00F0FF] mb-2 block">
                {language === 'fa' ? 'مشاوره اختصاصی رایگان' : 'Free Career Consultation'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {language === 'fa' ? 'درخواست مشاوره و تعیین سطح آموزشی' : 'Request Consultation & Placement'}
              </h2>
              <p className="text-sm text-slate-400">
                {language === 'fa' 
                  ? 'جهت مشاوره انتخاب رده سنی مناسب و بررسی پیش‌نیازها، فرم زیر را تکمیل کنید. کارشناسان آکادمی آراد قزوین با شما تماس خواهند گرفت.'
                  : 'Fill in your details for a free counseling session. Our academic advisors in Qazvin will contact you within 24 hours.'}
              </p>
            </div>

            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center flex flex-col items-center gap-3"
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                <h3 className="text-lg font-bold text-emerald-200">
                  {language === 'fa' ? 'درخواست شما با موفقیت ثبت شد' : 'Consultation Request Submitted!'}
                </h3>
                <p className="text-xs text-emerald-300 max-w-md">
                  {language === 'fa' 
                    ? 'کارشناسان آکادمی هوش مصنوعی آراد به زودی با شماره تماس اعلام‌شده تماس خواهند گرفت.'
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
                      placeholder={language === 'fa' ? 'مثال: علیرضا محمدی' : 'e.g. Alireza Mohammadi'}
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {language === 'fa' ? 'رده سنی متقاضی' : 'Age Group'}
                    </label>
                    <select
                      value={formData.ageGroup}
                      onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-sm text-white focus:outline-none focus:border-[#00F0FF] transition-colors"
                    >
                      <option value="kids">{language === 'fa' ? 'کودکان (۸ تا ۱۲ سال)' : 'Children (8 - 12)'}</option>
                      <option value="teens">{language === 'fa' ? 'نوجوانان (۱۳ تا ۱۷ سال)' : 'Teens (13 - 17)'}</option>
                      <option value="adults">{language === 'fa' ? 'بزرگسالان و دانشجویان (۱۸+)' : 'Adults & Professionals (18+)'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {language === 'fa' ? 'حوزه تخصصی مدنظر' : 'Specialization Track'}
                    </label>
                    <select
                      value={formData.track}
                      onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-sm text-white focus:outline-none focus:border-[#00F0FF] transition-colors"
                    >
                      <option value="genai">{t('track.genai')}</option>
                      <option value="deeplearning">{t('track.deepLearning')}</option>
                      <option value="vision">{t('track.computerVision')}</option>
                      <option value="mlops">{t('track.mlops')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    {language === 'fa' ? 'توضیحات یا پرسش‌ها (اختیاری)' : 'Questions or Background (Optional)'}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={language === 'fa' ? 'سابقه برنامه‌نویسی یا اهداف آموزشی خود را بنویسید...' : 'Briefly share your learning goals...'}
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
                  <span>{language === 'fa' ? 'ثبت درخواست مشاوره رایگان' : 'Submit Consultation Request'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
