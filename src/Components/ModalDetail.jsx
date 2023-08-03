import React, { useEffect, useState } from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { CurstonContext } from "../Context/Context";

const ModalDetail = ({
  id,
  setTotal,
  title,
  img,
  price,
  rating,
  brand,
  findingTotal,
  removing,
}) => {
  const [count, setCount] = useState(1);

  let priceNum = parseFloat(price.replace("$", ""));
  const [singlePrice, setSinglePrice] = useState(priceNum);
  useEffect(() => {
    findingTotal();
  }, []);

  const increasing = () => {
    setCount(count + 1);
    setSinglePrice(singlePrice + priceNum);
    setTotal((pv) => pv + priceNum);
  };
  const decreasing = () => {
    if (count === 1) {
      setCount(1);
    } else {
      setCount(count - 1);
      setSinglePrice(singlePrice - priceNum);
      setTotal((pv) => pv - priceNum);
    }
  };
  return (
    <div>
      <div className="flex my-3 justify-between items-center mb-3">
        <h1 className="text-md text-primary w-[50%] font-semibold tracking-wide truncate">
          {title}
        </h1>
        <div className=" flex justify-center items-center gap-1">
          <h1 className="text-sm  total-price text-error font-bold tracking-wider">
            Price : ${" "}
          </h1>
          <h1
            id="price"
            className="text-sm  total-price text-error font-bold tracking-wider"
          >
            {singlePrice}
          </h1>
        </div>
      </div>
      <div className=" mb-2 flex justify-between items-center">
        <div className="flex justify-start gap-3 items-center">
          <img className="w-[100px] h-[100px] object-contain" src={img} />
          <div>
            <h1 className="text-sm  tracking-wide mb-1">
              Brand :{" "}
              <span className=" font-semibold capitalize tracking-wider">
                {brand}
              </span>
            </h1>
            <h1 className="text-sm mb-2  tracking-wide">
              Rating :{" "}
              <span className=" font-semibold tracking-wider text-warning">
                {rating}
              </span>
            </h1>
            <h1
              id={id}
              onClick={(e) => {
                removing(e.target.id, singlePrice);
              }}
              className=" hover:scale-[1.1] transition-[0.2s] text-sm font-bold text-white bg-error inline-block px-2 pb-1 rounded-lg"
            >
              remove
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center justify-center">
          <div
            onClick={increasing}
            className="text-primary font-bold    pb-1 px-2  "
          >
            <BiSolidUpArrow />
          </div>
          <div className="text-primary font-bold select-none   pb-1 px-2  ">
            {count}
          </div>
          <div
            onClick={decreasing}
            className="text-primary font-bold    pb-1 px-2  "
          >
            <BiSolidDownArrow />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ModalDetail;
