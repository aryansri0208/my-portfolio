import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/my-portfolio",
  assetPrefix: isProd ? "/my-portfolio" : undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/my-portfolio",
  },
};

export default nextConfig;
