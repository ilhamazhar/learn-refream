/** @type {import('next').NextConfig} */

const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

const basePath = (process.env.NODE_ENV === "development" ? "" : "/learn-refream");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    loader: "custom",
  },
  serverRuntimeConfig: {
    jwtSecret: process.env.JWT_SECRET,
    jwtSecretUser: process.env.JWT_SECRET_USER,
  },
  publicRuntimeConfig: {
    basePath,
  },
  env: {
  },
  basePath
};

module.exports = nextConfig;



