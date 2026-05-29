import sharp from "sharp"
import { mkdir } from "node:fs/promises"
import { join } from "node:path"

const ORANGE = "#f39c12"
const NAVY = "#2c3e50"
const LIGHT = "#ecf0f1"

const icons = {
  car: (fg) => `
    <path d="M8 30 L8 26 Q8 23 12 23 L17 23 L21 14 Q23 12 26 12 L42 12 Q45 12 47 14 L51 23 L56 23 Q59 23 59 26 L59 30" />
    <line x1="7" y1="30" x2="60" y2="30" />
    <circle cx="19" cy="33" r="4" />
    <circle cx="48" cy="33" r="4" />`,
  wheel: () => `
    <circle cx="25" cy="25" r="15" />
    <circle cx="25" cy="25" r="5" />
    <line x1="25" y1="10" x2="25" y2="20" />
    <line x1="25" y1="30" x2="25" y2="40" />
    <line x1="10" y1="25" x2="20" y2="25" />
    <line x1="30" y1="25" x2="40" y2="25" />`,
  steering: () => `
    <circle cx="28" cy="28" r="16" />
    <circle cx="28" cy="28" r="5" />
    <line x1="28" y1="12" x2="28" y2="23" />
    <line x1="14" y1="36" x2="23" y2="31" />
    <line x1="42" y1="36" x2="33" y2="31" />`,
  chevron: () => `
    <path d="M9 21 L18 12 L27 21" />
    <path d="M9 30 L18 21 L27 30" />`,
  pin: () => `
    <path d="M24 11 C17 11 12 16 12 23 C12 31 24 41 24 41 C24 41 36 31 36 23 C36 16 31 11 24 11 Z" />
    <circle cx="24" cy="23" r="4" />`,
  speed: () => `
    <line x1="8" y1="15" x2="32" y2="15" />
    <line x1="12" y1="23" x2="36" y2="23" />
    <line x1="8" y1="31" x2="26" y2="31" />`,
}

// Те же паттерны, что на странице /moodboard
const patterns = [
  { id: "cars", size: 68, bg: NAVY, fg: LIGHT, draw: icons.car },
  { id: "wheels", size: 50, bg: LIGHT, fg: NAVY, draw: icons.wheel },
  { id: "steering", size: 56, bg: ORANGE, fg: NAVY, draw: icons.steering },
  { id: "road", size: 36, bg: NAVY, fg: ORANGE, draw: icons.chevron },
  { id: "pins", size: 48, bg: LIGHT, fg: ORANGE, draw: icons.pin },
  { id: "speed", size: 44, bg: ORANGE, fg: LIGHT, draw: icons.speed },
]

const SCALE = 4 // плотность для чётких краёв

const outDir = join(process.cwd(), "public", "patterns")
await mkdir(outDir, { recursive: true })

for (const p of patterns) {
  const px = p.size * SCALE
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${px}" height="${px}" viewBox="0 0 ${p.size} ${p.size}">
    <rect width="${p.size}" height="${p.size}" fill="${p.bg}" />
    <g stroke="${p.fg}" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
      ${p.draw(p.fg)}
    </g>
  </svg>`
  const file = join(outDir, `${p.id}.png`)
  await sharp(Buffer.from(svg)).png().toFile(file)
  console.log(`[v0] saved ${file} (${px}x${px})`)
}

console.log("[v0] done")
