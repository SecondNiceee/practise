import Image from "next/image"
import { SectionHeading } from "@/components/moodboard/section-heading"
import { FileText, Shirt, Car, Smartphone, Gift } from "lucide-react"

const categories = [
  {
    id: "print",
    icon: FileText,
    title: "Полиграфия",
    items: [
      { src: "/logo/branding-cards-kibitka.png", title: "Визитки", desc: "Контактные материалы для водителей и менеджеров" },
    ],
  },
  {
    id: "merch",
    icon: Gift,
    title: "Сувенирная продукция",
    items: [
      { src: "/logo/branding-materials-kibitka.png", title: "Носители", desc: "Канцелярия, наклейки и фирменная продукция" },
    ],
  },
  {
    id: "uniform",
    icon: Shirt,
    title: "Униформа",
    items: [
      { src: "/logo/branding-uniform-kibitka.png", title: "Одежда", desc: "Форма и аксессуары команды сервиса" },
    ],
  },
]

const digitalApps = [
  { title: "Мобильное приложение", desc: "Интерфейс заказа такси для iOS и Android" },
  { title: "Веб-сайт", desc: "Информационный сайт и личный кабинет" },
  { title: "Соцсети", desc: "Оформление профилей и контент" },
]

const transportApps = [
  { title: "Брендирование авто", desc: "Оклейка кузова фирменной графикой" },
  { title: "Топперы", desc: "Световые короба на крыше автомобиля" },
  { title: "Салон", desc: "Бейджи, подголовники, QR-коды" },
]

export function ApplicationsSection() {
  return (
    <section id="applications" className="scroll-mt-20 bg-brand-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          index="08"
          kicker="Носители"
          title="Носители (по видам)"
          description="Как фирменный стиль «Кибитка» живёт на реальных носителях — от визиток до автопарка и цифровых продуктов."
        />

        {/* Physical carriers */}
        {categories.map((cat) => (
          <div key={cat.id} className="mb-8">
            <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-brand-navy">
              <cat.icon className="h-5 w-5 text-brand-orange" aria-hidden="true" />
              {cat.title}
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              {cat.items.map((item) => (
                <article
                  key={item.src}
                  className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1 p-5">
                    <h4 className="font-display font-semibold text-brand-navy">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-brand-navy/65">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}

        {/* Digital carriers */}
        <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-brand-navy">
          <Smartphone className="h-5 w-5 text-brand-orange" aria-hidden="true" />
          Цифровые носители
        </h3>
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {digitalApps.map((app) => (
            <div
              key={app.title}
              className="flex flex-col gap-2 rounded-2xl border border-brand-navy/10 bg-card p-6"
            >
              <span className="font-display font-semibold text-brand-navy">{app.title}</span>
              <span className="text-sm leading-relaxed text-brand-navy/65">{app.desc}</span>
            </div>
          ))}
        </div>

        {/* Transport carriers */}
        <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-brand-navy">
          <Car className="h-5 w-5 text-brand-orange" aria-hidden="true" />
          Транспорт
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          {transportApps.map((app) => (
            <div
              key={app.title}
              className="flex flex-col gap-2 rounded-2xl border border-brand-navy/10 bg-card p-6"
            >
              <span className="font-display font-semibold text-brand-navy">{app.title}</span>
              <span className="text-sm leading-relaxed text-brand-navy/65">{app.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
