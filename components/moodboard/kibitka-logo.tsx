import { cn } from "@/lib/utils"
import { KibitkaMark } from "./kibitka-mark"

type KibitkaLogoSize = "sm" | "md" | "lg" | "xl"

type KibitkaLogoProps = {
  /** Размер логотипа — задаёт величину знака, надписи и отступа разом */
  size?: KibitkaLogoSize
  /** Цвет надписи «КИБИТКА» */
  wordmarkClassName?: string
  /** Подпись под логотипом (например «Такси-сервис») */
  caption?: string
  captionClassName?: string
  className?: string
  /** Цвета знака-машинки */
  bodyColor?: string
  windowColor?: string
  wheelColor?: string
  wheelInner?: string
  bumperColor?: string
  lightColor?: string
}

// Все размеры пропорциональны: знак, кегль надписи и отступ между ними
// меняются вместе, поэтому логотип везде выглядит одинаково.
const sizeMap: Record<
  KibitkaLogoSize,
  { mark: string; word: string; gap: string; tracking: string }
> = {
  sm: { mark: "h-12 w-20", word: "text-sm", gap: "gap-0.5", tracking: "tracking-[0.3em]" },
  md: { mark: "h-20 w-32", word: "text-lg", gap: "gap-1", tracking: "tracking-[0.3em]" },
  lg: { mark: "h-24 w-40", word: "text-2xl", gap: "gap-1.5", tracking: "tracking-[0.35em]" },
  xl: { mark: "h-28 w-44", word: "text-3xl", gap: "gap-2", tracking: "tracking-[0.35em]" },
}

/**
 * Единый логотип «Кибитка»: знак-машинка + надпись с фиксированным,
 * согласованным отступом. Используется во всех блоках, чтобы расстояние
 * между машинкой и надписью было одинаковым.
 */
export function KibitkaLogo({
  size = "lg",
  wordmarkClassName = "text-brand-navy",
  caption,
  captionClassName = "text-brand-sand",
  className,
  bodyColor,
  windowColor,
  wheelColor,
  wheelInner,
  bumperColor,
  lightColor,
}: KibitkaLogoProps) {
  const s = sizeMap[size]

  return (
    <div className={cn("flex flex-col items-center", s.gap, className)}>
      <KibitkaMark
        className={s.mark}
        bodyColor={bodyColor}
        windowColor={windowColor}
        wheelColor={wheelColor}
        wheelInner={wheelInner}
        bumperColor={bumperColor}
        lightColor={lightColor}
      />
      <span className={cn("font-display font-bold", s.word, s.tracking, wordmarkClassName)}>
        КИБИТКА
      </span>
      {caption ? (
        <span
          className={cn(
            "font-display text-xs font-semibold uppercase tracking-wider",
            captionClassName,
          )}
        >
          {caption}
        </span>
      ) : null}
    </div>
  )
}
