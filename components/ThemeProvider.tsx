"use client";

import { ReactNode, useEffect, useState } from "react";
import { theme as defaultTheme } from "@/themes/default";
import { font as defaultFont } from "@/fonts/default";
import Cookies from "js-cookie";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // const institution = Cookies.get("institution")
  const institution = "bajaj";
  //console.log("institution", institution);

  const [theme, setTheme] = useState(defaultTheme);
  const [font, setFont] = useState(defaultFont);

  useEffect(() => {
    import(`@/themes/${institution}`)
      .then((mod) => {
        setTheme(mod.theme);

        // 🧠 Dynamically inject CSS vars
        const root = document.documentElement;
        Object.entries(mod.theme.colors).forEach(([key, value]: any) => {
          root.style.setProperty(`--${key}`, value);
        });
      })
      .catch(() => {
        setTheme(defaultTheme);
      });

    import(`@/fonts/${institution}`)
      .then((mod) => {
        setFont(mod.font);
      })
      .catch(() => {
        setFont(defaultFont);
      });
  }, []);

  const dynamicClasses = `${font.variable} ${font.className} bg-[${theme.colors.background}] text-[${theme.colors.text}] font-[family-name:var(${theme.font})]`;

  return <div className={dynamicClasses}>{children}</div>;
};
