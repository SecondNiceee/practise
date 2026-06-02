import Image from "next/image"
import { SectionHeading } from "@/components/moodboard/section-heading"
import { Megaphone, Monitor, Lightbulb } from "lucide-react"

const media = [
  {
    src: "/carriers/campaign-billboard.png",
    icon: Megaphone,
    tag: "Наружная реклама",
    title: "Билборд 3×6",
    desc: "Крупноформатный баннер вдоль трассы — максимальный охват и узнаваемость бренда «Кибитка».",
  },
  {
    src: "/carriers/campaign-rollup.png",
    icon: Monitor,
    tag: "Мобильный стенд",
    title: "Ролл-ап 85×200",
    desc: "Вертикальный мобильный баннер для мероприятий, бизнес-центров и точек найма водителей.",
  },
  {
    src: "/carriers/campaign-citylight.png",
    icon: Lightbulb,
    tag: "Сити-формат",
    title: "Сити-лайт на остановке",
    desc: "Подсвеченная панель на остановках общественного транспорта — реклама работает и ночью.",
  },
]

const steps = [
  { num: "01", title: "Цель и аудитория", desc: "Определяем задачу кампании и портрет пассажира." },
  { num: "02", title: "Подбор носителей", desc: "Выбираем форматы под бюджет и охват: наружка, сити-лайт, ролл-ап." },
  { num: "03", title: "Макеты в фирстиле", desc: "Адаптируем логотип, цвета и паттерн под каждый формат." },
  { num: "04", title: "Размещение и аналитика", desc: "Запускаем кампанию и оцениваем эффективность." },
]

export function CampaignSection() {
  return (
    <section id="campaign" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          index="09"
          kicker="Реклама"
          title="Рекламная кампания"
          description="Разработка рекламной кампании бренда «Кибитка» с выбором носителей под цели и бюджет — от наружной рекламы до мобильных стендов."
        />

        {/* Этапы разработки кампании */}
        <div className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.num}
              className="rounded-2xl border border-brand-navy/10 bg-brand-cream p-5"
            >
              <span className="font-display text-2xl font-bold text-brand-orange-dark">{s.num}</span>
              <h3 className="mt-2 font-display font-semibold text-brand-navy">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-brand-navy/60">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Выбор носителей */}
        <h3 className="mb-5 font-display text-lg font-semibold text-brand-navy">Выбор носителей</h3>
        <div className="grid gap-5 md:grid-cols-3">
          {media.map((m) => (
            <article
              key={m.title}
              className="group overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm transition-colors hover:border-brand-orange/30"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={m.src}
                  alt={m.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-brand-navy/90 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  <m.icon className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
                  {m.tag}
                </span>
              </div>
              <div className="flex flex-col gap-1 p-5">
                <h4 className="font-display font-semibold text-brand-navy">{m.title}</h4>
                <p className="text-sm leading-relaxed text-brand-navy/65">{m.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
