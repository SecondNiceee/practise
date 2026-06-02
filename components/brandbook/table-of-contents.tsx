import { SectionHeading } from "@/components/moodboard/section-heading"

const sections = [
  { num: "01", title: "О бренде / О компании", href: "#about" },
  { num: "02", title: "Логотип. Варианты. Охранное поле", href: "#logo" },
  { num: "03", title: "Правила использования логотипа", href: "#logo-rules" },
  { num: "04", title: "Фирменные цвета. Правила использования", href: "#colors" },
  { num: "05", title: "Фирменные шрифты. Правила использования", href: "#typography" },
  { num: "06", title: "Паттерн. Доп. графические элементы", href: "#patterns" },
  { num: "07", title: "Фотостиль. Правила / Промт", href: "#photostyle" },
  { num: "08", title: "Носители (по видам)", href: "#applications" },
  { num: "09", title: "Рекламная кампания. Выбор носителей", href: "#campaign" },
]

export function TableOfContents() {
  return (
    <section id="contents" className="scroll-mt-20 bg-brand-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          kicker="Содержание"
          title="Оглавление"
          description="Структура брендбука такси-сервиса «Кибитка»"
        />

        <div className="grid gap-3 md:grid-cols-2">
          {sections.map((s) => (
            <a
              key={s.num}
              href={s.href}
              className="group flex items-center gap-4 rounded-xl border border-brand-navy/10 bg-card p-5 transition-colors hover:border-brand-orange/30 hover:bg-brand-orange/5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-orange/12 font-display text-lg font-bold text-brand-orange-dark transition-colors group-hover:bg-brand-orange group-hover:text-white">
                {s.num}
              </span>
              <span className="font-display text-sm font-semibold text-brand-navy md:text-base">
                {s.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
