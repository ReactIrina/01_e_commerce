import { FaShoppingBag } from "react-icons/fa";
import bannerImg from "/images/banner.png";

const Banner = () => {
  return (
    <div className="bg-primaryBG  xl:px-28 px-4">
      <div className="pt-20 pb-2 lg:py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14 h-full">
        <div className="md:w-1/2 self-end">
          <img
            src={bannerImg}
            alt="Banner"
            className="mx-auto h-full md:h-[562px] md:w-[442px] w-full"
          />
        </div>

        <div className="md:w-1/2 w-full pb-6 self-center md:self-end">
          <h1 className="text-5xl lg:text-7xl text-TextColor font-medium tracking-wider mb-5 text-center md:text-left">
            Collections
          </h1>
          <p className="text-xl mb-7 text-center md:text-left">
            You can explore and shop many different collection from various
            brands here.
          </p>
          <button
            className="bg-Brand hover:bg-Black px-8 py-4 text-white text-2xl font-normal flex gap-2 items-center rounded w-full md:w-auto justify-center"
            type="button"
          >
            <FaShoppingBag className="inline-flex" />
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
