import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
import Header from "@/sections/Header/Header";
import Footer from "@/sections/Footer/Footer";
import Head from "next/head";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Some App",
  description: "Some App",
  icons: {
    icon: "/assets/icons/Icon.svg",
    shortcut: "/assets/icons/Icon.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="relative">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <body className={clsx(dmSans.className, "antialiased")}>
        <NextIntlClientProvider messages={messages}>
          <main className="w-[100%] container mx-auto">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
