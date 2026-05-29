import { KibitkaMark } from "./kibitka-mark"

/** Диаметр одного колеса логотипа (в пикселях). */
const WHEEL = 16
/** Величина охранного поля = три колеса логотипа. */
const X = WHEEL * 3

/** Одно колесо логотипа. */
function Wheel({ size = WHEEL }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label="Колесо логотипа">
      <circle cx="12" cy="12" r="12" fill="#2c3e50" />
      <circle cx="12" cy="12" r="8" fill="#ecf0f1" />
      <circle cx="12" cy="12" r="4" fill="#2c3e50" />
    </svg>
  )
}

/** Эталон охранного поля — три колеса в ряд. */
function ThreeWheels() {
  return (
    <div className="flex items-center gap-1" role="img" aria-label="Три колеса логотипа">
      <Wheel />
      <Wheel />
      <Wheel />
    </div>
  )
}

export function ProtectiveField() {
  return (
    <div className="mt-4 rounded-2xl border border-brand-navy/10 bg-card p-6 md:p-8">
      <div className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
        {/* Диаграмма: отступ до края носителя равен X */}
        <div className="flex justify-center">
          <div
            className="relative rounded-xl border-2 border-dashed border-brand-orange/70 bg-brand-cream/40"
            style={{ padding: X }}
          >
            <div className="rounded-md bg-white px-5 py-4 shadow-sm">
              <KibitkaMark className="h-16 w-24" />
            </div>

            {/* Верхний размер X */}
            <div
              className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-brand-navy/40"
              style={{ height: X }}
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-brand-navy px-1.5 py-0.5 font-display text-[10px] font-bold text-white">
                X
              </span>
            </div>

            {/* Левый размер X */}
            <div
              className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-brand-navy/40"
              style={{ width: X }}
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-brand-navy px-1.5 py-0.5 font-display text-[10px] font-bold text-white">
                X
              </span>
            </div>
          </div>
        </div>

        {/* Пояснение и эталон */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display text-base font-semibold text-brand-navy">
            Охранное поле
          </h4>
          <p className="max-w-md text-sm leading-relaxed text-brand-navy/65">
            Минимальный отступ от логотипа до края носителя и других объектов
            равен величине&nbsp;X — это размер трёх колёс автомобиля в знаке.
            Так логотип сохраняет читаемость в любом окружении.
          </p>
          <div className="flex w-fit items-center gap-3 rounded-xl border border-brand-navy/10 bg-brand-cream/60 p-3">
            <ThreeWheels />
            <span className="font-display text-sm font-semibold text-brand-navy">
              X = три колеса
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
