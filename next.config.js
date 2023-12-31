/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.oxinion.com/:path*",
      },
      {
        source: "/api/:path*",
        destination: "http://localhost:8800/:path*",
      },
      {
        source: "/api/:path*",
        destination: "https://random-data-api.com/api/v2/addresses",
      },
      {
        source: "/api/:path*",
        destination: "http://localhost:8800/:path*",
      },
    ];
  },
};

module.exports = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "https://api.oxinion.com/",
      "img.freepik.com",
      "img.cjnews.cj.net",
      "source.unsplash.com",
      "picsum.photos",
      "firebasestorage.googleapis.com",
      "swiperjs.com",
      "images.unsplash.com",
    ],
  },
};
