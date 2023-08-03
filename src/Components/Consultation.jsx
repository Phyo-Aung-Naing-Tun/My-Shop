import React from "react";
import "../Style/Consultation.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Consultation = () => {
  return (
    <motion.div className="w-100 bg-img-control  relative  h-[350px] my-10">
      <motion.div className="absolute bg-black opacity-[0.7] top-0 left-0 right-0 bottom-0"></motion.div>
      <motion.div className="absolute z-[1000] flex flex-wrap justify-around px-3 items-center top-0 left-0 right-0 bottom-0">
        <motion.div className=" flex flex-col gap-5 lg:gap-10">
          <motion.h1
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className=" text-white text-xl font-semibold  md:text-3xl tracking-wider leading-9 "
          >
            Are you confused,which product is suitable for you ?
          </motion.h1>
          <motion.h1
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className=" text-blue-400 tracking-wider text-lg  md:text-3xl font-bold"
          >
            Need consultation?
          </motion.h1>
          <motion.h1
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className=" text-white tracking-wider md:font-semibold"
          >
            Get ultimate solution from our talent BookNow
          </motion.h1>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Link to={"/booking"}>
            <button className=" btn btn-primary tracking-wider text-white">
              Booknow
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Consultation;
