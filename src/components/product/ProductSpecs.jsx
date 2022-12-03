import React from "react";

export default function ProductSpecs({ Specifications }) {
  return (
    <div
      className="max_sm:text-[12px] max_sm:w-[20rem]"
      style={{ fontFamily: "Fragment Mono" }}
    >
      <p>{Specifications}</p>
    </div>
  );
}
