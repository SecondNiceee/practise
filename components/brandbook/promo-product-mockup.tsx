import { MapPin, Phone } from "lucide-react"

/**
 * Векторный макет промо-продукции «Кибитка».
 * Брендированный кофейный стакан с рукавом + поддерживающие промо-носители.
 * Нарисован на CSS — остаётся чётким при любом масштабе.
 */
export function PromoProductMockup() {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden bg-brand-navy">
      {/* Фоновые детали */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-brand-cream) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden="true"
      />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-orange/15" aria-hidden="true" />
      <div className="absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-brand-orange/10" aria-hidden="true" />

      <div className="relative flex h-full items-end justify-center gap-6 px-8 pt-6">
        {/* Салфетка / костер сзади */}
        <div className="absolute bottom-5 left-1/2 hidden h-28 w-28 -translate-x-[140%] rotate-[-8deg] rounded-md border border-dashed border-brand-cream/40 bg-brand-cream/95 p-2 shadow-lg sm:block">
          <div className="flex h-full flex-col items-center justify-center gap-1 rounded-sm border border-brand-navy/10">
            <span className="font-display text-sm font-extrabold tracking-tight text-brand-navy">
              КИБИТКА
            </span>
            <span className="h-0.5 w-8 rounded-full bg-brand-orange" />
            <span className="text-[7px] font-medium uppercase tracking-[0.2em] text-brand-navy/50">
              city taxi
            </span>
          </div>
        </div>

        {/* Бумажный стакан */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Крышка */}
          <div className="h-3 w-[118px] rounded-t-md bg-brand-navy shadow-sm" />
          <div className="h-2 w-[124px] -mt-1 rounded-md bg-brand-navy/90" />
          {/* Корпус — трапеция через clip-path */}
          <div
            className="relative h-[180px] w-[128px] bg-brand-cream shadow-2xl"
            style={{ clipPath: "polygon(8% 0, 92% 0, 100% 100%, 0% 100%)" }}
          >
            {/* Рукав-обёртка */}
            <div className="absolute inset-x-0 top-[46px] flex h-[92px] flex-col items-center justify-center gap-1.5 bg-brand-orange px-2 text-center">
              <span className="font-display text-base font-extrabold leading-none tracking-tight text-white">
                КИБИТКА
              </span>
              <span className="h-[2px] w-10 rounded-full bg-white/80" />
              <span className="text-[7px] font-semibold uppercase tracking-[0.25em] text-white/90">
                городское такси
              </span>
              <span className="mt-0.5 flex items-center gap-1 text-[8px] font-bold text-white">
                <Phone className="h-2.5 w-2.5" aria-hidden="true" />
                250-250
              </span>
            </div>
          </div>
        </div>

        {/* Бумажный пакет / тейк-эвэй */}
        <div className="relative z-10 hidden h-[150px] w-[110px] flex-col overflow-hidden rounded-b-sm rounded-t-[2px] bg-brand-cream shadow-2xl sm:flex">
          {/* Загиб сверху */}
          <div className="h-4 w-full bg-brand-cream shadow-[inset_0_-3px_4px_rgba(0,0,0,0.08)]" />
          {/* Ручки */}
          <div className="absolute left-1/2 top-1 h-6 w-12 -translate-x-1/2 rounded-b-full border-2 border-brand-navy/70" />
          <div className="flex flex-1 flex-col items-center justify-center gap-1.5 px-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-navy">
              <MapPin className="h-5 w-5 text-brand-orange" aria-hidden="true" />
            </span>
            <span className="font-display text-sm font-extrabold tracking-tight text-brand-navy">
              КИБИТКА
            </span>
            <span className="h-0.5 w-7 rounded-full bg-brand-orange" />
            <span className="text-[6.5px] font-medium uppercase tracking-[0.18em] text-brand-navy/50">
              поехали с нами
            </span>
          </div>
        </div>
      </div>

      {/* Поверхность стола */}
      <div className="absolute inset-x-0 bottom-0 h-5 bg-gradient-to-t from-black/30 to-transparent" aria-hidden="true" />
    </div>
  )
}
