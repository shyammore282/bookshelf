import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const PopUp = ({ orderPopUp, onHandlerPopUp }) => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    address: "",
  });

  const onHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const onSubmitData = (e) => {
    e.preventDefault();
  };

  console.log(userData);
  return (
    <>
      {orderPopUp && (
        <div className=" w-full fixed top-0 left-0 z-20 h-screen backdrop-blur-sm">
          <div className=" fixed bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 duration-200 shadow-lg rounded-lg w-[400px]">
            {/* header */}
            <div className=" flex items-center justify-between py-4 px-6">
              <h1 className=" text-xl font-semibold">Order Now Your Books</h1>
              <RxCross2
                className=" text-xl font-bold hover:cursor-pointer"
                onClick={onHandlerPopUp}
              />
            </div>
            <form
              action=""
              className=" flex flex-col items-center gap-5"
              onSubmit={onSubmitData}
            >
              <input
                className="w-[290px] border-2 rounded-lg border-gray-600 focus:outline-none px-5 py-1 "
                type="text"
                name="userName"
                value={userData.userName}
                placeholder="User Name"
                onChange={onHandler}
              />
              <input
                className="w-[290px] border-2 rounded-lg border-gray-600 focus:outline-none px-5 py-1 "
                type="email"
                name="email"
                value={userData.email}
                placeholder=" Email"
                onChange={onHandler}
              />
              <input
                className="w-[290px] border-2 rounded-lg border-gray-600 focus:outline-none px-5 py-1 "
                type="password"
                name="address"
                value={userData.address}
                placeholder=" address"
                onChange={onHandler}
              />
              <div className=" py-5">
                <button
                  type="submit"
                  className=" bg-gradient-to-r from-primary to-secondary text-white text-center px-4 py-1 rounded-full"
                >
                  Order Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
