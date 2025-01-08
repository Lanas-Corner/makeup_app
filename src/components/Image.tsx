import React, { useState } from "react";
import Placeholder from "../images/placeholder.jpg";
import Sceleton from "./Sceleton";

enum Status {
  Loading,
  Loaded,
  Failed,
}

const Image = ({
  imageSrc,
  width,
  height,
}: {
  imageSrc: string;
  width: number;
  height: number;
}) => {
  const [status, setStatus] = useState(Status.Loading);

  return (
    <div>
      {(status === Status.Loading || status === Status.Failed) && (
        <Sceleton width={width} height={height} />
      )}
      {(status === Status.Loading || status === Status.Loaded) && (
        <img
          src={imageSrc}
          alt="product"
          width={width}
          height={height}
          onLoad={() => setStatus(Status.Loaded)}
          onError={() => setStatus(Status.Failed)}
        />
      )}
    </div>
  );
};

export default Image;
