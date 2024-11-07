"use client";

import { FC, memo } from "react";
import { servicesData } from "@/data/mock-data";
import { iconMap } from "./types";
import Subtitle from "@/components/Subtitle/Subtitle";
import { useTranslations } from "next-intl";

const ServicesSection: FC = memo(() => {
  const t = useTranslations("services-section");

  return (
    <section id="services" className="py-12">
      <Subtitle> {t("title")}</Subtitle>

      <div>
        {servicesData.map((service, index) => {
          const Icon = iconMap[service.icon];

          return (
            <div
              key={service.title}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center bg-purple-100 shadow-md`}
            >
              <div className="w-full md:w-1/2 h-64 bg-gray-300 flex items-center justify-center"></div>

              <div className="w-full md:w-1/2 text-center p-12">
                <Icon className="w-10 h-10 mb-4 text-purple-700 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
});

ServicesSection.displayName = "ServicesSection";

export default ServicesSection;
