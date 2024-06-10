// import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import bannerImg from "/images/banner.png";

const Banner = () => {
  return (
    <div className="bg-primaryBG py-12 xl:px-28 px-4">
      <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14 h-full">
        <div className="md:w-1/2 self-end">
          <img
            src={bannerImg}
            alt=""
            className="mx-auto h-full md:h-[562px] md:w-[442px] w-full"
          />
        </div>

        <div className="md:w-1/2 w-full pb-6 self-end">
          <h1 className="text-5xl lg:text-7xl text-TextColor font-medium tracking-wider mb-5">
            Collections
          </h1>
          <p className="text-xl mb-7">
            You can explore and shop many different collections <br />
            from various brands here.
          </p>
          <button className="bg-Brand hover:bg-Black px-8 py-4 text-white text-2xl font-normal flex gap-2 items-center rounded">
            <FaShoppingBag className="inline-flex" /> Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
