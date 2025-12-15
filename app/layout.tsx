import type { Metadata } from "next";
import { Outfit, Instrument_Sans, Clash_Display } from "next/font/google";
import "./globals.css";

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

// const clashdisplay = Clash_D

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
    <html lang="en" className={`${outfit.variable} ${instrumentSans.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
