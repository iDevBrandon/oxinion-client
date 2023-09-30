/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["img.freepik.com", "img.cjnews.cj.net", "source.unsplash.com"],
  },
};
