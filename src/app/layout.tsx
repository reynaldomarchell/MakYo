import type { Metadata } from "next";
import { inter, magra, linden_hill, mulish, lexend_deca } from "@/util/font";
import "./globals.css";
import Provider from "@/util/Provider";

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
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
