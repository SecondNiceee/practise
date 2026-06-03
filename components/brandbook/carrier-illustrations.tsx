/**
 * Иллюстрации носителей в фирменных цветах «Кибитка».
 * Все цвета — строго из фирменной палитры:
 *   Оранжевый    #F39C12
 *   Тёмно-синий  #2C3E50
 *   Красный      #E74C3C
 *   Бирюзовый    #1ABC9C
 *   Золотой      #D4AF37
 *   Кремовый     #F5F0E8
 *   Песочный     #8B7355
 *   Светло-серый #ECF0F1
 *   Графит       #34495E
 */

/* ─── Промо-набор (стакан + мерч) ─────────────────────────────────── */
export function PromoIllustration() {
  return (
    <div className="flex items-center justify-center bg-[#F5F0E8] py-8 px-6">
      <svg viewBox="0 0 360 200" className="h-auto w-full max-w-sm" aria-hidden="true">
        {/* Фон */}
        <rect width="360" height="200" fill="#F5F0E8" />

        {/* ── Шоппер / пакет слева ── */}
        <path d="M40 80 L60 160 L130 160 L150 80 Z" fill="#ECF0F1" stroke="#2C3E50" strokeWidth="1.5" />
        {/* ручки */}
        <path d="M75 80 Q75 55 85 50 Q95 45 95 80" fill="none" stroke="#2C3E50" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M110 80 Q110 55 120 50 Q130 45 130 80" fill="none" stroke="#2C3E50" strokeWidth="2.5" strokeLinecap="round" />
        {/* логотип на пакете */}
        <text x="95" y="128" fontFamily="Georgia, serif" fontSize="11" fontWeight="700" fill="#F39C12" textAnchor="middle" letterSpacing="2">КИБИТКА</text>
        {/* машинка-знак */}
        <g transform="translate(78, 100) scale(0.28)">
          <path d="M20 55 Q20 48 30 48 L110 48 Q120 48 120 55 L120 68 Q120 72 116 72 L24 72 Q20 72 20 68 Z" fill="#F39C12" />
          <path d="M38 48 L42 28 Q44 22 52 22 L88 22 Q96 22 98 28 L102 48" fill="#F39C12" />
          <path d="M46 46 L49 30 Q50 28 54 28 L66 28 Q68 28 68 30 L68 46 Z" fill="#2C3E50" />
          <path d="M72 46 L72 30 Q72 28 74 28 L86 28 Q90 28 91 30 L94 46 Z" fill="#2C3E50" />
          <rect x="18" y="68" width="104" height="4" rx="2" fill="#8B7355" />
          <circle cx="40" cy="76" r="12" fill="#2C3E50" />
          <circle cx="40" cy="76" r="7" fill="#ECF0F1" />
          <circle cx="100" cy="76" r="12" fill="#2C3E50" />
          <circle cx="100" cy="76" r="7" fill="#ECF0F1" />
        </g>

        {/* ── Стакан по центру ── */}
        <path d="M155 65 L170 160 L210 160 L225 65 Z" fill="#F39C12" />
        <path d="M155 65 L225 65" stroke="#E67E22" strokeWidth="2" />
        {/* крышка */}
        <rect x="152" y="56" width="76" height="12" rx="6" fill="#2C3E50" />
        {/* трубочка */}
        <rect x="198" y="20" width="6" height="50" rx="3" fill="#1ABC9C" />
        {/* логотип на стакане */}
        <text x="190" y="108" fontFamily="Georgia, serif" fontSize="9" fontWeight="700" fill="#2C3E50" textAnchor="middle" letterSpacing="1.5">КИБИТКА</text>
        <g transform="translate(177, 115) scale(0.2)">
          <path d="M20 55 Q20 48 30 48 L110 48 Q120 48 120 55 L120 68 Q120 72 116 72 L24 72 Q20 72 20 68 Z" fill="#2C3E50" />
          <path d="M38 48 L42 28 Q44 22 52 22 L88 22 Q96 22 98 28 L102 48" fill="#2C3E50" />
        </g>
        {/* блик */}
        <path d="M165 80 L168 148" stroke="#E67E22" strokeWidth="3" strokeLinecap="round" opacity="0.5" />

        {/* ── Кепка справа ── */}
        {/* козырёк */}
        <path d="M245 110 Q260 95 310 95 Q330 95 335 110 Z" fill="#2C3E50" />
        {/* тулья */}
        <path d="M255 112 Q255 75 282 70 Q310 65 310 112 Z" fill="#2C3E50" />
        {/* панель с логотипом */}
        <path d="M268 112 Q268 82 282 78 Q296 74 296 112 Z" fill="#34495E" />
        {/* логотип на кепке */}
        <g transform="translate(270, 88) scale(0.22)">
          <path d="M20 55 Q20 48 30 48 L110 48 Q120 48 120 55 L120 68 Q120 72 116 72 L24 72 Q20 72 20 68 Z" fill="#F39C12" />
          <path d="M38 48 L42 28 Q44 22 52 22 L88 22 Q96 22 98 28 L102 48" fill="#F39C12" />
          <circle cx="40" cy="76" r="12" fill="#ECF0F1" />
          <circle cx="100" cy="76" r="12" fill="#ECF0F1" />
        </g>
        {/* пуговица */}
        <circle cx="282" cy="72" r="4" fill="#F39C12" />
        {/* шнурок кепки */}
        <path d="M255 112 Q282 108 310 112" stroke="#F39C12" strokeWidth="1.5" fill="none" />

        {/* ── Подложка-тень ── */}
        <ellipse cx="95" cy="164" rx="55" ry="5" fill="#8B7355" opacity="0.15" />
        <ellipse cx="190" cy="164" rx="35" ry="5" fill="#8B7355" opacity="0.15" />
        <ellipse cx="282" cy="116" rx="40" ry="5" fill="#8B7355" opacity="0.15" />
      </svg>
    </div>
  )
}

