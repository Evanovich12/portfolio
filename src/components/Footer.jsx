import { profile } from '@/lib/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <p>
          © {year} {profile.name}. Tous droits réservés.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="transition-colors hover:text-foreground"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  )
}
