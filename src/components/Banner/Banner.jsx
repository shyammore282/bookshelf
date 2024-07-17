import React from "react";
import { GrSecure } from "react-icons/gr";

const Banner = () => {
  return (
    <>
      <section className=" mt-14 w-full">
        <div className=" container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
            {/*---img section ---- */}
            <div className=" ">
              <img
                className=" max-w-[400px] h-[350px] block mx-auto w-full drop-shadow-[-10px_10px_12px_rgba(0,0,0.1)] object-cover"
                src="../../../images/library.jpg"
                alt=""
              />
            </div>
            <div className=" flex flex-col  justify-center gap-4 sm:pt-0">
              <h1 className=" text-3xl sm:text-4xl font-bold">
                Libraey At Your Fingertips
              </h1>

              <p className=" text-sm text-gray-700 tracking-wide  leading-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                doloremque voluptatum sunt libero magni nostrum, vero id iste
                unde cupiditate aspernatur obcaecati amet perspiciatis alias
                deserunt ea accusamus porro aliquam? Quos itaque optio,
              </p>

              <div className=" flex flex-col gap-4">
                <div className=" flex items-center gap-4">
                  <GrSecure className="text-2xl lg:text-4xl h-12 w-12 shadow-sm p-2 rounded-full bg-violet-300" />
                  <p className=" text-xl font-semibold">Quality Books</p>
                </div>
                <div className=" flex items-center gap-4">
                  <GrSecure className="text-2xl lg:text-4xl h-12 w-12 shadow-sm p-2 rounded-full bg-orange-300" />
                  <p className=" text-xl font-semibold">Fast Delivery</p>
                </div>
                <div className=" flex items-center gap-4">
                  <GrSecure className="text-2xl lg:text-4xl h-12 w-12 shadow-sm p-2 rounded-full bg-green-300" />
                  <p className=" text-xl font-semibold">Easy Payment Method</p>
                </div>
                <div className=" flex items-center gap-4">
                  <GrSecure className="text-2xl lg:text-4xl h-12 w-12 shadow-sm p-2 rounded-full bg-yellow-300" />
                  <p className=" text-xl font-semibold">Get Offers On Books</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
