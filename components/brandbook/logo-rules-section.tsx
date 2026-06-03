import { SectionHeading } from "@/components/moodboard/section-heading"
import { KibitkaLogo } from "@/components/moodboard/kibitka-logo"
import { KibitkaMark } from "@/components/moodboard/kibitka-mark"
import { Check, X } from "lucide-react"
import { SlideWrapper } from "./slide-wrapper"

const dos = [
  "Сохранять охранное поле вокруг логотипа",
  "Размещать знак на контрастном фоне",
  "Использовать только утверждённые цветовые версии",
  "Масштабировать пропорционально",
  "Следить за минимальным размером",
]

const donts = [
  "Искажать пропорции и наклонять логотип",
  "Размещать на пёстром, нечитаемом фоне",
  "Добавлять тени, обводки и эффекты к знаку",
  "Менять цвета на произвольные",
  "Использовать логотип без достаточного охранного поля",
]

export function LogoRulesSection() {
  return (
    <SlideWrapper slideNumber={7} totalSlides={21} variant="light">
      <div id="logo-rules" className="scroll-mt-20">
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

          {/* Visual examples of incorrect usage */}
          <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
            Примеры недопустимого использования
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Stretched */}
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-red/20 bg-card p-6">
              <div className="relative flex h-24 w-full items-center justify-center">
                <div className="scale-x-150 opacity-60">
                  <KibitkaMark className="h-16 w-24" />
                </div>
                <X className="absolute -right-1 -top-1 h-6 w-6 rounded-full bg-brand-red p-1 text-white" />
              </div>
              <div className="text-center">
                <span className="block text-sm font-semibold text-brand-navy">Растягивание</span>
                <span className="text-xs text-brand-navy/60">Нарушение пропорций</span>
              </div>
            </div>

            {/* Rotated */}
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-red/20 bg-card p-6">
              <div className="relative flex h-24 w-full items-center justify-center">
                <div className="rotate-12 opacity-60">
                  <KibitkaMark className="h-16 w-24" />
                </div>
                <X className="absolute -right-1 -top-1 h-6 w-6 rounded-full bg-brand-red p-1 text-white" />
              </div>
              <div className="text-center">
                <span className="block text-sm font-semibold text-brand-navy">Наклон</span>
                <span className="text-xs text-brand-navy/60">Поворот знака</span>
              </div>
            </div>

            {/* Wrong color */}
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-red/20 bg-card p-6">
              <div className="relative flex h-24 w-full items-center justify-center">
                <div className="opacity-70">
                  <KibitkaMark 
                    className="h-16 w-24" 
                    bodyColor="#9b59b6"
                    wheelColor="#8e44ad"
                    bumperColor="#a569bd"
                  />
                </div>
                <X className="absolute -right-1 -top-1 h-6 w-6 rounded-full bg-brand-red p-1 text-white" />
              </div>
              <div className="text-center">
                <span className="block text-sm font-semibold text-brand-navy">Чужие цвета</span>
                <span className="text-xs text-brand-navy/60">Неутверждённая палитра</span>
              </div>
            </div>

            {/* Low contrast */}
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-red/20 bg-brand-orange/20 p-6">
              <div className="relative flex h-24 w-full items-center justify-center">
                <div className="opacity-40">
                  <KibitkaMark className="h-16 w-24" />
                </div>
                <X className="absolute -right-1 -top-1 h-6 w-6 rounded-full bg-brand-red p-1 text-white" />
              </div>
              <div className="text-center">
                <span className="block text-sm font-semibold text-brand-navy">Низкий контраст</span>
                <span className="text-xs text-brand-navy/60">Плохая читаемость</span>
              </div>
            </div>
          </div>

          {/* Minimum size */}
          <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
            Минимальный размер
          </h3>
          <div className="rounded-2xl border border-brand-navy/10 bg-card p-8">
            <div className="flex flex-wrap items-end gap-10">
              <div className="flex flex-col items-center gap-3">
                <KibitkaLogo size="sm" />
                <div className="text-center">
                  <span className="block font-mono text-sm font-semibold text-brand-orange-dark">80px</span>
                  <span className="text-xs text-brand-sand">Минимум для digital</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="scale-[0.6] origin-bottom">
                  <KibitkaLogo size="sm" />
                </div>
                <div className="text-center">
                  <span className="block font-mono text-sm font-semibold text-brand-orange-dark">20mm</span>
                  <span className="text-xs text-brand-sand">Минимум для печати</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 rounded-xl border border-brand-navy/10 bg-brand-cream/50 p-4">
                <KibitkaMark className="h-10 w-16" />
                <div className="text-center">
                  <span className="block font-mono text-sm font-semibold text-brand-orange-dark">40px</span>
                  <span className="text-xs text-brand-sand">Только знак (digital)</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </SlideWrapper>
  )
}
