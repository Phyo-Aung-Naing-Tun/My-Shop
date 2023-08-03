import React, { useEffect } from "react";
import BestSellingProduct from "../Components/BestSellingProduct";
import BookingForm from "../Components/BookingForm";
import { motion } from "framer-motion";
import BouncingArrow from "../Components/BouncingArrow";

const Booking = () => {
  return (
    <motion.div className=" overflow-hidden">
      <BookingForm />
      <BestSellingProduct />
      <BouncingArrow />
    </motion.div>
  );
};

export default Booking;
