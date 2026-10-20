'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Building2, 
  Users, 
  Bot, 
  Cpu, 
  GraduationCap, 
  Sparkles,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Smile,
  Rocket,
  Briefcase
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Features() {
  const { language, direction } = useLanguage();
  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<'kids' | 'teens' | 'adults'>('adults');

  // Local data array for Academy Strengths
  const featuresList = [
    {
      id: 'campus',
      icon: Building2,
      title: language === 'fa' ? 'پردیس مدرن در قزوین' : 'Modern Qazvin Campus',
      subtitle: language === 'fa' ? 'محیط آموزشی استاندارد و مجهز' : 'State-of-the-art Infrastructure',
      desc: language === 'fa'
        ? 'پردیس حضوری واقع در مرکز فناوری و نوآوری قزوین با ورک‌استیشن‌های پردازشی مدرن، فضای کار اشتراکی و سالن‌های کنفرانس تخصصی.'
        : 'Physical campus situated in Qazvin’s technology hub with high-end workstations, collaborative labs, and high-speed infrastructure.',
      color: 'from-[#00F0FF]/20 to-[#38BDF8]/10',
      borderHover: 'group-hover:border-[#00F0FF]/60',
      shadowGlow: 'group-hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.3)]',
      iconColor: 'text-[#00F0FF]',
      tag: language === 'fa' ? 'قزوین' : 'Qazvin',
    },
    {
      id: 'age-groups',
      icon: Users,
      title: language === 'fa' ? 'ویژه ۳ رده سنی' : 'Tailored for 3 Age Groups',
      subtitle: language === 'fa' ? 'کودکان، نوجوانان و بزرگسالان' : 'Children, Teens & Adults',
      desc: language === 'fa'
        ? 'سرفصل‌های آموزشی متناسب‌سازی‌شده بر پایه روانشناسی یادگیری برای سنین ۸ تا ۱۲ سال، ۱۳ تا ۱۷ سال و دوره‌های پیشرفته بزرگسالان و مهندسان.'
        : 'Pedagogically designed learning tracks matching developmental stages: Children (8-12), Teenagers (13-17), and Adults & Engineers (18+).',
      color: 'from-[#A855F7]/20 to-[#C084FC]/10',
      borderHover: 'group-hover:border-[#A855F7]/60',
      shadowGlow: 'group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]',
      iconColor: 'text-[#A855F7]',
      tag: language === 'fa' ? 'تخصصی' : 'Customized',
    },
    {
      id: 'projects',
      icon: Bot,
      title: language === 'fa' ? 'یادگیری کاملاً پروژه‌محور' : 'Project-Based Learning',
      subtitle: language === 'fa' ? 'توسعه مدل‌ها و ربات‌های واقعی' : 'Build Real Models & Bots',
      desc: language === 'fa'
        ? 'تمرکز صفر بر تئوری محض؛ ساخت مدل‌های هوش مصنوعی واقعی، آموزش مهندسی پرامپت پیشرفته، عامل‌های هوشمند خودمختار و چت‌بات‌های تجاری.'
        : 'Zero boring theory. Build real AI models from scratch, fine-tune LLMs, orchestrate autonomous AI agents, and deploy production bots.',
      color: 'from-[#3B82F6]/20 to-[#60A5FA]/10',
      borderHover: 'group-hover:border-[#3B82F6]/60',
      shadowGlow: 'group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]',
      iconColor: 'text-[#3B82F6]',
      tag: language === 'fa' ? 'پروژه‌محور' : 'Hands-On',
    },
    {
      id: 'gpu',
      icon: Cpu,
      title: language === 'fa' ? 'کلاستر شتاب‌یافته پردازش ابری' : 'Dedicated Cloud GPU Clusters',
      subtitle: language === 'fa' ? 'دسترسی نامحدود در طول آموزش' : 'Free GPU Access for Projects',
      desc: language === 'fa'
        ? 'نیاز به خرید سخت‌افزارهای گران‌قیمت ندارید؛ سرورهای پردازش گرافیکی مجهز به کارت‌های A100 و RTX در اختیار تمام دانشجویان قرار می‌گیرد.'
        : 'No need for high-end local rigs; students get dedicated access to GPU cloud servers equipped with NVIDIA RTX and A100 accelerators.',
      color: 'from-[#10B981]/20 to-[#34D399]/10',
      borderHover: 'group-hover:border-[#10B981]/60',
      shadowGlow: 'group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]',
      iconColor: 'text-[#10B981]',
      tag: language === 'fa' ? 'سخت‌افزار' : 'Hardware',
    },
    {
      id: 'mentorship',
      icon: Sparkles,
      title: language === 'fa' ? 'منتورینگ ۱ به ۱ توسط مهندسان ارشد' : '1-on-1 Senior Mentorship',
      subtitle: language === 'fa' ? 'راهنمایی گام‌به‌گام و بازبینی کد' : 'Continuous Direct Guidance',
      desc: language === 'fa'
        ? 'جلسات بازبینی کد، برطرف کردن ابهامات معماری و هدایت تحصیلی و شغلی توسط متخصصانی که هم‌اکنون در پروژه‌های بین‌المللی فعال هستند.'
        : 'Personalized code reviews, architectural feedback, and career navigation from practicing lead AI engineers.',
      color: 'from-[#8B5CF6]/20 to-[#A78BFA]/10',
      borderHover: 'group-hover:border-[#8B5CF6]/60',
      shadowGlow: 'group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]',
      iconColor: 'text-[#8B5CF6]',
      tag: language === 'fa' ? 'هدایت شغلی' : 'Mentoring',
    },
    {
      id: 'certification',
      icon: GraduationCap,
      title: language === 'fa' ? 'مدرک معتبر و معرفی به بازار کار' : 'Certification & Career Referral',
      subtitle: language === 'fa' ? 'معرفی برترین‌ها به شرکت‌های همکار' : 'Industry Placement Pipeline',
      desc: language === 'fa'
        ? 'اعطای گواهی‌نامه رسمی دو زبانه با کد صحت‌سنجی آنلاین به همراه معرفی مستقیم فارغ‌التحصیلان ممتاز به شرکت‌های بزرگ فناور.'
        : 'Internationally verifiable bilingual certificate with direct hiring referrals to Arad AI Academy’s network of enterprise tech partners.',
      color: 'from-[#F59E0B]/20 to-[#FBBF24]/10',
      borderHover: 'group-hover:border-[#F59E0B]/60',
      shadowGlow: 'group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]',
      iconColor: 'text-[#F59E0B]',
      tag: language === 'fa' ? 'اشتغال' : 'Career',
    },
  ];

  // Age group track definitions
  const ageGroupData = {
    kids: {
      title: language === 'fa' ? 'کودکان (۸ تا ۱۲ سال)' : 'Children (Ages 8 - 12)',
      badge: language === 'fa' ? 'مقدماتی و بازی‌محور' : 'Play-Based Foundation',
      icon: Smile,
      color: '#00F0FF',
      description: language === 'fa'
        ? 'تقویت تفکر منطقی و حل مسئله از طریق یادگیری مفاهیم بنیادین هوش مصنوعی با ابزارهای تصویری و بازی‌سازی.'
        : 'Fostering logical thinking and algorithmic creativity through visual tools, interactive storytelling, and AI game builders.',
      skills: [
        language === 'fa' ? 'برنامه‌نویسی تصویری و اسکرچ متصل به هوش مصنوعی' : 'Block-based coding with AI extensions',
        language === 'fa' ? 'آشنایی با بینایی ماشین و تشخیص چهره کودکانه' : 'Fun computer vision & face recognition',
        language === 'fa' ? 'ساخت داستان‌های صوتی و تصویری با AI' : 'Creative AI storytelling & voice synthesis',
        language === 'fa' ? 'آشنایی با ایمنی در دنیای دیجیتال و اخلاق فناوری' : 'Digital safety & technology awareness',
      ],
      sampleProject: language === 'fa' 
        ? 'ساخت دستیار هوشمند کارتونی و بازی تعاملی با کنترل ژست حرکتی دست'
        : 'Build a cartoon AI voice companion with hand-gesture interactive controls',
    },
    teens: {
      title: language === 'fa' ? 'نوجوانان (۱۳ تا ۱۷ سال)' : 'Teenagers (Ages 13 - 17)',
      badge: language === 'fa' ? 'کاربردی و مهارتی' : 'Hands-on Skill Builder',
      icon: Rocket,
      color: '#A855F7',
      description: language === 'fa'
        ? 'ورود به دنیای کدنویسی واقعی با پایتون، درک ریاضیات هوش مصنوعی، ساخت ربات‌های تلگرام و حل مسائل واقعی.'
        : 'Transitioning to real text programming in Python, foundational ML math, bot development, and competitive algorithms.',
      skills: [
        language === 'fa' ? 'آموزش زبان پایتون از صفر تا پروژه‌های کاربردی' : 'Python programming from fundamentals to OOP',
        language === 'fa' ? 'ساخت چت‌بات‌های هوشمند با APIهای پیشرفته' : 'Building custom conversational bots with modern APIs',
        language === 'fa' ? 'پردازش تصویر با OpenCV و تشخیص اشیاء ساده' : 'OpenCV basics & real-time object detection',
        language === 'fa' ? 'آمادگی برای المپیادهای هوش مصنوعی و کامپیوتر' : 'Preparation for National AI & Computer Olympiads',
      ],
      sampleProject: language === 'fa'
        ? 'توسعه ربات هوشمند حل تکالیف و سامانه بینایی تشخیص پلاک خودرو'
        : 'Develop a smart study-assistant bot and a license-plate detection system',
    },
    adults: {
      title: language === 'fa' ? 'بزرگسالان و دانشجویان (۱۸+ سال)' : 'Adults & Professionals (18+)',
      badge: language === 'fa' ? 'مهندسی و صنعتی' : 'Production-Grade Engineering',
      icon: Briefcase,
      color: '#3B82F6',
      description: language === 'fa'
        ? 'تربیت مهندس هوش مصنوعی آماده به کار با تسلط بر PyTorch، مدل‌های زبانی بزرگ (LLMs)، بینایی ماشین پیشرفته و معماری‌های استقرار.'
        : 'Training industry-ready AI Engineers mastering PyTorch, fine-tuning LLMs, computer vision, and scalable MLOps pipelines.',
      skills: [
        language === 'fa' ? 'یادگیری عمیق تخصصی با PyTorch و بهینه‌سازی گرادیان' : 'Deep learning engineering with PyTorch & GPU acceleration',
        language === 'fa' ? 'معماری ترنسفورمرها، Fine-tuning و سیستم‌های RAG' : 'Transformer architectures, Fine-tuning & enterprise RAG',
        language === 'fa' ? 'بینایی ماشین بلادرنگ با YOLOv8 و مدل‌های Vision-Language' : 'Real-time perception with YOLO & Vision-Language models',
        language === 'fa' ? 'استقرار صنعتی مدل‌ها، Docker و خطوط MLOps' : 'Production deployment with Docker, FastAPI & MLOps',
      ],
      sampleProject: language === 'fa'
        ? 'طراحی سیستم سازمانی جستجوی معنایی و عامل خودکار تحلیل داده با سرورهای پردازش ابری'
        : 'Enterprise semantic search engine and autonomous multi-agent data analyst on GPU clusters',
    },
  };

  const currentAgeTrack = ageGroupData[selectedAgeGroup];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative" id="features">
      
      {/* Background radial accent */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 start-0 -translate-y-1/2 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-3xl pointer-events-none" 
      />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        
        {/* Anti-slop unboxed lead-in */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00F0FF] mb-3"
        >
          <ShieldCheck className="w-4 h-4" />
          <span>{language === 'fa' ? 'ارکان تمایز آکادمی آراد' : 'Why Arad AI Academy'}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5"
          style={{ textWrap: 'balance' }}
        >
          {language === 'fa' ? (
            <>
              آموزش استاندارد بین‌المللی با{' '}
              <span className="bg-gradient-to-r from-[#00F0FF] via-[#38BDF8] to-[#A855F7] bg-clip-text text-transparent">
                زیرساخت واقعی و پروژه‌محور
              </span>
            </>
          ) : (
            <>
              Global Standard AI Education with{' '}
              <span className="bg-gradient-to-r from-[#00F0FF] via-[#38BDF8] to-[#A855F7] bg-clip-text text-transparent">
                Real Infrastructure
              </span>
            </>
          )}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl"
        >
          {language === 'fa'
            ? 'ترکیبی از پردیس حضوری مجهز در قزوین، تفکیک دقیق برنامه‌ها بر اساس ۳ رده سنی و تمرکز ۱۰۰ درصدی بر تولید و استقرار پروژه‌های عملی در دنیای واقعی.'
            : 'Combining physical lab presence in Qazvin, precision age-tailored tracks, and 100% focus on shipping real AI systems.'}
        </motion.p>
      </div>

      {/* Responsive 6-Card Features Grid with Neon Hover Effect */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
        {featuresList.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`group relative p-7 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md hover:bg-slate-900/90 transition-all duration-300 ${item.borderHover} ${item.shadowGlow} flex flex-col justify-between hover:-translate-y-1`}
            >
              <div>
                {/* Card Icon & Unboxed Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
                    {item.tag}
                  </span>
                </div>

                {/* Card Title & Subtitle */}
                <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-[#00F0FF] transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs text-slate-400 block mb-3.5">
                  {item.subtitle}
                </span>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Subtle hairline highlight */}
              <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="group-hover:text-white transition-colors">
                  {language === 'fa' ? 'استاندارد آراد' : 'Arad Standard'}
                </span>
                <span className="text-[#00F0FF] opacity-0 group-hover:opacity-100 transition-opacity">
                  ●
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ========================================================
          SPECIALIZED 3 AGE GROUPS SHOWCASE & INTERACTIVE EXPLORER
         ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden"
      >
        <div 
          aria-hidden="true" 
          className="absolute -top-32 -end-32 w-80 h-80 bg-[#A855F7]/15 rounded-full blur-3xl pointer-events-none" 
        />

        {/* Section title inside card */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/10 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#A855F7] mb-2">
              <Users className="w-4 h-4" />
              <span>{language === 'fa' ? 'تفکیک تخصصی سنی' : 'Age Segmentation'}</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white">
              {language === 'fa' ? 'مسیرهای ویژه ۳ رده سنی در آکادمی آراد' : 'Dedicated Tracks for 3 Age Groups'}
            </h3>
          </div>

          {/* Interactive Age Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950/80 border border-white/10 self-start md:self-auto">
            {(['kids', 'teens', 'adults'] as const).map((tab) => {
              const active = selectedAgeGroup === tab;
              const labels = {
                kids: language === 'fa' ? 'کودکان (۸-۱۲)' : 'Children (8-12)',
                teens: language === 'fa' ? 'نوجوانان (۱۳-۱۷)' : 'Teens (13-17)',
                adults: language === 'fa' ? 'بزرگسالان (۱۸+)' : 'Adults (18+)',
              };
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setSelectedAgeGroup(tab)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-gradient-to-r from-[#00F0FF] to-[#38BDF8] text-slate-950 shadow-md shadow-[#00F0FF]/25'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {labels[tab]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Track Details Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-800/80 border border-white/10"
                style={{ color: currentAgeTrack.color }}
              >
                {React.createElement(currentAgeTrack.icon, { className: 'w-5 h-5' })}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">
                  {currentAgeTrack.title}
                </h4>
                <span className="text-xs text-slate-400">
                  {currentAgeTrack.badge}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mt-1">
              {currentAgeTrack.description}
            </p>

            {/* Core Competencies Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {currentAgeTrack.skills.map((skill, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Featured Capstone Project Showcase */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-slate-950/90 border border-white/10 flex flex-col justify-between gap-4 shadow-xl">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-white/10">
                <span className="font-semibold text-white">
                  {language === 'fa' ? 'پروژه شاخص پایان‌دوره' : 'Featured Capstone Project'}
                </span>
                <span className="text-[#00F0FF] font-mono">100% Practical</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5">
                <span className="text-xs text-slate-400 block mb-1.5">
                  {language === 'fa' ? 'آنچه دانش‌پژوه خواهد ساخت:' : 'What students will build:'}
                </span>
                <p className="text-sm font-semibold text-[#00F0FF] leading-snug">
                  {currentAgeTrack.sampleProject}
                </p>
              </div>

              <a
                href="#consultation"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-[#00F0FF] to-[#38BDF8] hover:from-[#38BDF8] hover:to-[#00F0FF] shadow-lg shadow-[#00F0FF]/20 transition-all active:scale-95"
              >
                <span>
                  {language === 'fa' ? `ثبت‌نام در دوره ${currentAgeTrack.title}` : `Enroll in ${currentAgeTrack.title}`}
                </span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </motion.div>

    </section>
  );
}
