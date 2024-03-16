import { Search, ShoppingCart } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-full h-9 flex items-center justify-end">
        <ul className="list-none flex gap-5">
          <li className="leading-[14.52px] text-sm font-normal">Help</li>
          <li className="leading-[14.52px] text-sm font-normal">
            Orders & Returns
          </li>
          <li className="leading-[14.52px] text-sm font-normal">Hi, Charan</li>
        </ul>
      </div>
      <div className="w-full h-16 flex items-center justify-between">
        <h1 className="font-bold leading-[38.73px] text-[32px]">ECOMMERCE</h1>
        <ul className="list-none flex gap-8">
          <li className="leading-5 text-base font-semibold">Categories</li>
          <li className="leading-5 text-base font-semibold">Sale</li>
          <li className="leading-5 text-base font-semibold">Clearance</li>
          <li className="leading-5 text-base font-semibold">New stock</li>
          <li className="leading-5 text-base font-semibold">Trending</li>
        </ul>
        <div className="flex gap-5 items-center">
          <Search strokeWidth={1.5} />
          <ShoppingCart strokeWidth={1.5} />
        </div>
      </div>
    </>
  );
};

export default Header;
