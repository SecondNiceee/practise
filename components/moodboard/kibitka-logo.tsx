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

// Знак и кегль надписи меняются вместе с размером, но расстояние между
// машинкой и надписью фиксировано (GAP) — поэтому во всех блоках отступ
// от текста до машинки выглядит одинаково.
const GAP = "gap-1.5"

const sizeMap: Record<
  KibitkaLogoSize,
  { mark: string; word: string; tracking: string }
> = {
  sm: { mark: "h-12 w-20", word: "text-sm", tracking: "tracking-[0.3em]" },
  md: { mark: "h-20 w-32", word: "text-lg", tracking: "tracking-[0.3em]" },
  lg: { mark: "h-24 w-40", word: "text-2xl", tracking: "tracking-[0.35em]" },
  xl: { mark: "h-28 w-44", word: "text-3xl", tracking: "tracking-[0.35em]" },
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
    <div className={cn("flex flex-col items-center", GAP, className)}>
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
