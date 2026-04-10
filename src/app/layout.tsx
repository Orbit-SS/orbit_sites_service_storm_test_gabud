import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Gabud Monastery — A Place of Stillness & Contemplation",
  description:
    "Gabud Monastery invites you into a life of silence, prayer, and renewal. Nestled in the mountains, our community welcomes pilgrims, retreatants, and seekers of all backgrounds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable, playfair.variable)}>
      <body>{children}</body>
    </html>
  );
}
