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

          {/* Шнурок */}
          <div className="absolute -top-10 left-1/2 -z-10 flex -translate-x-1/2 flex-col items-center" aria-hidden="true">
            <div className="h-12 w-[18px] rounded-t-md bg-brand-orange shadow-md" />
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
