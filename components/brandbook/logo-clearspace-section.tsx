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
              viewBox="0 0 560 180"
              className="h-auto w-full max-w-lg"
              role="img"
              aria-label="Схема охранного поля горизонтальной версии логотипа"
            >
              {/* Охранное поле — пунктирная рамка: отступ X со всех сторон */}
              {/* X = диаметр колеса = 24 */}
              <rect x="24" y="24" width="512" height="132" fill="none" stroke="#bdc3c7" strokeWidth="1.5" strokeDasharray="6,6" />
              
              {/* Лого-зона — сплошная граница */}
              <rect x="48" y="42" width="464" height="96" fill="none" stroke="#2c3e50" strokeWidth="1.5" opacity="0.5" />

              {/* Машинка — правильная, с диаметром колеса = 24 (X) */}
              {/* Машинка: ширина ~80, высота ~44, колёса диаметром 24 */}
              {/* Размещаем: левый край машинки на x=80, центр по y=90 */}
              <g>
                {/* Кузов */}
                <rect x="80" y="82" width="56" height="16" rx="2" fill="#f39c12" />
                {/* Крыша */}
                <rect x="92" y="68" width="32" height="14" rx="2" fill="#f39c12" />
                {/* Передний бампер */}
                <rect x="76" y="98" width="8" height="4" fill="#bdc3c7" />
                {/* Задний бампер */}
                <rect x="136" y="98" width="8" height="4" fill="#bdc3c7" />
                
                {/* Окна */}
                <rect x="95" y="72" width="8" height="8" rx="1" fill="#2c3e50" />
                <rect x="112" y="72" width="8" height="8" rx="1" fill="#2c3e50" />
                
                {/* Левое колесо: центр (95, 106), диаметр 24 */}
                <circle cx="95" cy="106" r="12" fill="#2c3e50" />
                <circle cx="95" cy="106" r="8" fill="#34495e" />
                <circle cx="95" cy="106" r="4" fill="#ecf0f1" />
                
                {/* Правое колесо: центр (137, 106), диаметр 24 */}
                <circle cx="137" cy="106" r="12" fill="#2c3e50" />
                <circle cx="137" cy="106" r="8" fill="#34495e" />
                <circle cx="137" cy="106" r="4" fill="#ecf0f1" />
              </g>

              {/* Текст КИБИТКА */}
              <text
                x="280"
                y="104"
                fontFamily="var(--font-display)"
                fontSize="32"
                fontWeight="700"
                fill="#2c3e50"
                letterSpacing="8"
              >
                КИБИТКА
              </text>

              {/* X-разметка сверху (вертикальная, показывает охранное расстояние) */}
              {/* X = 24 */}
              <line x1="36" y1="24" x2="36" y2="48" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="30" y1="24" x2="42" y2="24" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="30" y1="48" x2="42" y2="48" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <text x="18" y="41" fontFamily="var(--font-display)" fontSize="16" fontWeight="700" fill="#8b7355" textAnchor="middle" dominantBaseline="middle">X</text>

              {/* X-разметка слева (горизонтальная, показывает охранное расстояние) */}
              {/* X = 24 */}
              <line x1="24" y1="156" x2="48" y2="156" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="24" y1="150" x2="24" y2="162" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="48" y1="150" x2="48" y2="162" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <text x="36" y="172" fontFamily="var(--font-display)" fontSize="16" fontWeight="700" fill="#8b7355" textAnchor="middle">X</text>
            </svg>
          </div>

          <div className="flex flex-col justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-card p-8">
            <p className="leading-relaxed text-brand-navy/70">
              <strong className="text-brand-navy">Горизонтальная версия</strong> используется для 
              узких пространств (хедеры сайтов, баннеры, вывески).
            </p>
            <p className="leading-relaxed text-brand-navy/70">
              Охранное поле равно <span className="font-semibold text-brand-orange-dark">X</span> 
              (диаметр колеса) со всех сторон. Это минимальное расстояние от логотипа до края носителя 
              или соседних элементов.
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
