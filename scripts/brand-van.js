const sharp = require("sharp")
const path = require("path")

const root = path.join(__dirname, "..")
const basePath = path.join(root, "public/carriers/van-base.png")
const logoPath = path.join(root, "public/carriers/kibitka-logo-source.png")
const outPath = path.join(root, "public/carriers/carrier-taxi-car.png")

;(async () => {
  const base = sharp(basePath)
  const meta = await base.metadata()
  console.log("[v0] base", meta.width, meta.height)

  const logoW = 360

  // Load + resize logo, then lower global alpha slightly so the glossy paint
  // reflections read through -> looks like a real printed vinyl wrap.
  const { data, info } = await sharp(logoPath)
    .resize({ width: logoW })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const opacity = 0.93
  for (let i = 3; i < data.length; i += 4) {
    data[i] = Math.round(data[i] * opacity)
  }

  const logo = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer()

  // Position on the flat rear cargo side panel
  const left = 600
  const top = 330

  await base
    .composite([{ input: logo, left, top, blend: "over" }])
    .png()
    .toFile(outPath)

  console.log("[v0] done -> logo", info.width, "x", info.height, "at", left, top)
})()
