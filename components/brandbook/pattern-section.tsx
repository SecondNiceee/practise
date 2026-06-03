import Image from "next/image"
import { SectionHeading } from "@/components/moodboard/section-heading"
import { MascotEmotions } from "@/components/moodboard/mascot-emotions"
import { Check, X } from "lucide-react"
import { PageNumber } from "./page-number"

type Pattern = {
  id: string
  title: string
  desc: string
  src: string
}

const patterns: Pattern[] = [
  { id: "cars", title: "Машинки", desc: "Основной паттерн для упаковки и фонов", src: "/patterns/cars.png" },
  { id: "pins", title: "Геометки", desc: "Карты и геолокация", src: "/patterns/pins.png" },
  { id: "steering", title: "Руль", desc: "Акцент для интерфейсов", src: "/patterns/steering.png" },
  { id: "speed", title: "Скорость", desc: "Яркий акцент для соцсетей", src: "/patterns/speed.png" },
]

const patternDos = [
  "Использовать на 10-20% площади макета",
  "Сочетать с фирменными цветами",
  "Размещать на однотонных фонах",
]

const patternDonts = [
  "Накладывать паттерн на фотографии",
  "Использовать несколько паттернов одновременно",
  "Искажать и масштабировать неравномерно",
]

function PatternSwatch({ p }: { p: Pattern }) {
  return (
    <figure className="group relative aspect-square overflow-hidden rounded-2xl border border-brand-navy/10">
      <Image
        src={p.src || "/placeholder.svg"}
        alt={`Паттерн «${p.title}»`}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover"
      />
      <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-gradient-to-t from-brand-navy/85 to-transparent p-4">
        <span className="font-display text-sm font-semibold text-white">{p.title}</span>
        <span className="text-xs text-white/70">{p.desc}</span>
      </figcaption>
    </figure>
  )
}

