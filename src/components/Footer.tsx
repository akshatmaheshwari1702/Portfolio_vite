import React from "react";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/akshatmaheshwari1702", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/akshat-maheshwari-32165b196/",
    label: "LinkedIn",
  },
  { icon: FaTwitter, href: "https://x.com/Akshat0217", label: "X" },
  // { icon: Mail, href: "maheshwariakshat482@gmail.com", label: "Email" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 transition-colors duration-300 bg-yellow-100 text-gray-800 dark:bg-black dark:text-gray-400">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors duration-300"
                aria-label={social.label}
                whileHover={{ scale: 1.2 }} // Scale effect on hover
                whileTap={{ scale: 0.9 }} // Slightly shrink on tap
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>

          {/* Footer Text */}
          <motion.p
            className="text-sm text-gray-600 dark:text-gray-400 text-center"
            initial={{ opacity: 0 }} // Initial opacity for animation
            animate={{ opacity: 1 }} // Animate to full opacity
            transition={{ duration: 0.5 }} // Duration of the animation
          >
            © {new Date().getFullYear()} Akshat Maheshwari. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
