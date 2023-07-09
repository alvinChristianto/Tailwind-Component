import React from "react";
import Flex1 from "./Flex1";
import Flex2 from "./Flex2";
import Order from "./Order";

function Flex(props: any) {
  return (
    <div>
      <Flex1 />
      <hr className="bg-slate-900 h-2 mt-3" />
      <Flex2 />
      <hr className="bg-slate-900 h-2 mt-3" />
      <Order />
    </div>
  );
}

export default Flex;
