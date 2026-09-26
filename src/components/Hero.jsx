import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { Suspense, lazy } from 'react'

import { Spotlight } from '@/components/ui/spotlight-new'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { profile } from '@/lib/content'

const HeroScene = lazy(() =>
  import('@/components/HeroScene').then((m) => ({ default: m.HeroScene }))
)

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-grid px-6 pt-28 pb-16"
    >
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(265, 100%, 75%, .18) 0, hsla(265, 100%, 55%, .04) 50%, hsla(265, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(265, 100%, 75%, .12) 0, hsla(265, 100%, 55%, .04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(190, 100%, 65%, .1) 0, hsla(190, 100%, 45%, .04) 80%, transparent 100%)"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary md:text-sm"
          >
            <Sparkles className="size-3.5" />
            {profile.availability}
          </motion.div>

          <p className="mb-3 font-mono text-sm text-muted-foreground md:text-base">
            Bonjour 👋 je m’appelle
          </p>

          <motion.h1
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.65, 0, 0.08, 1] }}
            className="text-gradient text-5xl leading-[1.05] font-semibold tracking-tight md:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <div className="mt-6 max-w-xl">
            <TextGenerateEffect
              words={profile.tagline}
              className="text-lg font-normal text-muted-foreground md:text-xl"
              duration={0.4}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projets"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Découvrir mon travail
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/5"
            >
              Travaillons ensemble
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </motion.div>
      </div>

      <motion.a
        href="#expertise"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground md:flex"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  )
}
