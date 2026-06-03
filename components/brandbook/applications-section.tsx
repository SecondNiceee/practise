import { SectionHeading } from "@/components/moodboard/section-heading"
import { FileText, Shirt, Car, Smartphone, Gift, Coffee } from "lucide-react"
import { MobileAppMockup } from "@/components/brandbook/mobile-app-mockup"
import {
  PromoIllustration,
  BusinessCardIllustration,
  FlyerIllustration,
  UniformIllustration,
  BagIllustration,
  TaxiCarIllustration,
} from "@/components/brandbook/carrier-illustrations"
import { PageNumber } from "./page-number"

const categories = [
  {
    id: "promo",
    icon: Coffee,
    title: "Промо-продукция",
    desc: "Брендированные расходники и стаканы — каждый день напоминают о бренде.",
    items: [
      {
        illustration: <PromoIllustration />,
        title: "Промо-набор «Кибитка»",
        desc: "Брендированные стаканы, мерч и упаковка с логотипом — для корпоративных партнёрств и подарков.",
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
        illustration: <BusinessCardIllustration />,
        title: "Визитные карточки",
        desc: "Контактные карточки для водителей и менеджеров с логотипом и реквизитами.",
      },
      {
        illustration: <FlyerIllustration />,
        title: "Флаер / листовка",
        desc: "Рекламный флаер с логотипом «Кибитка» и призывом к действию в фирменных цветах.",
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
        illustration: <UniformIllustration />,
        title: "Форменная одежда водителей",
        desc: "Поло и кепка с вышитым логотипом «Кибитка» и фирменными акцентами из оранжевого и тёмно-синего.",
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
        illustration: null,
        custom: "app" as const,
        title: "Мобильное приложение",
        desc: "UI мобильного приложения для iOS и Android: карта, заказ поездки, оранжевые акценты.",
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
        illustration: <BagIllustration />,
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
        illustration: <TaxiCarIllustration />,
        title: "Брендирование автомобиля",
        desc: "Оклейка кузова: оранжевая полоса, логотип на дверях, топпер «ТАКСИ» и фирменные акценты.",
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

        {/* Примечание о цветовом решении */}
        <div className="mb-12 rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-5 md:p-6">
          <p className="text-sm leading-relaxed text-brand-navy">
            <span className="font-semibold">Примечание:</span> В большинстве носителей цветовое решение не прописано отдельно. Основой являются{" "}
            <span className="font-semibold">графические элементы</span> логотипа и{" "}
            <span className="font-semibold">фотостиль</span>, которые обеспечивают узнаваемость бренда. Там, где цвет применяется — используются строго фирменные оттенки: оранжевый <span className="inline-block h-3 w-3 rounded-sm bg-brand-orange align-middle" />, тёмно-синий <span className="inline-block h-3 w-3 rounded-sm bg-brand-navy align-middle" />, кремовый <span className="inline-block h-3 w-3 rounded-sm bg-brand-cream border border-brand-navy/20 align-middle" />.
          </p>
        </div>

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
                    item.illustration
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
      <PageNumber number={12} total={13} />
    </section>
  )
}
