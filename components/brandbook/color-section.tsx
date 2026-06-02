import { SectionHeading } from "@/components/moodboard/section-heading"
import { Check, X } from "lucide-react"

const primary = [
  { name: "Оранжевый", hex: "#F39C12", rgb: "243, 156, 18", cmyk: "0, 36, 93, 5", note: "Основной акцент", light: false },
  { name: "Красный", hex: "#E74C3C", rgb: "231, 76, 60", cmyk: "0, 67, 74, 9", note: "Энергия, стоп-сигнал", light: false },
  { name: "Тёмно-синий", hex: "#2C3E50", rgb: "44, 62, 80", cmyk: "45, 23, 0, 69", note: "Надёжность, текст", light: false },
]

const secondary = [
  { name: "Кремовый", hex: "#F5F0E8", rgb: "245, 240, 232", cmyk: "0, 2, 5, 4", note: "Фон, воздух", light: true },
  { name: "Песочный", hex: "#8B7355", rgb: "139, 115, 85", cmyk: "0, 17, 39, 45", note: "Подписи, детали", light: false },
  { name: "Зелёный", hex: "#27AE60", rgb: "39, 174, 96", cmyk: "78, 0, 45, 32", note: "Подтверждение, успех", light: false },
  { name: "Оранжевый тёмный", hex: "#E67E22", rgb: "230, 126, 34", cmyk: "0, 45, 85, 10", note: "Градиенты, hover", light: false },
]

const colorDos = [
  "Использовать основную палитру для ключевых элементов",
  "Соблюдать контраст текста и фона",
  "Применять дополнительные цвета для акцентов",
]

const colorDonts = [
  "Заменять фирменные цвета на похожие оттенки",
  "Использовать более 3 цветов одновременно",
  "Смешивать тёплые и холодные цвета хаотично",
]

function Swatch({
  hex,
  rgb,
  cmyk,
  name,
  note,
  light,
}: {
  hex: string
  rgb: string
  cmyk: string
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
        <div className="mt-2 space-y-0.5 font-mono text-[10px] text-brand-navy/50">
          <p>RGB: {rgb}</p>
          <p>CMYK: {cmyk}</p>
        </div>
      </div>
    </div>
  )
}

export function ColorSection() {
  return (
    <section id="colors" className="scroll-mt-20 bg-brand-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          index="04"
          kicker="Цвет"
          title="Фирменные цвета"
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

        {/* Color usage rules */}
        <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
          Правила использования цветов
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-brand-green/30 bg-card p-7">
            <h4 className="mb-4 flex items-center gap-2 font-display font-semibold text-brand-green">
              <Check className="h-5 w-5" aria-hidden="true" /> Правильно
            </h4>
            <ul className="flex flex-col gap-3">
              {colorDos.map((d) => (
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
              {colorDonts.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-brand-navy/80">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Color proportions */}
        <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
          Пропорции использования
        </h3>
        <div className="rounded-2xl border border-brand-navy/10 bg-card p-8">
          <div className="mb-4 flex h-8 overflow-hidden rounded-lg">
            <div className="w-[50%] bg-brand-orange" title="Оранжевый 50%" />
            <div className="w-[30%] bg-brand-navy" title="Тёмно-синий 30%" />
            <div className="w-[15%] bg-brand-cream border-x border-brand-navy/10" title="Кремовый 15%" />
            <div className="w-[5%] bg-brand-red" title="Красный 5%" />
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-brand-navy/70">
            <span><span className="inline-block h-3 w-3 rounded bg-brand-orange mr-1" />Оранжевый 50%</span>
            <span><span className="inline-block h-3 w-3 rounded bg-brand-navy mr-1" />Тёмно-синий 30%</span>
            <span><span className="inline-block h-3 w-3 rounded bg-brand-cream border border-brand-navy/20 mr-1" />Кремовый 15%</span>
            <span><span className="inline-block h-3 w-3 rounded bg-brand-red mr-1" />Красный 5%</span>
          </div>
        </div>
      </div>
    </section>
  )
}
