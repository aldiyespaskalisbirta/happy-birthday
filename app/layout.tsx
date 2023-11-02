import type { Metadata } from "next";
import { Engagement } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { ConfettiProvider } from "@/components/providers/confetti-provider";

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
        <ConfettiProvider />
        {children}
      </body>
    </html>
  );
}
