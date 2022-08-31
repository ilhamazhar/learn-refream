import imageLoader from "../imageLoader";
import NextImage from "next/image";
import { FC } from "react";

interface Props {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  className?: string;
}

const Image: FC<Props> = ({ src, alt, width, height, className }) => {
  return (
    <NextImage
      src={src}
      className={className ? className : ""}
      alt={alt ? alt : "Image"}
      loader={imageLoader}
      width={width ? width : "100%"}
      height={height ? height : "100%"}
      layout="fixed"
    />
  );
};

export default Image;

