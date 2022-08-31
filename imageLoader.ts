
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

interface Props {
  src: string;
}

const imageLoader = ({ src }: Props) => {
  return `${publicRuntimeConfig.basePath}/img/${src}`; // REPLACE WITH YOUR IMAGE DIRECTORY
}

export default imageLoader;
