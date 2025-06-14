import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SecretPage = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const navigate = useNavigate();

  const messages = [
    "Thank you for being such a deep researcher! 🕵️‍♂️",
    "Your curiosity brought you here, and I appreciate that! 🌟",
    "People like you make the web a more interesting place. 💫",
    "Now, let me take you on a journey through my mentorship roadmap... 🛤️",
  ];

  const mentors = [
    {
      name: "Ayaa Hamid",
      title: "My First Programming Teacher",
      description:
        "The engineer who first taught me how to code and opened the door to this amazing world of programming, Keep going, Ayouya",
      color: "marker-yellow",
      bgColor: "bg-marker-yellow/10",
      icon: "🌱",
      year: "2022",
    },
    {
      name: "Abdelrahman Kassem",
      title: "The Respected Man",
      description:
        "A man and a teacher I respect and his hair Thank you for your time with us.Keep it up at Duolingo, man.",
      color: "marker-green",
      bgColor: "bg-marker-green/10",
      icon: "🎯",
      year: "2025",
    },
    {
      name: "Osama Alzero",
      title: "The Continuous Guide",
      description:
        "Osama Elzero is one of the first people I turned to whenever I got stuck. His YouTube channel was — and still is — a go-to place for clear, practical explanations that helped me grow as a developer.",
      color: "marker-purple",
      bgColor: "bg-marker-purple/10",
      icon: "🚀",
      year: "2021 - present",
    },
    {
      name: "Gad Ahmed",
      title: "My Trusted Friend ",
      description:
        "My dear friend who has been with me through thick and thin in this coding journey, Thanks Maman.",
      color: "marker-blue",
      bgColor: "bg-marker-blue/10",
      icon: "👨‍💻",
      year: "2022-Present",
    },
    {
      name: "Mostafa El-Nemr",
      title: "From Teacher to Colleague",
      description:
        "Mr. Mostafa El-Nemr, my Physics teacher, was always supportive and encouraging throughout my journey. Today, after graduation, we’ve become almost like colleagues in the professional world — something I’m truly proud of",
      color: "marker-orange",
      bgColor: "bg-marker-orange/10",
      icon: "⚛️",
      year: "2022-Present",
    },
    {
      name: "Omar Farok",
      title: "For fun",
      description: "Oh my God, This is me :)",
      bgColor: "bg-marker-pink/10",
      icon: "💭",
      year: "Always",
    },
  ];

  const littleFriends = [
    {
      name: "Bilal Mohamed",
      title: "The Sleepy Man",
      description:
        "Always bringing fresh perspectives and creative solutions to every thing.",
      color: "marker-blue",
      icon: "🎨",
    },
    {
      name: "Mahmoud Momen",
      title: "The Problem Solver",
      description:
        "Never backs down from a challenge and always finds a way to make things work.",
      color: "marker-green",
      icon: "🧩",
    },
    {
      name: "Shaheed",
      title: "The Dead man",
      description:
        "It is said that you should be afraid of a man who has come back from the dead. But that never applies to Shaheed.",
      color: "marker-yellow",
      icon: "⚡",
    },
    {
      name: "Hazem",
      title: "The Tech Enthusiast",
      description:
        "Passionate about the latest technologies and always eager to learn something new. His brain is like a CPU <3",
      color: "marker-purple",
      icon: "🚀",
    },
    {
      name: "Hafez",
      title: "The Gym guy",
      description:
        "The friend you can always count on, no matter what the situation.",
      color: "marker-orange",
      icon: "🛡️",
    },
    {
      name: "Mahmoud Gaper",
      title: "The Aswad",
      description:
        "This kid has two things that are priceless His voice and his memorization. I really appreciate him a lot.",
      color: "marker-pink",
      icon: "💡",
    },
  ];

  const inspirationalQuotes = [
    { text: "ساعتين جد وكوباية شاي", author: "Ayaa Hamid" },

    {
      text: "Do you Know how to do it? No, Will you do it? YES.",
      author: "Abdelrahman Kassem",
    },
    { text: "SEARCH", author: "Osama Alzero" },
    {
      text: "وَأَن لَّيْسَ لِلإِنسَانِ إِلاَّ مَا سَعَى",
      author: "Abdelrahman Kassem",
    },
    { text: "Success is the best Revenge", author: "Osama Alzero" },
    { text: "موقعك يا صاحبي اتفضل", author: "Omar Farok" },
    { text: "Fasas el code ya wald", author: "Gad Ahmed" },
    {
      text: "Most of his words are quotes ",
      author: "Mostafa El-Nemr",
    },
    { text: "أنا ايه اللي جابني هنا", author: "Omar Farok" },
  ];

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];
    let charIndex = 0;

    const typeWriter = setInterval(() => {
      if (charIndex <= currentMessage.length) {
        setDisplayedText(currentMessage.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeWriter);
        if (currentMessageIndex < messages.length - 1) {
          setTimeout(() => {
            setCurrentMessageIndex((prev) => prev + 1);
            setDisplayedText("");
          }, 2000);
        } else {
          setTimeout(() => {
            setShowRoadmap(true);
          }, 1000);
        }
      }
    }, 50);

    return () => clearInterval(typeWriter);
  }, [currentMessageIndex]);

  // Rotate quotes every 6 seconds
  useEffect(() => {
    if (showRoadmap) {
      const interval = setInterval(() => {
        setCurrentQuoteIndex((prev) => (prev + 1) % inspirationalQuotes.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [showRoadmap, inspirationalQuotes.length]);

  return (
    <div className="min-h-screen bg-paper-50 relative overflow-hidden">
      {/* Notebook styling */}
      <div className="absolute left-3 md:left-6 top-0 bottom-0 flex flex-col justify-center space-y-8 md:space-y-16 z-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white border-2 border-gray-300 shadow-inner"
          ></div>
        ))}
      </div>
      <div className="absolute left-12 md:left-20 top-0 bottom-0 w-0.5 bg-red-400 opacity-40 z-0"></div>

      {/* Coffee stain */}
      <div
        className="absolute top-16 md:top-24 right-8 md:right-24 w-12 h-12 md:w-20 md:h-20 rounded-full opacity-15 z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 69, 19, 0.4) 0%, rgba(139, 69, 19, 0.2) 50%, transparent 70%)",
          transform: "rotate(25deg) skew(10deg, 5deg)",
        }}
      ></div>

      {/* Floating Quotes */}
      <AnimatePresence mode="wait">
        {showRoadmap && (
          <div className="fixed top-10 right-4 z-50 max-w-xs">
            <motion.div
              key={currentQuoteIndex}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              className="bg-marker-yellow text-pencil-600 p-3 relative shadow-lg"
              style={{
                border: "2px solid #666",
                borderRadius: "15px 5px 15px 5px",
                transform: "rotate(-2deg)",
              }}
            >
              <blockquote className="font-hand text-sm mb-2 leading-relaxed">
                "{inspirationalQuotes[currentQuoteIndex]?.text}"
              </blockquote>
              <cite className="font-sketch text-xs opacity-80 not-italic">
                - {inspirationalQuotes[currentQuoteIndex]?.author}
              </cite>
              <div className="absolute -top-2 -right-2 text-lg">📌</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 pl-16 md:pl-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-marker text-pencil-600 mb-6 hand-underline">
            Secret Page! 🎉
          </h1>
        </motion.div>

        {/* Typewriter Messages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div
            className="bg-paper-100 p-6 md:p-8 min-h-32 flex items-center justify-center relative"
            style={{
              border: "2px solid #666",
              borderRadius: "15px 5px 15px 5px",
            }}
          >
            <p className="text-lg md:text-xl lg:text-2xl font-hand text-pencil-600 leading-relaxed">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1 text-ink-blue"
              >
                |
              </motion.span>
            </p>
          </div>
        </motion.div>

        {/* Mentorship Roadmap */}
        {showRoadmap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-full max-w-7xl mx-auto mb-20"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-marker text-pencil-600 text-center mb-16 hand-underline">
              My Mentorship Journey 🛤️
            </h2>

            {/* Timeline */}
            <div className="relative px-4 md:px-8">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-marker-yellow via-marker-blue to-marker-pink opacity-60 transform md:-translate-x-0.5"></div>

              {/* Mentor Cards */}
              <div className="space-y-16 md:space-y-20">
                {mentors.map((mentor, index) => (
                  <motion.div
                    key={mentor.name}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                    className={`relative flex flex-col md:flex-row items-start ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.2, duration: 0.4 }}
                      className={`absolute left-4 md:left-1/2 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-${mentor.color} to-${mentor.color}/70 rounded-full border-4 border-paper-50 shadow-xl z-10 flex items-center justify-center text-xl md:text-2xl transform md:-translate-x-1/2`}
                      style={{
                        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                      }}
                    >
                      {mentor.icon}
                    </motion.div>

                    {/* Year badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.2, duration: 0.4 }}
                      className={`absolute ${
                        index % 2 === 0
                          ? "left-20 md:left-1/2 md:ml-12"
                          : "left-20 md:right-1/2 md:mr-12"
                      } -top-4 md:-top-6 bg-gradient-to-r from-${
                        mentor.color
                      } to-${
                        mentor.color
                      }/80 text-pencil-600 px-4 py-2 text-sm md:text-base font-hand shadow-lg z-20`}
                      style={{
                        border: "2px solid #666",
                        borderRadius: "20px 8px 20px 8px",
                        transform: "rotate(-3deg)",
                      }}
                    >
                      {mentor.year}
                      <div className="absolute -bottom-1 left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-pencil-600"></div>
                    </motion.div>

                    {/* Mentor Card - Enhanced design without quotes */}
                    <motion.div
                      className={`w-full md:w-96 lg:w-[28rem] ${
                        index % 2 === 0
                          ? "ml-20 md:ml-0 md:mr-auto md:pr-16"
                          : "ml-20 md:ml-auto md:pl-16"
                      } mt-8 md:mt-0 relative`}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div
                        className={`${mentor.bgColor} p-6 md:p-8 relative shadow-2xl`}
                        style={{
                          border: "3px solid #666",
                          borderRadius: "25px 8px 25px 8px",
                          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                        }}
                      >
                        {/* Decorative elements */}
                        <div className="absolute -top-2 -left-2 w-6 h-6 bg-marker-yellow rounded-full opacity-60"></div>
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-marker-pink rounded-full opacity-60"></div>

                        {/* Header */}
                        <div className="flex items-start gap-4 mb-6">
                          <div
                            className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-${mentor.color} to-${mentor.color}/70 rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow-lg flex-shrink-0`}
                            style={{
                              border: "3px solid #666",
                              transform: "rotate(3deg)",
                            }}
                          >
                            {mentor.icon}
                          </div>
                          <div className="flex-1 pt-2">
                            <h3 className="font-marker text-xl md:text-2xl lg:text-3xl text-pencil-600 mb-2 leading-tight">
                              {mentor.name}
                            </h3>
                            <h4 className="font-hand text-base md:text-lg text-pencil-500 leading-relaxed">
                              {mentor.title}
                            </h4>
                          </div>
                        </div>

                        {/* Description - Enhanced */}
                        <div
                          className="bg-paper-50/50 p-4 md:p-5 rounded-xl border-l-4 border-pencil-400"
                          style={{ borderRadius: "15px 5px 15px 5px" }}
                        >
                          <p className="font-sketch text-pencil-500 text-sm md:text-base leading-relaxed">
                            {mentor.description}
                          </p>
                        </div>

                        {/* Impact indicator */}
                        <div className="mt-4 flex items-center justify-center">
                          <div
                            className="flex items-center gap-2 bg-marker-green/20 px-4 py-2 rounded-full"
                            style={{ border: "1px solid #666" }}
                          >
                            <span className="text-sm">Impact Level:</span>
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{
                                    delay: 1.5 + index * 0.2 + i * 0.1,
                                  }}
                                  className="w-2 h-2 bg-marker-green rounded-full"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* End of journey marker */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3, duration: 0.6 }}
                className="relative mt-20 text-center"
              >
                <div
                  className="absolute left-4 md:left-1/2 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-marker-yellow via-marker-pink to-marker-blue rounded-full border-4 border-paper-50 shadow-2xl flex items-center justify-center text-3xl md:text-4xl transform md:-translate-x-1/2"
                  style={{
                    border: "4px solid #666",
                  }}
                >
                  🎓
                </div>
                <div
                  className="ml-24 md:ml-0 bg-gradient-to-br from-paper-100 to-paper-50 p-6 md:p-8 max-w-md mx-auto shadow-2xl"
                  style={{
                    border: "3px solid #666",
                    borderRadius: "25px 8px 25px 8px",
                  }}
                >
                  <h3 className="font-marker text-xl md:text-2xl lg:text-3xl text-pencil-600 mb-4">
                    The Journey Continues... ∞
                  </h3>
                  <p className="font-sketch text-pencil-500 text-sm md:text-base leading-relaxed">
                    Every day brings new learning opportunities and challenges.
                    The mentorship never truly ends! 🌟
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Little Friends Section */}
        {showRoadmap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.6 }}
            className="w-full max-w-7xl mx-auto mb-20"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-marker text-pencil-600 text-center mb-16 hand-underline">
              My Little Friends 👥
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-8">
              {littleFriends.map((friend, index) => (
                <motion.div
                  key={friend.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4 + index * 0.1, duration: 0.5 }}
                  className={`bg-gradient-to-br from-${friend.color}/10 to-${friend.color}/20 p-6 relative shadow-xl group cursor-pointer`}
                  style={{
                    border: "3px solid #666",
                    borderRadius: "20px 8px 20px 8px",
                  }}
                  whileHover={{ scale: 1.02, rotate: Math.random() * 2 - 1 }}
                >
                  {/* Friend Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br from-${friend.color} to-${friend.color}/70 rounded-2xl flex items-center justify-center text-2xl shadow-lg mb-4 mx-auto`}
                    style={{
                      border: "3px solid #666",
                      transform: "rotate(-3deg)",
                    }}
                  >
                    {friend.icon}
                  </div>

                  {/* Friend Info */}
                  <div className="text-center">
                    <h3 className="font-marker text-lg md:text-xl text-pencil-600 mb-2">
                      {friend.name}
                    </h3>
                    <h4 className="font-hand text-sm md:text-base text-pencil-500 mb-3">
                      {friend.title}
                    </h4>
                    <p className="font-sketch text-pencil-500 text-xs md:text-sm leading-relaxed">
                      {friend.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-marker-yellow rounded-full opacity-0 group-hover:opacity-60 transition-opacity"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-marker-pink rounded-full opacity-0 group-hover:opacity-60 transition-opacity"></div>

                  {/* Friendship indicator */}
                  <div className="absolute top-2 left-2 text-lg opacity-60">
                    🤝
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Friends Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.8, duration: 0.6 }}
              className="text-center mt-12"
            >
              <div
                className="bg-gradient-to-br from-marker-blue/10 to-marker-purple/10 p-6 md:p-8 max-w-2xl mx-auto shadow-xl"
                style={{
                  border: "3px solid #666",
                  borderRadius: "25px 8px 25px 8px",
                }}
              >
                <blockquote className="font-hand text-lg md:text-xl text-pencil-600 italic mb-4">
                  "Shout out to everyone else I Know 🌟"
                </blockquote>
                <cite className="font-sketch text-pencil-400 text-sm">
                  - Warm Greetings
                </cite>

                {/* Quote decorations */}
                <div className="absolute -top-3 -left-3 text-3xl text-marker-blue opacity-30 font-serif">
                  "
                </div>
                <div className="absolute -bottom-3 -right-3 text-3xl text-marker-blue opacity-30 font-serif">
                  "
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Thank you note and Back button */}
        {showRoadmap && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5, duration: 0.6 }}
            className="w-full max-w-6xl mx-auto mt-20 mb-12"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-4">
              {/* Thank you note */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 5.2, duration: 0.4 }}
                className="bg-gradient-to-br from-marker-pink to-marker-pink/80 p-6 md:p-8 shadow-2xl max-w-lg"
                style={{
                  border: "3px solid #666",
                  borderRadius: "25px 8px 25px 8px",
                  transform: "rotate(-1deg)",
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">🙏</div>
                  <div>
                    <h3 className="font-marker text-xl md:text-2xl text-pencil-600 mb-2">
                      Special Thanks! ✨
                    </h3>
                    <p className="font-hand text-pencil-600 text-base md:text-lg font-semibold mb-3">
                      To these amazing people who shaped my journey!
                    </p>
                  </div>
                </div>
                <p className="font-sketch text-pencil-500 text-sm md:text-base leading-relaxed">
                  Each mentor and friend represents a lesson that changed my
                  perspective and helped me grow as a developer and as a person.
                </p>
                <div className="absolute -top-3 -right-3 text-2xl">📌</div>
              </motion.div>

              {/* Back Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 5.5, duration: 0.4 }}
                className="flex flex-col items-center gap-4"
              >
                <motion.button
                  onClick={() => navigate("/Portfolio/")}
                  className="bg-gradient-to-r from-marker-blue to-marker-blue/80 text-white px-8 md:px-12 py-4 md:py-5 font-hand text-lg md:text-xl hover:from-marker-purple hover:to-marker-purple/80 transition-all shadow-2xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    border: "3px solid #666",
                    borderRadius: "25px 8px 25px 8px",
                  }}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-2xl">🏠</span>
                    Back to Portfolio
                  </span>
                </motion.button>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 6, duration: 0.4 }}
                  className="font-sketch text-pencil-400 text-sm text-center"
                >
                  Thanks for exploring! 🚀
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SecretPage;
