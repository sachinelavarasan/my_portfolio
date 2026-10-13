import { Achievement, Experience, Project, SkillGroup, Stat, Certification } from "../types";

export const projects: Project[] = [
  {
    title: "Expensify – Full Stack Expense Tracker",
    description:
      "A full stack expense tracking product, live on Google Play. Mobile app built with Expo, React Native, and TypeScript, with budgets, recurring transactions, stats dashboard, Excel import/export, and push notifications. Backend API built with NestJS, PostgreSQL, and Drizzle ORM, featuring JWT auth with OTP verification, cron jobs, rate limiting, and Swagger docs, deployed on Vercel.",
    image: "/projectImage/expensify-app.png",
    tags: [
      "Expo",
      "React Native",
      "TypeScript",
      "React Query",
      "NestJS",
      "PostgreSQL",
      "Drizzle ORM",
    ],
    source:
      "https://github.com/sachinelavarasan/expensify",
    apiSource: "https://github.com/sachinelavarasan/expensify-api",
    playStore:
      "https://play.google.com/store/apps/details?id=com.sachinelavarasan.expensify",
    badge: "Live on Google Play",
    featured: true,
    summary:
      "A full stack expense tracker live on Google Play: an Expo + React Native app backed by a NestJS, PostgreSQL and Drizzle API.",
    id: 7,
    type: "project",
    demo: "https://drive.google.com/file/d/1Tj7eqEl7zg9TbyZuOpYgxO-ytLxkjF_y/view?usp=sharing"
  },
  {
    title: "LendsLog",
    description:
      "A cross-platform app to track money lent and borrowed, built with Expo and React Native. Features real-time updates, reminders, and organized transaction management. Runs on Android",
    image: "/projectImage/lendslog-app.png",
    tags: [
      "Expo",
      "React Native",
      "TypeScript",
      "Expo Router",
      "Redux Toolkit",
      "Firebase",
      "React Hook Form"
    ],
    source: "https://github.com/sachinelavarasan/lendslog",
    id: 6,
    type: "project",
    demo: "https://drive.google.com/file/d/1LSHHHV57Cze7nOQE6MQDZS6_RmB-5UFc/view?usp=sharing"
  },
  {
    title: "Shopping Cart",
    description:
      "This flutter application uses Google and email addresses for Firebase authentication. It can serve as a basic authentication template.",
    image: "/projectImage/shopping-cart.png",
    tags: [
      "Flutter",
      "Getx",
      "Get Storage",
      "Firebase",
    ],
    source:
      "https://github.com/sachinelavarasan/flutter_firebaseauth",
    id: 5,
    type: "project",
  },
  {
    title: "Learn Tech",
    description:
      "Individuals can become teachers and learn from others by sharing their knowledge with less investment",
    image: "/projectImage/course-platform.png",
    tags: [
      "Next Js",
      "Tailwind css",
      "Prisma",
      "Mysql",
    ],
    source:
      "https://github.com/sachinelavarasan/course-platform",
    id: 3,
    type: "project",
    live: "https://course-platform-xi-red.vercel.app",
  },
  {
    title: "Food Order App",
    description:
      "Food app built by React Native,Sanity Cms as backend.It Used to food order with expo Geolocation",
    image:
      "/projectImage/food-order-app.png",
    tags: [
      "React Native",
      "Sanity Io",
      "Tailwind css",
      "Redux",
    ],
    source:
      "https://github.com/sachinelavarasan/ReactNative-SanityIo",
    id: 2,
    type: "project",
  },
  {
    title: "Table Booking Using MERN App",
    description:
      "Using React, Node.js, Express & Mysql  used to create this Full Stack MERN Application. This app is simple table reservation app that allows users to reserve table for events and post comments about food and suggestions",
    image: "/projectImage/table-booking.png",
    tags: [
      "React",
      "Redux toolkit",
      "Express",
      "Mysql",
      "Node",
      "Bookshelf js",
    ],
    source:
      "https://github.com/sachinelavarasan/RestaurantTableBooking-REACT-NODE",

    id: 1,
    type: "project",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    skills: [
      { name: "Node.js", image: "/skills/node-icon.svg" },
      { name: "NestJS", image: "/skills/nestjs-icon.svg" },
      { name: "Express", image: "/skills/express-icon.svg", invert: true },
      { name: "TypeScript", image: "/skills/typescript-icon.svg" },
      { name: "Socket.IO", image: "/skills/socketio-icon.svg" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", image: "/skills/postgres-icon.svg" },
      { name: "MySQL", image: "/skills/mysql-icon.svg" },
      { name: "MongoDB", image: "/skills/mongodb-icon.svg" },
      { name: "Drizzle ORM", image: "/skills/drizzle-icon.svg" },
      { name: "Prisma", image: "/skills/prisma-icon.svg" },
      { name: "Knex", image: "/skills/knex-icon.svg" },
    ],
  },
  {
    category: "Frontend & Mobile",
    skills: [
      { name: "React", image: "/skills/react-js-icon.svg" },
      { name: "Redux Toolkit", image: "/skills/redux-icon.svg" },
      { name: "React Query", image: "/skills/react-query-icon.svg" },
      { name: "Next.js", image: "/skills/nextjs-icon.svg", invert: true },
      { name: "Angular", image: "/skills/angular-icon.svg" },
      { name: "Tailwind CSS", image: "/skills/tailwind-icon.svg" },
      { name: "React Native", image: "/skills/react-native-icon.svg" },
      { name: "Expo", image: "/skills/expo-icon.svg" },
    ],
  },
  {
    category: "DevOps & Tooling",
    skills: [
      { name: "Docker", image: "/skills/docker-icon.svg" },
      { name: "Vitest", image: "/skills/vitest-icon.svg" },
      { name: "Firebase", image: "/skills/firebase-icon.svg" },
      { name: "GitHub", image: "/skills/github-icon.svg", invert: true },
    ],
  },
];


export const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Bititude Technologies",
    location: "Calicut, India",
    period: "Aug 2024 - Present",
    description: [
      "Built scalable REST APIs with Node.js and NestJS for enterprise web and mobile platforms",
      "Led migration of the production backend from Express.js to NestJS",
      "Moved the codebase to a monorepo with a Docker-based setup",
      "Migrated the test suite to Vitest",
      "Optimised database queries and added API rate limiting, reducing API response times by 40%",
      "Built real-time chat, QR interactions, and live status updates with Socket.IO",
      "Integrated REF App (HRA) and PageUp to automate passport, visa, and compliance checks",
    ],
  },
  {
    title: "Software Engineer",
    company: "Bititude Technologies",
    location: "Calicut, India",
    period: "Mar 2021 - Aug 2024",
    description: [
      "Designed and implemented REST APIs using Node.js and Express",
      "Developed backend services for enterprise applications",
      "Built user management and reporting modules",
    ],
  },
  {
    title: "Junior PHP Developer",
    company: "Gnanaguru Technologies",
    location: "Coimbatore, India",
    period: "Dec 2020 - Feb 2021",
    description: [
      "Developed vehicle insurance renewal application",
      "Worked with PHP, JavaScript, AJAX, and MySQL",
      "Implemented form processing and validation",
    ],
  },
];


