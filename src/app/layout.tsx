import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";

const montserrat: ReturnType<typeof Montserrat> = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lato: ReturnType<typeof Lato> = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "#Janetheglory",
  description: "QA Engineer | FE Engineer - 15+ Years Experience in Quality Innovation",
  openGraph: {
    title: "#Janetheglory",
    description: "QA Engineer | FE Engineer - 15+ Years Experience in Quality Innovation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "#Janetheglory",
    description: "QA Engineer | FE Engineer - 15+ Years Experience in Quality Innovation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${lato.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
