"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const education = [
    {
      title: "M.Phil. in Zoology",
      institution: "Maharaja Sriram Chandra Bhanja Deo University",
      year: "2021 - 2022",
    },
    {
      title: "Master in Life Sciences",
      institution: "Asian Institute of Public Health",
      year: "2018 - 2020",
    },
    {
      title: "B.Sc. in Zoology (Honors)",
      institution: "Rayagada Autonomous College",
      year: "2015 - 2018",
    },
    {
      title: "+2 Science",
      institution: "Institute of Higher Secondary Education, SOA University",
      year: "2013 - 2015",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="education" className="py-20 bg-gray-100" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {education.map((edu, index) => (
            <motion.div key={index} className="facebook-card p-6" variants={itemVariants}>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.title}</h3>
              <p className="text-gray-600 mb-2">{edu.institution}</p>
              <p className="text-gray-500 text-sm">{edu.year}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

