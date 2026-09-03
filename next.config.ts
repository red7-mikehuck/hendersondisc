import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Legacy paths from the 2019 OptimizePress funnel. Add any others found in Search Console.
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/optin", destination: "/", permanent: true },
      { source: "/thank-you-page", destination: "/thank-you", permanent: true },
      { source: "/thankyou", destination: "/thank-you", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
