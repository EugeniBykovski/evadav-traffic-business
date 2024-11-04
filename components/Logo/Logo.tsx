"use client";

import { FC, memo } from "react";
import Link from "next/link";
import { LogoImg } from "@/assets";

import Image from "next/image";

const Logo: FC = memo(() => (
  <Link href={"/"}>
    <Image
      src={LogoImg}
      alt="logo"
      className="hover:opacity-85 transition w-16 h-16"
    />
  </Link>
));

Logo.displayName = "Logo";

export default Logo;
