import { SectionHeading } from "@/components/moodboard/section-heading"
import { SlideWrapper } from "./slide-wrapper"

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
            <div className="flex items-center justify-center rounded-2xl border border-brand-navy/10 bg-card p-8">
              <svg
                viewBox="0 0 400 360"
                className="h-auto w-full max-w-md"
                role="img"
                aria-label="Схема охранного поля полного логотипа: X равен диаметру колеса"
              >
                {/* пунктирная рамка охранного поля (отступ X) */}
                <rect
                  x="72"
                  y="60"
                  width="260"
                  height="250"
                  fill="none"
                  stroke="#bdc3c7"
                  strokeWidth="1.5"
                  strokeDasharray="6,6"
                />
                {/* сплошная рамка вокруг логотипа */}
                <rect
                  x="110"
                  y="98"
                  width="184"
                  height="174"
                  fill="none"
                  stroke="#2c3e50"
                  strokeWidth="1"
                  opacity="0.45"
                />

                {/* знак-машинка */}
                <g transform="translate(90, 70) scale(1.6)">
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

                {/* надпись */}
                <text x="202" y="242" fontFamily="var(--font-display)" fontSize="24" fontWeight="700" fill="#2c3e50" textAnchor="middle" letterSpacing="6">
                  КИБИТКА
                </text>
                <text x="202" y="262" fontFamily="var(--font-display)" fontSize="11" fontWeight="600" fill="#8b7355" textAnchor="middle" letterSpacing="2">
                  ТАКСИ-СЕРВИС
                </text>

                {/* мерка X сверху */}
                <line x1="160" y1="60" x2="160" y2="98" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="156" y1="60" x2="164" y2="60" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="156" y1="98" x2="164" y2="98" stroke="#8b7355" strokeWidth="1.5" />
                <text x="172" y="83" fontFamily="var(--font-display)" fontSize="15" fontWeight="700" fill="#8b7355">X</text>

                {/* мерка X слева */}
                <line x1="72" y1="150" x2="110" y2="150" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="72" y1="146" x2="72" y2="154" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="110" y1="146" x2="110" y2="154" stroke="#8b7355" strokeWidth="1.5" />
                <text x="91" y="142" fontFamily="var(--font-display)" fontSize="15" fontWeight="700" fill="#8b7355" textAnchor="middle">X</text>

                {/* мерка диаметра ПРАВОГО колеса = X (центр 250, r 19.2 → 172.4…210.8) */}
                <line x1="269" y1="172.4" x2="312" y2="172.4" stroke="#8b7355" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="269" y1="210.8" x2="312" y2="210.8" stroke="#8b7355" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="308" y1="172.4" x2="308" y2="210.8" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="304" y1="172.4" x2="312" y2="172.4" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="304" y1="210.8" x2="312" y2="210.8" stroke="#8b7355" strokeWidth="1.5" />
                <text x="318" y="196" fontFamily="var(--font-display)" fontSize="15" fontWeight="700" fill="#8b7355">X</text>
              </svg>
            </div>

            <div className="flex flex-col justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-card p-8">
              <p className="leading-relaxed text-brand-navy/70">
                Для <strong className="text-brand-navy">полного логотипа</strong> (знак + надпись) охранное поле равно{" "}
                <span className="font-semibold text-brand-orange-dark">X</span> со всех сторон.
              </p>
              <p className="leading-relaxed text-brand-navy/70">
                <span className="font-semibold text-brand-orange-dark">X</span> — это{" "}
                <strong className="text-brand-navy">диаметр колеса</strong> в знаке. Эта единица сохраняется
                пропорционально при любом масштабировании логотипа.
              </p>
            </div>
          </div>

          {/* Охранное поле для горизонтальной версии */}
          <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
            Горизонтальная версия
          </h3>
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex items-center justify-center rounded-2xl border border-brand-navy/10 bg-card p-8">
              <svg
                viewBox="0 0 520 210"
                className="h-auto w-full max-w-xl"
                role="img"
                aria-label="Схема охранного поля горизонтальной версии: X равен диаметру колеса"
              >
                {/* пунктирная рамка охранного поля (отступ X) */}
                <rect
                  x="45.6"
                  y="39.6"
                  width="436"
                  height="138"
                  fill="none"
                  stroke="#bdc3c7"
                  strokeWidth="1.5"
                  strokeDasharray="6,6"
                />
                {/* сплошная рамка вокруг логотипа */}
                <rect
                  x="72"
                  y="66"
                  width="384"
                  height="85"
                  fill="none"
                  stroke="#2c3e50"
                  strokeWidth="1"
                  opacity="0.45"
                />

                {/* знак-машинка */}
                <g transform="translate(60, 48) scale(1.1)">
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

                {/* надпись */}
                <text x="230" y="122" fontFamily="var(--font-display)" fontSize="36" fontWeight="700" fill="#2c3e50" letterSpacing="6">
                  КИБИТКА
                </text>

                {/* мерка X сверху */}
                <line x1="130" y1="39.6" x2="130" y2="66" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="126" y1="39.6" x2="134" y2="39.6" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="126" y1="66" x2="134" y2="66" stroke="#8b7355" strokeWidth="1.5" />
                <text x="140" y="57" fontFamily="var(--font-display)" fontSize="14" fontWeight="700" fill="#8b7355">X</text>

                {/* мерка X слева */}
                <line x1="45.6" y1="108.5" x2="72" y2="108.5" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="45.6" y1="104.5" x2="45.6" y2="112.5" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="72" y1="104.5" x2="72" y2="112.5" stroke="#8b7355" strokeWidth="1.5" />
                <text x="58.8" y="100" fontFamily="var(--font-display)" fontSize="14" fontWeight="700" fill="#8b7355" textAnchor="middle">X</text>

                {/* мерка диаметра ПРАВОГО колеса = X (центр 170, r 13.2 → 118.4…144.8) */}
                <line x1="183" y1="118.4" x2="205" y2="118.4" stroke="#8b7355" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="183" y1="144.8" x2="205" y2="144.8" stroke="#8b7355" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="203" y1="118.4" x2="203" y2="144.8" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="199" y1="118.4" x2="207" y2="118.4" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="199" y1="144.8" x2="207" y2="144.8" stroke="#8b7355" strokeWidth="1.5" />
                <text x="203" y="160" fontFamily="var(--font-display)" fontSize="14" fontWeight="700" fill="#8b7355" textAnchor="middle">X</text>
              </svg>
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
                viewBox="0 0 380 260"
                className="h-auto w-full max-w-sm"
                role="img"
                aria-label="Схема охранного поля знака: X равен диаметру колеса"
              >
                {/* пунктирная рамка охранного поля (отступ X) */}
                <rect
                  x="79.6"
                  y="51.6"
                  width="254.8"
                  height="194.8"
                  fill="none"
                  stroke="#bdc3c7"
                  strokeWidth="1.5"
                  strokeDasharray="6,6"
                />
                {/* сплошная рамка вокруг знака */}
                <rect
                  x="118"
                  y="90"
                  width="178"
                  height="118"
                  fill="none"
                  stroke="#2c3e50"
                  strokeWidth="1"
                  opacity="0.45"
                />
                {/* знак-машинка */}
                <g transform="translate(95, 60) scale(1.6)">
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

                {/* мерка X сверху */}
                <line x1="200" y1="51.6" x2="200" y2="90" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="196" y1="51.6" x2="204" y2="51.6" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="196" y1="90" x2="204" y2="90" stroke="#8b7355" strokeWidth="1.5" />
                <text x="210" y="75" fontFamily="var(--font-display)" fontSize="15" fontWeight="700" fill="#8b7355">X</text>

                {/* мерка X слева */}
                <line x1="79.6" y1="150" x2="118" y2="150" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="79.6" y1="146" x2="79.6" y2="154" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="118" y1="146" x2="118" y2="154" stroke="#8b7355" strokeWidth="1.5" />
                <text x="98.8" y="142" fontFamily="var(--font-display)" fontSize="15" fontWeight="700" fill="#8b7355" textAnchor="middle">X</text>

                {/* мерка диаметра ПРАВОГО колеса = X (центр 255, r 19.2 → 162.4…200.8) */}
                <line x1="274.2" y1="162.4" x2="316" y2="162.4" stroke="#8b7355" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="274.2" y1="200.8" x2="316" y2="200.8" stroke="#8b7355" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="312" y1="162.4" x2="312" y2="200.8" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="308" y1="162.4" x2="316" y2="162.4" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="308" y1="200.8" x2="316" y2="200.8" stroke="#8b7355" strokeWidth="1.5" />
                <text x="322" y="186" fontFamily="var(--font-display)" fontSize="15" fontWeight="700" fill="#8b7355">X</text>
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
                viewBox="0 0 420 200"
                className="h-auto w-full max-w-md"
                role="img"
                aria-label="Схема охранного поля надписи: H равен высоте заглавной буквы"
              >
                {/* пунктирная рамка охранного поля (отступ H, высота буквы = 36) */}
                <rect
                  x="54"
                  y="46"
                  width="312"
                  height="108"
                  fill="none"
                  stroke="#bdc3c7"
                  strokeWidth="1.5"
                  strokeDasharray="6,6"
                />
                {/* сплошная рамка вокруг надписи (высота = H = 36) */}
                <rect
                  x="90"
                  y="82"
                  width="240"
                  height="36"
                  fill="none"
                  stroke="#2c3e50"
                  strokeWidth="1"
                  opacity="0.45"
                />
                {/* надпись (cap-height ≈ 36) */}
                <text x="210" y="114" fontFamily="var(--font-display)" fontSize="48" fontWeight="700" fill="#2c3e50" textAnchor="middle" letterSpacing="6">
                  КИБИТКА
                </text>

                {/* мерка H сверху (= высота буквы) */}
                <line x1="210" y1="46" x2="210" y2="82" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="206" y1="46" x2="214" y2="46" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="206" y1="82" x2="214" y2="82" stroke="#8b7355" strokeWidth="1.5" />
                <text x="220" y="68" fontFamily="var(--font-display)" fontSize="14" fontWeight="700" fill="#8b7355">H</text>

                {/* мерка H слева */}
                <line x1="54" y1="100" x2="90" y2="100" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="54" y1="96" x2="54" y2="104" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="90" y1="96" x2="90" y2="104" stroke="#8b7355" strokeWidth="1.5" />
                <text x="72" y="92" fontFamily="var(--font-display)" fontSize="14" fontWeight="700" fill="#8b7355" textAnchor="middle">H</text>

                {/* мерка высоты буквы H справа = единица построения */}
                <line x1="334" y1="82" x2="376" y2="82" stroke="#8b7355" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="334" y1="118" x2="376" y2="118" stroke="#8b7355" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="372" y1="82" x2="372" y2="118" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="368" y1="82" x2="376" y2="82" stroke="#8b7355" strokeWidth="1.5" />
                <line x1="368" y1="118" x2="376" y2="118" stroke="#8b7355" strokeWidth="1.5" />
                <text x="382" y="104" fontFamily="var(--font-display)" fontSize="14" fontWeight="700" fill="#8b7355">H</text>
              </svg>
            </div>

            <div className="flex flex-col justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-card p-8">
              <p className="leading-relaxed text-brand-navy/70">
                Для <strong className="text-brand-navy">текстовой версии</strong> (только надпись) единица построения — 
                <span className="font-semibold text-brand-orange-dark"> H</span>, высота заглавной буквы. Охранное поле
                равно <span className="font-semibold text-brand-orange-dark">H</span> со всех сторон.
              </p>
              <p className="leading-relaxed text-brand-navy/70">
                Здесь нет знака с колесом, поэтому мерой служит высота букв — она всегда пропорциональна размеру набора.
                Применяется, когда знак не помещается, но нужна текстовая идентификация.
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
