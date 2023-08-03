import React from "react";
import { teamMembers } from "../Context/TeamMember";
import TeamMembersCard from "./TeamMembersCard";
import { motion } from "framer-motion";

const OurTeam = () => {
  return (
    <div className=" mb-4">
      <div className="text-center mb-4 ">
        <motion.h1
          initial={{ x: 250 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl mb-4 text-primary tracking-wider font-bold "
        >
          Our Team
        </motion.h1>
        <motion.p
          initial={{ x: -250 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className=" max-w-[300px] mx-auto text-secondary text-lg mx tracking-wider"
        >
          We are comprised of experienced with passion for technology and
          commitment to customer satisfaction. Harvey Spector Harvey Spector
          Founder - CEO
        </motion.p>
      </div>
      <motion.div className=" flex justify-center mt-10 gap-10 items-center flex-wrap">
        {teamMembers.map((teamMember) => (
          <TeamMembersCard key={teamMember.id} {...teamMember} />
        ))}
      </motion.div>
    </div>
  );
};

export default OurTeam;
