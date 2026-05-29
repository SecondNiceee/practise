import { SectionHeading } from "@/components/moodboard/section-heading"
import { Check, X } from "lucide-react"

const dos = [
  "Сохранять охранное поле вокруг логотипа",
  "Использовать утверждённые цвета палитры",
  "Размещать знак на контрастном фоне",
  "Применять Montserrat для заголовков, Open Sans для текста",
]

const donts = [
  "Искажать пропорции и наклонять логотип",
  "Менять фирменные цвета на произвольные",
  "Размещать на пёстром, нечитаемом фоне",
  "Добавлять тени, обводки и эффекты к знаку",
]

export function RulesSection() {
  return (
    <section id="rules" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          index="9"
          kicker="Правила"
          title="Правила использования"
          description="Соблюдение этих правил сохраняет узнаваемость и целостность бренда «Кибитка» на любых носителях."
        />

        <div className="grid gap-4 md:grid-cols-2">
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
      </div>
    </section>
  )
}
