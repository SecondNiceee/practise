import { SectionHeading } from "./section-heading"

const palette = [
  { name: "Оранжевый", hex: "#F39C12", note: "Основной · акцент", dark: false },
  { name: "Красный", hex: "#E74C3C", note: "Энергия · стоп-сигнал", dark: false },
  { name: "Тёмно-синий", hex: "#2C3E50", note: "Надёжность · текст", dark: true },
  { name: "Кремовый", hex: "#F5F0E8", note: "Фон · воздух", dark: false },
  { name: "Зелёный", hex: "#27AE60", note: "Подтверждение", dark: false },
]

export function PaletteSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <SectionHeading
        index="3"
        kicker="Практическая работа №4 · Цвет"
        title="Цветовая палитра"
        description="Контрастные и тёплые цвета, передающие энергию, скорость, надёжность и безопасность бренда."
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {palette.map((c) => (
          <div
            key={c.hex}
            className="group overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm"
          >
            <div
              className="flex h-28 items-end p-4 transition-transform duration-300 group-hover:scale-[1.03]"
              style={{ backgroundColor: c.hex }}
            >
              <span
                className={`font-mono text-sm font-semibold ${
                  c.hex === "#F5F0E8" ? "text-brand-navy" : "text-white"
                }`}
              >
                {c.hex}
              </span>
            </div>
            <div className="flex flex-col gap-1 p-4">
              <span className="font-display font-semibold text-brand-navy">{c.name}</span>
              <span className="text-xs text-brand-sand">{c.note}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
