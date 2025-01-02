/** @type {import('next').NextConfig} */

const imageDomains = [];

const nextConfig = {
  trailingSlash: false,
  generateEtags: false,
  images: {
    unoptimized: true,
    domains: imageDomains,
  },
};

module.exports = nextConfig;
