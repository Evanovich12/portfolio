import { useState } from 'react'

import { ProjectCard } from '@/components/ProjectCard'
import { Reveal } from '@/components/Reveal'
import { projects } from '@/lib/content'

import casaHinata from '@/assets/projects/casa-hinata.jpg'
import hoze from '@/assets/projects/hoze.jpg'
import karadoc from '@/assets/projects/karadoc.jpg'
import nightpass from '@/assets/projects/nightpass.jpg'

const images = { 'casa-hinata': casaHinata, hoze, karadoc, nightpass }

export function Projects() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="projets" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-mono text-sm text-primary">Certains de mes travaux</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              Projets récents
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Sites web, identités de marque et campagnes de communication —
            survolez un projet pour en savoir plus.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard
                project={{ ...project, image: images[project.image] }}
                index={index}
                hovered={hovered}
                setHovered={setHovered}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
