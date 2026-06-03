import { SectionHeading } from "@/components/moodboard/section-heading"
import { KibitkaLogo } from "@/components/moodboard/kibitka-logo"
import { Smartphone, Users, BadgePercent, MapPin, Clock } from "lucide-react"
import { SlideWrapper } from "./slide-wrapper"

const steps = [
  { num: "01", title: "Цель и аудитория", desc: "Определяем задачу кампании и портрет пассажира." },
  { num: "02", title: "Подбор носителей", desc: "Выбираем форматы под бюджет и охват." },
  { num: "03", title: "Макеты в фирстиле", desc: "Адаптируем логотип, цвета и паттерн." },
  { num: "04", title: "Аналитика", desc: "Запускаем и оцениваем эффективность." },
]

function PosterLogo({ tone }: { tone: "onDark" | "onOrange" | "onLight" }) {
  if (tone === "onDark") {
    return (
      <KibitkaLogo
        size="sm"
        className="items-start"
        wordmarkClassName="text-white"
        wheelColor="#ecf0f1"
        wheelInner="#2c3e50"
      />
    )
  }
  if (tone === "onOrange") {
    return (
      <KibitkaLogo
        size="sm"
        className="items-start"
        wordmarkClassName="text-brand-navy"
        bodyColor="#2c3e50"
        windowColor="#f5f0e8"
        wheelColor="#2c3e50"
        wheelInner="#f5f0e8"
        bumperColor="#2c3e50"
        lightColor="#f5f0e8"
      />
    )
  }
  return <KibitkaLogo size="sm" className="items-start" wordmarkClassName="text-brand-navy" />
}

// Первый слайд рекламной кампании - обзор
function CampaignOverviewSlide() {
  return (
    <SlideWrapper slideNumber={17} totalSlides={21} variant="light" autoHeight>
      <div id="campaign" className="scroll-mt-20 flex flex-col gap-10">
          <SectionHeading
            index="09"
            kicker="Реклама"
            title="Рекламная кампания"
            description="Серия рекламных макетов бренда «Кибитка» — единый фирстиль на разных носителях. Каждый формат адаптирован под конкретное место размещения и аудиторию."
          />

          {/* Этапы разработки кампании */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.num} className="rounded-2xl border border-brand-navy/10 bg-card p-6">
                <span className="font-display text-3xl font-bold text-brand-orange-dark">{s.num}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-brand-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-navy/60">{s.desc}</p>
              </div>
            ))}
          </div>
      </div>
    </SlideWrapper>
  )
}

// Второй слайд - Билборд и Сити-лайт
function CampaignSlide1() {
  return (
    <SlideWrapper slideNumber={18} totalSlides={21} variant="light" autoHeight>
      <div>
          <div className="grid gap-6 lg:grid-cols-2 auto-rows-max">
            {/* Билборд */}
            <article className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm">
              <div className="relative aspect-[2/1] w-full overflow-hidden bg-brand-navy">
                <div
                  className="absolute -bottom-16 -right-10 h-[70%] w-1/2 rounded-[100%] bg-brand-orange"
                  aria-hidden="true"
                />
                <div className="relative flex h-full flex-col justify-between p-6">
                  <div className="flex items-start justify-between">
                    <PosterLogo tone="onDark" />
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                      городское такси
                    </span>
                  </div>
                  <div className="max-w-[60%]">
                    <p className="font-display text-2xl font-bold leading-[0.95] text-white text-balance md:text-3xl">
                      Домчим
                      <br />
                      <span className="text-brand-orange">с ветерком</span>
                    </p>
                    <p className="mt-2 text-sm text-white/80">Подача за 3 минуты</p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-orange px-4 py-2 font-display text-sm font-semibold text-brand-navy">
                    <Smartphone className="h-4 w-4" aria-hidden="true" />
                    Закажи в приложении
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 p-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange font-mono text-xs font-bold text-white">
                    01
                  </span>
                  <h4 className="font-display font-semibold text-brand-navy">Билборд 3x6</h4>
                </div>
                <p className="text-sm leading-relaxed text-brand-navy/65">
                  Крупноформатный носитель вдоль трассы. Главное сообщение — скорость подачи.
                </p>
              </div>
            </article>

            {/* Сити-лайт */}
            <article className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm w-fit justify-self-start">
              <div className="relative aspect-[9/13] w-64 overflow-hidden bg-brand-orange">
                <div className="relative flex h-full flex-col justify-between p-6">
                  <PosterLogo tone="onOrange" />
                  <div>
                    <p className="font-display text-2xl font-bold leading-[0.95] text-brand-navy text-balance">
                      Запрягать
                      <br />
                      не нужно —
                      <br />
                      просто закажи
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-brand-navy/70">
                      Своя кибитка в кармане.
                    </p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-navy px-4 py-2 font-display text-sm font-semibold text-white">
                    <Smartphone className="h-4 w-4" aria-hidden="true" />
                    Скачать приложение
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 p-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange font-mono text-xs font-bold text-white">
                    02
                  </span>
                  <h4 className="font-display font-semibold text-brand-navy">Сити-лайт</h4>
                </div>
                <p className="text-sm leading-relaxed text-brand-navy/65">
                  Подсвеченная панель в зоне ожидания транспорта.
                </p>
              </div>
            </article>
          </div>
      </div>
    </SlideWrapper>
  )
}

