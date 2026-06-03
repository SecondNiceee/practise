import { KibitkaMark } from "@/components/moodboard/kibitka-mark"
import { Phone, Globe, Clock, Wallet, ShieldCheck } from "lucide-react"

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

const FLYER = "h-[320px] w-[212px] overflow-hidden rounded-lg"

function Flyer() {
  return (
    <div className={`${FLYER} relative flex flex-col bg-brand-cream`}>
      {/* Верхний блок с логотипом и оффером */}
      <div className="relative overflow-hidden bg-brand-navy px-4 pb-5 pt-4">
        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-orange/25 blur-2xl" />

        <div className="relative flex items-center gap-1.5">
          <KibitkaMark className="h-6 w-9" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-[11px] font-extrabold tracking-[0.26em] text-brand-cream">КИБИТКА</span>
            <span className="mt-[2px] font-display text-[4px] font-semibold uppercase tracking-[0.32em] text-brand-orange">
              Такси-сервис
            </span>
          </div>
        </div>

        <p className="relative mt-4 font-sans text-[7px] font-semibold uppercase tracking-[0.28em] text-brand-orange">
          Первая поездка
        </p>
        <p className="relative mt-1 font-display text-[40px] font-black leading-none text-brand-orange">−50%</p>
        <p className="relative mt-2 max-w-[150px] text-pretty font-sans text-[7px] leading-relaxed text-brand-cream/70">
          Домчим быстро, уютно и по-честному — как дома, только на колёсах.
        </p>
      </div>

      {/* Преимущества */}
      <div className="flex flex-1 flex-col justify-center gap-2.5 px-4 py-3">
        {benefits.map((b) => {
          const Icon = b.icon
          return (
            <div key={b.title} className="flex items-center gap-2">
              <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-md bg-brand-orange/12 text-brand-orange-dark">
                <Icon className="h-2.5 w-2.5" aria-hidden="true" />
              </span>
              <span className="font-display text-[8.5px] font-bold text-brand-navy">{b.title}</span>
            </div>
          )
        })}
      </div>

      {/* Призыв к действию */}
      <div className="px-4 pb-3">
        <div className="rounded-md bg-brand-orange py-1.5 text-center font-display text-[9px] font-extrabold uppercase tracking-[0.12em] text-brand-navy">
          Закажите поездку
        </div>
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
