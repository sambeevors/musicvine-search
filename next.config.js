/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    // This is a list of domains that are allowed to be used for images.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.uppbeat.io",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "cdn.musicvine.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "s3.eu-west-2.amazonaws.com",
        port: "",
        pathname: "/cdn.uppbeat.io/**",
      },
    ],
  },
};

export default config;
