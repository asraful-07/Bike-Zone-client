"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BikeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const bikeData = {
      ...data,
      regularPrice: parseFloat(data.regularPrice),
      discountPrice: parseFloat(data.discountPrice),
      quantity: parseInt(data.quantity),
      rating: parseFloat(data.rating),
      date: new Date().toISOString(),
    };

    try {
      const res = await axios.post("http://localhost:5000/bikes", bikeData);
      console.log("data", bikeData);

      if (res.data.acknowledged) {
        toast.success("Bike submitted successfully!");
        reset();
      }
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error("Something went wrong. Please try again!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-6 rounded-md shadow-md mt-4">
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Image URL */}
        <div>
          <label className="block mb-1 font-semibold">Image URL</label>
          <input
            type="text"
            {...register("image", { required: "Image URL is required" })}
            className="w-full border rounded-md px-3 py-2"
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bike Name */}
          <div>
            <label className="block mb-1 font-semibold">Bike Name</label>
            <input
              type="text"
              {...register("name", { required: "Bike name is required" })}
              className="w-full border rounded-md px-3 py-2"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 font-semibold">Select Category</label>
            <select
              {...register("category", { required: "Category is required" })}
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="">Select Category</option>
              <option value="Yamaha">Yamaha</option>
              <option value="Suzuki">Suzuki</option>
              <option value="Pulsar">Pulsar</option>
              <option value="Honda">Honda</option>
              <option value="TVS">TVS</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Regular Price */}
          <div>
            <label className="block mb-1 font-semibold">
              Regular Price ($)
            </label>
            <input
              type="number"
              step="0.01"
              {...register("regularPrice", {
                required: "Regular price is required",
              })}
              className="w-full border rounded-md px-3 py-2"
            />
            {errors.regularPrice && (
              <p className="text-red-500 text-sm">
                {errors.regularPrice.message}
              </p>
            )}
          </div>

          {/* Discount Price */}
          <div>
            <label className="block mb-1 font-semibold">
              Discount Price ($)
            </label>
            <input
              type="number"
              step="0.01"
              {...register("discountPrice", {
                required: "Discount price is required",
              })}
              className="w-full border rounded-md px-3 py-2"
            />
            {errors.discountPrice && (
              <p className="text-red-500 text-sm">
                {errors.discountPrice.message}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quantity */}
          <div>
            <label className="block mb-1 font-semibold">Quantity</label>
            <input
              type="number"
              {...register("quantity", { required: "Quantity is required" })}
              className="w-full border rounded-md px-3 py-2"
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm">{errors.quantity.message}</p>
            )}
          </div>

          {/* Rating */}
          <div>
            <label className="block mb-1 font-semibold">Rating (0 - 5)</label>
            <input
              type="number"
              step="0.1"
              max="5"
              min="0"
              {...register("rating", {
                required: "Rating is required",
                min: 0,
                max: 5,
              })}
              className="w-full border rounded-md px-3 py-2"
            />
            {errors.rating && (
              <p className="text-red-500 text-sm">{errors.rating.message}</p>
            )}
          </div>
        </div>
        {/* Description */}
        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            rows="8"
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full border rounded-md px-3 py-2"
            placeholder="Enter detailed bike description..."
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Features */}
        <div>
          <label className="block mb-1 font-semibold">Features</label>
          <textarea
            {...register("features", { required: "Features are required" })}
            className="w-full p-2 rounded-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-100 placeholder:text-gray-500"
            rows="5"
            placeholder={`Enter bike features (one per line) e.g.:
Disk Brakes
Fuel Injection
LED Headlight
Sporty Design`}
          ></textarea>
          {errors.features && (
            <p className="text-red-500 text-sm">{errors.features.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 rounded-md bg-orange-600 text-white font-semibold hover:bg-orange-700"
        >
          Submit Bike
        </button>
      </form>
    </div>
  );
};

export default BikeForm;
