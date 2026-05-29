import { KibitkaMark } from "./kibitka-mark"

export function SiteFooter() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-14 text-center">
        <div className="rounded-2xl bg-white p-5">
          <KibitkaMark className="h-16 w-24" />
        </div>
        <p className="font-display text-2xl font-bold tracking-[0.3em]">КИБИТКА</p>
        <p className="max-w-md text-pretty text-sm leading-relaxed text-white/55">
          Единый мудборд и брендбук такси-сервиса «Кибитка». Сводная работа по
          пяти практическим занятиям: анализ бренда, айдентика, логотип и
          фирменный стиль.
        </p>
        <p className="text-xs text-white/35">© 2026 Кибитка · Учебный проект</p>
      </div>
    </footer>
  )
}
