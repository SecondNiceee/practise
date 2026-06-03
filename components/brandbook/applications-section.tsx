import { SlideWrapper } from "./slide-wrapper"
import { MobileAppMockup } from "./mobile-app-mockup"
import { BusinessCardMockup } from "./business-card-mockup"
import { FlyerMockup } from "./flyer-mockup"
import { UniformMockup } from "./uniform-mockup"
import { BadgeMockup } from "./badge-mockup"
import { SocialMockup } from "./social-mockup"
import { PromoSetMockup } from "./promo-set-mockup"
import { CarMockup } from "./car-mockup"
import Image from "next/image"
import { FileText, Shirt, Smartphone, Gift, Car } from "lucide-react"

const TOTAL_SLIDES = 21

// Все носители с нумерацией
const allCarriers = [
  // Полиграфия
  {
    id: "carrier-01",
    number: "01",
    category: "Полиграфия",
    categoryIcon: FileText,
    custom: "business-card" as const,
    title: "Визитные карточки",
    desc: "Контактные карточки для водителей и менеджеров с логотипом и реквизитами — лицевая и оборотная стороны.",
  },
  {
    id: "carrier-02",
    number: "02",
    category: "Полиграфия",
    categoryIcon: FileText,
    custom: "flyer" as const,
    title: "Флаер / листовка",
    desc: "Рекламный флаер «Кибитка» с акцией, промокодом и призывом к действию — фирменные цвета и логотип.",
  },
  // Форма и документация
  {
    id: "carrier-03",
    number: "03",
    category: "Форма и документация",
    categoryIcon: Shirt,
    custom: "uniform" as const,
    title: "Форменная одежда водителей",
    desc: "Футболка фирменного цвета с логотипом «Кибитка» на груди — основа форменной одежды водителей.",
  },
  {
    id: "carrier-04",
    number: "04",
    category: "Форма и документация",
    categoryIcon: Shirt,
    custom: "badge" as const,
    title: "Бейдж водителя",
    desc: "Идентификационный бейдж на шнурке с фото, именем, должностью и логотипом «Кибитка».",
  },
  // Цифровые носители
  {
    id: "carrier-05",
    number: "05",
    category: "Цифровые носители",
    categoryIcon: Smartphone,
    custom: "app" as const,
    title: "Мобильное приложение",
    desc: "UI мобильного приложения для iOS и Android: карта, заказ поездки, оранжевые акценты.",
  },
  {
    id: "carrier-06",
    number: "06",
    category: "Цифровые носители",
    categoryIcon: Smartphone,
    custom: "social" as const,
    title: "Соцсети и баннеры",
    desc: "Оформление профиля и постов в соцсетях, промо-баннеры и digital-креативы в фирменном стиле.",
  },
  // Сувенирная продукция
  {
    id: "carrier-07",
    number: "07",
    category: "Сувенирная продукция",
    categoryIcon: Gift,
    custom: "promo" as const,
    title: "Промо-набор",
    desc: "Фирменный набор сувениров с логотипом «Кибитка»: карта лояльности, значок-стикер, брелок и блокнот — для команды и партнёров.",
  },
  {
    id: "carrier-08",
    number: "08",
    category: "Сувенирная продукция",
    categoryIcon: Gift,
    src: "/carriers/carrier-bag.png",
    title: "Фирменный шоппер",
    desc: "Экологичная сумка-шоппер из плотного хлопка с крупным логотипом «Кибитка» — для пассажиров и партнёров.",
  },
  // Транспорт
  {
    id: "carrier-09",
    number: "09",
    category: "Транспорт",
    categoryIcon: Car,
    custom: "car" as const,
    title: "Брендирование автомобиля",
    desc: "Оклейка кузова с логотипом на дверях, графические элементы и фотостиль бренда.",
  },
  {
    id: "carrier-10",
    number: "10",
    category: "Транспорт",
    categoryIcon: Car,
    src: "/carriers/carrier-car-interior.png",
    title: "Интерьер автомобиля",
    desc: "Брендированные элементы салона: подголовники, визитницы, ароматизаторы.",
  },
]

// Карточка носителя
function CarrierCard({
  carrier,
}: {
  carrier: (typeof allCarriers)[0]
}) {
  const Icon = carrier.categoryIcon
  
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm">
      {"custom" in carrier && carrier.custom === "app" ? (
        <MobileAppMockup />
      ) : "custom" in carrier && carrier.custom === "business-card" ? (
        <BusinessCardMockup />
      ) : "custom" in carrier && carrier.custom === "flyer" ? (
        <FlyerMockup />
      ) : "custom" in carrier && carrier.custom === "uniform" ? (
        <UniformMockup />
      ) : "custom" in carrier && carrier.custom === "badge" ? (
        <BadgeMockup />
      ) : "custom" in carrier && carrier.custom === "social" ? (
        <SocialMockup />
      ) : "custom" in carrier && carrier.custom === "promo" ? (
        <PromoSetMockup />
      ) : "custom" in carrier && carrier.custom === "car" ? (
        <CarMockup />
      ) : (
        <div className="relative aspect-[4/3]">
          <Image
            src={carrier.src!}
            alt={carrier.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-col gap-2 p-5">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange font-mono text-xs font-bold text-white">
            {carrier.number}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-brand-sand">
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{carrier.category}</span>
          </div>
        </div>
        <h4 className="font-display text-lg font-semibold text-brand-navy">
          {carrier.title}
        </h4>
        <p className="text-sm leading-relaxed text-brand-navy/65">
          {carrier.desc}
        </p>
      </div>
    </article>
  )
}

// Слайд с 2 носителями
function CarriersSlide({
  carriers,
  slideNumber,
}: {
  carriers: (typeof allCarriers)[number][]
  slideNumber: number
}) {
  // Категория слайда берётся из первого носителя пары
  const CategoryIcon = carriers[0].categoryIcon
  const category = carriers[0].category

  return (
    <SlideWrapper slideNumber={slideNumber} totalSlides={TOTAL_SLIDES} variant="light">
      <div className="mb-8 flex flex-col gap-3 md:mb-10">
        <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-sand">
          Носители бренда
        </span>
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange-dark">
            <CategoryIcon className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="text-balance font-display text-2xl font-bold leading-tight text-brand-navy md:text-3xl">
            {category}
          </h3>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {carriers.map((carrier) => (
          <CarrierCard key={carrier.id} carrier={carrier} />
        ))}
      </div>
    </SlideWrapper>
  )
}

// Главный компонент секции носителей
export function ApplicationsSection() {
  // Разбиваем носители на пары по 2
  const carrierPairs: (typeof allCarriers)[number][][] = []
  for (let i = 0; i < allCarriers.length; i += 2) {
    carrierPairs.push(allCarriers.slice(i, i + 2))
  }

  // Начинаем с 12 слайда (после основных секций)
  const startSlide = 12

  return (
    <section id="applications" className="scroll-mt-20">
      {carrierPairs.map((pair, pairIndex) => (
        <CarriersSlide
          key={`carriers-${pairIndex}`}
          carriers={pair}
          slideNumber={startSlide + pairIndex}
        />
      ))}
    </section>
  )
}
