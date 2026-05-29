import { KibitkaMark } from "./kibitka-mark"
import { ShieldCheck, Zap, Sparkles, MapPin } from "lucide-react"

const stats = [
  { value: "5", label: "практических работ" },
  { value: "1", label: "единый фирменный стиль" },
  { value: "B2C", label: "городские перевозки" },
]

const pills = [
  { icon: ShieldCheck, label: "Безопасность" },
  { icon: Zap, label: "Скорость" },
  { icon: Sparkles, label: "Чистота" },
  { icon: MapPin, label: "Точность" },
]

export function HeroSection() {
  return (
    <header className="relative overflow-hidden bg-brand-navy text-white">
      {/* warm glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-orange/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-brand-red/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
        <div className="flex flex-col gap-7">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Мудборд · Брендбук
          </span>

          <h1 className="text-balance font-display text-5xl font-extrabold leading-[1.05] md:text-7xl">
            Кибитка
          </h1>

          <p className="max-w-md text-pretty text-lg leading-relaxed text-white/75">
            «Довезём в целости и сохранности». Единый визуальный гид
            такси-сервиса, собравший воедино пять практических работ — от анализа
            бренда до брендбука.
          </p>

          <div className="flex flex-wrap gap-3">
            {pills.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/85"
              >
                <Icon className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          <dl className="mt-2 flex flex-wrap gap-8 border-t border-white/10 pt-7">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold text-brand-orange">
                  {s.value}
                </dd>
                <span className="max-w-[8rem] text-sm leading-snug text-white/55">
                  {s.label}
                </span>
              </div>
            ))}
          </dl>
        </div>

        {/* Logo lockup */}
        <div className="flex justify-center md:justify-end">
          <div className="flex w-full max-w-sm flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
            <div className="rounded-2xl bg-white p-8 shadow-2xl shadow-black/30">
              <KibitkaMark className="h-32 w-44" />
              <p className="mt-1 text-center font-display text-2xl font-bold tracking-[0.35em] text-brand-navy">
                КИБИТКА
              </p>
            </div>
            <p className="text-center text-sm text-white/55">
              Основной знак · ретро-такси
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
