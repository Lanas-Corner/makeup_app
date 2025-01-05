import React from "react";

const Sceleton = ({ width, height }: { width: number; height: number }) => {
  return (
    <div
      className="bg-slate-100 h-80"
      style={{ width: width, height: height }}
    ></div>
  );
};

export default Sceleton;
