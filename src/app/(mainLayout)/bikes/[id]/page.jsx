"use client";

import React, { useEffect, useState } from "react";

const Page = () => {
  const [bike, setBike] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/bike")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        console.log("API data:", data);

        // If data is an array, pick first item, else use object directly
        if (Array.isArray(data)) {
          setBike(data[0]);
        } else {
          setBike(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!bike) return <p>No bike data found</p>;

  return (
    <div>
      <h1>Bike Details</h1>
      <h2>{bike.name}</h2>
      <img src={bike.image} alt={bike.name} style={{ width: "300px" }} />
      <p>{bike.description}</p>
      <pre>{bike.features}</pre>
      <p>Category: {bike.category}</p>
      <p>
        Price: ${bike.regularPrice} (Discount: {bike.discountPrice}%)
      </p>
      <p>Quantity: {bike.quantity}</p>
      <p>Rating: {bike.rating}</p>
    </div>
  );
};

export default Page;