/* ─── Визитные карточки ───────────────────────────────────────────── */
export function BusinessCardIllustration() {
  return (
    <div className="flex items-center justify-center bg-[#2C3E50] py-8 px-6">
      <svg viewBox="0 0 360 200" className="h-auto w-full max-w-sm" aria-hidden="true">
        <rect width="360" height="200" fill="#2C3E50" />

        {/* Задняя карточка (смещена) */}
        <rect x="75" y="55" width="220" height="115" rx="10" fill="#34495E" />

        {/* Основная карточка — оранжевая */}
        <rect x="60" y="40" width="220" height="115" rx="10" fill="#F39C12" />

        {/* Левый блок — логотип */}
        <rect x="60" y="40" width="80" height="115" rx="10" fill="#E67E22" />
        <rect x="118" y="40" width="12" height="115" fill="#E67E22" />

        {/* Машинка на левом блоке */}
        <g transform="translate(67, 68) scale(0.52)">
          <path d="M20 55 Q20 48 30 48 L110 48 Q120 48 120 55 L120 68 Q120 72 116 72 L24 72 Q20 72 20 68 Z" fill="#F5F0E8" />
          <path d="M38 48 L42 28 Q44 22 52 22 L88 22 Q96 22 98 28 L102 48" fill="#F5F0E8" />
          <path d="M46 46 L49 30 Q50 28 54 28 L66 28 Q68 28 68 30 L68 46 Z" fill="#2C3E50" />
          <path d="M72 46 L72 30 Q72 28 74 28 L86 28 Q90 28 91 30 L94 46 Z" fill="#2C3E50" />
          <rect x="18" y="68" width="104" height="4" rx="2" fill="#8B7355" />
          <circle cx="40" cy="76" r="12" fill="#2C3E50" />
          <circle cx="40" cy="76" r="7" fill="#F5F0E8" />
          <circle cx="100" cy="76" r="12" fill="#2C3E50" />
          <circle cx="100" cy="76" r="7" fill="#F5F0E8" />
        </g>
        <text x="100" y="131" fontFamily="Georgia, serif" fontSize="7" fontWeight="700" fill="#F5F0E8" textAnchor="middle" letterSpacing="1">КИБИТКА</text>

        {/* Правый блок — текст */}
        <text x="145" y="72" fontFamily="Georgia, serif" fontSize="12" fontWeight="700" fill="#2C3E50">Иван Петров</text>
        <text x="145" y="88" fontFamily="Arial, sans-serif" fontSize="8" fill="#2C3E50" opacity="0.7">Водитель-партнёр</text>
        <line x1="145" y1="98" x2="268" y2="98" stroke="#2C3E50" strokeWidth="0.8" opacity="0.3" />
        <text x="145" y="112" fontFamily="Arial, sans-serif" fontSize="8" fill="#2C3E50">+7 (999) 123-45-67</text>
        <text x="145" y="124" fontFamily="Arial, sans-serif" fontSize="8" fill="#2C3E50">ivan@kibitka.ru</text>
        <text x="145" y="136" fontFamily="Arial, sans-serif" fontSize="8" fill="#2C3E50">kibitka.ru</text>

        {/* Декоративный уголок */}
        <circle cx="262" cy="44" r="14" fill="#2C3E50" opacity="0.15" />
        <circle cx="262" cy="44" r="8" fill="#2C3E50" opacity="0.15" />
      </svg>
    </div>
  )
}

