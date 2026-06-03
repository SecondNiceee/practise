import { KibitkaMark } from "@/components/moodboard/kibitka-mark"
import { Phone, Globe, Clock, Wallet, ShieldCheck, Sparkles } from "lucide-react"

/**
 * Реалистичный мокап рекламного флаера «Кибитка».
 * Дизайн взят со страницы /visitka и собран на чистом CSS/Tailwind.
 * Флаер лежит на настоящем деревянном столе с 3D-наклоном, контактной тенью
 * и мягким бликом — как настоящий фотомокап полиграфии.
 */

const benefits = [
  { icon: Clock, title: "Подача за 3 минуты" },
  { icon: Wallet, title: "Честная фиксированная цена" },
  { icon: ShieldCheck, title: "Проверенные водители" },
]

const FLYER = "h-[300px] w-[212px] overflow-hidden rounded-lg"

function Flyer() {
  return (
    <div className={`${FLYER} relative flex flex-col bg-brand-cream`}>
      {/* Верхний навигационный блок */}
      <div className="relative overflow-hidden bg-brand-navy px-4 pb-6 pt-4">
        <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-orange/20 blur-2xl" />

        <div className="relative flex items-center gap-1.5">
          <KibitkaMark className="h-5 w-8" />
          <div className="flex flex-col">
            <span className="font-display text-[10px] font-extrabold tracking-[0.25em] text-brand-cream">КИБИТКА</span>
            <span className="font-display text-[4px] font-semibold uppercase tracking-[0.3em] text-brand-orange">
              Такси-сервис
            </span>
          </div>
        </div>

        <h2 className="relative mt-4 text-balance font-display text-lg font-extrabold leading-[1.05] text-brand-cream">
          Первая поездка <span className="text-brand-orange">−50%</span>
        </h2>
        <p className="relative mt-1.5 max-w-[150px] text-pretty font-sans text-[7px] leading-snug text-brand-cream/70">
          Домчим быстро, уютно и по-честному — как дома, только на колёсах.
        </p>
      </div>

      {/* Оранжевая полоса с промокодом */}
      <div className="relative -mt-3 mx-4 flex items-center justify-between rounded-md bg-brand-orange px-3 py-2 shadow-lg">
        <div className="flex flex-col">
          <span className="font-sans text-[5px] font-semibold uppercase tracking-wider text-brand-navy/70">
            Промокод
          </span>
          <span className="font-display text-sm font-extrabold tracking-wider text-brand-navy">ДОМОЙ50</span>
        </div>
        <Sparkles className="h-4 w-4 text-brand-navy" aria-hidden="true" />
      </div>

      {/* Преимущества */}
      <div className="flex flex-1 flex-col justify-center gap-2.5 px-4 py-3">
        {benefits.map((b) => {
          const Icon = b.icon
          return (
            <div key={b.title} className="flex items-center gap-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-orange/10 text-brand-orange-dark">
                <Icon className="h-3 w-3" aria-hidden="true" />
              </span>
              <span className="font-display text-[9px] font-bold text-brand-navy">{b.title}</span>
            </div>
          )
        })}
      </div>

      {/* Контакты-подвал */}
      <div className="relative flex items-center justify-between gap-2 bg-brand-navy px-4 py-2.5">
        <div className="absolute inset-x-0 top-0 h-0.5 bg-brand-orange" />
        <span className="flex items-center gap-1 font-sans text-[7px] font-semibold text-brand-cream">
          <Phone className="h-2 w-2 text-brand-orange" aria-hidden="true" />
          +7 900 123-45-67
        </span>
        <span className="flex items-center gap-1 font-sans text-[7px] text-brand-cream/80">
          <Globe className="h-2 w-2 text-brand-orange" aria-hidden="true" />
          kibitka.ru
        </span>
      </div>

      {/* мягкий блик от освещения */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-black/10" />
    </div>
  )
}

export function FlyerMockup() {
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden">
      {/* Фотореалистичная поверхность стола */}
      <img
        src="/mockups/desk-surface-dark.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* лёгкое затемнение по краям для глубины */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.28)_100%)]" />

      {/* Сцена с перспективой: флаер повёрнут к зрителю «лицом» */}
      <div className="relative" style={{ perspective: "1600px" }}>
        <div style={{ transform: "rotateX(6deg) rotateZ(-3deg)" }}>
          {/* контактная тень под флаером */}
          <div
            className="absolute inset-0 translate-x-2 translate-y-4 rounded-lg bg-black/50 blur-xl"
            aria-hidden="true"
          />
          <div className="relative">
            <Flyer />
          </div>
        </div>
      </div>
    </div>
  )
}
