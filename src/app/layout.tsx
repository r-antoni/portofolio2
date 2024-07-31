import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400","500","600", "700", "800"], 
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Reindra Antoni's Portofolio",
  description: "Modern and minimalist website created to showcase Reindra Antoni's works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} overflow-y-scroll overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
