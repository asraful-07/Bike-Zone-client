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
          Your One-Stop Destination for All Bike Needs – Sales, Service, Support
          & More!
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center p-12">
        {/* Repair & Maintenance */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md max-w-md border border-blue-200 h-80 overflow-y-auto">
          <div className="flex items-center gap-3">
            <FaTools className="text-blue-500 text-3xl" />
            <h3 className="text-xl font-bold text-gray-800">
              Repair & Maintenance
            </h3>
          </div>
          <p className="mt-3 text-gray-600">
            Our experienced mechanics are ready to keep your bike in top
            condition. Whether it's routine maintenance, engine diagnostics, oil
            changes, brake repair, or emergency fixes—we’ve got your back. We
            use only genuine parts and offer transparent pricing. Schedule your
            service online or visit our nearest service point for hassle-free
            maintenance.
          </p>
        </div>

        {/* Bike Sales */}
        <div className="bg-red-50 p-6 rounded-lg shadow-md max-w-md border border-red-200 h-80 overflow-y-auto">
          <div className="flex items-center gap-3">
            <FaMotorcycle className="text-red-500 text-3xl" />
            <h3 className="text-xl font-bold text-gray-800">
              New & Used Bike Sales
            </h3>
          </div>
          <p className="mt-3 text-gray-600">
            Browse a wide range of bikes, from brand-new models to certified
            pre-owned ones. We offer flexible payment plans, EMI options, and
            exchange deals. Every used bike goes through a 100-point inspection
            process. Visit our online showroom, check 360° views, and compare
            specs side-by-side before making your dream purchase.
          </p>
        </div>

        {/* Online Booking */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md max-w-md border border-green-200 h-80 overflow-y-auto">
          <div className="flex items-center gap-3">
            <FaShoppingCart className="text-green-500 text-3xl" />
            <h3 className="text-xl font-bold text-gray-800">
              Easy Online Booking & Doorstep Delivery
            </h3>
          </div>
          <p className="mt-3 text-gray-600">
            Buy or book a bike with just a few clicks. Our user-friendly
            platform ensures a seamless experience. Choose your bike, make a
            secure payment, and we’ll deliver it right to your doorstep—fast and
            safe. We also offer pre-booking for upcoming models and reservation
            for test rides at your convenience.
          </p>
        </div>

        {/* Route Planning */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md max-w-md border border-yellow-200 h-80 overflow-y-auto">
          <div className="flex items-center gap-3">
            <FaMapMarkedAlt className="text-yellow-500 text-3xl" />
            <h3 className="text-xl font-bold text-gray-800">
              Smart Route & Trip Planning
            </h3>
          </div>
          <p className="mt-3 text-gray-600">
            Going on a long ride or weekend trip? Let us help you plan the
            perfect route with our advanced route planner. Get traffic updates,
            fuel station locations, repair shops, rest areas, and weather info
            all in one place. Whether you're a city commuter or an adventure
            tourer, we’ll make sure your ride is smooth and well-prepared.
          </p>
        </div>

        {/* Insurance & Safety */}
        <div className="bg-purple-50 p-6 rounded-lg shadow-md max-w-md border border-purple-200 h-80 overflow-y-auto">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-purple-500 text-3xl" />
            <h3 className="text-xl font-bold text-gray-800">
              Bike Insurance & Safety Coverage
            </h3>
          </div>
          <p className="mt-3 text-gray-600">
            We offer comprehensive insurance plans including third-party,
            comprehensive, and theft protection. Our partners provide paperless
            claims, free towing, and instant coverage. Alongside, grab
            top-quality safety gear like helmets, jackets, and gloves at
            discounted prices for our customers.
          </p>
        </div>

        {/* 24/7 Support */}
        <div className="bg-orange-50 p-6 rounded-lg shadow-md max-w-md border border-orange-200 h-80 overflow-y-auto">
          <div className="flex items-center gap-3">
            <FaHandshake className="text-orange-500 text-3xl" />
            <h3 className="text-xl font-bold text-gray-800">
              24/7 Customer Support & Roadside Assistance
            </h3>
          </div>
          <p className="mt-3 text-gray-600">
            Got questions, issues, or emergencies? Our support team is available
            round-the-clock via phone, chat, or email. Plus, with our roadside
            assistance feature, you can get help in case of a breakdown, flat
            tire, or battery issue—anytime, anywhere. Your satisfaction and
            safety are our top priorities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
