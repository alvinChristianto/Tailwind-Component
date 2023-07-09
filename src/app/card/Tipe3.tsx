import React from "react";
import Image from "next/image";

function Tipe3(props: any) {
  return (
    <>
      <div className="container">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              {/* <img className="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture"> */}
              <div className="h-48 mobm:h-56 mobl:h-64 w-full object-cover md:h-full md:w-48">
                <Image
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Company retreats
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Incredible accommodation for your team
              </a>
              <p className="mt-2 text-slate-500">
                Looking to take your team away on a retreat to enjoy awesome
                food and take in some sunshine? We have a list of places to do
                just that.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tipe3;
