"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
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
              alt="CoursePilot Logo"
              width={160}
              height={40}
              className="w-40"
            />
            <p className="mt-4 text-gray-300 text-lg">
              Empowering education with AI-driven personalized learning. The
              ed-tech startup transforming education for all. Enjoy high-quality
              courses, expert instructors, and flexible scheduling. Join
              CoursePilot today!
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

          {/* Courses */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Courses</h6>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Data Science
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Machine Learning
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Resources</h6>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Support</h6>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col lg:flex-row justify-between items-center text-gray-400 text-sm">
          <p className="text-center lg:text-center w-full">
            &copy; {new Date().getFullYear()} CoursePilot. All rights reserved.
          </p>
          <img
            src="https://nonacademy.net/_next/image?url=%2Fimages%2Fpayment.png&w=640&q=75"
            alt="Payment Methods"
            className="w-96 mt-4 lg:mt-0 lg:ml-auto"
          />
        </div>
      </div>
    </footer>
  );
}

// https://i.ibb.co.com/XxbYytCs/footer-logo.png
// https://i.ibb.co.com/MDXGVV9L/logo.webp
