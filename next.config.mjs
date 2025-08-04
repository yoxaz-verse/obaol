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
        permanent: false,
      },
      {
        source: "/overview/:path*",
        destination: "https://overview.obaol.com/:path*",
        permanent: false,
      },
      {
        source: "/onboarding",
        destination: "https://onboarding.obaol.com",
        permanent: false,
      },
      {
        source: "/onboarding/:path*",
        destination: "https://onboarding.obaol.com/:path*",
        permanent: false,
      },
      {
        source: "/automate",
        destination: "https://automate.obaol.com",
        permanent: false,
      },
      {
        source: "/automate/:path*",
        destination: "https://automate.obaol.com/:path*",
        permanent: false,
      },
      {
        source: "/cardamom",
        destination: "https://cardamom.obaol.com",
        permanent: false,
      },
      {
        source: "/cardamom/:path*",
        destination: "https://cardamom.obaol.com/:path*",
        permanent: false,
      },
      {
        source: "/gain",
        destination: "https://gain.obaol.com",
        permanent: false,
      },
      {
        source: "/gain/:path*",
        destination: "https://gain.obaol.com/:path*",
        permanent: false,
      },
      // localized paths, if desired
      {
        source: "/:locale/overview",
        destination: "https://overview.obaol.com",
        permanent: false,
      },
      {
        source: "/:locale/overview/:path*",
        destination: "https://overview.obaol.com/:path*",
        permanent: false,
      },
      {
        source: "/:locale/automate",
        destination: "https://automate.obaol.com",
        permanent: false,
      },
      {
        source: "/:locale/automate/:path*",
        destination: "https://automate.obaol.com/:path*",
        permanent: false,
      },
      // add more localized rewrites if needed ...
    ];
  },
});

export default nextConfig;
