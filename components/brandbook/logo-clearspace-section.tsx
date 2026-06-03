import { SectionHeading } from "@/components/moodboard/section-heading"
import { KibitkaLogo } from "@/components/moodboard/kibitka-logo"
import { PageNumber } from "./page-number"

export function LogoClearspaceSection() {
  return (
    <section id="logo-clearspace" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
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

        {/* Охранное поле для только знака */}
        <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
          Охранное поле для знака без надписи
        </h3>
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex items-center justify-center rounded-2xl border border-brand-navy/10 bg-card p-8">
            <svg
              viewBox="0 0 280 220"
              className="h-auto w-full max-w-sm"
              role="img"
              aria-label="Схема охранного поля знака"
            >
              {/* clear space dashed box */}
              <rect
                x="20"
                y="20"
                width="240"
                height="180"
                fill="none"
                stroke="#bdc3c7"
                strokeWidth="1.5"
                strokeDasharray="6,6"
              />
              {/* logo bounding box */}
              <rect
                x="56"
                y="56"
                width="168"
                height="108"
                fill="none"
                stroke="#2c3e50"
                strokeWidth="1"
                opacity="0.4"
              />
              {/* the mark — centered inside rect(56,56,168,108): center=(140,110) */}
              {/* scale=1.6: original viewBox x=16..126 w=110, y=18..90 h=72 */}
              {/* scaled w=176, h=115.2; tx=140-(16+55)*1.6=140-113.6=26.4; ty=110-(18+36)*1.6=110-86.4=23.6 */}
              <g transform="translate(26, 24) scale(1.6)">
                <path d="M20 55 Q20 48 30 48 L110 48 Q120 48 120 55 L120 68 Q120 72 116 72 L24 72 Q20 72 20 68 Z" fill="#f39c12" />
                <path d="M38 48 L42 28 Q44 22 52 22 L88 22 Q96 22 98 28 L102 48" fill="#f39c12" />
                <path d="M46 46 L49 30 Q50 28 54 28 L66 28 Q68 28 68 30 L68 46 Z" fill="#2c3e50" />
                <path d="M72 46 L72 30 Q72 28 74 28 L86 28 Q90 28 91 30 L94 46 Z" fill="#2c3e50" />
                <rect x="18" y="68" width="104" height="4" rx="2" fill="#bdc3c7" />
                <circle cx="26" cy="58" r="5" fill="#ecf0f1" />
                <circle cx="114" cy="58" r="5" fill="#ecf0f1" />
                <circle cx="40" cy="76" r="12" fill="#2c3e50" />
                <circle cx="40" cy="76" r="8" fill="#ecf0f1" />
                <circle cx="40" cy="76" r="4" fill="#2c3e50" />
                <circle cx="100" cy="76" r="12" fill="#2c3e50" />
                <circle cx="100" cy="76" r="8" fill="#ecf0f1" />
                <circle cx="100" cy="76" r="4" fill="#2c3e50" />
              </g>

              {/* X measurement — top */}
              <line x1="140" y1="20" x2="140" y2="56" stroke="#8b7355" strokeWidth="1.5" />
              <line x1="136" y1="20" x2="144" y2="20" stroke="#8b7355" strokeWidth="1.5" />
              <line x1="136" y1="56" x2="144" y2="56" stroke="#8b7355" strokeWidth="1.5" />
              <text x="150" y="42" fontFamily="var(--font-display)" fontSize="13" fontWeight="700" fill="#8b7355">X</text>

              {/* X measurement — left */}
              <line x1="20" y1="110" x2="56" y2="110" stroke="#8b7355" strokeWidth="1.5" />
              <line x1="20" y1="106" x2="20" y2="114" stroke="#8b7355" strokeWidth="1.5" />
              <line x1="56" y1="106" x2="56" y2="114" stroke="#8b7355" strokeWidth="1.5" />
              <text x="38" y="100" fontFamily="var(--font-display)" fontSize="13" fontWeight="700" fill="#8b7355" textAnchor="middle">X</text>
            </svg>
          </div>

          <div className="flex flex-col justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-card p-8">
            <p className="leading-relaxed text-brand-navy/70">
              Для <strong className="text-brand-navy">знака без надписи</strong> охранное поле также 
              равно <span className="font-semibold text-brand-orange-dark">X</span> (диаметр колеса) 
              со всех четырёх сторон.
            </p>
            <p className="leading-relaxed text-brand-navy/70">
              Используйте этот вариант, когда пространство ограничено или когда знак 
              достаточно узнаваем без текстовой части.
            </p>
          </div>
        </div>

        {/* Охранное поле для горизонтальной версии */}
        <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
          Охранное поле горизонтальной версии
        </h3>
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex items-center justify-center rounded-2xl border border-brand-navy/10 bg-card p-8">
            {/*
              SVG схема горизонтальной версии:
              viewBox 0 0 460 200
              Пунктирная рамка (охранное поле): x=20 y=20 w=420 h=160
              Сплошной прямоугольник (лого-зона): x=56 y=52 w=348 h=96
              Машинка: scale=1.1, centered at ~105,100 inside logo-rect
              Текст "КИБИТКА": справа от машинки
              X-разметки: сверху и слева
            */}
            <svg
              viewBox="0 0 460 200"
              className="h-auto w-full max-w-lg"
              role="img"
              aria-label="Схема охранного поля горизонтальной версии логотипа"
            >
              {/* clear space dashed box */}
              <rect x="20" y="20" width="420" height="160" fill="none" stroke="#bdc3c7" strokeWidth="1.5" strokeDasharray="6,6" />
              {/* logo bounding box */}
              <rect x="56" y="52" width="348" height="96" fill="none" stroke="#2c3e50" strokeWidth="1" opacity="0.4" />

              {/* машинка — scale=1.1, center of logo-rect: (230,100) */}
              {/* mark width=110*1.1=121, height=72*1.1=79.2 */}
              {/* left column: mark centered at x≈105 → tx=105-(16+55)*1.1=105-78.1=26.9; ty=100-(18+36)*1.1=100-59.4=40.6 */}
              <g transform="translate(27, 41) scale(1.1)">
                <path d="M20 55 Q20 48 30 48 L110 48 Q120 48 120 55 L120 68 Q120 72 116 72 L24 72 Q20 72 20 68 Z" fill="#f39c12" />
                <path d="M38 48 L42 28 Q44 22 52 22 L88 22 Q96 22 98 28 L102 48" fill="#f39c12" />
                <path d="M46 46 L49 30 Q50 28 54 28 L66 28 Q68 28 68 30 L68 46 Z" fill="#2c3e50" />
                <path d="M72 46 L72 30 Q72 28 74 28 L86 28 Q90 28 91 30 L94 46 Z" fill="#2c3e50" />
                <rect x="18" y="68" width="104" height="4" rx="2" fill="#bdc3c7" />
                <circle cx="26" cy="58" r="5" fill="#ecf0f1" />
                <circle cx="114" cy="58" r="5" fill="#ecf0f1" />
                <circle cx="40" cy="76" r="12" fill="#2c3e50" />
                <circle cx="40" cy="76" r="8" fill="#ecf0f1" />
                <circle cx="40" cy="76" r="4" fill="#2c3e50" />
                <circle cx="100" cy="76" r="12" fill="#2c3e50" />
                <circle cx="100" cy="76" r="8" fill="#ecf0f1" />
                <circle cx="100" cy="76" r="4" fill="#2c3e50" />
              </g>

              {/* текст КИБИТКА — справа от машинки */}
              <text
                x="175"
                y="107"
                fontFamily="var(--font-display)"
                fontSize="26"
                fontWeight="700"
                fill="#2c3e50"
                letterSpacing="7"
              >
                КИБИТКА
              </text>

              {/* X — сверху */}
              <line x1="230" y1="20" x2="230" y2="52" stroke="#8b7355" strokeWidth="1.5" />
              <line x1="226" y1="20" x2="234" y2="20" stroke="#8b7355" strokeWidth="1.5" />
              <line x1="226" y1="52" x2="234" y2="52" stroke="#8b7355" strokeWidth="1.5" />
              <text x="238" y="40" fontFamily="var(--font-display)" fontSize="14" fontWeight="700" fill="#8b7355">X</text>

              {/* X — слева */}
              <line x1="20" y1="100" x2="56" y2="100" stroke="#8b7355" strokeWidth="1.5" />
              <line x1="20" y1="96" x2="20" y2="104" stroke="#8b7355" strokeWidth="1.5" />
              <line x1="56" y1="96" x2="56" y2="104" stroke="#8b7355" strokeWidth="1.5" />
              <text x="38" y="90" fontFamily="var(--font-display)" fontSize="14" fontWeight="700" fill="#8b7355" textAnchor="middle">X</text>
            </svg>
          </div>

          <div className="flex flex-col justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-card p-8">
            <p className="leading-relaxed text-brand-navy/70">
              <strong className="text-brand-navy">Горизонтальная версия</strong> используется для 
              узких пространств (хедеры сайтов, баннеры, вывески).
            </p>
            <p className="leading-relaxed text-brand-navy/70">
              Охранное поле равно <span className="font-semibold text-brand-orange-dark">X</span> 
              со всех сторон, где X — высота знака в этом масштабе.
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
      <PageNumber number={5} total={13} />
    </section>
  )
}
