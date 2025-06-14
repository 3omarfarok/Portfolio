import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.2 });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "d55ee638-ecb3-458d-9890-d37a1306dc54",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "Omar's Portfolio Website",
          subject: `Message from ${formData.name} - Portfolio Website`,
          replyto: formData.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Form submission error:", result);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-paper-100 relative overflow-hidden"
    >
      {/* Notebook styling - Fixed z-index */}
      <div className="absolute left-6 top-0 bottom-0 flex flex-col justify-center space-y-16 z-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 shadow-inner"
          ></div>
        ))}
      </div>
      <div className="absolute left-20 top-0 bottom-0 w-0.5 bg-red-400 opacity-40 z-0"></div>

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
            Let's Connect
          </h2>
          <p className="font-sketch text-lg lg:text-xl text-pencil-500 max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hi?
            Drop me a message! ✉️
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="bg-paper-50 p-6 lg:p-8 relative"
              style={{
                border: "2px solid #666",
                borderRadius: "15px 5px 15px 5px",
              }}
            >
              {/* Form Title */}
              <h3 className="font-hand text-xl lg:text-2xl text-pencil-600 mb-6 flex items-center">
                Send me a message 📝
                <motion.span
                  className="ml-3 text-lg"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✏️
                </motion.span>
              </h3>

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-marker-green/20 text-pencil-600 font-sketch rounded-lg border-2 border-green-400"
                >
                  Message sent successfully! I'll get back to you soon 📧
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-red-100 text-red-700 font-sketch rounded-lg border-2 border-red-400"
                >
                  Oops! Something went wrong. Please try again or email me
                  directly.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block font-sketch text-pencil-600 mb-2 text-sm lg:text-base">
                    Your Name *
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-paper-100 font-sketch text-pencil-600 focus:outline-none transition-all text-sm lg:text-base"
                    style={{
                      border: "2px solid #999",
                      borderRadius: "10px 3px 10px 3px",
                    }}
                    placeholder="What should I call you?"
                    whileFocus={{ scale: 1.02 }}
                  />
                  <div className="mt-1 h-1 bg-notebook-lines bg-repeat-x opacity-30"></div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block font-sketch text-pencil-600 mb-2 text-sm lg:text-base">
                    Email Address *
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-paper-100 font-sketch text-pencil-600 focus:outline-none transition-all text-sm lg:text-base"
                    style={{
                      border: "2px solid #999",
                      borderRadius: "10px 3px 10px 3px",
                    }}
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                  <div className="mt-1 h-1 bg-notebook-lines bg-repeat-x opacity-30"></div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block font-sketch text-pencil-600 mb-2 text-sm lg:text-base">
                    Your Message *
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full p-3 bg-paper-100 font-sketch text-pencil-600 focus:outline-none transition-all resize-none text-sm lg:text-base"
                    style={{
                      border: "2px solid #999",
                      borderRadius: "10px 3px 10px 3px",
                    }}
                    placeholder="Tell me about your project or just say hello..."
                    whileFocus={{ scale: 1.02 }}
                  />
                  <div className="mt-1 h-1 bg-notebook-lines bg-repeat-x opacity-30"></div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-marker-yellow font-sketch text-lg text-pencil-600 hover:bg-marker-pink transition-colors disabled:opacity-50 relative overflow-hidden"
                  style={{
                    border: "2px solid #666",
                    borderRadius: "15px 5px 15px 5px",
                  }}
                  whileHover={{ scale: 1.02, rotate: 0.5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      Sending message... ✈️
                    </motion.span>
                  ) : (
                    "Send Message 🚀"
                  )}
                </motion.button>
              </form>

              {/* Sketchy decorations */}
              <div
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full opacity-30"
                style={{ border: "2px solid #f472b6" }}
              ></div>
              <div
                className="absolute -bottom-3 -left-3 w-6 h-6 transform rotate-45 opacity-30"
                style={{ border: "2px solid #3b82f6" }}
              ></div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div
              className="bg-marker-blue/10 p-6"
              style={{
                border: "2px solid #666",
                borderRadius: "15px 5px 15px 5px",
              }}
            >
              <h3 className="font-hand text-xl lg:text-2xl text-pencil-600 mb-6">
                Other ways to reach me 📞
              </h3>

              <div className="space-y-4">
                {[
                  {
                    icon: "📧",
                    label: "Email",
                    value: "omarmfarok.47@gmail.com",
                  },
                  {
                    icon: "💼",
                    label: "LinkedIn",
                    value: "www.linkedin.com/in/omar-farok-005860268/",
                  },
                  {
                    icon: "🐙",
                    label: "GitHub",
                    value: "github.com/3omarfarok",
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    className="flex items-center space-x-4"
                    whileHover={{ scale: 1.05, x: 10 }}
                  >
                    <div
                      className="w-10 h-10 bg-marker-yellow rounded-full flex items-center justify-center text-xl"
                      style={{
                        border: "2px solid #666",
                      }}
                    >
                      {contact.icon}
                    </div>
                    <div>
                      <p className="font-sketch text-pencil-600 text-sm lg:text-base">
                        {contact.label}
                      </p>
                      <p className="font-hand text-ink-blue text-sm lg:text-base">
                        {contact.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              className="bg-marker-green/10 p-6 relative"
              style={{
                border: "2px solid #666",
                borderRadius: "15px 5px 15px 5px",
              }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <motion.div
                  className="w-4 h-4 bg-marker-green rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
                <h4 className="font-marker text-pencil-600">
                  Available for work!
                </h4>
              </div>
              <p className="font-sketch text-pencil-500 text-sm">
                I'm currently open to new opportunities and exciting projects.
                Let's create something amazing together! 🚀
              </p>

              {/* Floating note */}
              <div
                className="absolute -right-4 -top-4 bg-marker-yellow px-3 py-1 transform rotate-12 font-hand text-sm text-pencil-600"
                style={{
                  border: "1px solid #666",
                  borderRadius: "8px 2px 8px 2px",
                }}
              >
                Quick response! ⚡
              </div>
            </motion.div>

            {/* Fun Quote */}
            <motion.div
              className="bg-paper-200 p-6 relative"
              style={{
                borderLeft: "4px solid #1e40af",
                borderLeftStyle: "solid",
              }}
              whileHover={{ scale: 1.02 }}
            >
              <blockquote className="font-hand text-lg text-pencil-600 italic mb-2">
                "The best way to predict the future is to create it."
              </blockquote>
              <cite className="font-sketch text-pencil-400 text-sm">
                - Could be Omar's philosophy
              </cite>

              {/* Quote marks */}
              <div className="absolute -top-2 -left-2 text-4xl text-marker-blue opacity-30 font-serif">
                "
              </div>
              <div className="absolute -bottom-4 -right-2 text-4xl text-marker-blue opacity-30 font-serif">
                "
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
