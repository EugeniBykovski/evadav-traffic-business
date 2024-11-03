import { iconMap } from "@/sections/Services/types";

export const navigationMenuHome = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#whoweare" },
  { label: "Services", href: "#services" },
  { label: "Contacts", href: "#contacts" },
];

export const servicesData: Array<{
  title: string;
  description: string;
  icon: keyof typeof iconMap;
}> = [
  {
    title: "Coworking Services",
    description:
      "Flexible and modern coworking spaces designed to inspire creativity and collaboration.",
    icon: "users",
  },
  {
    title: "IT Services",
    description:
      "Comprehensive IT support and solutions tailored to your business needs.",
    icon: "code",
  },
  {
    title: "Business Consulting",
    description: "Expert advice to optimize your operations and strategies.",
    icon: "bar-chart-2",
  },
  {
    title: "Digital Marketing",
    description:
      "Effective marketing strategies to boost your online presence.",
    icon: "megaphone",
  },
  {
    title: "Application Development",
    description: "Custom application development to bring your ideas to life.",
    icon: "smartphone",
  },
  {
    title: "Web Development",
    description: "Professional website design and development services.",
    icon: "globe",
  },
  {
    title: "Lead Generation",
    description:
      "Proven techniques to generate high-quality leads for your business.",
    icon: "user-plus",
  },
  {
    title: "Traffic Acquisition",
    description:
      "Strategic acquisition of targeted traffic to enhance your online visibility.",
    icon: "lightbulb",
  },
  {
    title: "Personnel Hiring",
    description:
      "Expert recruitment services to find the right talent for your business.",
    icon: "briefcase",
  },
];
