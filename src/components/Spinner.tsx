import React from "react";

const Spinner = ({ size }: { size?: number }) => {
  return (
    <div
      className="animate-spin rounded-full border-2 border-slate-300 border-solid border-t-slate-900 border-r-slate-900"
      style={{ width: size || 32, height: size || 32 } as React.CSSProperties}
    />
  );
};

export default Spinner;
