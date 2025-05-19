// src/app/bikes/[id]/page.jsx
import React from "react";

const Page = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:5000/bike-data/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div>Bike not found!</div>;
  }

  const bike = await res.json();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{bike.name}</h1>
      <img
        src={bike.image}
        alt={bike.name}
        className="w-full h-auto rounded-md mb-4"
      />
      <p className="text-gray-700 mb-4">{bike.description}</p>

      <h2 className="text-xl font-semibold mb-2">Features</h2>
      <ul className="list-disc list-inside mb-4">
        {bike.features.split("\n").map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <p>
        <strong>Category:</strong> {bike.category}
      </p>
      <p>
        <strong>Regular Price:</strong> ${bike.regularPrice}
      </p>
      <p>
        <strong>Discount Price:</strong> ${bike.discountPrice}
      </p>
      <p>
        <strong>Rating:</strong> {bike.rating} / 5
      </p>
      <p>
        <strong>Available Quantity:</strong> {bike.quantity}
      </p>
    </div>
  );
};

export default Page;
