/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const ImageGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 relative overflow-hidden rounded-xl shadow-lg">
          {activeIndex === 0 && (
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="Team working"
              className="w-full h-[420px] object-cover transition-all duration-300 hover:scale-105"
            />
          )}
          {activeIndex === 1 && (
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="Office space"
              className="w-full h-[420px] object-cover transition-all duration-300 hover:scale-105"
            />
          )}
          {activeIndex === 2 && (
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="Business meeting"
              className="w-full h-[420px] object-cover transition-all duration-300 hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
            <h3 className="text-white text-2xl font-medium">
              {activeIndex === 0 && "Our Global Team"}
              {activeIndex === 1 && "Modern Workspaces"}
              {activeIndex === 2 && "Strategic Meetings"}
            </h3>
          </div>
        </div>

        <div className="flex gap-4 justify-center mb-8">
          <div
            onClick={() => setActiveIndex(0)}
            className={`w-32 h-24 cursor-pointer overflow-hidden rounded-lg transition-all ${
              activeIndex === 0
                ? "ring-4 ring-Primary"
                : "opacity-80 hover:opacity-100"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Thumbnail 1"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            onClick={() => setActiveIndex(1)}
            className={`w-32 h-24 cursor-pointer overflow-hidden rounded-lg transition-all ${
              activeIndex === 1
                ? "ring-4 ring-Primary"
                : "opacity-80 hover:opacity-100"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Thumbnail 2"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            onClick={() => setActiveIndex(2)}
            className={`w-32 h-24 cursor-pointer overflow-hidden rounded-lg transition-all ${
              activeIndex === 2
                ? "ring-4 ring-Primary"
                : "opacity-80 hover:opacity-100"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Thumbnail 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : 2))}
            className="px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-100 flex items-center gap-2"
          >
            <MdArrowBack className="text-xl" />
            Previous
          </button>

          <button
            onClick={() => setActiveIndex((prev) => (prev < 2 ? prev + 1 : 0))}
            className="px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-100 flex items-center gap-2"
          >
            Next
            <MdArrowForward className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
