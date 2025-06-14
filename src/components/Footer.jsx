import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-paper-100 py-8 relative overflow-hidden">
      {/* Notebook styling */}
      <div className="absolute left-6 top-0 bottom-0 flex flex-col justify-center">
        <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-300 shadow-inner"></div>
      </div>
      <div className="absolute left-20 top-0 bottom-0 w-0.5 bg-red-400 opacity-40"></div>

      <div className="max-w-6xl mx-auto px-4 pl-24">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Brand & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="font-marker text-xl text-pencil-600 mb-2">Omar Farok</h3>
            <p className="font-sketch text-pencil-400 text-sm">
              © {currentYear} Sketched with love and lots of coffee ☕
            </p>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-6"
          >
            {[
              { icon: '📧', label: 'Email' },
              { icon: '💼', label: 'LinkedIn' },
              { icon: '🐙', label: 'GitHub' }
            ].map((contact) => (
              <motion.button
                key={contact.label}
                className="flex items-center space-x-2 text-pencil-500 hover:text-ink-blue transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{contact.icon}</span>
                <span className="font-sketch text-sm hidden sm:inline">{contact.label}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center space-x-2"
          >
            <motion.div
              className="w-3 h-3 bg-marker-green rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
            <span className="font-sketch text-sm text-pencil-600">Available for work!</span>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer