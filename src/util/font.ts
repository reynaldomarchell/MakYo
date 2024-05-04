import {
  Inter,
  Magra,
  Linden_Hill,
  Mulish,
  Lexend_Deca,
} from "next/font/google";

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

export { inter, magra, linden_hill, mulish, lexend_deca };
