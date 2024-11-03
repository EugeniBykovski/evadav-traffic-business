"use client";

import { FC, memo } from "react";
import Navigation from "@/components/Navigation/Navigation";
import { Progress } from "@/components/ui/progress";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const Header: FC = memo(() => {
  const scrollProgress = useScrollProgress();

  return (
    <header className="sticky top-0 backdrop-blur-lg z-20 shadow-sm">
      <Navigation />
      <Progress
        value={scrollProgress}
        className="h-[1.5px] w-full fixed top-22 left-0 bg-transparent"
      />
    </header>
  );
});

Header.displayName = "Header";

export default Header;
