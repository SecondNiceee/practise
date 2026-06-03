import { KibitkaMark } from "@/components/moodboard/kibitka-mark"

/**
 * Мокап брендированной кружки «Кибитка».
 * За основу взята настоящая фотография пустой керамической кружки,
 * а логотип реально «обёрнут» по цилиндрической поверхности:
 *  - текст «КИБИТКА» выгнут по дуге (буквы опускаются к краям и слегка
 *    поворачиваются, имитируя уход поверхности за горизонт цилиндра);
 *  - весь блок сжат к краям и затемнён по бокам, повторяя тень керамики;
 *  - mix-blend-mode: multiply вживляет краску в полутона кружки.
 */

const BRAND = "КИБИТКА".split("")

// Дуга для текста: буквы опускаются и поворачиваются к краям цилиндра.
function CurvedBrand() {
  const mid = (BRAND.length - 1) / 2
  return (
    <div className="flex items-end justify-center">
      {BRAND.map((char, i) => {
        const offset = i - mid // расстояние от центра
        const norm = offset / mid // -1..1
        // параболический спуск к краям (низ дуги цилиндра)
        const dropY = Math.pow(norm, 2) * 9
        // поворот букв в стороны от центра
        const rotate = norm * 16
        // лёгкое затемнение и сжатие к краям
        const scaleX = 1 - Math.abs(norm) * 0.12
        return (
          <span
            key={i}
            className="font-display font-extrabold text-brand-navy"
            style={{
              fontSize: "clamp(14px, 3.4vw, 26px)",
              letterSpacing: "0.04em",
              display: "inline-block",
              transform: `translateY(${dropY}px) rotate(${rotate}deg) scaleX(${scaleX})`,
              transformOrigin: "center bottom",
            }}
          >
            {char}
          </span>
        )
      })}
    </div>
  )
}

export function MugMockup() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden">
      {/* Фотография пустой кружки */}
      <img
        src="/mockups/blank-mug.png"
        alt="Брендированная кружка «Кибитка»"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Логотип, обёрнутый по поверхности кружки */}
      <div
        className="absolute"
        style={{ left: "21%", top: "40%", width: "40%", height: "30%" }}
      >
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-1"
          style={{
            transform: "perspective(380px) rotateY(-6deg)",
            transformOrigin: "center",
            mixBlendMode: "multiply",
            opacity: 0.92,
          }}
        >
          <KibitkaMark className="h-[34%] w-auto" />
          <CurvedBrand />
        </div>
      </div>
    </div>
  )
}
