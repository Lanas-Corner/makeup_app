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
  isSmall,
}: {
  imageSrc: string;
  isSmall: boolean;
}) => {
  //   const [src, setStc] = useState(imageSrc);
  const [status, setStatus] = useState(Status.Loading);

  return (
    <div>
      {(status === Status.Loading || status === Status.Failed) && (
        <Sceleton width={isSmall ? 200 : 300} height={isSmall ? 293 : 350} />
      )}
      {(status === Status.Loading || status === Status.Loaded) && (
        <img
          src={imageSrc}
          alt="product"
          width={isSmall ? 200 : 300}
          onLoad={() => setStatus(Status.Loaded)}
          onError={() => setStatus(Status.Failed)}
        />
      )}
    </div>
  );
};

export default Image;
