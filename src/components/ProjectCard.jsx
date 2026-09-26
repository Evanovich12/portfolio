import { ArrowUpRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

export function ProjectCard({ project, index, hovered, setHovered }) {
  const isDimmed = hovered !== null && hovered !== index
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      animate={{
        filter: isDimmed ? 'blur(3px)' : 'blur(0px)',
        scale: isDimmed ? 0.98 : 1,
        opacity: isDimmed ? 0.6 : 1,
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-white/10 bg-card"
    >
      <motion.img
        style={{ y: imageY }}
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="absolute inset-0 -top-[6%] size-full h-[112%] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-95" />

      <div className="absolute top-4 left-4 flex items-center gap-2 font-mono text-xs text-white/70">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <span className="text-white/30">/</span>
        <span>04</span>
      </div>

      <div className="absolute top-4 right-4 rounded-full border border-white/15 bg-black/30 p-2 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
        <ArrowUpRight className="size-4 text-white" />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5">
        <span className="w-fit rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] text-white/80 backdrop-blur-sm">
          {project.category}
        </span>
        <h3 className="text-xl font-semibold text-white md:text-2xl">
          {project.title}
        </h3>
        <p className="text-sm text-white/60">{project.subtitle}</p>

        <p className="mt-2 line-clamp-3 max-h-0 text-sm leading-relaxed text-white/75 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
          {project.description}
        </p>
      </div>
    </motion.div>
  )
}
