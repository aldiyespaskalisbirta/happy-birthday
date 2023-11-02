import type { Metadata } from "next";
import { Engagement } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const engagement = Engagement({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Happy Birthday",
  description: "Maria Novia Delviyanti",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${engagement.className} bg-pink-300 max-h-screen overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
