import { motion } from 'motion/react'

export function Marquee({ items, duration = 24 }) {
  const track = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-card/40 py-5">
      <motion.div
        className="flex w-max items-center gap-10"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-mono text-sm tracking-widest text-muted-foreground uppercase"
          >
            {item}
            <span className="text-primary">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
