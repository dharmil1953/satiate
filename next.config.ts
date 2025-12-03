import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbo: false,
   typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
