import React from "react";

// flex grow
function Flex2(props: any) {
  return (
    <div className="container w-auto mx-2 md:mx-32 mt-5 flex">
      <div className="flex-none w-20 h-16 bg-white border rounded-lg m-3">
        <h2 className="text-center pt-4 text-slate-900 font-bold">01</h2>
      </div>
      <div className="grow h-16 bg-white border rounded-lg m-3">
        <h2 className="text-center pt-4 text-cyan-800 font-bold">02</h2>
      </div>
      <div className="flex-none w-20  h-16  bg-white border rounded-lg m-3">
        <h2 className="text-center pt-4 text-blue-900 font-bold">03</h2>
      </div>
    </div>
  );
}

export default Flex2;
