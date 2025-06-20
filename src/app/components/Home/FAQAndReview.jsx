"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import {
  FaQuoteLeft,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronRight,
  FaMotorcycle,
  FaStar,
} from "react-icons/fa";

const reviews = [
  {
    name: "Rifat",
    image: "https://i.ibb.co/zHRJ71nt/images-8.jpg",
    text: "Great service! I'm very satisfied with their attention to detail and quick response time. My bike runs like new after their tune-up.",
    rating: 5,
  },
  {
    name: "Nadir",
    image: "https://i.ibb.co/VWMHMF5J/download-4.jpg",
    text: "Loved the quality of the service! They fixed my Yamaha R15 in no time and the pricing was very reasonable compared to other shops.",
    rating: 4,
  },
  {
    name: "Shuvo",
    image: "https://i.ibb.co/4ZSfBHMX/download-2.jpg",
    text: "Fast delivery of parts and friendly support. Will definitely order again from this company. Their mechanics really know Honda bikes well.",
    rating: 5,
  },
  {
    name: "Karim",
    image: "https://i.ibb.co/Z6G2kDS5/images-13.jpg",
    text: "The customer service is exceptional. They went above and beyond to solve my issue with my CBR's electrical problem. Highly recommended!",
    rating: 4,
  },
];

const FAQAndReview = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <FaMotorcycle className="text-orange-500 text-xl" />
          <p className="text-orange-600 font-semibold uppercase text-sm tracking-wider">
            Moto Support
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Rider <span className="text-orange-500">Support</span> Center
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about our services and what riders say
          about their experience.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* FAQ Section */}
        <div className="w-full">
          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div
              className={`p-5 rounded-xl border transition-all duration-300 ${
                openIndex === 0
                  ? "bg-orange-50 border-orange-200"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => toggleFAQ(0)}
              >
                <span className="text-gray-800 font-medium flex items-center gap-3">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
                    1
                  </span>
                  What motorcycle models do you service?
                </span>
                {openIndex === 0 ? (
                  <FaChevronDown className="text-orange-600" />
                ) : (
                  <FaChevronRight className="text-gray-400" />
                )}
              </button>
              {openIndex === 0 && (
                <p className="mt-3 text-gray-600 pl-9">
                  We specialize in Honda, Yamaha, Suzuki and Bajaj motorcycles
                  of all models, from sport bikes to cruisers. Our technicians
                  are certified for most Japanese and Indian brands.
                </p>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div
              className={`p-5 rounded-xl border transition-all duration-300 ${
                openIndex === 1
                  ? "bg-orange-50 border-orange-200"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => toggleFAQ(1)}
              >
                <span className="text-gray-800 font-medium flex items-center gap-3">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
                    2
                  </span>
                  Do you use genuine OEM parts?
                </span>
                {openIndex === 1 ? (
                  <FaChevronDown className="text-orange-600" />
                ) : (
                  <FaChevronRight className="text-gray-400" />
                )}
              </button>
              {openIndex === 1 && (
                <p className="mt-3 text-gray-600 pl-9">
                  Yes, we only use authentic manufacturer parts for all repairs
                  and maintenance. We also offer premium aftermarket options for
                  budget-conscious riders.
                </p>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div
              className={`p-5 rounded-xl border transition-all duration-300 ${
                openIndex === 2
                  ? "bg-orange-50 border-orange-200"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => toggleFAQ(2)}
              >
                <span className="text-gray-800 font-medium flex items-center gap-3">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
                    3
                  </span>
                  How often should I service my bike?
                </span>
                {openIndex === 2 ? (
                  <FaChevronDown className="text-orange-600" />
                ) : (
                  <FaChevronRight className="text-gray-400" />
                )}
              </button>
              {openIndex === 2 && (
                <p className="mt-3 text-gray-600 pl-9">
                  We recommend service every 3,000-5,000 km depending on your
                  riding conditions and model. Severe riding conditions may
                  require more frequent maintenance.
                </p>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div
              className={`p-5 rounded-xl border transition-all duration-300 ${
                openIndex === 3
                  ? "bg-orange-50 border-orange-200"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => toggleFAQ(3)}
              >
                <span className="text-gray-800 font-medium flex items-center gap-3">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
                    4
                  </span>
                  Do you offer emergency repair services?
                </span>
                {openIndex === 3 ? (
                  <FaChevronDown className="text-orange-600" />
                ) : (
                  <FaChevronRight className="text-gray-400" />
                )}
              </button>
              {openIndex === 3 && (
                <p className="mt-3 text-gray-600 pl-9">
                  Yes, we provide 24/7 emergency towing and repair services for
                  stranded riders. Call our hotline at +880 1234 567890 for
                  immediate assistance.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Review Section */}
        <div className="w-full">
          <div className="overflow-hidden h-full">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              effect="fade"
              loop={true}
              modules={[Autoplay, EffectFade]}
              className="h-full"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-orange-200"
                      />
                      <div className="ml-4">
                        <h4 className="font-bold text-gray-800">
                          {review.name}
                        </h4>
                        <div className="flex items-center mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <FaStar
                                key={i}
                                className={`text-sm ${
                                  i < review.rating
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg relative pl-8">
                      <FaQuoteLeft className="text-orange-200 text-3xl absolute left-0 top-0" />
                      {review.text}
                    </p>
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <div className="flex justify-center space-x-2">
                        {reviews.map((_, i) => (
                          <span
                            key={i}
                            className={`block w-2 h-2 rounded-full ${
                              i === index ? "bg-orange-600" : "bg-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAndReview;
