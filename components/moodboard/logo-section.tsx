import Image from "next/image"
import { SectionHeading } from "./section-heading"
import { KibitkaMark } from "./kibitka-mark"

const mascots = [
  { src: "/logo/mascot-main.jpg", alt: "Маскот Кибитка — приветствие" },
  { src: "/logo/mascot-emotions.jpg", alt: "Маскот Кибитка — эмоции" },
  { src: "/logo/mascot-activities.jpg", alt: "Маскот Кибитка — действия" },
  { src: "/logo/mascot-lineart.jpg", alt: "Маскот Кибитка — контурная версия" },
]

export function LogoSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <SectionHeading
        index="5"
        kicker="Практические работы №3–5 · Логотип"
        title="Логотип и его вариации"
        description="Финальный знак — стилизованное ретро-такси с фирменной надписью. Работает на светлых, тёмных и акцентных фонах."
      />

      {/* Lockups */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* White */}
        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-white p-10">
          <KibitkaMark className="h-24 w-36" />
          <span className="font-display text-xl font-bold tracking-[0.3em] text-brand-navy">
            КИБИТКА
          </span>
          <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand-sand">
            На светлом фоне
          </span>
        </div>

        {/* Navy */}
        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-brand-navy p-10">
          <KibitkaMark className="h-24 w-36" windowColor="#1a2533" wheelInner="#ecf0f1" />
          <span className="font-display text-xl font-bold tracking-[0.3em] text-white">
            КИБИТКА
          </span>
          <span className="font-display text-xs font-semibold uppercase tracking-wider text-white/50">
            На тёмном фоне
          </span>
        </div>

        {/* Orange */}
        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange-dark p-10">
          <KibitkaMark
            className="h-24 w-36"
            bodyColor="#ffffff"
            windowColor="#2c3e50"
            bumperColor="#ffffff"
            lightColor="#2c3e50"
            wheelColor="#2c3e50"
            wheelInner="#ffffff"
          />
          <span className="font-display text-xl font-bold tracking-[0.3em] text-white">
            КИБИТКА
          </span>
          <span className="font-display text-xs font-semibold uppercase tracking-wider text-white/70">
            На акцентном фоне
          </span>
        </div>
      </div>

      {/* Protective field note */}
      <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-dashed border-brand-navy/25 bg-card p-6 text-center sm:flex-row sm:items-center sm:justify-center sm:gap-2 sm:text-left">
        <span className="font-display text-sm font-semibold text-brand-navy">
          Охранное поле:
        </span>
        <span className="text-sm text-brand-navy/65">
          минимальный отступ от логотипа до края носителя равен высоте колеса
          автомобиля (X).
        </span>
      </div>

      {/* Mascot */}
      <h3 className="mb-5 mt-12 font-display text-lg font-semibold text-brand-navy">
        Маскот бренда
      </h3>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {mascots.map((m) => (
          <div
            key={m.src}
            className="relative aspect-square overflow-hidden rounded-2xl border border-brand-navy/10 bg-white"
          >
            <Image
              src={m.src || "/placeholder.svg"}
              alt={m.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-contain p-4 transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
      <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-brand-navy/65">
        Дружелюбный кот-таксист в фирменной кепке делает бренд тёплым и
        запоминающимся — используется в приложении, соцсетях и рекламе.
      </p>
    </section>
  )
}
