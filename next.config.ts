import type { NextConfig } from "next";

// Always use the repo prefix so all assets and links work 100% on GitHub Pages
const repoName = "/todo-alturas-web";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoName,
  assetPrefix: `${repoName}/`,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: repoName,
  },
};

export default nextConfig;
