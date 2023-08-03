import React, { useContext, useEffect, useRef, useState } from "react";
import { CurstonContext } from "../Context/Context";
import ModalDetail from "./ModalDetail";
import { BsFillCartXFill } from "react-icons/bs";
const ModalBox = () => {
  const {
    state: { cart },

    dispatch,
  } = CurstonContext();
  const [total, setTotal] = useState();
  const totalPriceArray = [];

  const findingTotal = () => {
    for (let i = 0; i < cart.length; i++) {
      totalPriceArray.push(
        parseFloat(document.querySelectorAll("#price")[i].innerHTML)
      );
      setTotal(totalPriceArray.reduce((pv, cv) => pv + cv, 0));
    }
  };

  const removing = (id, pri) => {
    const filtering = cart.filter((c) => c.id != id);
    dispatch({ type: "REMOVING", payload: filtering });

    setTotal((pv) => pv - pri);
  };

  return (
    <div>
      {cart.length ? (
        <dialog id="my_modal_1" className="modal ">
          <form method="dialog" className="modal-box relative  bg-white">
            <div className="sticky top-0 shadow   bg-white  pb-3 flex justify-between flex-wrap gap-2 items-center ">
              <h3 className="font-bold  text-primary  text-lg">
                Thanks for shopping with us.
              </h3>
              <div className="ms-auto flex gap-1 px-2 py-1 items-center justify-center border border-solid rounded-md border-primary">
                <h2 className=" font-semibold text-md capitalize tracking-wider">
                  total :
                </h2>
                <h2 className="font-bold   text-md capitalize tracking-wider text-error">
                  ${total}
                </h2>
              </div>
            </div>

            <hr />
            <div>
              {cart?.map((c) => (
                <ModalDetail
                  total={total}
                  findingTotal={findingTotal}
                  setTotal={setTotal}
                  removing={removing}
                  key={c.id}
                  {...c}
                />
              ))}
            </div>

            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-primary  text-white tracking-wider font-semibold">
                Close
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({ type: "REMOVING", payload: [] });
                }}
                className="btn btn-error  text-white tracking-wider font-semibold"
              >
                Clear All
              </button>
            </div>
          </form>
        </dialog>
      ) : (
        <dialog id="my_modal_1" className="modal">
          <form method="dialog" className="modal-box bg-white">
            <h3 className="font-bold text-center text-2xl text-primary mb-5 ">
              Sorry !
            </h3>

            <BsFillCartXFill className="border mb-5 mx-auto text-error rounded-lg  text-7xl border-solid border-error p-1 font-bold" />
            <h2 className=" rounded-lg text-center text-primary    text-xl tracking-wider font-semibold">
              Your cart is empty. Plz fill it.
            </h2>

            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-primary text-white tracking-wider font-semibold">
                Close
              </button>
            </div>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default ModalBox;
