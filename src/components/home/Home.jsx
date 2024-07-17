import React, { useState } from "react";
import Hero from "./Hero";
import BookList from "../booklist/BookList";
import BestBooks from "../bestbooks/BestBooks";
import Banner from "../Banner/Banner";
import PopUp from "../Popup/PopUp";

const Home = () => {
  const [orderPopUp, setOrderPopUp] = useState(false);
  const onHandlerPopUp = () => {
    setOrderPopUp(!orderPopUp);
  };
  return (
    <div>
      <Hero onHandlerPopUp={onHandlerPopUp} />
      <BookList onHandlerPopUp={onHandlerPopUp} />
      <BestBooks onHandlerPopUp={onHandlerPopUp} />
      <Banner />
      <PopUp onHandlerPopUp={onHandlerPopUp} orderPopUp={orderPopUp} />
    </div>
  );
};

export default Home;
