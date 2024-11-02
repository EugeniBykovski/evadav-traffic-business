import { Button } from "@/components/ui/button";
import { FC } from "react";

const SolutionSection: FC = () => {
  return (
    <div className="py-28">
      <h1 className="text-[#373168] text-6xl font-bold mb-8 tracking-wide">
        Innovative Solutions for Your Business
      </h1>
      <h3 className="text-2xl mb-14 text-[#373168] tracking-wide">
        Empowering your business with cutting-edge technology and expertise.
      </h3>
      <Button size="lg" className="text-lg">
        Learn More
      </Button>
    </div>
  );
};

export default SolutionSection;