export const achievements: Achievement[] = [
  {
    id: 0,
    icon: "🏆",
    title: "Year of Excellence Award",
    meta: "Bititude · 2024",
    description:
      "Recognized for consistent outstanding performance, technical excellence, and valuable contribution to the organization.",
  },
  {
    id: 1,
    icon: "🥇",
    title: "Monthly Performer Award",
    meta: "Bititude · January 2025",
    description:
      "Awarded for exceptional performance, productivity, and successful delivery of key project milestones.",
  },
  {
    id: 2,
    icon: "🎯",
    title: "Perfect Attendance Award",
    meta: "Bititude · 2024",
    description:
      "Recognized for maintaining perfect attendance and demonstrating strong professional commitment and reliability.",
  },
];

export const stats: Stat[] = [
  { id: 0, number: "5+", label: "Years of Experience" },
  { id: 1, number: "6+", label: "Production Projects" },
  { id: 2, number: "7+", label: "Personal Projects" },
  { id: 3, number: "20+", label: "Technologies" },
];

export const certifications: Certification[] = [
  {
    id: 0,
    title: "Socket.IO",
    issuer: "Udemy",
    date: "09/2022",
    link: "https://www.udemy.com/certificate/UC-39c4fbb2-f3e8-4c6b-92be-fd930a51ef81/",
  },
  {
    id: 1,
    title: "Python For Everybody",
    issuer: "Coursera",
    date: "06/2020",
    description: "The specialization certificate of Python",
    link: "https://www.coursera.org/account/accomplishments/specialization/VNUVSBCUSUL5",
  },
  {
    id: 2,
    title: "GoLang",
    issuer: "KodeKloud",
    date: "01/2026",
    description: "Beginner level certification covering Go fundamentals and core concepts.",
    link: "https://learn.kodekloud.com/certificate/031ca0b5-2fae-4de6-917d-c75b462fc170",
  },
  {
    id: 3,
    title: "Docker Training Course for the Absolute Beginner",
    issuer: "KodeKloud",
    date: "02/2026",
    description: "Beginner level certification with hands-on labs covering Docker fundamentals, containers, images, and deployment.",
    link: "https://learn.kodekloud.com/certificate/d12dca5b-859d-4610-a4a7-353066210282",
  },
];
