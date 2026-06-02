import { KibitkaLogo } from "@/components/moodboard/kibitka-logo"
import { KibitkaMark } from "@/components/moodboard/kibitka-mark"
import Link from "next/link"

export function FinalCover() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-brand-red/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="flex flex-col items-center gap-10 text-center">
          {/* Logo */}
          <div className="rounded-3xl bg-white p-8 shadow-2xl shadow-black/20">
            <KibitkaLogo size="lg" caption="" />
          </div>

          {/* Tagline */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
              Довезём в целости и сохранности
            </h2>
            <p className="mx-auto max-w-xl text-pretty text-lg leading-relaxed text-white/70">
              Брендбук такси-сервиса «Кибитка» — полное руководство по фирменному
              стилю: от логотипа до носителей.
            </p>
          </div>

          {/* Credits */}
          <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Подготовил
            </p>
            <p className="font-display text-xl font-bold">Титов Николай</p>
            <p className="text-sm text-white/50">Практическая работа, 2026</p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/moodboard"
              className="rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10"
            >
              Смотреть мудборд
            </Link>
            <a
              href="#contents"
              className="rounded-full bg-brand-orange px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-dark"
            >
              К оглавлению
            </a>
          </div>

          {/* Small mark */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="rounded-xl bg-white/10 p-3">
              <KibitkaMark className="h-10 w-16" />
            </div>
            <p className="font-display text-lg font-bold tracking-[0.3em] text-white/80">КИБИТКА</p>
          </div>

          <p className="text-xs text-white/30">© 2026 Кибитка. Учебный проект</p>
        </div>
      </div>
    </footer>
  )
}
