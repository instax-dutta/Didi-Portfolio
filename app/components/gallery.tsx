"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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

  return (
    <section id="education" className="relative z-20 py-16 sm:py-20">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h2>
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="glass-effect h-full">
                <CardContent className="p-4 sm:p-6 flex flex-col justify-between h-full">
                  <h3 className="mb-2 text-lg sm:text-xl font-semibold text-gray-900">{edu.title}</h3>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">{edu.institution}</p>
                    <p className="mt-2 text-xs sm:text-sm text-gray-500">{edu.year}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

