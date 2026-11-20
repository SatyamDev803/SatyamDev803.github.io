/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages serves static files only.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
