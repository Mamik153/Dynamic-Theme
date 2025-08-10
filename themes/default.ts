/**
 * Default Theme Configuration
 * 
 * This file defines the default theme used when no institution-specific theme
 * is available or when the ThemeProvider falls back due to loading errors.
 * 
 * Design philosophy: Clean, neutral, and professional
 * Use case: Fallback theme and default institution styling
 * Color palette: Neutral grays with high contrast for accessibility
 */

/**
 * Default Theme Object
 * 
 * This theme provides a safe, accessible default that works well in any context:
 * 
 * Colors:
 * - primary: Dark gray (#333) - Professional, neutral tone
 * - background: Pure white (#ffffff) - Clean, accessible background
 * - text: Dark gray (#111827) - High contrast for excellent readability
 * 
 * Font:
 * - Uses CSS custom property that links to the default Roboto font
 * - Ensures consistent typography even in fallback scenarios
 * 
 * Accessibility:
 * - High contrast ratios exceed WCAG AA standards
 * - Neutral colors work for all users regardless of color preferences
 * - Professional appearance suitable for any institution type
 */
export const theme = {
  // Font CSS custom property linking to default Roboto configuration
  font: "--font-default",
  
  // Color palette optimized for accessibility and professionalism
  colors: {
    primary: "#333",      // Dark gray - versatile primary color
    background: "#ffffff", // Pure white - clean, accessible background
    text: "#111827",      // Near-black - excellent readability and contrast
  },
};
