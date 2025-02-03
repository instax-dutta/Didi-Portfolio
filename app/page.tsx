import Hero from "./components/hero"
import Gallery from "./components/gallery"
import Portfolio from "./components/portfolio"
import Contact from "./components/contact"
import Footer from "./components/footer"
import FloralParticles from "./components/floral-particles"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground floral-bg">
      <FloralParticles />
      <Hero />
      <Gallery />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}

