import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "OBAOL",
  lastName: "",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Supreme",
  avatar: "/images/OBAOL.png",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Stay Updated with {person.firstName} for Latest in Agri Trade</>,
  description: (
    <>Get insights, market updates, and export tips directly to your inbox.</>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/obaol_supreme/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/obaol/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:obaol.biz@gmail.com",
  },
];

const home = {
  label: "Home",
  title: "OBAOL – Trusted Agro Trade Platform",
  description:
    "Empowering India’s Agro Trade with Verified, Real-time, and Transparent Solutions",
  headline: (
    <>Empowering India’s Agro Trade with Trust, Technology & Transparency</>
  ),
  subline: (
    <>
      Built for suppliers, traders, exporters, and farmers,{" "}
      <InlineCode>OBAOL</InlineCode> is transforming agriculture commerce by
      enabling verified pricing, scam-proof deals, and seamless trade flows
      across India and beyond. <br />
      Join the <InlineCode>GAIN Network</InlineCode> to connect with real
      buyers, share market updates, and grow through trust.
    </>
  ),
};

const about = {
  label: "About OBAOL",
  title: "About OBAOL",
  description:
    "Built for India’s Agro Future — Trusted, Transparent, Tech-Driven",
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/obaol/15min",
  },
  intro: {
    display: true,
    title: "What is OBAOL?",
    description: (
      <>
        OBAOL (Organised Buyers & Agro Online Link) is a next-gen B2B agro-trade
        platform built to solve the biggest pain points in agricultural trading
        — fake prices, scam leads, and unverified buyers. We empower verified
        farmers, traders, and exporters to do clean, trusted business with daily
        live pricing, digital product sharing, and end-to-end trade support. Our
        mission is to transform Indian agriculture into a reliable, transparent,
        and digitally connected economy.
      </>
    ),
  },
  work: {
    display: true,
    title: "Our Core Services",
    experiences: [
      {
        company: "Sourcing",
        achievements: [
          <>
            Partnering with verified farmers and suppliers across India to
            source spices, rice, pulses, and other agro-commodities.
          </>,
        ],
        images: [
          {
            src: "/images/gallery/img (8).JPG",
            alt: "OBAOL Sourcing",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Quality Control",
        achievements: [
          <>
            Rigorous QC processes including moisture testing, foreign matter
            checks, and origin documentation to prevent malpractices.
          </>,
        ],
        images: [],
      },
      {
        company: "Verified Trade Network (GAIN)",
        achievements: [
          <>
            Our exclusive GAIN community connects real buyers, verified
            suppliers, and agro professionals to share updates and close trusted
            deals.
          </>,
        ],
        images: [],
      },
      {
        company: "Logistics & Documentation",
        achievements: [
          <>
            From packaging to port delivery — we manage shipping,
            certifications, and export compliance to ensure smooth global trade.
          </>,
        ],
        images: [
          {
            src: "/images/gallery/img (13).JPG",
            alt: "OBAOL Logistics",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Live Pricing & Market Intelligence",
        achievements: [
          <>
            Real-time mandi and export prices for major commodities like
            turmeric, cardamom, and rice to help members avoid fake quotes.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Global Reach",
    institutions: [
      {
        name: "Export Destinations",
        description: (
          <ul>
            <li>Europe: Germany, UK, Italy, France</li>
            <li>Asia: Middle East, Southeast Asia, China</li>
            <li>North America: USA, Canada</li>
          </ul>
        ),
      },
      {
        name: "Impact Highlights",
        description: (
          <ul>
            {/* <li>Over 10,000 MT exported in 2025 across multiple categories</li> */}
            <li>More than 500 verified international suppliers</li>
            <li>Reduced lead time by 30% via streamlined operations</li>
            <li>More than 150 verified products</li>
          </ul>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Our Capabilities",
    skills: [
      {
        title: "Digital Sourcing Expertise",
        description: (
          <>
            Deep product knowledge in spices, rice, pulses — backed by verified
            crop data and real-time sourcing tools.
          </>
        ),
        images: [],
      },
      {
        title: "Trade & Logistics Tech",
        description: (
          <>
            Advanced supply chain tracking, documentation workflows, and partner
            network built for fast, compliant exports.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Whats obaol seen...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Catalog",
  title: "OBAOL CATALOG",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: `Inside ${person.firstName}`,
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img (1).JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img (2).JPG",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img (3).JPG",
      alt: "image",
      orientation: "vertical",
    },

    {
      src: "/images/gallery/img (15).JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img (4).JPG",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img (5).JPG",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img (6).JPG",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img (13).JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img (7).JPG",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img (8).JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img (9).JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img (14).JPG",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img (10).JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img (11).JPG",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
