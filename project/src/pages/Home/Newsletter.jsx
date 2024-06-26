import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div className="bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16">
      <div className="text-center mb-20">
        <h2 className="text-3xl font-semibold capitalize mb-8">
          Follow products and discounts on Instagram
        </h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {/* Instagram grid */}
          {Array.from({ length: 6 }, (_, index) => (
            <Link key={index} to={`/instagram/${index + 1}`}>
              <img
                src={`/images/instagram/img${index + 1}.png`}
                alt={`Instagram ${index + 1}`}
                className="rounded-lg border-2 border-gray-200 hover:border-gray-300"
                style={{ borderRadius: "8px" }}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-semibold capitalize mb-8">
          Or subscribe to the newsletter
        </h2>
        <form className="md:w-1/2 mx-auto">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address..."
            className="h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4"
          />
          <input
            type="submit"
            value="SUBMIT"
            className="bg-black text-white px-6 py-1 rounded-sm hover:text-white hover:bg-Brand transition-colors duration-300"
          />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
