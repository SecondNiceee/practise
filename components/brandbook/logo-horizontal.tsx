import { KibitkaMark } from "@/components/moodboard/kibitka-mark"

interface LogoHorizontalProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

const sizeMap = {
  sm: { mark: "h-8 w-12", text: "text-base" },
  md: { mark: "h-12 w-20", text: "text-lg" },
  lg: { mark: "h-16 w-28", text: "text-2xl" },
  xl: { mark: "h-20 w-32", text: "text-3xl" },
}

export function LogoHorizontal({ size = "md", className = "" }: LogoHorizontalProps) {
  const sizes = sizeMap[size]

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <KibitkaMark className={sizes.mark} />
      <span className={`font-display font-bold tracking-[0.2em] text-brand-navy ${sizes.text}`}>
        КИБИТКА
      </span>
    </div>
  )
}
