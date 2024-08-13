"use client";
import Link from "next/link";
import React from "react";
import Cookie from "js-cookie";

const Header = () => {
  const handleSignOut = () => {
    const cookies = Cookie.get();
    for (const cookie in cookies) {
      Cookie.remove(cookie);
    }
    window.location.reload();
  };
  return (
    <div className="flex align-center justify-between px-24 py-8">
      <h1 className="font-header font-extrabold text-orange-500 text-xl">
        HireHub
      </h1>

      <div className="flex items-center gap-12">
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
        <button
          className="px-4 py-2 bg-orange-500 text-white rounded-full"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
