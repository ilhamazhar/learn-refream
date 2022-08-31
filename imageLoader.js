
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

function imageLoader({ src }) {
  return `${publicRuntimeConfig.basePath}/img/${src}`; // REPLACE WITH YOUR IMAGE DIRECTORY
}

module.exports = imageLoader;

