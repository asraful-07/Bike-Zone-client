"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Bike<span className="text-secondary italic">Zone</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-secondary transition">
            Home
          </Link>
          <Link href="/bikes" className="hover:text-secondary transition">
            Bikes
          </Link>
          <Link href="/about-us" className="hover:text-secondary transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-secondary transition">
            Contact
          </Link>
          <button className="bg-secondary px-4 py-2 rounded hover:bg-orange-600 transition">
            Book a Ride
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="material-icons">menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start px-4 pt-4 pb-2 gap-3 bg-primary">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/bikes" onClick={() => setIsOpen(false)}>
            Bikes
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <button className="bg-secondary w-full text-left px-4 py-2 mt-2 rounded hover:bg-orange-600 transition">
            Book a Ride
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
