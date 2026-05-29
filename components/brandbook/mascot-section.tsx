import Image from "next/image"
import { SectionHeading } from "@/components/moodboard/section-heading"

const mascots = [
  { src: "/logo/mascot-main.jpg", alt: "Маскот Кибитка — приветствие" },
  { src: "/logo/mascot-emotions.jpg", alt: "Маскот Кибитка — эмоции" },
  { src: "/logo/mascot-activities.jpg", alt: "Маскот Кибитка — действия" },
  { src: "/logo/mascot-lineart.jpg", alt: "Маскот Кибитка — контурная версия" },
]

const uses = [
  { title: "Приложение", desc: "Онбординг, пустые состояния, статусы заказа" },
  { title: "Соцсети", desc: "Стикеры, сторис и анонсы акций" },
  { title: "Реклама", desc: "Наружные носители и промо-материалы" },
]

export function MascotSection() {
  return (
    <section id="mascot" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          index="7"
          kicker="Практическая работа №5 · Маскот"
          title="Маскот бренда"
          description="Дружелюбный кот-таксист в фирменной кепке делает бренд тёплым и запоминающимся. Он усиливает эмоциональную связь с пассажиром."
        />

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {mascots.map((m) => (
            <div
              key={m.src}
              className="relative aspect-square overflow-hidden rounded-2xl border border-brand-navy/10 bg-white"
            >
              <Image
                src={m.src || "/placeholder.svg"}
                alt={m.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-contain p-4 transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {uses.map((u) => (
            <div
              key={u.title}
              className="flex flex-col gap-2 rounded-2xl border border-brand-navy/10 bg-card p-6 text-center"
            >
              <span className="font-display font-semibold text-brand-navy">{u.title}</span>
              <span className="text-sm leading-relaxed text-brand-navy/65">{u.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
