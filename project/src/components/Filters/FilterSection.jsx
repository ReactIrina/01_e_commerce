import PropTypes from "prop-types"; // Import PropTypes
import { FaFilter } from "react-icons/fa";
import CategoryButton from "./CategoryButton";

const FilterSection = ({
  categories,
  selectedCategory,
  handleCategoryChange,
  sortOption,
  handleSortChange,
  defaultSortOption,
}) => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
      <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
        {categories.map((categoryItem) => (
          <CategoryButton
            key={categoryItem.value}
            category={categoryItem.name}
            selectedCategory={selectedCategory}
            handleCategoryChange={handleCategoryChange}
          />
        ))}
      </div>

      <div className="flex justify-end mb-4">
        <div className="bg-Black pt-2 pb-2 pl-3">
          <FaFilter className="text-white h-4 w-4" />
        </div>
        <select
          id="sort"
          onChange={handleSortChange}
          value={sortOption}
          className="bg-Black text-white pl-2 pr-1 py-1 custom-select"
        >
          <option value={defaultSortOption}>Filter</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>
    </div>
  );
};

// Define PropTypes for FilterSection
FilterSection.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
  sortOption: PropTypes.string.isRequired,
  handleSortChange: PropTypes.func.isRequired,
  defaultSortOption: PropTypes.string.isRequired,
};

export default FilterSection;
