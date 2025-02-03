"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
    <section id="portfolio" className="relative z-20 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          Portfolio
        </h2>
        <div className="mb-8 sm:mb-12 flex flex-wrap justify-center gap-2 sm:gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="text-xs sm:text-sm capitalize modern-shadow"
            >
              {category}
            </Button>
          ))}
        </div>
        <motion.div layout className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="glass-effect h-full">
                  <CardContent className="p-4 sm:p-6 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="mb-2 text-lg sm:text-xl font-semibold text-gray-900">{work.title}</h3>
                      <p className="mb-4 text-xs sm:text-sm text-gray-600">{work.description}</p>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500">{work.year}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

