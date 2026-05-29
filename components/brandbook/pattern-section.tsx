import Image from "next/image"
import { SectionHeading } from "@/components/moodboard/section-heading"

type Pattern = {
  id: string
  title: string
  desc: string
  src: string
}

// Те же паттерны, что и на /moodboard, но вставленные как изображения
const patterns: Pattern[] = [
  { id: "cars", title: "Машинки", desc: "Основной паттерн для упаковки и фонов", src: "/patterns/cars.png" },
  { id: "pins", title: "Геометки", desc: "Карты и геолокация", src: "/patterns/pins.png" },
  { id: "steering", title: "Руль", desc: "Акцент для интерфейсов", src: "/patterns/steering.png" },
  { id: "speed", title: "Скорость", desc: "Яркий акцент для соцсетей", src: "/patterns/speed.png" },
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
          index="6"
          kicker="Фирменный стиль · Паттерны"
          title="Паттерны и текстуры"
          description="Единая система линейной графики на основе машинки, геометки, руля и скорости. Все паттерны построены одной обводкой и работают на упаковке, в приложении, на униформе и в рекламе."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {patterns.map((p) => (
            <PatternSwatch key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
