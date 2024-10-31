import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import { NextUIProvider } from '@nextui-org/react';

import "./globals.css";
import 'react-circular-progressbar/dist/styles.css';

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        <NextUIProvider>
        {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
