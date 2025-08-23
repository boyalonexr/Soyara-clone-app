import { useState } from "react";
import logo from "../assets/sayara-logo.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ openNavBar, setOpenNavbar }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  const toggleNav = (type) => {
    setDropdownOpen((prev) => (prev === type ? false : type));
  };

  const popupAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  // ✅ Centralized Nav Config
  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Shop",
      dropdown: [
        "full width",
        "shop left sidebar",
        "shop right side bar",
        "cart",
        "checkout",
      ],
    },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    {
      name: "Pages",
      dropdown: ["account", "wishlist", "terms and conditions", "faq", "404"],
    },
  ];

  return (
    <div className="sticky lg:static top-0 z-40 lg:z-30 bg-white p-2 w-full md:p-4 mx-auto shadow-lg">
      {/* Top Nav Container */}
      <div className="flex items-center justify-between md:w-[85%] mx-auto lg:w-[92%]">
        {/* Desktop: Shop by Category Button */}
        <div className="w-full hidden lg:flex items-center gap-8">
          <div className="w-1/4">
            <button className="flex items-center gap-4 bg-red-600 px-4 py-2 w-[85%] rounded-full justify-center">
              <IoReorderThreeOutline className="text-3xl" />
              <h1>Shop by Category</h1>
            </button>
          </div>

          {/* ✅ Desktop Nav Iteration */}
          <ul className="flex items-center gap-6 capitalize text-sm font-medium text-zinc-700">
            {navItems.map((item, idx) => (
              <li
                key={idx}
                className="relative text-xl font-normal"
                onMouseEnter={() => setHoveredDropdown(item.name)}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                {item.dropdown ? (
                  <div className="flex items-center cursor-pointer hover:text-red-600">
                    {item.name} <MdOutlineKeyboardArrowDown className="ml-1" />
                  </div>
                ) : (
                  <a href={item.href} className="hover:text-red-600">
                    {item.name}
                  </a>
                )}

                {/* Dropdown (Desktop) */}
                <AnimatePresence>
                  {hoveredDropdown === item.name && item.dropdown && (
                    <motion.ul
                      {...popupAnimation}
                      className="absolute left-0 top-full mt-2 bg-white w-65 py-4 rounded shadow-lg border border-gray-200 z-50"
                    >
                      {item.dropdown.map((drop, dropIdx) => (
                        <li
                          key={dropIdx}
                          className="px-4 text-md py-4 hover:bg-gray-100 cursor-pointer"
                        >
                          {drop}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile: Logo */}
        <div className="lg:hidden">
          <a href="#">
            <img className="w-36" src={logo} alt="Sayara Logo" />
          </a>
        </div>

        {/* Mobile: Toggle Button */}
        <button className="lg:hidden" onClick={() => setOpenNavbar(true)}>
          <IoReorderThreeOutline className="text-5xl text-zinc-500" />
        </button>
      </div>

      {/* ✅ Mobile Nav Iteration */}
      <AnimatePresence>
        {openNavBar && (
          <div className="flex justify-end">
            <div
              onClick={() => setOpenNavbar(false)}
              className="fixed inset-0 bg-black/90 z-30"
            ></div>

            <motion.ul
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 z-50 bg-white shadow-lg w-[80%] max-w-sm h-screen items-center text-zinc-600 capitalize divide-y divide-gray-300"
            >
              <div>
                <img
                  className="w-3/4 p-4 mx-auto"
                  src={logo}
                  alt="Sayara Logo"
                />
              </div>

              {navItems.map((item, idx) => (
                <li key={idx} className="border-b border-gray-300">
                  {item.dropdown ? (
                    <>
                      <div className="flex justify-between items-center h-10">
                        <span className="cursor-pointer flex items-center pl-4 h-full w-full hover">
                          {item.name}
                        </span>
                        <div
                          onClick={() => toggleNav(item.name)}
                          className={`flex items-center border-l border-l-gray-300 h-full w-15 ${
                            dropdownOpen === item.name
                              ? "bg-red-600"
                              : "bg-white"
                          }`}
                        >
                          <MdOutlineKeyboardArrowDown
                            className={`text-lg ${
                              dropdownOpen === item.name
                                ? "text-white"
                                : "text-black"
                            } w-3/4 mx-auto`}
                          />
                        </div>
                      </div>

                      {/* Dropdown (Mobile) */}
                      <AnimatePresence>
                        {dropdownOpen === item.name && (
                          <motion.div key={`${item.name}-mobile`} {...popupAnimation}>
                            <ul className="capitalize ml-8 border-t border-gray-300 divide-y divide-gray-300">
                              {item.dropdown.map((drop, dropIdx) => (
                                <li
                                  key={dropIdx}
                                  className="p-2 hover:bg-gray-200 cursor-pointer"
                                >
                                  {drop}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block p-3 hover:bg-gray-100 cursor-pointer"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </motion.ul>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;