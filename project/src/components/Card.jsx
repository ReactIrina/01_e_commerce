// /* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";

// const Card = ({ filteredItems }) => {
//   return (
//     <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12 shadow-sm">
//       {filteredItems.slice(0, 8).map((item) => (
//         <div key={item.id}>
//           <Link to={`/shop/${item.id}`}>
//             <img
//               src={item.image}
//               alt={item.title}
//               className="mx-auto w-full rounded-tr rounded-tl hover:scale-105 transition-all duration-300"
//             />
//           </Link>
//           <div className="mt-4 px-4">
//             <h4 className="text-base font-semibold mb-2">{item.title}</h4>

//             <div className="flex justify-between">
//               <p className="text-TextColor">{item.category}</p>
//               <p className="font-semibold">${item.price}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;

/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa"; // Assuming you're using react-icons for the icons

const Card = ({ filteredItems }) => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12 shadow-sm">
      {filteredItems.slice(0, 8).map((item) => (
        <div
          key={item.id}
          className="relative card transition-transform duration-300 hover:transform hover:translate-y-[-10px] hover:shadow-lg"
        >
          <Link to={`/shop/${item.id}`}>
            <img
              src={item.image}
              alt={item.title}
              className="mx-auto w-full rounded-tr rounded-tl transition-all duration-300"
            />
          </Link>
          <div className="mt-4 px-4">
            <h4 className="text-base font-semibold mb-2">{item.title}</h4>

            <div className="flex justify-between">
              <p className="text-TextColor">{item.category}</p>
              <p className="font-semibold">${item.price}</p>
            </div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-4 mb-2">
              <FaSearch />
              <FaHeart />
            </div>
            <div className="flex space-x-4 ">
              <FaShoppingCart />
              <p>Shop Now</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
