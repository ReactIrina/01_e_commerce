import PropTypes from "prop-types";

const ProductDescription = ({ description }) => {
  return (
    <div className="mt-10 ml-5">
      <h2 className="text-sm font-medium text-Black">Description</h2>
      <div className="mt-4 space-y-6">
        <p className="text-sm text-TextColor">{description}</p>
      </div>
    </div>
  );
};


ProductDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default ProductDescription;
