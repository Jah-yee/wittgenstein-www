const partners = [
  { id: 'typed-contracts', name: 'Typed contracts' },
  { id: 'artifact-spine', name: 'Artifact spine' },
  { id: 'frozen-decoders', name: 'Frozen decoders' },
] as const;

export default function BackedBySection() {
  return (
    <section className="py-16 px-4 border-t border-border bg-card">
      <p className="text-center text-xs font-medium text-muted-foreground uppercase tracking-[0.18em] mb-10">
        Built around:
      </p>
      <div className="max-w-4xl mx-auto flex flex-wrap items-start justify-center gap-12 md:gap-16">
        {partners.map((p) => (
          <div key={p.id} className="flex flex-col items-center gap-3 w-[9.5rem]">
            <div
              className="flex h-14 w-full max-w-[11rem] items-center justify-center rounded-lg border border-dashed border-border bg-muted/60 text-[0.65rem] font-mono uppercase tracking-wider text-muted-foreground"
              aria-hidden
            >
              Logo
            </div>
            <span className="text-center text-sm font-medium text-secondary-foreground">{p.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
