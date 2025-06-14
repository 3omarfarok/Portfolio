import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const [currentFont, setCurrentFont] = useState("font-sketch");
  const [ref, inView] = useInView({ threshold: 0.3 });

  const fonts = ["font-sketch", "font-hand", "font-marker"];
  const titles = ["Full-Stack Developer", "Code Artist", "Digital Creator"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFont((prev) => {
        const currentIndex = fonts.indexOf(prev);
        return fonts[(currentIndex + 1) % fonts.length];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background with notebook styling */}
      <div className="absolute inset-0 bg-paper-50">
        <div className="absolute inset-0 bg-notebook-lines opacity-20"></div>

        {/* Coffee stain - responsive positioning */}
        <div
          className="absolute top-16 md:top-32 right-8 md:right-24 w-12 h-12 md:w-16 md:h-16 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 69, 19, 0.3) 0%, rgba(139, 69, 19, 0.1) 50%, transparent 70%)",
            transform: "rotate(25deg) skew(10deg, 5deg)",
          }}
        ></div>

        {/* Paper texture */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
                radial-gradient(circle at 25px 25px, rgba(0,0,0,0.05) 1px, transparent 1px),
                radial-gradient(circle at 75px 75px, rgba(0,0,0,0.03) 1px, transparent 1px)
              `,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      {/* Three-hole punch - responsive */}
      <div className="absolute left-3 md:left-6 top-0 bottom-0 flex flex-col justify-center space-y-12 md:space-y-20 z-0">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="relative">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white border-2 border-gray-300 shadow-inner"></div>
            <div className="absolute inset-1 w-4 h-4 md:w-6 md:h-6 rounded-full bg-gray-100"></div>
          </div>
        ))}
      </div>

      {/* Red margin line - responsive */}
      <div className="absolute left-12 md:left-20 top-0 bottom-0 w-0.5 bg-red-400 opacity-40 z-0"></div>

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 relative z-20"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[75vh]">
          {/* Text Content - Better positioning */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 lg:pl-8 text-center lg:text-left flex flex-col justify-center"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <span className="font-hand text-xl md:text-2xl lg:text-3xl text-pencil-400 block mb-2">
                Hello there  👋  مرحبًا   !
              </span>
            </motion.div>

            {/* Name - Better responsive sizing */}
            <motion.h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-pencil-600 ${currentFont} transition-all duration-500 leading-tight`}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="relative hand-underline block">
                Omar
                <motion.span
                  className="absolute -top-4 md:-top-6 -right-4 md:-right-8 text-2xl md:text-3xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ✏️
                </motion.span>
              </span>
              <span className="text-ink-blue block mt-2">Farok</span>
            </motion.h1>

            {/* Rotating Titles - Better height management */}
            <motion.div
              className="h-16 md:h-20 lg:h-24 overflow-hidden relative flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {titles.map((title, index) => (
                <motion.p
                  key={title}
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-pencil-500 ${fonts[index]} absolute w-full text-center lg:text-left`}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{
                    y: currentFont === fonts[index] ? 0 : -50,
                    opacity: currentFont === fonts[index] ? 1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {title}
                </motion.p>
              ))}
            </motion.div>

            {/* Description - Better spacing */}
            <motion.p
              className="text-base md:text-lg lg:text-xl text-pencil-400 font-sketch leading-relaxed max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Crafting beautiful digital experiences with modern technologies. I
              turn ideas into interactive realities through clean code and
              creative design.
            </motion.p>

            {/* CTA Buttons - Better responsive layout */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.button
                className="px-6 md:px-8 py-3 md:py-4 bg-marker-yellow text-pencil-600 font-sketch text-base md:text-lg hover:bg-marker-pink transition-colors relative overflow-hidden"
                style={{
                  border: "2px solid #666",
                  borderRadius: "15px 5px 15px 5px",
                }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work 🎨
              </motion.button>

              <motion.button
                className="px-6 md:px-8 py-3 md:py-4 text-ink-blue font-sketch text-base md:text-lg hover:bg-marker-blue hover:text-white transition-colors relative"
                style={{
                  border: "2px solid #1e40af",
                  borderRadius: "15px 5px 15px 5px",
                }}
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Let's Talk 💬
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Character Illustration - Using the provided image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end items-center mt-8 lg:mt-0"
          >
            {/* Main character container */}
            <div className="relative w-80 md:w-96 lg:w-[400px] h-80 md:h-96 lg:h-[400px] flex items-center justify-center">
              {/* Character Image */}
              <motion.img
                src="/src/assets/image.png"
                alt="Omar Farok - Developer Character"
                className="w-full h-full object-contain animate-float"
                style={{
                  filter: "drop-shadow(4px 4px 8px rgba(0,0,0,0.2))",
                }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Floating skills - Better responsive positioning */}
              <motion.div
                className="absolute -top-4 -left-8 md:-left-12 bg-gradient-to-r from-blue-400 to-blue-500 text-white px-3 md:px-4 py-2 rounded-full font-sketch text-xs md:text-sm shadow-lg"
                style={{
                  border: "2px solid #1e40af",
                  borderRadius: "20px 8px 20px 8px",
                }}
                animate={{
                  y: [0, -12, 0],
                  rotate: [12, 8, 12],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                React.js ⚛️
              </motion.div>

              <motion.div
                className="absolute top-8 md:top-12 -right-8 md:-right-12 bg-gradient-to-r from-green-400 to-green-500 text-white px-3 md:px-4 py-2 rounded-full font-sketch text-xs md:text-sm shadow-lg"
                style={{
                  border: "2px solid #059669",
                  borderRadius: "20px 8px 20px 8px",
                }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [-12, -8, -12],
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              >
                Node.js 🚀
              </motion.div>

              <motion.div
                className="absolute -bottom-8 md:-bottom-12 -left-8 md:-left-12 bg-gradient-to-r from-purple-400 to-purple-500 text-white px-3 md:px-4 py-2 rounded-full font-sketch text-xs md:text-sm shadow-lg"
                style={{
                  border: "2px solid #7c3aed",
                  borderRadius: "20px 8px 20px 8px",
                }}
                animate={{
                  y: [0, -14, 0],
                  rotate: [8, 12, 8],
                }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              >
                MongoDB 🍃
              </motion.div>

              <motion.div
                className="absolute -bottom-4 right-4 md:right-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 md:px-4 py-2 rounded-full font-sketch text-xs md:text-sm shadow-lg"
                style={{
                  border: "2px solid #f59e0b",
                  borderRadius: "20px 8px 20px 8px",
                }}
                animate={{
                  y: [0, -11, 0],
                  rotate: [-8, -12, -8],
                }}
                transition={{ duration: 2.8, repeat: Infinity, delay: 1.5 }}
              >
                JavaScript ⚡
              </motion.div>

              <motion.div
                className="absolute top-40 left-3 bg-gradient-to-r from-pink-400 to-red-400 text-white px-3 py-1 rounded-full font-sketch text-xs shadow-lg"
                style={{
                  border: "2px solid #ec4899",
                  borderRadius: "15px 5px 15px 5px",
                }}
                animate={{
                  y: [0, -8, 0],
                  rotate: [5, -5, 5],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                Tailwind 🎨
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
