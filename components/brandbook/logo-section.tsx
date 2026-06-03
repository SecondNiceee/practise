import { SectionHeading } from "@/components/moodboard/section-heading"
import { KibitkaMark } from "@/components/moodboard/kibitka-mark"
import { KibitkaLogo } from "@/components/moodboard/kibitka-logo"
import { PageNumber } from "./page-number"

const concepts = [
  "Классическое такси",
  "Минималистичная",
  "Геометричная",
  "Колесо с машиной",
  "Силуэт",
  "Геолокация",
]

export function LogoSection() {
  return (
    <section id="logo" className="scroll-mt-20 bg-brand-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          index="02"
          kicker="Логотип"
          title="Логотип и варианты использования"
          description="Финальный знак — стилизованное ретро-такси с хромированным бампером и круглыми фарами. Тёплая форма поддерживает дружелюбный характер бренда."
        />

        {/* 1. ВСЕ ВИДЫ ЛОГОТИПА */}
        <h3 className="mb-5 font-display text-lg font-semibold text-brand-navy">
          Все виды логотипа
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Полный логотип */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-card p-8">
            <KibitkaLogo size="md" caption="Такси-сервис" />
            <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand-sand">
              Полный логотип
            </span>
          </div>

          {/* Горизонтальная версия */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-card p-8">
            <div className="flex items-center gap-3">
              <KibitkaMark className="h-12 w-20" />
              <span className="font-display text-lg font-bold tracking-[0.2em] text-brand-navy">
                КИБИТКА
              </span>
            </div>
            <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand-sand">
              Горизонтальная версия
            </span>
          </div>

          {/* Только знак */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-card p-8">
            <KibitkaMark className="h-20 w-32" />
            <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand-sand">
              Только знак
            </span>
          </div>

          {/* Только надпись */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-card p-8">
            <div className="flex flex-col items-center gap-1">
              <span className="font-display text-2xl font-bold tracking-[0.3em] text-brand-navy">
                КИБИТКА
              </span>
              <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand-orange-dark">
                Такси-сервис
              </span>
            </div>
            <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand-sand">
              Только надпись
            </span>
          </div>
        </div>

        {/* Проработанные концепции */}
        <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
          Проработанные концепции знака
        </h3>
        <div className="flex flex-wrap gap-3">
          {concepts.map((c) => (
            <span
              key={c}
              className="rounded-full border border-brand-navy/15 bg-card px-4 py-2 text-sm font-medium text-brand-navy/70"
            >
              {c}
            </span>
          ))}
          <span className="rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white">
            Ретро-такси (выбрано)
          </span>
        </div>
      </div>
      <PageNumber number={3} />
    </section>
  )
}
