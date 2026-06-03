import { KibitkaMark } from "@/components/moodboard/kibitka-mark"

/**
 * Мокап бейджа водителя «Кибитка».
 * Вертикальный ID-бейдж с шнурком (lanyard), шапкой с логотипом, фото водителя,
 * именем и должностью. Лежит на деревянном столе с лёгкой перспективой и тенью.
 */
export function BadgeMockup() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden">
      {/* Поверхность стола */}
      <img
        src="/mockups/desk-surface.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Сцена с лёгкой перспективой */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: "1400px" }}>
        <div
          className="relative"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(20deg) rotateZ(-7deg)" }}
        >
          {/* Контактная тень */}
          <div
            className="absolute inset-0 translate-x-3 translate-y-5 rounded-xl bg-black/35 blur-xl"
            aria-hidden="true"
          />

          {/* Шнурок (lanyard) — две тканевые ленты, металлический карабин и кольцо */}
          <div
            className="absolute -top-[150px] left-1/2 -z-10 -translate-x-1/2"
            aria-hidden="true"
          >
            <svg width="200" height="170" viewBox="0 0 200 170" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {/* Объём ленты: тёмные края, светлая середина */}
                <linearGradient id="strapShade" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#1f2d3a" />
                  <stop offset="0.5" stopColor="#3a546b" />
                  <stop offset="1" stopColor="#1f2d3a" />
                </linearGradient>
                <linearGradient id="metalShade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#e8e8ea" />
                  <stop offset="0.5" stopColor="#a9adb2" />
                  <stop offset="1" stopColor="#7c8086" />
                </linearGradient>
              </defs>

              {/* Левая лента */}
              <path d="M100 14 C 78 60, 58 110, 70 150 L 86 150 C 78 110, 92 62, 104 18 Z" fill="url(#strapShade)" />
              {/* Правая лента */}
              <path d="M100 14 C 122 60, 142 110, 130 150 L 114 150 C 122 110, 108 62, 96 18 Z" fill="url(#strapShade)" />

              {/* Оранжевая строчка по лентам */}
              <path d="M99 20 C 80 64, 64 110, 74 148" stroke="#e8732b" strokeWidth="1.5" strokeDasharray="3 3" fill="none" opacity="0.7" />
              <path d="M101 20 C 120 64, 136 110, 126 148" stroke="#e8732b" strokeWidth="1.5" strokeDasharray="3 3" fill="none" opacity="0.7" />

              {/* Шов на вершине (где лента сходится за шеей) */}
              <path d="M92 16 L 108 16 L 104 26 L 96 26 Z" fill="#16212c" />

              {/* Металлическое кольцо */}
              <circle cx="100" cy="150" r="9" fill="none" stroke="url(#metalShade)" strokeWidth="4" />
              {/* Карабин-зажим */}
              <rect x="95" y="156" width="10" height="14" rx="2" fill="url(#metalShade)" />
            </svg>
          </div>

          {/* Сам бейдж */}
          <div className="relative w-[200px] overflow-hidden rounded-xl bg-brand-cream shadow-2xl ring-1 ring-black/5">
            {/* Прорезь под клипсу */}
            <div className="absolute left-1/2 top-2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-brand-navy/15" aria-hidden="true" />

            {/* Шапка с логотипом */}
            <div className="flex items-center justify-center gap-2 bg-brand-navy px-4 pb-3 pt-5">
              <KibitkaMark className="h-7 w-12" />
              <div className="flex flex-col leading-none">
                <span className="font-display text-sm font-extrabold tracking-[0.2em] text-brand-cream">
                  КИБИТКА
                </span>
                <span className="font-display text-[6px] font-semibold uppercase tracking-[0.25em] text-brand-orange">
                  Такси-сервис
                </span>
              </div>
            </div>

            {/* Фото водителя */}
            <div className="flex justify-center px-4 pt-4">
              <div className="h-24 w-24 overflow-hidden rounded-lg ring-2 ring-brand-orange/40">
                <img
                  src="/mockups/driver-portrait.png"
                  alt="Фото водителя"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Данные */}
            <div className="flex flex-col items-center gap-0.5 px-4 pb-2 pt-3 text-center">
              <span className="font-display text-base font-bold text-brand-navy">Иван Петров</span>
              <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-brand-orange-dark">
                Водитель
              </span>
            </div>

            {/* ID-строка */}
            <div className="mt-1 flex items-center justify-between bg-brand-navy/5 px-4 py-2">
              <span className="font-mono text-[9px] font-medium text-brand-navy/60">ID 04-1271</span>
              <span className="font-mono text-[9px] font-medium text-brand-navy/60">kibitka.ru</span>
            </div>

            {/* Нижняя оранжевая полоса */}
            <div className="h-1.5 w-full bg-brand-orange" />

            {/* Блик */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
