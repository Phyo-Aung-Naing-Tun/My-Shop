import React, { useState } from "react";
import { CurstonContext } from "../Context/Context";
import { BsChevronDoubleDown } from "react-icons/bs";
import { BsChevronDoubleUp } from "react-icons/bs";

const CatagoriesDropDown = () => {
  const [toggle, setToggle] = useState(true);
  const { apiproducts, setCurrentCategory } = CurstonContext();
  const categoryData = [];
  apiproducts?.map((p) => categoryData.push(p.category));
  const categories = new Set(categoryData);
  return (
    <div className=" fixed top-20 right-5 z-[9988]">
      <details className="dropdown dropdown-end  ">
        <summary
          onClick={() => {
            setToggle(!toggle);
            console.log(toggle);
          }}
          className=" m-2 text-white  font-semibold px-4  btn btn-primary tracking-wider border-none"
        >
          {toggle ? (
            <div className=" flex items-center gap-3">
              {" "}
              Catagories <BsChevronDoubleDown className=" text-xl" />
            </div>
          ) : (
            <div className=" flex items-center gap-3">
              {" "}
              Catagories <BsChevronDoubleUp className=" text-xl" />
            </div>
          )}
        </summary>
        <ul className="p-2 shadow   dropdown-content z-[1000] bg-blue-300  rounded-box w-52">
          <li>
            <button
              onClick={(e) => {
                setCurrentCategory(e.target.innerText);
              }}
              className={`  btn btn-sm btn-primary border-none btn-outline  w-full mb-2 bg-gray-100 tracking-wider text-white capitalize font-semibold`}
            >
              All
            </button>
          </li>

          {[...categories].map((cata) => (
            <li key={Math.random()}>
              <button
                onClick={(e) => {
                  setCurrentCategory(e.target.innerText);
                }}
                className={`btn btn-sm mb-2 btn-outline border-none w-full btn-primary text-white bg-gray-100 tracking-wider font-semibold  `}
              >
                {cata}
              </button>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
};

export default CatagoriesDropDown;
