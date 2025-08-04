import mdx from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],

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
};

export default withNextIntl(withMDX(nextConfig));
