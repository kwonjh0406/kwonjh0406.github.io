import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // GitHub Pages serves static files without a Next.js image server.
    unoptimized: true,
  },
};

export default nextConfig;
