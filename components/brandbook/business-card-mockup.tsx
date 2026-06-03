import { KibitkaMark } from "@/components/moodboard/kibitka-mark"
import { Phone, Globe, MapPin } from "lucide-react"

/**
 * Реалистичный мокап визитных карточек «Кибитка».
 * Лицевая и оборотная стороны взяты со страницы /visitka и собраны на чистом
 * CSS/Tailwind. Карточки лежат на настоящем деревянном столе с 3D-наклоном,
 * контактными тенями и мягким бликом — как настоящий фотомокап полиграфии.
 */

const CARD = "h-[180px] w-[284px] overflow-hidden rounded-lg"

function FrontCard() {
  return (
    <div className={`${CARD} relative flex flex-col justify-between bg-brand-navy p-5`}>
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-orange/15 blur-2xl" />

      <div className="relative flex items-center gap-2.5">
        <KibitkaMark className="h-9 w-14" />
        <div className="flex flex-col">
          <span className="font-display text-base font-extrabold tracking-[0.25em] text-brand-cream">КИБИТКА</span>
          <span className="font-display text-[7px] font-semibold uppercase tracking-[0.3em] text-brand-orange">
            Такси-сервис
          </span>
        </div>
      </div>

      <p className="relative max-w-[180px] text-pretty font-sans text-[10px] leading-snug text-brand-cream/70">
        Домчим быстро, уютно и по-честному — как дома, только на колёсах.
      </p>

      <div className="relative -mx-5 -mb-5 mt-1 h-1.5 bg-brand-orange" />

      {/* мягкий блик от освещения */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/10" />
    </div>
  )
}

function BackCard() {
  return (
    <div className={`${CARD} relative flex flex-col justify-between bg-brand-cream p-5`}>
      <div className="absolute inset-y-0 left-0 w-1.5 bg-brand-orange" />

      <div className="relative flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-display text-sm font-extrabold tracking-[0.2em] text-brand-navy">КИБИТКА</span>
          <span className="font-display text-[6px] font-semibold uppercase tracking-[0.3em] text-brand-sand">
            Такси-сервис
          </span>
        </div>
        <KibitkaMark className="h-7 w-11" />
      </div>

      <div className="relative">
        <p className="font-display text-sm font-bold text-brand-navy">Иван Соколов</p>
        <p className="font-sans text-[8px] font-semibold uppercase tracking-wider text-brand-orange-dark">
          Директор по сервису
        </p>
      </div>

      <div className="relative flex flex-col gap-1 font-sans text-[9px] text-brand-navy/80">
        <span className="flex items-center gap-1.5">
          <Phone className="h-2.5 w-2.5 text-brand-orange-dark" aria-hidden="true" />
          +7 900 123-45-67
        </span>
        <span className="flex items-center gap-1.5">
          <Globe className="h-2.5 w-2.5 text-brand-orange-dark" aria-hidden="true" />
          kibitka.ru
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin className="h-2.5 w-2.5 text-brand-orange-dark" aria-hidden="true" />
          Москва, ул. Дорожная, 12
        </span>
      </div>

      {/* мягкий блик от освещения */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/5" />
    </div>
  )
}

export function BusinessCardMockup() {
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden">
      {/* Фотореалистичная поверхность стола */}
      <img
        src="/mockups/desk-surface.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* лёгкое затемнение по краям для глубины */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.18)_100%)]" />

      {/* Сцена с перспективой: карточки лежат на столе */}
      <div className="relative" style={{ perspective: "1100px" }}>
        <div
          className="relative"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(52deg) rotateZ(-22deg)" }}
        >
          {/* Оборотная карточка — сзади/слева */}
          <div className="absolute -left-28 -top-24">
            <div className="absolute inset-0 translate-x-3 translate-y-4 rounded-lg bg-black/35 blur-xl" aria-hidden="true" />
            <div className="relative">
              <BackCard />
            </div>
          </div>

          {/* Лицевая карточка — спереди, частично перекрывает */}
          <div className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-5 rounded-lg bg-black/40 blur-xl" aria-hidden="true" />
            <div className="relative">
              <FrontCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
