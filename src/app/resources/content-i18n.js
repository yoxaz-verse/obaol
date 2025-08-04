const createI18nContent = (t) => {
  const company = {
    firstName: "OBAOL",
    lastName: "Supreme",
    get name() {
      return `${this.firstName} ${this.lastName}`;
    },
    role: t("company.role"),
    avatar: "/images/OBAOL.png",
    location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ["English", "Malayalam"], // optional: Leave the array empty if you don't want to display languages
  };

  const newsletter = {
    display: true,
    title: <>{t("newsletter.title", { firstName: company.firstName })}</>,
    description: <>{t("newsletter.description")}</>,
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
      name: "Phone",
      icon: "phone",
      link: "tel:+91-730-609-6941",
    },
    {
      name: "Email",
      icon: "email",
      link: "mailto:obaol.biz@gmail.com",
    },
  ];

  const home = {
    label: t("home.label"),
    title: t("home.title", { name: company.name }),
    description: t("home.description"),
    headline: <>{t("home.headline")}</>,
    subline: <>{t("home.subline.part1", { name: company.name })}</>,
  };
  const servicesData = t.raw("about.work.services");
  const capabilityData = t.raw("about.capabilities.capability");
  const specialtiesData = t.raw("about.specialties.specialty");

  const about = {
    label: t("about.label"),
    title: t("about.label"),
    description: t("about.description", {
      name: company.name,
      role: company.role,
      location: company.location,
    }),
    tableOfContent: {
      display: true,
      subItems: true,
    },
    avatar: {
      display: true,
    },
    calendar: {
      display: true,
      link: "https://cal.com",
    },
    intro: {
      display: true,
      title: t("about.intro.title"),
      description: <>{t("about.intro.description")}</>,
    },
    work: {
      display: true,
      title: t("about.work.title"),
      services: Array.isArray(servicesData)
        ? servicesData.map((exp) => ({
            service: exp.service,
            description: exp.description || [],
            images: (exp.images || []).map((img) => ({
              src: img.src,
              alt: img.alt,
              width: img.width,
              height: img.height,
            })),
          }))
        : [],
    },

    specialties: {
      display: true,
      title: t("about.specialties.title"),
      specialty: Array.isArray(specialtiesData)
        ? specialtiesData.map((inst) => ({
            name: inst.name,
            description: Array.isArray(inst.description) ? (
              inst.description.map((line, idx) => <div key={idx}>{line}</div>)
            ) : (
              <>{inst.description}</>
            ),
          }))
        : [],
    },
    capabilities: {
      display: true,
      title: t("about.capabilities.title"),
      capability: Array.isArray(capabilityData)
        ? capabilityData.map((capability) => ({
            title: capability.title,
            description: <>{capability.description}</>,
            images: capability.images || [],
          }))
        : [],
    },
  };

  const blog = {
    label: t("blog.label"),
    title: t("blog.title"),
    description: t("blog.description", { name: company.name }),
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
  };

  const work = {
    label: t("work.label"),
    title: t("work.title"),
    description: t("work.description", { name: company.name }),
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
  };

  const gallery = {
    label: t("gallery.label"),
    title: t("gallery.title", { firstName: company.firstName }),
    description: t("gallery.description", { name: company.name }),
    // Images from https://pexels.com
    images: [
      {
        src: "/images/gallery/img (1).JPG",
        alt: "obaol supreme",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/img (2).JPG",
        alt: "obaol supreme",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img (3).JPG",
        alt: "obaol supreme",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img (8).JPG",
        alt: "obaol supreme",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/img (15).JPG",
        alt: "obaol supreme",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/img (4).JPG",
        alt: "obaol supreme",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img (5).JPG",
        alt: "obaol supreme",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img (6).JPG",
        alt: "obaol supreme",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img (13).JPG",
        alt: "obaol supreme",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/img (7).JPG",
        alt: "obaol supreme",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img (9).JPG",
        alt: "obaol supreme",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img (14).JPG",
        alt: "obaol supreme",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img (10).JPG",
        alt: "obaol supreme",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/img (11).JPG",
        alt: "obaol supreme",
        orientation: "vertical",
      },
    ],
  };
  return {
    company,
    social,
    newsletter,
    home,
    about,
    blog,
    work,
    gallery,
  };
};

export { createI18nContent };
