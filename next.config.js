/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  // experimental: {
  //   // …
  //   serverComponentsExternalPackages: ["@react-pdf/renderer"],
  // },
  future: { webpack5: true },
};

module.exports = nextConfig;
