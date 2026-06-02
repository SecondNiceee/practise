const sharp = require("sharp")
const path = require("path")

const ROOT = path.join(__dirname, "..")
const LOGO = path.join(ROOT, "public/carriers/kibitka-logo-source.png")
const OUT = path.join(ROOT, "public/carriers/carrier-flyer.png")

// Canvas (16:9 scene)
const W = 1600
const H = 900

// Card geometry (standard 85x55 business card ratio ~ 1.545)
const cardW = 980
const cardH = Math.round(cardW / 1.7)
const cardX = Math.round((W - cardW) / 2)
const cardY = Math.round((H - cardH) / 2)
const radius = 28

;(async () => {
  // Scene background (soft cream with subtle vignette) + drop-shadowed white card + orange accent bar
  const bg = `
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FBF6EC"/>
        <stop offset="100%" stop-color="#F3EADb"/>
      </linearGradient>
      <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="24" stdDeviation="30" flood-color="#2C3E50" flood-opacity="0.18"/>
      </filter>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#bgGrad)"/>
    <g filter="url(#cardShadow)">
      <rect x="${cardX}" y="${cardY}" width="${cardW}" height="${cardH}" rx="${radius}" ry="${radius}" fill="#FFFFFF"/>
    </g>
    <!-- orange accent bar bottom -->
    <rect x="${cardX}" y="${cardY + cardH - 26}" width="${cardW}" height="26" fill="#F5A623"/>
    <rect x="${cardX}" y="${cardY + cardH - 26}" width="${cardW}" height="26" rx="0" ry="0" fill="#F5A623"/>
    <!-- contact text -->
    <text x="${cardX + 70}" y="${cardY + cardH - 150}" font-family="Arial, sans-serif" font-size="34" font-weight="700" fill="#2C3E50">Городское такси</text>
    <text x="${cardX + 70}" y="${cardY + cardH - 105}" font-family="Arial, sans-serif" font-size="30" fill="#2C3E50" opacity="0.7">+7 800 000-00-00 · kibitka.ru</text>
  </svg>`

  // round the bottom corners of the accent bar by clipping with card mask is overkill; keep simple

  const baseBuf = await sharp(Buffer.from(bg)).png().toBuffer()

  // Logo placed on upper-left area of the card
  const logoW = 420
  const logoBuf = await sharp(LOGO).resize({ width: logoW }).png().toBuffer()
  const logoMeta = await sharp(logoBuf).metadata()

  const logoLeft = cardX + 70
  const logoTop = cardY + 55

  await sharp(baseBuf)
    .composite([{ input: logoBuf, left: logoLeft, top: logoTop, blend: "over" }])
    .png()
    .toFile(OUT)

  console.log("business card written:", OUT, "logo", logoMeta.width, logoMeta.height)
})()
