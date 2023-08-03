import React from "react";
import { CurstonContext } from "../Context/Context";
import ProductCart from "./ProductCart";
import { motion } from "framer-motion";

const FeatureProducts = () => {
  const { apiproducts } = CurstonContext();

  return (
    <motion.div className=" py-7">
      <motion.h1
        initial={{ scale: 0.4 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className=" text-3xl my-3 text-primary font-bold mb-10 text-center "
      >
        Feature Products
      </motion.h1>
      <motion.div className="  flex justify-center mx-auto max-w-[900px] flex-wrap items-center gap-10">
        <motion.div
          initial={{ x: -250 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {
            <ProductCart
              {...apiproducts.find((p) => p.category === "laptop")}
            />
          }
        </motion.div>
        <motion.div
          initial={{ x: -250 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {
            <ProductCart
              {...apiproducts.find((p) => p.category === "smartphone")}
            />
          }
        </motion.div>
        <motion.div
          initial={{ x: -250 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {
            <ProductCart
              {...apiproducts.find((p) => p.category === "graphics card")}
            />
          }
        </motion.div>
        <motion.div
          initial={{ x: -250 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {
            <ProductCart
              {...apiproducts.find((p) => p.category === "smartwatch")}
            />
          }
        </motion.div>
        <motion.div
          initial={{ x: -250 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          {
            <ProductCart
              {...apiproducts.find((p) => p.category === "earbuds")}
            />
          }
        </motion.div>
        <motion.div
          initial={{ x: -250 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {
            <ProductCart
              {...apiproducts.find((p) => p.category === "Keyboard")}
            />
          }
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FeatureProducts;
