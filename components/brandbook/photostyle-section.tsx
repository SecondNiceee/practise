import Image from "next/image"
import { SectionHeading } from "@/components/moodboard/section-heading"
import { Check, X } from "lucide-react"
import { SlideWrapper } from "./slide-wrapper"

const photoExamples = [
  { src: "/aidentic/taxi-car.jpg", title: "Автомобиль", desc: "Чистый, ухоженный автомобиль в городской среде" },
  { src: "/aidentic/taxi-driver.jpg", title: "Водитель", desc: "Дружелюбный, профессиональный образ" },
  { src: "/aidentic/passengers.jpg", title: "Пассажиры", desc: "Довольные клиенты, естественные эмоции" },
  { src: "/aidentic/city-skyline.jpg", title: "Город", desc: "Узнаваемая городская среда, динамика" },
]

const photoDos = [
  "Использовать естественное освещение",
  "Показывать реальных людей и ситуации",
  "Соблюдать тёплую цветовую гамму",
  "Передавать ощущение движения и динамики",
]

const photoDonts = [
  "Использовать постановочные, неестественные фото",
  "Применять холодные синие фильтры",
  "Показывать грязные или старые автомобили",
  "Использовать перенасыщенные цвета",
]

export function PhotoStyleSection() {
  return (
    <SlideWrapper slideNumber={11} totalSlides={21} variant="light">
      <section id="photostyle" className="flex min-h-screen flex-col justify-center scroll-mt-20 px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="07"
            kicker="Фотостиль"
            title="Фотостиль и правила"
            description="Визуальный язык фотографий «Кибитки» — тёплый, дружелюбный и динамичный. Фото передают надёжность и заботу о пассажире."
          />

          {/* Photo examples */}
          <h3 className="mb-5 font-display text-lg font-semibold text-brand-navy">
            Примеры фотостиля
          </h3>
          <div className="grid gap-4 md:grid-cols-4">
            {photoExamples.map((photo) => (
              <article
                key={photo.src}
                className="group overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-1 p-4">
                  <h4 className="font-display text-sm font-semibold text-brand-navy">{photo.title}</h4>
                  <p className="text-xs leading-relaxed text-brand-navy/65">{photo.desc}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Photo characteristics */}
          <h3 className="mb-5 mt-8 font-display text-lg font-semibold text-brand-navy">
            Характеристики фотостиля
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-brand-navy/10 bg-card p-6">
              <h4 className="mb-3 font-display font-semibold text-brand-navy">Освещение</h4>
              <p className="text-sm text-brand-navy/70">
                Естественный свет, тёплые тона. Золотой час идеален для съёмок.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-navy/10 bg-card p-6">
              <h4 className="mb-3 font-display font-semibold text-brand-navy">Цветокоррекция</h4>
              <p className="text-sm text-brand-navy/70">
                Тёплый баланс белого, лёгкое повышение насыщенности оранжевых тонов.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-navy/10 bg-card p-6">
              <h4 className="mb-3 font-display font-semibold text-brand-navy">Композиция</h4>
              <p className="text-sm text-brand-navy/70">
                Динамичные ракурсы, правило третей. Размытие фона (боке) для выделения объекта.
              </p>
            </div>
          </div>

          {/* Photo rules */}
          <h3 className="mb-5 mt-8 font-display text-lg font-semibold text-brand-navy">
            Правила использования фотографий
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-green/30 bg-card p-7">
              <h4 className="mb-4 flex items-center gap-2 font-display font-semibold text-brand-green">
                <Check className="h-5 w-5" aria-hidden="true" /> Правильно
              </h4>
              <ul className="flex flex-col gap-3">
                {photoDos.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-brand-navy/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-red/30 bg-card p-7">
              <h4 className="mb-4 flex items-center gap-2 font-display font-semibold text-brand-red">
                <X className="h-5 w-5" aria-hidden="true" /> Недопустимо
              </h4>
              <ul className="flex flex-col gap-3">
                {photoDonts.map((d) => (
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
    </SlideWrapper>
  )
}
