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

        {/* Visual examples */}
        <div className="mb-7 grid gap-6 md:grid-cols-2">
          {/* Do example */}
          <div className="overflow-hidden rounded-2xl border-2 border-brand-green/40">
            <div
              className="relative aspect-video flex items-center justify-center overflow-hidden"
              style={{
                backgroundImage: `url('data:image/svg+xml;utf8,<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="cars" width="60" height="60" patternUnits="userSpaceOnUse"><circle cx="30" cy="30" r="20" fill="none" stroke="%23FF9500" stroke-width="2"/><path d="M20,30 L40,30" stroke="%23FF9500" stroke-width="1.5"/></pattern></defs><rect width="200" height="200" fill="%23F5F0E8"/><rect width="100" height="200" x="50" y="0" fill="url(%23cars)" opacity="0.15"/></svg>')`,
                backgroundSize: "auto",
              }}
            >
              <div className="rounded-lg bg-white/90 px-6 py-3">
                <span className="font-display font-semibold text-brand-navy text-sm">
                  10-20% площади макета
                </span>
              </div>
            </div>
            <div className="bg-brand-green/8 p-5 border-t border-brand-green/20">
              <h4 className="mb-3 flex items-center gap-2 font-display font-semibold text-brand-green text-sm">
                <Check className="h-4 w-4" aria-hidden="true" /> Правильно
              </h4>
              <ul className="flex flex-col gap-2">
                {patternDos.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-xs text-brand-navy/80">
                    <Check className="mt-0.5 h-3 w-3 shrink-0 text-brand-green" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Don't example */}
          <div className="overflow-hidden rounded-2xl border-2 border-brand-red/40">
            <div
              className="relative aspect-video flex items-center justify-center overflow-hidden"
              style={{
                backgroundImage: `url('data:image/svg+xml;utf8,<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="dense" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="8" fill="none" stroke="%23E74C3C" stroke-width="2"/></pattern></defs><rect width="200" height="200" fill="url(%23dense)" opacity="0.8"/><image x="0" y="0" width="200" height="200" href="data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22><circle cx=%22100%22 cy=%22100%22 r=%2280%22 fill=%22%23999%22/></svg>" opacity="0.3" style="mix-blend-mode:multiply"/></svg>')`,
                backgroundSize: "auto",
              }}
            >
              <div className="rounded-lg bg-white/90 px-6 py-3">
                <span className="font-display font-semibold text-brand-red text-sm">
                  Избыточно и на фото
                </span>
              </div>
            </div>
            <div className="bg-brand-red/8 p-5 border-t border-brand-red/20">
              <h4 className="mb-3 flex items-center gap-2 font-display font-semibold text-brand-red text-sm">
                <X className="h-4 w-4" aria-hidden="true" /> Недопустимо
              </h4>
              <ul className="flex flex-col gap-2">
                {patternDonts.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-xs text-brand-navy/80">
                    <X className="mt-0.5 h-3 w-3 shrink-0 text-brand-red" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
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
