import { KibitkaMark } from "@/components/moodboard/kibitka-mark"

/**
 * Реалистичный мокап брендирования автомобиля «Кибитка».
 * Чистое фото белого седана с наложенным фирменным логотипом на двери —
 * размер и положение логотипа задаются через CSS, чтобы оклейка выглядела
 * как настоящая.
 */
export function CarMockup() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden">
      {/* Чистое фото автомобиля */}
      <img
        src="/carriers/car-blank-side.png"
        alt="Брендированный автомобиль «Кибитка»"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Логотип на двери — слегка наклонён по форме кузова */}
      <div
        className="absolute left-[52%] top-[64%] flex w-[28%] flex-col items-center gap-0.5"
        style={{ transform: "translate(-50%, -50%) rotate(-1deg)" }}
      >
        <KibitkaMark className="h-auto w-[72%] drop-shadow-sm" />
        <span className="font-display text-[clamp(0.55rem,2.5vw,1.1rem)] font-extrabold tracking-[0.14em] text-brand-navy drop-shadow-sm">
          КИБИТКА
        </span>
      </div>
    </div>
  )
}
