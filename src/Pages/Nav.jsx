import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsShop } from "react-icons/bs";
import { PiShoppingCartBold } from "react-icons/pi";
import { CurstonContext } from "../Context/Context";
import ModalBox from "../Components/ModalBox";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { LiaFacebook } from "react-icons/lia";
import "../Style/Nav.css";
import { easeInOut, motion } from "framer-motion";
import BurgerDropDown from "./BurgerDropDown";

const Nav = () => {
  const {
    state: { cart },
  } = CurstonContext();

  return (
    <div
      style={{ position: "sticky", top: 0 }}
      className=" bg-white z-[9999] flex shadow gap-3 flex-wrap justify-around p-4"
    >
      <div>
        <ModalBox className=" display-none" />

        <Link to={"/"}>
          <h1 className="text-primary font-bold text-lg md:text-2xl flex justify-center items-center gap-3">
            <BsShop /> <span>My Shop</span>
          </h1>
        </Link>
      </div>

      <div className=" flex items-center flex-wrap justify-evenly lg:justify-center   gap-3 font-semibold text-primary  tracking-wider">
        <div
          id="nav-links"
          className="
        flex items-center flex-wrap justify-center   gap-3 
        
        "
        >
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/product"}>Product</NavLink>
          <NavLink to={"/booking"}>Booking</NavLink>
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
        </div>

        <div
          onClick={() => window.my_modal_1.showModal()}
          className=" relative"
        >
          <button className="  text-white text-xl font-semibold px-4  btn btn-primary btn-sm border-none ">
            <PiShoppingCartBold />
          </button>
          <span className=" absolute bg-error text-white font-semibold w-5 h-5 flex justify-center bottom-6 start-11 items-center rounded-[50%]">
            {cart.length}
          </span>
        </div>
        <div id="burger-menu" className="ms-2">
          <BurgerDropDown />
        </div>
      </div>
    </div>
  );
};

export default Nav;
