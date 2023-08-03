import React from "react";
import { Link } from "react-router-dom";
import WhyUs from "../Components/WhyUs";
import OurTeam from "../Components/OurTeam";
import { motion } from "framer-motion";
import BouncingArrow from "../Components/BouncingArrow";

const About = () => {
  return (
    <div className=" overflow-hidden">
      <div className="w-100  about-bg-img-control relative  h-[350px] ">
        <div className="absolute bg-black opacity-[0.5] top-0 left-0 right-0 bottom-0"></div>
        <div className="absolute z-[1000] flex flex-wrap justify-around px-3 items-center top-0 left-0 right-0 bottom-0">
          <div>
            <motion.h1
              initial={{ x: 250, y: 200, scale: 1.1 }}
              whileInView={{ x: 0, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className=" text-white text-5xl font-semibold   tracking-wider leading-9 mb-3"
            >
              About Us
            </motion.h1>
          </div>
        </div>
      </div>
      <motion.div className=" flex flex-wrap py-16  px-5 items-center justify-center gap-12">
        <motion.div
          initial={{ x: -250 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-[400px]"
        >
          <h1 className="text-3xl font-bold text-primary tracking-wider mb-4 ">
            Who we are?
          </h1>
          <p className=" text-secondary tracking-wider">
            We are a team of passionate individuals committed to providing
            high-quality products and exceptional customer service. Our mission
            is to make technology accessible to everyone, no matter where they
            are in the world. Shop with us and experience the difference of
            working with a dedicated and customer-centric team.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 250 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.7 }}
          className=" max-w-[400px] overf0)low-hidden"
        >
          <img
            className="w-100"
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzc2luZXNzJTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
          />
        </motion.div>
      </motion.div>
      <OurTeam />
      <WhyUs />
      <BouncingArrow />
    </div>
  );
};

export default About;
