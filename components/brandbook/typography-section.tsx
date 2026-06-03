import { SectionHeading } from "@/components/moodboard/section-heading"
import { Check, X } from "lucide-react"
import { PageNumber } from "./page-number"

const scale = [
  { label: "H1 Заголовок", className: "font-display text-5xl font-extrabold", note: "Montserrat ExtraBold 48px" },
  { label: "H2 Подзаголовок", className: "font-display text-3xl font-bold", note: "Montserrat Bold 30px" },
  { label: "H3 Раздел", className: "font-display text-xl font-semibold", note: "Montserrat SemiBold 20px" },
  { label: "Body Текст", className: "font-sans text-base", note: "Open Sans Regular 16px" },
  { label: "Caption Подпись", className: "font-sans text-sm text-brand-navy/60", note: "Open Sans 14px" },
]

const typoDos = [
  "Использовать Montserrat для заголовков",
  "Использовать Open Sans для основного текста",
  "Соблюдать иерархию размеров",
  "Выдерживать межстрочный интервал 1.4-1.6",
]

const typoDonts = [
  "Смешивать с другими шрифтовыми парами",
  "Использовать курсив для заголовков",
  "Делать текст меньше 14px",
  "Применять декоративные шрифты",
]

export function TypographySection() {
  return (
    <section id="typography" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          index="05"
          kicker="Типографика"
          title="Фирменные шрифты"
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
            <p className="font-display text-sm text-brand-navy/50">ABCDEFG АБВГДЕ 1234567890</p>
            <div className="mt-2 rounded-lg bg-brand-cream/60 p-3 text-xs text-brand-navy/60">
              <p><strong>Начертания:</strong> SemiBold (600), Bold (700), ExtraBold (800)</p>
              <p className="mt-1"><strong>Лицензия:</strong> Open Font License</p>
            </div>
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
            <p className="font-sans text-sm text-brand-navy/50">abcdefg абвгде 1234567890</p>
            <div className="mt-2 rounded-lg bg-brand-cream/60 p-3 text-xs text-brand-navy/60">
              <p><strong>Начертания:</strong> Regular (400), Medium (500), SemiBold (600), Bold (700)</p>
              <p className="mt-1"><strong>Лицензия:</strong> Open Font License</p>
            </div>
          </div>
        </div>

        {/* Type scale */}
        <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
          Типографическая шкала
        </h3>
        <div className="flex flex-col divide-y divide-brand-navy/10 rounded-2xl border border-brand-navy/10 bg-card p-8">
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

        {/* Typography rules */}
        <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
          Правила использования шрифтов
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-brand-green/30 bg-card p-7">
            <h4 className="mb-4 flex items-center gap-2 font-display font-semibold text-brand-green">
              <Check className="h-5 w-5" aria-hidden="true" /> Правильно
            </h4>
            <ul className="flex flex-col gap-3">
              {typoDos.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-brand-navy/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-brand-red/30 bg-card p-7">
            <h4 className="mb-4 flex items-center gap-2 font-display font-semibold text-brand-red">
              <X className="h-5 w-5" aria-hidden="true" /> Недопустимо
            </h4>
            <ul className="flex flex-col gap-3">
              {typoDonts.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-brand-navy/80">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <PageNumber number={9} total={13} />
    </section>
  )
}
