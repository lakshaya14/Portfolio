import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Lakshaya",
  lastName: "K",
  name: "Lakshaya K",
  role: "Software Developer",
  email: "lakshayakarun11@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Tamil"],
  avatar: "/images/lakshaya.jpg",
};

/* ===================== NEWSLETTER ===================== */

const newsletter: Newsletter = {
  display: true,
  title: `Subscribe to ${person.firstName}'s Newsletter`,
  description: "Weekly insights on software development and problem solving",
};

/* ===================== SOCIAL ===================== */

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/lakshaya14",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/lakshaya-k-5a534b2a4/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

/* ===================== HOME ===================== */

const home = {
  title: "Home",
  description: "Lakshaya K Portfolio",
  path: "/",

  hero: {
    topText: "HELLO, I'M",
    headline: "Lakshaya K",
    role: "Software Engineer",
    tagline: "Building clean, responsive, and high-performance web experiences",
  },
  featured: {
    display: true,
    title: "Open to Work 🚀",
    href: "/contact",
  },
  
  cta: {
    primary: {
      label: "Get In Touch",
      href: "#contact",
    },
    secondary: {
      label: "Download CV",
      href: "/resume/Lakshaya_Resume.pdf",
    },
  },
};


/* ===================== ABOUT ===================== */

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a ${person.role} from Tamil Nadu, India`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description:
      "I am a passionate software developer with a strong foundation in problem solving, data structures, and full-stack development.",
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Zedindex",
        timeframe: "June 2025 - July 2025",
        role: "Software Developer Intern",
        achievements: [
          "Developed the development of a real-time chat application using Next.js and Tailwind CSS, enhancing UI responsiveness and user engagement",
          "Collaborated with cross-functional teams to design and implement core chat functionalities such as user authentication, one-to-one messaging, and message history",
          "Ensured UI/UX consistency by delivering a modern, intuitive, and user-friendly messaging interface across devices",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Bachelor of Computer Science Engineering",
        description: "Mount Zion College of Engineering and Technology, Tamil Nadu, India",
        timeframe: "2022 - 2026",
        CGPA: "8.19",
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Programming Languages",
        description: "Java, Python, JavaScript",
        tags: [
          { name: "Java", icon: "java" },
          { name: "Python", icon: "python" },
          { name: "JavaScript", icon: "javascript" },
        ],
        images: [],
      },
      {
        title: "Frontend",
        description: "HTML, CSS, React, Next.js, Tailwind CSS",
        tags: [
          { name: "HTML", icon: "html5" },
          { name: "CSS", icon: "css3" },
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "JavaScript", icon: "javascript" },
        ],
        images: [],
      },
      {
        title: "Backend & Tools",
        description: "Firebase, Supabase, REST APIs, GitHub, Figma",
        tags: [
          { name: "Firebase", icon: "firebase" },
          { name: "Supabase", icon: "supabase" },
          { name: "REST APIs", icon: "api" },
          { name: "Git", icon: "git" },
          { name: "GitHub", icon: "github" },
        ],
        images: [],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Development projects built by ${person.name}`,
};

export { person, social, newsletter, home, about, work };
