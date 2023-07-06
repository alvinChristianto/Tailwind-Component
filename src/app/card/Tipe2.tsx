import React from "react";
import Image from "next/image";

function Tipe2(props: any) {
  return (
    <div className="container bg-white w-auto px-4 pt-3 md:pt-10 lg:px-32">
      <div className="columns-1 md:columns-3">
        <div className="mx-3 my-3 bg-white rounded-lg border overflow-hidden bg-gradient-to-b from-blue-300">
          <div className="h-40 mobm:h-48 mobl:h-56 md:h-32 w-full object-cover ">
            <Image
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              width={400}
              height={300}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-row-reverse pr-2 pt-8">
            <p className="left-4 text-slate-800 border bg-white rounded-full">
              54:40
            </p>
          </div>
          <h3 className="font-bold text-4xl pl-2 text-slate-900">Threadmill</h3>
          <p className="font-medium text-sm pl-2 my-2 text-slate-700">
            250 est calories
          </p>
        </div>
        <div className="mx-3 my-3 bg-teal-500 rounded-sm">
          <p>cards</p>
        </div>
        <div className="mx-3 my-3 bg-teal-500 rounded-sm">
          <p>cards</p>
        </div>
      </div>
    </div>
  );
}

export default Tipe2;
