import React from "react";
import Banner from "./Banner";
import Shop from "./Shop";
import Bike from "../Bike/Bike";
import FAQAndReview from "./FAQAndReview";

const Home = () => {
  return (
    <div>
      <Banner />
      <Shop />
      <Bike />
      <FAQAndReview />
    </div>
  );
};

export default Home;
