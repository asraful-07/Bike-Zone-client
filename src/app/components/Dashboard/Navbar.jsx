"use client";

const Navbar = () => {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 border rounded-md"
        />
        <div className="w-10 h-10 rounded-full bg-gray-300" />
      </div>
    </header>
  );
};

export default Navbar;
