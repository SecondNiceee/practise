import { KibitkaLogo } from "@/components/moodboard/kibitka-logo"
import { KibitkaMark } from "@/components/moodboard/kibitka-mark"
import Link from "next/link"

export function FinalCover() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-10 h-80 w-80 rounded-full bg-brand-red/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[0.95fr_1.05fr] md:items-center md:py-28">
        {/* Logo lockup */}
        <div className="flex justify-center md:justify-start order-2 md:order-1">
          <div className="flex w-full max-w-sm flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
            <div className="flex flex-col items-center rounded-2xl bg-white p-10 shadow-2xl shadow-black/30">
              <KibitkaLogo size="xl" caption="Такси-сервис" />
            </div>
            <p className="text-center text-sm text-white/55">
              Основной знак — ретро-такси
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-7 order-1 md:order-2">
          <div className="flex flex-col gap-3">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-brand-orange">
              Завершение
            </span>
            <h2 className="text-balance font-display text-5xl font-extrabold leading-[1] md:text-6xl">
              Спасибо за внимание
            </h2>
          </div>

          <p className="max-w-md text-pretty text-lg leading-relaxed text-white/75">
            Это руководство охватывает все аспекты фирменного стиля такси-сервиса
            «Кибитка». Для вопросов и уточнений обратитесь к автору.
          </p>

          {/* Credits box */}
          <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Подготовил
            </p>
            <p className="font-display text-lg font-bold">Титов Николай</p>
            <p className="text-sm text-white/50">Брендбук, 2026</p>
          </div>

          <p className="text-xs text-white/30">© 2026 Кибитка. Учебный проект</p>
        </div>
      </div>
    </footer>
  )
}

