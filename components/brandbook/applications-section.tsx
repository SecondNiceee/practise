import Image from "next/image"
import { SectionHeading } from "@/components/moodboard/section-heading"

const applications = [
  {
    src: "/logo/branding-cards-kibitka.jpg",
    title: "Визитки",
    desc: "Контактные материалы для водителей и менеджеров",
  },
  {
    src: "/logo/branding-materials-kibitka.jpg",
    title: "Носители",
    desc: "Канцелярия, наклейки и фирменная продукция",
  },
  {
    src: "/logo/branding-uniform-kibitka.jpg",
    title: "Униформа",
    desc: "Одежда и аксессуары команды сервиса",
  },
]

export function ApplicationsSection() {
  return (
    <section id="applications" className="scroll-mt-20 bg-brand-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          index="8"
          kicker="Носители"
          title="Применение на носителях"
          description="Как фирменный стиль «Кибитка» живёт на реальных носителях — от визиток до униформы и автопарка."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {applications.map((a) => (
            <article
              key={a.src}
              className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={a.src || "/placeholder.svg"}
                  alt={a.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1 p-5">
                <h3 className="font-display font-semibold text-brand-navy">{a.title}</h3>
                <p className="text-sm leading-relaxed text-brand-navy/65">{a.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
