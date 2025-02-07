"use client"

import { motion } from "framer-motion"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text" variants={itemVariants}>
            SAI ABHIPSA DASH
          </motion.h1>
          <motion.p className="text-2xl md:text-3xl text-gray-600 mb-8" variants={itemVariants}>
            Life Science || Digital Marketing || SEO
          </motion.p>
          <motion.div variants={itemVariants}>
            <a
              href="#contact"
              className="gradient-bg text-white font-bold py-3 px-8 rounded-full text-lg hover-lift inline-block"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

