import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../data/Data";
import { GoStarFill } from "react-icons/go";
import { useDispatch } from "react-redux";
import { addFavorites } from "../../redux/slice/FavoritesSlice";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const Dispatch = useDispatch();

  const getBooks = () => {
    try {
      axios.get(API_URL).then((res) => {
        console.log(res.data);
        setBooks(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  const onAdd = (fa) => {
    Dispatch(addFavorites(fa));
  };

  return (
    <>
      <section className=" mt-9 pt-9 w-full">
        <div className=" container flex flex-col ">
          <div className=" text-center ">
            <h1 className=" text-2xl font-bold lg:text-5xl">All Books</h1>
            <p className="text-gray-600 py-2 text-balance">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              voluptas hic aperiam incidunt rem eaque eos deserunt corrupti
              perferendis. Commodi omnis facilis, autem alias repellat soluta
              eaque amet temporibus at! Iusto dolor odit ullam accusantium
            </p>
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-4 ">
            {books.map((v, id) => {
              return (
                <div
                  className=" mt-4 py-4 flex flex-col items-center rounded-lg"
                  key={id}
                >
                  <img
                    className=" w-[40vh] h-[55vh] text-center rounded-xl hover:scale-105 duration-300"
                    src={v.image_url}
                    alt={v.title}
                  />

                  <div className=" text-xl px-3 py-1">
                    <h5 className=" text-2xl font-semibold px-2">{v.title}</h5>
                  </div>
                  <div className=" flex items-center  pt-3 px-5">
                    <div className=" flex mx-5">
                      <GoStarFill className=" text-yellow-500" />
                      <GoStarFill className=" text-yellow-500" />
                      <GoStarFill className=" text-yellow-500" />
                      <GoStarFill className=" text-yellow-500" />
                      <GoStarFill className=" " />
                    </div>

                    <button className=" mx-5 px-3 py-1 bg-gradient-to-r from-secondary to-primary rounded-2xl text-white">
                      Order Now
                    </button>
                  </div>
                  <button
                    onClick={() => onAdd(v)}
                    className=" bg-primary mt-5 px-3 py-1  rounded-2xl text-white"
                  >
                    Add To Favorites
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default BookList;
