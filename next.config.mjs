/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  // Hidden study notes (src/app/notes): keep them out of search engines.
  // Also set in public/_headers and netlify.toml for Netlify's CDN.
  async headers() {
    const noIndex = [{ key: "X-Robots-Tag", value: "noindex, nofollow" }];
    return [
      { source: "/notes", headers: noIndex },
      { source: "/notes/:path*", headers: noIndex },
    ];
  },
};

export default nextConfig;
