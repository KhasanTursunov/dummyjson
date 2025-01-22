import React from "react";

const Modal = ({ oneItem, setOneItem }) => {
  return (
    <>
      <div
        onClick={() => setOneItem(null)}
        className="fixed top-0 left-0 w-full h-screen bg-[#0005]"
      ></div>
      <div className="p-5 gap-4 fixed top-[50%] left-[50%] bg-white w-[600px] min-h-[300px] translate-x-[-50%] translate-y-[-50%] animation-modal grid grid-cols-2">
        <div>
          <img src={oneItem.thumbnail} alt="" />
        </div>
        <div className="flex flex-col gap-7">
          <div className="seperately1">
            <h2 className="text-2xl font-normal">{oneItem.title}</h2>
          </div>

          <div className="seperayely2">
            <h2>{oneItem.description}</h2>
          </div>

          <div className="seperately3">
            <button onClick={() => setOneItem(null)}>Close</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
