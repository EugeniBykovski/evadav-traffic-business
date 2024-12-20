"use client";

import { FC, memo } from "react";
import { SubtitleProps } from "./types";
import clsx from "clsx";

const Subtitle: FC<SubtitleProps> = memo(({ children, className }) => (
  <h2
    className={clsx(
      "text-center mb-10 text-3xl font-extrabold text-[#373168]",
      className
    )}
  >
    {children}
  </h2>
));

Subtitle.displayName = "Subtitle";

export default Subtitle;
