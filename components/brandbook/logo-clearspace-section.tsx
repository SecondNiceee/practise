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
              {/*
                Знак (машинка):
                  Оригинал viewBox: x=16..126 (w=110), y=18..90 (h=72)
                  Колесо: r=12 → диаметр 24
                  
                  Scale 1.6: машинка 176×115.2
                  Diametр колеса при scale 1.6: 24*1.6 = 38.4 ≈ 38 (это X)
                  
                  SVG viewBox = 280×220
                  Центр машинки: x=140, y=110
                  Границы машинки: 
                    left:   140 - 176/2 = 140 - 88 = 52
                    right:  140 + 88 = 228
                    top:    110 - 115.2/2 = 110 - 57.6 = 52.4 ≈ 52
                    bottom: 110 + 57.6 = 167.6 ≈ 168
                  
                  Охранное поле (пунктир) прилегает на X=38:
                    left:   52 - 38 = 14
                    right:  228 + 38 = 266
                    top:    52 - 38 = 14
                    bottom: 168 + 38 = 206
                    width:  266 - 14 = 252
                    height: 206 - 14 = 192
              */}
              {/* Охранное поле — пунктирная рамка */}
              <rect x="14" y="14" width="252" height="192" fill="none" stroke="#bdc3c7" strokeWidth="1.5" strokeDasharray="6,6" />

              {/* Лого-зона (машинка) — сплошная граница */}
              <rect x="55" y="52" width="167" height="116" fill="none" stroke="#2c3e50" strokeWidth="1" opacity="0.4" />

              {/* Машинка scale 1.6, центрирована */}
              {/* tx = 140 - (16+55)*1.6 = 140 - 113.6 = 26.4, ty = 110 - (18+36)*1.6 = 110 - 86.4 = 23.6 */}
              <g transform="translate(26.4, 23.6) scale(1.6)">
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

              {/* ── Разметка X со всех четырёх сторон ── */}

              {/* СВЕРХУ: охранное поле → машинка (y: 14 → 52), x=140 */}
              <line x1="140" y1="14" x2="140" y2="52" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="136" y1="14" x2="144" y2="14" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="136" y1="52" x2="144" y2="52" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <text x="155" y="37" fontFamily="var(--font-display)" fontSize="13" fontWeight="700" fill="#8b7355">X</text>

              {/* СЛЕВА: охранное поле → машинка (x: 14 → 52), y=110 */}
              <line x1="14" y1="110" x2="52" y2="110" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="14" y1="106" x2="14" y2="114" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="52" y1="106" x2="52" y2="114" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <text x="33" y="100" fontFamily="var(--font-display)" fontSize="13" fontWeight="700" fill="#8b7355" textAnchor="middle">X</text>

              {/* СПРАВА: машинка → охранное поле (x: 228 → 266), y=110 */}
              <line x1="228" y1="110" x2="266" y2="110" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="228" y1="106" x2="228" y2="114" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="266" y1="106" x2="266" y2="114" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <text x="247" y="100" fontFamily="var(--font-display)" fontSize="13" fontWeight="700" fill="#8b7355" textAnchor="middle">X</text>

              {/* СНИЗУ: машинка → охранное поле (y: 168 → 206), x=140 */}
              <line x1="140" y1="168" x2="140" y2="206" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="136" y1="168" x2="144" y2="168" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="136" y1="206" x2="144" y2="206" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <text x="155" y="193" fontFamily="var(--font-display)" fontSize="13" fontWeight="700" fill="#8b7355">X</text>
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
              Координаты:
              Логотип (лого-зона): x=60 y=50 w=330 h=90
                — машинка: от x=60 до x=192 (ширина=132), scale 1.2 от оригинала 110px
                — текст КИБИТКА: от x=204 до x=390
              X = диаметр колеса при scale 1.2 = 12*2*1.2 = 28.8 ≈ 29

              Охранное поле (пунктир): прилегает к лого-зоне снаружи на X=29
                left:   60 - 29 = 31   → x=31
                right:  390 + 29 = 419 → x+w = 419 → w = 419-31 = 388
                top:    50 - 29 = 21   → y=21
                bottom: 140 + 29 = 169 → h = 169-21 = 148
            */}
            <svg
              viewBox="0 0 460 190"
              className="h-auto w-full max-w-lg"
              role="img"
              aria-label="Схема охранного поля горизонтальной версии логотипа"
            >
              {/* Охранное поле — пунктирная рамка, прилегает к лого-зоне с отступом X=29 */}
              <rect x="31" y="21" width="388" height="148" fill="none" stroke="#bdc3c7" strokeWidth="1.5" strokeDasharray="6,6" />

              {/* Лого-зона — сплошная граница */}
              <rect x="60" y="50" width="330" height="90" fill="none" stroke="#2c3e50" strokeWidth="1" opacity="0.4" />

              {/* Машинка, scale 1.2, вписана в лого-зону слева */}
              {/* Оригинал: viewBox 16 18 110 72 → scale 1.2 → 132×86.4 */}
              {/* translate так, чтобы машинка заняла x=60..192, центр по y=95: */}
              {/* tx = 60 - 16*1.2 = 60 - 19.2 = 40.8, ty = 95 - (18+36)*1.2 = 95 - 64.8 = 30.2 */}
              <g transform="translate(40.8, 30.2) scale(1.2)">
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

              {/* Текст КИБИТКА — справа от машинки, x=204, baseline y=101 */}
              <text
                x="204"
                y="101"
                fontFamily="var(--font-display)"
                fontSize="28"
                fontWeight="700"
                fill="#2c3e50"
                letterSpacing="6"
              >
                КИБИТКА
              </text>

              {/* ── Разметка X ── */}

              {/* СЛЕВА: пунктир → машинка (x: 31 → 60), y=95 */}
              <line x1="31" y1="95" x2="60" y2="95" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="31" y1="89" x2="31" y2="101" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="60" y1="89" x2="60" y2="101" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <text x="45.5" y="86" fontFamily="var(--font-display)" fontSize="13" fontWeight="700" fill="#8b7355" textAnchor="middle">X</text>

              {/* СПРАВА: надпись → пунктир (x: 390 → 419), y=95 */}
              <line x1="390" y1="95" x2="419" y2="95" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="390" y1="89" x2="390" y2="101" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="419" y1="89" x2="419" y2="101" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <text x="404.5" y="86" fontFamily="var(--font-display)" fontSize="13" fontWeight="700" fill="#8b7355" textAnchor="middle">X</text>

              {/* СВЕРХУ: пунктир → лого-зона (y: 21 → 50), x=225 */}
              <line x1="225" y1="21" x2="225" y2="50" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="219" y1="21" x2="231" y2="21" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="219" y1="50" x2="231" y2="50" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <text x="238" y="39" fontFamily="var(--font-display)" fontSize="13" fontWeight="700" fill="#8b7355">X</text>

              {/* СНИЗУ: лого-зона → пунктир (y: 140 → 169), x=225 */}
              <line x1="225" y1="140" x2="225" y2="169" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="219" y1="140" x2="231" y2="140" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="219" y1="169" x2="231" y2="169" stroke="#8b7355" strokeWidth="1.5" strokeLinecap="round" />
              <text x="238" y="160" fontFamily="var(--font-display)" fontSize="13" fontWeight="700" fill="#8b7355">X</text>
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
