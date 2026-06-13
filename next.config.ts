import type { NextConfig } from "next";

const legacyHosts = [
  "waitless-landing.vercel.app",
  "waitless-landing-evri-s-projects.vercel.app",
  "waitless-landing-git-master-evri-s-projects.vercel.app",
  "waitless-landing-mustrene-1355-evri-s-projects.vercel.app",
];

const nextConfig: NextConfig = {
  basePath: "/shoptraffic",
  async redirects() {
    return [
      ...legacyHosts.map((host) => ({
        source: "/",
        has: [{ type: "host" as const, value: host }],
        destination: "https://www.nexaipla.com/shoptraffic",
        permanent: true as const,
        basePath: false as const,
      })),
    ];
  },
};

export default nextConfig;
