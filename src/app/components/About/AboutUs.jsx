"use client";

import { FaBiking, FaTools, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 mb-20 py-12 px-6 md:px-16 lg:px-24">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side - Images & Stats */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="relative group">
              <div
                data-aos="fade-right"
                className="relative overflow-hidden rounded-2xl shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80"
                  alt="Bike enthusiasts riding together"
                  className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">Join Our Community</h3>
                  <p className="text-gray-200">5,000+ active riders</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
              >
                <div className="bg-emerald-100 p-3 rounded-full mb-4">
                  <FaBiking className="text-emerald-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  50+ Tours
                </h3>
                <p className="text-gray-600 text-sm">Scenic routes worldwide</p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
              >
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                  <FaTools className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Expert Guides
                </h3>
                <p className="text-gray-600 text-sm">Certified professionals</p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="w-full lg:w-1/2 space-y-8"
          >
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-medium text-sm shadow-sm">
              About Bike Adventures
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Fuel Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">
                Riding Passion
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Bike Adventures is transforming the cycling experience with guided
              tours, maintenance workshops, and community rides. We connect
              riders with breathtaking trails and provide the knowledge to enjoy
              cycling safely and confidently.
            </p>

            <div className="space-y-6">
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className="flex items-start gap-5 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                  <FaCheckCircle className="text-emerald-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    Guided Tours
                  </h3>
                  <p className="text-gray-600">
                    Explore scenic routes with our experienced guides who know
                    the best trails and hidden gems.
                  </p>
                </div>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                className="flex items-start gap-5 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <FaCheckCircle className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    Maintenance Workshops
                  </h3>
                  <p className="text-gray-600">
                    Learn essential bike maintenance skills to keep your ride in
                    top condition all year round.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                data-aos="fade-up"
                data-aos-delay="400"
                className="px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-medium hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                Explore Tours <FaArrowRight />
              </button>
              <button
                data-aos="fade-up"
                data-aos-delay="500"
                className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all shadow-sm hover:shadow-md"
              >
                Our Bike Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
