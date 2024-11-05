"use client";

import { FC, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navigationMenuHome } from "@/data/mock-data";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { INavigationProps } from "./types";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import Logo from "../Logo/Logo";
import { Skeleton } from "../ui/skeleton";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { handleSmoothScroll } from "@/lib/utils";

const Navigation: FC<INavigationProps> = ({ className }) => {
  const t = useTranslations("navigation");

  const [isPageLoaded, setIsPageLoaded] = useState(false);
  useEffect(() => setIsPageLoaded(true), []);

  return (
    <div className={twMerge("py-1", className)}>
      <div className="container">
        <div className="flex justify-between items-center">
          {isPageLoaded ? (
            <Logo />
          ) : (
            <Skeleton className="w-16 h-14 rounded-md" />
          )}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-4 text-black/60 items-center">
              {isPageLoaded
                ? navigationMenuHome.map(({ label, href }) => (
                    <Link key={href} href={href} legacyBehavior passHref>
                      <NavigationMenuLink
                        onClick={(e) => handleSmoothScroll(e, href)}
                        className={twMerge(
                          "hover:opacity-80 transition text-md text-[#373168] hover:text-[#26c0a9]",
                          className
                        )}
                      >
                        {t(label.toLowerCase())}
                      </NavigationMenuLink>
                    </Link>
                  ))
                : [...Array(navigationMenuHome.length)].map((_, index) => (
                    <Skeleton key={index} className="w-14 h-8 rounded-md" />
                  ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="sm:hidden md:block">
            {isPageLoaded ? (
              <LanguageSwitcher />
            ) : (
              <Skeleton className="w-16 h-10 rounded-md" />
            )}
          </div>
          {isPageLoaded && (
            <Sheet>
              <SheetTrigger className="md:hidden">
                <Menu className="text-[#26c0a9]" size={26} />
              </SheetTrigger>
              <SheetContent className="top-0 mt-0 ml-[30%] p-4 rounded-t-none border-none rounded-[10px] remove-close-btn">
                <SheetHeader>
                  <div className="flex justify-between items-center">
                    <Logo />
                  </div>
                  <Separator className="h-[1px] opacity-5 mt-4 bg-zinc-800" />
                </SheetHeader>
                <SheetDescription>
                  <div className="mt-4 flex flex-col gap-1.5">
                    {navigationMenuHome.map(({ label, href }) => (
                      <Link
                        key={href}
                        href={href}
                        passHref
                        onClick={(e) => handleSmoothScroll(e, href)}
                      >
                        <Button
                          variant="ghost"
                          className=" text-black/60 hover:text-[#373168]"
                        >
                          {t(label.toLowerCase())}
                        </Button>
                      </Link>
                    ))}
                  </div>
                  <Separator className="h-[1px] opacity-5 mt-4 bg-zinc-800" />
                  <div className=" mt-8 w-16">
                    <LanguageSwitcher />
                  </div>
                </SheetDescription>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
