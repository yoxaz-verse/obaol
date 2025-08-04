import mdx from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

const withMDX = mdx({
  extension: /\.mdx?$/,
});
const withNextIntl = createNextIntlPlugin();

const baseConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

let nextConfig = withNextIntl(withMDX(baseConfig));

nextConfig = Object.assign({}, nextConfig, {
  async redirects() {
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
        source: "/cardamom/:path*",
        destination: "https://cardamom.obaol.com/:path*",
      },
      {
        source: "/gain",
        destination: "https://gain.obaol.com",
      },
      {
        source: "/gain/:path*",
        destination: "https://gain.obaol.com/:path*",
      },
      // localized paths, if desired
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
      // add more localized rewrites if needed ...
    ];
  },
});

export default nextConfig;
