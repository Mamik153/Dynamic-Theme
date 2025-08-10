/**
 * Default Font Configuration
 * 
 * This file defines the default font used when no institution-specific font is available
 * or when the ThemeProvider falls back due to loading errors.
 * 
 * Font: Roboto - A clean, modern sans-serif font that works well for most applications
 * Use case: Fallback font and default institution styling
 */

import { Roboto } from "next/font/google";

/**
 * Roboto Font Configuration
 * 
 * Roboto is chosen as the default font because:
 * - Excellent readability across all screen sizes
 * - Wide character support for international content
 * - Professional appearance suitable for institutional applications
 * - Well-optimized by Google Fonts
 * 
 * Configuration:
 * - subsets: ["latin"] - Includes Latin character set (covers English and most European languages)
 * - weight: Multiple weights for design flexibility (light to bold)
 * - variable: CSS custom property name for dynamic theme integration
 */
const roboto = Roboto({
  subsets: ["latin"], // Character subset - add more as needed (e.g., "latin-ext", "cyrillic")
  weight: ["400", "500", "600", "700"], // Font weights: normal, medium, semi-bold, bold
  variable: "--font-default", // CSS variable name used in theme configurations
});

/**
 * Export the configured font object
 * 
 * This font object contains:
 * - className: CSS class name for applying the font
 * - variable: CSS custom property for dynamic theming
 * - style: Font style object for Next.js optimization
 * 
 * Usage in ThemeProvider:
 * - font.variable: Used to set CSS custom property
 * - font.className: Applied to components for proper font loading
 */
export const font = roboto;
