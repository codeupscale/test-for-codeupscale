import React from "react";
import { useNavigate } from "react-router-dom";

const TopBrands = () => {
  const navigate = useNavigate();

  const brands = [
    { src: "/GenInfo/adidas.jpg", name: "Adidas", to: "/search/adidas" },
    { src: "/GenInfo/nike.png", name: "Nike", to: "/search/nike" },
    { src: "/GenInfo/skechers.jpg", name: "Skechers", to: "/search/skechers" },
    { src: "/GenInfo/puma.jpg", name: "Puma", to: "/search/puma" },
  ];

  return (
    <div className="my-12 md:w-full md:max-w-full xs:mx-2 sm:mx-auto">
      <div className="flex flex-wrap justify-center gap-4">
        {brands.map((brand, id) => (
          <div
            key={id}
            className="relative w-[340px] h-[340px] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <div className="absolute w-full flex justify-center items-center top-4 z-10">
              <p className="logo font-semibold text-lg text-white drop-shadow-lg">
                {brand.name}
              </p>
            </div>
            <img
              src={brand.src}
              alt={brand.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => navigate(brand.to)}
              className="absolute inset-0 flex items-center justify-center
                             bg-gray-800 text-white opacity-0 hover:opacity-80 transition-opacity duration-200"
            >
              Explore →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
