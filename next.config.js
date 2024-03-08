/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "",
  assetPrefix: "",
  trailingSlash: true,
  
};

module.exports = {
  env: {
    GOOGLE_SERVICE_PRIVATE_KEY: process.env.GOOGLE_SERVICE_PRIVATE_KEY,
  },
  webpack: (nextConfig, { isServer }) => {
    if (!isServer) {
      nextConfig.resolve.fallback.fs = false;
      nextConfig.resolve.fallback.tls = false;
      nextConfig.resolve.fallback.net = false;
      nextConfig.resolve.fallback.child_process = false;
    }

    return nextConfig;
  },
};