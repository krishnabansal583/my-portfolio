import {
  FaCode,
  FaServer,
  FaMobile,
  FaDatabase,
  FaChartLine,
  FaShieldAlt,
  FaRobot,
  FaLayerGroup,
} from "react-icons/fa";

// Define colorMap with const assertion for type safety
const colorMap = {
  "from-purple-600/80": {
    gradient: "from-purple-600/80 to-purple-900/50",
    hex: "#9333EA",
  },
  "from-blue-600/80": {
    gradient: "from-blue-600/80 to-blue-900/50",
    hex: "#2563EB",
  },
  "from-green-600/80": {
    gradient: "from-green-600/80 to-green-900/50",
    hex: "#16A34A",
  },
  "from-yellow-600/80": {
    gradient: "from-yellow-600/80 to-yellow-900/50",
    hex: "#CA8A04",
  },
  "from-pink-600/80": {
    gradient: "from-pink-600/80 to-pink-900/50",
    hex: "#DB2777",
  },
  "from-red-600/80": {
    gradient: "from-red-600/80 to-red-900/50",
    hex: "#DC2626",
  },
  "from-indigo-600/80": {
    gradient: "from-indigo-600/80 to-indigo-900/50",
    hex: "#4F46E5",
  },
  "from-cyan-600/80": {
    gradient: "from-cyan-600/80 to-cyan-900/50",
    hex: "#06B6D4",
  },
} as const;

// Define Service type
export type Service = {
  id: number;
  title: string;
  description: string;
  iconName: keyof typeof iconMap;
  color: keyof typeof colorMap; // Restrict to valid color keys
};

// Define Project type
export type Project = {
  id: number;
  title: string;
  image: string;
  githubUrl: string;
  description: string;
  technologies: string;
  duration: string;
};

// Icon mapping
export const iconMap = {
  FaCode,
  FaServer,
  FaMobile,
  FaDatabase,
  FaChartLine,
  FaShieldAlt,
  FaRobot,
  FaLayerGroup,
};

// BaseInfo
export const BaseInfo = {
  name: "Krishna Bansal",
  position: "Full Stack Web Developer",
  description:
    "Code. Create. Deploy. Repeat. Building full-stack solutions that work as beautifully as they look - one commit at a time.",
  profilePic: "/images/profile.jpeg",
};

// About Info
export const aboutInfo = {
  title: "Crafting Web Application with Passion and Precision",
  description:
    "I’m a dedicated Software Developer with a passion for creating impactful and user-friendly digital solutions. I enjoy solving complex problems and turning ideas into reality through clean and efficient code. My goal is to craft seamless user experiences and continually grow as a developer. I believe in learning, adapting, and building with purpose.",
  client: "50+",
  experience: "1+",
  project: "6+",
  website: "10+",
};

// Services Data
export const servicesData: Service[] = [
  {
    id: 1,
    title: "Full Stack Development",
    description:
      "End-to-end web applications using MERN stack with 30% performance optimization",
    iconName: "FaLayerGroup",
    color: "from-purple-600/80",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Responsive UIs with React, Next.js and modern CSS frameworks",
    iconName: "FaCode",
    color: "from-blue-600/80",
  },
  {
    id: 3,
    title: "Backend Development",
    description:
      "Robust APIs and server logic with Node.js, Express and MongoDB",
    iconName: "FaServer",
    color: "from-green-600/80",
  },
  {
    id: 4,
    title: "Database Solutions",
    description:
      "Efficient MongoDB and MySQL database architecture and optimization",
    iconName: "FaDatabase",
    color: "from-yellow-600/80",
  },
  {
    id: 5,
    title: "Performance Optimization",
    description:
      "Applications with 30% faster load times through advanced optimization",
    iconName: "FaChartLine",
    color: "from-pink-600/80",
  },
  {
    id: 6,
    title: "Authentication Systems",
    description:
      "Secure JWT authentication for 4500+ users with role-based access",
    iconName: "FaShieldAlt",
    color: "from-red-600/80",
  },
  {
    id: 7,
    title: "AI Integration",
    description:
      "Machine learning algorithms improving diagnostic accuracy by 15%",
    iconName: "FaRobot",
    color: "from-indigo-600/80",
  },
  {
    id: 8,
    title: "Mobile Responsive Apps",
    description:
      "Cross-platform applications with Material UI and responsive design",
    iconName: "FaMobile",
    color: "from-cyan-600/80",
  },
];

// Project Data
export const projectData: Project[] = [
  {
    id: 1,
    title: "Bookstore",
    image: "/images/bookstore.webp",
    githubUrl: "https://github.com/krishnabansal583/BookStore.git",
    description:
      "Developed an interactive Bookstore application using the MERN stack, incorporating a user-friendly interface and personalized recommendations; the solution is now utilized by over 300 active users monthly. Established multi-layered authentication workflows that supported 4,500+ users in securely signing up, signing in, and accessing tailored order histories; equipped admin team with essential tools for managing book listings and user orders. Designed an intuitive admin interface to edit, delete, and approve user orders, ensuring efficient order management and enhancing the overall user experience.",
    technologies: "MERN Stack, APIs, Authentication, JavaScript",
    duration: "May 2024 - July 2024",
  },
  {
    id: 2,
    title: "Diagnobiz",
    image: "/images/diagobiz.webp",
    githubUrl:
      "https://github.com/krishnabansal583/Product-Calculator-frontend.git",
    description:
      "Developed a comprehensive diagnostic testing platform with separate user and admin interfaces, featuring detailed product listings, secure authentication, and responsive design. Implemented advanced admin functionalities including bulk product upload via CSV/Excel files, product management (edit/delete), user approval workflow, and invoice generation system. Created a WhatsApp sharing feature enabling users to easily distribute product details and images, along with an automated invoice notification system for improved customer communication.",
    technologies: "MERN Stack, PWA, Node.js, MongoDB, Responsive",
    duration: "January 2025 - March 2025",
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: "/images/portfolio.png",
    githubUrl: "https://github.com/krishnabansal583/my-portfolio.git",
    description:
      "Revamped personal portfolio website utilizing Next, Tailwind CSS, and TypeScript; integrated seamless navigation, resulting in a 40% increase in page views and a 20% increase in session duration.",
    technologies: "Next.js, Tailwind CSS, TypeScript, Framer Motion",
    duration: "June 2025 - July 2025",
  },
  {
    id: 4,
    title: "DocNow",
    image: "/images/docnow.png",
    githubUrl: "https://github.com/krishnabansal583/DocNow.git",
    description:
      "Developed a doctor appointment booking system using the MERN stack, enabling patients to register, view doctors by location or specialty, and manage bookings. Implemented secure authentication and role-based access for doctors and patients, with an admin panel for managing appointments and user data. Integrated responsive design and real-time notifications to enhance user experience.",
    technologies: "MERN Stack, Node.js, MongoDB, JavaScript, Responsive",
    duration: "September 2024 - November 2024",
  },
];

