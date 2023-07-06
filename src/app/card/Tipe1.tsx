import React from "react"
import Image from "next/image";

function Tipe1 (props:any) {
  return (
    <div>
      tipe1
      <div className="container bg-white w-auto px-4 pt-3 md:pt-10 lg:px-32">
      <div className="columns-1 md:columns-2">
        <div className="bg-white border rounded-lg overflow-hidden">
          <div className="relative pb-2.5">
            <div className="relative h-full w-full object-cover">
              <Image
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>

          <div className="p-3">
            <div className="">
              <h2 className="mt-2 font-bold text-slate-900 ">Alvin</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
};

export default Tipe1;
