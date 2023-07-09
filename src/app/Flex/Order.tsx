import React from "react";

// order 
function Order(props: any) {
  return (
    <div>
      <div className="container w-auto mx-2 md:mx-32 mt-5 flex justify-between">
        <div className="flex-none w-20 h-16 bg-white border rounded-lg m-3 md:order-last">
          <h2 className="text-center pt-4 text-slate-900 font-bold">LAST! when md</h2>
        </div>
        <div className="grow h-16 bg-white border rounded-lg m-3">
          <h2 className="text-center pt-4 text-cyan-800 font-bold">02</h2>
        </div>
        <div className="flex-none w-20  h-16  bg-white border rounded-lg m-3">
          <h2 className="text-center pt-4 text-blue-900 font-bold">03</h2>
        </div>
      </div>
    </div>
  );
}

export default Order;
