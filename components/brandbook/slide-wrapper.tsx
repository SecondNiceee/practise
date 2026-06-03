const TOTAL_SLIDES = 21  // 1-Cover, 2-TOC, 3-About, 4-Logo, 5-Clearspace, 6-LogoColors, 7-LogoRules, 8-Colors, 9-Typography, 10-Patterns, 11-Photostyle, 12-16 Carriers, 17-20 Campaign, 21-Final

interface SlideWrapperProps {
  children: React.ReactNode
  slideNumber: number
  totalSlides?: number
  className?: string
  variant?: "light" | "dark"
  /** @deprecated Больше не нужен, оставлен для обратной совместимости */
  autoHeight?: boolean
}

export function SlideWrapper({
  children,
  slideNumber,
  totalSlides = TOTAL_SLIDES,
  className = "",
  variant = "light",
}: SlideWrapperProps) {
  const bgClass = variant === "dark" ? "bg-brand-navy" : "bg-brand-cream"
  const textClass = variant === "dark" ? "text-white/60" : "text-brand-sand"

  return (
    <section
      className={`${bgClass} ${className} overflow-hidden`}
      data-slide={slideNumber}
    >
      {/* Единый контейнер — одинаковая ширина для всех слайдов */}
      <div className="mx-auto flex w-full max-w-6xl flex-col px-5 py-8 md:py-12">
        {children}

        {/* Нумерация слайда — внутри контентной зоны, выровнена вправо */}
        <div className="mt-10 flex justify-end">
          <span className={`font-mono text-sm ${textClass}`}>
            {String(slideNumber).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  )
}
