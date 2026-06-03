import { SectionHeading } from "@/components/moodboard/section-heading"
import { PageNumber } from "./page-number"

const sections = [
  { num: "01", title: "О бренде / О компании", href: "#about" },
  { num: "02", title: "Логотип. Все варианты", href: "#logo" },
  { num: "02.1", title: "Охранное поле логотипа", href: "#logo-clearspace" },
  { num: "02.2", title: "Цветовые сочетания логотипа", href: "#logo-colors" },
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

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <a
              key={s.num}
              href={s.href}
              className="group flex items-center gap-4 rounded-xl border border-brand-navy/10 bg-card p-4 transition-colors hover:border-brand-orange/30 hover:bg-brand-orange/5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-orange/12 font-display text-sm font-bold text-brand-orange-dark transition-colors group-hover:bg-brand-orange group-hover:text-white">
                {s.num}
              </span>
              <span className="font-display text-sm font-semibold text-brand-navy">
                {s.title}
              </span>
            </a>
          ))}
        </div>
      </div>
      <PageNumber number={2} />
    </section>
  )
}
