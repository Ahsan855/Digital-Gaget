import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="sticky top-0  bg-gray-300 px-12 py-6 flex justify-center md:justify-between">
      <div>
        <Link
          className="hidden md:block font-sans font-bold md:text-xl text-gray-600"
          to="/"
        >
          Ahsan Habib
        </Link>
      </div>

      <div className="text-2xl flex gap-4 justify-center cursor-pointer">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/reviwes">Reviwes</CustomLink>
        <CustomLink to="/dashbord">DashBord</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/blogs">Blogs</CustomLink>
      </div>
    </div>
  );
};

export default Header;
