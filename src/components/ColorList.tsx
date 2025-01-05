import React from "react";
import { ProductColor } from "../hooks/useConfig";

const ColorList = ({ colorList }: { colorList: ProductColor[] }) => {
  return (
    <div className="flex flex-wrap p-2 w-80 gap-5 justify-center">
      {colorList.length > 0 ? (
        colorList.map((color, i) => (
          <div
            key={i}
            className={"p-5 rounded-full " + color.hex_value}
            style={{ backgroundColor: color.hex_value }}
          />
        ))
      ) : (
        <p>no colors</p>
      )}
    </div>
  );
};

export default ColorList;
