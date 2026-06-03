import { SlideWrapper } from "./slide-wrapper"
import { MobileAppMockup } from "./mobile-app-mockup"
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
    src: "/carriers/carrier-business-card.png",
    title: "Визитные карточки",
    desc: "Контактные карточки для водителей и менеджеров с логотипом и реквизитами.",
  },
  {
    id: "carrier-02",
    number: "02",
    category: "Полиграфия",
    categoryIcon: FileText,
    src: "/carriers/carrier-flyer.png",
    title: "Флаер / листовка",
    desc: "Рекламный флаер с логотипом «Кибитка» и призывом к действию.",
  },
  // Форма и документация
  {
    id: "carrier-03",
    number: "03",
    category: "Форма и документация",
    categoryIcon: Shirt,
    src: "/carriers/carrier-uniform.png",
    title: "Форменная одежда водителей",
    desc: "Поло и кепка с вышитым логотипом «Кибитка» и графическими элементами.",
  },
  {
    id: "carrier-04",
    number: "04",
    category: "Форма и документация",
    categoryIcon: Shirt,
    src: "/carriers/carrier-badge.png",
    title: "Бейдж водителя",
    desc: "Идентификационный бейдж с фото, именем и логотипом компании.",
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
    src: "/carriers/carrier-social.png",
    title: "Соцсети и баннеры",
    desc: "Шаблоны для социальных сетей, рекламные баннеры и digital-креативы.",
  },
  // Сувенирная продукция
  {
    id: "carrier-07",
    number: "07",
    category: "Сувенирная продукция",
    categoryIcon: Gift,
    src: "/carriers/carrier-promo.png",
    title: "Промо-набор",
    desc: "Брендированные стаканы, мерч и упаковка с логотипом — для корпоративных партнёрств.",
  },
  {
    id: "carrier-08",
    number: "08",
    category: "Сувенирная продукция",
    categoryIcon: Gift,
    src: "/carriers/carrier-bag.png",
    title: "Фирменный шоппер",
    desc: "Экологичная сумка-шоппер с логотипом для пассажиров и партнёров.",
  },
  // Транспорт
  {
    id: "carrier-09",
    number: "09",
    category: "Транспорт",
    categoryIcon: Car,
    src: "/carriers/carrier-taxi-car.png",
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
