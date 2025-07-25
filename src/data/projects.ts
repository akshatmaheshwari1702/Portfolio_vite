export interface Technology {
  name: string;
  percentage: number;
}

export interface Contributor {
  name: string;
  profilePic: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  detailedDescription: string;
  videoPreview: string;
  imagePreview: string;
  outerPreviewImage: string;
  technologies: Technology[];
  contributors: Contributor[];
  github: string;
  liveDemo: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Portfolio V3",
    description:
      "My current portfolio showcasing my latest projects and skills with a modern, responsive design and smooth animations.",
    detailedDescription: `A sophisticated portfolio website built with React and TypeScript, featuring:

• Modern UI with dark/light mode support
• Responsive design for all devices
• Smooth animations and transitions
• Project showcase with detailed case studies
• Interactive components and UI elements
• Performance optimized with code splitting
• SEO-friendly structure

This portfolio represents my current skills and expertise in modern web development.`,
    videoPreview: "",
    imagePreview: "/assets/projects/portfolio v-03/1.png",
    outerPreviewImage: "/assets/projects/portfolio v-03/1.png",
    technologies: [
      { name: "React", percentage: 90 },
      { name: "TypeScript", percentage: 85 },
      { name: "Tailwind CSS", percentage: 80 },
      { name: "Framer Motion", percentage: 75 },
    ],
    contributors: [{ name: "Akshat", profilePic: "/assets/ak.jpeg" }],
    github: "https://github.com/akshatmaheshwari1702/Portfolio_vite",
    liveDemo: "https://akshat17.vercel.app/",
  },
  {
    id: 2,
    name: "Crack It",
    description:
      "A beautiful weather application built with React that provides real-time weather data with stunning animations and intuitive UI.",
    detailedDescription: `A feature-rich weather application that offers:

• Real-time weather data from OpenWeather API
• Location-based weather information
• 5-day weather forecast
• Beautiful weather animations
• Responsive design for all devices
• Search functionality for any location
• Temperature unit conversion (Celsius/Fahrenheit)

This app demonstrates my ability to integrate external APIs and create engaging user experiences.`,
    videoPreview: "",
    imagePreview: "/assets/projects/weather/1.png",
    outerPreviewImage: "/assets/projects/weather/1.png",
    technologies: [
      { name: "React", percentage: 90 },
      { name: "JavaScript", percentage: 85 },
      { name: "CSS", percentage: 80 },
      { name: "API Integration", percentage: 85 },
      { name: "Animations", percentage: 75 },
    ],
    contributors: [{ name: "Akshat", profilePic: "/assets/ak.jpeg" }],
    github: "https://github.com/akshatmaheshwari1702/CrackIt",
    liveDemo: "crack-it-one.vercel.app",
  },
  {
    id: 3,
    name: "Billify",
    description:
      "An enhanced YouTube downloader with a modern web interface, combining Python backend with HTML, CSS, and JavaScript frontend.",
    detailedDescription: `A full-stack YouTube video downloader application featuring:

• Modern and responsive web interface
• Real-time download progress tracking
• Multiple format and quality options
• Drag-and-drop functionality
• User-friendly error messages
• Download history tracking
• Background processing for large files

This version provides an intuitive user experience while maintaining powerful download capabilities.`,
    videoPreview: "",
    imagePreview: "/assets/projects/you-tube-v-02/1.jpeg",
    outerPreviewImage: "/assets/projects/you-tube-v-02/1.jpeg",
    technologies: [
      { name: "React", percentage: 90 },
      { name: "JavaScript", percentage: 85 },
      { name: "CSS", percentage: 80 },
      { name: "API Integration", percentage: 85 },
      { name: "Animations", percentage: 75 },
    ],
    contributors: [{ name: "Akshat", profilePic: "/assets/ak.jpeg" }],
    github: "https://github.com/akshatmaheshwari1702/Billify",
    liveDemo: "billify-beta.vercel.app",
  },
  {
    id: 4,
    name: "YouTube Downloader1",
    description:
      "A Python-based YouTube video downloader with FFmpeg integration for high-quality video processing and format conversion.",
    detailedDescription: `A powerful YouTube video downloader built with Python, featuring:

• FFmpeg integration for video processing and format conversion
• Support for multiple video qualities and formats
• Command-line interface for easy usage
• Progress tracking during downloads
• Error handling and validation
• Support for playlists and channels

This tool demonstrates efficient video processing and handling of YouTube's API.`,
    videoPreview: "",
    imagePreview: "/assets/projects/You-tube-v01/1.png",
    outerPreviewImage: "/assets/projects/You-tube-v01/1.png",
    technologies: [
      { name: "Python", percentage: 90 },
      { name: "FFmpeg", percentage: 85 },
      { name: "YouTube-DL", percentage: 80 },
    ],
    contributors: [{ name: "Akshat", profilePic: "/assets/ak.jpeg" }],
    github: "https://github.com/akshatmaheshwari1702",
    liveDemo: "",
  },
  {
    id: 5,
    name: "Client Portfolio",
    description:
      "Showcasing the expertise and creativity of papiya, this portfolio highlights their skills, dedication.",
    detailedDescription: `A modern and responsive portfolio website built for a client, showcasing their professional journey and achievements. The site features:

• Responsive design that works seamlessly across all devices
• Smooth animations and transitions for enhanced user experience
• Dark mode support with elegant color schemes
• Interactive project showcase with detailed case studies
• Contact form with email integration
• Optimized performance and SEO-friendly structure

The portfolio effectively communicates the client's brand identity while maintaining a clean and professional aesthetic.`,
    videoPreview: "https://www.youtube.com/embed/9z46-46o3CE",
    imagePreview: "/assets/projects/client-portfolio/1.png",
    outerPreviewImage: "/assets/projects/client-portfolio/1.png",
    technologies: [
      { name: "JavaScript", percentage: 80 },
      { name: "React", percentage: 90 },
      { name: "CSS", percentage: 70 },
    ],
    contributors: [{ name: "Akshat", profilePic: "/assets/ak.jpeg" }],
    github: "https://github.com/Mausam5055/papiya",
    liveDemo: "https://papiya.vercel.app/",
  },
];
