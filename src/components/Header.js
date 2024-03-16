import { Search, ShoppingCart } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[100px] px-10">
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
        <nav className="text-base font-semibold leading-5">
          <ul className="list-none flex gap-8">
            <li>Categories</li>
            <li>Sale</li>
            <li>Clearance</li>
            <li>New stock</li>
            <li>Trending</li>
          </ul>
        </nav>
        <div className="flex gap-5 items-center">
          <Search strokeWidth={1.5} />
          <ShoppingCart strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
};

export default Header;
