import { Achievement, Experience, Project, Skill, Stat, Certification } from "../types";

export const projects: Project[] = [
  {
    title: "Food Order Taker",
    description:
      "Using PHP, JavaScript, Boostrap, Mysql you'll learn how to build this application - from start to finish. The App is called Order Taker and it is a simple Javascript app that allows users like to order food without manual effort",
    image: "/projectImage/Hotel-php.png",
    tags: [
      "PHP",
      "JavaScript",
      "Mysql",
      "Bootstrap",
    ],
    source:
      "https://github.com/sachinelavarasan/FoodOrderSystem-PHP",
    id: 0,
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
    title: "Github Finder",
    description:
      "You can search github users and see their github account overview.",
    image: "/projectImage/githubfinder.png",
    tags: [
      "React Native",
      "Node js",
      "Express js",
      "Github Api",
      "Expo",
    ],
    source:
      "https://github.com/sachinelavarasan/GitHubFinder",
    id: 3,
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
      "Cleak auth",
      "Prisma",
      "Mysql",
    ],
    source:
      "https://github.com/sachinelavarasan/course-platform",
    id: 4,
    type: "project",
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
  title: "Expensify",
  description:
    "A modern cross-platform expense tracking app built with Expo and React Native. Features secure authentication with Clerk, expense analytics with charts, and Excel export support. Runs on Android, iOS, and Web.",
   image: "/projectImage/expensify-app.png",
  tags: [
    "Expo",
    "React Native",
    "TypeScript",
    "Expo Router",
    "React Query",
    "Clerk",
    "XLSX",
  ],
  source:
    "https://github.com/sachinelavarasan/expensify",
  id: 6,
  type: "project",
  },
];

export const skills: Skill[] = [
  {
    image: "/skills/angular-icon.svg",
    id: 0,
    description:
      "Angular is a platform and framework for building single-page client applications using HTML and TypeScript.",
  },
  {
    image: "/skills/react-js-icon.svg",
    id: 1,
    description:
      "React is a JavaScript library for building fast and interactive user interfaces using reusable components.",
  },
  {
    image: "/skills/typescript-icon.svg",
    id: 2,
    description:
      "TypeScript is a strongly typed superset of JavaScript that improves code quality and developer productivity.",
  },
  {
    image: "/skills/node-icon.svg",
    id: 3,
    description:
      "Node.js is a JavaScript runtime used to build scalable server-side and backend applications.",
  },
  {
    image: "/skills/nestjs-icon.svg",
    id: 4,
    description:
      "NestJS is a scalable Node.js framework for building efficient and maintainable backend applications.",
  },
  {
    image: "/skills/redux-icon.svg",
    id: 5,
    description:
      "Redux Toolkit simplifies state management in React applications with predictable and centralized state.",
  },
  {
    image: "/skills/express-icon.svg",
    id: 6,
    description:
      "Express.js is a minimal and flexible Node.js framework for building web and API applications.",
  },
  {
    image: "/skills/html-icon.svg",
    id: 7,
    description:
      "HTML is the standard markup language used to create the structure of web pages.",
  },
  {
    image: "/skills/css-icon.svg",
    id: 8,
    description:
      "CSS is used to style and layout web pages, including colors, layouts, and responsiveness.",
  },
  {
    image: "/skills/knex-icon.svg",
    id: 9,
    description:
      "KnexJS is a SQL query builder for Node.js used to interact with relational databases efficiently.",
  },

  {
    image: "/skills/mysql-icon.svg",
    id: 10,
    description:
      "MySQL is a relational database used for storing and managing structured application data.",
  },
  {
    image: "/skills/mongodb-icon.svg",
    id: 11,
    description:
      "MongoDB is a NoSQL database used to store flexible, JSON-like documents.",
  },
  {
    image: "/skills/postgres-icon.svg",
    id: 12,
    description:
      "PostgreSQL is an advanced open-source relational database known for reliability and performance.",
  },
  {
    image: "/skills/nextjs-icon.svg",
    id: 13,
    description:
      "Next.js is a React framework for building fast web applications with SSR and static generation.",
  },
  {
    image: "/skills/tailwind-icon.svg",
    id: 14,
    description:
      "Tailwind CSS is a utility-first framework for rapidly building modern user interfaces.",
  },
  {
    image: "/skills/github-icon.svg",
    id: 15,
    description:
      "GitHub is a platform for hosting, sharing, and collaborating on software projects.",
  },
  {
    image: "/skills/react-native-icon.svg",
    id: 16,
    description:
      "React Native is used to build cross-platform mobile apps using JavaScript and React.",
  },
  {
    image: "/skills/expo-icon.svg",
    id: 17,
    description:
      "Expo simplifies React Native development with powerful tools and APIs.",
  },
  {
    image: "/skills/prisma-icon.svg",
    id: 18,
    description:
      "Prisma is a modern ORM that simplifies database access and improves type safety.",
  },
  {
    image: "/skills/drizzle-icon.svg",
    id: 19,
    description:
      "Drizzle ORM is a lightweight and type-safe ORM designed for TypeScript and SQL databases.",
  },
  {
    image: "/skills/vitest-icon.svg",
    id: 20,
    description:
      "Vitest is a fast unit testing framework designed for modern JavaScript and TypeScript projects.",
  },
  {
    image: "/skills/react-query-icon.svg",
    id: 21,
    description:
      "React Query simplifies server state management, caching, and synchronization in React apps.",
  },
  {
    image: "/skills/docker-icon.svg",
    id: 22,
    description:
      "Docker is a containerization platform that allows developers to package applications and their dependencies into portable containers for consistent deployment.",
  },

  {
    image: "/skills/flutter-icon.svg",
    id: 23,
    description:
      "Flutter is used to build cross-platform mobile applications using a single codebase.",
  },
  {
    image: "/skills/firebase-icon.svg",
    id: 24,
    description:
      "Firebase provides backend services like authentication, database, and hosting.",
  },
  {
    image: "/skills/php-icon.svg",
    id: 25,
    description:
      "PHP is a server-side scripting language used for web development.",
  },
];


