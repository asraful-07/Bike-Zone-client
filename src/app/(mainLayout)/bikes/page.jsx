"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    sort: "",
    search: "",
  });
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
    totalBikes: 0,
  });

  const fetchBikes = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams({
        ...filters,
        page: pagination.page,
      }).toString();

      const res = await fetch(`http://localhost:5000/bike?${queryParams}`);
      const data = await res.json();

      setBikes(data.bikes);
      setPagination({
        ...pagination,
        totalPages: data.pagination.totalPages,
        totalBikes: data.pagination.totalBikes,
      });
    } catch (error) {
      console.error("Error fetching bikes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBikes();
  }, [filters, pagination.page]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
    setPagination({ ...pagination, page: 1 });
  };

  const handlePageChange = (newPage) => {
    setPagination({ ...pagination, page: newPage });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4 text-orange-700">
          Bike Marketplace
        </h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Find your perfect ride from our premium collection
        </p>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Filters */}
          <div className="w-full lg:w-1/4 bg-white p-4 rounded-lg shadow-md h-fit sticky top-4">
            <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">
              Filter Bikes
            </h2>

            {/* Search */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Search
              </label>
              <input
                type="text"
                name="search"
                value={filters.search}
                onChange={handleFilterChange}
                placeholder="Search by name or brand"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Category */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Category</option>
                <option value="Yamaha">Yamaha</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Pulsar">Pulsar</option>
                <option value="Honda">Honda</option>
                <option value="TVS">TVS</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Range
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                  placeholder="Min Price"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="number"
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                  placeholder="Max Price"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Sort By */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sort By
              </label>
              <select
                name="sort"
                value={filters.sort}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rating</option>
              </select>
            </div>

            <button
              onClick={() => {
                setFilters({
                  category: "",
                  minPrice: "",
                  maxPrice: "",
                  sort: "",
                  search: "",
                });
              }}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors"
            >
              Clear Filters
            </button>
          </div>

          {/* Right Side - Bike Listings */}
          <div className="w-full lg:w-3/4">
            {/* Loading State */}
            {loading && (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
              </div>
            )}

            {/* Bike Grid */}
            {!loading && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {bikes.map((bike) => (
                    <div
                      key={bike._id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-orange-100"
                    >
                      <div className="relative">
                        <img
                          src={bike.image}
                          alt={bike.name}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          {bike.category}
                        </div>
                        {bike.rating && (
                          <div className="absolute top-2 left-2 bg-white text-orange-500 text-xs font-bold px-2 py-1 rounded-full flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-1"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {bike.rating}
                          </div>
                        )}
                      </div>

                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h2 className="text-xl font-bold text-gray-800">
                            {bike.name}
                          </h2>
                          <p className="text-orange-600 font-bold text-lg">
                            ${bike.regularPrice}
                          </p>
                        </div>

                        <div className="mt-4">
                          <Link href={`/bikes/${bike._id}`}>
                            <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                              </svg>
                              Buy Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {pagination.totalPages > 1 && (
                  <div className="flex justify-center mt-8">
                    <nav className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          handlePageChange(Math.max(1, pagination.page - 1))
                        }
                        disabled={pagination.page === 1}
                        className="px-3 py-1 rounded-md border border-gray-300 disabled:opacity-50"
                      >
                        Previous
                      </button>

                      {Array.from(
                        { length: Math.min(5, pagination.totalPages) },
                        (_, i) => {
                          let pageNum;
                          if (pagination.totalPages <= 5) {
                            pageNum = i + 1;
                          } else if (pagination.page <= 3) {
                            pageNum = i + 1;
                          } else if (
                            pagination.page >=
                            pagination.totalPages - 2
                          ) {
                            pageNum = pagination.totalPages - 4 + i;
                          } else {
                            pageNum = pagination.page - 2 + i;
                          }

                          return (
                            <button
                              key={pageNum}
                              onClick={() => handlePageChange(pageNum)}
                              className={`px-3 py-1 rounded-md ${
                                pagination.page === pageNum
                                  ? "bg-orange-500 text-white"
                                  : "border border-gray-300"
                              }`}
                            >
                              {pageNum}
                            </button>
                          );
                        }
                      )}

                      <button
                        onClick={() =>
                          handlePageChange(
                            Math.min(pagination.totalPages, pagination.page + 1)
                          )
                        }
                        disabled={pagination.page === pagination.totalPages}
                        className="px-3 py-1 rounded-md border border-gray-300 disabled:opacity-50"
                      >
                        Next
                      </button>
                    </nav>
                  </div>
                )}

                <div className="text-center text-gray-500 mt-4">
                  Showing {bikes.length} of {pagination.totalBikes} bikes
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
