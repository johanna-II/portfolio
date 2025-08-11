import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter: ReturnType<typeof Inter> = Inter({
  subsets: ["latin"],
});

const jetbrainsMono: ReturnType<typeof JetBrains_Mono> = JetBrains_Mono({
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
        className={`${inter.className} ${jetbrainsMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
