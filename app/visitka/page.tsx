import { KibitkaMark } from "@/components/moodboard/kibitka-mark"
import { Phone, Globe, MapPin, Clock, Wallet, ShieldCheck, Sparkles } from "lucide-react"

export const metadata = {
  title: "Визитки — Кибитка",
  description: "Визитные карточки и рекламный флаер такси-сервиса «Кибитка» для вставки в мокап.",
}

// Стандартное соотношение визитки 85×55 мм. Размер подобран для экспорта в мокап.
const CARD = "h-[330px] w-[520px] overflow-hidden rounded-xl shadow-2xl shrink-0"

// Флаер формата A5 (соотношение ~1:1.41) для экспорта в мокап.
const FLYER = "h-[700px] w-[496px] overflow-hidden rounded-xl shadow-2xl shrink-0"

const flyerBenefits = [
  { icon: Clock, title: "Подача за 3 минуты", desc: "Машина приезжает быстро в любой район города." },
  { icon: Wallet, title: "Честная фиксированная цена", desc: "Стоимость известна заранее — без скрытых доплат." },
  { icon: ShieldCheck, title: "Проверенные водители", desc: "Вежливые, опытные и всегда на связи." },
]

function Flyer() {
  return (
    <div className={`${FLYER} relative flex flex-col bg-brand-cream`}>
      {/* Верхний навигационный блок */}
      <div className="relative overflow-hidden bg-brand-navy px-9 pb-12 pt-9">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-orange/20 blur-3xl" />

        <div className="relative flex items-center gap-3">
          <KibitkaMark className="h-12 w-20" />
          <div className="flex flex-col">
            <span className="font-display text-2xl font-extrabold tracking-[0.3em] text-brand-cream">КИБИТКА</span>
            <span className="font-display text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-orange">
              Такси-сервис
            </span>
          </div>
        </div>

        <h2 className="relative mt-9 text-balance font-display text-4xl font-extrabold leading-[1.05] text-brand-cream">
          Первая поездка <span className="text-brand-orange">−50%</span>
        </h2>
        <p className="relative mt-3 max-w-[330px] text-pretty font-sans text-base leading-relaxed text-brand-cream/70">
          Домчим быстро, уютно и по-честному — как дома, только на колёсах.
        </p>
      </div>

      {/* Оранжевая полоса с промокодом */}
      <div className="relative -mt-6 mx-9 flex items-center justify-between rounded-xl bg-brand-orange px-6 py-4 shadow-lg">
        <div className="flex flex-col">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-brand-navy/70">
            Промокод
          </span>
          <span className="font-display text-2xl font-extrabold tracking-wider text-brand-navy">ДОМОЙ50</span>
        </div>
        <Sparkles className="h-8 w-8 text-brand-navy" aria-hidden="true" />
      </div>

      {/* Преимущества */}
      <div className="flex flex-1 flex-col gap-5 px-9 py-8">
        {flyerBenefits.map((b) => {
          const Icon = b.icon
          return (
            <div key={b.title} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange-dark">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold text-brand-navy">{b.title}</span>
                <span className="font-sans text-sm leading-snug text-brand-navy/60">{b.desc}</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Контакты-подвал */}
      <div className="relative flex items-center justify-between gap-4 bg-brand-navy px-9 py-5">
        <div className="absolute inset-x-0 top-0 h-1 bg-brand-orange" />
        <span className="flex items-center gap-2 font-sans text-sm font-semibold text-brand-cream">
          <Phone className="h-4 w-4 text-brand-orange" aria-hidden="true" />
          +7 900 123-45-67
        </span>
        <span className="flex items-center gap-2 font-sans text-sm text-brand-cream/80">
          <Globe className="h-4 w-4 text-brand-orange" aria-hidden="true" />
          kibitka.ru
        </span>
      </div>
    </div>
  )
}

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
        <h1 className="font-display text-3xl font-bold text-brand-navy">Полиграфия «Кибитка»</h1>
        <p className="mt-2 text-pretty font-sans text-brand-sand">
          Визитки и рекламный флаер. Готовы для вставки в мокап.
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

        <div className="flex flex-col items-center gap-3">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-sand">
            Рекламный флаер / листовка
          </span>
          <Flyer />
        </div>
      </section>
    </main>
  )
}
