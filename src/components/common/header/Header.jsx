import React, { useState } from "react";
import { nav, quicklink } from "../../../data/Data";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars, FaCaretDown, FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const [quick, setQuick] = useState(false);
  return (
    <>
      <header className=" flex justify-between w-full shadow-lg items-center fixed left-0 top-0 bg-gradient-to-r from-primary to-secondary ">
        <nav className=" flex w-full items-center justify-between md:px-9 px-5 py-2">
          {/*----logo ----- */}
          <div className=" flex items-center ">
            <img
              className=" w-full h-[40px] px-2 "
              src="../../../../images/logo.png"
              alt=""
            />
            <span className=" text-xl sm:text-3xl font-bold flex ">
              Book <p className=" text-orange-500 px-1">Shelf</p>
            </span>
          </div>

          {/*----list of navigation---- */}
          <div className=" flex items-center justify-between">
            {/*-----search bottun---- */}
            <div className="hidden items-center bg-white rounded-xl py-1 w-[300px] md:flex mr-4">
              <FaSearch className=" rounded-xl mx-2" />
              <input
                className=" bg-transparent outline-none text-black font-medium px-1"
                type="text"
                placeholder="Search Your Books"
              />
            </div>

            <ul className="  items-center hidden lg:flex">
              {nav.map((value, id) => {
                return (
                  <div key={id}>
                    <Link to={value.path}>
                      <li className="px-3 hover:text-yellow-300 duration-300 font-semibold md:font-bold">
                        {value.text}
                      </li>
                    </Link>
                  </div>
                );
              })}
              {/*---quick link--- */}
              <li
                onClick={() => setQuick(!quick)}
                className="px-3 hover:text-yellow-300 duration-300 font-semibold md:font-bold flex"
              >
                Quick Link
                <FaCaretDown className=" mt-1" />
              </li>
              {/*---quick link drawer--- */}
              <div
                className={
                  quick
                    ? "fixed top-[56px] right-[125px] shadow-lg px-5 py-3 duration-700 bg-gradient-to-r from-primary to-secondary"
                    : "fixed top-[-200px] right-[125px] shadow-lg px-5 py-3 duration-700"
                }
              >
                {quicklink.map((item, id) => {
                  return (
                    <div className="duration-300" key={id}>
                      <Link to={item.path}>
                        <li className=" hover:text-yellow-300 hover:cursor-pointer duration-300 font-semibold">
                          {item.text}
                        </li>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </ul>

            {/*------menue--- */}
            <FaBars
              size={30}
              onClick={() => setDrawer(!drawer)}
              className=" text-xl mr-3 lg:hidden"
            />

            {/*-----order button--- */}
            <div className="">
              <button className=" bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full flex items-center gap-2 hover:scale-105 duration-300">
                Order
                <FaCartShopping className=" drop-shadow-sm cursor-pointer" />
              </button>
            </div>
          </div>

          {/*----mobile menue--- */}
          {drawer ? (
            <div className=" bg-black/90 w-full h-screen fixed top-0 left-0 z-10"></div>
          ) : (
            ""
          )}

          {/*----mobile menue drawer--- */}
          <div
            className={
              drawer
                ? " bg-slate-100 w-[300px] h-screen fixed top-0 left-0 z-10"
                : " bg-slate-100 left-[-300px] h-screen fixed top-0  z-10"
            }
          >
            <div className=" relative text-center px-2">
              <h3 className=" absolute text-xl sm:text-2xl top-4 px-4 font-bold">
                Book <span className=" text-orange-600 absolute">Shelf</span>
              </h3>
              <RxCross2
                onClick={() => setDrawer(!drawer)}
                className=" absolute top-4 right-4 text-xl sm:text-2xl"
                size={27}
              />
            </div>
            {/*---search here for mobile device--- */}
            <div className="flex items-center bg-primary rounded-xl py-1 mx-4 mt-14 ">
              <FaSearch className=" rounded-xl mx-2" />
              <input
                className=" bg-transparent outline-none text-black "
                type="text"
                placeholder="Search Your Books"
              />
            </div>
            {/*---list drawer menu--- */}
            <ul className="px-4">
              {nav.map((items, id) => {
                return (
                  <div key={id}>
                    <Link to={items.path}>
                      <li className=" px-3 py-1 hover:text-primary hover:cursor-pointer duration-300 font-semibold ">
                        {items.text}
                      </li>
                    </Link>
                  </div>
                );
              })}
            </ul>

            {/*----quick link for the mobile menu-- */}
            <ul className="px-4">
              {quicklink.map((v, i) => {
                return (
                  <div key={i}>
                    <Link to={v.path}>
                      <li className="px-3 py-1 hover:text-primary hover:cursor-pointer duration-300 font-semibold ">
                        {v.text}
                      </li>
                    </Link>
                  </div>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
