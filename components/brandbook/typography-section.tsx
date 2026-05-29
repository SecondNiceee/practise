import { SectionHeading } from "@/components/moodboard/section-heading"

const scale = [
  { label: "H1 · Заголовок", className: "font-display text-5xl font-extrabold", note: "Montserrat ExtraBold · 48px" },
  { label: "H2 · Подзаголовок", className: "font-display text-3xl font-bold", note: "Montserrat Bold · 30px" },
  { label: "H3 · Раздел", className: "font-display text-xl font-semibold", note: "Montserrat SemiBold · 20px" },
  { label: "Body · Текст", className: "font-sans text-base", note: "Open Sans Regular · 16px" },
  { label: "Caption · Подпись", className: "font-sans text-sm text-brand-navy/60", note: "Open Sans · 14px" },
]

export function TypographySection() {
  return (
    <section id="typography" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          index="5"
          kicker="Типографика"
          title="Шрифты и иерархия"
          description="Технологичный заголовочный Montserrat в связке с чистым и читаемым Open Sans для основного текста."
        />

        {/* Font pair */}
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl border border-brand-navy/10 bg-card p-8">
            <div className="flex items-center justify-between">
              <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand-sand">
                Заголовки
              </span>
              <span className="rounded-full bg-brand-orange/12 px-3 py-1 text-xs font-semibold text-brand-orange-dark">
                Montserrat
              </span>
            </div>
            <p className="font-display text-6xl font-extrabold leading-none text-brand-navy">Аа Бб</p>
            <p className="font-display text-2xl font-bold tracking-[0.2em] text-brand-navy">КИБИТКА</p>
            <p className="font-display text-sm text-brand-navy/50">ABCDEFG · АБВГДЕ · 1234567890</p>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-brand-navy/10 bg-card p-8">
            <div className="flex items-center justify-between">
              <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand-sand">
                Основной текст
              </span>
              <span className="rounded-full bg-brand-navy/8 px-3 py-1 text-xs font-semibold text-brand-navy">
                Open Sans
              </span>
            </div>
            <p className="font-sans text-6xl font-bold leading-none text-brand-navy">Аа Бб</p>
            <p className="font-sans text-base leading-relaxed text-brand-navy/75">
              Довезём в целости и сохранности. Чистый салон, вежливый водитель и
              прибытие точно в срок — забота о пассажире в каждой детали поездки.
            </p>
            <p className="font-sans text-sm text-brand-navy/50">abcdefg · абвгде · 1234567890</p>
          </div>
        </div>

        {/* Type scale */}
        <div className="mt-4 flex flex-col divide-y divide-brand-navy/10 rounded-2xl border border-brand-navy/10 bg-card p-8">
          {scale.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-2 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <span className={`${s.className} text-brand-navy`}>{s.label}</span>
              <span className="shrink-0 font-mono text-xs text-brand-sand">{s.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
