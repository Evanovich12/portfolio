import { Megaphone, Palette, PenTool, Video } from 'lucide-react'

import { Reveal } from '@/components/Reveal'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { expertise } from '@/lib/content'

const icons = [PenTool, Megaphone, Palette, Video]

export function Expertise() {
  const items = expertise.map((item, i) => {
    const Icon = icons[i]
    return {
      ...item,
      icon: (
        <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="size-5" />
        </span>
      ),
    }
  })

  return (
    <section id="expertise" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 font-mono text-sm text-primary">
            Mes domaines d’expertise
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
            Ce que je peux apporter à votre univers digital
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <HoverEffect items={items} className="!py-8 lg:grid-cols-4" />
        </Reveal>
      </div>
    </section>
  )
}
