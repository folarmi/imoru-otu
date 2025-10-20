import { categoriesData } from "@/data";
import { FilterIcon } from "lucide-react";
import { useState } from "react";

const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  return (
    <div className="bg-yellow_200 border border-gray_200 py-8 flex items-center justify-center">
      <div className="flex items-center">
        <FilterIcon className="w-5 h-5 text-green_200 mr-2" />
        <p className="text-green_200 text-base font-semibold pr-4">
          Filter by:
        </p>
      </div>

      <div className="flex items-center gap-x-2">
        {categoriesData.map(({ id, name }) => {
          return (
            <div
              className={` py-2 px-4 rounded-md text-sm cursor-pointer ${
                selectedCategory === name
                  ? "bg-secondary text-white"
                  : "bg-white text-secondary"
              }`}
              key={id}
              onClick={() => setSelectedCategory(name)}
            >
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Filter };
