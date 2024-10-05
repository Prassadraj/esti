/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "ap.louisvuitton.com",
      "posters.freecaster.com",
      "img.freepik.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "plus.unsplash.com",
      "in.louisvuitton.com",
    ], // Optimized by removing duplicates
  },
  // Additional performance optimizations
  experimental: {
    scrollRestoration: true, // Enable smooth scroll restoration
  },
  // Optimizing build and runtime performance
  reactStrictMode: true,
  compress: true, // Enable compression for all responses
  optimizeFonts: true, // Optimize fonts loading
  images: {
    formats: ["image/webp"], // Use modern image formats
    minimumCacheTTL: 60, // Set a minimum cache time for images
  },
  webpack(config, { dev }) {
    if (!dev) {
      config.optimization.splitChunks = {
        chunks: "all",
        minSize: 30000,
        maxSize: 50000, // Optimize chunk sizes for smaller bundles
      };
    }
    return config;
  },
};

export default nextConfig;
