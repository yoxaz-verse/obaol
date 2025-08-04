import mdx from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

const withMDX = mdx({
  extension: /\.mdx?$/,
});

const withNextIntl = createNextIntlPlugin();

// Base config
const baseConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

// Wrap with both plugins
let nextConfig = withNextIntl(withMDX(baseConfig));

// ✅ Add `rewrites` after wrapping
nextConfig = Object.assign({}, nextConfig, {
  async rewrites() {
    return [
      {
        source: "/overview",
        destination: "https://overview.obaol.com",
      },
      {
        source: "/overview/:path*",
        destination: "https://overview.obaol.com/:path*",
      },
      {
        source: "/onboarding",
        destination: "https://onboarding.obaol.com",
      },
      {
        source: "/onboarding/:path*",
        destination: "https://onboarding.obaol.com/:path*",
      },
      {
        source: "/automate",
        destination: "https://automate.obaol.com",
      },
      {
        source: "/automate/:path*",
        destination: "https://automate.obaol.com/:path*",
      },
      {
        source: "/cardamom",
        destination: "https://cardamom.obaol.com",
      },
      {
        source: "/gain",
        destination: "https://gain.obaol.com",
      },
    ];
  },
});

export default nextConfig;
