import React from "react";
import BooksCard from "../bestbooks/BooksCard";

const BestSeller = () => {
  return (
    <>
      <section className=" p-5 mt-20 text-center w-full">
        <div className=" py-5">
          <h1 className=" text-3xl sm:text-5xl font-bold text-center">
            All Time Best Seller Books
          </h1>
          <p className=" text-gray-600 text-balance pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            voluptatibus ad ullam itaque error exercitationem architecto aut
            dignissimos officia eos! Id qui expedita porro quibusdam dolorem ea.
            Ipsa, incidunt molestiae. Consequuntur illum minima aperiam, a esse
            provident itaque vitae, nam ipsum adipisci et quis labore quasi
            maiores odit quod quisquam! Optio, dolorum culpa voluptas ex facilis
            odit blanditiis non modi.
          </p>
        </div>
        <BooksCard />
      </section>
    </>
  );
};

export default BestSeller;
