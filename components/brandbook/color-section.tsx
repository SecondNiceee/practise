import { SectionHeading } from "@/components/moodboard/section-heading"
import { Check, X } from "lucide-react"
import { SlideWrapper } from "./slide-wrapper"

const primary = [
  { name: "Оранжевый", hex: "#F39C12", rgb: "243, 156, 18", cmyk: "0, 36, 93, 5", note: "Основной акцент, такси-жёлтый", light: false },
  { name: "Красный", hex: "#E74C3C", rgb: "231, 76, 60", cmyk: "0, 67, 74, 9", note: "Энергия, стоп-сигнал, CTA", light: false },
  { name: "Тёмно-синий", hex: "#2C3E50", rgb: "44, 62, 80", cmyk: "45, 23, 0, 69", note: "Надёжность, текст, фоны", light: false },
]

const secondary = [
  { name: "Бирюзовый", hex: "#1ABC9C", rgb: "26, 188, 156", cmyk: "86, 0, 17, 26", note: "Свежесть, бонусы", light: false },
  { name: "Золотой", hex: "#D4AF37", rgb: "212, 175, 55", cmyk: "0, 17, 74, 17", note: "Премиум, VIP-класс", light: false },
  { name: "Зелёный", hex: "#27AE60", rgb: "39, 174, 96", cmyk: "78, 0, 45, 32", note: "Подтверждение, успех", light: false },
  { name: "Оранжевый тёмный", hex: "#E67E22", rgb: "230, 126, 34", cmyk: "0, 45, 85, 10", note: "Градиенты, hover", light: false },
]

const neutral = [
  { name: "Кремовый", hex: "#F5F0E8", rgb: "245, 240, 232", cmyk: "0, 2, 5, 4", note: "Фон, воздух", light: true },
  { name: "Песочный", hex: "#8B7355", rgb: "139, 115, 85", cmyk: "0, 17, 39, 45", note: "Подписи, детали", light: false },
  { name: "Светло-серый", hex: "#ECF0F1", rgb: "236, 240, 241", cmyk: "2, 0, 0, 5", note: "Границы, разделители", light: true },
  { name: "Графит", hex: "#34495E", rgb: "52, 73, 94", cmyk: "45, 22, 0, 63", note: "Вторичный текст", light: false },
]

const colorDos = [
  "Использовать оранжевый как главный акцентный цвет",
  "Применять тёмно-синий для текстов и фонов",
  "Соблюдать контраст: светлый текст на тёмном фоне",
  "Использовать бирюзовый и зелёный для позитивных действий",
]

const colorDonts = [
  "Заменять фирменные цвета на похожие оттенки",
  "Использовать более 3 цветов одновременно в одном блоке",
  "Сочетать красный с зелёным (плохая читаемость)",
  "Применять яркие цвета для больших плоскостей",
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
        className="flex h-24 items-end p-4 transition-transform duration-300 group-hover:scale-[1.03]"
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
    <SlideWrapper slideNumber={8} totalSlides={24} variant="light">
      <section id="colors" className="flex min-h-screen flex-col justify-center scroll-mt-20 px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="04"
            kicker="Цвет"
            title="Фирменные цвета"
            description="Яркая и тёплая палитра передаёт энергию, скорость, надёжность и безопасность бренда. Оранжевый — главный носитель характера «Кибитки»."
          />

          <h3 className="mb-5 font-display text-lg font-semibold text-brand-navy">Основные цвета</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {primary.map((c) => (
              <Swatch key={c.hex} {...c} />
            ))}
          </div>

          <h3 className="mb-5 mt-8 font-display text-lg font-semibold text-brand-navy">
            Акцентные цвета
          </h3>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {secondary.map((c) => (
              <Swatch key={c.hex} {...c} />
            ))}
          </div>

          <h3 className="mb-5 mt-8 font-display text-lg font-semibold text-brand-navy">
            Нейтральные цвета
          </h3>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {neutral.map((c) => (
              <Swatch key={c.hex} {...c} />
            ))}
          </div>

          {/* Color usage rules */}
          <h3 className="mb-5 mt-8 font-display text-lg font-semibold text-brand-navy">
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
        </div>
      </section>
    </SlideWrapper>
  )
}
