import PropTypes from "prop-types";
import { FaStar, FaStarHalfAlt, FaArrowAltCircleRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const ProductDetailsSection = ({ image, title, description, price }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const generateRandomRating = () => {
      let randomRating;
      do {
        randomRating = (Math.random() * 4 + 1).toFixed(1); // Generates a number between 1 and 5 with one decimal place
      } while (randomRating < 3.5);
      setRating(parseFloat(randomRating));
    };
    generateRandomRating();
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const totalStars = fullStars + halfStar;

    return (
      <>
        {Array.from({ length: fullStars }).map((_, index) => (
          <FaStar key={index} />
        ))}
        {halfStar ? <FaStarHalfAlt /> : null}
        {Array.from({ length: 5 - totalStars }).map((_, index) => (
          <FaStar
            key={fullStars + halfStar + index}
            style={{ color: "#e0e0e0" }}
          />
        ))}
      </>
    );
  };

  return (
    <div className="p-3 max-w-7xl m-auto">
      <div className="mt-6 sm:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
          <div className="overflow-hidden rounded">
            <img src={image} alt="Product-Image" className="w-full" />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl text-Brand font-semibold sm:text-4xl">
                {title}
              </h1>
              <p className="mt-3 text-TextColor text-md leading-6 text-justify sm:text-left sm:mt-4">
                {description}
              </p>
              <span className="my-3 text-xl text-yellow-500 flex items-center gap-1 sm:my-4">
                {renderStars(rating)}
              </span>
              <span className="text-xl text-TextColor font-semibold sm:text-2xl">
                ${price}
              </span>
            </div>
            <div>
              <div className="text-left flex flex-col gap-2 w-full">
                <label className="font-semibold text-TextColor">Quantity</label>
                <input
                  className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-Brand"
                  type="number"
                  defaultValue="1"
                  required
                />
              </div>
              <div className="w-full text-left my-4">
                <button
                  className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-Brand text-white text-md font-bold border border-Brand rounded ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-Brand lg:m-0 md:px-6"
                  title="Confirm Order"
                >
                  <span>Confirm Order</span>
                  <FaArrowAltCircleRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDetailsSection.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductDetailsSection;
