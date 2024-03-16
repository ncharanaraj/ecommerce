import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const PromoHeader = () => {
  return (
    <div className="w-full h-9 bg-[#F4F4F4] flex items-center justify-center">
      <div className="flex items-center font-medium text-sm leading-4 gap-4">
        <ChevronLeft strokeWidth={1.5} />
        <p>Get 10% off on business sign up</p>
        <ChevronRight strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default PromoHeader;
