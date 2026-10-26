import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: {
    default: "Mitali Yadav — UX Designer",
    template: "%s — Mitali Yadav",
  },
  description:
    "Portfolio of Mitali Yadav, UX designer. Case studies: the shop., Siemens Icons AI Agent, Prayan, Godrej CRM and Ritual.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
