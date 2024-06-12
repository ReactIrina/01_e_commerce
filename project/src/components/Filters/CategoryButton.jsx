import PropTypes from "prop-types";

const CategoryButton = ({
  category,
  selectedCategory,
  handleCategoryChange,
}) => {
  const handleClick = () => {
    handleCategoryChange(category === "All Products" ? "all" : category);
    // Above handle the issue with style when "All products" is clicked.
  };

  return (
    <button
      onClick={handleClick}
      className={
        selectedCategory === (category === "All Products" ? "all" : category)
          ? "active-sort"
          : ""
      }
    >
      {category}
    </button>
  );
};

CategoryButton.propTypes = {
  category: PropTypes.string.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
};

export default CategoryButton;
