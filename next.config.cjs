import mdx from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

const withMDX = mdx({ extension: /\.mdx?$/ });
const withNextIntl = createNextIntlPlugin();

const baseConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

let nextConfig = withNextIntl(withMDX(baseConfig));

nextConfig = {
  ...nextConfig,
  async rewrites() {
    return [
      // Overview
      { source: "/overview", destination: "https://overview.obaol.com" },
      {
        source: "/overview/:path*",
        destination: "https://overview.obaol.com/:path*",
      },
      // Onboarding
      { source: "/onboarding", destination: "https://onboarding.obaol.com" },
      {
        source: "/onboarding/:path*",
        destination: "https://onboarding.obaol.com/:path*",
      },
      // Automate
      { source: "/automate", destination: "https://automate.obaol.com" },
      {
        source: "/automate/:path*",
        destination: "https://automate.obaol.com/:path*",
      },
      // Cardamom
      { source: "/cardamom", destination: "https://cardamom.obaol.com" },
      {
        source: "/cardamom/:path*",
        destination: "https://cardamom.obaol.com/:path*",
      },
      // GAIN
      { source: "/gain", destination: "https://gain.obaol.com" },
      { source: "/gain/:path*", destination: "https://gain.obaol.com/:path*" },
      // Localized variants
      {
        source: "/:locale/overview",
        destination: "https://overview.obaol.com",
      },
      {
        source: "/:locale/overview/:path*",
        destination: "https://overview.obaol.com/:path*",
      },
      {
        source: "/:locale/automate",
        destination: "https://automate.obaol.com",
      },
      {
        source: "/:locale/automate/:path*",
        destination: "https://automate.obaol.com/:path*",
      },
    ];
  },
};

export default nextConfig;