export function PatternSection() {
  return (
    <section id="patterns" className="scroll-mt-20 bg-brand-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          index="06"
          kicker="Паттерны"
          title="Паттерны и дополнительные графические элементы"
          description="Единая система линейной графики на основе машинки, геометки, руля и скорости. Все паттерны построены одной обводкой и работают на упаковке, в приложении, на униформе и в рекламе."
        />

        <h3 className="mb-5 font-display text-lg font-semibold text-brand-navy">
          Фирменные паттерны
        </h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {patterns.map((p) => (
            <PatternSwatch key={p.id} p={p} />
          ))}
        </div>

        {/* Pattern usage rules */}
        <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
          Правила использования паттернов
        </h3>

        {/* Visual grid: each rule as a do/don't pair */}
        <div className="mb-7 flex flex-col gap-8">

          {/* Rule 1: opacity / density */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* DO: light opacity on solid bg */}
            <div className="overflow-hidden rounded-2xl border-2 border-[#27ae60]/50">
              <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-[#F5F0E8]">
                <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
                  <defs>
                    <pattern id="do-cars" x="0" y="0" width="64" height="48" patternUnits="userSpaceOnUse">
                      {/* simple car silhouette */}
                      <rect x="8" y="18" width="48" height="18" rx="5" fill="#F39C12" opacity="0.18" />
                      <rect x="16" y="10" width="28" height="14" rx="4" fill="#F39C12" opacity="0.18" />
                      <circle cx="18" cy="36" r="5" fill="#2c3e50" opacity="0.18" />
                      <circle cx="46" cy="36" r="5" fill="#2c3e50" opacity="0.18" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#do-cars)" />
                </svg>
                {/* Card content on top */}
                <div className="relative z-10 flex flex-col items-center gap-3 rounded-xl bg-white px-8 py-5 shadow-lg">
                  <span className="font-display text-sm font-bold text-brand-navy">Кибитка</span>
                  <span className="text-xs text-brand-navy/60">Такси-сервис</span>
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-[#27ae60]/20 bg-[#27ae60]/8 p-4">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#27ae60]" aria-hidden="true" />
                <p className="text-sm text-brand-navy/80">
                  <strong className="text-[#27ae60]">Правильно.</strong> Паттерн тихий — opacity 15-20%, однотонный фон, контент читается свободно.
                </p>
              </div>
            </div>

            {/* DON'T: heavy opacity, cluttered */}
            <div className="overflow-hidden rounded-2xl border-2 border-[#e74c3c]/50">
              <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-[#F5F0E8]">
                <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
                  <defs>
                    <pattern id="dont-dense" x="0" y="0" width="28" height="22" patternUnits="userSpaceOnUse">
                      <rect x="2" y="5" width="24" height="12" rx="3" fill="#F39C12" opacity="0.85" />
                      <rect x="6" y="1" width="14" height="8" rx="2" fill="#F39C12" opacity="0.85" />
                      <circle cx="7" cy="17" r="3" fill="#2c3e50" opacity="0.85" />
                      <circle cx="21" cy="17" r="3" fill="#2c3e50" opacity="0.85" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dont-dense)" />
                </svg>
                {/* Card content — unreadable */}
                <div className="relative z-10 flex flex-col items-center gap-3 rounded-xl bg-white/50 px-8 py-5 shadow-lg backdrop-blur-none">
                  <span className="font-display text-sm font-bold text-brand-navy opacity-50">Кибитка</span>
                  <span className="text-xs text-brand-navy/40">Такси-сервис</span>
                </div>
                {/* Red X badge */}
                <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#e74c3c]">
                  <X className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-[#e74c3c]/20 bg-[#e74c3c]/8 p-4">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-[#e74c3c]" aria-hidden="true" />
                <p className="text-sm text-brand-navy/80">
                  <strong className="text-[#e74c3c]">Недопустимо.</strong> Слишком плотно и ярко — контент теряется, паттерн перебивает сообщение.
                </p>
              </div>
            </div>
          </div>

          {/* Rule 2: one pattern at a time vs multiple */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* DO: one pattern only */}
            <div className="overflow-hidden rounded-2xl border-2 border-[#27ae60]/50">
              <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-[#2c3e50]">
                <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
                  <defs>
                    <pattern id="do-one" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
                      {/* steering wheel */}
                      <circle cx="28" cy="28" r="18" fill="none" stroke="#F39C12" strokeWidth="3" opacity="0.2" />
                      <circle cx="28" cy="28" r="5" fill="none" stroke="#F39C12" strokeWidth="2" opacity="0.2" />
                      <line x1="28" y1="10" x2="28" y2="23" stroke="#F39C12" strokeWidth="2" opacity="0.2" />
                      <line x1="28" y1="33" x2="28" y2="46" stroke="#F39C12" strokeWidth="2" opacity="0.2" />
                      <line x1="10" y1="28" x2="23" y2="28" stroke="#F39C12" strokeWidth="2" opacity="0.2" />
                      <line x1="33" y1="28" x2="46" y2="28" stroke="#F39C12" strokeWidth="2" opacity="0.2" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#do-one)" />
                </svg>
                <div className="relative z-10 rounded-xl bg-[#F39C12] px-8 py-4">
                  <span className="font-display text-sm font-bold text-white">Один паттерн</span>
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-[#27ae60]/20 bg-[#27ae60]/8 p-4">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#27ae60]" aria-hidden="true" />
                <p className="text-sm text-brand-navy/80">
                  <strong className="text-[#27ae60]">Правильно.</strong> Один тип паттерна на макете — единый ритм, нет визуального шума.
                </p>
              </div>
            </div>

            {/* DON'T: two patterns mixed */}
            <div className="overflow-hidden rounded-2xl border-2 border-[#e74c3c]/50">
              <div className="relative flex aspect-video items-end overflow-hidden bg-[#2c3e50]">
                {/* Left half — cars */}
                <svg className="absolute inset-0 h-full w-1/2" aria-hidden="true">
                  <defs>
                    <pattern id="mix-cars" x="0" y="0" width="44" height="34" patternUnits="userSpaceOnUse">
                      <rect x="4" y="8" width="36" height="14" rx="4" fill="#F39C12" opacity="0.55" />
                      <rect x="10" y="3" width="20" height="10" rx="3" fill="#F39C12" opacity="0.55" />
                      <circle cx="12" cy="22" r="4" fill="#ecf0f1" opacity="0.55" />
                      <circle cx="32" cy="22" r="4" fill="#ecf0f1" opacity="0.55" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mix-cars)" />
                </svg>
                {/* Right half — pins */}
                <svg className="absolute inset-0 left-1/2 h-full w-1/2" aria-hidden="true">
                  <defs>
                    <pattern id="mix-pins" x="0" y="0" width="36" height="44" patternUnits="userSpaceOnUse">
                      <circle cx="18" cy="14" r="8" fill="#e74c3c" opacity="0.55" />
                      <path d="M18 22 L12 36 Q18 30 24 36 Z" fill="#e74c3c" opacity="0.55" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mix-pins)" />
                </svg>
                {/* Divider */}
                <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/30" />
                {/* Red X badge */}
                <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#e74c3c]">
                  <X className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <div className="relative z-10 flex w-full justify-around pb-4">
                  <span className="rounded bg-black/40 px-2 py-1 text-xs text-white">Машинки</span>
                  <span className="rounded bg-black/40 px-2 py-1 text-xs text-white">Геометки</span>
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-[#e74c3c]/20 bg-[#e74c3c]/8 p-4">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-[#e74c3c]" aria-hidden="true" />
                <p className="text-sm text-brand-navy/80">
                  <strong className="text-[#e74c3c]">Недопустимо.</strong> Несколько паттернов одновременно — хаос, нет единого стиля.
                </p>
              </div>
            </div>
          </div>

          {/* Rule 3: clean bg vs photo */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* DO: pattern on solid colour */}
            <div className="overflow-hidden rounded-2xl border-2 border-[#27ae60]/50">
              <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-[#1ABC9C]">
                <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
                  <defs>
                    <pattern id="do-solid" x="0" y="0" width="60" height="46" patternUnits="userSpaceOnUse">
                      <rect x="6" y="12" width="48" height="18" rx="5" fill="white" opacity="0.12" />
                      <rect x="14" y="5" width="28" height="13" rx="4" fill="white" opacity="0.12" />
                      <circle cx="16" cy="30" r="5" fill="white" opacity="0.12" />
                      <circle cx="44" cy="30" r="5" fill="white" opacity="0.12" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#do-solid)" />
                </svg>
                <div className="relative z-10 rounded-xl bg-white/90 px-8 py-4">
                  <span className="font-display text-sm font-bold text-brand-navy">Фирменный фон</span>
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-[#27ae60]/20 bg-[#27ae60]/8 p-4">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#27ae60]" aria-hidden="true" />
                <p className="text-sm text-brand-navy/80">
                  <strong className="text-[#27ae60]">Правильно.</strong> Паттерн на однотонном фирменном фоне — чистый, узнаваемый, фирменный.
                </p>
              </div>
            </div>

            {/* DON'T: pattern over photo */}
            <div className="overflow-hidden rounded-2xl border-2 border-[#e74c3c]/50">
              <div className="relative flex aspect-video items-center justify-center overflow-hidden">
                {/* Simulated photo background with grey gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-500 via-slate-400 to-slate-600" />
                {/* Fake photo texture */}
                <div className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage: "radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.3) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(0,0,0,0.4) 0%, transparent 50%)"
                  }}
                />
                {/* Pattern on top of photo */}
                <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
                  <defs>
                    <pattern id="dont-photo" x="0" y="0" width="44" height="34" patternUnits="userSpaceOnUse">
                      <rect x="4" y="8" width="36" height="14" rx="4" fill="#F39C12" opacity="0.7" />
                      <rect x="10" y="3" width="20" height="10" rx="3" fill="#F39C12" opacity="0.7" />
                      <circle cx="12" cy="22" r="4" fill="#2c3e50" opacity="0.7" />
                      <circle cx="32" cy="22" r="4" fill="#2c3e50" opacity="0.7" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dont-photo)" />
                </svg>
                <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#e74c3c]">
                  <X className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <div className="relative z-10 rounded-xl bg-white/30 px-8 py-4 backdrop-blur-sm">
                  <span className="font-display text-sm font-bold text-white opacity-60">Не читается</span>
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-[#e74c3c]/20 bg-[#e74c3c]/8 p-4">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-[#e74c3c]" aria-hidden="true" />
                <p className="text-sm text-brand-navy/80">
                  <strong className="text-[#e74c3c]">Недопустимо.</strong> Паттерн поверх фотографии — грязь, паттерн не читается, фото теряется.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Additional graphic elements - Mascot */}
        <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
          Дополнительные графические элементы: Маскот
        </h3>
        <p className="mb-6 max-w-3xl text-brand-navy/70">
          Сама машинка «Кибитка» становится маскотом: набор эмоций позволяет ей живо общаться с аудиторией.
          Один и тот же узнаваемый силуэт меняет лишь выражение лица.
        </p>
        <MascotEmotions />

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="flex flex-col gap-2 rounded-2xl border border-brand-navy/10 bg-card p-6 text-center">
            <span className="font-display font-semibold text-brand-navy">Приложение</span>
            <span className="text-sm leading-relaxed text-brand-navy/65">Онбординг, пустые состояния, статусы заказа</span>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-brand-navy/10 bg-card p-6 text-center">
            <span className="font-display font-semibold text-brand-navy">Соцсети</span>
            <span className="text-sm leading-relaxed text-brand-navy/65">Стикеры, сторис и анонсы акций</span>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-brand-navy/10 bg-card p-6 text-center">
            <span className="font-display font-semibold text-brand-navy">Реклама</span>
            <span className="text-sm leading-relaxed text-brand-navy/65">Наружные носители и промо-материалы</span>
          </div>
        </div>
      </div>
      <PageNumber number={10} total={13} />
    </section>
  )
}
