import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter: ReturnType<typeof Inter> = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono: ReturnType<typeof JetBrains_Mono> = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "#Janetheglory",
  description: "QA Engineer | FE Engineer - 15+ Years Experience in Quality Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
