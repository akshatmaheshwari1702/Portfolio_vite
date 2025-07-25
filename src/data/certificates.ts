export interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  credentialId: string;
  image: string;
  skills: string[];
  link: string;
  description: string;
}

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "AI Tools Workshop",
    organization: "United Latino Students Association",
    date: "Feb 2025",
    credentialId: "28",
    image: "/assets/certificates/ai.png",
    skills: ["Generative AI", "Computer Ethics"],
    link: "https://certx.in/certificate/9318e7f9-0234-4ea4-9390-efad88624b8b227735",
    description:
      "Comprehensive training in AI tools and ethical considerations. Hands-on experience with cutting-edge AI technologies. Focus on responsible AI development and implementation",
  },
  {
    id: "2",
    title: "Career Essentials In Generative AI",
    organization: "Microsoft and LinkedIn",
    date: "Feb 2025",
    credentialId: "MS-GEN-AI-2025",
    image: "/assets/certificates/microsoft.png",
    skills: ["Generative AI", "AI Applications", "Industry Best Practices"],
    link: "https://www.linkedin.com/learning/certificates/7db784f3c327ce91e9eb3d6f84cff388ec4e12fda6e311506a6408600cd1528a",
    description:
      "Professional certification in generative AI applications. Industry-standard practices for AI implementation. Practical applications of generative AI in business contexts",
  },
  {
    id: "3",
    title: "React Hooks Crash Course",
    organization: "GreatStack",
    date: "Feb 2025",
    credentialId: "rhs-",
    image: "/assets/certificates/react.png",
    skills: [
      "CSS",
      "Tailwind CSS",
      "HTML",
      "JavaScript",
      "React.js",
      "TypeScript",
    ],
    link: "https://drive.google.com/file/d/1V-3SCPnPDlf01aGln2tQIIY-qxPTGi9J/view?usp=drive_link",
    description:
      "Advanced React hooks implementation and patterns. State management and component lifecycle mastery. Modern React development best practices",
  },
  {
    id: "4",
    title: "Responsive Web Design",
    organization: "freeCodeCamp",
    date: "Feb 2025",
    credentialId: "fc9",
    image: "/assets/certificates/react2.png",
    skills: ["Responsive Design", "CSS Grid", "Flexbox", "Mobile-First"],
    link: "https://www.freecodecamp.org/certification/fcc9af661c7-fd05-4bb8-bb00-bf761ac42753/responsive-web-design",
    description:
      "Comprehensive web design principles and practices. Mobile-first approach to responsive design. Advanced CSS techniques and modern layout systems",
  },
  {
    id: "5",
    title: "Fundamentals Of AI and Machine Learning",
    organization: "iNeuron",
    date: "Sep 2024",
    credentialId: "AIML-2024-IN",
    image: "/assets/certificates/aiml.png",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Neural Networks",
    ],
    link: "https://drive.google.com/file/d/16V19EldFv80hgg89-4cMeE6RToSVW49f/view?usp=drive_link",
    description:
      "Core concepts of artificial intelligence and machine learning. Practical implementation of ML algorithms. Real-world AI/ML project experience",
  },
  {
    id: "6",
    title: "Matlab Onramp",
    organization: "MATLAB Coding",
    date: "Aug 2024",
    credentialId: "MATLAB-2024",
    image: "/assets/certificates/matlab1.png",
    skills: [
      "MATLAB",
      "Data Analysis",
      "Visualization",
      "Scientific Computing",
    ],
    link: "https://drive.google.com/file/d/1V3mrrRxwEdCs8QbpmzHqOQGmQW0FnAzQ/view?usp=drive_link",
    description:
      "Comprehensive MATLAB programming fundamentals. Data analysis and visualization techniques. Scientific computing and algorithm implementation",
  },
  {
    id: "7",
    title: "Simulink Onramp",
    organization: "MathWorks",
    date: "Aug 2024",
    credentialId: "SIMULINK-2024",
    image: "/assets/certificates/matlab2.png",
    skills: ["Simulink", "System Modeling", "Simulation", "Control Systems"],
    link: "https://drive.google.com/file/d/1V1naGyCuS8hYMXr8pRywZoMR7gjuoMOp/view?usp=drive_link",
    description:
      "Advanced system modeling and simulation. Dynamic system analysis and design. Integration with MATLAB for comprehensive solutions",
  },
  {
    id: "8",
    title: "Solvit Hackathon",
    organization: "Solvit",
    date: "Mar 2024",
    credentialId: "SOLVIT-HACK-2024",
    image: "/assets/certificates/solvit.jpg",
    skills: [
      "Problem Solving",
      "Team Collaboration",
      "Innovation",
      "Project Management",
    ],
    link: "https://drive.google.com/file/d/16p0e8LtSnzqr60nBFyQQAF7dkwbLauD1/view?usp=drive_link",
    description:
      "Participated in Solvit Hackathon showcasing innovative problem-solving skills. Collaborated in team-based environment to develop creative solutions. Demonstrated project management and technical implementation capabilities",
  },
  {
    id: "9",
    title: "Python Essentials",
    organization: "VIT Bhopal",
    date: "Jan 2024",
    credentialId: "PYTHON-ESS-2024",
    image: "/assets/certificates/python.jpg",
    skills: [
      "Python Programming",
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming",
    ],
    link: "https://drive.google.com/file/d/16psgIUrzbJQxS0XbqtALmHQBpbtP8bcK/view?usp=drive_link",
    description:
      "Comprehensive Python programming fundamentals. Mastery of core Python concepts and best practices. Practical implementation of data structures and algorithms. Object-oriented programming principles and design patterns",
  },
];

// Helper functions for certificate operations
export const getCertificateById = (id: string): Certificate | undefined => {
  return certificates.find(cert => cert.id === id);
};

export const getCertificatesBySkill = (skill: string): Certificate[] => {
  return certificates.filter(cert => 
    cert.skills.some(s => s.toLowerCase().includes(skill.toLowerCase()))
  );
};

export const getCertificatesByOrganization = (organization: string): Certificate[] => {
  return certificates.filter(cert => 
    cert.organization.toLowerCase().includes(organization.toLowerCase())
  );
};

export const getRecentCertificates = (count: number = 3): Certificate[] => {
  return certificates
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getAllSkills = (): string[] => {
  const allSkills = certificates.flatMap(cert => cert.skills);
  return [...new Set(allSkills)].sort();
};
