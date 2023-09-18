import React from "react";
import ProductCard from "../ProductCard/page";
import { productList } from "@/data/products";

const Products = async () => {
  const allProducts = productList;

  return (
    <div className="w-full px-[20px] md:px-[50px]">
      <ProductCard products={allProducts} />
    </div>
  );
};

export default Products;
