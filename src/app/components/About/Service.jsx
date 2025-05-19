"use client";

import {
  FaTools,
  FaMotorcycle,
  FaShoppingCart,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaHandshake,
} from "react-icons/fa";

const Service = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center mb-8 mt-20">
        <h5 className="text-green-600 font-semibold text-sm uppercase bg-green-200 inline-block px-4 py-2 rounded-full mb-5">
          What We Offer
        </h5>
        <h2 className="text-3xl font-bold w-3/4 mx-auto">
          Explore Our Premium Bike Services – From Purchase to Protection!
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center p-12">
        {/* Bike Repair & Maintenance */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md max-w-md border border-blue-200 h-64">
          <div className="flex items-center gap-3">
            <FaTools className="text-blue-500 text-3xl" />
            <h3 className="text-xl font-bold text-gray-800">
              Repair & Maintenance
            </h3>
          </div>
          <p className="mt-3 text-gray-600">
            Keep your ride smooth with our expert <b>repair and maintenance</b>
            services. From engine tuning to tire replacement – we’ve got you
            covered.
          </p>
        </div>

        {/* Bike Sales & Showroom */}
        <div className="bg-red-50 p-6 rounded-lg shadow-md max-w-md border border-red-200 h-64">
          <div className="flex items-center gap-3">
            <FaMotorcycle className="text-red-500 text-3xl" />
            <h3 className="text-xl font-bold text-gray-800">
              Bike Sales & Showroom
            </h3>
          </div>
          <p className="mt-3 text-gray-600">
            Discover a wide range of <b>new and used bikes</b> from trusted
            brands. Visit our virtual showroom and find your perfect match.
          </p>
        </div>

        {/* Online Booking & Delivery */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md max-w-md border border-green-200 h-64">
          <div className="flex items-center gap-3">
            <FaShoppingCart className="text-green-500 text-3xl" />
            <h3 className="text-xl font-bold text-gray-800">
              Easy Booking & Delivery
            </h3>
          </div>
          <p className="mt-3 text-gray-600">
            Book your favorite bike <b>online</b> and get it delivered
            <b> to your doorstep</b> with our fast and reliable delivery
            service.
          </p>
        </div>

        {/* Route Planning Assistance */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md max-w-md border border-yellow-200 h-64">
          <div className="flex items-center gap-3">
            <FaMapMarkedAlt className="text-yellow-500 text-3xl" />
            <h3 className="text-xl font-bold text-gray-800">
              Route & Trip Planning
            </h3>
          </div>
          <p className="mt-3 text-gray-600">
            Get personalized <b>route planning</b> for your bike adventures.
            Discover the best roads, pit stops, and scenic routes with us.
          </p>
        </div>

        {/* Insurance & Safety */}
        <div className="bg-purple-50 p-6 rounded-lg shadow-md max-w-md border border-purple-200 h-64">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-purple-500 text-3xl" />
            <h3 className="text-xl font-bold text-gray-800">
              Insurance & Safety
            </h3>
          </div>
          <p className="mt-3 text-gray-600">
            Ride worry-free with our <b>insurance options</b> and safety
            packages. We care about your protection on every journey.
          </p>
        </div>

        {/* Customer Support */}
        <div className="bg-orange-50 p-6 rounded-lg shadow-md max-w-md border border-orange-200 h-64">
          <div className="flex items-center gap-3">
            <FaHandshake className="text-orange-500 text-3xl" />
            <h3 className="text-xl font-bold text-gray-800">
              24/7 Customer Support
            </h3>
          </div>
          <p className="mt-3 text-gray-600">
            Need help? Our <b>support team</b> is available round-the-clock to
            assist you with any issue, big or small.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
