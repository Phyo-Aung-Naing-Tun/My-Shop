import { easeInOut, motion } from "framer-motion";
import React from "react";
import {
  FaGlobe,
  FaCertificate,
  FaPercentage,
  FaShieldAlt,
} from "react-icons/fa";

const WhyUs = () => {
  return (
    <motion.div className=" w-full  py-7 bg-white">
      <motion.h1
        initial={{ x: 300 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6 }}
        className=" text-center mt-6 mb-12  tracking-wider  text-4xl font-bold text-primary"
      >
        Why Choose Us
      </motion.h1>

      <motion.div className="flex flex-wrap h-full items-center justify-center mb-12  gap-10">
        <motion.div
          initial={{ scale: 0.4 }}
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className=" border flex flex-col items-center p-3  w-[200px] rounded-lg  hover:scale-[1.1] transition-s shadow-md bg-gray-100 h-[310px] border-solid"
        >
          <h1 className=" mb-3 text-6xl text-black text-center">
            <FaGlobe />
          </h1>
          <h1 className=" text-secondary text-center tracking-wider text-xl font-bold mb-3">
            Worldwide Shipping
          </h1>
          <p className=" tracking-wider text-secondary mb-3">
            We offer worldwide shipping to make our products accessible to
            customers all over the world
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0.3 }}
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className=" border flex flex-col items-center p-3  w-[200px] rounded-lg  hover:scale-[1.1] transition-s shadow-md bg-gray-100 h-[310px] border-solid"
        >
          <h1 className=" mb-3 text-6xl text-black text-center">
            <FaCertificate />
          </h1>
          <h1 className="text-secondary tracking-wider text-xl font-bold mb-3">
            Best Quality
          </h1>
          <p className=" tracking-wider text-secondary mb-3">
            We believe in providing our customers with only the best quality
            products.
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0.2 }}
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className=" border flex  flex-col items-center p-3  w-[200px] rounded-lg  hover:scale-[1.1] transition-s shadow-md bg-gray-100 h-[310px] border-solid"
        >
          <h1 className=" mb-3 text-6xl text-black text-center">
            <FaPercentage />
          </h1>
          <h1 className=" text-secondary tracking-wider text-xl font-bold mb-3">
            Best Offers
          </h1>
          <p className=" tracking-wider text-secondary mb-3">
            We pride ourselves on offering the best deals and discounts to our
            customers
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0.1 }}
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className=" border flex flex-col items-center p-3  w-[200px] rounded-lg  hover:scale-[1.1] transition-s shadow-md bg-gray-100 h-[310px] border-solid"
        >
          <h1 className=" mb-3 text-6xl text-black text-center">
            <FaShieldAlt />
          </h1>
          <h1 className=" text-secondary tracking-wider text-xl font-bold mb-3">
            Secure Payments
          </h1>
          <p className=" tracking-wider text-secondary mb-3">
            We offer a range of secure payment options to ensure that your
            transactions are safe and secure.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WhyUs;
