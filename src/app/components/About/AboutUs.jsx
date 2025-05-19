"use client";

import {
  FaMotorcycle,
  FaTools,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
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
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 mb-20 py-12 px-6">
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
                  src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80"
                  alt="Motorcycle riders group"
                  className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">
                    Join Our Riding Community
                  </h3>
                  <p className="text-gray-200">10,000+ registered riders</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
              >
                <div className="bg-orange-100 p-3 rounded-full mb-4">
                  <FaMotorcycle className="text-orange-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Honda/Yamaha Specialists
                </h3>
                <p className="text-gray-600 text-sm">
                  Certified service centers
                </p>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
              >
                <div className="bg-amber-100 p-3 rounded-full mb-4">
                  <FaTools className="text-amber-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  OEM Parts
                </h3>
                <p className="text-gray-600 text-sm">Genuine spare parts</p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            className="w-full lg:w-1/2 space-y-8"
          >
            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium text-sm shadow-sm">
              About MotoHub
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Power Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">
                Riding Experience
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              MotoHub is your premier destination for Honda and Yamaha
              motorcycles. We offer sales, service, and a passionate riding
              community. Our certified technicians provide top-notch maintenance
              motorcycles. We offer sales, service, and a passionate riding
              using genuine OEM parts We offer sales.
            </p>

            <div className="space-y-6">
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className="flex items-start gap-5 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                  <FaCheckCircle className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    Expert Maintenance
                  </h3>
                  <p className="text-gray-600">
                    Our Honda/Yamaha certified technicians provide
                    factory-standard service using genuine parts.
                  </p>
                </div>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                className="flex items-start gap-5 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="bg-amber-100 p-3 rounded-lg flex-shrink-0">
                  <FaCheckCircle className="text-amber-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    Riding Community
                  </h3>
                  <p className="text-gray-600">
                    Join our organized rides, events and connect with fellow
                    events and connect with Honda/Yamaha enthusiasts.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                data-aos="fade-up"
                data-aos-delay="400"
                className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl font-medium hover:from-orange-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                Explore Models <FaArrowRight />
              </button>
              <button
                data-aos="fade-up"
                data-aos-delay="500"
                className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all shadow-sm hover:shadow-md"
              >
                Service Center
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
