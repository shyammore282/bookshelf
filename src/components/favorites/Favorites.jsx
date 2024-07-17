import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../../redux/slice/FavoritesSlice";

const Favorites = () => {
  const favBooks = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const onRemove = (id) => {
    dispatch(removeFavorite(id));
  };
  return (
    <>
      <section className=" mt-10 flex items-center">
        <div className="container">
          <h3 className=" text-center md:font-bold text-xl lg:text-3xl py-8">
            Your Favorites Books Collection
          </h3>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cold-2 lg:grid-cols-4 gap-5 mt-2">
          {favBooks.map((v) => {
            return (
              <div
                className=" mt-4 py-4 flex flex-col items-center rounded-lg"
                key={v.id}
              >
                <img
                  className=" w-[40vh] h-[55vh] text-center rounded-xl hover:scale-105 duration-300"
                  src={v.image_url}
                  alt={v.title}
                />

                <div className=" text-xl px-3 py-1">
                  <h5 className=" text-2xl font-semibold px-2">{v.title}</h5>
                </div>

                <button
                  className=" bg-primary mt-5 px-3 py-1  rounded-2xl text-white"
                  onClick={() => onRemove(favBooks.id)}
                >
                  Remove To Favorites
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Favorites;
