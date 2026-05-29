import { SectionHeading } from "./section-heading"

const palette = [
  { name: "Оранжевый", hex: "#F39C12", note: "Корпус машинки · акцент", dark: false },
  { name: "Тёмно-синий", hex: "#2C3E50", note: "Окна и колёса · текст", dark: true },
  { name: "Светлый", hex: "#ECF0F1", note: "Фары и диски · фон", dark: false },
]

export function PaletteSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <SectionHeading
        index="3"
        kicker="Цвет"
        title="Цветовая палитра"
        description="Три фирменных цвета, взятые прямо из логотипа: оранжевый корпус машинки, тёмно-синие окна и колёса, светлый тон фар и дисков."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {palette.map((c) => (
          <div
            key={c.hex}
            className="group overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm"
          >
            <div
              className="flex h-32 items-end p-4 transition-transform duration-300 group-hover:scale-[1.03]"
              style={{ backgroundColor: c.hex }}
            >
              <span
                className={`font-mono text-sm font-semibold ${
                  c.dark ? "text-white" : "text-brand-navy"
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
