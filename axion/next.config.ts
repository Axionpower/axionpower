import type { NextConfig } from "next";

// Extract hostname from WP GraphQL URL so images work automatically
const wpUrl = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL || "";
let wpHostname = "violet-tarsier-674356.hostingersite.com"; // safe fallback
try {
  if (wpUrl) wpHostname = new URL(wpUrl).hostname;
} catch {
  // Keep safe fallback if URL is malformed
}

const securityHeaders = [
  { key: "X-Content-Type-Options",    value: "nosniff" },
  { key: "X-Frame-Options",           value: "SAMEORIGIN" },
  { key: "X-XSS-Protection",          value: "1; mode=block" },
  { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy",        value: "geolocation=(), microphone=(), camera=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      `img-src 'self' data: https://${wpHostname} https://violet-tarsier-674356.hostingersite.com`,
      `media-src 'self' https://${wpHostname} https://violet-tarsier-674356.hostingersite.com blob:`,
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    qualities: [75, 85, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: wpHostname,
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "violet-tarsier-674356.hostingersite.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
