import React from "react";

const FilterTabs = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-4 mt-4">
      {["all", "completed", "pending"].map((f) => (
        <button
          className={`px-4 py-1 rounded cursor-pointer ${
            f === filter
              ? "bg-blue-500 text-white "
              : " text-black bg-gray-300 "
          }  `}
          onClick={() => setFilter(f)}
          key={f}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
