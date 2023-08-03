import React from "react";
import Catagories from "../Components/Catagories";
import { CurstonContext } from "../Context/Context";
import ProductCart from "../Components/ProductCart";
import "animate.css";
import BouncingArrow from "../Components/BouncingArrow";
import CatagoriesDropDown from "../Components/CatagoriesDropDown";

const Product = () => {
  const {
    state: { product },
  } = CurstonContext();
  return (
    <div className=" relative">
      <Catagories />
      <CatagoriesDropDown />

      <div className=" animate__animated animate__slideInLeft transition-s  flex flex-wrap my-16 justify-center items-center gap-10">
        {product?.map((product) => (
          <ProductCart key={product.id} {...product} />
        ))}
      </div>
      <BouncingArrow />
    </div>
  );
};

export default Product;
