import Hero from "./components/hero"
import Gallery from "./components/gallery"
import Portfolio from "./components/portfolio"
import Contact from "./components/contact"
import Footer from "./components/footer"
import AestheticParticles from "./components/aesthetic-particles"

export default function Page() {
  return (
    <main className="min-h-screen apple-bg text-foreground">
      <AestheticParticles />
      <Hero />
      <Gallery />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}

