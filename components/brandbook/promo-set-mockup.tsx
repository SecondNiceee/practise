import { KibitkaMark } from "@/components/moodboard/kibitka-mark"

/**
 * Мокап фирменных коллекционных жетонов «Кибитка».
 * За основу взято реальное фото трёх металлических жетонов, на чистые
 * центральные площадки которых наложен фирменный знак (без надписи).
 * Расположение и размер логотипа задаются в процентах от квадрата с фото,
 * чтобы «гравировка» совпадала с заготовками на снимке.
 */

/** Один логотип, наложенный по центру жетона */
function TokenLogo({
  x,
  y,
  size,
  tilt = 0,
}: {
  x: number
  y: number
  size: number
  tilt?: number
}) {
  return (
    <div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}%`,
        transform: `translate(-50%, -50%) rotate(${tilt}deg)`,
      }}
    >
      <KibitkaMark className="h-auto w-full drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]" />
    </div>
  )
}

export function PromoSetMockup() {
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#e8e0cd]">
      {/* Квадрат с фотографией жетонов, логотипы позиционируются от него */}
      <div className="relative h-full aspect-square">
        <img
          src="/carriers/promo-tokens.png"
          alt="Фирменные коллекционные жетоны «Кибитка»"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Верхний латунный жетон */}
        <TokenLogo x={36} y={34} size={23} tilt={-4} />
        {/* Нижний латунный жетон */}
        <TokenLogo x={38} y={68} size={24} tilt={3} />
        {/* Правый стальной жетон */}
        <TokenLogo x={72} y={48} size={22} tilt={-2} />
      </div>
    </div>
  )
}
