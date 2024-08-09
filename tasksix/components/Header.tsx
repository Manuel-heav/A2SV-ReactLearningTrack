import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex align-center justify-between px-24 py-8">
      <h1 className="font-header font-extrabold text-orange-500 text-xl">
        HireHub
      </h1>

      <div className="flex gap-12">
        <Link
          href="/"
          className="hover:text-orange-500 transition duration-300"
        >
          Find Opportunities
        </Link>
        <Link
          href="/bookmarks"
          className="hover:text-orange-500 transition duration-300"
        >
          Bookmarked
        </Link>
        <Link
          href="#"
          className="hover:text-orange-500 transition duration-300"
        >
          Articles
        </Link>
      </div>
    </div>
  );
};

export default Header;
