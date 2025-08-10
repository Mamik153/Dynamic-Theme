"use client";

import { ReactNode, useEffect, useState } from "react";
import { theme as defaultTheme } from "@/themes/default";
import { font as defaultFont } from "@/fonts/default";
import Cookies from "js-cookie";

/**
 * Dynamic Theme Provider Component
 * 
 * This component is responsible for dynamically loading and applying institution-specific
 * themes and fonts based on the detected institution. It serves as the core of the
 * dynamic theming system.
 * 
 * Key Features:
 * - Dynamic theme loading based on institution detection
 * - CSS custom properties injection for seamless Tailwind integration
 * - Font loading with institution-specific configurations
 * - Graceful fallback to default theme/font on errors
 * - Real-time theme switching without page reload
 * 
 * How it works:
 * 1. Reads institution identifier from cookies (set by middleware)
 * 2. Dynamically imports corresponding theme and font modules
 * 3. Injects CSS custom properties into document root
 * 4. Applies theme classes to the component wrapper
 * 
 * @param children - React child components to be wrapped with theme context
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // INSTITUTION DETECTION
  // Read institution identifier from cookie set by middleware
  // For development/testing, you can hardcode a specific institution:
  // const institution = Cookies.get("institution") || "default";
  const institution = "institution-1"; // Hardcoded for demo - remove in production
  
  // THEME STATE MANAGEMENT
  // Initialize with default theme to prevent flash of unstyled content
  const [theme, setTheme] = useState(defaultTheme);
  const [font, setFont] = useState(defaultFont);

  // DYNAMIC THEME LOADING EFFECT
  // This effect runs when the component mounts and loads the appropriate
  // theme and font configurations based on the detected institution
  useEffect(() => {
    // DYNAMIC THEME IMPORT
    // Attempt to load institution-specific theme configuration
    // The import path is dynamically constructed: @/themes/${institution}.ts
    import(`@/themes/${institution}`)
      .then((mod) => {
        // Successfully loaded institution theme
        setTheme(mod.theme);

        // CSS CUSTOM PROPERTIES INJECTION
        // This is the magic that enables Tailwind CSS to use dynamic colors
        // We inject CSS custom properties into the document root (:root)
        const root = document.documentElement;
        
        // Iterate through theme colors and set CSS custom properties
        // Example: { primary: "#0041c2" } becomes --primary: #0041c2
        Object.entries(mod.theme.colors).forEach(([key, value]: any) => {
          root.style.setProperty(`--${key}`, value);
        });
      })
      .catch(() => {
        // FALLBACK HANDLING - Theme loading failed
        // This could happen if:
        // 1. Theme file doesn't exist for the institution
        // 2. Network error during dynamic import
        // 3. Invalid theme file structure
        console.warn(`Failed to load theme for institution: ${institution}. Using default theme.`);
        setTheme(defaultTheme);
      });

    // DYNAMIC FONT IMPORT
    // Similar to theme loading, but for institution-specific fonts
    // The import path is dynamically constructed: @/fonts/${institution}.ts
    import(`@/fonts/${institution}`)
      .then((mod) => {
        // Successfully loaded institution font configuration
        setFont(mod.font);
      })
      .catch(() => {
        // FALLBACK HANDLING - Font loading failed
        // Fall back to default font if institution-specific font fails to load
        console.warn(`Failed to load font for institution: ${institution}. Using default font.`);
        setFont(defaultFont);
      });
  }, [institution]); // Re-run effect if institution changes

  // DYNAMIC CLASS CONSTRUCTION
  // Build the CSS classes that will be applied to the wrapper div
  // This includes:
  // - Font variable CSS custom property
  // - Font className for proper loading
  // - Background color using Tailwind's arbitrary value syntax
  // - Text color using Tailwind's arbitrary value syntax  
  // - Font family using CSS custom property
  const dynamicClasses = `${font.variable} ${font.className} bg-[${theme.colors.background}] text-[${theme.colors.text}] font-[family-name:var(${theme.font})]`;

  // THEME WRAPPER
  // Render children within the themed wrapper div
  // All child components will inherit the theme context through CSS cascade
  return <div className={dynamicClasses}>{children}</div>;
};
