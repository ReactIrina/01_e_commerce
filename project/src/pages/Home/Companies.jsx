import { Link } from "react-router-dom";

const companyLogo = [
  { id: 1, img: "/images/company/brand1.png" },
  { id: 2, img: "/images/company/brand2.png" },
  { id: 3, img: "/images/company/brand3.png" },
  { id: 4, img: "/images/company/brand4.png" },
  { id: 5, img: "/images/company/brand5.png" },
];

const Companies = () => {
  return (
    <div className="max-w-screen-2xl container xl:px-16 px-4 py-16">
      {/* brand logo */}
      <div className="flex items-center justify-around flex-wrap gap-4 py-5">
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>

      {/* category grid */}
      <div className="flex relative flex-col md:flex-row items-center gap-4 mt-8">
        {/* Add the text component outside the grid */}
        <div className="md:flex md:top-0 md:bottom-0 md:absolute md:self-center md:w-full md:ml-[-4rem]">
          <p
            className="font-medium text-2xl md:-rotate-90 uppercase text-center  text-Black sm:mt-4 rounded-sm inline-flex md:absolute md:left-0 md:transform -translate-y-1/2 md:pb-28 "
            style={{ zIndex: 1 }}
          >
            Explore new and <br />
            popular styles
          </p>
        </div>

        <div className="max-w-screen-xl flex flex-col md:flex-row items-center gap-4 mt-8 md:ml-14 ">
          <div>
            <Link to="/">
              <img
                src="/images/category/image1.png"
                alt=""
                className="rounded hover:scale-105 transition-all  duration-200"
              />
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-2">
              <Link to="/">
                <img
                  src="/images/category/image2.png"
                  alt=""
                  className="rounded hover:scale-105 transition-all duration-200"
                />
              </Link>
              <Link to="/">
                <img
                  src="/images/category/image3.png"
                  alt=""
                  className="rounded hover:scale-105 transition-all duration-200"
                />
              </Link>
              <Link to="/">
                <img
                  src="/images/category/image4.png"
                  alt=""
                  className="rounded hover:scale-105 transition-all duration-200"
                />
              </Link>
              <Link to="/">
                <img
                  src="/images/category/image5.png"
                  alt=""
                  className="rounded hover:scale-105 transition-all duration-200"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
