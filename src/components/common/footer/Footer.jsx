import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaLocationArrow, FaMobile } from "react-icons/fa6";
import { importantLink } from "../../../data/Data";

const Footer = () => {
  return (
    <>
      <section className=" mt-9 bg-primary/30  py-5 w-full">
        <div className=" container grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
          {/* book heading section  */}
          <div className="">
            <h1 className=" text-xl font-bold text-left">BookShelf</h1>
            <p className=" text-gray-700 text-balance">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              maxime porro temporibus voluptatum magnam iure id
            </p>

            <div className=" flex items-center gap-2 mt-2">
              <FaLocationArrow />
              <span>Khandwa Indore</span>
            </div>

            <div className="flex items-center gap-2 ">
              <FaMobile />
              <span> +91 12345690</span>
            </div>

            <div className=" flex items-center gap-3 mt-4 ">
              <FaInstagram size={25} />
              <FaFacebook size={25} />
              <FaLinkedin size={25} />
            </div>
          </div>
          {/* link section */}
          <div className=" grid grid-cols-3 gap-4">
            <div>
              <h1 className=" text-xl font-bold py-4">Important Link</h1>
              {importantLink.map((value) => {
                return (
                  <li
                    key={value.id}
                    className=" list-none text-md font-semibold"
                  >
                    <span>&#11162;</span>
                    {value.text}
                  </li>
                );
              })}
            </div>

            <div>
              <h1 className=" text-xl font-bold py-4">Important Link</h1>
              {importantLink.map((value) => {
                return (
                  <li
                    key={value.id}
                    className=" list-none text-md font-semibold"
                  >
                    <span>&#11162;</span>
                    {value.text}
                  </li>
                );
              })}
            </div>

            <div>
              <h1 className=" text-xl font-bold py-4">Important Link</h1>
              {importantLink.map((value) => {
                return (
                  <li
                    key={value.id}
                    className=" list-none text-md font-semibold"
                  >
                    <span>&#11162;</span>
                    {value.text}
                  </li>
                );
              })}
            </div>
          </div>
        </div>
        {/* copyright section */}
        <div className=" mx-7 border-t-2 border-primary h-12 transform">
          <p className=" text-center  translate-y-6">
            Copyright &copy; 2024. All rights and reserved
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
