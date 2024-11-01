"use client";

import { servicesData } from "@/data/mock-data";
import { iconMap } from "./types";

const ServicesSection = () => {
  return (
    <section id="services" className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {servicesData.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <div
              key={service.title}
              className="p-6 bg-purple-200 rounded-lg text-center"
            >
              <Icon className="w-8 h-8 mx-auto mb-4 text-purple-700" />
              <h3 className="font-semibold text-lg">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
