"use client";
import { removeItem } from "@/libs/Store/cartSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const items = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(removeItem(productId));
  };

  return (
    <div className="w-full px-[20px] md:px-[50px] py-6 flex flex-col gap-10">
      <div className="cart-title flex flex-col gap-3">
        <h1 className="text-3xl font-semibold text-indigo-400">
          Your Shopping Cart
        </h1>
        <p className="text-xl text-[#999]">
          You have {items.length} items in Cart
        </p>
      </div>

      <div className="cart-item w-full h-[350px] border flex flex-col overflow-y-auto overflow-x-hproductIdden">
        {items.map((prod) => (
          <div className="w-full px-[20px] md:px-[30px] flex items-center justify-between border-b" key={prod.id}> 
            <div className="img">
              <img src={prod.Img} alt={prod.Title} className="w-[180px]" />
            </div>
            <div className="cat">
              <h1 className="text-lg font-semibold text-[#555]">{prod.Cat}</h1>
            </div>

            <div className="quantity">{1}</div>

            <div className="price">
              <h2 className="text-xl font-semibold text-indigo-500">
                {prod.Price} $
              </h2>
            </div>

            <div className="delete-btn">
              <button onClick={() => handleRemove(prod.id)}>
                <MdDelete size={24} className="text-red-500"/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
