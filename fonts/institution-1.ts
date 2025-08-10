/**
 * Institution-1 Font Configuration
 * 
 * This file defines the font styling for Institution-1, creating a unique
 * typographic identity that aligns with the institution's brand.
 * 
 * Font: Aclonica - A distinctive rounded display font
 * Use case: Institution-1 branding and visual identity
 * Brand personality: Modern, approachable, creative
 */

import { Aclonica } from "next/font/google";

/**
 * Aclonica Font Configuration
 * 
 * Aclonica is chosen for Institution-1 because:
 * - Rounded, friendly appearance that conveys approachability
 * - Modern sans-serif design suitable for digital interfaces
 * - Distinctive character that helps differentiate the institution
 * - Good readability while maintaining personality
 * 
 * Configuration:
 * - subsets: ["latin"] - Basic Latin character support
 * - weight: ["400"] - Single weight (Aclonica is designed as a display font)
 * - variable: Institution-specific CSS custom property
 * 
 * Note: Aclonica is primarily a display font, so it works best for:
 * - Headers and titles
 * - Logo text
 * - Call-to-action buttons
 * - Short text elements
 */
const aclonica = Aclonica({
  subsets: ["latin"], // Character subset for Latin languages
  weight: ["400"], // Normal weight (Aclonica doesn't have multiple weights)
  variable: "--font-institution-1", // CSS variable for Institution-1 theme
});

/**
 * Export the configured font object
 * 
 * This font configuration will be dynamically loaded by the ThemeProvider
 * when Institution-1 is detected. The font object includes all necessary
 * properties for Next.js font optimization and CSS integration.
 * 
 * Integration with theme:
 * - Matches the Institution-1 color scheme (blue #0041c2)
 * - Provides brand consistency across the application
 * - Automatically applied when ?host=institution-1 is detected
 */
export const font = aclonica;
