import React from "react";
import { CurstonContext } from "../Context/Context";
import "../Style/Categories.css";

const Catagories = () => {
  const { apiproducts, setCurrentCategory } = CurstonContext();
  const categoryData = [];
  apiproducts?.map((p) => categoryData.push(p.category));
  const categories = new Set(categoryData);
  return (
    <div className=" flex  justify-start mb-10   mx-4 mt-6 p-3 items-center flex-wrap gap-2">
      <button
        onClick={(e) => {
          setCurrentCategory(e.target.innerText);
        }}
        className={`text-sm hidden text-white  badge-lg font-semibold badge btn-primary badge-outline`}
      >
        All
      </button>
      {/* 
      {[...categories].map((cata) => (
        <button
          onClick={(e) => {
            setCurrentCategory(e.target.innerText);
          }}
          key={Math.random()}
          className={`text-sm uppercase  badge-lg border  border-solid badge-primary text-white tracking-wider rounded-[12px] font-semibold  `}
        >
          {cata}
        </button>
      ))} */}
    </div>
  );
};

export default Catagories;
