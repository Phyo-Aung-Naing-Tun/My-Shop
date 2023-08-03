import React, { useRef } from "react";
import "../Style/Booking.css";
import { easeInOut, motion } from "framer-motion";

const BookingForm = () => {
  const formRef = useRef();
  return (
    <motion.form
      ref={formRef}
      className=" w-full h-screen bg-img flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, ease: easeInOut }}
        className=" bg-design rounded-2xl w-[500px] shadow-lg   p-5"
      >
        <motion.h1
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, ease: easeInOut }}
          className=" mb-3 text-center text-3xl font-bold tracking-wider text-gray-100"
        >
          Booking Form
        </motion.h1>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, ease: easeInOut }}
          className=" mb-4"
        >
          <label
            className=" text-lg tracking-wider font-bold text-gray-100"
            htmlFor="name"
          >
            Your Name :{" "}
          </label>
          <input
            required
            placeholder="Enter your full name"
            id="name"
            type="text"
            className="ring-1 ps-2 w-full tracking-wider mt-3 font-semibold pb-2 pt-[4px] rounded-md focus ring-gray-500 bg-gray-100 "
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.7, ease: easeInOut }}
          className=" mb-4"
        >
          <label
            className=" text-lg tracking-wider font-bold text-gray-100"
            htmlFor="email"
          >
            Email Address :{" "}
          </label>
          <input
            required
            placeholder="Enter your email address"
            id="email"
            type="email"
            className="ring-1 ps-2 w-full tracking-wider mt-3 font-semibold pb-2 pt-[4px] rounded-md focus ring-gray-500 bg-gray-100 "
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, ease: easeInOut }}
          className=" mb-4"
        >
          <label
            className=" text-lg tracking-wider font-bold text-gray-100"
            htmlFor="phone-number"
          >
            Phone Number :{" "}
          </label>
          <input
            required
            placeholder="Enter your phone number. eg; 0978...."
            id="phone-number"
            type="text"
            className="ring-1 ps-2 w-full tracking-wider mt-3 font-semibold pb-2 pt-[4px] rounded-md focus ring-gray-500 bg-gray-100 "
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.9, ease: easeInOut }}
          className=" mb-5"
        >
          <label
            className=" text-lg tracking-wider font-bold text-gray-100"
            htmlFor="date"
          >
            Choose Date :{" "}
          </label>
          <input
            required
            id="date"
            type="date"
            className="ring-1 ps-2 w-full pr-2 tracking-wider mt-3 font-semibold pb-2 pt-[4px] rounded-md focus ring-gray-500 bg-gray-100 "
          />
        </motion.div>
        <motion.button
          initial={{ rotate: 360, scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          transition={{ ease: easeInOut }}
          type="button"
          onClick={() => {
            // e.preventDefault();
            if (
              formRef.current[0].value &&
              formRef.current[1].value &&
              formRef.current[2].value &&
              formRef.current[4].value
            ) {
              alert("Thanks for booking . We will inform you later");
            } else {
              alert("Sorry ! Please fill your informations");
            }

            for (let x = 0; x <= 4; x++) {
              formRef.current[x].value = null;
            }
          }}
          className=" mb-4 btn btn-primary text-white tracking-wider"
        >
          BookNow
        </motion.button>
      </motion.div>
    </motion.form>
  );
};

export default BookingForm;
