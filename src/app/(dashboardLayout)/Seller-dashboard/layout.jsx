import Sidebar from "@/app/components/Dashboard/Sidebar";
import Navbar from "@/app/components/Shared/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Content shifted right to make space for sidebar */}
      <div className="md:pl-72 flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="p-6 bg-gray-100 flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
