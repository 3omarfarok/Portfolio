import { motion } from 'framer-motion'

const FloatingDoodles = () => {
  const doodles = [
    { id: 1, type: 'star', x: '10%', y: '20%', delay: 0 },
    { id: 2, type: 'heart', x: '85%', y: '15%', delay: 0.5 },
    { id: 3, type: 'arrow', x: '15%', y: '60%', delay: 1 },
    { id: 4, type: 'circle', x: '90%', y: '70%', delay: 1.5 },
    { id: 5, type: 'triangle', x: '5%', y: '85%', delay: 2 },
    { id: 6, type: 'spiral', x: '80%', y: '45%', delay: 2.5 }
  ]

  const DoodleComponent = ({ type }) => {
    const commonProps = {
      stroke: '#666',
      strokeWidth: '2',
      fill: 'none',
      strokeDasharray: '3,2'
    }

    switch (type) {
      case 'star':
        return (
          <svg width="30" height="30" viewBox="0 0 30 30">
            <path d="M15 2 L18 10 L26 10 L20 16 L23 24 L15 20 L7 24 L10 16 L4 10 L12 10 Z" {...commonProps} />
          </svg>
        )
      case 'heart':
        return (
          <svg width="25" height="20" viewBox="0 0 25 20">
            <path d="M12.5 18 C12.5 18 3 12 3 6 C3 3 5 2 7.5 3 C10 4 12.5 7 12.5 7 C12.5 7 15 4 17.5 3 C20 2 22 3 22 6 C22 12 12.5 18 12.5 18" {...commonProps} />
          </svg>
        )
      case 'arrow':
        return (
          <svg width="35" height="20" viewBox="0 0 35 20">
            <path d="M5 10 L25 10 M20 5 L25 10 L20 15" {...commonProps} />
          </svg>
        )
      case 'circle':
        return (
          <svg width="25" height="25" viewBox="0 0 25 25">
            <circle cx="12.5" cy="12.5" r="10" {...commonProps} />
          </svg>
        )
      case 'triangle':
        return (
          <svg width="25" height="25" viewBox="0 0 25 25">
            <path d="M12.5 3 L22 20 L3 20 Z" {...commonProps} />
          </svg>
        )
      case 'spiral':
        return (
          <svg width="30" height="30" viewBox="0 0 30 30">
            <path d="M15 15 Q15 10 20 10 Q25 10 25 15 Q25 20 20 20 Q10 20 10 15 Q10 5 20 5 Q30 5 30 15" {...commonProps} />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {doodles.map((doodle) => (
        <motion.div
          key={doodle.id}
          className="absolute"
          style={{ left: doodle.x, top: doodle.y }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0.6, 0.3],
            scale: [0, 1.2, 1, 1.1],
            rotate: [0, 360]
          }}
          transition={{
            duration: 8,
            delay: doodle.delay,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        >
          <DoodleComponent type={doodle.type} />
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingDoodles