/** @type {import('next').NextConfig} */
const nextConfig = {
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
