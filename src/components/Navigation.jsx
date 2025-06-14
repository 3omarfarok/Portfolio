import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Navigation = () => {
  const [secretClicks, setSecretClicks] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ]

  const handleSecretClick = () => {
    setSecretClicks(prev => prev + 1)
    if (secretClicks >= 6) {
      navigate('/secret')
      setSecretClicks(0)
    }
  }

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-40 bg-paper-50/90 backdrop-blur-sm notebook-holes"
      style={{
        background: 'linear-gradient(to right, transparent 40px, rgba(254,254,254,0.9) 40px)',
        borderBottom: '2px solid #e5e7eb'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Name */}
        <motion.div
          className="font-marker text-2xl text-pencil-600 cursor-pointer"
          whileHover={{ scale: 1.05, rotate: 1 }}
          onClick={handleSecretClick}
        >
          Omar Farok
          {secretClicks > 3 && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-marker-pink text-sm ml-2"
            >
              👀
            </motion.span>
          )}
        </motion.div>

        {/* Navigation Items */}
        <div className="flex space-x-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="font-sketch text-pencil-500 hover:text-ink-blue transition-colors px-3 py-2 rounded-lg hover:bg-marker-yellow/20"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-lg mr-2">{item.icon}</span>
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Secret indicator */}
        {secretClicks > 0 && secretClicks < 7 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-marker-pink rounded-full flex items-center justify-center text-xs font-bold text-white"
          >
            {secretClicks}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation