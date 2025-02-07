"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import AnimatedCard from "./animated-card"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "projects", "publications", "courses"]

  const works = [
    {
      id: 1,
      title: "Estimation of Above Ground Biomass & Carbon Stock",
      category: "projects",
      description: "College Dissertation Project based on field work and statistical analysis.",
      year: "2020",
    },
    {
      id: 2,
      title: "Vitamin A Mediated Tail Regeneration in Tadpoles",
      category: "projects",
      description: "M.Phil dissertation project studying regeneration using Histology and Histochemical analysis.",
      year: "2022",
    },
    {
      id: 3,
      title: "Estimation of Above Ground Biomass & Carbon Stock of Tree Species",
      category: "publications",
      description: "Published in The International Journal of Urban Forest",
      year: "2020",
    },
    {
      id: 4,
      title: "PGDCA",
      category: "courses",
      description: "DataPro Rayagada",
      year: "2017 - 2018",
    },
    {
      id: 5,
      title: "OS-CIT",
      category: "courses",
      description: "TTRC Rayagada",
      year: "2017 - 2018",
    },
    {
      id: 6,
      title: "SEO Certification Course",
      category: "courses",
      description: "Udemy",
      year: "2020",
    },
  ]

  const filteredWorks = works.filter((work) => (selectedCategory === "all" ? true : work.category === selectedCategory))

  return (
    <section id="portfolio" className="relative py-20 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-6xl md:text-7xl font-bold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Portfolio
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="capitalize text-lg hover-lift"
            >
              {category}
            </Button>
          ))}
        </motion.div>
        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <AnimatedCard
                  title={work.title}
                  description={work.description}
                  year={work.year}
                  category={work.category}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

