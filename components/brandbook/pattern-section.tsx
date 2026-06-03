import Image from "next/image"
import { SectionHeading } from "@/components/moodboard/section-heading"
import { MascotEmotions } from "@/components/moodboard/mascot-emotions"
import { SlideWrapper } from "./slide-wrapper"

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
    <SlideWrapper slideNumber={10} totalSlides={24} variant="light">
      <section id="patterns" className="flex min-h-screen flex-col justify-center scroll-mt-20 px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="06"
            kicker="Паттерны"
            title="Паттерны и дополнительные графические элементы"
            description="Единая система линейной графики на основе машинки, геометки, руля и скорости."
          />

          <h3 className="mb-5 font-display text-lg font-semibold text-brand-navy">
            Фирменные паттерны
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {patterns.map((p) => (
              <PatternSwatch key={p.id} p={p} />
            ))}
          </div>

          {/* Additional graphic elements - Mascot */}
          <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
            Дополнительные графические элементы: Маскот
          </h3>
          <p className="mb-6 max-w-3xl text-brand-navy/70">
            Сама машинка «Кибитка» становится маскотом: набор эмоций позволяет ей живо общаться с аудиторией.
          </p>
          <MascotEmotions />

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="flex flex-col gap-2 rounded-2xl border border-brand-navy/10 bg-card p-6 text-center">
              <span className="font-display font-semibold text-brand-navy">Приложение</span>
              <span className="text-sm leading-relaxed text-brand-navy/65">Онбординг, пустые состояния</span>
            </div>
            <div className="flex flex-col gap-2 rounded-2xl border border-brand-navy/10 bg-card p-6 text-center">
              <span className="font-display font-semibold text-brand-navy">Соцсети</span>
              <span className="text-sm leading-relaxed text-brand-navy/65">Стикеры, сторис и анонсы</span>
            </div>
            <div className="flex flex-col gap-2 rounded-2xl border border-brand-navy/10 bg-card p-6 text-center">
              <span className="font-display font-semibold text-brand-navy">Реклама</span>
              <span className="text-sm leading-relaxed text-brand-navy/65">Наружные носители</span>
            </div>
          </div>
        </div>
      </section>
    </SlideWrapper>
  )
}
