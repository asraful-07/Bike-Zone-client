"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTools,
  FaBicycle,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-20 mt-16 text-white bg-[#090614]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Grid Section */}
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 mb-10">
          {/* Top Section */}
          <div>
            <Image
              src="/images/others/footer-logo.png"
              alt="BikeHub Logo"
              width={160}
              height={40}
              className="w-40"
            />
            <p className="mt-4 text-gray-300 text-lg">
              Your ultimate destination for premium bikes, parts, and services.
              We offer top-quality bicycles, professional maintenance, and
              expert advice to fuel your riding passion. Ride with confidence
              with BikeHub's trusted products and services.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-blue-600">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-800">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Bike Categories */}
          <div>
            <h6 className="text-lg font-semibold mb-4 flex items-center">
              <FaBicycle className="mr-2" /> Bike Types
            </h6>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Mountain Bikes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Road Bikes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Hybrid Bikes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Electric Bikes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Kids Bikes
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-lg font-semibold mb-4 flex items-center">
              <FaTools className="mr-2" /> Our Services
            </h6>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Bike Repair & Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Custom Bike Building
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Bike Fitting Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Annual Service Packages
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Emergency Roadside Assistance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Contact Us</h6>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                <span>123 Bike Lane, Cycling City, CC 12345</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                <a
                  href="tel:+11234567890"
                  className="hover:underline hover:text-white"
                >
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a
                  href="mailto:info@bikehub.com"
                  className="hover:underline hover:text-white"
                >
                  info@bikehub.com
                </a>
              </li>
              <li className="pt-2">
                <h6 className="font-medium text-white mb-2">Opening Hours</h6>
                <p>Mon-Fri: 9am - 7pm</p>
                <p>Sat: 10am - 5pm</p>
                <p>Sun: 12pm - 4pm</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col lg:flex-row justify-between items-center text-gray-400 text-sm">
          <p className="text-center lg:text-center w-full">
            &copy; {new Date().getFullYear()} BikeHub. All rights reserved.
          </p>
          <div className="flex flex-col items-center mt-4 lg:mt-0">
            <img
              src="https://nonacademy.net/_next/image?url=%2Fimages%2Fpayment.png&w=640&q=75"
              alt="Payment Methods"
              className="w-96"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
