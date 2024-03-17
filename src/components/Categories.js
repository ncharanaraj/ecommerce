import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import React from "react";

const Categories = () => {
  return (
    <fieldset className="w-full">
      <legend className="leading-[38.73px] text-[32px] font-semibold text-center pt-6 mb-3">
        Please mark your interests!
      </legend>
      <p className="leading-[26px] text-base font-normal text-center my-3">
        We will keep you notified.
      </p>
      <p className="leading-[26px] text-xl font-medium my-[14px]">
        My saved interests!
      </p>
      <div className="flex gap-2 items-center my-3">
        <input
          type="checkbox"
          className="w-6 h-6 rounded accent-black bg-[#CCCCCC] "
        />
        <label className="leading-[26px] font-normal text-base">Shoes</label>
      </div>
      <div className="flex gap-2 items-center my-3">
        <input
          type="checkbox"
          className="w-6 h-6 rounded accent-black bg-[#CCCCCC] "
        />
        <label className="leading-[26px] font-normal text-base">
          Men T-shirts
        </label>
      </div>
      <div className="flex gap-2 items-center my-3">
        <input
          type="checkbox"
          className="w-6 h-6 rounded accent-black bg-[#CCCCCC] "
        />
        <label className="leading-[26px] font-normal text-base">Makeup</label>
      </div>
      <div className="flex gap-2 items-center my-3">
        <input
          type="checkbox"
          className="w-6 h-6 rounded  bg-[#CCCCCC] accent-black"
        />
        <label className="leading-[26px] font-normal text-base">
          Jewellery
        </label>
      </div>
      <div className="flex gap-2 items-center my-3">
        <input
          type="checkbox"
          className="w-6 h-6 rounded accent-black bg-[#CCCCCC] "
        />
        <label className="leading-[26px] font-normal text-base">
          Women T-shirts
        </label>
      </div>
      <div className="flex gap-2 items-center my-3">
        <input
          type="checkbox"
          className="w-6 h-6 rounded  bg-[#CCCCCC] accent-black"
        />
        <label className="leading-[26px] font-normal text-base">
          Furniture
        </label>
      </div>
      <div className="text-[#ACACAC] leading-[26px] text-xl font-medium flex my-10 justify-center items-center gap-2">
        <ChevronsLeft />
        <ChevronLeft />
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>...</div>
        <ChevronRight />
        <ChevronsRight />
      </div>
    </fieldset>
  );
};

export default Categories;
