import Image from "next/image"
import { SectionHeading } from "./section-heading"
import { PatternsStrip } from "./patterns-strip"

type Tile = {
  src: string
  alt: string
  caption: string
  className: string
}

const tiles: Tile[] = [
  {
    src: "/aidentic/taxi-car.jpg",
    alt: "Жёлтое такси на городской улице",
    caption: "Городское такси",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/aidentic/city-night.jpg",
    alt: "Ночной город в огнях",
    caption: "Ночная динамика",
    className: "col-span-2 row-span-1",
  },
  {
    src: "/aidentic/taxi-interior.jpg",
    alt: "Чистый салон автомобиля",
    caption: "Комфорт салона",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/aidentic/taxi-app.jpg",
    alt: "Приложение для заказа такси",
    caption: "Цифровой сервис",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/aidentic/light-trails.jpg",
    alt: "Световые следы машин",
    caption: "Скорость и движение",
    className: "col-span-2 row-span-1",
  },
  {
    src: "/aidentic/street-lights.jpg",
    alt: "Уличные огни вечером",
    caption: "Тёплый свет улиц",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/aidentic/family-taxi.jpg",
    alt: "Семья садится в такси",
    caption: "Забота о пассажирах",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/aidentic/city-skyline.jpg",
    alt: "Панорама города",
    caption: "Знание города",
    className: "col-span-2 row-span-1",
  },
  {
    src: "/aidentic/taxi-driver.jpg",
    alt: "Вежливый водитель такси",
    caption: "Дружелюбный водитель",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/aidentic/passengers.jpg",
    alt: "Пассажиры в поездке",
    caption: "Спокойствие в пути",
    className: "col-span-1 row-span-1",
  },
]

export function MoodboardGallery() {
  return (
    <section className="bg-brand-navy">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          light
          index="2"
          kicker="Мудборд"
          title="Визуальное настроение"
          description="Динамика, городская энергия, тепло и безопасность — атмосфера, которой живёт бренд «Кибитка»."
        />

        <div className="grid auto-rows-[150px] grid-cols-2 gap-3 md:auto-rows-[170px] md:grid-cols-4">
          {tiles.map((tile) => (
            <figure
              key={tile.src}
              className={`group relative overflow-hidden rounded-2xl bg-white/5 ${tile.className}`}
            >
              <Image
                src={tile.src || "/placeholder.svg"}
                alt={tile.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 font-display text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {tile.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Unified brand patterns */}
        <PatternsStrip />
      </div>
    </section>
  )
}
