import Image from "next/image"
import { SectionHeading } from "@/components/moodboard/section-heading"

const patterns = [
  { src: "/logo/pattern-taxi-v4.jpg", title: "Такси-паттерн", desc: "Машинки в фирменной сетке для упаковки и фонов", span: true },
  { src: "/images/pattern-wheels.jpg", title: "Колёса", desc: "Геометрия движения" },
  { src: "/logo/pattern-wheels-v2.jpg", title: "Колёса · контур", desc: "Лёгкая версия" },
  { src: "/images/pattern-geometric-v2.jpg", title: "Геометрия", desc: "Дорожная разметка и стрелки" },
  { src: "/logo/pattern-steering-dark.jpg", title: "Руль · тёмный", desc: "Акцентный фон для соцсетей", span: true },
  { src: "/images/pattern-taxi-seamless.jpg", title: "Бесшовный", desc: "Заливка любой площади" },
]

export function PatternSection() {
  return (
    <section id="patterns" className="scroll-mt-20 bg-brand-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          index="6"
          kicker="Фирменный стиль · Паттерны"
          title="Паттерны и текстуры"
          description="Поддерживающая графика на основе машинок, колёс и дорожной геометрии. Паттерны используются на упаковке, в приложении, на униформе и в рекламных макетах."
        />

        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4">
          {patterns.map((p) => (
            <figure
              key={p.src}
              className={`group relative overflow-hidden rounded-2xl border border-brand-navy/10 bg-card ${
                p.span ? "col-span-2" : ""
              }`}
            >
              <Image
                src={p.src || "/placeholder.svg"}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-gradient-to-t from-brand-navy/85 to-transparent p-4">
                <span className="font-display text-sm font-semibold text-white">{p.title}</span>
                <span className="text-xs text-white/70">{p.desc}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