/* ─── Флаер / листовка ───────────────────────────────────────────── */
export function FlyerIllustration() {
  return (
    <div className="flex items-center justify-center bg-[#F5F0E8] py-8 px-6">
      <svg viewBox="0 0 360 200" className="h-auto w-full max-w-sm" aria-hidden="true">
        <rect width="360" height="200" fill="#F5F0E8" />

        {/* Флаер */}
        <rect x="80" y="20" width="200" height="160" rx="8" fill="white" stroke="#ECF0F1" strokeWidth="1" />

        {/* Шапка флаера */}
        <rect x="80" y="20" width="200" height="58" rx="8" fill="#2C3E50" />
        <rect x="80" y="62" width="200" height="16" fill="#2C3E50" />

        {/* Машинка в шапке */}
        <g transform="translate(94, 24) scale(0.55)">
          <path d="M20 55 Q20 48 30 48 L110 48 Q120 48 120 55 L120 68 Q120 72 116 72 L24 72 Q20 72 20 68 Z" fill="#F39C12" />
          <path d="M38 48 L42 28 Q44 22 52 22 L88 22 Q96 22 98 28 L102 48" fill="#F39C12" />
          <path d="M46 46 L49 30 Q50 28 54 28 L66 28 Q68 28 68 30 L68 46 Z" fill="#2C3E50" />
          <path d="M72 46 L72 30 Q72 28 74 28 L86 28 Q90 28 91 30 L94 46 Z" fill="#2C3E50" />
          <rect x="18" y="68" width="104" height="4" rx="2" fill="#8B7355" />
          <circle cx="40" cy="76" r="12" fill="#ECF0F1" />
          <circle cx="40" cy="76" r="7" fill="#2C3E50" />
          <circle cx="100" cy="76" r="12" fill="#ECF0F1" />
          <circle cx="100" cy="76" r="7" fill="#2C3E50" />
        </g>
        <text x="200" y="51" fontFamily="Georgia, serif" fontSize="13" fontWeight="700" fill="#F5F0E8" letterSpacing="3">КИБИТКА</text>

        {/* Оранжевая полоса */}
        <rect x="80" y="78" width="200" height="5" fill="#F39C12" />

        {/* Контент флаера */}
        <text x="180" y="102" fontFamily="Georgia, serif" fontSize="14" fontWeight="700" fill="#2C3E50" textAnchor="middle">Городское такси</text>
        <text x="180" y="116" fontFamily="Arial, sans-serif" fontSize="8" fill="#8B7355" textAnchor="middle">Быстро. Надёжно. По-своему.</text>

        <rect x="100" y="126" width="160" height="24" rx="12" fill="#F39C12" />
        <text x="180" y="142" fontFamily="Georgia, serif" fontSize="10" fontWeight="700" fill="white" textAnchor="middle">Заказать поездку</text>

        <text x="180" y="168" fontFamily="Arial, sans-serif" fontSize="8" fill="#8B7355" textAnchor="middle">kibitka.ru · +7 (800) 555-35-35</text>
      </svg>
    </div>
  )
}

