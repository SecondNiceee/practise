import { KibitkaMark } from "@/components/moodboard/kibitka-mark"
import { ShieldCheck, Zap, Sparkles, Smile } from "lucide-react"

const values = [
  { icon: ShieldCheck, label: "Безопасность" },
  { icon: Zap, label: "Скорость" },
  { icon: Sparkles, label: "Чистота" },
  { icon: Smile, label: "Дружелюбие" },
]

export function BrandbookCover() {
  return (
    <header className="relative overflow-hidden bg-brand-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-orange/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-10 h-80 w-80 rounded-full bg-brand-red/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-28">
        <div className="flex flex-col gap-7">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
            Brand Guidelines · 2026
          </span>

          <div className="flex flex-col gap-3">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-brand-orange">
              Брендбук
            </span>
            <h1 className="text-balance font-display text-6xl font-extrabold leading-[1] md:text-8xl">
              Кибитка
            </h1>
          </div>

          <p className="max-w-md text-pretty text-lg leading-relaxed text-white/75">
            «Довезём в целости и сохранности». Полное руководство по фирменному
            стилю городского такси-сервиса: логотип, цвета, типографика, паттерны,
            маскот и правила использования.
          </p>

          <div className="flex flex-wrap gap-3">
            {values.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/85"
              >
                <Icon className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Подготовил Титов Николай
          </p>
        </div>

        {/* Logo lockup */}
        <div className="flex justify-center md:justify-end">
          <div className="flex w-full max-w-sm flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
            <div className="flex flex-col items-center rounded-2xl bg-white p-10 shadow-2xl shadow-black/30">
              <KibitkaMark className="h-32 w-44" />
              <p className="mt-4 font-display text-3xl font-bold tracking-[0.35em] text-brand-navy">
                КИБИТКА
              </p>
              <p className="mt-1 font-display text-[0.65rem] uppercase tracking-[0.3em] text-brand-sand">
                Такси-сервис
              </p>
            </div>
            <p className="text-center text-sm text-white/55">
              Основной знак — ретро-такси
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
