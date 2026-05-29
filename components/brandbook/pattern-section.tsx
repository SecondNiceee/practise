import Image from "next/image"
import { SectionHeading } from "@/components/moodboard/section-heading"

type Pattern = {
  id: string
  title: string
  desc: string
  span?: boolean
  src: string
}

// Те же паттерны, что и на /moodboard, но вставленные как изображения
const patterns: Pattern[] = [
  { id: "cars", title: "Машинки", desc: "Основной паттерн для упаковки и фонов", span: true, src: "/patterns/cars.png" },
  { id: "wheels", title: "Колёса", desc: "Геометрия движения", src: "/patterns/wheels.png" },
  { id: "steering", title: "Руль", desc: "Акцент для интерфейсов", src: "/patterns/steering.png" },
  { id: "road", title: "Дорога", desc: "Направление и динамика", src: "/patterns/road.png" },
  { id: "pins", title: "Геометки", desc: "Карты и геолокация", src: "/patterns/pins.png" },
  { id: "speed", title: "Скорость", desc: "Яркий акцент для соцсетей", span: true, src: "/patterns/speed.png" },
]

function PatternSwatch({ p }: { p: Pattern }) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl border border-brand-navy/10 ${
        p.span ? "col-span-2" : ""
      }`}
    >
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
          description="Единая система линейной графики на основе машинки, колеса, руля, дороги и геометки. Все паттерны построены одной обводкой и работают на упаковке, в приложении, на униформе и в рекламе."
        />

        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4">
          {patterns.map((p) => (
            <PatternSwatch key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
