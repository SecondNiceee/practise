const TOTAL_SLIDES = 21  // 1-Cover, 2-TOC, 3-About, 4-Logo, 5-Clearspace, 6-LogoColors, 7-LogoRules, 8-Colors, 9-Typography, 10-Patterns, 11-Photostyle, 12-16 Carriers, 17-20 Campaign, 21-Final

interface SlideWrapperProps {
  children: React.ReactNode
  slideNumber: number
  totalSlides?: number
  className?: string
  variant?: "light" | "dark"
  autoHeight?: boolean
}

export function SlideWrapper({
  children,
  slideNumber,
  totalSlides,
  className = "",
  variant = "light",
  autoHeight = false,
}: SlideWrapperProps) {
  const bgClass = variant === "dark" ? "bg-brand-navy" : "bg-brand-cream"
  const textClass = variant === "dark" ? "text-white/60" : "text-brand-sand"
  const heightClass = autoHeight ? "" : "min-h-screen"

  return (
    <section
      className={`relative ${heightClass} ${bgClass} ${className} pb-14`}
      data-slide={slideNumber}
    >
      {children}
      
      {/* Номер слайда */}
      <div className="absolute bottom-6 right-6 flex items-center gap-2">
        <span className={`font-mono text-sm ${textClass}`}>
          {String(slideNumber).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
        </span>
      </div>
    </section>
  )
}
