const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Фирменные цвета Кибитки
const BRAND_COLORS = {
  orange: '#F39C12',
  navy: '#2C3E50',
  cream: '#F5F0E8',
  sand: '#8B7355',
  lightGray: '#ECF0F1',
};

// Логотип в SVG формате (горизонтальная версия)
const createLogoSvg = (width = 280, textColor = BRAND_COLORS.navy, carColor = BRAND_COLORS.orange) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${Math.round(width * 0.3)}" viewBox="0 0 280 80">
  <g transform="translate(0, 0) scale(0.8)">
    <path d="M20 55 Q20 48 30 48 L110 48 Q120 48 120 55 L120 68 Q120 72 116 72 L24 72 Q20 72 20 68 Z" fill="${carColor}"/>
    <path d="M38 48 L42 28 Q44 22 52 22 L88 22 Q96 22 98 28 L102 48" fill="${carColor}"/>
    <path d="M46 46 L49 30 Q50 28 54 28 L66 28 Q68 28 68 30 L68 46 Z" fill="${textColor}"/>
    <path d="M72 46 L72 30 Q72 28 74 28 L86 28 Q90 28 91 30 L94 46 Z" fill="${textColor}"/>
    <rect x="18" y="68" width="104" height="4" rx="2" fill="${BRAND_COLORS.sand}"/>
    <circle cx="26" cy="58" r="5" fill="${BRAND_COLORS.lightGray}"/>
    <circle cx="114" cy="58" r="5" fill="${BRAND_COLORS.lightGray}"/>
    <circle cx="40" cy="76" r="12" fill="${textColor}"/>
    <circle cx="40" cy="76" r="8" fill="${BRAND_COLORS.lightGray}"/>
    <circle cx="40" cy="76" r="4" fill="${textColor}"/>
    <circle cx="100" cy="76" r="12" fill="${textColor}"/>
    <circle cx="100" cy="76" r="8" fill="${BRAND_COLORS.lightGray}"/>
    <circle cx="100" cy="76" r="4" fill="${textColor}"/>
  </g>
  <text x="115" y="58" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="${textColor}" letter-spacing="4">КИБИТКА</text>
</svg>
`;

// Только знак (машинка) без текста
const createMarkSvg = (size = 100, carColor = BRAND_COLORS.orange, windowColor = BRAND_COLORS.navy) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="16 18 110 72">
  <path d="M20 55 Q20 48 30 48 L110 48 Q120 48 120 55 L120 68 Q120 72 116 72 L24 72 Q20 72 20 68 Z" fill="${carColor}"/>
  <path d="M38 48 L42 28 Q44 22 52 22 L88 22 Q96 22 98 28 L102 48" fill="${carColor}"/>
  <path d="M46 46 L49 30 Q50 28 54 28 L66 28 Q68 28 68 30 L68 46 Z" fill="${windowColor}"/>
  <path d="M72 46 L72 30 Q72 28 74 28 L86 28 Q90 28 91 30 L94 46 Z" fill="${windowColor}"/>
  <rect x="18" y="68" width="104" height="4" rx="2" fill="${BRAND_COLORS.sand}"/>
  <circle cx="26" cy="58" r="5" fill="${BRAND_COLORS.lightGray}"/>
  <circle cx="114" cy="58" r="5" fill="${BRAND_COLORS.lightGray}"/>
  <circle cx="40" cy="76" r="12" fill="${windowColor}"/>
  <circle cx="40" cy="76" r="8" fill="${BRAND_COLORS.lightGray}"/>
  <circle cx="40" cy="76" r="4" fill="${windowColor}"/>
  <circle cx="100" cy="76" r="12" fill="${windowColor}"/>
  <circle cx="100" cy="76" r="8" fill="${BRAND_COLORS.lightGray}"/>
  <circle cx="100" cy="76" r="4" fill="${windowColor}"/>
</svg>
`;

const carriersDir = path.join(__dirname, '../public/carriers');

// Конфигурация для каждого носителя
const carriers = [
  {
    input: 'carrier-promo-base.png',
    output: 'carrier-promo.png',
    logo: { type: 'full', width: 200 },
    position: { gravity: 'center' },
  },
  {
    input: 'carrier-business-card-base.png',
    output: 'carrier-business-card.png',
    logo: { type: 'full', width: 180 },
    position: { gravity: 'center' },
  },
  {
    input: 'carrier-flyer-base.png',
    output: 'carrier-flyer.png',
    logo: { type: 'full', width: 220 },
    position: { gravity: 'center' },
  },
  {
    input: 'carrier-uniform-base.png',
    output: 'carrier-uniform.png',
    logo: { type: 'mark', size: 80 },
    position: { gravity: 'northwest', left: 150, top: 120 },
  },
  {
    input: 'carrier-taxi-car-base.png',
    output: 'carrier-taxi-car.png',
    logo: { type: 'full', width: 250 },
    position: { gravity: 'center' },
  },
  {
    input: 'carrier-app-base.png',
    output: 'carrier-app.png',
    logo: { type: 'mark', size: 100 },
    position: { gravity: 'center' },
  },
];

async function processCarrier(config) {
  const inputPath = path.join(carriersDir, config.input);
  const outputPath = path.join(carriersDir, config.output);

  if (!fs.existsSync(inputPath)) {
    console.log(`[v0] Skipping ${config.input} - file not found`);
    return;
  }

  console.log(`[v0] Processing ${config.input}...`);

  // Получаем размеры базового изображения
  const metadata = await sharp(inputPath).metadata();
  console.log(`[v0] Image size: ${metadata.width}x${metadata.height}`);

  // Создаём SVG логотипа
  let logoSvg;
  if (config.logo.type === 'full') {
    logoSvg = createLogoSvg(config.logo.width);
  } else {
    logoSvg = createMarkSvg(config.logo.size);
  }

  // Конвертируем SVG в PNG буфер
  const logoBuffer = await sharp(Buffer.from(logoSvg))
    .png()
    .toBuffer();

  // Получаем размеры логотипа
  const logoMeta = await sharp(logoBuffer).metadata();

  // Вычисляем позицию
  let left, top;
  const gravity = config.position.gravity;
  
  if (config.position.left !== undefined) {
    left = config.position.left;
  } else if (gravity.includes('west')) {
    left = 50;
  } else if (gravity.includes('east')) {
    left = metadata.width - logoMeta.width - 50;
  } else {
    left = Math.round((metadata.width - logoMeta.width) / 2);
  }

  if (config.position.top !== undefined) {
    top = config.position.top;
  } else if (gravity.includes('north')) {
    top = 50;
  } else if (gravity.includes('south')) {
    top = metadata.height - logoMeta.height - 50;
  } else {
    top = Math.round((metadata.height - logoMeta.height) / 2);
  }

  // Накладываем логотип
  await sharp(inputPath)
    .composite([
      {
        input: logoBuffer,
        left: left,
        top: top,
      },
    ])
    .toFile(outputPath);

  console.log(`[v0] Saved ${config.output}`);
}

async function main() {
  console.log('[v0] Starting carrier image processing...');
  
  for (const config of carriers) {
    try {
      await processCarrier(config);
    } catch (err) {
      console.error(`[v0] Error processing ${config.input}:`, err.message);
    }
  }
  
  console.log('[v0] Done!');
}

main();
