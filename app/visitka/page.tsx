import { KibitkaMark } from "@/components/moodboard/kibitka-mark"
import { Phone, Globe, MapPin } from "lucide-react"

export const metadata = {
  title: "Визитки — Кибитка",
  description: "Две визитные карточки такси-сервиса «Кибитка» для вставки в мокап.",
}

// Стандартное соотношение визитки 85×55 мм. Размер подобран для экспорта в мокап.
const CARD = "h-[330px] w-[520px] overflow-hidden rounded-xl shadow-2xl shrink-0"

function FrontCard() {
  return (
    <div className={`${CARD} relative flex flex-col justify-between bg-brand-navy p-9`}>
      {/* мягкое оранжевое свечение в углу */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-orange/15 blur-2xl" />

      {/* Лого: знак + надпись */}
      <div className="relative flex items-center gap-4">
        <KibitkaMark className="h-16 w-24" />
        <div className="flex flex-col">
          <span className="font-display text-3xl font-extrabold tracking-[0.3em] text-brand-cream">
            КИБИТКА
          </span>
          <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-brand-orange">
            Такси-сервис
          </span>
        </div>
      </div>

      {/* Слоган */}
      <p className="relative max-w-[300px] text-pretty font-sans text-base leading-relaxed text-brand-cream/70">
        Домчим быстро, уютно и по-честному — как дома, только на колёсах.
      </p>

      {/* Нижняя оранжевая полоса-акцент */}
      <div className="relative -mx-9 -mb-9 mt-2 h-2 bg-brand-orange" />
    </div>
  )
}

function BackCard() {
  return (
    <div className={`${CARD} relative flex flex-col justify-between bg-brand-cream p-9`}>
      {/* боковая навигационная полоса */}
      <div className="absolute inset-y-0 left-0 w-2 bg-brand-orange" />

      <div className="relative flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-display text-2xl font-extrabold tracking-[0.25em] text-brand-navy">
            КИБИТКА
          </span>
          <span className="font-display text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-sand">
            Такси-сервис
          </span>
        </div>
        <KibitkaMark className="h-12 w-20" />
      </div>

      {/* Имя и должность */}
      <div className="relative">
        <p className="font-display text-2xl font-bold text-brand-navy">Иван Соколов</p>
        <p className="font-sans text-sm font-semibold uppercase tracking-wider text-brand-orange-dark">
          Директор по сервису
        </p>
      </div>

      {/* Контакты */}
      <div className="relative flex flex-col gap-2 font-sans text-sm text-brand-navy/80">
        <span className="flex items-center gap-2.5">
          <Phone className="h-4 w-4 text-brand-orange-dark" aria-hidden="true" />
          +7 900 123-45-67
        </span>
        <span className="flex items-center gap-2.5">
          <Globe className="h-4 w-4 text-brand-orange-dark" aria-hidden="true" />
          kibitka.ru
        </span>
        <span className="flex items-center gap-2.5">
          <MapPin className="h-4 w-4 text-brand-orange-dark" aria-hidden="true" />
          Москва, ул. Дорожная, 12
        </span>
      </div>
    </div>
  )
}

export default function VisitkaPage() {
  return (
    <main className="flex min-h-svh flex-col items-center gap-12 bg-background px-6 py-16">
      <header className="text-center">
        <h1 className="font-display text-3xl font-bold text-brand-navy">Визитки «Кибитка»</h1>
        <p className="mt-2 text-pretty font-sans text-brand-sand">
          Две стороны визитки — лицевая и оборотная. Готовы для вставки в мокап.
        </p>
      </header>

      <section className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-sand">
            Лицевая сторона
          </span>
          <FrontCard />
        </div>

        <div className="flex flex-col items-center gap-3">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-sand">
            Оборотная сторона
          </span>
          <BackCard />
        </div>
      </section>
    </main>
  )
}
