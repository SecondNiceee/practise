import { SectionHeading } from "@/components/moodboard/section-heading"
import { KibitkaMark } from "@/components/moodboard/kibitka-mark"
import { KibitkaLogo } from "@/components/moodboard/kibitka-logo"

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
          kicker="Логотип"
          title="Логотип и его построение"
          description="Финальный знак — стилизованное ретро-такси с хромированным бампером и круглыми фарами. Тёплая форма поддерживает дружелюбный характер бренда."
        />

        {/* Main lockups */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Full lockup */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-brand-navy/10 bg-card p-12">
            <KibitkaLogo size="lg" caption="Полный логотип" />
          </div>

          {/* Mark only */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-card p-12">
            <KibitkaMark className="h-24 w-40" />
            <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand-sand">
              Только знак
            </span>
          </div>
        </div>

        {/* Protective field */}
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex items-center justify-center rounded-2xl border border-brand-navy/10 bg-card p-8">
            <svg
              viewBox="0 0 360 300"
              className="h-auto w-full max-w-md"
              role="img"
              aria-label="Схема охранного поля логотипа: отступ равен диаметру колеса"
            >
              {/* clear space dashed box (margin = X on every side) */}
              <rect
                x="28"
                y="36"
                width="304"
                height="228"
                fill="none"
                stroke="#bdc3c7"
                strokeWidth="1.5"
                strokeDasharray="6,6"
              />
              {/* logo bounding box */}
              <rect
                x="76"
                y="84"
                width="208"
                height="132"
                fill="none"
                stroke="#2c3e50"
                strokeWidth="1"
                opacity="0.4"
              />
              {/* the mark, scaled x2, content top-left aligned to (76,84) */}
              <g transform="translate(40, 40) scale(2)">
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

              {/* X = wheel diameter, measured on the right wheel (cx240, cy192, r24 → 168..216) */}
              <line x1="264" y1="168" x2="304" y2="168" stroke="#8b7355" strokeWidth="1" strokeDasharray="3,3" />
              <line x1="264" y1="216" x2="304" y2="216" stroke="#8b7355" strokeWidth="1" strokeDasharray="3,3" />
              <line x1="300" y1="168" x2="300" y2="216" stroke="#8b7355" strokeWidth="1.5" />
              <line x1="296" y1="168" x2="304" y2="168" stroke="#8b7355" strokeWidth="1.5" />
              <line x1="296" y1="216" x2="304" y2="216" stroke="#8b7355" strokeWidth="1.5" />
              <text x="314" y="196" fontFamily="var(--font-display)" fontSize="15" fontWeight="700" fill="#8b7355">X</text>

              {/* top clear space = X (vertical, between outer 36 and inner 84) */}
              <line x1="180" y1="36" x2="180" y2="84" stroke="#8b7355" strokeWidth="1.5" />
              <line x1="176" y1="36" x2="184" y2="36" stroke="#8b7355" strokeWidth="1.5" />
              <line x1="176" y1="84" x2="184" y2="84" stroke="#8b7355" strokeWidth="1.5" />
              <text x="190" y="64" fontFamily="var(--font-display)" fontSize="15" fontWeight="700" fill="#8b7355">X</text>

              {/* left clear space = X (horizontal, between outer 28 and inner 76) */}
              <line x1="28" y1="150" x2="76" y2="150" stroke="#8b7355" strokeWidth="1.5" />
              <line x1="28" y1="146" x2="28" y2="154" stroke="#8b7355" strokeWidth="1.5" />
              <line x1="76" y1="146" x2="76" y2="154" stroke="#8b7355" strokeWidth="1.5" />
              <text x="52" y="142" fontFamily="var(--font-display)" fontSize="15" fontWeight="700" fill="#8b7355" textAnchor="middle">X</text>
            </svg>
          </div>

          <div className="flex flex-col justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-card p-8">
            <h3 className="font-display text-lg font-semibold text-brand-navy">Охранное поле</h3>
            <p className="leading-relaxed text-brand-navy/70">
              За единицу построения принят диаметр колеса автомобиля —{" "}
              <span className="font-semibold text-brand-orange-dark">X</span>.
              Именно эта величина отложена со всех сторон знака: отступ сверху,
              снизу и по бокам равен <span className="font-semibold text-brand-orange-dark">X</span>{" "}
              и является минимальным расстоянием до края носителя и других
              элементов макета.
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