/* ─── Форменная одежда ───────────────────────────────────────────── */
export function UniformIllustration() {
  return (
    <div className="flex items-center justify-center bg-[#F5F0E8] py-8 px-6">
      <svg viewBox="0 0 360 200" className="h-auto w-full max-w-sm" aria-hidden="true">
        <rect width="360" height="200" fill="#F5F0E8" />

        {/* ── Поло слева ── */}
        {/* тело поло */}
        <path d="M50 80 L40 60 L70 50 L80 70 Q90 55 100 50 L130 60 L120 80 L125 155 L45 155 Z" fill="#2C3E50" />
        {/* воротник */}
        <path d="M70 50 Q85 45 100 50 Q92 70 85 72 Q78 70 70 50 Z" fill="#34495E" />
        {/* оранжевая полоса на плечо */}
        <path d="M40 60 L70 50 L75 60 L44 70 Z" fill="#F39C12" />
        <path d="M130 60 L100 50 L95 60 L126 70 Z" fill="#F39C12" />
        {/* Вышивка машинки на груди */}
        <g transform="translate(62, 95) scale(0.28)">
          <path d="M20 55 Q20 48 30 48 L110 48 Q120 48 120 55 L120 68 Q120 72 116 72 L24 72 Q20 72 20 68 Z" fill="#F39C12" />
          <path d="M38 48 L42 28 Q44 22 52 22 L88 22 Q96 22 98 28 L102 48" fill="#F39C12" />
          <circle cx="40" cy="76" r="12" fill="#ECF0F1" />
          <circle cx="100" cy="76" r="12" fill="#ECF0F1" />
        </g>
        <text x="85" y="127" fontFamily="Georgia, serif" fontSize="6" fontWeight="700" fill="#F39C12" textAnchor="middle" letterSpacing="1">КИБИТКА</text>
        {/* тень */}
        <ellipse cx="85" cy="158" rx="42" ry="5" fill="#8B7355" opacity="0.15" />

        {/* ── Кепка по центру ── */}
        <path d="M165 115 Q180 98 230 98 Q252 98 258 115 Z" fill="#2C3E50" />
        <path d="M175 117 Q175 78 202 72 Q230 66 230 117 Z" fill="#2C3E50" />
        <path d="M188 117 Q188 85 202 80 Q216 75 216 117 Z" fill="#34495E" />
        <g transform="translate(190, 92) scale(0.22)">
          <path d="M20 55 Q20 48 30 48 L110 48 Q120 48 120 55 L120 68 Q120 72 116 72 L24 72 Q20 72 20 68 Z" fill="#F39C12" />
          <path d="M38 48 L42 28 Q44 22 52 22 L88 22 Q96 22 98 28 L102 48" fill="#F39C12" />
          <circle cx="40" cy="76" r="12" fill="#ECF0F1" />
          <circle cx="100" cy="76" r="12" fill="#ECF0F1" />
        </g>
        <circle cx="202" cy="74" r="4" fill="#F39C12" />
        <path d="M175 117 Q202 113 230 117" stroke="#F39C12" strokeWidth="1.5" fill="none" />
        <ellipse cx="210" cy="120" rx="45" ry="5" fill="#8B7355" opacity="0.15" />

        {/* ── Куртка справа ── */}
        <path d="M270 80 L258 58 L285 48 L295 68 Q305 52 315 48 L342 58 L330 80 L335 155 L265 155 Z" fill="#F39C12" />
        {/* воротник */}
        <path d="M285 48 Q300 42 315 48 Q307 68 300 70 Q293 68 285 48 Z" fill="#E67E22" />
        {/* тёмно-синие вставки */}
        <path d="M258 58 L285 48 L290 60 L262 70 Z" fill="#2C3E50" />
        <path d="M342 58 L315 48 L310 60 L338 70 Z" fill="#2C3E50" />
        {/* логотип на куртке */}
        <g transform="translate(282, 95) scale(0.28)">
          <path d="M20 55 Q20 48 30 48 L110 48 Q120 48 120 55 L120 68 Q120 72 116 72 L24 72 Q20 72 20 68 Z" fill="#2C3E50" />
          <path d="M38 48 L42 28 Q44 22 52 22 L88 22 Q96 22 98 28 L102 48" fill="#2C3E50" />
          <circle cx="40" cy="76" r="12" fill="#2C3E50" />
          <circle cx="100" cy="76" r="12" fill="#2C3E50" />
        </g>
        <text x="300" y="127" fontFamily="Georgia, serif" fontSize="6" fontWeight="700" fill="#2C3E50" textAnchor="middle" letterSpacing="1">КИБИТКА</text>
        <ellipse cx="300" cy="158" rx="42" ry="5" fill="#8B7355" opacity="0.15" />
      </svg>
    </div>
  )
}

