import React from "react";
import Logo from "../../src/assets/FlowerLogo.png";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <footer className="bg-[#f5ebe0] text-gray-800 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-start">

        {/* Logo & About */}
        <div>
        <img
  src={Logo}
  alt="House of Flowers Logo"
  className="h-24 md:h-28 object-contain mb-6"
/>

          <p className="text-sm leading-relaxed">
            House of Flowers is dedicated to providing fresh, beautiful blooms
            for every occasion. We bring elegance and care into every bouquet we deliver.
          </p>
        </div>


<div>
  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
  <ul className="space-y-2 text-sm">
    <li>
      <Link to="/" className="hover:text-pink-600">Home</Link>
    </li>
    <li>
      <Link to="/about" className="hover:text-pink-600">About</Link>
    </li>
    <li>
      <Link to="/delivery" className="hover:text-pink-600">Delivery Guide</Link>
    </li>
    <li>
      <Link to="/occasions" className="hover:text-pink-600">For Any Occasion</Link>
    </li>
    <li>
      <Link to="/policy" className="hover:text-pink-600">Policy</Link>
    </li>
  </ul>
</div>


        {/* Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="text-sm">Address: Shopping mall in Egg Harbor Township, New Jersey</p>
          <p className="text-sm">Phone: 609227 8449</p>
          <p className="text-sm">Email: ribbonswithroses@gmail.com</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t-4 border-gray-300"></div>

      {/* Copyright */}
      <div className="text-sm text-center py-4">
        <p>&copy; {new Date().getFullYear()} Ribbons With Roses. All rights reserved.(Absoltix Solutions)</p>
      </div>
    </footer>
  );
};

export default Footer;
