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
        permanent: true,
      },
      {
        source: "/overview/:path*",
        destination: "https://overview.obaol.com/:path*",
        permanent: true,
      },
      {
        source: "/onboarding",
        destination: "https://onboarding.obaol.com",
        permanent: true,
      },
      {
        source: "/onboarding/:path*",
        destination: "https://onboarding.obaol.com/:path*",
        permanent: true,
      },
      {
        source: "/automate",
        destination: "https://automate.obaol.com",
        permanent: true,
      },
      {
        source: "/automate/:path*",
        destination: "https://automate.obaol.com/:path*",
        permanent: true,
      },
      {
        source: "/cardamom",
        destination: "https://cardamom.obaol.com",
        permanent: true,
      },
      {
        source: "/cardamom/:path*",
        destination: "https://cardamom.obaol.com/:path*",
        permanent: true,
      },
      {
        source: "/gain",
        destination: "https://gain.obaol.com",
        permanent: true,
      },
      {
        source: "/gain/:path*",
        destination: "https://gain.obaol.com/:path*",
        permanent: true,
      },

      // add more localized rewrites if needed ...
    ];
  },
});

export default nextConfig;
