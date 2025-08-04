import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|.*\\..*).*)", // handles everything except system files
    "/(en|id)/:path*", // also allow localized paths
  ],
};
