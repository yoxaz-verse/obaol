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
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
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
  title: `${person.name}`,
  description: `Transforming Global Agri Trade with ${person.firstName}`,
  headline: <>Transforming Global Agri Trade with ${person.firstName}</>,
  subline: (
    <>
      Evolution of Commodity Trading with{" "}
      <InlineCode>${person.firstName} Supreme</InlineCode> <br />
      by Connecting farmers with the world by sourcing premium-quality spices,
      rice, and pulses from India. ,
    </>
  ),
};

const about = {
  label: "About Obaol",
  title: "About Obaol",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
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
    title: "Introduction",
    description: (
      <>
        OBAOL Supreme specializes in global sourcing and export of
        premium-quality agricultural products from India. With expertise in
        spices, rice, and pulses, we connect farmers to global markets, ensuring
        quality, sustainability, and competitive pricing
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Our Service",
    experiences: [
      {
        company: "Sourcing",
        timeframe: "",
        role: "",
        achievements: [
          <>
            Connecting with trusted farmers and suppliers across India for
            premium agricultural products.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/about/sourcing.jpg",
          //   alt: "Obaol Sourcing",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/about/sourcing3.jpg",
          //   alt: "Obaol Sourcing",
          //   width: 16,
          //   height: 9,
          // },
          {
            src: "/images/gallery/img (8).JPG",
            alt: "Obaol Logistics",
            width: 16,
            height: 9,
          },
        ],
      },

      {
        company: "Quality Assurance",
        timeframe: "",
        role: "",
        achievements: [
          <>
            Ensuring every product meets international quality and safety
            standards
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/about/qualityAssurance.jpg",
          //   alt: "Obaol Quality Assurance",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Logistics",
        timeframe: "",
        role: "",
        achievements: [
          <>
            Streamlined shipping and transportation solutions to deliver goods
            worldwide on time.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/gallery/img (13).JPG",
            alt: "Obaol Logistics",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Export Documentation",
        timeframe: "",
        role: "",
        achievements: [
          <>
            Handling all customs paperwork, certifications, and trade compliance
            for smooth international transactions.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/about/documentation.jpg",
          //   alt: "Export Documentation",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Market Insights",
        timeframe: "",
        role: "",
        achievements: [
          <>
            Providing clients with the latest market trends and pricing
            intelligence.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/about/Insights.jpg",
          //   alt: "Obaol Insights",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Global Reach",
    institutions: [
      {
        name: "List of Regions",
        description: (
          <>
            <ul>
              <li>Europe: Germany, UK, Italy, France </li>
              <li>
                Asia: Middle East, Southeast Asia, China Europe: Germany, UK,
                Italy, France North America: USA, Canada
              </li>
              <li>North America: USA, Canada</li>
            </ul>
          </>
        ),
      },
      {
        name: "Achievements Highlight",
        description: (
          <>
            {" "}
            <ul>
              <li>
                Exported over [10 metric tons] of spices, rice, and pulses in
                2024{" "}
              </li>
              <li>Partnered with over 100 importers globally.</li>
              <li>Reduced transit times by 30% through optimized logistics.</li>
            </ul>
            .
          </>
        ),
      },
    ],
  },

  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Sourcing Expertise",
        description: (
          <>
            Comprehensive knowledge of spices, rice, pulses, and their global
            demand trends.
          </>
        ),
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Supply Chain Management",
        description: (
          <>
            Expertise in logistics and ensuring timely, efficient delivery to
            global buyers.
          </>
        ),
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
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
