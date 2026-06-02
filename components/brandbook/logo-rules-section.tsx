import { SectionHeading } from "@/components/moodboard/section-heading"
import { KibitkaLogo } from "@/components/moodboard/kibitka-logo"
import { Check, X } from "lucide-react"

const dos = [
  "Сохранять охранное поле вокруг логотипа",
  "Размещать знак на контрастном фоне",
  "Использовать утверждённые цветовые версии",
  "Масштабировать пропорционально",
]

const donts = [
  "Искажать пропорции и наклонять логотип",
  "Размещать на пёстром, нечитаемом фоне",
  "Добавлять тени, обводки и эффекты к знаку",
  "Менять цвета на произвольные",
]

export function LogoRulesSection() {
  return (
    <section id="logo-rules" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          index="03"
          kicker="Правила логотипа"
          title="Правила использования логотипа"
          description="Соблюдение этих правил сохраняет узнаваемость и целостность логотипа «Кибитка» на любых носителях."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {/* Correct usage */}
          <div className="rounded-2xl border border-brand-green/30 bg-card p-7">
            <h3 className="mb-4 flex items-center gap-2 font-display font-semibold text-brand-green">
              <Check className="h-5 w-5" aria-hidden="true" /> Правильно
            </h3>
            <ul className="flex flex-col gap-3">
              {dos.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-brand-navy/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Incorrect usage */}
          <div className="rounded-2xl border border-brand-red/30 bg-card p-7">
            <h3 className="mb-4 flex items-center gap-2 font-display font-semibold text-brand-red">
              <X className="h-5 w-5" aria-hidden="true" /> Недопустимо
            </h3>
            <ul className="flex flex-col gap-3">
              {donts.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-brand-navy/80">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Visual examples */}
        <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
          Примеры недопустимого использования
        </h3>
        <div className="grid gap-4 md:grid-cols-4">
          {/* Stretched */}
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-red/20 bg-card p-6">
            <div className="relative">
              <div className="scale-x-150 opacity-60">
                <KibitkaLogo size="sm" />
              </div>
              <X className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-brand-red p-1 text-white" />
            </div>
            <span className="text-center text-xs text-brand-navy/60">Растягивание</span>
          </div>

          {/* Rotated */}
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-red/20 bg-card p-6">
            <div className="relative">
              <div className="rotate-12 opacity-60">
                <KibitkaLogo size="sm" />
              </div>
              <X className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-brand-red p-1 text-white" />
            </div>
            <span className="text-center text-xs text-brand-navy/60">Наклон</span>
          </div>

          {/* Wrong color */}
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-red/20 bg-card p-6">
            <div className="relative">
              <div className="opacity-60 grayscale" style={{ filter: "hue-rotate(180deg) saturate(0.5)" }}>
                <KibitkaLogo size="sm" bodyColor="#9b59b6" />
              </div>
              <X className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-brand-red p-1 text-white" />
            </div>
            <span className="text-center text-xs text-brand-navy/60">Чужие цвета</span>
          </div>

          {/* Low contrast */}
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-red/20 bg-brand-orange/20 p-6">
            <div className="relative">
              <div className="opacity-40">
                <KibitkaLogo size="sm" />
              </div>
              <X className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-brand-red p-1 text-white" />
            </div>
            <span className="text-center text-xs text-brand-navy/60">Низкий контраст</span>
          </div>
        </div>

        {/* Minimum size */}
        <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
          Минимальный размер
        </h3>
        <div className="rounded-2xl border border-brand-navy/10 bg-card p-8">
          <div className="flex flex-wrap items-end gap-8">
            <div className="flex flex-col items-center gap-3">
              <KibitkaLogo size="sm" />
              <span className="font-mono text-xs text-brand-sand">min 80px для digital</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="scale-75">
                <KibitkaLogo size="sm" />
              </div>
              <span className="font-mono text-xs text-brand-sand">min 20mm для печати</span>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-brand-navy/70">
            Логотип не должен использоваться в размере меньше указанного минимума,
            чтобы сохранить читаемость и узнаваемость знака.
          </p>
        </div>
      </div>
    </section>
  )
}
