import React from "react";

export default function ProductSpecs({ Specifications }) {
  return (
    <div className="max_sm:text-[12px]" style={{ fontFamily: "Fragment Mono" }}>
      <p>{Specifications}</p>
    </div>
  );
}
