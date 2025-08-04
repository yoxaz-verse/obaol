export const config = {
  matcher: [
    "/",
    "/((?!api|_next|_vercel|.*\\..*|overview|onboarding|automate|gain|cardamom).*)",
    "/(en|id)/:path*",
  ],
};
