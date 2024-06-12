import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FooterLinkSection from "./FooterLinkSection";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const [links, setLinks] = useState(null);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await fetch("/links.json"); 
        const data = await response.json();
        setLinks(data);
      } catch (error) {
        console.error("Error fetching links:", error);
      }
    };

    fetchLinks();
  }, []);

  if (!links) {
    return null; 
  }

  const {
    socialMediaLinks,
    catalogLinks,
    customerServicesLinks,
    aboutUsLinks,
  } = links;

  return (
    <footer>
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
        <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="md:w-[320px]">
            <Link to="/">
              <img src="/logo.svg" alt="Logo" />
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

          <FooterLinkSection title="CATALOG" links={catalogLinks} />
          <FooterLinkSection title="ABOUT US" links={aboutUsLinks} />
          <FooterLinkSection
            title="CUSTOMER SERVICES"
            links={customerServicesLinks}
          />
        </div>
      </div>

      <div className="bg-Black">
        <p className="text-white font-thin text-center items-center py-3">
          © {currentYear} Naray, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
