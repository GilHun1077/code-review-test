import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "gilhun.dev",
    template: "%s | gilhun.dev",
  },
  description: "gilhun의 개인 블로그 - 개발, 생각, 기록",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-white dark:bg-gray-950 min-h-screen`}>
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
