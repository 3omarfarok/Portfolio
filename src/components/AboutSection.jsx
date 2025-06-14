import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  const skills = [
    { name: "JavaScript", level: 90, icon: "⚡" },
    { name: "React.js", level: 85, icon: "⚛️" },
    { name: "Node.js", level: 80, icon: "🚀" },
    { name: "MongoDB", level: 75, icon: "🍃" },
    { name: "CSS/Tailwind", level: 88, icon: "🎨" },
    { name: "Python", level: 60, icon: "🐍" },
  ];

  const experiences = [
    {
      title: "Freelance Developer",
      company: "Self-employed",
      period: "2024 - Present",
      description: "Building modern web applications for clients worldwide",
      icon: "💼",
    },
    {
      title: "Frontend Developer",
      company: "Personal & Team Projects",
      period: "2023 - Present",
      description:
        "Created responsive user interfaces and improved user experience",
      icon: "🎯",
    },
    {
      title: "Lerner Developer",
      company: "We School",
      period: "2022 - 2024",
      description:
        "Started my journey in We School For applied technology and learning best",
      icon: "🌱",
    },
  ];

  const interests = [
    { name: "Coffee Brewing", icon: "☕", desc: "Perfect cup = Perfect code" },
    { name: "UI/UX Design", icon: "🎨", desc: "Beauty meets functionality" },
    { name: "Podcasts", icon: "🎧", desc: " learning new things" },
  ];

  return (
    <section
      id="about"
      className="py-12 md:py-16 lg:py-20 bg-paper-100 relative overflow-hidden"
    >
      {/* Notebook styling */}
      <div className="absolute left-3 md:left-6 top-0 bottom-0 flex flex-col justify-center space-y-8 md:space-y-12 lg:space-y-16 z-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white border-2 border-gray-300 shadow-inner"
          ></div>
        ))}
      </div>
      <div className="absolute left-12 md:left-20 top-0 bottom-0 w-0.5 bg-red-400 opacity-40 z-0"></div>

      {/* Dashed decorative lines */}
      <div
        className="absolute right-4 md:right-8 top-0 bottom-0 w-0.5 opacity-20 z-0"
        style={{
          background:
            "repeating-linear-gradient(to bottom, #666 0px, #666 8px, transparent 8px, transparent 16px)",
        }}
      ></div>

      <div
        ref={ref}
        className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pl-16 md:pl-20 lg:pl-24 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-marker text-pencil-600 mb-4 hand-underline">
            About Me
          </h2>
          <p className="font-sketch text-base md:text-lg text-pencil-500 max-w-2xl mx-auto">
            A passionate developer who loves turning ideas into reality through
            code ✨
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Story & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-4 md:space-y-6"
          >
            {/* Main Story */}
            <div
              className="bg-paper-50 p-4 md:p-6 relative transform -rotate-1"
              style={{
                border: "2px solid #666",
                borderRadius: "15px 5px 15px 5px",
              }}
            >
              <h3 className="font-hand text-lg md:text-xl text-pencil-600 mb-3 md:mb-4 flex items-center">
                My Journey 🛤️
                <motion.span
                  className="ml-2 text-base md:text-lg"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.span>
              </h3>
              <p className="font-sketch text-pencil-500 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
                I started coding because of my school, and it almost turned into a passion. What started as simple HTML pages has evolved into building apps and a few other things :) 
              </p>
              <p className="font-sketch text-pencil-500 leading-relaxed text-sm md:text-base">
                I believe in writing clean, maintainable code and creating user
                experiences that make people's lives easier. Every project is an
                opportunity to learn something new and push the boundaries of
                what's possible.
              </p>

              {/* Decorative doodle */}
              <div className="absolute -right-2 -top-2 text-xl md:text-2xl transform rotate-12">
                💡
              </div>
            </div>

            {/* Philosophy */}
            <div
              className="bg-marker-blue/10 p-4 md:p-6 transform rotate-1"
              style={{
                border: "2px solid #666",
                borderRadius: "15px 5px 15px 5px",
              }}
            >
              <h4 className="font-marker text-base md:text-lg text-pencil-600 mb-3 md:mb-4 flex items-center">
                My Philosophy 🎯
              </h4>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-start gap-2 md:gap-3">
                  <span className="text-base md:text-lg">🔍</span>
                  <p className="font-sketch text-pencil-500 text-sm md:text-base">
                    <strong>Always Learning:</strong> Technology evolves fast,
                    and so do I
                  </p>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <span className="text-base md:text-lg">🤝</span>
                  <p className="font-sketch text-pencil-500 text-sm md:text-base">
                    <strong>Collaboration:</strong> Best solutions come from
                    working together
                  </p>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <span className="text-base md:text-lg">💎</span>
                  <p className="font-sketch text-pencil-500 text-sm md:text-base">
                    <strong>Quality First:</strong> Clean code today saves time
                    tomorrow
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 md:space-y-6"
          >
            <div
              className="bg-marker-yellow/20 p-4 md:p-6"
              style={{
                border: "2px solid #666",
                borderRadius: "15px 5px 15px 5px",
              }}
            >
              <h4 className="font-marker text-base md:text-lg text-pencil-600 mb-3 md:mb-4">
                Quick Facts
              </h4>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="text-base md:text-lg">📍</span>
                  <span className="font-sketch text-pencil-500 text-sm md:text-base">
                    Based in Egypt
                  </span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="text-base md:text-lg">🎓</span>
                  <span className="font-sketch text-pencil-500 text-sm md:text-base">
                    Self-taught Developer
                  </span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="text-base md:text-lg">💼</span>
                  <span className="font-sketch text-pencil-500 text-sm md:text-base">
                    3+ Years Experience
                  </span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="text-base md:text-lg">🌐</span>
                  <span className="font-sketch text-pencil-500 text-sm md:text-base">
                    Remote Work Enthusiast
                  </span>
                </div>
              </div>
            </div>

            {/* Current Status */}
            <div
              className="bg-marker-green/20 p-4 md:p-6 relative"
              style={{
                border: "2px solid #666",
                borderRadius: "15px 5px 15px 5px",
              }}
            >
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <motion.div
                  className="w-3 h-3 bg-marker-green rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
                <h4 className="font-marker text-base md:text-lg text-pencil-600">
                  Currently
                </h4>
              </div>
              <p className="font-sketch text-pencil-500 text-sm md:text-base leading-relaxed">
                Available for freelance projects and open to exciting
                opportunities!
              </p>

              <div
                className="absolute -right-2 md:-right-3 -top-2 md:-top-3 bg-marker-pink px-2 py-1 transform rotate-12 font-hand text-xs md:text-sm text-pencil-600"
                style={{
                  border: "1px solid #666",
                  borderRadius: "8px 2px 8px 2px",
                }}
              >
                Hire me! 🚀
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h3 className="font-hand text-xl md:text-2xl text-pencil-600 mb-6 md:mb-8 text-center">
            Technical Skills 🛠️
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="bg-paper-50 p-3 md:p-4 relative"
                style={{
                  border: "2px solid #666",
                  borderRadius: "12px 4px 12px 4px",
                }}
              >
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base md:text-lg">{skill.icon}</span>
                    <span className="font-sketch text-pencil-600 font-medium text-sm md:text-base">
                      {skill.name}
                    </span>
                  </div>
                  <span className="font-hand text-pencil-400 text-xs md:text-sm">
                    {skill.level}%
                  </span>
                </div>

                <div
                  className="h-2 bg-paper-200 rounded-full overflow-hidden"
                  style={{ border: "1px solid #999" }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-marker-blue to-marker-purple rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <h3 className="font-hand text-xl md:text-2xl text-pencil-600 mb-6 md:mb-8 text-center">
            Experience Journey 📈
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 opacity-30"
              style={{
                background:
                  "repeating-linear-gradient(to bottom, #666 0px, #666 8px, transparent 8px, transparent 16px)",
              }}
            ></div>

            <div className="space-y-6 md:space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                  className="relative flex items-start gap-4 md:gap-6"
                >
                  {/* Timeline dot */}
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-marker-yellow to-marker-orange rounded-full border-3 border-paper-50 shadow-lg flex items-center justify-center text-base md:text-lg z-10 flex-shrink-0"
                    style={{ border: "3px solid #666" }}
                  >
                    {exp.icon}
                  </div>

                  {/* Experience card */}
                  <div
                    className="flex-1 bg-paper-50 p-4 md:p-5 relative"
                    style={{
                      border: "2px solid #666",
                      borderRadius: "15px 5px 15px 5px",
                    }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="font-hand text-base md:text-lg text-pencil-600 font-semibold">
                        {exp.title}
                      </h4>
                      <span className="font-sketch text-xs md:text-sm text-pencil-400">
                        {exp.period}
                      </span>
                    </div>
                    <p className="font-marker text-pencil-500 mb-2 text-sm md:text-base">
                      {exp.company}
                    </p>
                    <p className="font-sketch text-pencil-500 text-xs md:text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Interests & Hobbies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="font-hand text-xl md:text-2xl text-pencil-600 mb-6 md:mb-8 text-center">
            When I'm Not Coding 🎭
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-marker-pink/10 to-marker-purple/10 p-3 md:p-4 relative group cursor-pointer"
                style={{
                  border: "2px solid #666",
                  borderRadius: "12px 4px 12px 4px",
                }}
                whileHover={{ scale: 1.02, rotate: Math.random() * 2 - 1 }}
              >
                <div className="flex items-center gap-2 md:gap-3 mb-2">
                  <span className="text-xl md:text-2xl">{interest.icon}</span>
                  <h4 className="font-hand text-pencil-600 font-semibold text-sm md:text-base">
                    {interest.name}
                  </h4>
                </div>
                <p className="font-sketch text-pencil-500 text-xs md:text-sm">
                  {interest.desc}
                </p>

                {/* Hover decoration */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-marker-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
