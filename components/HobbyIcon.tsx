
import { FC } from "react";
import Image from "./Image";

interface Props {
  src: string;
  caption: string
}

const HobbyIcon: FC<Props> = ({src, caption}) => {
  return (<div className="flex flex-col items-center p-10">
  <div><Image src={src} alt="Child reading" /></div>
  <div>{caption}</div>
</div>)
}

export default HobbyIcon;

