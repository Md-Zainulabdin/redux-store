"use client";
import { useDispatch } from "react-redux";
import { addItem } from "@/libs/Store/cartSlice";

const ProductCard = ({ products }) => {
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-6">
      {products.map((item) => (
        <div className="w-[340px] border rounded overflow-hidden" key={item.id}>
          <div className="img-box w-full">
            <img
              src={item?.Img}
              alt={item?.Title}
              className="w-full object-contain border-b"
            />
          </div>
          <div className="desc mt-2 p-5">
            <div className="row1 flex justify-between">
              <h1 className="text-lg text-[#222] font-semibold">{item.Cat}</h1>
              <span className="text-md text-red-600 font-semibold">
                {item.Price} $
              </span>
            </div>
            <div className="row2 mt-2 w-full">
              <h1 className="text-md text-[#999]">{item.Title}</h1>
            </div>
          </div>

          <div className="add-to-cart w-full text-center">
            <button
              onClick={() => handleAdd(item)}
              className="w-full p-3 bg-indigo-500 text-white"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
