import Hero from "./components/hero"
import Gallery from "./components/gallery"
import Portfolio from "./components/portfolio"
import Contact from "./components/contact"
import Footer from "./components/footer"
import AnimatedBackground from "./components/animated-background"

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 relative">
      <AnimatedBackground />

      <div className="relative z-10">
        <Hero />
        <Gallery />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