export const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Bititude Technologies",
    location: "Calicut, India",
    period: "Aug 2024 - Present",
    description: [
      "Built scalable REST and GraphQL APIs using Node.js, Express, and NestJS",
      "Migrated production backend from Express.js to NestJS",
      "Implemented real-time communication using Socket.IO",
      "Optimised database queries and improved API performance",
      "Integrated external services for compliance and reporting workflows",
    ],
  },
  {
    title: "Software Engineer",
    company: "Bititude Technologies",
    location: "Calicut, India",
    period: "Mar 2021 - Jul 2024",
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
    period: "Dec 2020 - 2021",
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
    title: "Years of Excellence Award",
    meta: "Bititude · 2024",
    description:
      "Recognized for consistent outstanding performance, technical excellence, and valuable contribution to the organization.",
  },
  {
    id: 1,
    icon: "🥇",
    title: "Monthly Performer Award",
    meta: "Bititude · Dec 2024",
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
  {
    id: 3,
    icon: "🚀",
    title: "6+ Production Projects Delivered",
    description:
      "Successfully developed and deployed enterprise applications as part of the Bititude engineering team.",
  },
  {
    id: 4,
    icon: "💡",
    title: "7+ Personal Projects Built",
    description:
      "Designed and developed full-stack applications independently to strengthen expertise in modern web technologies.",
  },
  {
    id: 5,
    icon: "🛠️",
    title: "20+ Technologies Worked With",
    description:
      "Including Angular, React, TypeScript, Node.js, NestJS, Flutter, PostgreSQL, Docker, and modern frontend/backend tools.",
  },
  {
    id: 6,
    icon: "⏱️",
    title: "5+ Years of Professional Full Stack Development",
    description:
      "Delivered scalable frontend and backend applications using Angular, React, TypeScript, Node.js, and NestJS.",
  },
];

export const stats: Stat[] = [
  { id: 0, number: "5+",  label: "Years of Experience" },
  { id: 1, number: "6+",  label: "Production Projects" },
  { id: 2, number: "7+",  label: "Personal Projects" },
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
