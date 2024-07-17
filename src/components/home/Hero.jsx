import React from "react";

const Hero = ({ onHandlerPopUp }) => {
  return (
    <>
      <section className="pt-4 min-h-[550px] sm:min-h-[650px] bg-hero bg-cover bg-center flex justify-between items-center bg-gray-100 ">
        <div className=" w-full p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
            {/*----text content section-- */}
            <div className=" flex flex-col justify-center gap-4 text-center order-2 sm:text-left sm:order-1 ">
              <h1 className=" text-5xl sm:text-6xl lg:text-7xl font-bold">
                His Life Will Forver Changed
                <p className=" bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
                  by Anonymous
                </p>
              </h1>

              <p className=" text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                atque dolores deleniti veniam soluta rerum sequi, quas, quam
                voluptatum autem molestias nulla provident accusantium officia
                repellendus minima iste, dolor praesentium. Alias aliquam modi
                beatae velit? Ab quisquam facere, quae unde, ullam dolorem
                expedita neque repellendus natus autem vitae, quod architecto
              </p>
              <div>
                <button
                  className=" bg-gradient-to-r from-primary to-secondary py-1 px-4 rounded-2xl mt-4  text-white hover:cursor-pointer hover:scale-105 duration-200"
                  onClick={onHandlerPopUp}
                >
                  Order Now
                </button>
              </div>
            </div>
            {/*----image section-- */}
            <div className=" min-h-[450px] flex justify-center items-center  order-1 sm:order-2">
              {/*-----main image---- */}
              <div className="h-[300px] sm:h-[450px] flex justify-center items-center">
                <img
                  className=" w-[300px] h-[350px] sm:h-[450px] sm:w-[450px] object-contain mx-auto "
                  src="../../books/book2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
