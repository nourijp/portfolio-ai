import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamed Nouri — AI Automation & Communications Specialist",
  description: "Portfolio for Hamed Nouri covering AI automation, technical workflows, and product communications. Based in Denton, TX.",
  openGraph: {
    images: [
      {
        url: "https://ai.hamednouri.com/images/home/banner/banner-img.png",
        width: 1200,
        height: 630,
        alt: "Hamed Nouri - AI Automation & Communications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://ai.hamednouri.com/images/home/banner/banner-img.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
