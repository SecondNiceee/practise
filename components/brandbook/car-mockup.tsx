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

      {/* Логотип продублирован на каждой двери — только знак, без надписи */}
      <div
        className="absolute left-[37%] top-[64%] w-[14%]"
        style={{ transform: "translate(-50%, -50%) rotate(-1deg)" }}
      >
        <KibitkaMark className="h-auto w-full drop-shadow-sm" />
      </div>
      <div
        className="absolute left-[58%] top-[64%] w-[14%]"
        style={{ transform: "translate(-50%, -50%) rotate(-1deg)" }}
      >
        <KibitkaMark className="h-auto w-full drop-shadow-sm" />
      </div>
    </div>
  )
}
