import { motion, useMotionValue, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'

function supportsFineHover() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches
}

export function CustomCursor() {
  const [enabled] = useState(supportsFineHover)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    if (!enabled) return

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e) => {
      setHovering(Boolean(e.target.closest('a, button, [data-cursor-hover]')))
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [x, y, enabled])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      style={{ x: springX, y: springY }}
      animate={{ scale: hovering ? 2.4 : 1 }}
      transition={{ scale: { duration: 0.25, ease: 'easeOut' } }}
      className="pointer-events-none fixed top-0 left-0 z-[70] size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary mix-blend-difference hidden md:block"
    />
  )
}
