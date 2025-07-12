
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  flood1,
  flood2,
} from '../assets'


// Import company logos separately
import tekisky from "../assets/company/tekisky.png";


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
    title: "Web Developer",
    icon: web,
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
    title: "Tech Consultant",
    icon: creator,
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
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "Flutter",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
  },
  {
    name: "Dart",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg",
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
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
  },
  {
    name: "GSAP",
    icon: gsap,
  },
  {
    name: "Framer Motion",
    icon: framer,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Express.js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Material-UI",
    icon: mui,
  },
];

const experiences = [
  {
    title: "IT Head",
    company_name: "AH & HNB Digital Creations Pvt. Ltd.",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Oct 2024 - Present",
    points: [
      "Leading IT operations and digital transformation initiatives for the company.",
      "Managing development teams and overseeing project delivery.",
      "Implementing scalable solutions and ensuring technical excellence.",
      "Collaborating with stakeholders to align technology with business goals.",
    ],
  },
  {
    title: "IT Associate",
    company_name: "Kiser Computing Consulting",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Oct 2023 - Sep 2024",
    points: [
      "Provided technical consulting services to clients across various industries.",
      "Developed and maintained web applications using modern technologies.",
      "Assisted in project planning and technical architecture decisions.",
      "Supported clients in their digital transformation journey.",
    ],
  },
  {
    title: "Front-End Developer | Consultant",
    company_name: "Freelance",
    icon: tekisky,
    iconBg: "#383E56",
    date: "2021 - Present",
    points: [
      "Developed responsive web applications and mobile apps for diverse clients.",
      "Provided technical consultation and digital strategy recommendations.",
      "Built scalable solutions using React, React Native, and Flutter.",
      "Delivered high-quality products with focus on user experience.",
    ],
  },
];

const projects = [
  {
    name: "IoT-Based Flood Prediction System",
    description:
      "Developed a real-time flood prediction system that combines hardware sensors and a mobile application to detect and alert users about potential flood risks in advance. The project focuses on early warning through environmental monitoring and predictive algorithms. I was responsible for building the mobile application and coordinating the integration between hardware and software components.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "iot", color: "green-text-gradient" },
      { name: "sensors", color: "pink-text-gradient" },
      { name: "prediction", color: "blue-text-gradient" },
    ],
    image: flood1,
    source_code_link: "https://github.com/Aanwar04",
  },
  {
    name: "Online Ambulance Service",
    description:
      "Developed a mobile application that connects users with nearby ambulance services in real time, significantly improving emergency response efficiency and saving lives. The app streamlines the process of requesting emergency medical assistance and ensures rapid response through advanced location-based technology. Integrated Google Maps API for real-time location tracking and optimized routing, enabled push notifications, and implemented secure user authentication.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "google-maps", color: "green-text-gradient" },
      { name: "location-api", color: "pink-text-gradient" },
      { name: "push-notifications", color: "blue-text-gradient" },
    ],
    // No image for this project
    source_code_link: "https://github.com/Aanwar04",
  },
  {
    name: "Daily Doctor",
    description:
      "Developed a mobile application that allows users to consult with doctors online for everyday health issues and book appointments. The app provides a convenient way for users to get medical advice and schedule visits without leaving home. I worked on the mobile app development and user experience.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "healthcare", color: "green-text-gradient" },
      { name: "appointments", color: "pink-text-gradient" },
    ],
    // No image for this project
    source_code_link: "https://github.com/Aanwar04",
  },
  {
    name: "Online Air Ticket Reservation System",
    description:
      "Developed a comprehensive web-based system for booking and managing air tickets. The platform allows users to register, search for available flights, make reservations, and manage their bookings online. The system features secure user authentication, a user-friendly interface, and integration with payment gateways for seamless transactions.",
    tags: [
      { name: "web-development", color: "blue-text-gradient" },
      { name: "database", color: "white-text-gradient" },
      { name: "payment-gateway", color: "green-text-gradient" },
      { name: "full-stack", color: "green-text-gradient" },
    ],
    // No image for this project
    source_code_link: "https://github.com/Aanwar04",
  },
];

export { services, technologies, experiences, projects };
