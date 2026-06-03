import { KibitkaMark } from "@/components/moodboard/kibitka-mark"
import { Phone, Globe, MapPin } from "lucide-react"

/**
 * Мокап визитных карточек «Кибитка».
 * Лицевая и оборотная стороны взяты со страницы /visitka и
 * собраны на чистом CSS/Tailwind, чтобы оставаться чёткими на любом разрешении.
 * Карточки показаны в перспективе, как реальный фотомокап полиграфии.
 */

// Общие размеры карточки (соотношение 85×55 мм)
const CARD = "h-[180px] w-[284px] overflow-hidden rounded-lg shadow-xl"

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
    </div>
  )
}

export function BusinessCardMockup() {
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-brand-navy/5 px-6">
      {/* мягкая подсветка фона */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/10 blur-3xl" />

      {/* Две карточки в перспективе: оборотная сзади, лицевая спереди */}
      <div className="relative">
        <div className="absolute -right-10 -top-8 rotate-6 opacity-95">
          <BackCard />
        </div>
        <div className="relative -rotate-3">
          <FrontCard />
        </div>
      </div>
    </div>
  )
}
