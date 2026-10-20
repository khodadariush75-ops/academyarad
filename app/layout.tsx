import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Arad AI Academy | آکادمی هوش مصنوعی آراد',
  description: 'Premier Artificial Intelligence Academy in Qazvin, Iran. Specialized AI engineering, machine learning, deep learning, and advanced AI training.',
  keywords: [
    'Arad AI Academy',
    'آکادمی هوش مصنوعی آراد',
    'هوش مصنوعی قزوین',
    'آموزش هوش مصنوعی',
    'یادگیری ماشین',
    'یادگیری عمیق',
    'academy-arad.ir',
    'Qazvin AI',
  ],
  authors: [{ name: 'Arad AI Academy' }],
  metadataBase: new URL('https://academy-arad.ir'),
  openGraph: {
    title: 'Arad AI Academy | آکادمی هوش مصنوعی آراد',
    description: 'مرکز تخصصی آموزش و نوآوری هوش مصنوعی در قزوین. دوره‌های تخصصی یادگیری عمیق، پردازش تصویر و هوش مصنوعی مولد.',
    url: 'https://academy-arad.ir',
    siteName: 'Arad AI Academy',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arad AI Academy | آکادمی هوش مصنوعی آراد',
    description: 'Premier Artificial Intelligence Academy in Qazvin, Iran.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#0B0F19',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#0B0F19] text-[#F3F4F6] antialiased selection:bg-[#00F0FF]/30 selection:text-white min-h-screen flex flex-col cyber-grid-bg" suppressHydrationWarning>
        <LanguageProvider>
          <Header />
          <main className="flex-1 w-full pt-[64px] sm:pt-[72px]">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
