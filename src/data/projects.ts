export interface Technology {
  name: string;
  percentage: number;
}

export interface Contributor {
  name: string;
  profilePic: string;
}

export interface ProjectHighlights {
  performanceScore: number;
  achievements: string[];
  stats: {
    linesOfCode: number;
    components: number;
  };
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
  timeline: {
    startDate: string;
    lastUpdated: string;
  };
  highlights: ProjectHighlights;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Global IT MarketPlace",
    description:
      "A comprehensive platform connecting global IT service providers with clients.",
    detailedDescription: `The Global IT MarketPlace is dedicated to bridging the gap between IT service providers and clients worldwide. This platform offers:

• User-friendly interface for easy navigation
• Advanced search and filtering options
• Real-time project tracking and updates
• Rating and review system for service providers
• Responsive design for all devices
• Smooth animations and transitions
• Project showcase with detailed case studies
• Interactive components and UI elements
• Performance optimized with code splitting
• SEO-friendly structure

This portfolio represents my current skills and expertise in modern web development.`,
    videoPreview: "",
    imagePreview: "/assets/projects/GlobalItMarketPlace.png",
    outerPreviewImage: "/assets/projects/GlobalItMarketPlace.png",
    technologies: [
      { name: "React", percentage: 90 },
      { name: "TypeScript", percentage: 85 },
      { name: "Tailwind CSS", percentage: 80 },
      { name: "Framer Motion", percentage: 75 },
      { name: "Php/Laravel", percentage: 90 },
    ],
    contributors: [{ name: "Akshat", profilePic: "/assets/ak.jpeg" }],
    github: "https://github.com/akshatmaheshwari1702?tab=repositories",
    liveDemo: "https://www.globalitmarketplace.com/",
    timeline: {
      startDate: "15/09/2025", 
      lastUpdated: "25/10/2025",
    },
    highlights: {
      performanceScore: 92,
      achievements: [
        "Global service provider network",
        "Real-time project tracking",
        "Multi-language support",
        "Advanced search & filtering"
      ],
      stats: {
        linesOfCode: 2000,
        components: 40
      }
    },
  },
  {
    id: 2,
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
    imagePreview: "/assets/projects/PortfolioV3.png",
    outerPreviewImage: "/assets/projects/PortfolioV3.png",
    technologies: [
      { name: "React", percentage: 90 },
      { name: "TypeScript", percentage: 85 },
      { name: "Tailwind CSS", percentage: 80 },
      { name: "Framer Motion", percentage: 75 },
    ],
    contributors: [{ name: "Akshat", profilePic: "/assets/ak.jpeg" }],
    github: "https://github.com/akshatmaheshwari1702/Portfolio_vite",
    liveDemo: "https://akshat17.vercel.app/",
    timeline: {
      startDate: "10/05/2025",
      lastUpdated: "03/11/2025",
    },
    highlights: {
      performanceScore: 98,
      achievements: [
        "Dark/light mode support",
        "Responsive design optimized",
        "Smooth animations & transitions",
        "SEO-friendly structure"
      ],
      stats: {
        linesOfCode: 1500,
        components: 30
      }
    },
  },
  {
    id: 3,
    name: "Jewellery Store",
    description:
      "Created a jewellery e-commerce store with React, featuring real-time product updates and a seamless shopping experience.",
    detailedDescription: `A feature-rich jewellery e-commerce application that offers:

• Real-time product updates
• Location-based product recommendations
• Advanced search and filtering options
• Beautiful product animations
• Responsive design for all devices
• Search functionality for any location

This app demonstrates my ability to integrate external APIs and create engaging user experiences.`,
    videoPreview: "",
    imagePreview: "/assets/projects/JewelleryStore.png",
    outerPreviewImage: "/assets/projects/JewelleryStore.png",
    technologies: [
      { name: "React Js", percentage: 90 },
      { name: "JavaScript", percentage: 85 },
      { name: "Tailwind CSS", percentage: 80 },
      { name: "API Integration", percentage: 85 },
      { name: "Framer Motion", percentage: 75 },
    ],
    contributors: [{ name: "Akshat", profilePic: "/assets/ak.jpeg" }],
    github: "https://github.com/akshatmaheshwari1702",
    liveDemo: "https://pastel-gems-shop.vercel.app/",
    timeline: {
      startDate: "06/07/2025",
      lastUpdated: "25/07/2025",
    },
    highlights: {
      performanceScore: 90,
      achievements: [
        "Listed out the products with filters",
        "Firebase integration",
        "Custom search algorithms",
        "Interactive coding practice"
      ],
      stats: {
        linesOfCode: 950,
        components: 18
      }
    },
  },
  {
    id: 4,
    name: "Crack It",
    description:
      "Constructed a DSA question bank with frequency analysis using React, Firebase, and custom search algorithms.",
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
    imagePreview: "/assets/projects/Crackit.png",
    outerPreviewImage: "/assets/projects/Crackit.png",
    technologies: [
      { name: "React", percentage: 90 },
      { name: "JavaScript", percentage: 85 },
      { name: "CSS", percentage: 80 },
      { name: "API Integration", percentage: 85 },
      { name: "Animations", percentage: 75 },
    ],
    contributors: [{ name: "Akshat", profilePic: "/assets/ak.jpeg" }],
    github: "https://github.com/akshatmaheshwari1702/CrackIt",
    liveDemo: "https://crack-it-one.vercel.app/",
    timeline: {
      startDate: "06/07/2025",
      lastUpdated: "29/10/2025",
    },
    highlights: {
      performanceScore: 90,
      achievements: [
        "DSA question bank with frequency analysis",
        "Firebase integration",
        "Custom search algorithms",
        "Interactive coding practice"
      ],
      stats: {
        linesOfCode: 950,
        components: 18
      }
    },
  },
  {
    id: 5,
    name: "Billify",
    description:
      "A Billing Management System for creating invoices and tracking payments, which helps in reducing invoice generation time by 70%.",
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
    imagePreview: "/assets/projects/Billify.png",
    outerPreviewImage: "/assets/projects/Billify.png",
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
    timeline: {
      startDate: "", 
      lastUpdated: "", 
    },
    highlights: {
      performanceScore: 88,
      achievements: [
        "70% faster invoice generation",
        "Payment tracking system",
        "PDF generation & export",
        "Client management dashboard"
      ],
      stats: {
        linesOfCode: 1100,
        components: 22
      }
    },
  },
  {
    id: 6,
    name: "School Management",
    description:
      "An Application for Managing the day to day activites of a school, with a user friendly interface and support for different roles.",
    detailedDescription: `A powerful YouTube video downloader built with Python, featuring:

• FFmpeg integration for video processing and format conversion
• Support for multiple video qualities and formats
• Command-line interface for easy usage
• Progress tracking during downloads
• Error handling and validation
• Support for playlists and channels

This tool demonstrates efficient video processing and handling of YouTube's API.`,
    videoPreview: "",
    imagePreview: "/assets/projects/SchoolManagement.png",
    outerPreviewImage: "/assets/projects/SchoolManagement.png",
    technologies: [
      { name: "React", percentage: 90 },
      { name: "JavaScript", percentage: 85 },
      { name: "CSS", percentage: 80 },
      { name: "API Integration", percentage: 85 },
    ],
    contributors: [{ name: "Akshat", profilePic: "/assets/ak.jpeg" }],
    github: "https://github.com/akshatmaheshwari1702/School-Management",
    liveDemo: "https://school-management-pi-six.vercel.app/list/teachers",
    timeline: {
      startDate: "", // You can add the actual start date here
      lastUpdated: "", // You can add the last updated date here
    },
    highlights: {
      performanceScore: 85,
      achievements: [
        "Multi-role user management",
        "Student & teacher dashboards",
        "Grade tracking system",
        "Attendance management"
      ],
      stats: {
        linesOfCode: 1350,
        components: 28
      }
    },
  },
  {
    id: 7,
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
    // videoPreview: "https://www.youtube.com/embed/9z46-46o3CE",
    videoPreview: "",
    imagePreview: "/assets/projects/client-portfolio/1.png",
    outerPreviewImage: "/assets/projects/client-portfolio/1.png",
    technologies: [
      { name: "JavaScript", percentage: 80 },
      { name: "React", percentage: 90 },
      { name: "CSS", percentage: 70 },
    ],
    contributors: [{ name: "Akshat", profilePic: "/assets/ak.jpeg" }],
    // github: "https://github.com/Mausam5055/papiya",
    github: "",
    liveDemo: "https://papiya.vercel.app/",
    timeline: {
      startDate: "", // You can add the actual start date here
      lastUpdated: "", // You can add the last updated date here
    },
    highlights: {
      performanceScore: 94,
      achievements: [
        "Custom client branding",
        "Responsive portfolio design",
        "Interactive animations",
        "Professional showcase"
      ],
      stats: {
        linesOfCode: 750,
        components: 12
      }
    },
  },
];
