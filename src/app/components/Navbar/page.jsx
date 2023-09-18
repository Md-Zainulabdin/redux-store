"use client";
import Link from "next/link";
import React from "react";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <nav className="w-full h-[70px] md:h-[90px] px-[20px] md:px-[50px] flex items-center justify-between border-b">
      <div className="logo">
        <h1 className="text-2xl font-semibold text-[#222]">
          <Link href={"/"}>Redux-Store</Link>
        </h1>
      </div>
      <div className="menu flex items-center gap-4">
        <Link href={"/cart"} className="text-lg font-medium text-[#333]">
          Cart {items.length}
        </Link>
        <TfiShoppingCartFull size={22} />
      </div>
    </nav>
  );
};

export default Navbar;
