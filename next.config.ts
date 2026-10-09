import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "todo-alturas-web";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? `/${repoName}` : "",
  assetPrefix: isGithubActions ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
