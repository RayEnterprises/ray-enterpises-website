import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, pathnames } from "./navigation";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|styles|favicon.ico|videos|public|next.svg|dashboard).*)",
  ],
};

export default createMiddleware({
  defaultLocale: "en",
  localePrefix,
  locales,
  pathnames,
});
