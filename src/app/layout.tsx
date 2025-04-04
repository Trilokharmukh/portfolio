import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Trilok Harmukh | Frontend Developer",
  description:
    "I am a Front End Developer, I have strong skills in Vue.js, Nuxt.js, React, and Next.js, which help me build user-friendly and responsive websites and Improve SEO, Web performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
