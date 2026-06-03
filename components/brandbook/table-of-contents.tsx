import { SectionHeading } from "@/components/moodboard/section-heading"
import { PageNumber } from "./page-number"

const sections = [
  { num: "01", title: "О бренде / О компании", href: "#about", page: 3 },
  { num: "02", title: "Логотип. Все варианты", href: "#logo", page: 4 },
  { num: "02.1", title: "Охранное поле логотипа", href: "#logo-clearspace", page: 5 },
  { num: "02.2", title: "Цветовые сочетания логотипа", href: "#logo-colors", page: 6 },
  { num: "03", title: "Правила использования логотипа", href: "#logo-rules", page: 7 },
  { num: "04", title: "Фирменные цвета. Правила использования", href: "#colors", page: 8 },
  { num: "05", title: "Фирменные шрифты. Правила использования", href: "#typography", page: 9 },
  { num: "06", title: "Паттерн. Доп. графические элементы", href: "#patterns", page: 10 },
  { num: "07", title: "Фотостиль. Правила / Промт", href: "#photostyle", page: 11 },
  { num: "08", title: "Носители (по видам)", href: "#applications", page: 12 },
  { num: "08.1", title: "Полиграфия", href: "#applications", page: 12 },
  { num: "08.2", title: "Форма и документация", href: "#applications", page: 13 },
  { num: "08.3", title: "Цифровые носители", href: "#applications", page: 14 },
  { num: "08.4", title: "Сувенирная продукция", href: "#applications", page: 15 },
  { num: "08.5", title: "Транспорт", href: "#applications", page: 16 },
  { num: "09", title: "Рекламная кампания. Выбор носителей", href: "#campaign", page: 17 },
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
              <span className="flex-1 font-display text-sm font-semibold text-brand-navy">
                {s.title}
              </span>
              <span className="font-mono text-xs text-brand-sand shrink-0">
                {String(s.page).padStart(2, "0")}
              </span>
            </a>
          ))}
        </div>
      </div>
      <PageNumber number={2} total={13} />
    </section>
  )
}
