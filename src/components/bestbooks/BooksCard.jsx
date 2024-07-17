import React from "react";
import { books } from "../../data/Data";
import { GoStarFill } from "react-icons/go";

const BooksCard = ({ onHandlerPopUp }) => {
  return (
    <>
      <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center mt-14 pt-14 gap-3 w-full">
        {books.map((items) => {
          return (
            <div
              className=" rounded-2xl bg-white hover:bg-primary hover:text-white  shadow-xl duration-high group max-w-[300px] mt-14"
              key={items.id}
            >
              <>
                <img
                  className=" max-w-[130px] block mx-auto  transform -translate-y-12 group-hover:scale-105 duration-300 shadow-sm drop-shadow-[-10px_10px_12px_rgba(0,0,0.1)]"
                  src={items.img}
                  alt={items.title}
                />
              </>
              <div className=" py-2 text-center">
                <div className=" flex w-full space-x-1 items-center justify-center">
                  <GoStarFill className=" text-yellow-500" />
                  <GoStarFill className=" text-yellow-500" />
                  <GoStarFill className=" text-yellow-500" />
                  <GoStarFill className=" text-yellow-500" />
                  <GoStarFill className=" " />
                </div>

                <h1 className=" text-xl font-bold px-6">{items.title}</h1>
                <p className=" text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 px-2">
                  {items.description}
                </p>
                <button
                  className="bg-primary  text-white  px-3 py-2 my-2 rounded-full hover:scale-105 duration-200 group-hover:bg-white group-hover:text-primary"
                  onClick={onHandlerPopUp}
                >
                  Order Now
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default BooksCard;
