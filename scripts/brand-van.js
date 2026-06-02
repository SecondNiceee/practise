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
  const logoW = 215
  const { data, info } = await sharp(logoPath)
    .resize({ width: logoW })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  // Lower global alpha slightly so the glossy paint reflections read through ->
  // looks like a real printed vinyl decal.
  const opacity = 0.95
  for (let i = 3; i < data.length; i += 4) {
    data[i] = Math.round(data[i] * opacity)
  }

  const logo = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer()

  // --- White badge behind the logo -----------------------------------------
  // The brand logo uses an orange car icon, which would blend into the orange
  // paint. A soft white rounded panel keeps it legible (a realistic vinyl wrap).
  const padX = 42
  const padY = 32
  const badgeW = info.width + padX * 2
  const badgeH = info.height + padY * 2
  const radius = 34

  const badgeSvg = Buffer.from(
    `<svg width="${badgeW}" height="${badgeH}" xmlns="http://www.w3.org/2000/svg">
       <rect x="0" y="0" width="${badgeW}" height="${badgeH}" rx="${radius}" ry="${radius}"
             fill="#FFFFFF" fill-opacity="0.96" />
     </svg>`,
  )
  const badge = await sharp(badgeSvg).png().toBuffer()

  // Position on the flat rear cargo side panel of the orange van.
  const badgeLeft = 600
  const badgeTop = 385
  const logoLeft = badgeLeft + padX
  const logoTop = badgeTop + padY

  await base
    .composite([
      { input: badge, left: badgeLeft, top: badgeTop, blend: "over" },
      { input: logo, left: logoLeft, top: logoTop, blend: "over" },
    ])
    .png()
    .toFile(outPath)

  console.log("[v0] done -> logo", info.width, "x", info.height, "badge at", badgeLeft, badgeTop)
})()
