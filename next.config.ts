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
      // Paths from drswolensky.com, in case that domain is pointed here later.
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/the-swolensky-method", destination: "/swolensky-method", permanent: true },
      { source: "/spinal-decompression", destination: "/swolensky-method#spinal-decompression", permanent: true },
      { source: "/laser-therapy", destination: "/swolensky-method#cold-laser", permanent: true },
      { source: "/electroanalgesia", destination: "/swolensky-method#electroanalgesia", permanent: true },
      { source: "/hyperwave-shockwave-therapy-henderson-nv", destination: "/swolensky-method#sound-therapy", permanent: true },
      { source: "/hyperwave-shockwave-therapy", destination: "/swolensky-method#sound-therapy", permanent: true },
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
