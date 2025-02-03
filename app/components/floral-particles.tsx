"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const cheerfulEmojis = ["😊", "🌟", "🎉", "🌈", "🦋", "🌺"]

interface Particle {
  x: number
  y: number
  rotation: number
  scale: number
  emoji: string
  speed: number
}

export default function CheerfulParticles() {
  const particlesRef = useRef<Particle[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      rotation: Math.random() * 360,
      scale: Math.random() * 0.3 + 0.2,
      emoji: cheerfulEmojis[Math.floor(Math.random() * cheerfulEmojis.length)],
      speed: Math.random() * 0.3 + 0.2,
    })

    const particleCount = Math.min(20, Math.floor(window.innerWidth / 50))
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(createParticle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        ctx.save()
        ctx.translate(particle.x, particle.y)
        ctx.rotate((particle.rotation * Math.PI) / 180)
        ctx.font = `${20 * particle.scale}px Arial`
        ctx.fillText(particle.emoji, 0, 0)
        ctx.restore()

        particle.y += particle.speed
        particle.rotation += 0.2

        if (particle.y > canvas.height) {
          particle.y = -20
          particle.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1 }}
    />
  )
}

