import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-care",
});

export const font = poppins;
