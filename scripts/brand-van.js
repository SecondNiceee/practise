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
  // The van is a flat illustration, so a flat logo sits naturally on the body
  // (no panel, full opacity) instead of looking pasted on a 3D surface.
  const logoW = 300
  const logo = await sharp(logoPath)
    .resize({ width: logoW })
    .png()
    .toBuffer()
  const info = await sharp(logo).metadata()

  // Center the logo on the large flat cargo side panel of the orange van.
  const logoLeft = Math.round(660 - info.width / 2)
  const logoTop = Math.round(475 - info.height / 2)

  await base
    .composite([{ input: logo, left: logoLeft, top: logoTop, blend: "over" }])
    .png()
    .toFile(outPath)

  console.log("[v0] done -> logo", info.width, "x", info.height, "at", logoLeft, logoTop)
})()
