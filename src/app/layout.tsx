import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import { HeroUIProvider } from '@heroui/react';

import "./globals.css";
import 'react-circular-progressbar/dist/styles.css';
import { Toaster } from "react-hot-toast";
import Head from 'next/head';

// Load Montserrat and Roboto from Google Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"], // Specify the weights you want
  variable: "--font-montserrat",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"], // Specify the weights you want
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Tadashi Portfolio",
  description:
    "Tadashi Amano Portfolio using Next.js. Full Stack Developer Ready !! ",
  icons: {
    icon: '/profile.png'
  },
  creator: 'Tadashi Amano',
  keywords: 'Portfolio, Full Stack, Development, Freelance, Tadashi, Amano, Frontend, Backend, Design, Web3, Crypto',
  abstract: 'Tadashi Amano Portfolio',
  applicationName: 'shinobi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <Head>
        <meta name="description" content="Tadashi Amano Portfolio using Next.js. Full Stack Developer Ready !! " />
        <meta property="og:title" content="Tadashi Portfolio" />
        <meta property="og:description" content="Tadashi Amano Portfolio using Next.js. Full Stack Developer Ready !! " />
        <meta property="og:image" content="https://i.postimg.cc/J0YgDV6Y/1729103170256.jpg" />
        <meta property="og:url" content="https://tadashiamano.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tadashi Portfolio" />
        <meta name="twitter:description" content="Tadashi Amano Portfolio using Next.js. Full Stack Developer Ready !! " />
        <meta name="twitter:image" content="https://i.postimg.cc/J0YgDV6Y/1729103170256.jpg" />
        <link rel="icon" href="/profile.png" />
      </Head>
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        <HeroUIProvider>
          {children}
          <Toaster position="top-right" containerClassName="font-mont" />
        </HeroUIProvider>
      </body>
    </html>
  );
}
