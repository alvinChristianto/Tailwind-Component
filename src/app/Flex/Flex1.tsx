import React from "react";

// flex shrink
function Flex1(props: any) {
  return (
    <div className="container w-auto mx-2 md:mx-32 mt-5 flex">
      <div className="flex-1 h-16 bg-white border rounded-lg m-3">
        <h2 className="text-center pt-4 text-slate-900 font-bold">lorem20</h2>
      </div>
      <div className="shrink-0 h-16 w-32  bg-white border rounded-full m-3">
        <h2 className="text-center pt-4 text-cyan-800 font-bold">01</h2>
      </div>
      <div className="flex-1 h-16  bg-white border rounded-full m-3">
        <h2 className="text-center pt-4 text-blue-900 font-bold">03</h2>
      </div>
    </div>
  );
}

export default Flex1;
