import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { FloatingWhatsapp } from '@/components/ui/FloatingWhatsapp';
import { companyConfig } from '@/config/companyData';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kammenix.com'),
  title: `${companyConfig.legalName} | Professional Business, Property and Consulting Solutions`,
  description:
    'Kammenix Nig. Limited provides project management, facility management, cleaning, estate development, contracting, financial consulting and professional consultancy services in Nigeria.',
  keywords: [
    'Kammenix Nig. Limited',
    'Project Management Nigeria',
    'Facility Management Lagos',
    'Cleaning Services Nigeria',
    'Estate Development Lagos',
    'Financial Consulting Nigeria',
    'General Contracting Lagos',
    'Cooperative Services Nigeria',
  ],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: `${companyConfig.legalName} | Excellence, Professionalism & Trust`,
    description:
      'Professional project management, facility services, estate development, financial consulting, and general contracting across Nigeria.',
    url: 'https://kammenix.com',
    siteName: companyConfig.legalName,
    images: [
      {
        url: '/images/logo/kammenix-official-logo.jpg',
        width: 800,
        height: 600,
        alt: companyConfig.legalName,
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="font-sans bg-[#F8F6F6] text-slate-800 antialiased min-h-screen flex flex-col selection:bg-[#8DC5C0] selection:text-[#101F34]">
        <Navbar />
        <main className="flex-grow pb-20 lg:pb-0">{children}</main>
        <FloatingWhatsapp />
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
