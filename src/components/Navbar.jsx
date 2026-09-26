import { motion, useScroll, useMotionValueEvent } from 'motion/react'
import { useState } from 'react'

import logo from '@/assets/logo.png'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { profile } from '@/lib/content'

const links = [
  { href: '#expertise', label: 'Expertise' },
  { href: '#projets', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 16)
  })

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 transition-colors duration-300 ${
          scrolled
            ? 'border-border/80 bg-background/70 shadow-lg shadow-black/20 backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt={profile.name}
            className="size-8 rounded-full ring-1 ring-white/10"
          />
          <span className="font-mono text-sm text-muted-foreground">
            {profile.initials}
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <HoverBorderGradient
          as="a"
          href={`mailto:${profile.email}`}
          containerClassName="rounded-full"
          className="bg-background px-4 py-1.5 text-xs font-medium text-foreground md:text-sm"
        >
          Me contacter
        </HoverBorderGradient>
      </div>
    </motion.header>
  )
}
