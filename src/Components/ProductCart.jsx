import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CurstonContext } from "../Context/Context";
import { motion } from "framer-motion";

const ProductCart = (props) => {
  const { title, img, price, brand, id } = props;
  const nav = useNavigate();
  const { apiproducts, dispatch, state } = CurstonContext();
  const addingToCart = () => {
    const findProduct = apiproducts.find((product) => product.id === id);
    dispatch({ type: "ADD_CARTS_DATAS", payload: findProduct });
  };
  return (
    <div className=" animate__animated animate__fast animate__flipInY transition-s   w-[270px]  pt-2 shadow-md">
      <img src={img} className=" w-[300px] h-[130px] object-contain" />

      <div className="p-5">
        <h2 className="card-title truncate">
          {title?.replace("-", " ").toUpperCase().substring(0, 18)} ....
        </h2>
        <h2>Brand : {brand}</h2>
        <h2>
          Price : <span className=" text-error font-bold">{price}</span>
        </h2>

        <div className="mt-3 flex justify-between">
          <button
            onClick={() => {
              nav("/productDetail", { state: props });
            }}
            className="btn btn-sm text-white btn-primary"
          >
            More info
          </button>

          <button
            onClick={addingToCart}
            className="btn-outline btn btn-sm text-white btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
