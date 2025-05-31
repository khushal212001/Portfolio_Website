import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  thinknext,
  starbucks,
  tesla,
  shopify,
  food,
  tripguide,
  temple,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,//change to full stack
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: backend, // change to frontend
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "ThinkNext Technologies",
    icon: thinknext,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
              "Migrated the entire Aakash vertical to Tutor-Tech horizontal, reducing AWS costs by 70%.",
              "Integrated Slack Webhooks across the system, quickly solving errors and reducing L2 Support dependency.",
              "Developed a Duplicate Slide Feature, cutting the time required for duplication from ~4000 man-hours per year to ~30 man-hours.",
              "Developed a batch migration utility for TutorPlus, decreasing weekly user issues by 32%.",
              "Trained and mentored a team of interns and new hires, providing guidance on technical skills and best practices, leading to improved team productivity and smoother onboarding processes."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "ThinkNext Technologies",
    icon: thinknext,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
              "Developed a gym management system using HTML, CSS, JavaScript, and PHP to streamline operations, member management, and fitness tracking.",
              "Implemented features such as online class scheduling, payment processing, and personalized workout plans, enhancing user experience and operational efficiency.",
              "Collaborated with designers and backend developers to integrate RESTful APIs, ensuring cohesive functionality across web applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Temple Management",
    description:
      "Improved functionalities, addressing user feedback and optimizing user experience. Designed intuitive interfaces and collaborated on integration, security, and payment systems. Enhanced appointment management, live streaming, and comprehensive event scheduling.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "white-text-gradient",
      },
    ],
    image: temple,
    source_code_link: "https://github.com/khushal212001/SE-Temple-Management",
  },
  {
    name: "BiteSquad",
    description:
      "Allows users to explore, select and order a variety of cuisines from the comfort of their homes or workplaces. Administrators can manage food items and perform user management tasks for efficient platform administration. Integrated stripe payment gateways.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "white-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/khushal212001/Food-App-frontend",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "white-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
