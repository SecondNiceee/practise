import Link from "next/link"
import { KibitkaMark } from "@/components/moodboard/kibitka-mark"

export function BrandbookFooter() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-16 text-center">
        <div className="rounded-2xl bg-white p-5">
          <KibitkaMark className="h-16 w-24" />
        </div>
        <p className="font-display text-2xl font-bold tracking-[0.3em]">КИБИТКА</p>
        <p className="max-w-md text-pretty text-sm leading-relaxed text-white/55">
          Брендбук такси-сервиса «Кибитка» — сводная работа по пяти практическим
          занятиям: анализ бренда, айдентика, разработка логотипа и фирменный
          стиль.
        </p>
        <Link
          href="/moodboard"
          className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10"
        >
          Смотреть мудборд
        </Link>
        <p className="text-xs text-white/35">© 2026 Кибитка · Учебный проект</p>
      </div>
    </footer>
  )
}
