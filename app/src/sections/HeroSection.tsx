export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 text-center px-4 relative" id="top">
      <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted-foreground mb-6">Modality harness</p>
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif mb-10 tracking-tight text-foreground leading-[1.12] max-w-5xl mx-auto animate-fade-in-up">
        text-native models, file-native outputs.
      </h1>
      <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
        A <strong className="text-foreground font-semibold">harness-first portability layer</strong> for text-native LLMs.
        The model stays a planner; codecs, adapters, decoders, mixers, and deterministic runtimes turn structured intent
        into real files such as <strong className="text-foreground font-semibold">PNG, WAV, HTML, JSON,</strong> and,
        once the video branch is fully wired back in, <strong className="text-foreground font-semibold">MP4</strong>.
      </p>
      <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
        The point is not to pretend a text model is already a giant native VLM. The point is to make multimodal outputs
        practical through contracts, local compute, and portable codec logic.
      </p>
      <a href="#s-layers" className="yellow-btn inline-block">
        Inspect the five layers
      </a>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {['Harness engineering', 'Typed codecs', 'Artifacts & replay'].map((label) => (
          <span
            key={label}
            className="text-xs font-medium tracking-[0.06em] uppercase text-secondary-foreground px-3 py-1.5 rounded-full bg-secondary border border-border shadow-[0_0_0_1px_hsl(var(--ring))]"
          >
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
