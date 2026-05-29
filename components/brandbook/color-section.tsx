import { SectionHeading } from "@/components/moodboard/section-heading"

const primary = [
  { name: "Оранжевый", hex: "#F39C12", note: "Основной · акцент", light: false },
  { name: "Красный", hex: "#E74C3C", note: "Энергия · стоп-сигнал", light: false },
  { name: "Тёмно-синий", hex: "#2C3E50", note: "Надёжность · текст", light: false },
]

const secondary = [
  { name: "Кремовый", hex: "#F5F0E8", note: "Фон · воздух", light: true },
  { name: "Песочный", hex: "#8B7355", note: "Подписи · детали", light: false },
  { name: "Зелёный", hex: "#27AE60", note: "Подтверждение · успех", light: false },
  { name: "Оранжевый тёмный", hex: "#E67E22", note: "Градиенты · hover", light: false },
]

function Swatch({
  hex,
  name,
  note,
  light,
}: {
  hex: string
  name: string
  note: string
  light: boolean
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm">
      <div
        className="flex h-28 items-end p-4 transition-transform duration-300 group-hover:scale-[1.03]"
        style={{ backgroundColor: hex }}
      >
        <span
          className={`font-mono text-sm font-semibold ${light ? "text-brand-navy" : "text-white"}`}
        >
          {hex}
        </span>
      </div>
      <div className="flex flex-col gap-1 p-4">
        <span className="font-display font-semibold text-brand-navy">{name}</span>
        <span className="text-xs text-brand-sand">{note}</span>
      </div>
    </div>
  )
}

export function ColorSection() {
  return (
    <section id="colors" className="scroll-mt-20 bg-brand-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          index="4"
          kicker="Цвет"
          title="Цветовая палитра"
          description="Контрастные и тёплые цвета передают энергию, скорость, надёжность и безопасность бренда. Оранжевый — главный носитель характера «Кибитки»."
        />

        <h3 className="mb-5 font-display text-lg font-semibold text-brand-navy">Основные цвета</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {primary.map((c) => (
            <Swatch key={c.hex} {...c} />
          ))}
        </div>

        <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
          Дополнительные цвета
        </h3>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {secondary.map((c) => (
            <Swatch key={c.hex} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}
