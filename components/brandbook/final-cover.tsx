import { KibitkaLogo } from "@/components/moodboard/kibitka-logo"
import { SlideWrapper } from "./slide-wrapper"

export function FinalCover() {
  return (
    <SlideWrapper slideNumber={21} totalSlides={21} variant="dark" className="flex items-center">
      <footer className="relative w-full text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 overflow-hidden"
        >
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-orange/25 blur-3xl" />
          <div className="absolute -bottom-40 left-10 h-80 w-80 rounded-full bg-brand-red/20 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-28">
          <div className="flex flex-col gap-7">
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

            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Подготовил Титов Николай
            </p>
          </div>

          {/* Logo lockup */}
          <div className="flex justify-center md:justify-end">
            <div className="flex w-full max-w-sm flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
              <div className="flex flex-col items-center rounded-2xl bg-white p-10 shadow-2xl shadow-black/30">
                <KibitkaLogo size="xl" caption="Такси-сервис" />
              </div>
              <p className="text-center text-sm text-white/55">
                Основной знак — ретро-такси
              </p>
            </div>
          </div>
        </div>
      </footer>
    </SlideWrapper>
  )
}
