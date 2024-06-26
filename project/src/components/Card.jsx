/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Card = ({ filteredItems }) => {
  // State to track liked items
  const [likedItems, setLikedItems] = useState({});

  // Function to handle heart icon click
  const handleHeartClick = (id) => {
    setLikedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12">
      {filteredItems.slice(0, 8).map((item) => (
        <div key={item.id} className="relative card group/item">
          <img
            src={item.image}
            alt={item.title}
            className="mx-auto w-full rounded-tr rounded-tl transition-all duration-300"
          />
          <div className="w-full group/edit absolute inset-x-0 bottom-[70px] h-14 flex flex-row bg-Black text-white opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
            <div className="flex flex-row w-full space-x-24 justify-between">
              <div className="flex text-center p-4 pt-5">
                <FaSearch />
                <div className="ml-2" onClick={() => handleHeartClick(item.id)}>
                  {likedItems[item.id] ? (
                    <AiFillHeart className="text-yellow-400" />
                  ) : (
                    <AiOutlineHeart />
                  )}
                </div>
              </div>
              <div className="flex pt-4 pb-4 pr-4">
                <FaShoppingCart className="align-baseline mt-1" />
                <Link
                  to={`/shop/${item.id}`}
                  className="pl-3 font-light text-nowrap"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <Link to={`/shop/${item.id}`} className="block mt-4 px-4">
            <h4 className="text-base font-semibold mb-2">{item.title}</h4>
            <div className="flex justify-between">
              <p className="text-TextColor">{item.category}</p>
              <p className="font-semibold">${item.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Card;
