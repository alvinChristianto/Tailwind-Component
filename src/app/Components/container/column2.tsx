import React from "react";
import Image from "next/image";
// import imgHero from "../../../../public/img/hero.png";

function column2(props: any) {
  return (
    <>
      {/* 2 COLUMNS */}
      <div className="container mx-auto p-4 ">
        <h3 className="pt-2 text-3xl text-slate-800 font-semibold uppercase">
          2 columns
        </h3>
        <div className="my-1 xs:columns-1 sm:columns-2 max-w-3xl mx-auto">
          <div className="border rounded-md p-4 mb-2 bg-slate-50">
            <h3 className="text-4xl font-bold text-teal-800">
              <span className="text-slate-900 font-poppins">Alvin</span>{" "}
              Christianto
            </h3>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800">
              Urunan Project
            </h3>
            <p className="text-slate-700 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              expedita repellat eveniet modi minus error assumenda, sed quo ut
              accusantium? Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Nihil expedita repellat eveniet modi minus error assumenda,
              sed quo ut accusantium?
            </p>
            <div className="my-4">
              <a
                href="#"
                className="px-5 bg-green-700 py-3 rounded-lg shadow-lg uppercase font-semibold tracking-wider hover:bg-green-900 transition duration-100 delay-50"
              >
                Join Urunan
              </a>
            </div>
          </div>
          <div className="border rounded-md p-4 mb-2 bg-slate-50">
            <h3 className="text-4xl font-bold text-teal-800">
              <span className="text-slate-900">Alvin</span> Christianto
            </h3>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800">
              Urunan Project
            </h3>
            <p className="text-slate-700 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              expedita repellat eveniet modi minus error assumenda, sed quo ut
              accusantium? Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Nihil expedita repellat eveniet modi minus error assumenda,
              sed quo ut accusantium?
            </p>
            <div className="my-4">
              <a
                href="#"
                className="px-5 bg-green-700 py-3 rounded-lg shadow-lg uppercase font-semibold tracking-wider"
              >
                Join Urunan
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default column2;
