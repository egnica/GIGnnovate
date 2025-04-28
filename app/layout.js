import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import { motion } from "motion/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GIGnnovate",
  description: "GIGnnovate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.navContain}>
          <h1>GIGnnovate</h1>
          <div className={styles.headerBtn}>CALL TO ACTION</div>
        </div>
        {children}
      </body>
    </html>
  );
}
