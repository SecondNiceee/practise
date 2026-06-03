import Image from "next/image"
import { Check, X } from "lucide-react"
import { SectionHeading } from "@/components/moodboard/section-heading"
import { MascotEmotions } from "@/components/moodboard/mascot-emotions"
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
            Паттерн строится на равномерной модульной сетке. Сохраняйте исходный масштаб, пропорции и плотность модулей — это держит ритм графики узнаваемым.
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

              {/* Пример 1: корректный масштаб и плотность */}
              <div
                className="aspect-[4/3] overflow-hidden rounded-2xl border border-brand-navy/10"
                style={{
                  backgroundImage: "url(/patterns/cars.png)",
                  backgroundSize: "150px",
                  backgroundRepeat: "repeat",
                }}
              />
              <p className="text-sm text-brand-navy/60">
                Комфортный масштаб модуля с равномерным шагом — паттерн «дышит»
              </p>

              {/* Пример 2: паттерн как сдержанный тон */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-brand-navy/10 bg-brand-navy">
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: "url(/patterns/pins.png)",
                    backgroundSize: "110px",
                    backgroundRepeat: "repeat",
                  }}
                />
              </div>
              <p className="text-sm text-brand-navy/60">
                Деликатная подача тон-в-тон поверх фирменного фона
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

              {/* Пример 1: слишком плотный масштаб */}
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-red-300"
                style={{
                  backgroundImage: "url(/patterns/cars.png)",
                  backgroundSize: "44px",
                  backgroundRepeat: "repeat",
                }}
              >
                <div className="absolute right-2 top-2 rounded bg-red-500 px-2 py-0.5 text-xs font-bold text-white">
                  Нет
                </div>
              </div>
              <p className="text-sm text-brand-navy/60">
                Слишком мелкий и плотный модуль превращается в визуальный шум
              </p>

              {/* Пример 2: искажение пропорций */}
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-red-300"
                style={{
                  backgroundImage: "url(/patterns/speed.png)",
                  backgroundSize: "230px 80px",
                  backgroundRepeat: "repeat",
                }}
              >
                <div className="absolute right-2 top-2 rounded bg-red-500 px-2 py-0.5 text-xs font-bold text-white">
                  Нет
                </div>
              </div>
              <p className="text-sm text-brand-navy/60">
                Растягивание модуля по одной оси искажает пропорции
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
