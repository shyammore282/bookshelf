import React from "react";
import BooksCard from "./BooksCard";

const BestBooks = ({ onHandlerPopUp }) => {
  return (
    <>
      <section className=" mt-5 py-5">
        <div className="container">
          {/*---headind section-- */}
          <div className=" text-center py-2">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
              Best Books
            </h1>
            <p className=" text-balance py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus adipisci voluptatem mollitia nesciunt perferendis
              necessitatibus iste. Optio quae ex nemo recusandae ducimus
              maiores, deleniti, repellendus aperiam facere impedit quisquam
              saepe.
            </p>
          </div>

          {/*---img or bookscard section---  */}
          <BooksCard onHandlerPopUp={onHandlerPopUp} />
        </div>
      </section>
    </>
  );
};

export default BestBooks;
