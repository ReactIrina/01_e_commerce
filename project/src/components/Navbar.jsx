import { useState } from "react";
import { FaBars, FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import logo from "/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const navItems = [
    { title: "Jewelry & Accessories", path: "/" },
    { title: "Clothing & Shoes", path: "/" },
    { title: "Home & Living", path: "/" },
    { title: "Wedding & Party", path: "/" },
    { title: "Toys & Entertainment", path: "/" },
    { title: "Art & Collectibles", path: "/" },
    { title: "Craft Supplies & Tools", path: "/" },
  ];

  return (
    <header className="max-w-screen-2xl xl:px-28 px-4 mx-auto absolute top-0 left-0 right-0">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <FaSearch className="text-Icons w-4 h-4 cursor-pointer hidden md:block" />
        <Link to="/" className="lg:pl-24">
          <img src={logo} alt="logo" className="h-7" />
        </Link>

        {/* account and shopping btn */}
        <div className="text-lg text-Icons sm:flex items-center gap-4 hidden">
          <Link to="/" className="flex items-center gap-2">
            <FaUser /> Account
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <FaShoppingBag /> Shopping
          </Link>
        </div>

        {/* Toggle button only for mobile */}
        <button onClick={toggleMenu} className="sm:hidden">
          <FaBars className="w-6 h-6 text-Icons" />
        </button>
      </nav>
      <hr />
      {/* nav items */}
      <div className="pt-4">
        <ul className="lg:flex items-center justify-between text-Icons hidden">
          {navItems.map(({ title }) => (
            <li key={title}>
              <NavLink to="/">{title}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* mobile menu items */}
      <ul
        className={`bg-Icons text-white hover: px-4 py-2 rounded ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        {navItems.map(({ title, path }) => (
          <li key={title} className="my-3 cursor-pointer">
            <Link to={path} onClick={toggleMenu} className="dropdown-link">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
