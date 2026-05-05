import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import { CustomCursor } from "@/components/CustomCursor";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Shashank Gupta | Backend Engineer",
  description:
    "Portfolio of Shashank Gupta, a backend engineer building high-throughput backends, real-time pipelines, and AI systems.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable} bg-[#0a0a0a] text-[#f0f0f0]`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
