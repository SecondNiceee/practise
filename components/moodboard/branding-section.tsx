import Image from "next/image"
import { SectionHeading } from "./section-heading"
import { Check, X } from "lucide-react"

const applications = [
  {
    src: "/logo/branding-cards-kibitka.png",
    title: "Визитки",
    desc: "Контактные материалы для водителей и менеджеров",
  },
  {
    src: "/logo/branding-materials-kibitka.png",
    title: "Носители",
    desc: "Канцелярия, наклейки и фирменная продукция",
  },
  {
    src: "/logo/branding-uniform-kibitka.png",
    title: "Униформа",
    desc: "Одежда и аксессуары команды сервиса",
  },
]

const dos = [
  "Сохранять охранное поле вокруг логотипа",
  "Использовать утверждённые цвета палитры",
  "Размещать знак на контрастном фоне",
  "Применять Montserrat для заголовков",
]

const donts = [
  "Искажать пропорции и наклонять логотип",
  "Менять фирменные цвета на произвольные",
  "Размещать на пёстром, нечитаемом фоне",
  "Добавлять тени и обводки к знаку",
]

export function BrandingSection() {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          index="6"
          kicker="Брендбук"
          title="Носители и правила"
          description="Как фирменный стиль «Кибитка» живёт на реальных носителях и каких правил стоит придерживаться."
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

        {/* Do / Don't */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-brand-green/30 bg-card p-7">
            <h3 className="mb-4 flex items-center gap-2 font-display font-semibold text-brand-green">
              <Check className="h-5 w-5" aria-hidden="true" /> Правильно
            </h3>
            <ul className="flex flex-col gap-3">
              {dos.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-brand-navy/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-brand-red/30 bg-card p-7">
            <h3 className="mb-4 flex items-center gap-2 font-display font-semibold text-brand-red">
              <X className="h-5 w-5" aria-hidden="true" /> Недопустимо
            </h3>
            <ul className="flex flex-col gap-3">
              {donts.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-brand-navy/80">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
