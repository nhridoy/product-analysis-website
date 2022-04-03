import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0 bg-gray-300 drop-shadow-md shadow-white z-10">
      <div className="flex flex-col gap-4 md:flex-row justify-between items-center container mx-auto p-4">
        <NavLink
          to="/"
          className="border-4 rounded border-orange-500 text-3xl font-semibold px-4 py-3"
        >
          <span className="text-gray-700">Eye Watch</span>
        </NavLink>

        <div className="flex flex-row gap-4 text-gray-700">
          <NavLink to="/" className="border-gray-300 border-b-2">
            Home
          </NavLink>

          <NavLink to="dashboard" className="border-gray-300 border-b-2">
            Dashboard
          </NavLink>

          <NavLink to="reviews" className="border-gray-300 border-b-2">
            Reviews
          </NavLink>

          <NavLink to="blogs" className="border-gray-300 border-b-2">
            Blogs
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
