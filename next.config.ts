import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },
  output: "export",
  basePath: isProd ? "/Raymondcheung" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/Raymondcheung" : "",
  },
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
};

export default nextConfig;
