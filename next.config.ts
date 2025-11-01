import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3845", // ✅ your asset server port
        pathname: "/assets/**", // allow only images under /assets
      },
    ],
  },
};

export default nextConfig;
