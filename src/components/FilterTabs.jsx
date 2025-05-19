import React from "react";

const FilterTabs = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-4 mt-4">
      {["all", "pending", "completed"].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-1 rounded ${
            filter === f ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
