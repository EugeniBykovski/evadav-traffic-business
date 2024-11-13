import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
import Header from "@/sections/Header/Header";
import Footer from "@/sections/Footer/Footer";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LanguageProvider } from "@/contexts/LanguageProvider";
import { Suspense } from "react";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Innovative Solutions for Your Business",
  description: "Innovative Solutions for Your Business",
  icons: {
    icon: "/assets/icons/logos/logo.svg",
    shortcut: "/assets/icons/logos/logo.svg",
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
    <html className="relative" lang={locale}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <body className={clsx(dmSans.className, "antialiased")}>
        <Suspense fallback={<div>Loading...</div>}>
          <LanguageProvider>
            <NextIntlClientProvider messages={messages} locale={locale}>
              <ToastContainer position="bottom-right" />
              <Header />
              <main className="w-[100%] mx-auto gap-x-2 min-h-[calc(100vh-3.5rem-1px)] my-4 container text-center">
                {children}
              </main>
              <Footer />
            </NextIntlClientProvider>
          </LanguageProvider>
        </Suspense>
      </body>
    </html>
  );
}
