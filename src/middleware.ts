// src/middleware.ts

import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/", // root
    "/((?!api|_next|_vercel|.*\\..*).*)", // everything else
    "/(en|id)/:path*", // locale-prefixed paths
  ],
};
