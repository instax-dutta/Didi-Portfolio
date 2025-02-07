"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface AnimatedCardProps {
  title: string
  description: string
  year: string
  category: string
}

export default function AnimatedCard({ title, description, year, category }: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative h-80 glass-effect expressive-shadow rounded-xl overflow-hidden cursor-pointer hover-lift"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 p-6 flex flex-col justify-between"
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-bold gradient-text">{title}</h3>
        <div>
          <p className="text-primary font-medium">{category}</p>
          <p className="text-gray-500 text-sm">{year}</p>
        </div>
      </motion.div>
      <motion.div
        className="absolute inset-0 p-6 flex flex-col justify-center items-center gradient-bg text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-center text-lg">{description}</p>
      </motion.div>
    </motion.div>
  )
}

