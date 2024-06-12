/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa"; 

const Card = ({ filteredItems }) => {
  return (
    <div className="grid  xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12">
      {filteredItems.slice(0, 8).map((item) => (
        <div key={item.id} className="relative card group/item">
          <Link to={`/shop/${item.id}`}>
            <img
              src={item.image}
              alt={item.title}
              className="mx-auto w-full rounded-tr rounded-tl transition-all duration-300"
            />
            <div className=" w-full group/edit absolute inset-x-0 bottom-[70px] h-14 flex flex-row  bg-Black text-white opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
              <div className="flex flex-row  w-full space-x-24 justify-between">
                <div className="flex text-center p-4 pt-5">
                  <FaSearch />
                  <FaHeart className="ml-2" />
                </div>
                <div className="flex pt-4 pb-4 pr-4">
                  <FaShoppingCart className="align-baseline mt-1" />
                  <p className="pl-3 font-light text-nowrap">Shop Now</p>
                </div>
              </div>
            </div>
          </Link>
          <div className="mt-4 px-4">
            <h4 className="text-base font-semibold mb-2">{item.title}</h4>

            <div className="flex justify-between">
              <p className="text-TextColor">{item.category}</p>
              <p className="font-semibold">${item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
