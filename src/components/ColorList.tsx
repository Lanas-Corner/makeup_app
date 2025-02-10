import React from 'react';
import { ProductColor } from '../hooks/useConfig';

const ColorList = ({ colorList }: { colorList: ProductColor[] }) => {
  return (
    <div className="flex w-80 flex-wrap justify-center gap-5 p-2">
      {colorList.length > 0 ? (
        colorList.map((color, i) => (
          <div
            key={i}
            className={'rounded-full p-5'}
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
