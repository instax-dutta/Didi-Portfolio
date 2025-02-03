"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100 to-purple-200 opacity-50"></div>
      <div className="relative z-20 flex flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          SAI ABHIPSA DASH
        </motion.h1>
        <motion.p
          className="max-w-[600px] text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Master in Life Sciences | Specialization in Animal Science
        </motion.p>
      </div>
    </div>
  )
}

