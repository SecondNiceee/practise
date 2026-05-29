type KibitkaMarkProps = {
  className?: string
  bodyColor?: string
  windowColor?: string
  wheelColor?: string
  wheelInner?: string
  bumperColor?: string
  lightColor?: string
}

/**
 * Финальный знак логотипа «Кибитка» — ретро-такси.
 * Векторная иллюстрация, переиспользуемая во всех блоках брендбука.
 */
export function KibitkaMark({
  className,
  bodyColor = "#f39c12",
  windowColor = "#2c3e50",
  wheelColor = "#2c3e50",
  wheelInner = "#ecf0f1",
  bumperColor = "#bdc3c7",
  lightColor = "#ecf0f1",
}: KibitkaMarkProps) {
  return (
    <svg
      viewBox="16 18 110 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Логотип Кибитка — ретро-такси"
    >
      <path
        d="M20 55 Q20 48 30 48 L110 48 Q120 48 120 55 L120 68 Q120 72 116 72 L24 72 Q20 72 20 68 Z"
        fill={bodyColor}
      />
      <path
        d="M38 48 L42 28 Q44 22 52 22 L88 22 Q96 22 98 28 L102 48"
        fill={bodyColor}
      />
      <path d="M46 46 L49 30 Q50 28 54 28 L66 28 Q68 28 68 30 L68 46 Z" fill={windowColor} />
      <path d="M72 46 L72 30 Q72 28 74 28 L86 28 Q90 28 91 30 L94 46 Z" fill={windowColor} />
      <rect x="18" y="68" width="104" height="4" rx="2" fill={bumperColor} />
      <circle cx="26" cy="58" r="5" fill={lightColor} />
      <circle cx="114" cy="58" r="5" fill={lightColor} />
      <circle cx="40" cy="76" r="12" fill={wheelColor} />
      <circle cx="40" cy="76" r="8" fill={wheelInner} />
      <circle cx="40" cy="76" r="4" fill={wheelColor} />
      <circle cx="100" cy="76" r="12" fill={wheelColor} />
      <circle cx="100" cy="76" r="8" fill={wheelInner} />
      <circle cx="100" cy="76" r="4" fill={wheelColor} />
    </svg>
  )
}
