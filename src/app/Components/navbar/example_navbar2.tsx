"use client";
import React, { useState } from "react";
import { Menu, Close, LogoIonic } from "react-ionicons";

function example_navbar2(props: any) {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800"
          >
            <span className="text-3xl text-indigo-600 mr-1 pt-2">
              <LogoIonic
                color={"#000000"}
                title={"logo"}
                height="35px"
                width="35px"
              />
            </span>
            <h3 className="mt-3">Designer</h3>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {/* <ion-icon name={open ? "close" : "menu-outline"}></ion-icon> */}
            {open ? (
              <Close
                color={"#000000"}
                title={"menu-close"}
                height="35px"
                width="35px"
              />
            ) : (
              <Menu
                color={"#000000"}
                title={"menu-open"}
                height="35px"
                width="35px"
              />
            )}
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-16 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <button
              className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:mx-8 hover:bg-indigo-400 
    duration-500"
            >
              Get Started
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default example_navbar2;
