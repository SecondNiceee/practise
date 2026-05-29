import type { ReactNode } from "react"

// Три фирменных цвета из логотипа «Кибитка»
const ORANGE = "#f39c12"
const NAVY = "#2c3e50"
const LIGHT = "#ecf0f1"

/**
 * Единая система линейной графики «Кибитка».
 * Все иконки нарисованы одной обводкой (stroke 2, скруглённые концы, без заливки),
 * поэтому паттерны выглядят в одном стиле.
 */
function strokeGroup(children: ReactNode, fg: string) {
  return (
    <g stroke={fg} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </g>
  )
}

function carIcon(fg: string) {
  return strokeGroup(
    <>
      <path d="M8 30 L8 26 Q8 23 12 23 L17 23 L21 14 Q23 12 26 12 L42 12 Q45 12 47 14 L51 23 L56 23 Q59 23 59 26 L59 30" />
      <line x1="7" y1="30" x2="60" y2="30" />
      <circle cx="19" cy="33" r="4" />
      <circle cx="48" cy="33" r="4" />
    </>,
    fg,
  )
}

function wheelIcon(fg: string) {
  return strokeGroup(
    <>
      <circle cx="25" cy="25" r="15" />
      <circle cx="25" cy="25" r="5" />
      <line x1="25" y1="10" x2="25" y2="20" />
      <line x1="25" y1="30" x2="25" y2="40" />
      <line x1="10" y1="25" x2="20" y2="25" />
      <line x1="30" y1="25" x2="40" y2="25" />
    </>,
    fg,
  )
}

function steeringIcon(fg: string) {
  return strokeGroup(
    <>
      <circle cx="28" cy="28" r="16" />
      <circle cx="28" cy="28" r="5" />
      <line x1="28" y1="12" x2="28" y2="23" />
      <line x1="14" y1="36" x2="23" y2="31" />
      <line x1="42" y1="36" x2="33" y2="31" />
    </>,
    fg,
  )
}

function chevronIcon(fg: string) {
  return strokeGroup(
    <>
      <path d="M9 21 L18 12 L27 21" />
      <path d="M9 30 L18 21 L27 30" />
    </>,
    fg,
  )
}

function pinIcon(fg: string) {
  return strokeGroup(
    <>
      <path d="M24 11 C17 11 12 16 12 23 C12 31 24 41 24 41 C24 41 36 31 36 23 C36 16 31 11 24 11 Z" />
      <circle cx="24" cy="23" r="4" />
    </>,
    fg,
  )
}

function speedIcon(fg: string) {
  return strokeGroup(
    <>
      <line x1="8" y1="15" x2="32" y2="15" />
      <line x1="12" y1="23" x2="36" y2="23" />
      <line x1="8" y1="31" x2="26" y2="31" />
    </>,
    fg,
  )
}

type Pattern = {
  id: string
  title: string
  size: number
  bg: string
  fg: string
  draw: (fg: string) => ReactNode
}

// Каждый паттерн собран только из трёх фирменных цветов логотипа
const patterns: Pattern[] = [
  { id: "cars", title: "Машинки", size: 68, bg: NAVY, fg: LIGHT, draw: carIcon },
  { id: "wheels", title: "Колёса", size: 50, bg: LIGHT, fg: NAVY, draw: wheelIcon },
  { id: "steering", title: "Руль", size: 56, bg: ORANGE, fg: NAVY, draw: steeringIcon },
  { id: "road", title: "Дорога", size: 36, bg: NAVY, fg: ORANGE, draw: chevronIcon },
  { id: "pins", title: "Геометки", size: 48, bg: LIGHT, fg: ORANGE, draw: pinIcon },
  { id: "speed", title: "Скорость", size: 44, bg: ORANGE, fg: LIGHT, draw: speedIcon },
]

export function PatternsStrip() {
  return (
    <>
      <h3 className="mb-3 mt-12 font-display text-lg font-semibold text-white">
        Паттерн
      </h3>
      <p className="mb-5 max-w-2xl text-pretty text-sm leading-relaxed text-white/60">
        Единая система линейной графики в трёх фирменных цветах логотипа —
        оранжевый, тёмно-синий и светлый. Один стиль обводки на основе машинки,
        колеса, руля, дороги и геометки.
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {patterns.map((p) => (
          <figure
            key={p.id}
            className="group relative aspect-square overflow-hidden rounded-xl border border-white/10"
          >
            <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <pattern
                  id={`mb-pat-${p.id}`}
                  width={p.size}
                  height={p.size}
                  patternUnits="userSpaceOnUse"
                >
                  <rect width={p.size} height={p.size} fill={p.bg} />
                  {p.draw(p.fg)}
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#mb-pat-${p.id})`} />
            </svg>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy/85 to-transparent p-2 text-center font-display text-xs font-semibold text-white">
              {p.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  )
}
