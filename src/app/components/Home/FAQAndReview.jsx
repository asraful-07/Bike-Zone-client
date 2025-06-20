import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const reviews = [
  { name: "Rifat", text: "Great service! I'm very satisfied." },
  { name: "Nadia", text: "Loved the quality of the product!" },
  { name: "Shuvo", text: "Fast delivery and friendly support." },
];

const FAQAndReview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-50">
      {/* FAQ Section (without .map) */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-blue-600">
          Frequently Asked Questions
        </h2>

        <div className="mb-4">
          <h3 className="font-semibold text-lg text-gray-800">
            What is your return policy?
          </h3>
          <p className="text-gray-600">We allow returns within 30 days.</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-lg text-gray-800">
            How can I contact support?
          </h3>
          <p className="text-gray-600">
            You can contact us via email or phone.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-lg text-gray-800">
            Do you offer international shipping?
          </h3>
          <p className="text-gray-600">
            Yes, we ship to most countries worldwide.
          </p>
        </div>
      </div>

      {/* Review Section (with Swiper) */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-green-600">
          What Our Clients Say
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          modules={[Autoplay]}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md p-4 rounded-xl">
                <p className="text-gray-700 italic">"{review.text}"</p>
                <h4 className="text-right font-semibold mt-2 text-gray-800">
                  - {review.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FAQAndReview;
