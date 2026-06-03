import { KibitkaMark } from "@/components/moodboard/kibitka-mark"

/**
 * Мокап фирменного промо-набора «Кибитка».
 * Flat-lay композиция из брендированных сувениров с логотипом:
 *  - круглый стикер-значок,
 *  - карта лояльности,
 *  - брелок-бирка,
 *  - блокнот с тиснением.
 * Всё собрано на чистом CSS/Tailwind в фирменных цветах.
 */

/** Круглый значок / стикер с логотипом */
function RoundSticker() {
  return (
    <div className="flex aspect-square w-[26%] -rotate-6 flex-col items-center justify-center gap-1 rounded-full bg-brand-orange shadow-lg ring-4 ring-brand-cream">
      <KibitkaMark className="h-[34%] w-auto" windowColor="#2c3e50" bodyColor="#2c3e50" wheelColor="#2c3e50" />
      <span className="font-display text-[9px] font-extrabold tracking-[0.18em] text-brand-navy">КИБИТКА</span>
    </div>
  )
}

/** Карта лояльности */
function LoyaltyCard() {
  return (
    <div className="relative flex aspect-[1.6/1] w-[46%] rotate-3 flex-col justify-between overflow-hidden rounded-xl bg-brand-navy p-3 shadow-xl">
      <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand-orange/25 blur-xl" />
      <div className="relative flex items-center gap-1.5">
        <KibitkaMark className="h-5 w-8" />
        <div className="flex flex-col leading-none">
          <span className="font-display text-[10px] font-extrabold tracking-[0.22em] text-brand-cream">КИБИТКА</span>
          <span className="mt-[1px] font-display text-[3.5px] font-semibold uppercase tracking-[0.3em] text-brand-orange">
            Такси-сервис
          </span>
        </div>
      </div>
      <div className="relative flex items-end justify-between">
        <span className="font-mono text-[7px] font-medium tracking-[0.15em] text-brand-cream/60">
          0412 •••• 1271
        </span>
        <span className="rounded bg-brand-orange px-1.5 py-0.5 font-display text-[7px] font-bold text-brand-navy">
          CLUB
        </span>
      </div>
    </div>
  )
}

/** Брелок-бирка */
function KeyTag() {
  return (
    <div className="flex w-[20%] rotate-6 flex-col items-center">
      <span className="h-3 w-3 rounded-full border-2 border-brand-navy/40" aria-hidden="true" />
      <div className="-mt-1 flex aspect-[1/1.5] w-full flex-col items-center justify-center gap-1 rounded-lg bg-brand-cream shadow-lg ring-2 ring-brand-orange">
        <KibitkaMark className="h-[26%] w-auto" />
        <span className="font-display text-[6px] font-extrabold tracking-[0.12em] text-brand-navy">КИБИТКА</span>
      </div>
    </div>
  )
}

/** Блокнот с логотипом */
function Notebook() {
  return (
    <div className="relative flex aspect-[1/1.3] w-[30%] -rotate-3 flex-col items-center justify-center gap-1.5 rounded-lg bg-brand-orange shadow-xl">
      <div className="absolute left-0 top-0 h-full w-1.5 rounded-l-lg bg-brand-navy" aria-hidden="true" />
      <KibitkaMark className="h-[24%] w-auto" windowColor="#2c3e50" bodyColor="#2c3e50" wheelColor="#2c3e50" />
      <span className="font-display text-[7px] font-extrabold tracking-[0.16em] text-brand-navy">КИБИТКА</span>
    </div>
  )
}

export function PromoSetMockup() {
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-brand-cream">
      {/* мягкие фирменные акценты на фоне */}
      <div className="pointer-events-none absolute -left-10 -top-8 h-40 w-40 rounded-full bg-brand-orange/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-10 -right-8 h-44 w-44 rounded-full bg-brand-navy/10 blur-3xl" aria-hidden="true" />

      {/* Композиция сувениров */}
      <div className="relative flex w-[88%] flex-col items-center gap-3">
        <div className="flex w-full items-center justify-center gap-3">
          <LoyaltyCard />
          <Notebook />
        </div>
        <div className="flex w-full items-center justify-center gap-4">
          <RoundSticker />
          <KeyTag />
        </div>
      </div>
    </div>
  )
}
