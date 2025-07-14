import React from "react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategories: string[];
  onChange: (categories: string[]) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategories, onChange }) => {
  const toggleCategory = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      onChange(selectedCategories.filter((c) => c !== cat));
    } else {
      onChange([...selectedCategories, cat]);
    }
  };
  return (
    <div className="flex flex-wrap gap-3 py-4">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-2 rounded-full border font-medium transition-all duration-200 ${selectedCategories.includes(cat) ? "bg-black text-white border-black" : "bg-white border-gray-200 text-black hover:bg-gray-100"}`}
          onClick={() => toggleCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
