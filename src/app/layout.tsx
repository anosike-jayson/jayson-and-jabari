"use client";

import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Jayson And Jabari",
//   description: "A shoe retail store",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}