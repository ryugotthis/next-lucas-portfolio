import type { Metadata } from 'next';
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

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="preload"
          href="/font/Sk-Modernist.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <link
          rel="preload"
          href="/font/Sk-Modernist-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
