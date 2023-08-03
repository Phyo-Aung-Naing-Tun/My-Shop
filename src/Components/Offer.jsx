import React from "react";
import "../Style/Offer.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Offer = () => {
  return (
    <div className=" border relative offer-bg-img h-[350px] max-w-full ">
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black opacity-[0.6] "></div>
      <div className="absolute  flex justify-center ps-7 md:ps-10 flex-col top-0 left-0 bottom-0 right-0 gap-4 ">
        <motion.h1
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-white text-4xl tracking-wider font-semibold md:text-5xl"
        >
          Limited Time Offer
        </motion.h1>
        <motion.h1
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-white font-semibold tracking-wider text-2xl"
        >
          Special Additionr
        </motion.h1>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-white tracking-wider "
        >
          It is a limited-time promotion that provides customers with an
          exclusive discount or unique product bundle Shop Now
        </motion.p>
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Link to={"/product"}>
            <button className=" mt-4 btn btn-primary tracking-wider text-white">
              shopnow
            </button>
          </Link>
        </motion.span>
      </div>
    </div>
  );
};

export default Offer;
