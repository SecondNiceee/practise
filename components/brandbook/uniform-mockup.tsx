import { KibitkaMark } from "@/components/moodboard/kibitka-mark"

/**
 * Мокап форменной футболки водителя «Кибитка».
 * Футболка фирменного тёмно-синего цвета компании (#2c3e50), на грудь нанесён
 * логотип «Кибитка» с подписью — как реальная вышивка/печать на форме.
 */
export function UniformMockup() {
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-brand-cream">
      <img
        src="/mockups/tshirt-navy.png"
        alt="Форменная футболка «Кибитка» фирменного цвета"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Логотип на груди */}
      <div className="absolute left-1/2 top-[34%] flex -translate-x-1/2 flex-col items-center gap-1">
        <KibitkaMark className="h-10 w-16 drop-shadow-sm" />
        <span className="font-display text-[11px] font-extrabold tracking-[0.3em] text-brand-cream">
          КИБИТКА
        </span>
        <span className="font-display text-[5px] font-semibold uppercase tracking-[0.3em] text-brand-orange">
          Такси-сервис
        </span>
      </div>
    </div>
  )
}
