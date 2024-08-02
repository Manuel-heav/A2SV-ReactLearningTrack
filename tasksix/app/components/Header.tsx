import React from "react";

const Header = () => {
  return (
    <div className="flex align-center justify-between px-24 py-8">
      <h1 className="font-header font-extrabold text-orange-500 text-xl">
        HireHub
      </h1>

      <div className="flex gap-12">
        <a href="#" className="hover:text-orange-500 transition duration-300">
          About
        </a>
        <a href="#" className="hover:text-orange-500 transition duration-300">
          Contact
        </a>
        <a href="#" className="hover:text-orange-500 transition duration-300">
          Articles
        </a>

        <button className="rounded-full border border-orange-500 px-5 text-orange-500 transition ease-out duration-150 hover:scale-105">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
