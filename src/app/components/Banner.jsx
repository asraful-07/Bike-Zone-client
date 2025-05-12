"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="w-full bg-orange-50">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex items-center justify-between gap-10 px-10 py-12">
            {/* Left Side: Text & Button */}
            <div className="flex-1">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-5">
                Accelerate Your Learning <br /> with{" "}
                <span className="text-orange-500">CoursePilot</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Discover a world of top-tier courses designed by industry
                experts. Whether you're a beginner or looking to sharpen your
                skills, CoursePilot helps you reach your goals faster and
                smarter. Let’s build your dream career—one course at a time.
              </p>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-xl text-lg flex items-center gap-2 hover:bg-orange-600 transition">
                Get Started <FaArrowRight />
              </button>
            </div>

            {/* Right Side: Image */}
            <div className="flex-1">
              <img
                src="/images/slider/bike1.png"
                alt="CoursePilot Bike"
                className="w-full h-auto max-w-[640px]"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-between gap-10 px-10 py-12">
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                Power Your <span className="text-orange-600">Passion</span> with
                CoursePilot
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                Discover high-quality courses, expert instructors, and the tools
                you need to thrive in today's fast-paced world. It's time to
                take charge of your future with the right knowledge.
              </p>
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg flex items-center gap-2 hover:bg-orange-700 transition">
                Explore Now <FaArrowRight />
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-end">
              <img
                src="/images/slider/bike3.png"
                alt="CoursePilot Bike"
                className="w-full h-auto max-w-[640px]"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-between gap-10 px-10 py-12">
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-snug">
                Ride Into the Future <br /> with{" "}
                <span className="text-orange-500">CoursePilot</span>
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-6 max-w-xl leading-relaxed">
                Explore dynamic and interactive learning experiences. Our
                platform helps you master skills faster with real-world
                projects, expert guidance, and a strong learning community. Your
                journey begins here!
              </p>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg flex items-center gap-2 hover:bg-orange-600 transition-all duration-300 shadow">
                Join Now <FaArrowRight />
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-end">
              <img
                src="/images/slider/bike4.png"
                alt="Bike Future"
                className="w-full h-auto max-w-[640px]"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-between gap-10 px-10 py-12">
            {/* Left Side: Text Content */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-snug">
                Learn Grow <br />
                <span className="text-orange-500">Succeed</span> with
                CoursePilot
              </h2>
              <p className="text-lg text-gray-700 mb-6 max-w-xl leading-relaxed">
                CoursePilot gives you access to expertly crafted courses
                tailored for success. Whether it’s tech, design, or business —
                we help you take that next big step.
              </p>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-xl text-lg flex items-center gap-2 hover:bg-orange-600 transition-all">
                Start Learning <FaArrowRight />
              </button>
            </div>

            {/* Right Side: Image */}
            <div className="flex-1 flex justify-end">
              <img
                src="/images/slider/bike2.png"
                alt="CoursePilot Bike 2"
                className="w-full h-auto max-w-[640px]"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
