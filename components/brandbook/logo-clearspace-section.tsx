import { SectionHeading } from "@/components/moodboard/section-heading"
import { SlideWrapper } from "./slide-wrapper"

export function LogoClearspaceSection() {
  return (
    <SlideWrapper slideNumber={5} totalSlides={24} variant="light">
      <section id="logo-clearspace" className="flex min-h-screen flex-col justify-center scroll-mt-20 px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="02.1"
            kicker="Охранное поле"
            title="Охранное поле логотипа"
            description="За единицу построения принят диаметр колеса автомобиля — X. Это минимальное расстояние от знака до края носителя или других элементов макета."
          />

          {/* Охранное поле для полного логотипа */}
          <h3 className="mb-5 font-display text-lg font-semibold text-brand-navy">
            Охранное поле полного логотипа
          </h3>
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex items-center justify-center rounded-2xl border border-brand-navy/10 bg-card p-8">
              <svg
                viewBox="0 0 360 340"
                className="h-auto w-full max-w-md"
                role="img"
                aria-label="Схема охранного поля полного логотипа"
              >
                {/* clear space dashed box */}
                <rect
                  x="28"
                  y="36"
                  width="304"
                  height="268"
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
                  height="172"
                  fill="none"
                  stroke="#2c3e50"
                  strokeWidth="1"
                  opacity="0.4"
                />
                {/* the mark, scaled x2 */}
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
                {/* Wordmark */}
                <text x="180" y="250" fontFamily="var(--font-display)" fontSize="22" fontWeight="700" fill="#2c3e50" textAnchor="middle" letterSpacing="8">
                  КИБИТКА
                </text>

                {/* X measurement on right */}
                <line x1="264" y1="168" x2="304" y2="168" stroke="#8b7355" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="264" y1="216" x2="304" y2="216" stroke="#8b7355" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="300" y1="168" x2="300" y2="216" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="296" y1="168" x2="304" y2="168" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="296" y1="216" x2="304" y2="216" stroke="#8b7355" strokeWidth="1.5" />
                <text x="314" y="196" fontFamily="var(--font-display)" fontSize="15" fontWeight="700" fill="#8b7355">X</text>

                {/* top clear space */}
                <line x1="180" y1="36" x2="180" y2="84" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="176" y1="36" x2="184" y2="36" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="176" y1="84" x2="184" y2="84" stroke="#8b7355" strokeWidth="1.5" />
                <text x="190" y="64" fontFamily="var(--font-display)" fontSize="15" fontWeight="700" fill="#8b7355">X</text>

                {/* left clear space */}
                <line x1="28" y1="150" x2="76" y2="150" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="28" y1="146" x2="28" y2="154" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="76" y1="146" x2="76" y2="154" stroke="#8b7355" strokeWidth="1.5" />
                <text x="52" y="142" fontFamily="var(--font-display)" fontSize="15" fontWeight="700" fill="#8b7355" textAnchor="middle">X</text>
              </svg>
            </div>

            <div className="flex flex-col justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-card p-8">
              <p className="leading-relaxed text-brand-navy/70">
                Для <strong className="text-brand-navy">полного логотипа</strong> (знак + надпись) охранное поле равно{" "}
                <span className="font-semibold text-brand-orange-dark">X</span> со всех сторон.
                Никакие элементы макета не должны находиться ближе этого расстояния.
              </p>
              <p className="leading-relaxed text-brand-navy/70">
                <span className="font-semibold text-brand-orange-dark">X</span> — это диаметр колеса 
                автомобиля в знаке. Эта единица сохраняется при любом масштабировании логотипа.
              </p>
            </div>
          </div>

          {/* Важно */}
          <div className="mt-10 rounded-2xl border-2 border-brand-orange/30 bg-brand-orange/5 p-8">
            <h4 className="mb-3 font-display font-semibold text-brand-orange-dark">
              Важно
            </h4>
            <p className="leading-relaxed text-brand-navy/80">
              Соблюдение охранного поля <strong>обязательно для всех версий логотипа</strong>. 
              Это гарантирует читаемость знака, сохраняет «воздух» вокруг него и поддерживает 
              визуальную целостность бренда на любых носителях.
            </p>
          </div>
        </div>
      </section>
    </SlideWrapper>
  )
}
