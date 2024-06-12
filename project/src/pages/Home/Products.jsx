import { useEffect, useState, useMemo, useCallback } from "react";
import Card from "../../components/Card";
import FilterSection from "../../components/Filters/FilterSection.jsx";

const DEFAULT_SORT_OPTION = "default";
const ALL_CATEGORY_VALUE = "all";

const Products = () => {
  const [jsonData, setJsonData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORY_VALUE);
  const [sortOption, setSortOption] = useState(DEFAULT_SORT_OPTION);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("products.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error
      }
    };

    fetchData();
  }, []);

  const categories = [
    { name: "All Products", value: "all" },
    { name: "Dress", value: "Dress" },
    { name: "Hoodies", value: "Hoodies" },
    { name: "Bags", value: "Bags" },
    { name: "Shoes", value: "Shoes" },
    // Add more categories as needed
  ];

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const filteredItems = useMemo(() => {
    let filtered = jsonData;
    if (selectedCategory !== ALL_CATEGORY_VALUE) {
      filtered = jsonData.filter((item) => item.category === selectedCategory);
    }

    if (sortOption !== DEFAULT_SORT_OPTION) {
      filtered.sort((a, b) => {
        switch (sortOption) {
          case "A-Z":
            return a.title.localeCompare(b.title);
          case "Z-A":
            return b.title.localeCompare(a.title);
          case "low-to-high":
            return a.price - b.price;
          case "high-to-low":
            return b.price - a.price;
          default:
            return 0;
        }
      });
    }

    return filtered;
  }, [jsonData, selectedCategory, sortOption]);

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12">
      <h2 className="text-3xl text-TextColor font-semibold capitalize text-center my-8">
        New arrivals
      </h2>

      <FilterSection
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        sortOption={sortOption}
        handleSortChange={handleSortChange}
      />

      <Card filteredItems={filteredItems} />
    </div>
  );
};

export default Products;
