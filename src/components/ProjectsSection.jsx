import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1 });

  const projects = [
    {
      id: 1,
      title: "Dern Support",
      description:
        "This is a site to introduce the services that Dern-Support company offers to businesses and individuals. who can send requests for repairs and track the status of their devices.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      image:
        "/Portfolio/assets/repair.png",
      liveUrl: "https://dern-support-nine.vercel.app/",
      githubUrl: "https://github.com/3omarfarok/Dern-Support",
      color: "marker-blue",
      category: "Full-Stack",
    },
    {
      id: 2,
      title: "Berimbolo Security",
      description:
        'A company offering security solutions for homes and businesses using modern technologies, part of the BTEC "Person" diploma project.',
      tech: ["React", "Tailwind", "Vite"],
      image:
        "/Portfolio/src/assets/security.png",
      liveUrl: "https://3omarfarok.github.io/Berimbolo_Security/",
      githubUrl: "https://github.com/3omarfarok/Berimbolo_Security",
      color: "marker-green",
      category: "Frontend",
    },
    {
      id: 3,
      title: "University Tournament",
      description:
        "A simple website for a fictional university where students register their data to participate in a university competition , There is also a dashboard for administrators only to control the contestants points.",
      tech: ["PHP", "SQL", "CSS3", "HTML5"],
      image:
        "/Portfolio/src/assets/uni.png",
      liveUrl: "#",
      githubUrl: "https://github.com/3omarfarok/University-tournament",
      color: "marker-yellow",
      category: "Full-Stack",
    },
  ];

  const handleProjectClick = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-paper-50 relative overflow-hidden"
    >
      {/* Notebook styling */}
      <div className="absolute left-6 top-0 bottom-0 flex flex-col justify-center space-y-16 z-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 shadow-inner"
          ></div>
        ))}
      </div>
      <div className="absolute left-20 top-0 bottom-0 w-0.5 bg-red-400 opacity-40 z-0"></div>

      {/* Decorative dashed lines */}
      <div
        className="absolute right-8 top-0 bottom-0 w-0.5 opacity-20 z-0"
        style={{
          background:
            "repeating-linear-gradient(to bottom, #666 0px, #666 10px, transparent 10px, transparent 20px)",
        }}
      ></div>

      {/* Diagonal dashed lines */}
      <div
        className="absolute top-32 left-1/4 w-32 h-0.5 opacity-10 z-0 transform rotate-45"
        style={{
          background:
            "repeating-linear-gradient(to right, #666 0px, #666 8px, transparent 8px, transparent 16px)",
        }}
      ></div>

      <div
        className="absolute bottom-32 right-1/4 w-24 h-0.5 opacity-10 z-0 transform -rotate-45"
        style={{
          background:
            "repeating-linear-gradient(to right, #666 0px, #666 6px, transparent 6px, transparent 12px)",
        }}
      ></div>

      <div
        ref={ref}
        className="max-w-6xl mx-auto px-4 lg:px-8 pl-24 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-marker text-pencil-600 mb-6 hand-underline">
            My Projects
          </h2>
          <p className="font-sketch text-lg lg:text-xl text-pencil-500 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            creating meaningful digital experiences 🎨
          </p>

          {/* Sketchy decoration */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-0.5 opacity-30"
                style={{
                  background:
                    "repeating-linear-gradient(to right, #666 0px, #666 4px, transparent 4px, transparent 8px)",
                }}
              ></div>
              <span className="text-2xl">💻</span>
              <div
                className="w-16 h-0.5 opacity-30"
                style={{
                  background:
                    "repeating-linear-gradient(to right, #666 0px, #666 4px, transparent 4px, transparent 8px)",
                }}
              ></div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-paper-100 p-4 lg:p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group relative"
              style={{
                border: "2px solid #666",
                borderRadius: "15px 5px 15px 5px",
              }}
              whileHover={{ scale: 1.02, rotate: Math.random() * 2 - 1 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Category badge */}
              <div
                className={`absolute -top-3 -right-3 bg-${project.color} px-3 py-1 text-xs font-sketch text-pencil-600 transform rotate-12 shadow-lg`}
                style={{
                  border: "2px solid #666",
                  borderRadius: "12px 4px 12px 4px",
                }}
              >
                {project.category}
              </div>

              {/* Project Image with overlay */}
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Sketchy overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Project number */}
                <div className="absolute top-2 left-2 w-8 h-8 bg-paper-50 rounded-full flex items-center justify-center font-marker text-pencil-600 text-sm border-2 border-pencil-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Color indicator */}
                <div
                  className={`absolute top-2 right-2 w-4 h-4 bg-${project.color} rounded-full border-2 border-white shadow-sm`}
                ></div>
              </div>

              {/* Project Title with underline */}
              <h3 className="font-hand text-lg lg:text-xl text-pencil-600 mb-3 group-hover:text-ink-blue transition-colors relative">
                {project.title}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-ink-blue group-hover:w-full transition-all duration-300"></div>
              </h3>

              {/* Project Description */}
              <p className="font-sketch text-pencil-500 text-xs lg:text-sm mb-4 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack with better styling */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 + techIndex * 0.05 }}
                    className="px-2 py-1 bg-marker-yellow/30 rounded font-sketch text-xs text-pencil-600 relative"
                    style={{
                      border: "1px solid #666",
                      borderRadius: "8px 2px 8px 2px",
                    }}
                  >
                    {tech}
                    {/* Small decorative dot */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-marker-pink rounded-full opacity-60"></div>
                  </motion.span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 text-xs font-sketch text-pencil-400 flex items-center">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>

              {/* Action Buttons with better hover effects */}
              <div className="flex gap-2 lg:gap-3">
                <motion.button
                  className="flex-1 py-2 px-3 lg:px-4 text-ink-blue font-sketch text-xs lg:text-sm rounded hover:bg-marker-blue hover:text-white transition-all duration-300 relative overflow-hidden"
                  style={{
                    border: "2px solid #1e40af",
                    borderRadius: "8px 2px 8px 2px",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProjectClick(project.liveUrl);
                  }}
                >
                  <span className="relative z-10">View Live 🚀</span>
                  <div className="absolute inset-0 bg-marker-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.button>
                <motion.button
                  className="flex-1 py-2 px-3 lg:px-4 text-pencil-600 font-sketch text-xs lg:text-sm rounded hover:bg-pencil-400 hover:text-white transition-all duration-300 relative overflow-hidden"
                  style={{
                    border: "2px solid #666",
                    borderRadius: "8px 2px 8px 2px",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProjectClick(project.githubUrl);
                  }}
                >
                  <span className="relative z-10">GitHub 📁</span>
                  <div className="absolute inset-0 bg-pencil-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.button>
              </div>

              {/* Sketchy decorations */}
              <div
                className="absolute -top-2 -left-2 w-6 h-6 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                style={{ border: "2px dashed #666" }}
              ></div>
              <div
                className="absolute -bottom-2 -right-2 w-4 h-4 transform rotate-45 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                style={{ border: "2px dashed #666" }}
              ></div>

              {/* Corner doodles */}
              <div className="absolute top-1 right-1 text-xs opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                ✨
              </div>
              <div className="absolute bottom-1 left-1 text-xs opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                💡
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action with enhanced design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div
            className="bg-gradient-to-br from-marker-yellow/20 to-marker-pink/20 p-6 lg:p-8 max-w-2xl mx-auto relative"
            style={{
              border: "2px solid #666",
              borderRadius: "15px 5px 15px 5px",
            }}
          >
            {/* Decorative elements */}
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-marker-blue rounded-full opacity-60"></div>
            <div className="absolute -bottom-3 -right-3 w-4 h-4 bg-marker-pink rounded-full opacity-60"></div>

            <h3 className="font-marker text-xl lg:text-2xl text-pencil-600 mb-4 flex items-center justify-center gap-2">
              Want to see more?
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👀
              </motion.span>
            </h3>
            <p className="font-sketch text-pencil-500 mb-6 text-sm lg:text-base leading-relaxed">
              These are just a few highlights from my portfolio. I have many
              more projects in my GitHub repository, including experimental work
              and contributions to open source projects.
            </p>

            {/* Dashed line decoration */}
            <div className="flex items-center justify-center mb-6">
              <div
                className="w-20 h-0.5 opacity-30"
                style={{
                  background:
                    "repeating-linear-gradient(to right, #666 0px, #666 4px, transparent 4px, transparent 8px)",
                }}
              ></div>
              <span className="mx-4 text-lg">⭐</span>
              <div
                className="w-20 h-0.5 opacity-30"
                style={{
                  background:
                    "repeating-linear-gradient(to right, #666 0px, #666 4px, transparent 4px, transparent 8px)",
                }}
              ></div>
            </div>

            <motion.button
              className="px-6 lg:px-8 py-3 bg-gradient-to-r from-ink-blue to-marker-purple text-white font-sketch rounded-lg hover:from-marker-purple hover:to-ink-blue transition-all duration-300 shadow-lg"
              style={{
                border: "2px solid #1e40af",
                borderRadius: "15px 5px 15px 5px",
              }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleProjectClick("https://github.com/3omarfarok")}
            >
              Visit My GitHub 📚
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-paper-50 p-4 lg:p-6 max-w-2xl w-full max-h-[80vh] overflow-auto relative"
            style={{
              border: "2px solid #666",
              borderRadius: "15px 5px 15px 5px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-marker-pink rounded-full flex items-center justify-center text-pencil-600 hover:bg-marker-red transition-colors z-10"
              style={{ border: "2px solid #666" }}
            >
              ✕
            </button>

            {/* Category badge */}
            <div
              className={`absolute -top-3 -left-3 bg-${selectedProject.color} px-4 py-2 font-sketch text-pencil-600 transform -rotate-3 shadow-lg`}
              style={{
                border: "2px solid #666",
                borderRadius: "15px 5px 15px 5px",
              }}
            >
              {selectedProject.category}
            </div>

            <div className="mt-4">
              <h3 className="font-marker text-xl lg:text-2xl text-pencil-600 mb-4">
                {selectedProject.title}
              </h3>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 lg:h-64 object-cover rounded-lg mb-4 shadow-lg"
              />

              <p className="font-sketch text-pencil-500 mb-6 leading-relaxed text-sm lg:text-base">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-marker-blue/20 rounded-full font-sketch text-sm text-pencil-600"
                    style={{
                      border: "1px solid #1e40af",
                      borderRadius: "15px 3px 15px 3px",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="flex-1 py-3 px-6 bg-gradient-to-r from-ink-blue to-marker-blue text-white font-sketch rounded-lg hover:from-marker-blue hover:to-ink-blue transition-all duration-300"
                  style={{
                    border: "2px solid #1e40af",
                    borderRadius: "15px 5px 15px 5px",
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleProjectClick(selectedProject.liveUrl)}
                >
                  View Live Project 🚀
                </motion.button>
                <motion.button
                  className="flex-1 py-3 px-6 text-pencil-600 font-sketch rounded-lg hover:bg-pencil-400 hover:text-white transition-all duration-300"
                  style={{
                    border: "2px solid #666",
                    borderRadius: "15px 5px 15px 5px",
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleProjectClick(selectedProject.githubUrl)}
                >
                  View Source Code 📁
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsSection;