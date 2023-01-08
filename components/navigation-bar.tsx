import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800">
      <div>
        <Link
          href="/"
          className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-600 mx-2"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-600 mx-2"
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
