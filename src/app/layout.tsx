import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/context/Providers";
import SessionWrapper from "@/context/SessionWrapper";
import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    // </SessionWrapper>
  );
}
