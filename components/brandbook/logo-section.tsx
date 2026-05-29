import { SectionHeading } from "@/components/moodboard/section-heading"
import { KibitkaMark } from "@/components/moodboard/kibitka-mark"

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
          index="2"
          kicker="Практические работы №3–5 · Логотип"
          title="Логотип и его построение"
          description="Финальный знак — стилизованное ретро-такси с хромированным бампером и круглыми фарами. Тёплая форма поддерживает дружелюбный характер бренда."
        />

        {/* Main lockups */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Full lockup */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-card p-12">
            <KibitkaMark className="h-28 w-44" />
            <span className="font-display text-2xl font-bold tracking-[0.3em] text-brand-navy">
              КИБИТКА
            </span>
            <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand-sand">
              Полный логотип
            </span>
          </div>

          {/* Mark only */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-card p-12">
            <KibitkaMark className="h-28 w-44" />
            <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand-sand">
              Только знак
            </span>
          </div>
        </div>

        {/* Protective field */}
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex items-center justify-center rounded-2xl border border-brand-navy/10 bg-card p-8">
            <svg
              viewBox="0 0 320 240"
              className="h-auto w-full max-w-md"
              role="img"
              aria-label="Схема охранного поля логотипа"
            >
              {/* protective field dashed box */}
              <rect
                x="20"
                y="20"
                width="280"
                height="200"
                fill="none"
                stroke="#bdc3c7"
                strokeWidth="1.5"
                strokeDasharray="6,6"
              />
              {/* logo box */}
              <rect
                x="80"
                y="62"
                width="160"
                height="116"
                fill="none"
                stroke="#2c3e50"
                strokeWidth="1"
              />
              {/* the mark */}
              <g transform="translate(90, 70) scale(1.0)">
                <path d="M20 55 Q20 48 30 48 L110 48 Q120 48 120 55 L120 68 Q120 72 116 72 L24 72 Q20 72 20 68 Z" fill="#f39c12" />
                <path d="M38 48 L42 28 Q44 22 52 22 L88 22 Q96 22 98 28 L102 48" fill="#f39c12" />
                <path d="M46 46 L49 30 Q50 28 54 28 L66 28 Q68 28 68 30 L68 46 Z" fill="#2c3e50" />
                <path d="M72 46 L72 30 Q72 28 74 28 L86 28 Q90 28 91 30 L94 46 Z" fill="#2c3e50" />
                <rect x="18" y="68" width="104" height="4" rx="2" fill="#bdc3c7" />
                <circle cx="40" cy="76" r="12" fill="#2c3e50" />
                <circle cx="40" cy="76" r="8" fill="#ecf0f1" />
                <circle cx="100" cy="76" r="12" fill="#2c3e50" />
                <circle cx="100" cy="76" r="8" fill="#ecf0f1" />
              </g>
              {/* X measure left */}
              <line x1="50" y1="62" x2="50" y2="178" stroke="#8b7355" strokeWidth="1" />
              <text x="38" y="124" fontFamily="var(--font-display)" fontSize="14" fill="#8b7355" textAnchor="middle">X</text>
              {/* X measure bottom */}
              <line x1="20" y1="200" x2="80" y2="200" stroke="#8b7355" strokeWidth="1" />
              <text x="50" y="214" fontFamily="var(--font-display)" fontSize="14" fill="#8b7355" textAnchor="middle">X</text>
            </svg>
          </div>

          <div className="flex flex-col justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-card p-8">
            <h3 className="font-display text-lg font-semibold text-brand-navy">Охранное поле</h3>
            <p className="leading-relaxed text-brand-navy/70">
              За единицу построения принята высота колеса автомобиля —{" "}
              <span className="font-semibold text-brand-orange-dark">X</span>. Это
              минимальное расстояние от логотипа до края любого носителя и до
              других элементов макета.
            </p>
            <p className="leading-relaxed text-brand-navy/70">
              Соблюдение охранного поля гарантирует читаемость знака и сохраняет
              «воздух» вокруг него на любых поверхностях.
            </p>
          </div>
        </div>

        {/* Explored concepts */}
        <h3 className="mb-5 mt-12 font-display text-lg font-semibold text-brand-navy">
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
            Ретро-такси · выбрано
          </span>
        </div>
      </div>
    </section>
  )
}
