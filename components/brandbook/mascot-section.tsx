import { SectionHeading } from "@/components/moodboard/section-heading"
import { MascotEmotions } from "@/components/moodboard/mascot-emotions"

const uses = [
  { title: "Приложение", desc: "Онбординг, пустые состояния, статусы заказа" },
  { title: "Соцсети", desc: "Стикеры, сторис и анонсы акций" },
  { title: "Реклама", desc: "Наружные носители и промо-материалы" },
]

export function MascotSection() {
  return (
    <section id="mascot" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          index="7"
          kicker="Практическая работа №5 · Маскот"
          title="Маскот бренда"
          description="Сама машинка «Кибитка» становится маскотом: набор эмоций позволяет ей живо общаться с аудиторией. Один и тот же узнаваемый силуэт меняет лишь выражение лица."
        />

        <MascotEmotions />

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {uses.map((u) => (
            <div
              key={u.title}
              className="flex flex-col gap-2 rounded-2xl border border-brand-navy/10 bg-card p-6 text-center"
            >
              <span className="font-display font-semibold text-brand-navy">{u.title}</span>
              <span className="text-sm leading-relaxed text-brand-navy/65">{u.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
