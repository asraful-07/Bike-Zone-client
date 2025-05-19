import { FaHeart, FaShoppingCart, FaBicycle } from "react-icons/fa";

const Page = async ({ params }) => {
  const id = params?.id;

  const res = await fetch(`http://localhost:5000/bike-data/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-6 max-w-md bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Bike Not Found
          </h1>
          <p className="text-gray-600">
            The bike you're looking for doesn't exist or may have been removed.
          </p>
        </div>
      </div>
    );
  }

  const bike = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-6 flex items-center justify-center bg-white rounded-xl shadow-md">
              <img
                src={bike.image}
                alt={bike.name}
                className="w-full h-auto max-h-96 object-contain rounded-lg"
              />
            </div>

            <div className="md:w-1/2 p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                    {bike.category}
                  </span>
                  <h1 className="text-3xl font-bold text-gray-900 mt-2">
                    {bike.name}
                  </h1>
                </div>
                <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                  <svg
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-gray-800 font-semibold">
                    {bike.rating}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{bike.description}</p>

              <div className="mb-6">
                {bike.discountPrice < bike.regularPrice ? (
                  <>
                    <span className="text-3xl font-bold text-gray-900">
                      ${bike.discountPrice}
                    </span>
                    <span className="ml-2 text-lg text-gray-500 line-through">
                      ${bike.regularPrice}
                    </span>
                    <span className="ml-2 bg-orange-100 text-orange-800 text-sm font-semibold px-2 py-1 rounded">
                      Save ${bike.regularPrice - bike.discountPrice}
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">
                    ${bike.regularPrice}
                  </span>
                )}
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Key Features
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {bike.features?.split("\n").map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaBicycle className="h-5 w-5 text-orange-500 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        bike.quantity > 0
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {bike.quantity > 0
                        ? `In Stock (${bike.quantity} available)`
                        : "Out of Stock"}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button className="flex items-center px-4 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition duration-200">
                      <FaHeart className="mr-2" /> Wishlist
                    </button>
                    <button
                      className={`flex items-center px-4 py-3 font-medium rounded-lg transition duration-200 ${
                        bike.quantity > 0
                          ? "bg-orange-600 text-white hover:bg-orange-700"
                          : "bg-gray-400 text-gray-700 cursor-not-allowed"
                      }`}
                      disabled={bike.quantity <= 0}
                    >
                      <FaShoppingCart className="mr-2" />
                      {bike.quantity > 0 ? "Add to Cart" : "Sold Out"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Product Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Specifications
              </h3>
              <dl className="space-y-3">
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">
                    Frame Material
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">Aluminum Alloy</dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">
                    Wheel Size
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">27.5 inches</dd>
                </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg">
                  <dt className="text-sm font-medium text-gray-500">Gears</dt>
                  <dd className="mt-1 text-sm text-gray-900">21-speed</dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Shipping & Returns
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Free shipping on orders over $50
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">30-day return policy</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">Assembled in 48 hours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
