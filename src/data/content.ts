import { NewsArticle, SocialLinkData, NavItem } from "@/types";

export const siteConfig = {
  name: "Vivian Clarissah Chinoda",
  tagline: "Building digital products, brands, and experience.",
  role: "Frontend Developer and Visual Designer",
  description:
    "A Frontend Developer and Visual Designer with experience in web design, brand identity and product design.",
  linkedin: "https://www.linkedin.com/in/vivianclarissahchinoda/",
  email: "hello@vivianchinoda.com",
};

export const navigation: NavItem[] = [
  { label: "News", href: "/#news", index: "01" },
  { label: "About", href: "/about", index: "02" },
  { label: "Contact", href: "/#contact", index: "03" },
];

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title:
      "Featured by Council for the Arts at MIT for the Laya and Jerome B. Wiesner Student Art Awards 2025",
    link: "https://arts.mit.edu/wiesner-student-art-awards-2025/",
    image: "/images/news/camit.png",
  },
  {
    id: 2,
    title:
      "Featured for co-founding the MIT African Students Association Impact Fund",
    link: "https://news.mit.edu/2025/mit-students-turn-vision-reality-0519",
    image: "/images/news/asa-header-logo.png",
  },
  {
    id: 3,
    title:
      "Featured for my social impact internship with the MIT PKG Center for Social Impact",
    link: "https://pkgcenter.mit.edu/2024/03/19/social-impact-internships-vivian-chinoda-25/",
    image: "/images/news/pkg.png",
  },
  {
    id: 4,
    title:
      "Some of the work I have done as a Red Hat Product Management Intern",
    link: "https://developers.redhat.com/author/vivian-chinoda",
    image: "/images/news/red-hat.png",
  },
  {
    id: 5,
    title: "Dignifying Menstruation in Nepal: A Bathroom Pilot",
    link: "https://d-lab.mit.edu/academics/student-projects-presentations/dignifying-menstruation-nepal-bathroom-pilot",
    image: "/images/news/period-poverty.webp",
  },
];

export const socialLinks: SocialLinkData[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vivianclarissahchinoda/",
    icon: "/images/social/linkedin-icon.svg",
  },
  {
    label: "Twitter",
    href: "#",
    icon: "/images/social/twitter-icon.svg",
  },
];
