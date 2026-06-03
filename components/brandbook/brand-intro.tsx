import { SectionHeading } from "@/components/moodboard/section-heading"
import { Target, Heart, Sparkles, Users } from "lucide-react"
import { SlideWrapper } from "./slide-wrapper"

const values = [
  "Надёжность",
  "Безопасность",
  "Скорость",
  "Дружелюбие",
  "Чистота",
  "Предсказуемость",
]

const audience = [
  { title: "Студенты", desc: "Низкая цена, скорость подачи, безопасность ночью" },
  { title: "Деловые люди", desc: "Пунктуальность, чистый салон, комфорт-класс" },
  { title: "Семьи с детьми", desc: "Детские кресла, аккуратное вождение" },
  { title: "Туристы", desc: "Знание города, честная цена, помощь с багажом" },
]

export function BrandIntro() {
  return (
    <SlideWrapper slideNumber={3} totalSlides={21} variant="light">
      <div id="about" className="scroll-mt-20">
          <SectionHeading
            index="01"
            kicker="О компании"
            title="О бренде «Кибитка»"
            description="Городское такси с акцентом на безопасность, заботу и предсказуемость. Бренд работает в сегменте B2C и обращается к пассажиру тепло и по-человечески."
          />

          {/* Mission + USP */}
          <div className="grid gap-4 lg:grid-cols-2">
            <article className="flex flex-col gap-3 rounded-2xl border border-brand-navy/10 bg-card p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange/12 text-brand-orange-dark">
                <Target className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-lg font-semibold text-brand-navy">Миссия</h3>
              <p className="text-pretty leading-relaxed text-brand-navy/70">
                Обеспечивать быстрые, безопасные и комфортные поездки по городу с
                вниманием к каждому пассажиру.
              </p>
            </article>

            <article className="flex flex-col gap-3 rounded-2xl border border-brand-navy/10 bg-card p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red/12 text-brand-red">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-display text-lg font-semibold text-brand-navy">
                Уникальное торговое предложение
              </h3>
              <p className="text-pretty leading-relaxed text-brand-navy/70">
                «Кибитка» — это не просто поездка, а забота о вас в пути. Чистый
                салон, вежливый водитель и прибытие точно в срок.
              </p>
            </article>
          </div>

          {/* Values */}
          <div className="mt-4 rounded-2xl border border-brand-navy/10 bg-card p-8">
            <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-brand-navy">
              <Heart className="h-5 w-5 text-brand-red" aria-hidden="true" />
              Ключевые ценности
            </h3>
            <div className="flex flex-wrap gap-3">
              {values.map((v) => (
                <span
                  key={v}
                  className="rounded-full bg-brand-orange/12 px-4 py-2 text-sm font-semibold text-brand-orange-dark"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Audience */}
          <div className="mt-4 rounded-2xl border border-brand-navy/10 bg-card p-8">
            <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-brand-navy">
              <Users className="h-5 w-5 text-brand-orange" aria-hidden="true" />
              Целевая аудитория
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {audience.map((a) => (
                <div
                  key={a.title}
                  className="flex flex-col gap-2 rounded-xl border-l-4 border-brand-orange bg-brand-cream/60 p-5"
                >
                  <span className="font-display font-semibold text-brand-navy">{a.title}</span>
                  <span className="text-sm leading-relaxed text-brand-navy/65">{a.desc}</span>
                </div>
              ))}
            </div>
          </div>
      </div>
    </SlideWrapper>
  )
}
