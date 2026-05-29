import { SectionHeading } from "./section-heading"

export function TypographySection() {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          index="4"
          kicker="Типографика"
          title="Шрифтовая пара"
          description="Технологичный заголовочный шрифт в связке с чистым и читаемым основным текстом."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {/* Heading font */}
          <div className="flex flex-col gap-4 rounded-2xl border border-brand-navy/10 bg-card p-8">
            <div className="flex items-center justify-between">
              <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand-sand">
                Заголовки
              </span>
              <span className="rounded-full bg-brand-orange/12 px-3 py-1 text-xs font-semibold text-brand-orange-dark">
                Montserrat
              </span>
            </div>
            <p className="font-display text-6xl font-extrabold leading-none text-brand-navy">
              Аа Бб
            </p>
            <p className="font-display text-2xl font-bold tracking-[0.2em] text-brand-navy">
              КИБИТКА
            </p>
            <p className="font-display text-sm text-brand-navy/50">
              ABCDEFG · АБВГДЕ · 1234567890
            </p>
          </div>

          {/* Body font */}
          <div className="flex flex-col gap-4 rounded-2xl border border-brand-navy/10 bg-card p-8">
            <div className="flex items-center justify-between">
              <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand-sand">
                Основной текст
              </span>
              <span className="rounded-full bg-brand-navy/8 px-3 py-1 text-xs font-semibold text-brand-navy">
                Open Sans
              </span>
            </div>
            <p className="font-sans text-6xl font-bold leading-none text-brand-navy">
              Аа Бб
            </p>
            <p className="font-sans text-base leading-relaxed text-brand-navy/75">
              Довезём в целости и сохранности. Чистый салон, вежливый водитель и
              прибытие точно в срок — забота о пассажире в каждой детали поездки.
            </p>
            <p className="font-sans text-sm text-brand-navy/50">
              abcdefg · абвгде · 1234567890
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
