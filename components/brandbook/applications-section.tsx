import Image from "next/image"
import { SectionHeading } from "@/components/moodboard/section-heading"
import { FileText, Shirt, Car, Smartphone, Gift, Coffee } from "lucide-react"
import { MobileAppMockup } from "@/components/brandbook/mobile-app-mockup"
import { PageNumber } from "./page-number"

const categories = [
  {
    id: "promo",
    icon: Coffee,
    title: "Промо-продукция",
    desc: "Брендированные расходники и стаканы — каждый день напоминают о бренде.",
    items: [
      {
        src: "/carriers/carrier-promo.png",
        title: "Промо-набор «Кибитка»",
        desc: "Брендированные стаканы, мерч и упаковка в фирменной палитре — для корпоративных партнёрств и подарков.",
      },
    ],
  },
  {
    id: "print",
    icon: FileText,
    title: "Полиграфическая продукция",
    desc: "Печатные материалы для коммуникации с клиентами и партнёрами.",
    items: [
      {
        src: "/carriers/carrier-business-card.png",
        title: "Визитные карточки",
        desc: "Контактные карточки для водителей и менеджеров с логотипом и реквизитами.",
      },
      {
        src: "/carriers/carrier-flyer.png",
        title: "Визитка с логотипом",
        desc: "Простая визитная карточка с логотипом «Кибитка» и контактными данными в фирменных цветах.",
      },
    ],
  },
  {
    id: "uniform",
    icon: Shirt,
    title: "Деловая документация и форма",
    desc: "Единый стиль команды — узнаваемость и профессиональный образ.",
    items: [
      {
        src: "/carriers/carrier-uniform.png",
        title: "Форменная одежда водителей",
        desc: "Поло и кепка в фирменных цветах с вышитым логотипом «Кибитка».",
      },
    ],
  },
  {
    id: "digital",
    icon: Smartphone,
    title: "Цифровые носители",
    desc: "Мобильное приложение — основная точка контакта с пассажиром.",
    items: [
      {
        src: "/carriers/carrier-app.png",
        title: "Мобильное приложение",
        desc: "UI мобильного приложения для iOS и Android: карта, заказ поездки, оранжевые акценты.",
        custom: "app" as const,
      },
    ],
  },
  {
    id: "merch",
    icon: Gift,
    title: "Сувенирная продукция и мерч",
    desc: "Фирменные сувениры усиливают лояльность и работают как живая реклама.",
    items: [
      {
        src: "/carriers/carrier-bag.png",
        title: "Фирменная шоппер-сумка",
        desc: "Натуральная холщовая сумка с принтом «Кибитка» — экологичный мерч для пассажиров.",
      },
    ],
  },
  {
    id: "transport",
    icon: Car,
    title: "Транспорт",
    desc: "Фирменный стиль на автопарке — самый заметный носитель бренда «Кибитка».",
    items: [
      {
        src: "/carriers/carrier-taxi-car.png",
        title: "Брендирование автомобиля",
        desc: "Оклейка кузова фирменными цветами: оранжевая полоса, логотип на дверях, топпер на крыше.",
      },
    ],
  },
]

export function ApplicationsSection() {
  return (
    <section id="applications" className="scroll-mt-20 bg-brand-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          index="08"
          kicker="Носители"
          title="Носители (по видам)"
          description="Как фирменный стиль «Кибитка» живёт на реальных носителях — подобраны с учётом специфики городского такси."
        />

        {categories.map((cat) => (
          <div key={cat.id} className="mb-12">
            <div className="mb-5 flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange-dark">
                <cat.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-brand-navy">{cat.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-navy/60">{cat.desc}</p>
              </div>
            </div>

            <div className={`grid gap-5 ${cat.items.length === 1 ? "md:grid-cols-1 max-w-2xl" : "md:grid-cols-2"}`}>
              {cat.items.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm"
                >
                  {"custom" in item && item.custom === "app" ? (
                    <MobileAppMockup />
                  ) : (
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-col gap-1 p-5">
                    <h4 className="font-display font-semibold text-brand-navy">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-brand-navy/65">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
      <PageNumber number={11} />
    </section>
  )
}