// Третий слайд - Ролл-ап и Digital
function CampaignSlide2() {
  return (
    <SlideWrapper slideNumber={19} totalSlides={21} variant="light" autoHeight>
      <div>
          <div className="grid gap-6 lg:grid-cols-2 auto-rows-max">
            {/* Ролл-ап */}
            <article className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm w-fit justify-self-start">
              <div className="relative aspect-[5/14] w-48 overflow-hidden bg-brand-cream">
                <div
                  className="absolute inset-x-0 top-0 h-1.5 bg-brand-orange"
                  aria-hidden="true"
                />
                <div className="relative flex h-full flex-col justify-between p-6">
                  <PosterLogo tone="onLight" />
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange/15 px-3 py-1 text-xs font-semibold text-brand-orange-dark">
                      <Users className="h-3.5 w-3.5" aria-hidden="true" />
                      набор водителей
                    </span>
                    <p className="mt-3 font-display text-xl font-bold leading-tight text-brand-navy text-balance">
                      Стань водителем «Кибитки»
                    </p>
                    <ul className="mt-4 flex flex-col gap-2 text-sm text-brand-navy/70">
                      <li className="flex items-center gap-2">
                        <Clock className="h-4 w-4 shrink-0 text-brand-orange-dark" aria-hidden="true" />
                        Свободный график
                      </li>
                      <li className="flex items-center gap-2">
                        <BadgePercent className="h-4 w-4 shrink-0 text-brand-orange-dark" aria-hidden="true" />
                        Выгодные условия
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 shrink-0 text-brand-orange-dark" aria-hidden="true" />
                        Заказы по всему городу
                      </li>
                    </ul>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-navy px-4 py-2 font-display text-sm font-semibold text-white">
                    Оставить заявку
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 p-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange font-mono text-xs font-bold text-white">
                    03
                  </span>
                  <h4 className="font-display font-semibold text-brand-navy">Ролл-ап 85x200</h4>
                </div>
                <p className="text-sm leading-relaxed text-brand-navy/65">
                  Мобильный стенд для бизнес-центров и точек найма.
                </p>
              </div>
            </article>

            {/* Digital-баннер */}
            <article className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm lg:col-span-1 lg:row-span-2">
              <div className="relative aspect-square w-72 overflow-hidden bg-brand-navy">
                <div
                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-orange/90"
                  aria-hidden="true"
                />
                <div className="relative flex h-full flex-col justify-between p-6">
                  <PosterLogo tone="onDark" />
                  <div>
                    <p className="font-display text-5xl font-bold leading-none text-brand-orange">-25%</p>
                    <p className="mt-2 font-display text-xl font-semibold text-white">на первую поездку</p>
                    <p className="mt-2 text-sm text-white/70">
                      Промокод{" "}
                      <span className="rounded-md bg-white/10 px-2 py-0.5 font-display font-semibold text-white">
                        ПЕРВАЯ
                      </span>
                    </p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-orange px-4 py-2 font-display text-sm font-semibold text-brand-navy">
                    Активировать в приложении
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 p-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange font-mono text-xs font-bold text-white">
                    04
                  </span>
                  <h4 className="font-display font-semibold text-brand-navy">Digital-баннер</h4>
                </div>
                <p className="text-sm leading-relaxed text-brand-navy/65">
                  Квадратный макет для таргетированной рекламы и сторис.
                </p>
              </div>
            </article>
          </div>
      </div>
    </SlideWrapper>
  )
}

// Четвёртый слайд - Транспорт
function CampaignSlide3() {
  return (
    <SlideWrapper slideNumber={20} totalSlides={21} variant="light" autoHeight>
      <div>
          <div className="grid gap-6 lg:grid-cols-2 auto-rows-max">
            {/* Брендирование борта */}
            <article className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm lg:col-span-2">
              <div className="relative aspect-[2/1] overflow-hidden bg-brand-cream">
                <div
                  className="absolute inset-y-0 right-0 w-3/5 bg-brand-navy"
                  style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)" }}
                  aria-hidden="true"
                />
                <div className="relative flex h-full items-center justify-between gap-4 p-6 md:p-8">
                  <div className="max-w-[48%]">
                    <PosterLogo tone="onLight" />
                    <p className="mt-3 font-display text-2xl font-bold leading-tight text-brand-navy text-balance md:text-4xl">
                      Такси, которое
                      <br />
                      <span className="text-brand-orange-dark">как дома</span>
                    </p>
                    <p className="mt-2 text-sm text-brand-navy/65 md:text-base">Уютно, безопасно, по-честному</p>
                  </div>
                  <div className="flex flex-col items-end gap-3 text-right">
                    <span className="font-display text-xl font-bold text-white md:text-3xl">8 800 555-03-55</span>
                    <span className="rounded-full bg-brand-orange px-4 py-2 font-display text-sm font-semibold text-brand-navy">
                      Вызов 24/7
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 p-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange font-mono text-xs font-bold text-white">
                    05
                  </span>
                  <h4 className="font-display font-semibold text-brand-navy">Брендирование борта</h4>
                </div>
                <p className="text-sm leading-relaxed text-brand-navy/65">
                  Макет для оклейки автомобилей автопарка. Эмоциональный слоган и крупный номер — реклама едет по городу.
                </p>
              </div>
            </article>
          </div>
      </div>
    </SlideWrapper>
  )
}

export function CampaignSection() {
  return (
    <>
      <CampaignOverviewSlide />
      <CampaignSlide1 />
      <CampaignSlide2 />
      <CampaignSlide3 />
    </>
  )
}
