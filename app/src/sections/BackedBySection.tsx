const partners = [
  {
    id: 'hyperframes',
    name: 'HyperFrames',
    href: 'https://github.com/heygen-com/hyperframes',
    logo: '/logos/hyperframes.png',
    logoAlt: 'HeyGen HyperFrames',
  },
  {
    id: 'ai-hacker-house',
    name: 'AI Hacker House',
    href: 'https://crossingpodcast.com',
    logo: '/logos/crossing-podcast.png',
    logoAlt: 'AI Hacker House',
  },
  {
    id: 'effector',
    name: 'Effector',
    href: 'https://effector.wtf/',
    logo: '/logos/effector.png',
    logoAlt: 'Effector',
  },
  {
    id: 'loupe',
    name: 'loupe',
    href: 'https://github.com/Jah-yee/loupe/',
    logo: '/logos/loupe.png',
    logoAlt: 'loupe',
  },
] as const;

export default function BackedBySection() {
  return (
    <section className="py-16 px-4 border-t border-border bg-card">
      <p className="text-center text-xs font-medium text-muted-foreground uppercase tracking-[0.18em] mb-10">
        Built around:
      </p>
      <div className="max-w-4xl mx-auto flex flex-wrap items-start justify-center gap-12 md:gap-16">
        {partners.map((p) => (
          <a
            key={p.id}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 w-[10.5rem] rounded-lg outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
          >
            <span className="relative flex h-16 w-full max-w-[12rem] items-center justify-center px-2">
              <img
                src={p.logo}
                alt={p.logoAlt}
                className="max-h-14 w-auto max-w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </span>
            <span className="text-center text-sm font-medium text-secondary-foreground underline-offset-2 group-hover:underline">
              {p.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
