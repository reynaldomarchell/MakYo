import type { Metadata } from "next";
import {
  Inter,
  Magra,
  Linden_Hill,
  Mulish,
  Lexend_Deca,
} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const magra = Magra({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-magra",
});

const linden_hill = Linden_Hill({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-linden_hill",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  variable: "--font-mulish",
});

const lexend_deca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-lexend_deca",
});

export const metadata: Metadata = {
  title: "MakYo",
  description: "Best Quality E-Commerce in the World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${magra.variable} ${linden_hill.variable} ${mulish.variable} ${lexend_deca.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
