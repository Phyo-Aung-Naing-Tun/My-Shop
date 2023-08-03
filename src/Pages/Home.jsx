import React from "react";
import Crousel from "../Components/Crousel";
import FeatureProducts from "../Components/FeatureProducts";
import Consultation from "../Components/Consultation";
import BestSellingProduct from "../Components/BestSellingProduct";
import Offer from "../Components/Offer";
import WhyUs from "../Components/WhyUs";
import { motion } from "framer-motion";
import BouncingArrow from "../Components/BouncingArrow";

const Home = () => {
  return (
    <motion.div className=" overflow-hidden w-full" layout>
      <Crousel />
      <FeatureProducts />
      <Consultation />
      <BestSellingProduct />
      <Offer />
      <WhyUs />
      <BouncingArrow />
    </motion.div>
  );
};

export default Home;
