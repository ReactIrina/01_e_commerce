import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      {/* footer top */}
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
        <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
          {/* company info */}
          <div className="md:w-[400px]">
            <Link to="/">
              <img src="/logo.svg" alt="" />
            </Link>
            <p className="my-8 text-Icons/75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex items-center gap-6">
              <FaFacebookF className="w-5 h-5 text-Icons/75 cursor-pointer hover:text-Brand" />
              <FaTwitter className="w-5 h-5 text-Icons/75 cursor-pointer hover:text-Brand" />
              <FaLinkedinIn className="w-5 h-5 text-Icons/75 cursor-pointer hover:text-Brand" />
            </div>
          </div>

          {/* Catalog */}
          <div className="text-TextColor">
            <h4 className="font-medium mb-3">CATALOG</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-Brand">
                Necklaces
              </Link>
              <Link to="/" className="text-sm block hover:text-Brand">
                Hoodies
              </Link>
              <Link to="/" className="text-sm block hover:text-Brand">
                Jewelry Box
              </Link>
              <Link to="/" className="text-sm block hover:text-Brand">
                T-shirt
              </Link>
              <Link to="/" className="text-sm block hover:text-Brand">
                Jacket
              </Link>
            </div>
          </div>

          {/* CUSTOMER SERVICES */}
          <div className="text-TextColor">
            <h4 className="font-medium mb-3">CUSTOMER SERVICES</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-Brand">
                Contact Us
              </Link>
              <Link to="/" className="text-sm block hover:text-Brand">
                Track Your Order
              </Link>
              <Link to="/" className="text-sm block hover:text-Brand">
                Product Care & Repair
              </Link>
              <Link to="/" className="text-sm block hover:text-Brand">
                Book an Appointment
              </Link>
              <Link to="/" className="text-sm block hover:text-Brand">
                Shipping & Returns
              </Link>
            </div>
          </div>

          {/* ABOUT US */}
          <div className="text-TextColor">
            <h4 className="font-medium mb-3">ABOUT US</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-Brand">
                Our Producers
              </Link>
              <Link to="/" className="text-sm block hover:text-Brand">
                Sitemap
              </Link>
              <Link to="/" className="text-sm block hover:text-Brand">
                FAQ
              </Link>
              <Link to="/" className="text-sm block hover:text-Brand">
                About Us
              </Link>
              <Link to="/" className="text-sm block hover:text-Brand">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="bg-Black">
        <p className="text-white font-thin text-center items-center py-3">
          © {currentYear} Naray, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
