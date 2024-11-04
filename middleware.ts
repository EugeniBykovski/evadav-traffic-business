import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const supportedLocales = ["en", "pl"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathLocale = pathname.split("/?lang=")[1];

  if (!supportedLocales.includes(pathLocale)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next|api|favicon.ico).*)",
};
