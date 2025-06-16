"use client";

import React, { useContext, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AuthContext } from "@/Provider/AuthProvider";
import {
  FaUserAlt,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Check if a link is active
  const isActive = (href) => {
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  };

  // List of paths where navbar should be hidden
  const hiddenPaths = [
    "/login",
    "/register",
    "/admin-dashboard",
    "/seller-dashboard",
    "/user-dashboard",
  ];

  // Check if current path should hide navbar
  if (hiddenPaths.some((path) => pathname.includes(path))) {
    return null;
  }

  const handleLogoutClick = async () => {
    try {
      await handleLogout();
      setIsUserMenuOpen(false);
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

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

          {/* User Avatar with Dropdown */}
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center gap-2 focus:outline-none"
            >
              {user?.photoURL ? (
                <img
                  alt="User"
                  className="w-8 h-8 object-cover rounded-full ring ring-my-primary ring-offset-2"
                  src={user?.photoURL}
                />
              ) : (
                <div className="bg-lite p-2 rounded-full">
                  <FaUserAlt className="text-xl text-my-primary" />
                </div>
              )}
            </button>

            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                {user ? (
                  <>
                    <Link
                      href="/Seller-dashboard"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogoutClick}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <FaSignOutAlt />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <FaSignInAlt />
                      Sign In
                    </Link>
                    <Link
                      href="/register"
                      onClick={() => setIsUserMenuOpen(false)}
                      className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <FaUserPlus />
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
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

          {user ? (
            <div className="space-y-2">
              <Link
                href={
                  user.role === "admin"
                    ? "/admin-dashboard"
                    : user.role === "seller"
                    ? "/seller-dashboard"
                    : "/user-dashboard"
                }
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-secondary px-4 py-2 rounded hover:bg-orange-600 transition-colors"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogoutClick}
                className="w-full text-center bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-secondary px-4 py-2 rounded hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
              >
                <FaSignInAlt />
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
              >
                <FaUserPlus />
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
