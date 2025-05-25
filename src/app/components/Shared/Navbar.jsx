"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Check if a link is active
  const isActive = (href) => {
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  };

  // List of paths where footer should be hidden
  const hiddenPaths = [
    "Login",
    "SignUp",
    "Admin-dashboard",
    "Seller-dashboard",
    "User-dashboard",
  ];

  // Check if current path should hide footer
  if (hiddenPaths.some((path) => pathname.includes(path))) {
    return null;
  }

  return (
    <nav className="bg-primary text-white px-4 py-3 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <img
            src="/images/others/logo.png"
            alt="CoursePilot Logo"
            className="w-40"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`relative pb-1 hover:text-secondary transition-colors ${
              isActive("/") ? "text-secondary" : ""
            }`}
          >
            Home
            {isActive("/") && (
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-secondary" />
            )}
          </Link>
          <Link
            href="/bikes"
            className={`relative pb-1 hover:text-secondary transition-colors ${
              isActive("/bikes") ? "text-secondary" : ""
            }`}
          >
            Bikes
            {isActive("/bikes") && (
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-secondary" />
            )}
          </Link>
          <Link
            href="/about-us"
            className={`relative pb-1 hover:text-secondary transition-colors ${
              isActive("/about-us") ? "text-secondary" : ""
            }`}
          >
            About
            {isActive("/about-us") && (
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-secondary" />
            )}
          </Link>
          <Link
            href="/contact"
            className={`relative pb-1 hover:text-secondary transition-colors ${
              isActive("/contact") ? "text-secondary" : ""
            }`}
          >
            Contact
            {isActive("/contact") && (
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-secondary" />
            )}
          </Link>
          <button className="bg-secondary px-4 py-2 rounded hover:bg-orange-600 transition-colors">
            Book a Ride
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-icons">{isOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-4 pt-4 pb-2 gap-4 bg-primary">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`py-2 border-b border-gray-700 w-full ${
              isActive("/") ? "text-secondary" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/bikes"
            onClick={() => setIsOpen(false)}
            className={`py-2 border-b border-gray-700 w-full ${
              isActive("/bikes") ? "text-secondary" : ""
            }`}
          >
            Bikes
          </Link>
          <Link
            href="/about-us"
            onClick={() => setIsOpen(false)}
            className={`py-2 border-b border-gray-700 w-full ${
              isActive("/about-us") ? "text-secondary" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`py-2 border-b border-gray-700 w-full ${
              isActive("/contact") ? "text-secondary" : ""
            }`}
          >
            Contact
          </Link>
          <button className="bg-secondary w-full text-center px-4 py-2 mt-2 rounded hover:bg-orange-600 transition-colors">
            Book a Ride
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
{
  /* <div className="cursor-pointer">
      {user?.photoURL ? (
        <img alt="User" className="w-8 h-8 object-cover rounded-full ring ring-my-primary  ring-offset-2" src={user?.photoURL} />
      ) : (
        <p className="bg-lite p-2 rounded-full ">
          <FaUserAlt className="text-xl text-my-primary " />
        </p>
      )}
    </div> */
}
