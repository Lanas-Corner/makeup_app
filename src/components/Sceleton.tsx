import React from 'react';

const Sceleton = ({ width, height }: { width: number; height: number }) => {
  return (
    <div
      className="h-80 bg-slate-100"
      style={{ width: width, height: height }}
    ></div>
  );
};

export default Sceleton;
