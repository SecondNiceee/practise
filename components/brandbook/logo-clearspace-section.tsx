import { SectionHeading } from "@/components/moodboard/section-heading"
import { KibitkaLogo } from "@/components/moodboard/kibitka-logo"
import { LogoHorizontal } from "./logo-horizontal"
import { SlideWrapper } from "./slide-wrapper"

// Размер «единицы X» = диаметр колеса знака (в пикселях для размера lg)
const WHEEL_UNIT = 34

/**
 * Колесо-единица: повторяет колесо из знака (тёмный обод, светлый центр,
 * тёмная втулка) и выделено оранжевым кольцом. Используется как наглядная
 * мера X охранного поля.
 */
function WheelUnit() {
  return (
    <span
      aria-hidden
      className="relative flex items-center justify-center rounded-full"
      style={{
        width: `${WHEEL_UNIT}px`,
        height: `${WHEEL_UNIT}px`,
        backgroundColor: "#2c3e50",
        boxShadow: "0 0 0 2px #f39c12",
      }}
    >
      <span
        className="flex items-center justify-center rounded-full"
        style={{ width: "56%", height: "56%", backgroundColor: "#ecf0f1" }}
      >
        <span
          className="rounded-full"
          style={{ width: "40%", height: "40%", backgroundColor: "#2c3e50" }}
        />
      </span>
    </span>
  )
}

