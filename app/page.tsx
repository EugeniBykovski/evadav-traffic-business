"use client";

import { FC, memo } from "react";
import SolutionSection from "@/sections/Solution/Solution";
import AboutSection from "@/sections/About/About";
import ServicesSection from "@/sections/Services/Services";
import ContactSection from "@/sections/Contact/Contact";

const Home: FC = memo(() => {
  return (
    <>
      <SolutionSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
});

Home.displayName = "Home";

export default Home;
