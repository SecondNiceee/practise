const sharp = require("sharp")
const path = require("path")

const root = path.join(__dirname, "..")
// Orange-painted van so the vehicle matches the brand colours.
const basePath = path.join(root, "public/carriers/van-base-orange.png")
const logoPath = path.join(root, "public/carriers/kibitka-logo-source.png")
const outPath = path.join(root, "public/carriers/carrier-taxi-car.png")

;(async () => {
  const base = sharp(basePath)
  const meta = await base.metadata()
  console.log("[v0] base", meta.width, meta.height)

  // --- Logo -----------------------------------------------------------------
  // No background panel: the transparent logo is composited directly onto the
  // van so it sits naturally on the paint, like a printed vinyl decal.
  const logoW = 230
  const { data, info } = await sharp(logoPath)
    .resize({ width: logoW })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  // Slightly lower the alpha so the glossy paint reflections read through the
  // decal, making it feel printed onto the surface rather than pasted on top.
  const opacity = 0.92
  for (let i = 3; i < data.length; i += 4) {
    data[i] = Math.round(data[i] * opacity)
  }

  const logo = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer()

  // Position on the flat rear cargo side panel of the orange van.
  const logoLeft = 640
  const logoTop = 415

  await base
    .composite([{ input: logo, left: logoLeft, top: logoTop, blend: "over" }])
    .png()
    .toFile(outPath)

  console.log("[v0] done -> logo", info.width, "x", info.height, "at", logoLeft, logoTop)
})()
