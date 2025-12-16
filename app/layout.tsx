import type { Metadata } from "next";
import { Outfit, Instrument_Sans, } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from 'sonner'

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

export const clashDisplay = localFont({
  src: [
    {
      path: '../public/fonts/ClashDisplay-Bold.otf',
      weight: '700',
      style: 'bold'
    },
    {
      path: '../public/fonts/ClashDisplay-Semibold.otf',
      weight: '600',
      style: 'semi-bold'
    },
    {
      path: '../public/fonts/ClashDisplay-Medium.otf',
      weight: '500',
      style: 'medium'
    },
    {
      path: '../public/fonts/ClashDisplay-Regular.otf',
      weight: '400',
      style: 'regular'
    },
    {
      path: '../public/fonts/ClashDisplay-Light.otf',
      weight: '300',
      style: 'light'
    },
    {
      path: '../public/fonts/ClashDisplay-Extralight.otf',
      weight: '200',
      style: 'extralight'
    },
  ],
  display: 'swap',
  variable: '--font-clash-display'
});

export const metadata: Metadata = {
  title: "Novacrust",
  description: "Crypto to cash transactions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${instrumentSans.variable} ${clashDisplay.variable}`}>
      <body className="antialiased">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
