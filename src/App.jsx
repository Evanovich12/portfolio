import { About } from '@/components/About'
import { Expertise } from '@/components/Expertise'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Projects } from '@/components/Projects'

function App() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
