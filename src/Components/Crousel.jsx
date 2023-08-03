import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Crousel = () => {
  return (
    <motion.div>
      <div className="carousel w-full ">
        <div
          id="slide1"
          className=" overflow-hidden carousel-item relative w-full  bg-black"
        >
          <img
            src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
            className="w-full object-cover opacity-[0.7]"
          />
          <div className="absolute flex flex-col gap-10  text-white right-20 bottom-[150px] start-20">
            <h1 className="text-4xl animate__animated animate__backInDown  font-bold tracking-wider ">
              {" "}
              Power and Portability at your Fingertips
            </h1>

            <p className=" animate__backInLeft animate__animated truncate text-lg tracking-wider leading-7 ">
              Discover our wide range of laptops for all your computing needs.
              From ultrabooks to gaming laptops, our selection offers the
              perfect combination of power and portability for your lifestyle.
            </p>
            <Link
              className="animate__animated animate__backInRight"
              to="/product"
            >
              <button className="btn  btn-md btn-outline font-bold tracking-wider text-white">
                Shop now
              </button>
            </Link>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full  h-screen bg-black"
        >
          <img
            src="https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            className="w-full object-cover opacity-[0.7]"
          />
          <div className="absolute  text-white right-20 bottom-[150px] flex flex-col gap-10 start-20">
            <h1 className="text-4xl  font-bold tracking-wider ">
              {" "}
              Stay Connected on the Go
            </h1>

            <p className=" truncate text-lg tracking-wider leading-7 ">
              Keep up with the latest trends and stay connected on-the-go with
              our selection of smartphones. Choose from top brands and
              affordable options, with advanced features to enhance your mobile
              experience.
            </p>
            <Link to="/product">
              <button className="btn btn-md btn-outline font-bold tracking-wider text-white">
                Shop now
              </button>
            </Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn  btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full  h-screen bg-black"
        >
          <img
            src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
            className="w-full object-cover opacity-[0.7]"
          />
          <div className="absolute  text-white right-20 bottom-[150px] flex flex-col gap-10 start-20">
            <h1 className="text-4xl  font-bold tracking-wider ">
              {" "}
              Track your Fitness and Stay Connected
            </h1>

            <p className=" truncate text-lg tracking-wider leading-7 ">
              Enhance your lifestyle with our range of smartwatches. Monitor
              your fitness goals and stay connected to your digital life with
              ease. Choose from popular brands and a variety of styles and
              features..
            </p>
            <Link to="/product">
              <button className="btn btn-md btn-outline font-bold tracking-wider text-white">
                Shop now
              </button>
            </Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item relative w-full  h-screen bg-black"
        >
          <img
            src="https://images.unsplash.com/photo-1574920162043-b872873f19c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80"
            className="w-full object-cover opacity-[0.7]"
          />
          <div className="absolute  text-white right-20 bottom-[150px] flex flex-col gap-10 start-20">
            <h1 className="text-4xl  font-bold tracking-wider ">
              {" "}
              Listen in Style and Comfort
            </h1>

            <p className=" truncate text-lg tracking-wider leading-7 ">
              Elevate your audio experience with our selection of earbuds and
              headphones. Choose from the latest models and top brands, with
              noise-cancelling and wireless options for a customized listening
              experience.
            </p>
            <Link to="/product">
              <button className="btn btn-md btn-outline font-bold tracking-wider text-white">
                Shop now
              </button>
            </Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Crousel;
