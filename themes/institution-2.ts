/**
 * Institution-2 Theme Configuration
 * 
 * This file defines the visual identity for Institution-2, featuring a bold,
 * energetic color palette that conveys optimism, creativity, and innovation.
 * 
 * Brand identity: Energy, creativity, innovation, accessibility
 * Color story: Vibrant yellow creates warmth and positive associations
 * Use case: Creative agencies, educational institutions, wellness organizations, tech startups
 */

/**
 * Institution-2 Theme Object
 * 
 * Color Psychology & Brand Strategy:
 * 
 * Primary Yellow (#efcc00):
 * - Psychological associations: Optimism, creativity, energy, intelligence, warmth
 * - Industry applications: Ideal for creative, educational, or wellness-focused institutions
 * - Accessibility considerations: High luminance requires careful contrast management
 * - Brand differentiation: Bold, memorable color that stands out in competitive markets
 * 
 * Supporting Colors:
 * - background: Clean white provides necessary contrast for yellow elements
 * - text: Dark gray ensures readability when used with yellow backgrounds
 * 
 * Font Integration:
 * - Links to Poppins font for clean, geometric typography
 * - Modern sans-serif complements the contemporary yellow branding
 * - Multiple font weights support clear hierarchy with bold color accents
 * 
 * Usage Examples:
 * - Primary buttons: Yellow background with dark text for accessibility
 * - Accent elements: Yellow highlights, badges, and call-to-action elements
 * - Branding: Yellow for logos, banners, and key institutional elements
 * - Interactive states: Yellow hover states and focus indicators
 * 
 * Accessibility Notes:
 * - Yellow works best as accent color, not for large text areas
 * - Always pair with dark text (current #111827) for proper contrast
 * - Consider yellow backgrounds only for brief content or decorative elements
 */
export const theme = {
  // Font CSS custom property linking to Institution-2's Poppins font
  font: "--font-institution-2",
  
  // Institution-2 color palette emphasizing energy and creativity
  colors: {
    primary: "#efcc00",    // Vibrant yellow - energy, creativity, optimism, innovation
    background: "#ffffff", // Pure white - clean contrast for yellow elements
    text: "#111827",       // Dark gray - ensures readability with yellow accents
  },
};
