import { SectionHeading } from "@/components/moodboard/section-heading"
import { FileText, Shirt, Car, Smartphone, Gift } from "lucide-react"
import { MobileAppMockup } from "@/components/brandbook/mobile-app-mockup"
import { PageNumber } from "./page-number"
import Image from "next/image"

const categories = [
  {
    id: "print",
    icon: FileText,
    title: "Полиграфия",
    desc: "Печатные материалы для коммуникации с клиентами, партнёрами и продвижения бренда.",
    items: [
      {
        src: "/carriers/carrier-business-card.png",
        title: "Визитные карточки",
        desc: "Контактные карточки для водителей и менеджеров с логотипом и реквизитами.",
      },
      {
        src: "/carriers/carrier-flyer.png",
        title: "Флаер / листовка",
        desc: "Рекламный флаер с логотипом «Кибитка» и призывом к действию.",
      },
      {
        src: "/carriers/carrier-poster.png",
        title: "Плакат / постер",
        desc: "Рекламный плакат для наружной рекламы и точек продаж с фирменными элементами.",
      },
    ],
  },
  {
    id: "uniform",
    icon: Shirt,
    title: "Форма и документация",
    desc: "Единый стиль команды — узнаваемость, профессиональный образ и деловая коммуникация.",
    items: [
      {
        src: "/carriers/carrier-uniform.png",
        title: "Форменная одежда водителей",
        desc: "Поло и кепка с вышитым логотипом «Кибитка» и графическими элементами.",
      },
      {
        src: "/carriers/carrier-badge.png",
        title: "Бейдж водителя",
        desc: "Идентификационный бейдж с фото, именем и логотипом компании.",
      },
      {
        src: "/carriers/carrier-letterhead.png",
        title: "Фирменный бланк",
        desc: "Официальный бланк для деловой переписки с партнёрами и клиентами.",
      },
    ],
  },
  {
    id: "digital",
    icon: Smartphone,
    title: "Цифровые носители",
    desc: "Мобильное приложение и digital-присутствие — основные точки контакта с аудиторией.",
    items: [
      {
        src: null,
        custom: "app" as const,
        title: "Мобильное приложение",
        desc: "UI мобильного приложения для iOS и Android: карта, заказ поездки, оранжевые акценты.",
      },
      {
        src: "/carriers/carrier-social.png",
        title: "Соцсети и баннеры",
        desc: "Шаблоны для социальных сетей, рекламные баннеры и digital-креативы.",
      },
      {
        src: "/carriers/carrier-email.png",
        title: "Email-рассылка",
        desc: "Шаблон email-писем для коммуникации с клиентами и промо-акций.",
      },
    ],
  },
  {
    id: "merch",
    icon: Gift,
    title: "Сувенирная продукция",
    desc: "Фирменные сувениры усиливают лояльность и работают как живая реклама бренда.",
    items: [
      {
        src: "/carriers/carrier-promo.png",
        title: "Промо-набор",
        desc: "Брендированные стаканы, мерч и упаковка с логотипом — для корпоративных партнёрств.",
      },
      {
        src: "/carriers/carrier-bag.png",
        title: "Фирменный шоппер",
        desc: "Экологичная сумка-шоппер с логотипом для пассажиров и партнёров.",
      },
      {
        src: "/carriers/carrier-app.png",
        title: "Мерч и аксессуары",
        desc: "Брелоки, магниты, стикеры и другие сувениры с символикой «Кибитка».",
      },
    ],
  },
  {
    id: "transport",
    icon: Car,
    title: "Транспорт",
    desc: "Фирменный стиль на автопарке — самый заметный и запоминающийся носитель бренда.",
    items: [
      {
        src: "/carriers/carrier-taxi-car.png",
        title: "Брендирование автомобиля",
        desc: "Оклейка кузова с логотипом на дверях, графические элементы и фотостиль бренда.",
      },
      {
        src: "/carriers/carrier-car-interior.png",
        title: "Интерьер автомобиля",
        desc: "Брендированные элементы салона: подголовники, визитницы, ароматизаторы.",
      },
      {
        src: "/carriers/carrier-car-toplight.png",
        title: "Световой короб",
        desc: "Фирменный световой короб на крыше автомобиля с логотипом «Кибитка».",
      },
    ],
  },
]

// Заголовочный слайд для категории
function CategoryHeader({ 
  icon: Icon, 
  title, 
  desc, 
  index 
}: { 
  icon: typeof FileText
  title: string
  desc: string
  index: number 
}) {
  return (
    <div className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-brand-navy px-5 py-16 md:py-24">
      {/* Декоративный паттерн */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-[40px] border-brand-orange" />
        <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full border-[30px] border-brand-cream" />
      </div>
      
      <div className="relative z-10 text-center">
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-orange text-white shadow-lg md:h-24 md:w-24">
          <Icon className="h-10 w-10 md:h-12 md:w-12" aria-hidden="true" />
        </div>
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-brand-orange">
          Носители · {String(index + 1).padStart(2, "0")} / 05
        </p>
        <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
          {desc}
        </p>
      </div>
    </div>
  )
}

export function ApplicationsSection() {
  return (
    <section id="applications" className="scroll-mt-20">
      {/* Основной заголовок секции */}
      <div className="bg-brand-cream px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="08"
            kicker="Носители"
            title="Носители (по видам)"
            description="Как фирменный стиль «Кибитка» живёт на реальных носителях — подобраны с учётом специфики городского такси."
          />

          {/* Примечание о цветовом решении */}
          <div className="rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-5 md:p-6">
            <p className="text-sm leading-relaxed text-brand-navy">
              <span className="font-semibold">Примечание:</span> В большинстве носителей цветовое решение не прописано отдельно. Основой являются{" "}
              <span className="font-semibold">графические элементы</span> логотипа и{" "}
              <span className="font-semibold">фотостиль</span>, которые обеспечивают узнаваемость бренда. Там, где цвет применяется — используются строго фирменные оттенки: оранжевый <span className="inline-block h-3 w-3 rounded-sm bg-brand-orange align-middle" />, тёмно-синий <span className="inline-block h-3 w-3 rounded-sm bg-brand-navy align-middle" />, кремовый <span className="inline-block h-3 w-3 rounded-sm bg-brand-cream border border-brand-navy/20 align-middle" />.
            </p>
          </div>
        </div>
      </div>

      {/* Категории с заголовочными слайдами */}
      {categories.map((cat, catIndex) => (
        <div key={cat.id}>
          {/* Заголовочный слайд категории */}
          <CategoryHeader 
            icon={cat.icon} 
            title={cat.title} 
            desc={cat.desc} 
            index={catIndex} 
          />
          
          {/* Примеры носителей */}
          <div className="bg-brand-cream px-5 py-12 md:py-16">
            <div className="mx-auto max-w-6xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange-dark">
                  <cat.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg font-semibold text-brand-navy">
                  Примеры: {cat.title}
                </h3>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {cat.items.map((item) => (
                  <article
                    key={item.title}
                    className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm"
                  >
                    {"custom" in item && item.custom === "app" ? (
                      <MobileAppMockup />
                    ) : (
                      <div className="relative aspect-[16/10]">
                        <Image
                          src={item.src!}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
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
          </div>
        </div>
      ))}
      
      <PageNumber number={12} total={13} />
    </section>
  )
}
