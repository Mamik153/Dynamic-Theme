/**
 * Institution-1 Theme Configuration
 * 
 * This file defines the visual identity for Institution-1, creating a distinctive
 * brand experience through carefully selected colors and typography.
 * 
 * Brand identity: Trust, professionalism, innovation
 * Color story: Deep blue conveys reliability and expertise
 * Use case: Financial services, healthcare, technology, education
 */

/**
 * Institution-1 Theme Object
 * 
 * Color Psychology & Brand Strategy:
 * 
 * Primary Blue (#0041c2):
 * - Psychological associations: Trust, stability, professionalism, expertise
 * - Industry applications: Perfect for financial, healthcare, or educational institutions
 * - Accessibility: Provides excellent contrast against white backgrounds
 * - Brand differentiation: Distinctive from default theme while maintaining professionalism
 * 
 * Supporting Colors:
 * - background: Clean white maintains readability and modern aesthetic
 * - text: Dark gray ensures accessibility compliance (WCAG AA)
 * 
 * Font Integration:
 * - Links to Aclonica font for modern, approachable typography
 * - Rounded font characters complement the trustworthy blue color
 * - Creates cohesive brand experience across all text elements
 * 
 * Usage Examples:
 * - Primary buttons: Blue background with white text
 * - Headers: Dark text with blue accents
 * - Links: Blue color for interactive elements
 * - Branding: Blue for logos, banners, and institutional elements
 */
export const theme = {
  // Font CSS custom property linking to Institution-1's Aclonica font
  font: "--font-institution-1",
  
  // Institution-1 color palette emphasizing trust and professionalism
  colors: {
    primary: "#0041c2",    // Deep blue - trust, stability, professional authority
    background: "#ffffff", // Pure white - clean, modern, accessible
    text: "#111827",       // Dark gray - excellent readability and contrast
  },
};
