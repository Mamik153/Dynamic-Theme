import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const currentHost = hostname.replace(".myapp.com", ""); // adjust domain if needed

  const url = request.nextUrl;

  // Try to get cookie first
  const cookieInstitution = request.cookies.get("institution")?.value;

  let institution = cookieInstitution;

  // Local dev fallback using query param
  if (!institution && hostname.includes("localhost")) {
    institution = url.searchParams.get("host") || "default";
  }

  // Prod subdomain check
  if (!institution && !hostname.includes("localhost")) {
    institution = hostname.split(".")[0] || "default";
  }

  //console.log("🧠 Host header:", hostname);
  //console.log("🍪 Cookie institution:", cookieInstitution);
  //console.log("🏫 Final institution to use:", institution);

  const response = NextResponse.next();
  response.cookies.set("institution", currentHost || "default");
  return response;
}

export const config = {
  matcher: ["/", "/((?!_next|favicon.ico).*)"],
};
