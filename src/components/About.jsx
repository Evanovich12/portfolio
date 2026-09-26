import { Mail } from 'lucide-react'

import { Reveal } from '@/components/Reveal'
import { Meteors } from '@/components/ui/meteors'
import { Button as MovingBorderButton } from '@/components/ui/moving-border'
import { profile } from '@/lib/content'

export function About() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-card px-6 py-16 text-center md:px-16">
        <Meteors number={24} />

        <Reveal className="relative z-10 flex flex-col items-center">
          <p className="mb-4 font-mono text-sm text-primary">
            {profile.availability}
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
            Travaillons ensemble
          </h2>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            {profile.objective}
          </p>

          <div className="mt-10">
            <MovingBorderButton
              as="a"
              href={`mailto:${profile.email}`}
              borderRadius="9999px"
              duration={3500}
              containerClassName="h-14 w-auto"
              borderClassName="bg-[radial-gradient(#8b5cf6_40%,transparent_60%)]"
              className="gap-2 border-white/10 bg-background/80 px-8 text-base font-medium text-foreground"
            >
              <Mail className="size-4" />
              {profile.email}
            </MovingBorderButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
