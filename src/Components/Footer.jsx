import logo from "../assets/sayara-logo-footer.png";
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import { articlesData } from './featuredProdConts';
import { useState } from "react";
import  mastercard from "../assets/payment/mastercard.png"
import  discover from "../assets/payment/discover.png"
import  paypal from "../assets/payment/paypal.png"
import  visa from "../assets/payment/visa.png"
import  jcb from "../assets/payment/jcb.png"


function Footer() {
  const [active, setActive] = useState(null);

  const icons = [
    { id: 1, icon: <FaFacebookF />, link: "https://facebook.com" },
    { id: 2, icon: <FaTwitter />, link: "https://twitter.com" },
    { id: 3, icon: <FaPinterestP />, link: "https://pinterest.com" },
    { id: 4, icon: <FaLinkedinIn />, link: "https://linkedin.com" },
  ];

  const links = [
    { id: 1, name: "Contact Us", href: "#" },
    { id: 2, name: "Terms And Conditions", href: "#" },
    { id: 3, name: "About Us", href: "#" },
    { id: 4, name: "FAQ", href: "#" },
    { id: 5, name: "Delivery Information", href: "#" },
  ];


  return (
    <footer className="bg-[#212121] text-gray-300 pt-10 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Logo + About + Socials */}
        <div>
          <img src={logo} alt="Sayara Logo" className="w-40 mb-4" />
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            ducimus necessitatibus exercitationem.
          </p>
          <div className="flex space-x-2">
            {icons.map(({ id, icon, link }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setActive(id)}
                className={`flex items-center justify-center w-10 h-10 transition-colors duration-300 rounded-full
                  ${
                    active === id
                      ? "text-white bg-red-500"
                      : "bg-gray-800 text-white hover:bg-red-500"
                  }`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            Customer Services
          </h2>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setActive(link.id)}
                  className={`relative transition-colors duration-300 group cursor-pointer
                    ${
                      active === link.id
                        ? "text-red-500"
                        : "text-gray-300 hover:text-red-500"
                    }`}
                >
                  {link.name}
                  <span
                    className={`block h-[1px] bg-red-500 absolute left-0 -bottom-1 transition-all duration-300
                      ${
                        active === link.id
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Recent Posts */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            Recent Posts
          </h2>
          <div className="space-y-4">
            {articlesData.slice(0, 2).map((post) => (
              <div key={post.id} className="flex items-start space-x-3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <p className="text-sm leading-snug cursor-pointer hover:text-red-600">{post.title}</p>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Newsletter</h2>
          <p className="text-sm mb-4">
            Subscribe to our Newsletter and get bonuses for the next purchase
          </p>
          <div className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-full outline-none text-gray-800 bg-white"
            />
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-full transition-colors">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="text-gray-400">
          Copyright © 2025 Sayara. All Rights Reserved.
        </p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <img src={mastercard} alt={mastercard} className="h-6" />
          <img src={visa} alt={visa} className="h-6" />
          <img src={jcb} alt={jcb} className="h-6" />
          <img src={discover} alt={discover} className="h-6" />
          <img src={paypal} alt={paypal} className="h-6" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;