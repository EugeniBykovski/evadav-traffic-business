import { img_1, img_2, img_3, img_4, img_5, img_6 } from "@/assets";
import { StaticImageData } from "next/image";

export const navigationMenuHome = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#whoweare" },
  { label: "Services", href: "#services" },
  { label: "Contacts", href: "#contacts" },
];

export const servicesData: Array<{
  title: string;
  description: string;
  image: StaticImageData;
}> = [
  {
    title: "Coworking Services",
    description:
      "Flexible and modern coworking spaces designed to inspire creativity and collaboration.",
    image: img_1,
  },
  {
    title: "IT Services",
    description:
      "Comprehensive IT support and solutions tailored to your business needs.",
    image: img_2,
  },
  {
    title: "Business Consulting",
    description: "Expert advice to optimize your operations and strategies.",
    image: img_3,
  },
  {
    title: "Digital Marketing",
    description:
      "Effective marketing strategies to boost your online presence.",
    image: img_4,
  },
  {
    title: "Application Development",
    description: "Custom application development to bring your ideas to life.",
    image: img_5,
  },
  {
    title: "Web Development",
    description: "Professional website design and development services.",
    image: img_6,
  },
];
