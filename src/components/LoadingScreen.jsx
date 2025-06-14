import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return prev
        return prev + 3
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-paper-50 flex items-center justify-center z-50"
    >
      <div className="text-center">
        {/* Animated Code Icon */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="mb-8 relative"
        >
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-marker-yellow via-marker-pink to-marker-blue rounded-full flex items-center justify-center shadow-lg relative overflow-hidden">
            {/* Animated brackets */}
            <motion.div
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="text-3xl font-mono text-white font-bold"
            >
              {'</>'}
            </motion.div>
            
            {/* Floating particles */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [0, 1, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full opacity-70"
            />
            <motion.div
              animate={{ 
                rotate: [360, 0],
                scale: [0, 1, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-1 left-1 w-2 h-2 bg-white rounded-full opacity-70"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-marker text-pencil-600 mb-6"
        >
          Did I make it ? 
        </motion.h2>

        {/* Progress bar */}
        <div className="w-64 mx-auto mb-4">
          <div className="h-2 bg-paper-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-marker-yellow to-marker-pink rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-sketch text-pencil-500"
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </motion.div>
  )
}

export default LoadingScreen