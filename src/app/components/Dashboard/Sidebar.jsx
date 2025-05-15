"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiHome,
  FiPlusSquare,
  FiShoppingBag,
  FiUsers,
  FiSettings,
  FiMenu,
  FiX,
  FiPieChart,
  FiDollarSign,
  FiMessageSquare,
} from "react-icons/fi";
import { FaMotorcycle, FaRegBell } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("dashboard");

  return (
    <>
      {/* Mobile menu button - Floating with shadow */}
      <button
        className="md:hidden fixed top-6 left-6 z-50 bg-orange-600 p-3 rounded-xl text-white shadow-lg hover:bg-orange-700 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Premium Sidebar */}
      <aside
        className={`w-72 bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 fixed h-full transition-all duration-500 z-40
          ${isOpen ? "left-0" : "-left-96"} md:left-0 shadow-2xl`}
      >
        {/* Logo with smooth hover */}
        <Link href="/" className="group">
          <div className="flex items-center gap-3 mb-10 p-2 rounded-lg group-hover:bg-white/10 transition-all duration-300">
            <RiDashboardFill className="text-orange-400 text-3xl" />
            <h2 className="text-2xl font-extrabold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              BikeZone{" "}
              <span className="text-xs font-normal text-gray-400">PRO</span>
            </h2>
          </div>
        </Link>

        {/* User profile mini card */}
        <div className="flex items-center gap-3 mb-8 p-3 bg-gray-800/50 rounded-xl border border-gray-700">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-bold">
            JD
          </div>
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-xs text-gray-400">Premium Member</p>
          </div>
          <button className="ml-auto text-gray-400 hover:text-orange-400">
            <FaRegBell />
          </button>
        </div>

        {/* Main Navigation - Manually listed items */}
        <nav className="space-y-1">
          <Link
            href="/dashboard"
            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300
              ${
                activeLink === "dashboard"
                  ? "bg-orange-600/20 text-orange-400 border-l-4 border-orange-500"
                  : "hover:bg-white/5 hover:text-orange-300 text-gray-300"
              }`}
            onClick={() => {
              setIsOpen(false);
              setActiveLink("dashboard");
            }}
          >
            <span className="text-lg">
              <FiHome />
            </span>
            <span className="font-medium">Dashboard</span>
          </Link>

          <Link
            href="/Seller-dashboard/bikes"
            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300
              ${
                activeLink === "bikes"
                  ? "bg-orange-600/20 text-orange-400 border-l-4 border-orange-500"
                  : "hover:bg-white/5 hover:text-orange-300 text-gray-300"
              }`}
            onClick={() => {
              setIsOpen(false);
              setActiveLink("bikes");
            }}
          >
            <span className="text-lg">
              <FaMotorcycle />
            </span>
            <span className="font-medium">All Bikes</span>
          </Link>

          <Link
            href="/Seller-dashboard/add-bike"
            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300
              ${
                activeLink === "add-bike"
                  ? "bg-orange-600/20 text-orange-400 border-l-4 border-orange-500"
                  : "hover:bg-white/5 hover:text-orange-300 text-gray-300"
              }`}
            onClick={() => {
              setIsOpen(false);
              setActiveLink("add-bike");
            }}
          >
            <span className="text-lg">
              <FiPlusSquare />
            </span>
            <span className="font-medium">Add Bike</span>
          </Link>

          <Link
            href="/Seller-dashboard/orders"
            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300
              ${
                activeLink === "orders"
                  ? "bg-orange-600/20 text-orange-400 border-l-4 border-orange-500"
                  : "hover:bg-white/5 hover:text-orange-300 text-gray-300"
              }`}
            onClick={() => {
              setIsOpen(false);
              setActiveLink("orders");
            }}
          >
            <span className="text-lg">
              <FiShoppingBag />
            </span>
            <span className="font-medium">Orders</span>
          </Link>

          <Link
            href="/Seller-dashboard/sales"
            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300
              ${
                activeLink === "sales"
                  ? "bg-orange-600/20 text-orange-400 border-l-4 border-orange-500"
                  : "hover:bg-white/5 hover:text-orange-300 text-gray-300"
              }`}
            onClick={() => {
              setIsOpen(false);
              setActiveLink("sales");
            }}
          >
            <span className="text-lg">
              <FiDollarSign />
            </span>
            <span className="font-medium">Sales</span>
          </Link>

          <Link
            href="/Seller-dashboard/users"
            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300
              ${
                activeLink === "users"
                  ? "bg-orange-600/20 text-orange-400 border-l-4 border-orange-500"
                  : "hover:bg-white/5 hover:text-orange-300 text-gray-300"
              }`}
            onClick={() => {
              setIsOpen(false);
              setActiveLink("users");
            }}
          >
            <span className="text-lg">
              <FiUsers />
            </span>
            <span className="font-medium">Users</span>
          </Link>

          <Link
            href="/Seller-dashboard/analytics"
            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300
              ${
                activeLink === "analytics"
                  ? "bg-orange-600/20 text-orange-400 border-l-4 border-orange-500"
                  : "hover:bg-white/5 hover:text-orange-300 text-gray-300"
              }`}
            onClick={() => {
              setIsOpen(false);
              setActiveLink("analytics");
            }}
          >
            <span className="text-lg">
              <FiPieChart />
            </span>
            <span className="font-medium">Analytics</span>
          </Link>

          <Link
            href="/Seller-dashboard/messages"
            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300
              ${
                activeLink === "messages"
                  ? "bg-orange-600/20 text-orange-400 border-l-4 border-orange-500"
                  : "hover:bg-white/5 hover:text-orange-300 text-gray-300"
              }`}
            onClick={() => {
              setIsOpen(false);
              setActiveLink("messages");
            }}
          >
            <span className="text-lg">
              <FiMessageSquare />
            </span>
            <span className="font-medium">Messages</span>
            <span className="ml-auto bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
              3
            </span>
          </Link>

          <Link
            href="/Seller-dashboard/settings"
            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300
              ${
                activeLink === "settings"
                  ? "bg-orange-600/20 text-orange-400 border-l-4 border-orange-500"
                  : "hover:bg-white/5 hover:text-orange-300 text-gray-300"
              }`}
            onClick={() => {
              setIsOpen(false);
              setActiveLink("settings");
            }}
          >
            <span className="text-lg">
              <FiSettings />
            </span>
            <span className="font-medium">Settings</span>
          </Link>
        </nav>

        {/* Bottom section - Logout or help */}
        <div className="absolute bottom-6 left-0 right-0 px-6">
          <button className="w-full flex items-center gap-3 p-3 text-gray-400 hover:text-orange-400 rounded-lg transition-colors duration-300">
            <FiSettings />
            <span>Help & Settings</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
