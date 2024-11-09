"use client";

import { FC, memo } from "react";
import { servicesData } from "@/data/mock-data";
import Subtitle from "@/components/Subtitle/Subtitle";
import { useTranslations } from "next-intl";

const ServicesSection: FC = memo(() => {
  const t = useTranslations("services-section");

  return (
    <section id="services" className="py-12">
      <Subtitle>{t("title")}</Subtitle>
      <div>
        {servicesData.map((service, index) => {
          return (
            <div
              key={service.title}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
            >
              <div
                className="w-full md:w-1/2 h-96 bg-gray-300 flex items-center justify-center"
                style={{
                  backgroundImage: service.image
                    ? `url(${service.image.src})`
                    : undefined,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="w-full md:w-1/2 text-center p-12">
                <h3 className="font-semibold text-2xl mb-2 text-[#383167]">
                  {service.title}
                </h3>
                <p className="text-md text-[#383167]">{service.description}</p>
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
