"use client";

import { FC, memo } from "react";
import Link from "next/link";
import { LogoIcon } from "@/assets";

const Logo: FC = memo(() => (
  <Link href={"/"}>
    <LogoIcon className="hover:opacity-85 transition" />
  </Link>
));

Logo.displayName = "Logo";

export default Logo;
