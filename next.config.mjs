/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Tree-shake icon imports; browserslist in package.json drops legacy polyfills.
  experimental: {
    optimizePackageImports: ["simple-icons"],
  },
};

export default nextConfig;
