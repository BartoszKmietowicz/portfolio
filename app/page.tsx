import GradientBlob from "@/components/Blob"
import Navigation from "@/components/Navigation"

import { Footer } from "@/containers/Footer"
import { Projects } from "@/containers/Projects"
import { Contact } from "@/containers/Contact"
import { About } from "@/containers/About"
import { Hero } from "@/containers/Hero"
import { TechStack } from "@/containers/Tech-stack"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <GradientBlob />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <Navigation />
        <main className="pt-24 pb-32">
          <Hero />
          <About />
          <Projects />
          <TechStack/>
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