/* ─── Шоппер-сумка ───────────────────────────────────────────────── */
export function BagIllustration() {
  return (
    <div className="flex items-center justify-center bg-[#2C3E50] py-8 px-6">
      <svg viewBox="0 0 360 200" className="h-auto w-full max-w-sm" aria-hidden="true">
        <rect width="360" height="200" fill="#2C3E50" />

        {/* Тело сумки */}
        <rect x="100" y="75" width="160" height="110" rx="6" fill="#F5F0E8" />
        {/* Боковые складки */}
        <line x1="106" y1="75" x2="106" y2="185" stroke="#ECF0F1" strokeWidth="1" />
        <line x1="254" y1="75" x2="254" y2="185" stroke="#ECF0F1" strokeWidth="1" />
        {/* Дно */}
        <rect x="100" y="175" width="160" height="10" rx="0" fill="#E8E2D0" />

        {/* Ручки */}
        <path d="M130 75 Q130 35 150 32 Q170 29 170 75" fill="none" stroke="#8B7355" strokeWidth="5" strokeLinecap="round" />
        <path d="M190 75 Q190 35 210 32 Q230 29 230 75" fill="none" stroke="#8B7355" strokeWidth="5" strokeLinecap="round" />

        {/* Оранжевая полоса */}
        <rect x="100" y="85" width="160" height="6" fill="#F39C12" />
        <rect x="100" y="168" width="160" height="6" fill="#F39C12" />

        {/* Логотип по центру */}
        <g transform="translate(142, 108) scale(0.7)">
          <path d="M20 55 Q20 48 30 48 L110 48 Q120 48 120 55 L120 68 Q120 72 116 72 L24 72 Q20 72 20 68 Z" fill="#F39C12" />
          <path d="M38 48 L42 28 Q44 22 52 22 L88 22 Q96 22 98 28 L102 48" fill="#F39C12" />
          <path d="M46 46 L49 30 Q50 28 54 28 L66 28 Q68 28 68 30 L68 46 Z" fill="#2C3E50" />
          <path d="M72 46 L72 30 Q72 28 74 28 L86 28 Q90 28 91 30 L94 46 Z" fill="#2C3E50" />
          <rect x="18" y="68" width="104" height="4" rx="2" fill="#8B7355" />
          <circle cx="40" cy="76" r="12" fill="#2C3E50" />
          <circle cx="40" cy="76" r="7" fill="#F5F0E8" />
          <circle cx="100" cy="76" r="12" fill="#2C3E50" />
          <circle cx="100" cy="76" r="7" fill="#F5F0E8" />
        </g>
        <text x="180" y="162" fontFamily="Georgia, serif" fontSize="10" fontWeight="700" fill="#2C3E50" textAnchor="middle" letterSpacing="3">КИБИТКА</text>

        {/* тень */}
        <ellipse cx="180" cy="188" rx="70" ry="6" fill="#1a2738" opacity="0.4" />
      </svg>
    </div>
  )
}

