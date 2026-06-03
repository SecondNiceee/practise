const TOTAL_SLIDES = 21

interface SlideWrapperProps {
  children: React.ReactNode
  slideNumber: number
  totalSlides?: number
  className?: string
  variant?: "light" | "dark"
}

export function SlideWrapper({
  children,
  slideNumber,
  totalSlides,
  className = "",
  variant = "light",
}: SlideWrapperProps) {
  const bgClass = variant === "dark" ? "bg-brand-navy" : "bg-brand-cream"
  const textClass = variant === "dark" ? "text-white/60" : "text-brand-sand"

  return (
    <section
      className={`relative min-h-screen ${bgClass} ${className}`}
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
