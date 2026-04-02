/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Trailing slashes: pick one and stick with it (prevents duplicate URLs)
  trailingSlash: false,

  // Security & performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Security
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // Performance — cache static assets aggressively
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
      {
        // Cache static assets for 1 year
        source: "/(.*)\\.(ico|png|svg|jpg|jpeg|gif|webp|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirect www to non-www (or vice versa) — prevents duplicate indexing
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.clovo-solutions.com" }],
        destination: "https://clovo-solutions.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
