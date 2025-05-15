"use client";

import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-black text-white p-5 space-y-4">
      <h2 className="text-2xl font-bold mb-6">🏍️ BikeZone</h2>
      <nav className="flex flex-col space-y-3">
        <Link href="/dashboard" className="hover:text-emerald-400">
          Dashboard
        </Link>
        <Link href="/dashboard/bikes" className="hover:text-emerald-400">
          All Bikes
        </Link>
        <Link href="/dashboard/add-bike" className="hover:text-emerald-400">
          Add Bike
        </Link>
        <Link href="/dashboard/orders" className="hover:text-emerald-400">
          Orders
        </Link>
        <Link href="/dashboard/users" className="hover:text-emerald-400">
          Users
        </Link>
        <Link href="/dashboard/settings" className="hover:text-emerald-400">
          Settings
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
