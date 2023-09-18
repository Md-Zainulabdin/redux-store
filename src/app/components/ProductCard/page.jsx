"use client";
import Image from "next/image";
import React from "react";

const ProductCard = ({ products }) => {
  return (
    <div className="w-full p-4 flex items-center justify-center flex-wrap gap-6">
      {products.map((item) => (
        <div
          className="w-[28%] border rounded overflow-hidden"
          key={item.id}
        >
          <div className="img-box w-full h-[250px]">
            <img
              src={item?.Img}
              alt={item?.Title}
              className="w-full object-contain border-b"
            />
          </div>
          <div className="desc mt-2 p-5">
            <div className="row1 flex justify-between">
              <h1 className="text-lg text-[#222] font-semibold">{item.Cat}</h1>
              <span className="text-md text-red-600 font-semibold">{item.Price} $</span>
            </div>
            <div className="row2 mt-2 w-full">
                <h1 className="text-md text-[#999]">{item.Title}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
