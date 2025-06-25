"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Bike = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    const fetchBikes = async () => {
      try {
        const res = await fetch("http://localhost:5000/bike-info");
        const data = await res.json();
        console.log("Fetched bike data:", data);

        // Process the data - get top 8 highest priced bikes
        const bikeArray = Array.isArray(data) ? data : data.data;
        const sortedBikes = bikeArray
          .sort((a, b) => b.regularPrice - a.regularPrice)
          .slice(0, 8);

        setBikes(sortedBikes);
      } catch (error) {
        console.error("Error fetching bikes:", error);
        setBikes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBikes();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-6 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h2
        className="text-3xl font-bold text-center mb-8 text-gray-800"
        data-aos="fade-down"
      >
        Featured Bikes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Array.isArray(bikes) &&
          bikes.map((bike, index) => (
            <div
              key={bike._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{bike.name}</h3>
                  <p className="text-orange-300">{bike.category}</p>
                </div>
              </div>

              <div className="p-5">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold text-orange-600">
                      ${bike.discountPrice}
                    </p>
                    {bike.discountPrice < bike.regularPrice && (
                      <p className="text-sm text-gray-500 line-through">
                        ${bike.regularPrice}
                      </p>
                    )}
                    {bike.discountPrice < bike.regularPrice && (
                      <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-0.5 rounded">
                        Save ${bike.regularPrice - bike.discountPrice}
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/bikes/${bike._id}`}
                    className="w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="text-center mt-10" data-aos="fade-up">
        <Link
          href="/bikes"
          className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
        >
          See All Bikes
        </Link>
      </div>
    </div>
  );
};

export default Bike;
