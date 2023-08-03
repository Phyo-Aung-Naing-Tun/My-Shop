import React from "react";
import { CurstonContext } from "../Context/Context";
import ProductCart from "./ProductCart";
import { AnimatePresence, motion } from "framer-motion";

const BestSellingProduct = () => {
  const { apiproducts } = CurstonContext();
  const mostRated = apiproducts.filter((p) => parseFloat(p.rating) > 4.8);
  const laptop = mostRated.find((p) => p.category === "laptop");
  const smartphone = mostRated.find((p) => p.category === "smartphone");
  const smartwatch = mostRated.find((p) => p.category === "smartwatch");
  return (
    <motion.div>
      <motion.h1
        initial={{ scale: 0.4 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="text-center  tracking-wider py-5 mb-6 text-4xl font-bold text-primary"
      >
        {" "}
        Best Selling Products
      </motion.h1>

      <motion.div className=" flex  justify-center pt-7 pb-14 flex-wrap items-center gap-10">
        <motion.div
          initial={{ x: 250 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <ProductCart key={1} {...laptop} />
        </motion.div>
        <motion.div
          initial={{ x: 250 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <ProductCart key={2} {...smartphone} />
        </motion.div>

        <motion.div
          initial={{ x: 250 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <ProductCart key={3} {...smartwatch} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BestSellingProduct;
