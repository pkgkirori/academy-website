import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeLab Hisar | Coding Coaching Centre in Hisar",
  description:
    "CodeLab Hisar is a coding coaching centre in Hisar, Haryana. Learn Full-Stack Web Dev, DSA, Python/AI/ML, and C/C++. Get career guidance and land your first software job.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased bg-white text-gray-800`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
