import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Award,
  CheckCircle,
  Sparkle,
  CalendarDays,
  ChevronDown,
  X,
} from "lucide-react";
import { cn } from "../lib/utils";
import { Certificate, certificates } from "../data/certificates";

export const Certifications: React.FC = () => {
  const [expandedCert, setExpandedCert] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllMobile, setShowAllMobile] = useState(false);

  // Add effect to handle browser back button for modal
  useEffect(() => {
    if (isModalOpen) {
      // Push a new history entry when modal opens
      window.history.pushState({ modalOpen: true }, "", window.location.href);

      // Handle browser back button
      const handlePopState = (event: PopStateEvent) => {
        // Prevent default navigation
        event.preventDefault();
        // Close the modal when back button is pressed
        handleCloseModal();
      };

      window.addEventListener("popstate", handlePopState);
      return () => window.removeEventListener("popstate", handlePopState);
    }
  }, [isModalOpen]);

  const handleCardClick = (certId: string) => {
    setIsModalOpen(true);
    setExpandedCert(certId);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setExpandedCert(null);
  };

  const handleShowLess = () => {
    // First collapse the content
    setShowAllMobile(false);

    // Instantly scroll to the certifications section
    const certificationsSection = document.getElementById("certifications");
    if (certificationsSection) {
      certificationsSection.scrollIntoView({ behavior: "instant" });
    }
  };

  const selectedCert = certificates.find((cert) => cert.id === expandedCert);

  // Function to get displayed certificates based on screen size
  const getDisplayedCertificates = () => {
    if (window.innerWidth >= 768) {
      return certificates; // Show all on desktop
    }
    return showAllMobile ? certificates : certificates.slice(0, 3); // Limited on mobile unless expanded
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const contentVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const mobileExpandButtonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const MobileCertContent: React.FC<{ cert: Certificate }> = ({ cert }) => (
    <motion.div
      key={`content-${cert.id}`}
      variants={contentVariants}
      initial="collapsed"
      animate="expanded"
      exit="collapsed"
      className="py-20 bg-white dark:bg-[radial-gradient(circle_at_center,_#000000_0%,_#111827_100%)] relative overflow-hidden transition-colors duration-300"
    >
      {/* Description Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          "space-y-4 rounded-xl p-4",
          "bg-white/10 dark:bg-black/40",
          "backdrop-blur-md backdrop-saturate-150",
          "border border-white/20 dark:border-purple-900/50",
          "shadow-[0_8px_16px_-6px_rgba(0,0,0,0.1)]",
          "dark:shadow-[0_8px_16px_-6px_rgba(168,85,247,0.15)]"
        )}
      >
        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-blue-100/80 dark:bg-purple-950/60">
            <Sparkle className="w-4 h-4 text-blue-600 dark:text-purple-400" />
          </div>
          About this Certification
        </h4>
        <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {cert.description.split(". ").map(
            (line, i) =>
              line && (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 shrink-0" />
                  <span>{line.trim()}.</span>
                </motion.p>
              )
          )}
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className={cn(
          "space-y-3 rounded-xl p-4",
          "bg-white/10 dark:bg-black/40",
          "backdrop-blur-md backdrop-saturate-150",
          "border border-white/20 dark:border-purple-900/50",
          "shadow-[0_8px_16px_-6px_rgba(0,0,0,0.1)]",
          "dark:shadow-[0_8px_16px_-6px_rgba(168,85,247,0.15)]"
        )}
      >
        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-blue-100/80 dark:bg-purple-950/60">
            <CheckCircle className="w-4 h-4 text-blue-600 dark:text-purple-400" />
          </div>
          Skills Validated
        </h4>
        <div className="flex flex-wrap gap-2">
          {cert.skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium",
                "bg-gradient-to-r from-blue-500/10 to-purple-500/10",
                "dark:from-purple-900/40 dark:to-violet-900/40",
                "text-blue-700 dark:text-purple-300",
                "border border-blue-200/30 dark:border-purple-800/50",
                "backdrop-blur-sm",
                "flex items-center gap-1.5",
                "shadow-sm"
              )}
            >
              <span className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Credential Section */}
      {cert.credentialId && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={cn(
            "space-y-3 rounded-xl p-4",
            "bg-white/10 dark:bg-black/40",
            "backdrop-blur-md backdrop-saturate-150",
            "border border-white/20 dark:border-purple-900/50",
            "shadow-[0_8px_16px_-6px_rgba(0,0,0,0.1)]",
            "dark:shadow-[0_8px_16px_-6px_rgba(168,85,247,0.15)]"
          )}
        >
          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-blue-100/80 dark:bg-purple-950/60">
              <Award className="w-4 h-4 text-blue-600 dark:text-purple-400" />
            </div>
            Credential Details
          </h4>
          <div
            className={cn(
              "flex items-center gap-3 rounded-lg p-4",
              "bg-gradient-to-r from-white/40 to-white/30",
              "dark:from-black/60 dark:to-purple-950/50",
              "backdrop-blur-md backdrop-saturate-150",
              "border border-white/30 dark:border-purple-900/50"
            )}
          >
            <div className="flex-1">
              <p className="text-xs text-gray-500 dark:text-purple-300/70">
                Credential ID
              </p>
              <p className="font-mono text-sm text-gray-800 dark:text-purple-300 mt-0.5">
                {cert.credentialId}
              </p>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2 rounded-lg",
                "bg-gradient-to-r from-blue-500/20 to-purple-500/20",
                "dark:from-purple-900/40 dark:to-violet-900/40",
                "hover:from-blue-500/30 hover:to-purple-500/30",
                "dark:hover:from-purple-900/50 dark:hover:to-violet-900/50",
                "text-blue-600 dark:text-purple-400",
                "backdrop-blur-sm",
                "border border-blue-200/30 dark:border-purple-800/50",
                "shadow-sm"
              )}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.div>
  );

  return (
    <>
      <section
        id="certifications"
        className={cn(
          "py-20 relative overflow-hidden transition-colors duration-300",
          "bg-gradient-to-b from-white to-gray-50",
          "dark:from-gray-900 dark:to-gray-800"
        )}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center space-y-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
                <span className="inline-block mr-2"></span>
                Certifications
                <span className="inline-block ml-2"></span>
              </h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 dark:text-gray-400 font-medium hidden md:block"
              >
                Professional Development & Technical Expertise
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
              "transition-all duration-300 ease-in-out"
            )}
          >
            {getDisplayedCertificates().map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                onClick={() => handleCardClick(cert.id)}
                className={cn(
                  "relative group bg-purple-50 dark:bg-gray-900",
                  "rounded-xl overflow-hidden",
                  "shadow-2xl hover:shadow-3xl dark:hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)]",
                  "transform transition-all duration-300",
                  "border-2 border-transparent hover:border-blue-500/20 dark:border-gray-800 dark:hover:border-indigo-500/30",
                  "cursor-pointer"
                )}
              >
                <div className="p-6 relative z-10">
                  {/* Card Header */}
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-lg border-2 border-white/10 dark:border-gray-800"
                    >
                      <img
                        src={cert.image}
                        alt={cert.organization}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <motion.h3
                        whileHover={{ x: 5 }}
                        className="text-xl font-bold text-black dark:text-gray-100 mb-1 truncate"
                      >
                        {cert.title}
                      </motion.h3>
                      <motion.div
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.02 }}
                      >
                        <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                        <p className="text-gray-600 dark:text-gray-300 text-sm font-semibold bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full truncate">
                          {cert.organization}
                        </p>
                      </motion.div>
                      <motion.div className="flex items-center justify-between mt-1">
                        <motion.p
                          className="text-purple-600 dark:text-purple-300 text-sm font-medium flex items-center gap-1"
                          whileHover={{ scale: 1.05 }}
                        >
                          <CalendarDays className="w-4 h-4 shrink-0" />
                          <span>Issued: {cert.date}</span>
                        </motion.p>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Background Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -inset-24 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent animate-[translate-x-full_rotate-15_1.5s_infinite]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Button */}
          {certificates.length > 3 && (
            <motion.div
              variants={mobileExpandButtonVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mt-8 flex justify-center md:hidden"
            >
              <motion.button
                onClick={() =>
                  showAllMobile ? handleShowLess() : setShowAllMobile(true)
                }
                className={cn(
                  "group relative overflow-hidden",
                  "w-12 h-12 rounded-full",
                  "bg-gradient-to-r from-blue-500/20 to-purple-500/20",
                  "dark:from-purple-900/40 dark:to-violet-900/40",
                  "hover:from-blue-500/30 hover:to-purple-500/30",
                  "dark:hover:from-purple-900/50 dark:hover:to-violet-900/50",
                  "text-blue-600 dark:text-purple-400",
                  "backdrop-blur-sm",
                  "border border-blue-200/30 dark:border-purple-800/50",
                  "shadow-[0_8px_16px_-6px_rgba(0,0,0,0.1)]",
                  "dark:shadow-[0_8px_16px_-6px_rgba(168,85,247,0.15)]",
                  "transition-all duration-300",
                  "flex items-center justify-center"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: showAllMobile ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
                <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-purple-900/20 dark:to-violet-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal Portal for both Mobile and Desktop */}
      <AnimatePresence>
        {isModalOpen && selectedCert && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={handleCloseModal}
            />

            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={cn(
                "relative",
                "w-[90vw] max-w-3xl",
                "max-h-[85vh]",
                "bg-white dark:bg-gray-900",
                "rounded-2xl shadow-2xl",
                "overflow-hidden",
                "z-50"
              )}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-900 z-10 p-6 pb-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className="w-20 h-20 rounded-xl overflow-hidden shadow-lg border-2 border-gray-100 dark:border-gray-800"
                    >
                      <img
                        src={selectedCert.image}
                        alt={selectedCert.organization}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedCert.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 font-semibold">
                        {selectedCert.organization}
                      </p>
                      <p className="text-purple-600 dark:text-purple-300 text-sm flex items-center gap-1 mt-1">
                        <CalendarDays className="w-4 h-4" />
                        <span>Issued: {selectedCert.date}</span>
                      </p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleCloseModal}
                    className={cn(
                      "p-2 rounded-full",
                      "hover:bg-gray-100 dark:hover:bg-gray-800",
                      "transition-colors duration-200"
                    )}
                  >
                    <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                  </motion.button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto custom-scrollbar">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Description
                    </h3>
                    {selectedCert.description.split(". ").map(
                      (line, i) =>
                        line && (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <Sparkle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
                            <p className="text-gray-700 dark:text-gray-200">
                              {line.trim()}.
                            </p>
                          </motion.div>
                        )
                    )}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                      Technical Skills Validated
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill, i) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className={cn(
                            "px-3 py-1.5 rounded-lg text-sm font-semibold",
                            "bg-blue-100 dark:bg-blue-900/50",
                            "text-blue-700 dark:text-blue-300",
                            "border border-blue-200 dark:border-blue-800",
                            "transition-colors duration-200"
                          )}
                        >
                          # {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {selectedCert.credentialId && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                    >
                      <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Credential ID
                        </p>
                        <p className="font-mono text-sm text-gray-800 dark:text-blue-300">
                          {selectedCert.credentialId}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-white dark:bg-gray-900 p-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-full inline-flex items-center justify-center gap-2 px-6 py-3",
                    "bg-gradient-to-r from-blue-600 to-purple-600",
                    "text-white font-semibold rounded-xl",
                    "hover:from-blue-700 hover:to-purple-700",
                    "transition-all duration-300",
                    "shadow-lg hover:shadow-xl"
                  )}
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
