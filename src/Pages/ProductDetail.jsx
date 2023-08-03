import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CurstonContext } from "../Context/Context";
import "animate.css";
import { easeInOut, motion } from "framer-motion";

const ProductDetail = () => {
  const { state } = useLocation();
  const { dispatch } = CurstonContext();
  return (
    <div className=" lg:my-10 p-3 mb-10 px-6  flex flex-wrap justify-center items-center gap-5 lg:gap-10">
      <div className=" animate__animated animate__bounceInLeft animate__fast ">
        <img className="w-[400px] h-[400px] object-contain" src={state?.img} />
      </div>
      <div className="w-[400px]  ">
        <motion.h1
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: easeInOut, duration: 0.5 }}
          className=" text-primary  tracking-wide text-2xl font-bold"
        >
          {state.title}
        </motion.h1>
        <motion.h2
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: easeInOut, duration: 0.6 }}
          className="mt-3 tracking-wide"
        >
          Brand : <span>{state.brand}</span>
        </motion.h2>

        <motion.h2
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: easeInOut, duration: 0.7 }}
          className="mt-3 tracking-wide"
        >
          Price : <span className=" text-error font-bold">{state.price}</span>
        </motion.h2>
        <motion.h2
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: easeInOut, duration: 0.8 }}
          className="mt-3 tracking-wide text-xl"
        >
          Key features
        </motion.h2>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: easeInOut, duration: 0.9 }}
          className="mt-3 tracking-wide leading-8 "
        >
          {state.description}
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: easeInOut, duration: 1 }}
          className="flex mt-3 justify-between"
        >
          <h1>
            Category :
            <span className=" tracking-wide font-bold"> {state.category}</span>
          </h1>
          <h1>
            Rating :
            <span className=" tracking-wide font-bold"> {state.rating}</span>
          </h1>
        </motion.div>
        <hr className=" mt-3" />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: easeInOut, duration: 1 }}
          className="flex justify-between mt-5"
        >
          <Link to={"/product"}>
            <button className="btn-outline btn btn-sm  text-white btn-primary">
              Products
            </button>
          </Link>
          <button
            onClick={() => {
              dispatch({ type: "ADD_CARTS_DATAS", payload: state });
            }}
            className="btn btn btn-sm text-white btn-primary"
          >
            Add to Cart
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
