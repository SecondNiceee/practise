import Image from "next/image"
import { Check, X } from "lucide-react"
import { SectionHeading } from "@/components/moodboard/section-heading"
import { MascotEmotions } from "@/components/moodboard/mascot-emotions"
import { KibitkaLogo } from "@/components/moodboard/kibitka-logo"
import { SlideWrapper } from "./slide-wrapper"

type Pattern = {
  id: string
  title: string
  desc: string
  src: string
}

const patterns: Pattern[] = [
  { id: "cars", title: "Машинки", desc: "Основной паттерн для упаковки и фонов", src: "/patterns/cars.png" },
  { id: "pins", title: "Геометки", desc: "Карты и геолокация", src: "/patterns/pins.png" },
  { id: "steering", title: "Руль", desc: "Акцент для интерфейсов", src: "/patterns/steering.png" },
  { id: "speed", title: "Скорость", desc: "Яркий акцент для соцсетей", src: "/patterns/speed.png" },
]

function PatternSwatch({ p }: { p: Pattern }) {
  return (
    <figure className="group relative aspect-square overflow-hidden rounded-2xl border border-brand-navy/10">
      <Image
        src={p.src || "/placeholder.svg"}
        alt={`Паттерн «${p.title}»`}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover"
      />
      <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-gradient-to-t from-brand-navy/85 to-transparent p-4">
        <span className="font-display text-sm font-semibold text-white">{p.title}</span>
        <span className="text-xs text-white/70">{p.desc}</span>
      </figcaption>
    </figure>
  )
}

export function PatternSection() {
  return (
    <SlideWrapper slideNumber={10} totalSlides={21} variant="light">
      <div id="patterns" className="scroll-mt-20">
          <SectionHeading
            index="06"
            kicker="Паттерны"
            title="Паттерны и дополнительные графические элементы"
            description="Единая система линейной графики на основе машинки, геометки, руля и скорости."
          />

          <h3 className="mb-5 font-display text-lg font-semibold text-brand-navy">
            Фирменные паттерны
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {patterns.map((p) => (
              <PatternSwatch key={p.id} p={p} />
            ))}
          </div>

          {/* Правила использования паттерна */}
          <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
            Правила использования паттерна
          </h3>
          <p className="mb-6 max-w-3xl text-brand-navy/70">
            Паттерн используется как фоновый элемент. Логотип всегда размещается на однотонной подложке с достаточным контрастом.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Правильно */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="font-display font-semibold text-green-700">Правильно</span>
              </div>
              
              {/* Пример 1: Логотип на белой подложке поверх паттерна */}
              <div
                className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-brand-navy/10"
                style={{
                  backgroundImage: "url(/patterns/cars.png)",
                  backgroundSize: "150px",
                  backgroundRepeat: "repeat",
                }}
              >
                <div className="rounded-xl bg-white px-8 py-6 shadow-lg">
                  <KibitkaLogo size="md" caption="Такси-сервис" />
                </div>
              </div>
              <p className="text-sm text-brand-navy/60">
                Логотип на белой подложке с тенью поверх паттерна
              </p>

              {/* Пример 2: Паттерн только в части макета */}
              <div className="relative flex aspect-[4/3] overflow-hidden rounded-2xl border border-brand-navy/10">
                <div className="flex w-1/2 items-center justify-center bg-white p-4">
                  <KibitkaLogo size="sm" caption="Такси-сервис" />
                </div>
                <div
                  className="w-1/2"
                  style={{
                    backgroundImage: "url(/patterns/pins.png)",
                    backgroundSize: "100px",
                    backgroundRepeat: "repeat",
                  }}
                />
              </div>
              <p className="text-sm text-brand-navy/60">
                Паттерн занимает часть макета, логотип на чистом фоне
              </p>
            </div>

            {/* Неправильно */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500">
                  <X className="h-4 w-4 text-white" />
                </div>
                <span className="font-display font-semibold text-red-700">Неправильно</span>
              </div>
              
              {/* Пример 1: Логотип напрямую на паттерне */}
              <div
                className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border-2 border-red-300"
                style={{
                  backgroundImage: "url(/patterns/cars.png)",
                  backgroundSize: "150px",
                  backgroundRepeat: "repeat",
                }}
              >
                <div className="absolute right-2 top-2 rounded bg-red-500 px-2 py-0.5 text-xs font-bold text-white">
                  Нет
                </div>
                <KibitkaLogo size="md" caption="Такси-сервис" />
              </div>
              <p className="text-sm text-brand-navy/60">
                Логотип напрямую на паттерне — плохая читаемость
              </p>

              {/* Пример 2: Логотип на полупрозрачной подложке */}
              <div
                className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border-2 border-red-300"
                style={{
                  backgroundImage: "url(/patterns/speed.png)",
                  backgroundSize: "120px",
                  backgroundRepeat: "repeat",
                }}
              >
                <div className="absolute right-2 top-2 rounded bg-red-500 px-2 py-0.5 text-xs font-bold text-white">
                  Нет
                </div>
                <div className="rounded-xl bg-white/50 px-8 py-6 backdrop-blur-sm">
                  <KibitkaLogo size="md" caption="Такси-сервис" />
                </div>
              </div>
              <p className="text-sm text-brand-navy/60">
                Полупрозрачная подложка — паттерн просвечивает
              </p>
            </div>
          </div>

          {/* Additional graphic elements - Mascot */}
          <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
            Дополнительные графические элементы: Маскот
          </h3>
          <p className="mb-6 max-w-3xl text-brand-navy/70">
            Сама машинка «Кибитка» становится маскотом: набор эмоций позволяет ей живо общаться с аудиторией.
          </p>
          <MascotEmotions />

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="flex flex-col gap-2 rounded-2xl border border-brand-navy/10 bg-card p-6 text-center">
              <span className="font-display font-semibold text-brand-navy">Приложение</span>
              <span className="text-sm leading-relaxed text-brand-navy/65">Онбординг, пустые состояния</span>
            </div>
            <div className="flex flex-col gap-2 rounded-2xl border border-brand-navy/10 bg-card p-6 text-center">
              <span className="font-display font-semibold text-brand-navy">Соцсети</span>
              <span className="text-sm leading-relaxed text-brand-navy/65">Стикеры, сторис и анонсы</span>
            </div>
            <div className="flex flex-col gap-2 rounded-2xl border border-brand-navy/10 bg-card p-6 text-center">
              <span className="font-display font-semibold text-brand-navy">Реклама</span>
              <span className="text-sm leading-relaxed text-brand-navy/65">Наружные носители</span>
            </div>
          </div>
      </div>
    </SlideWrapper>
  )
}
