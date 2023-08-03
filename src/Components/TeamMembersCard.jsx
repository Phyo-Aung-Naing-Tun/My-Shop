import { motion } from "framer-motion";
import React from "react";

const TeamMembersCard = ({ name, designation, img }) => {
  return (
    <motion.div
      initial={{ scale: 0.3 }}
      whileInView={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
      className="  hover:scale-[1.1] transition-s text-center p-3 w-[250px] rounded-xl bg-gray-100  shadow-lg"
    >
      <img src={img} className="w-100 mx-auto mb-3 " alt="" />

      <h1 className=" text-2xl font-bold tracking-wider mb-2">{name}</h1>
      <h2 className="text-lg mb-2 tracking-wider font-semibold">
        {designation}
      </h2>
    </motion.div>
  );
};

export default TeamMembersCard;
