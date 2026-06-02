const sharp = require("sharp")
const path = require("path")

const root = path.join(__dirname, "..")
// Orange-painted van so the vehicle matches the brand colours.
const basePath = path.join(root, "public/carriers/van-base-orange.png")
const logoPath = path.join(root, "public/carriers/logo-poko.png")
const outPath = path.join(root, "public/carriers/carrier-taxi-car.png")

;(async () => {
  const base = sharp(basePath)
  const meta = await base.metadata()
  console.log("[v0] base", meta.width, meta.height)

  // --- Logo -----------------------------------------------------------------
  // Blend the logo into the glossy paint with a touch of transparency so the
  // van's reflections/highlights read through it, like a printed vinyl decal
  // rather than a sticker pasted flat on top of the photo.
  const logoW = 380
  const { data, info } = await sharp(logoPath)
    .resize({ width: logoW })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const opacity = 0.9
  for (let i = 3; i < data.length; i += 4) {
    data[i] = Math.round(data[i] * opacity)
  }
  const logo = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer()

  // Center the logo on the large flat cargo side panel of the orange van.
  const logoLeft = Math.round(285 - info.width / 2)
  const logoTop = Math.round(420 - info.height / 2)

  await base
    .composite([{ input: logo, left: logoLeft, top: logoTop, blend: "over" }])
    .png()
    .toFile(outPath)

  console.log("[v0] done -> logo", info.width, "x", info.height, "at", logoLeft, logoTop)
})()
