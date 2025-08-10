/**
 * Institution-2 Font Configuration
 * 
 * This file defines the font styling for Institution-2, emphasizing clarity,
 * professionalism, and excellent readability across all device types.
 * 
 * Font: Poppins - A versatile geometric sans-serif font
 * Use case: Institution-2 branding and comprehensive text hierarchy
 * Brand personality: Professional, clean, modern, accessible
 */

import { Poppins } from "next/font/google";

/**
 * Poppins Font Configuration
 * 
 * Poppins is selected for Institution-2 because:
 * - Geometric sans-serif design that appears modern and professional
 * - Excellent readability at all sizes (body text to large headings)
 * - Wide range of weights for comprehensive typographic hierarchy
 * - International character support for global accessibility
 * - Clean, neutral design that works well with yellow accent color (#efcc00)
 * 
 * Configuration:
 * - subsets: Extended Latin character support for international content
 * - weight: Complete weight range from normal to bold
 * - variable: Institution-specific CSS custom property
 * 
 * Typography hierarchy recommendations:
 * - 700 (Bold): Main headings, important CTAs
 * - 600 (Semi-bold): Subheadings, section titles
 * - 500 (Medium): Navigation, labels, emphasized text
 * - 400 (Regular): Body text, paragraphs, general content
 */
export const poppins = Poppins({
  subsets: ["latin", "latin-ext"], // Extended Latin support for international characters
  weight: ["400", "500", "600", "700"], // Complete weight range for typography hierarchy
  variable: "--font-institution-2", // CSS variable for Institution-2 theme
});

/**
 * Export the configured font object
 * 
 * This comprehensive font configuration provides Institution-2 with:
 * - Professional, clean typography that enhances readability
 * - Multiple weights for creating clear information hierarchy
 * - International character support for global accessibility
 * - Seamless integration with the yellow accent color scheme
 * 
 * Integration with theme:
 * - Complements the Institution-2 color palette (yellow #efcc00)
 * - Provides excellent contrast and readability
 * - Automatically applied when ?host=institution-2 is detected
 * - Maintains brand consistency across all text elements
 */
export const font = poppins;
