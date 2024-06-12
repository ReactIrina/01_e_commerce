import PropTypes from "prop-types";

const ProductDetails = ({ details }) => {
  return (
    <div className="mt-10 ml-5">
      <h2 className="text-sm font-medium text-Black">Details</h2>
      <div className="mt-4 space-y-6">
        <p className="text-sm text-TextColor">{details}</p>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  details: PropTypes.string.isRequired,
};

export default ProductDetails;
