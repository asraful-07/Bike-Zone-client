import React from "react";

const Shop = () => {
  return (
    <div className="container mx-auto my-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {/* Gogals */}
        <div className="relative group w-full overflow-hidden rounded-lg shadow-md cursor-pointer">
          <img
            src="/images/others/gogals.png"
            alt="Gogals"
            className="w-full h-auto transition-opacity duration-300 group-hover:opacity-0"
          />
          <img
            src="/images/others/gogals2.png"
            alt="Gogals Hover"
            className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Hand */}
        <div className="relative group w-full overflow-hidden rounded-lg shadow-md cursor-pointer">
          <img
            src="/images/others/hand.png"
            alt="Hand"
            className="w-full h-auto transition-opacity duration-300 group-hover:opacity-0"
          />
          <img
            src="/images/others/hand2.png"
            alt="Hand Hover"
            className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Pant */}
        <div className="relative group w-full overflow-hidden rounded-lg shadow-md cursor-pointer">
          <img
            src="/images/others/pant.png"
            alt="Pant"
            className="w-full h-auto transition-opacity duration-300 group-hover:opacity-0"
          />
          <img
            src="/images/others/pant2.jpg"
            alt="Pant Hover"
            className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Poc */}
        <div className="relative group w-full overflow-hidden rounded-lg shadow-md cursor-pointer">
          <img
            src="/images/others/poc.png"
            alt="Poc"
            className="w-full h-auto transition-opacity duration-300 group-hover:opacity-0"
          />
          <img
            src="/images/others/poc2.jpg"
            alt="Poc Hover"
            className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
