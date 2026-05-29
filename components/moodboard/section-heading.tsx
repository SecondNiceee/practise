type SectionHeadingProps = {
  index: string
  kicker: string
  title: string
  description?: string
  light?: boolean
}

export function SectionHeading({ index, kicker, title, description, light }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:mb-14">
      <div className="flex items-center gap-4">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold ${
            light ? "bg-brand-orange text-white" : "bg-brand-navy text-white"
          }`}
        >
          {index}
        </span>
        <span
          className={`font-display text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "text-white/60" : "text-brand-sand"
          }`}
        >
          {kicker}
        </span>
      </div>
      <h2
        className={`text-balance font-display text-3xl font-bold leading-tight md:text-4xl ${
          light ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-2xl text-pretty text-base leading-relaxed md:text-lg ${
            light ? "text-white/70" : "text-brand-navy/70"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
