"use client";

import Link from "next/link";
import {
  FiHome,
  FiPlusSquare,
  FiShoppingBag,
  FiUsers,
  FiSettings,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { FaBicycle } from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-orange-500 p-2 rounded-md text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`w-64 bg-black text-white p-5 space-y-4 fixed h-full transition-all duration-300 z-40
          ${isOpen ? "left-0" : "-left-64"} md:left-0`}
      >
        <Link href="/">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-orange-500 text-3xl">🏍️</span> BikeZone
          </h2>
        </Link>

        <nav className="flex flex-col space-y-3">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 hover:text-orange-500 transition-colors p-2 rounded hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            <FiHome /> Dashboard
          </Link>

          <Link
            href="/Seller-dashboard/bikes"
            className="flex items-center gap-3 hover:text-orange-500 transition-colors p-2 rounded hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            <FaBicycle /> All Bikes
          </Link>

          <Link
            href="/Seller-dashboard/add-bike"
            className="flex items-center gap-3 hover:text-orange-500 transition-colors p-2 rounded hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            <FiPlusSquare /> Add Bike
          </Link>

          <Link
            href="/Seller-dashboard/orders"
            className="flex items-center gap-3 hover:text-orange-500 transition-colors p-2 rounded hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            <FiShoppingBag /> Orders
          </Link>

          <Link
            href="/Seller-dashboard/users"
            className="flex items-center gap-3 hover:text-orange-500 transition-colors p-2 rounded hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            <FiUsers /> Users
          </Link>

          <Link
            href="/Seller-dashboard/settings"
            className="flex items-center gap-3 hover:text-orange-500 transition-colors p-2 rounded hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            <FiSettings /> Settings
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