/* ─── Автомобиль ─────────────────────────────────────────────────── */
export function TaxiCarIllustration() {
  return (
    <div className="flex items-center justify-center bg-[#F5F0E8] py-8 px-6">
      <svg viewBox="0 0 360 200" className="h-auto w-full max-w-sm" aria-hidden="true">
        <rect width="360" height="200" fill="#F5F0E8" />

        {/* Дорога */}
        <rect x="0" y="150" width="360" height="50" fill="#34495E" />
        <rect x="0" y="148" width="360" height="5" fill="#8B7355" opacity="0.4" />
        {/* разметка */}
        {[20, 60, 100, 140, 180, 220, 260, 300, 340].map((x) => (
          <rect key={x} x={x} y="172" width="28" height="4" rx="2" fill="#F5F0E8" opacity="0.4" />
        ))}

        {/* Кузов автомобиля */}
        {/* Нижняя часть */}
        <rect x="30" y="120" width="300" height="34" rx="6" fill="#ECF0F1" />
        {/* Верхняя кабина */}
        <path d="M75 120 L90 80 Q95 72 110 70 L240 70 Q258 70 268 80 L285 120 Z" fill="#ECF0F1" />
        {/* Тёмно-синяя полоса по борту */}
        <rect x="30" y="128" width="300" height="12" fill="#2C3E50" />
        {/* Оранжевые акценты */}
        <rect x="30" y="120" width="300" height="8" fill="#F39C12" />

        {/* Стёкла */}
        {/* Лобовое */}
        <path d="M105 118 L117 82 Q120 76 130 75 L228 75 Q238 75 242 82 L254 118 Z" fill="#1ABC9C" opacity="0.6" />
        {/* Боковые */}
        <path d="M82 118 L94 86 Q97 78 106 77 L115 77 L103 118 Z" fill="#1ABC9C" opacity="0.5" />
        <path d="M278 118 L266 86 Q263 78 254 77 L245 77 L257 118 Z" fill="#1ABC9C" opacity="0.5" />

        {/* Разделитель стёкол */}
        <line x1="178" y1="75" x2="178" y2="118" stroke="#ECF0F1" strokeWidth="3" />

        {/* Логотип на двери */}
        <g transform="translate(135, 126) scale(0.55)">
          <path d="M20 55 Q20 48 30 48 L110 48 Q120 48 120 55 L120 68 Q120 72 116 72 L24 72 Q20 72 20 68 Z" fill="#F39C12" />
          <path d="M38 48 L42 28 Q44 22 52 22 L88 22 Q96 22 98 28 L102 48" fill="#F39C12" />
          <path d="M46 46 L49 30 Q50 28 54 28 L66 28 Q68 28 68 30 L68 46 Z" fill="#2C3E50" />
          <path d="M72 46 L72 30 Q72 28 74 28 L86 28 Q90 28 91 30 L94 46 Z" fill="#2C3E50" />
          <rect x="18" y="68" width="104" height="4" rx="2" fill="#8B7355" />
          <circle cx="40" cy="76" r="12" fill="#2C3E50" />
          <circle cx="40" cy="76" r="7" fill="#ECF0F1" />
          <circle cx="100" cy="76" r="12" fill="#2C3E50" />
          <circle cx="100" cy="76" r="7" fill="#ECF0F1" />
        </g>

        {/* Надпись КИБИТКА */}
        <text x="205" y="141" fontFamily="Georgia, serif" fontSize="9" fontWeight="700" fill="#F5F0E8" letterSpacing="2">КИБИТКА</text>

        {/* Топпер на крыше */}
        <rect x="148" y="58" width="64" height="14" rx="7" fill="#F39C12" />
        <text x="180" y="69" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="700" fill="white" textAnchor="middle">ТАКСИ</text>

        {/* Фары передние */}
        <path d="M30 122 L42 122 L42 134 L30 134 Z" rx="3" fill="#D4AF37" opacity="0.9" />
        <ellipse cx="36" cy="128" rx="5" ry="5" fill="#D4AF37" />
        {/* Фары задние */}
        <path d="M318 122 L330 122 L330 134 L318 134 Z" rx="3" fill="#E74C3C" opacity="0.8" />
        <ellipse cx="324" cy="128" rx="5" ry="5" fill="#E74C3C" />

        {/* Колёса */}
        <circle cx="88" cy="152" r="22" fill="#2C3E50" />
        <circle cx="88" cy="152" r="15" fill="#34495E" />
        <circle cx="88" cy="152" r="7" fill="#ECF0F1" />
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <line
            key={a}
            x1={88 + 8 * Math.cos((a * Math.PI) / 180)}
            y1={152 + 8 * Math.sin((a * Math.PI) / 180)}
            x2={88 + 14 * Math.cos((a * Math.PI) / 180)}
            y2={152 + 14 * Math.sin((a * Math.PI) / 180)}
            stroke="#ECF0F1"
            strokeWidth="2"
          />
        ))}

        <circle cx="272" cy="152" r="22" fill="#2C3E50" />
        <circle cx="272" cy="152" r="15" fill="#34495E" />
        <circle cx="272" cy="152" r="7" fill="#ECF0F1" />
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <line
            key={a}
            x1={272 + 8 * Math.cos((a * Math.PI) / 180)}
            y1={152 + 8 * Math.sin((a * Math.PI) / 180)}
            x2={272 + 14 * Math.cos((a * Math.PI) / 180)}
            y2={152 + 14 * Math.sin((a * Math.PI) / 180)}
            stroke="#ECF0F1"
            strokeWidth="2"
          />
        ))}

        {/* Бампер */}
        <rect x="28" y="136" width="20" height="8" rx="4" fill="#8B7355" opacity="0.6" />
        <rect x="312" y="136" width="20" height="8" rx="4" fill="#8B7355" opacity="0.6" />
      </svg>
    </div>
  )
}
