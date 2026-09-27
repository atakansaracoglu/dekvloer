import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PasswordGate from "@/components/PasswordGate";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DekvloerExpert | Specialist in Zandcementdekvloeren",
  description:
    "DekvloerExpert is uw specialist in zandcementdekvloeren door heel Nederland. Voor particulieren en aannemers. Vraag direct een vrijblijvende offerte aan.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "DekvloerExpert | Specialist in Zandcementdekvloeren",
    description: "Zandcementdekvloer laten leggen? DekvloerExpert staat voor je klaar. Door heel Nederland.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <PasswordGate>
          <PageTransition>{children}</PageTransition>
        </PasswordGate>
      </body>
    </html>
  );
}
