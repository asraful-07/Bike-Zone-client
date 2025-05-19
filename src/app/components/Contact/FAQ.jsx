"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "What are the benefits of this course?",
    answer:
      "Our course provides structured learning, hands-on projects, and unlimited support.",
  },
  {
    id: 2,
    question: "How can I enroll in the program?",
    answer:
      "Simply register on our platform, choose your course, and start learning instantly.",
  },
  {
    id: 3,
    question: "Is financial aid available?",
    answer:
      "Yes, we offer scholarships and installment plans for eligible students.",
  },
  {
    id: 4,
    question: "Can I access the course materials anytime?",
    answer: "Yes, all course content is available 24/7 for enrolled students.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-16">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://i.ibb.co.com/Ldd8qdnR/faq-img.webp"
          alt="Student Learning"
          className="w-full max-w-md mx-auto md:mx-0"
        />
      </div>

      {/* Right Side - FAQ Content */}
      <div className="w-full md:w-1/2">
        <p className="text-emerald-600 font-semibold uppercase">FAQ</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Frequently <span className="text-emerald-500">Asked</span> Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className={`p-5 rounded-xl border transition-all duration-300 ${
                openIndex === index
                  ? "bg-emerald-50 border-emerald-200"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-gray-800 font-medium flex items-center gap-3">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">
                    {faq.id}
                  </span>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaChevronDown className="text-emerald-600" />
                ) : (
                  <FaChevronRight className="text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
