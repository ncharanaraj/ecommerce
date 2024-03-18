import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import React, { useState } from "react";
import { faker } from "@faker-js/faker";

const Categories = () => {
  const productCategories = Array.from({ length: 100 }, () => ({
    id: faker.string.uuid(),
    name: faker.commerce.department(),
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 6;
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = productCategories.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
      {currentCategories.map(({ id, name }) => (
        <div key={id} className="flex gap-2 items-center my-3">
          <input
            type="checkbox"
            className="w-6 h-6 rounded accent-black bg-[#CCCCCC] "
          />
          <label className="leading-[26px] font-normal text-base">{name}</label>
        </div>
      ))}

      <div className="text-[#ACACAC] leading-[26px] text-xl font-medium flex my-10 justify-center items-center gap-2">
        <ChevronsLeft />
        <ChevronLeft />
        {[
          ...Array(Math.ceil(productCategories.length / categoriesPerPage)),
        ].map((_, i) => (
          <span
            key={i}
            className="cursor-pointer"
            onClick={() => paginate(i + 1)}
          >
            {i + 1}
          </span>
        ))}

        <ChevronRight />
        <ChevronsRight />
      </div>
    </fieldset>
  );
};

export default Categories;
