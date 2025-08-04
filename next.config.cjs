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
      // OVERVIEW
      {
        source: "/overview",
        destination: "https://overview.obaol.com",
      },
      {
        source: "/overview/:path*",
        destination: "https://overview.obaol.com/:path*",
      },
      {
        source: "/:locale/overview",
        destination: "https://overview.obaol.com",
      },
      {
        source: "/:locale/overview/:path*",
        destination: "https://overview.obaol.com/:path*",
      },

      // ONBOARDING
      {
        source: "/onboarding",
        destination: "https://onboarding.obaol.com",
      },
      {
        source: "/onboarding/:path*",
        destination: "https://onboarding.obaol.com/:path*",
      },
      {
        source: "/:locale/onboarding",
        destination: "https://onboarding.obaol.com",
      },
      {
        source: "/:locale/onboarding/:path*",
        destination: "https://onboarding.obaol.com/:path*",
      },

      // AUTOMATE
      {
        source: "/automate",
        destination: "https://automate.obaol.com",
      },
      {
        source: "/automate/:path*",
        destination: "https://automate.obaol.com/:path*",
      },
      {
        source: "/:locale/automate",
        destination: "https://automate.obaol.com",
      },
      {
        source: "/:locale/automate/:path*",
        destination: "https://automate.obaol.com/:path*",
      },

      // CARDAMOM
      {
        source: "/cardamom",
        destination: "https://cardamom.obaol.com",
      },
      {
        source: "/:locale/cardamom",
        destination: "https://cardamom.obaol.com",
      },

      // GAIN
      {
        source: "/gain",
        destination: "https://gain.obaol.com",
      },
      {
        source: "/:locale/gain",
        destination: "https://gain.obaol.com",
      },
    ];
  },
};

export default withNextIntl(withMDX(nextConfig));
