import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({
  src,
  className,
  onClick,
}: {
  src: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <LazyLoadImage
      className={className || ""}
      alt=""
      effect="blur"
      src={src}
      onClick={onClick}
    />
  );
};

export default Img;
