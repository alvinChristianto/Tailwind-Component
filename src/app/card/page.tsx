import React from "react";
import Tipe1 from "./Tipe1";
import Tipe2 from "./Tipe2";

function Card(props: any) {
  return (
    <>
      <Tipe1 />
      <hr className="py-6 bg-slate-500" />
      <Tipe2 />
    </>
  );
}

export default Card;
