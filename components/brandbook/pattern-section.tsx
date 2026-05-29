import type { ReactNode } from "react"
import { SectionHeading } from "@/components/moodboard/section-heading"

const NAVY = "#2c3e50"
const CREAM = "#faf6f0"
const ORANGE = "#f39c12"

/** Линейная иконка-машинка (единый стиль обводки). */
function carIcon(fg: string) {
  return (
    <g stroke={fg} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 30 L8 26 Q8 23 12 23 L17 23 L21 14 Q23 12 26 12 L42 12 Q45 12 47 14 L51 23 L56 23 Q59 23 59 26 L59 30" />
      <line x1="7" y1="30" x2="60" y2="30" />
      <circle cx="19" cy="33" r="4" />
      <circle cx="48" cy="33" r="4" />
    </g>
  )
}

/** Линейная иконка-колесо. */
function wheelIcon(fg: string) {
  return (
    <g stroke={fg} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="25" cy="25" r="15" />
      <circle cx="25" cy="25" r="5" />
      <line x1="25" y1="10" x2="25" y2="20" />
      <line x1="25" y1="30" x2="25" y2="40" />
      <line x1="10" y1="25" x2="20" y2="25" />
      <line x1="30" y1="25" x2="40" y2="25" />
    </g>
  )
}

/** Линейная иконка-руль. */
function steeringIcon(fg: string) {
  return (
    <g stroke={fg} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="28" cy="28" r="16" />
      <circle cx="28" cy="28" r="5" />
      <line x1="28" y1="12" x2="28" y2="23" />
      <line x1="14" y1="36" x2="23" y2="31" />
      <line x1="42" y1="36" x2="33" y2="31" />
    </g>
  )
}

/** Линейная иконка-шеврон (дорога/движение). */
function chevronIcon(fg: string) {
  return (
    <g stroke={fg} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21 L18 12 L27 21" />
      <path d="M9 30 L18 21 L27 30" />
    </g>
  )
}

/** Линейная иконка-геометка. */
function pinIcon(fg: string) {
  return (
    <g stroke={fg} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 11 C17 11 12 16 12 23 C12 31 24 41 24 41 C24 41 36 31 36 23 C36 16 31 11 24 11 Z" />
      <circle cx="24" cy="23" r="4" />
    </g>
  )
}

type Pattern = {
  id: string
  title: string
  desc: string
  span?: boolean
  bg: string
  fg: string
  size: number
  draw: (fg: string) => ReactNode
}

const patterns: Pattern[] = [
  { id: "cars", title: "Машинки", desc: "Основной паттерн для упаковки и фонов", span: true, bg: NAVY, fg: CREAM, size: 68, draw: carIcon },
  { id: "wheels", title: "Колёса", desc: "Геометрия движения", bg: CREAM, fg: NAVY, size: 50, draw: wheelIcon },
  { id: "steering", title: "Руль", desc: "Акцент для интерфейсов", bg: CREAM, fg: NAVY, size: 56, draw: steeringIcon },
  { id: "road", title: "Дорога", desc: "Направление и динамика", bg: CREAM, fg: NAVY, size: 36, draw: chevronIcon },
  { id: "pins", title: "Геометки", desc: "Карты и геолокация", bg: CREAM, fg: NAVY, size: 48, draw: pinIcon },
  { id: "cars-accent", title: "Машинки · акцент", desc: "Яркий фон для соцсетей", span: true, bg: ORANGE, fg: NAVY, size: 68, draw: carIcon },
]

function PatternSwatch({ p }: { p: Pattern }) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl border border-brand-navy/10 ${
        p.span ? "col-span-2" : ""
      }`}
    >
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id={`pat-${p.id}`} width={p.size} height={p.size} patternUnits="userSpaceOnUse">
            <rect width={p.size} height={p.size} fill={p.bg} />
            {p.draw(p.fg)}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#pat-${p.id})`} />
      </svg>
      <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-gradient-to-t from-brand-navy/85 to-transparent p-4">
        <span className="font-display text-sm font-semibold text-white">{p.title}</span>
        <span className="text-xs text-white/70">{p.desc}</span>
      </figcaption>
    </figure>
  )
}

export function PatternSection() {
  return (
    <section id="patterns" className="scroll-mt-20 bg-brand-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          index="6"
          kicker="Фирменный стиль · Паттерны"
          title="Паттерны и текстуры"
          description="Единая система линейной графики на основе машинки, колеса, руля, дороги и геометки. Все паттерны построены одной обводкой и работают на упаковке, в приложении, на униформе и в рекламе."
        />

        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4">
          {patterns.map((p) => (
            <PatternSwatch key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
