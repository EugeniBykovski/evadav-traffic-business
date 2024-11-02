"use client";

import { servicesData } from "@/data/mock-data";
import { iconMap } from "./types";
import Subtitle from "@/components/Subtitle/Subtitle";

const ServicesSection = () => {
  return (
    <section id="services" className="py-12">
      <Subtitle>Our Services</Subtitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {servicesData.map((service) => {
          const Icon = iconMap[service.icon];

          return (
            <div
              key={service.title}
              className="p-6 bg-purple-200 rounded-lg text-center hover:shadow-md transition cursor-pointer"
            >
              <Icon className="w-10 h-10 mx-auto mb-6 text-purple-700" />
              <h3
                className="font-semibold text-lg mb-2
              "
              >
                {service.title}
              </h3>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
