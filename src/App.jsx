import { About } from '@/components/About'
import { CustomCursor } from '@/components/CustomCursor'
import { Expertise } from '@/components/Expertise'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { Navbar } from '@/components/Navbar'
import { Projects } from '@/components/Projects'
import { ScrollProgress } from '@/components/ScrollProgress'
import { SmoothScroll } from '@/components/SmoothScroll'

const marqueeItems = [
  'Web Design',
  'Communication Digitale',
  'Graphisme',
  'Motion Design',
  'Identité de marque',
]

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-svh bg-background text-foreground">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <Marquee items={marqueeItems} />
          <Expertise />
          <Projects />
          <About />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App