export function LogoClearspaceSection() {
  return (
    <SlideWrapper slideNumber={5} totalSlides={21} variant="light">
      <div id="logo-clearspace" className="scroll-mt-20">
          <SectionHeading
            index="02.1"
            kicker="Охранное поле"
            title="Охранное поле логотипа"
            description="За единицу построения принят диаметр колеса автомобиля — X. Это минимальное расстояние от знака до края носителя или других элементов макета."
          />

          {/* Охранное поле для полного логотипа */}
          <h3 className="mb-5 font-display text-lg font-semibold text-brand-navy">
            Полный логотип (знак + надпись)
          </h3>
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex items-center justify-center rounded-2xl border border-brand-navy/10 bg-card p-20">
              <div className="relative inline-flex">
                {/* пунктирная рамка охранного поля — отступ = диаметр колеса */}
                <div
                  className="absolute inset-0"
                  style={{
                    outline: "1.5px dashed #bdc3c7",
                    outlineOffset: `${WHEEL_UNIT}px`,
                  }}
                />
                {/* колесо-единица в верхнем поле = X */}
                <div
                  className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center"
                  style={{ bottom: "100%" }}
                >
                  <span className="mb-1 font-display text-xs font-bold text-brand-orange-dark">X</span>
                  <WheelUnit />
                </div>
                {/* колесо-единица в левом поле = X */}
                <div
                  className="absolute top-1/2 flex -translate-y-1/2 items-center gap-1"
                  style={{ right: "100%" }}
                >
                  <span className="font-display text-xs font-bold text-brand-orange-dark">X</span>
                  <WheelUnit />
                </div>
                <KibitkaLogo size="lg" caption="Такси-сервис" />
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-card p-8">
              <p className="leading-relaxed text-brand-navy/70">
                Для <strong className="text-brand-navy">полного логотипа</strong> (знак + надпись) охранное поле равно{" "}
                <span className="font-semibold text-brand-orange-dark">X</span> со всех сторон.
              </p>
              <div className="flex items-center gap-3 rounded-xl border border-brand-navy/10 bg-brand-navy/[0.03] p-3">
                <WheelUnit />
                <p className="text-sm leading-relaxed text-brand-navy/70">
                  <span className="font-semibold text-brand-orange-dark">X</span> — это{" "}
                  <strong className="text-brand-navy">диаметр колеса</strong> в знаке. Минимальный отступ от логотипа
                  до любого элемента равен ровно одному колесу.
                </p>
              </div>
            </div>
          </div>

          {/* Охранное поле для горизонтальной версии */}
          <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
            Горизонтальная версия
          </h3>
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex items-center justify-center rounded-2xl border border-brand-navy/10 bg-card p-12">
              {/* Охранное поле: реальный логотип + пунктирная рамка + стрелки X */}
              <div className="relative inline-flex">
                {/* пунктирная рамка охранного поля */}
                <div
                  className="absolute inset-0 rounded-none"
                  style={{
                    outline: "1.5px dashed #bdc3c7",
                    outlineOffset: "28px",
                  }}
                />
                {/* стрелка X сверху */}
                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center" style={{ bottom: "100%", marginBottom: "4px" }}>
                  <span className="font-display text-xs font-bold text-brand-sand">X</span>
                  <div className="w-px bg-brand-sand/60" style={{ height: "16px" }} />
                </div>
                {/* стрелка X слева */}
                <div className="absolute top-1/2 -translate-y-1/2 flex items-center" style={{ right: "100%", marginRight: "4px" }}>
                  <div className="h-px bg-brand-sand/60" style={{ width: "16px" }} />
                  <span className="font-display text-xs font-bold text-brand-sand ml-1">X</span>
                </div>
                <LogoHorizontal size="xxl" />
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-card p-8">
              <p className="leading-relaxed text-brand-navy/70">
                Для <strong className="text-brand-navy">горизонтальной версии</strong> охранное поле также равно{" "}
                <span className="font-semibold text-brand-orange-dark">X</span> со всех сторон.
              </p>
              <p className="leading-relaxed text-brand-navy/70">
                Используется в узких пространствах: шапка сайта, подпись в письме, верхняя панель приложения.
              </p>
            </div>
          </div>

          {/* Охранное поле для знака */}
          <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
            Только знак
          </h3>
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex items-center justify-center rounded-2xl border border-brand-navy/10 bg-card p-8">
              <svg
                viewBox="0 0 240 200"
                className="h-auto w-full max-w-xs"
                role="img"
                aria-label="Схема охранного поля знака"
              >
                {/* logo bounding box */}
                <rect
                  x="50"
                  y="50"
                  width="140"
                  height="100"
                  fill="none"
                  stroke="#2c3e50"
                  strokeWidth="1"
                  opacity="0.4"
                />
                {/* clear space dashed box - прилегает к логотипу */}
                <rect
                  x="35"
                  y="35"
                  width="170"
                  height="130"
                  fill="none"
                  stroke="#bdc3c7"
                  strokeWidth="1.5"
                  strokeDasharray="6,6"
                />
                {/* the mark, scaled */}
                <g transform="translate(50, 40) scale(1.2)">
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

                {/* X measurements */}
                <line x1="120" y1="20" x2="120" y2="50" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="116" y1="20" x2="124" y2="20" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="116" y1="50" x2="124" y2="50" stroke="#8b7355" strokeWidth="1.5" />
                <text x="130" y="38" fontFamily="var(--font-display)" fontSize="13" fontWeight="700" fill="#8b7355">X</text>

                <line x1="20" y1="100" x2="50" y2="100" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="20" y1="96" x2="20" y2="104" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="50" y1="96" x2="50" y2="104" stroke="#8b7355" strokeWidth="1.5" />
                <text x="35" y="92" fontFamily="var(--font-display)" fontSize="13" fontWeight="700" fill="#8b7355" textAnchor="middle">X</text>
              </svg>
            </div>

            <div className="flex flex-col justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-card p-8">
              <p className="leading-relaxed text-brand-navy/70">
                Для <strong className="text-brand-navy">знака без надписи</strong> охранное поле — 
                <span className="font-semibold text-brand-orange-dark"> X</span> со всех сторон.
              </p>
              <p className="leading-relaxed text-brand-navy/70">
                Применяется для иконок приложения, аватаров в соцсетях, favicon и компактных размещений.
              </p>
            </div>
          </div>

          {/* Охранное поле для надписи */}
          <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
            Только надпись
          </h3>
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex items-center justify-center rounded-2xl border border-brand-navy/10 bg-card p-8">
              <svg
                viewBox="0 0 320 120"
                className="h-auto w-full max-w-sm"
                role="img"
                aria-label="Схема охранного поля надписи"
              >
                {/* clear space dashed box */}
                <rect
                  x="20"
                  y="20"
                  width="280"
                  height="80"
                  fill="none"
                  stroke="#bdc3c7"
                  strokeWidth="1.5"
                  strokeDasharray="6,6"
                />
                {/* text bounding box */}
                <rect
                  x="50"
                  y="40"
                  width="220"
                  height="40"
                  fill="none"
                  stroke="#2c3e50"
                  strokeWidth="1"
                  opacity="0.4"
                />
                {/* Wordmark */}
                <text x="160" y="68" fontFamily="var(--font-display)" fontSize="24" fontWeight="700" fill="#2c3e50" textAnchor="middle" letterSpacing="8">
                  КИБИТКА
                </text>

                {/* X measurements */}
                <line x1="160" y1="20" x2="160" y2="40" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="156" y1="20" x2="164" y2="20" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="156" y1="40" x2="164" y2="40" stroke="#8b7355" strokeWidth="1.5" />
                <text x="170" y="32" fontFamily="var(--font-display)" fontSize="12" fontWeight="700" fill="#8b7355">0.5X</text>

                <line x1="20" y1="60" x2="50" y2="60" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="20" y1="56" x2="20" y2="64" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="50" y1="56" x2="50" y2="64" stroke="#8b7355" strokeWidth="1.5" />
                <text x="35" y="52" fontFamily="var(--font-display)" fontSize="12" fontWeight="700" fill="#8b7355" textAnchor="middle">0.5X</text>
              </svg>
            </div>

            <div className="flex flex-col justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-card p-8">
              <p className="leading-relaxed text-brand-navy/70">
                Для <strong className="text-brand-navy">текстовой версии</strong> (только надпись) охранное поле — 
                <span className="font-semibold text-brand-orange-dark"> 0.5X</span> (половина диаметра колеса).
              </p>
              <p className="leading-relaxed text-brand-navy/70">
                Применяется в ограниченных пространствах, когда знак не помещается, но нужна текстовая идентификация.
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
    </SlideWrapper>
  )
}
