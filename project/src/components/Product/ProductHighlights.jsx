
import PropTypes from "prop-types";

const ProductHighlights = ({ highlights }) => {
  return (
    <div className="mt-5 ml-5">
      <h2 className="text-sm font-medium text-Black">Highlights</h2>
      <div className="mt-4 space-y-4">
        {highlights &&
          highlights.map((highlight, index) => (
            <li key={index} className="text-sm text-TextColor">
              {highlight}
            </li>
          ))}
      </div>
    </div>
  );
};

ProductHighlights.propTypes = {
  highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductHighlights;

