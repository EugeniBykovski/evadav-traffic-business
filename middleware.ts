import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { nextUrl, cookies } = req;

  if (
    nextUrl.pathname.startsWith("/_next") ||
    nextUrl.pathname.includes("/api/") ||
    /\.(.*)$/.test(nextUrl.pathname)
  ) {
    return NextResponse.next();
  }

  const locale =
    nextUrl.locale !== "default"
      ? nextUrl.locale
      : cookies.get("NEXT_LOCALE")?.value || "en";
  if (locale !== nextUrl.locale) {
    return NextResponse.redirect(
      new URL(`/${locale}${nextUrl.pathname}${nextUrl.search}`, req.url)
    );
  }

  return NextResponse.next();
}
