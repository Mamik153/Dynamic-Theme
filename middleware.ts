import { NextRequest, NextResponse } from "next/server";

/**
 * Institution Detection Middleware
 * 
 * This middleware automatically detects which institution/organization theme should be applied
 * based on the incoming request. It supports multiple detection methods with fallback hierarchy:
 * 
 * Detection Priority:
 * 1. Existing cookie value (highest priority)
 * 2. Development: Query parameter (?host=institution-name)
 * 3. Production: Subdomain extraction (institution.yourdomain.com)
 * 4. Default fallback
 * 
 * The detected institution name is stored in a cookie for subsequent requests,
 * enabling consistent theming across the user session.
 * 
 * @param request - The incoming Next.js request object
 * @returns Response with institution cookie set
 */
export function middleware(request: NextRequest) {
  // Extract the hostname from request headers
  // This contains the full domain (e.g., "institution-1.myapp.com" or "localhost:3000")
  const hostname = request.headers.get("host") || "";
  
  // Remove the main domain to extract potential subdomain/institution identifier
  // TODO: Update ".myapp.com" to your actual production domain
  const currentHost = hostname.replace(".myapp.com", "");

  // Get the URL object for query parameter access
  const url = request.nextUrl;

  // PRIORITY 1: Check if institution is already stored in cookies
  // This ensures consistency across page navigations within the same session
  const cookieInstitution = request.cookies.get("institution")?.value;

  // Initialize institution variable with cookie value if available
  let institution = cookieInstitution;

  // PRIORITY 2: Development Environment - Query Parameter Detection
  // When running locally (localhost), use ?host=institution-name query parameter
  // Example: http://localhost:3000?host=institution-1
  // This allows easy testing of different institution themes during development
  if (!institution && hostname.includes("localhost")) {
    institution = url.searchParams.get("host") || "default";
  }

  // PRIORITY 3: Production Environment - Subdomain Detection
  // Extract institution name from subdomain in production
  // Example: institution-1.myapp.com → "institution-1"
  //          myapp.com → "default"
  if (!institution && !hostname.includes("localhost")) {
    institution = hostname.split(".")[0] || "default";
  }

  // Debug logging (uncomment for troubleshooting)
  // Useful for debugging institution detection issues
  //console.log("🧠 Host header:", hostname);
  //console.log("🍪 Cookie institution:", cookieInstitution);
  //console.log("🏫 Final institution to use:", institution);

  // Create response and set the institution cookie
  const response = NextResponse.next();
  
  // Store the detected institution in a cookie for subsequent requests
  // This ensures the theme persists across page navigations and refreshes
  // The cookie will be accessible to the ThemeProvider component
  response.cookies.set("institution", currentHost || "default");
  
  return response;
}

/**
 * Middleware Configuration
 * 
 * Defines which routes this middleware should run on.
 * Currently configured to run on:
 * - Root path (/)
 * - All routes except Next.js internal routes (_next) and favicon.ico
 * 
 * This ensures institution detection happens on every page load while
 * avoiding unnecessary processing for static assets and internal routes.
 */
export const config = {
  matcher: ["/", "/((?!_next|favicon.ico).*)"],
};
