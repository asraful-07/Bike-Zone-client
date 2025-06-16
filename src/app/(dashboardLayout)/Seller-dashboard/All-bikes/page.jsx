"use client";

import { useEffect, useState } from "react";

const BikesPage = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await fetch("http://localhost:5000/bike-info");
        const data = await response.json();
        setBikes(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bikes:", error);
        setLoading(false);
      }
    };

    fetchBikes();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-800 mb-8 border-b-4 border-orange-300 pb-2">
          All Bikes Collection
        </h1>

        <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
          <table className="min-w-full divide-y divide-orange-200">
            <thead className="bg-orange-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-orange-200">
              {bikes &&
                Array.isArray(bikes) &&
                bikes.map((bike) => (
                  <tr
                    key={bike._id}
                    className="hover:bg-orange-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img
                        src={bike.image}
                        alt={bike.name}
                        className="h-16 w-16 object-cover rounded-md"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-lg font-semibold text-orange-900">
                        {bike.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
                        {bike.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-orange-900 font-bold">
                      ${bike.regularPrice}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {bikes.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-orange-600 text-xl">
              No bikes found in the database.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BikesPage;
