import type { Metadata } from "next";
import { Bebas_Neue, Rajdhani, Space_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-primary",
  display: "swap",
});

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani-primary",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-primary",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VEXFORM Agency | AI Web Design",
  description: "Built to convert. Launch in days. Web that works.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${rajdhani.variable} ${spaceMono.variable}`}>
      <body className="font-rajdhani bg-black text-white antialiased overflow-x-hidden cursor-none selection:bg-acid selection:text-black">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
