import { easeInOut, motion } from "framer-motion";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { LiaFacebook } from "react-icons/lia";

const BurgerDropDown = () => {
  return (
    <div className="dropdown dropdown-end ">
      <label tabIndex={0} className="btn btn-outline text-black btn-sm m-1">
        <GiHamburgerMenu className=" text-2xl spac" />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-gray-200 rounded-box w-52"
      >
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/product"}>Product</NavLink>
        </li>
        <li>
          <NavLink to={"/booking"}>Booking</NavLink>
        </li>
        <li>
          <details className="dropdown  ">
            <summary className="m-1   text-white  font-semibold px-4  btn btn-primary btn-sm border-none ">
              contact
            </summary>
            <motion.ul
              initial={{ rotate: 360, scale: 0 }}
              whileInView={{ rotate: 0, scale: 1 }}
              transition={{ ease: easeInOut }}
              className="p-3 shadow menu gap-3 dropdown-content z-[1] bg-gray-300  rounded-box w-52"
            >
              <li className="">
                <a
                  href="tel:09783538348"
                  className=" text-lg text-white  bg-success tracking-wider"
                >
                  <LiaPhoneVolumeSolid className=" text-2xl me-2 " /> Phone
                </a>
              </li>
              <li className="">
                <a
                  href="https://www.facebook.com/phyoaung.naingtun.5/"
                  className=" text-lg text-white  bg-primary tracking-wider"
                >
                  <LiaFacebook className=" text-2xl me-2" /> facebook
                </a>
              </li>
            </motion.ul>
          </details>
        </li>
      </ul>
    </div>
  );
};

export default BurgerDropDown;
