import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FooterLinkSection = ({ title, links }) => (
  <div className="text-TextColor/75">
    <h4 className="font-medium mb-3">{title}</h4>
    <div className="my-6 text-TextColor/75">
      {" "}
      {links.map(({ title, link }) => (
        <Link
          to={link}
          key={title}
          className="text-sm mb-4 block hover:text-Brand"
        >
          {title}
        </Link>
      ))}
    </div>
  </div>
);

FooterLinkSection.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FooterLinkSection;
