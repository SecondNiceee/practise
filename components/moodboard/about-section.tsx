import { SectionHeading } from "./section-heading"
import { Briefcase, Users, Quote, Target } from "lucide-react"

const facts = [
  { icon: Briefcase, label: "Сфера", value: "Такси и пассажирские перевозки" },
  { icon: Target, label: "Тип бизнеса", value: "B2C — бизнес для потребителя" },
  { icon: Quote, label: "Слоган", value: "«Довезём в целости и сохранности»" },
  { icon: Users, label: "Охват", value: "Городские и пригородные поездки" },
]

const audience = [
  {
    title: "Студенты",
    age: "18–25",
    need: "Низкая цена, скорость подачи, безопасность ночью",
    tone: "Дружелюбный, неформальный",
  },
  {
    title: "Деловые люди",
    age: "28–50",
    need: "Пунктуальность, чистый салон, комфорт-класс",
    tone: "Уверенный, профессиональный",
  },
  {
    title: "Семьи с детьми",
    age: "25–45",
    need: "Детские кресла, аккуратное вождение, вместительность",
    tone: "Заботливый, тёплый",
  },
  {
    title: "Туристы",
    age: "20–60",
    need: "Знание города, честная цена, помощь с багажом",
    tone: "Гостеприимный, информативный",
  },
]

export function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <SectionHeading
        index="1"
        kicker="О бренде"
        title="О компании и аудитории"
        description="Кибитка — городской такси-сервис, который делает ставку на безопасность, заботу и предсказуемость поездки для каждого пассажира."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex flex-col gap-3 rounded-2xl border border-brand-navy/10 bg-card p-6 shadow-sm transition-transform hover:-translate-y-1"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange/12 text-brand-orange">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand-sand">
              {label}
            </span>
            <p className="text-pretty font-medium leading-snug text-brand-navy">
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Mission */}
      <div className="mt-6 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col justify-center gap-4 rounded-2xl bg-brand-navy p-8 text-white md:p-10">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Миссия бренда
          </span>
          <p className="text-balance font-display text-xl font-semibold leading-snug md:text-2xl">
            Обеспечивать быстрые, безопасные и комфортные поездки по городу с
            вниманием к каждому пассажиру.
          </p>
          <p className="text-pretty leading-relaxed text-white/65">
            УТП: чистый салон, вежливый водитель и прибытие точно в срок — такси
            «Кибитка» это забота о вас в пути, а не просто поездка.
          </p>
        </div>
        <div className="flex flex-col gap-3 rounded-2xl border border-brand-navy/10 bg-card p-8">
          <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand-sand">
            Ключевые ценности
          </span>
          <div className="flex flex-wrap gap-2">
            {["Надёжность", "Безопасность", "Скорость", "Дружелюбие", "Чистота", "Предсказуемость"].map(
              (v) => (
                <span
                  key={v}
                  className="rounded-full bg-brand-orange/12 px-4 py-2 text-sm font-medium text-brand-orange-dark"
                >
                  {v}
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Audience */}
      <h3 className="mt-12 mb-5 font-display text-lg font-semibold text-brand-navy">
        Целевая аудитория
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {audience.map((a) => (
          <div
            key={a.title}
            className="flex flex-col gap-3 rounded-2xl border border-brand-navy/10 bg-card p-6"
          >
            <div className="flex items-baseline justify-between">
              <h4 className="font-display font-bold text-brand-navy">{a.title}</h4>
              <span className="rounded-full bg-brand-navy/5 px-2.5 py-0.5 text-xs font-semibold text-brand-sand">
                {a.age}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-brand-navy/70">{a.need}</p>
            <p className="mt-auto border-t border-brand-navy/10 pt-3 text-xs font-medium text-brand-orange-dark">
              {a.tone}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
