import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialMediaLinks = [
    {
      icon: FaFacebookF,
      link: "https://www.facebook.com",
    },
    {
      icon: FaTwitter,
      link: "https://www.twitter.com",
    },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com",
    },
  ];

  const catalogLinks = [
    {
      title: "Necklaces",
      link: "/",
    },
    {
      title: "Hoodies",
      link: "/",
    },
    {
      title: "Jewelry Box",
      link: "/",
    },
    {
      title: "T-shirt",
      link: "/",
    },
    {
      title: "Jacket",
      link: "/",
    },
  ];

  const customerServicesLinks = [
    {
      title: "Contact Us",
      link: "/",
    },
    {
      title: "Track Your Order",
      link: "/",
    },
    {
      title: "Product Care & Repair",
      link: "/",
    },
    {
      title: "Book an Appointment",
      link: "/",
    },
    {
      title: "Shipping & Returns",
      link: "/",
    },
  ];

  const aboutUsLinks = [
    {
      title: "Our Producers",
      link: "/",
    },
    {
      title: "Sitemap",
      link: "/",
    },
    {
      title: "FAQ",
      link: "/",
    },
    {
      title: "About Us",
      link: "/",
    },
    {
      title: "Terms & Conditions",
      link: "/",
    },
  ];

  return (
    <footer>
      {/* footer top */}
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
        <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Company info */}
          <div className="md:w-[320px]">
            <Link to="/">
              <img src="/logo.svg" alt="" />
            </Link>
            <p className="my-8 text-Icons/75 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex items-center gap-6">
              {socialMediaLinks.map(({ icon: Icon, link }) => (
                <Link to={link} key={link}>
                  <Icon className="w-5 h-5 text-Icons/75 cursor-pointer hover:text-Brand" />
                </Link>
              ))}
            </div>
          </div>

          {/* Catalog */}
          <div className="text-TextColor/75">
            <h4 className="font-medium mb-3">CATALOG</h4>
            <div className="space-y-2 text-TextColor/75">
              {catalogLinks.map(({ title, link }) => (
                <Link
                  to={link}
                  key={title}
                  className="text-sm block hover:text-Brand"
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>

          {/* ABOUT US */}
          <div className="text-TextColor/75">
            <h4 className="font-medium mb-3">ABOUT US</h4>
            <div className="space-y-2 text-TextColor/75">
              {aboutUsLinks.map(({ title, link }) => (
                <Link
                  to={link}
                  key={title}
                  className="text-sm block hover:text-Brand"
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>

          {/* CUSTOMER SERVICES */}
          <div className="text-TextColor/75">
            <h4 className="font-medium mb-3">CUSTOMER SERVICES</h4>
            <div className="space-y-2 text-TextColor/75">
              {customerServicesLinks.map(({ title, link }) => (
                <Link
                  to={link}
                  key={title}
                  className="text-sm block hover:text-Brand"
                >
                  {title}
                </Link>
              ))}
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
