import sharp from "sharp"
import { mkdir } from "node:fs/promises"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, "..", "public", "patterns")

// Три фирменных цвета из логотипа «Кибитка» (как на /moodboard)
const ORANGE = "#f39c12"
const NAVY = "#2c3e50"
const LIGHT = "#ecf0f1"

const stroke = (inner, fg) =>
  `<g stroke="${fg}" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">${inner}</g>`

const carIcon = (fg) =>
  stroke(
    `<path d="M8 30 L8 26 Q8 23 12 23 L17 23 L21 14 Q23 12 26 12 L42 12 Q45 12 47 14 L51 23 L56 23 Q59 23 59 26 L59 30" />
     <line x1="7" y1="30" x2="60" y2="30" />
     <circle cx="19" cy="33" r="4" />
     <circle cx="48" cy="33" r="4" />`,
    fg,
  )

const wheelIcon = (fg) =>
  stroke(
    `<circle cx="25" cy="25" r="15" />
     <circle cx="25" cy="25" r="5" />
     <line x1="25" y1="10" x2="25" y2="20" />
     <line x1="25" y1="30" x2="25" y2="40" />
     <line x1="10" y1="25" x2="20" y2="25" />
     <line x1="30" y1="25" x2="40" y2="25" />`,
    fg,
  )

const steeringIcon = (fg) =>
  stroke(
    `<circle cx="28" cy="28" r="16" />
     <circle cx="28" cy="28" r="5" />
     <line x1="28" y1="12" x2="28" y2="23" />
     <line x1="14" y1="36" x2="23" y2="31" />
     <line x1="42" y1="36" x2="33" y2="31" />`,
    fg,
  )

const chevronIcon = (fg) =>
  stroke(
    `<path d="M9 21 L18 12 L27 21" />
     <path d="M9 30 L18 21 L27 30" />`,
    fg,
  )

const pinIcon = (fg) =>
  stroke(
    `<path d="M24 11 C17 11 12 16 12 23 C12 31 24 41 24 41 C24 41 36 31 36 23 C36 16 31 11 24 11 Z" />
     <circle cx="24" cy="23" r="4" />`,
    fg,
  )

const speedIcon = (fg) =>
  stroke(
    `<line x1="8" y1="15" x2="32" y2="15" />
     <line x1="12" y1="23" x2="36" y2="23" />
     <line x1="8" y1="31" x2="26" y2="31" />`,
    fg,
  )

// Оставляем 4 паттерна. size увеличен, чтобы паттерн был крупнее
// (меньше повторов иконки помещается в квадрат).
// base — исходный размер плитки, под который нарисована иконка;
// масштаб иконки = size / base, поэтому она тоже увеличивается.
const patterns = [
  { id: "cars", size: 150, base: 68, bg: NAVY, fg: LIGHT, draw: carIcon },
  { id: "steering", size: 130, base: 56, bg: ORANGE, fg: NAVY, draw: steeringIcon },
  { id: "pins", size: 120, base: 48, bg: LIGHT, fg: ORANGE, draw: pinIcon },
  { id: "speed", size: 120, base: 44, bg: ORANGE, fg: LIGHT, draw: speedIcon },
]

const CANVAS = 600 // итоговый размер квадратной плитки (px)

await mkdir(OUT_DIR, { recursive: true })

for (const p of patterns) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${CANVAS}" height="${CANVAS}" viewBox="0 0 ${CANVAS} ${CANVAS}">
    <defs>
      <pattern id="p" width="${p.size}" height="${p.size}" patternUnits="userSpaceOnUse">
        <rect width="${p.size}" height="${p.size}" fill="${p.bg}" />
        <g transform="scale(${(p.size / p.base).toFixed(4)})">${p.draw(p.fg)}</g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#p)" />
  </svg>`

  const out = join(OUT_DIR, `${p.id}.png`)
  await sharp(Buffer.from(svg)).png().toFile(out)
  console.log("[v0] wrote", out)
}

console.log("[v0] done")
