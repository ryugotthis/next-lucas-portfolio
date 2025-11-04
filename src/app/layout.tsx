import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';



export const metadata: Metadata = {
  metadataBase: new URL('https://www.lucasprovost.com'),

  title: { default: 'PORTFOLIO | Lucas Provost', template: '%s | Lucas Provost' },
  description: 'Identité visuelle & branding. Portfolio de Lucas Provost',
  openGraph: {
    type: 'website',
    url: 'https://lucasprovost.com',
    title: 'Lucas Provost — Brand Designer',
    description: 'Identité visuelle & branding.',
    images: [{ url: 'https://www.lucasprovost.com/og/og-default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas Provost — Brand Designer',
    description: 'Identité visuelle & branding.',
    images: ['https://www.lucasprovost.com/og/og-default.jpg'],
  },
  alternates: { canonical: 'https://www.lucasprovost.com/' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
