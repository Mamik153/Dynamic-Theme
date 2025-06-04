import { Roboto } from "next/font/google";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-default",
});

export const font = roboto;
