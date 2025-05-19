"use client";

import {
  FaBookOpen,
  FaGraduationCap,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 mb-20 py-12 px-6 md:px-16 lg:px-24">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side - Images & Stats */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="relative group">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="relative overflow-hidden rounded-2xl shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="Students learning"
                  className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">Join Our Community</h3>
                  <p className="text-gray-200">10,000+ active learners</p>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ ...fadeIn, transition: { delay: 0.2 } }}
                className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
              >
                <div className="bg-emerald-100 p-3 rounded-full mb-4">
                  <FaBookOpen className="text-emerald-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  100+ Courses
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive curriculum
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ ...fadeIn, transition: { delay: 0.4 } }}
                className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition"
              >
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                  <FaGraduationCap className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Expert Instructors
                </h3>
                <p className="text-gray-600 text-sm">Industry professionals</p>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ ...fadeIn, transition: { delay: 0.1 } }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-medium text-sm shadow-sm">
              About Course Pilot
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Empowering Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">
                Tech Journey
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Course Pilot is revolutionizing online tech education with
              interactive, project-based learning. We bridge the gap between
              theory and real-world application, preparing you for high-demand
              careers in today's digital economy.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-5 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                  <FaCheckCircle className="text-emerald-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    Hands-on Learning
                  </h3>
                  <p className="text-gray-600">
                    Build real projects with our interactive coding environment
                    and get instant feedback.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <FaCheckCircle className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    Career Pathways
                  </h3>
                  <p className="text-gray-600">
                    Structured programs designed to take you from beginner to
                    job-ready in high-growth fields.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-medium hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                Explore Courses <FaArrowRight />
              </button>
              <button className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all shadow-sm hover:shadow-md">
                Meet Our Instructors
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
