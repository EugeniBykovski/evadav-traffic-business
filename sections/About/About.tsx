"use client";

import Subtitle from "@/components/Subtitle/Subtitle";
import { FC } from "react";

const AboutSection: FC = () => {
  return (
    <div className="p-20 bg-[#f9f9f9]">
      <Subtitle>Who We Are</Subtitle>
      <p className="text-[#373168] md:px-48 text-md tracking-wide">
        WARTRAF is a dynamic company specializing in innovative traffic
        solutions. With a team of experts in various fields, we strive to
        provide top-notch services that help businesses grow and succeed in the
        digital world.
      </p>
    </div>
  );
};

export default AboutSection;
