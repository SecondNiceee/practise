import { SectionHeading } from "@/components/moodboard/section-heading"
import { KibitkaLogo } from "@/components/moodboard/kibitka-logo"
import { Smartphone, Users, BadgePercent, MapPin, Clock } from "lucide-react"
import { PageNumber } from "./page-number"

const steps = [
  { num: "01", title: "Цель и аудитория", desc: "Определяем задачу кампании и портрет пассажира." },
  { num: "02", title: "Подбор носителей", desc: "Выбираем форматы под бюджет и охват: наружка, сити-лайт, ролл-ап." },
  { num: "03", title: "Макеты в фирстиле", desc: "Адаптируем логотип, цвета и паттерн под каждый формат." },
  { num: "04", title: "Размещение и аналитика", desc: "Запускаем кампанию и оцениваем эффективность." },
]

/* Фирменный логотип «Кибитка» внутри макетов — тот же знак, что и в остальных
   блоках брендбука. Цвета знака подстраиваются под фон носителя. */
function PosterLogo({ tone }: { tone: "onDark" | "onOrange" | "onLight" }) {
  if (tone === "onDark") {
    // на тёмно-синем фоне: оранжевый кузов, светлые колёса
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
    // на оранжевом фоне: тёмно-синий кузов, чтобы знак не сливался
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
  // на светлом (cream) фоне: фирменные цвета по умолчанию
  return <KibitkaLogo size="sm" className="items-start" wordmarkClassName="text-brand-navy" />
}

export function CampaignSection() {
  return (
    <section id="campaign" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          index="09"
          kicker="Реклама"
          title="Рекламная кампания"
          description="Серия рекламных макетов бренда «Кибитка» — единый фирстиль на разных носителях: от наружной рекламы до digital. Каждый макет несёт собственное сообщение под конкретную задачу."
        />

        {/* Этапы разработки кампании */}
        <div className="mb-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.num} className="rounded-2xl border border-brand-navy/10 bg-brand-cream p-5">
              <span className="font-display text-2xl font-bold text-brand-orange-dark">{s.num}</span>
              <h3 className="mt-2 font-display font-semibold text-brand-navy">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-brand-navy/60">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Рекламные макеты */}
        <h3 className="mb-1 font-display text-lg font-semibold text-brand-navy">Рекламные макеты</h3>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-brand-navy/60">
          Готовые креативы под ключевые форматы размещения. Слоганы, акценты и призывы к действию собраны в фирменной
          палитре и типографике «Кибитки».
        </p>

        <div className="grid gap-5 lg:grid-cols-3">
          {/* ========== БИЛБОРД 3×6 (широкий, на 2 колонки) ========== */}
          <article className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm lg:col-span-2">
            <div className="relative aspect-[2/1] overflow-hidden bg-brand-navy">
              {/* оранжевый swoosh */}
              <div
                className="absolute -bottom-16 -right-10 h-[70%] w-1/2 rounded-[100%] bg-brand-orange"
                aria-hidden="true"
              />
              {/* контент */}
              <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
                <div className="flex items-start justify-between">
                  <PosterLogo tone="onDark" />
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                    городское такси
                  </span>
                </div>

                <div className="max-w-[60%]">
                  <p className="font-display text-3xl font-bold leading-[0.95] text-white text-balance md:text-5xl">
                    Домчим
                    <br />
                    <span className="text-brand-orange">с ветерком</span>
                  </p>
                  <p className="mt-3 text-sm text-white/80 md:text-base">Подача за 3 минуты в любую точку города</p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-4 py-2 font-display text-sm font-semibold text-brand-navy">
                    <Smartphone className="h-4 w-4" aria-hidden="true" />
                    Закажи в приложении
                  </span>
                  <span className="font-display text-sm font-semibold text-white/90">kibitka.app</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 p-5">
              <h4 className="font-display font-semibold text-brand-navy">Билборд 3×6 · наружная реклама</h4>
              <p className="text-sm leading-relaxed text-brand-navy/65">
                Крупноформатный носитель вдоль трассы. Главное сообщение — скорость подачи. Лаконичный слоган читается за
                секунды на скорости.
              </p>
            </div>
          </article>

          {/* ========== СИТИ-ЛАЙТ (вертикальный, оранжевый) ========== */}
          <article className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm">
            <div className="relative aspect-[3/4] overflow-hidden bg-brand-orange">
              <div className="relative flex h-full flex-col justify-between p-6">
                <PosterLogo tone="onOrange" />

                <div>
                  <p className="font-display text-3xl font-bold leading-[0.95] text-brand-navy text-balance">
                    Запрягать
                    <br />
                    не нужно —
                    <br />
                    просто закажи
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-brand-navy/70">
                    Своя кибитка в кармане у каждого пассажира.
                  </p>
                </div>

                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-navy px-4 py-2 font-display text-sm font-semibold text-white">
                  <Smartphone className="h-4 w-4" aria-hidden="true" />
                  Скачать приложение
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1 p-5">
              <h4 className="font-display font-semibold text-brand-navy">Сити-лайт на остановке</h4>
              <p className="text-sm leading-relaxed text-brand-navy/65">
                Подсвеченная панель в зоне ожидания транспорта. Игра со значением слова «кибитка» цепляет внимание.
              </p>
            </div>
          </article>

          {/* ========== РОЛЛ-АП (узкий, найм водителей) ========== */}
          <article className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm">
            <div className="relative aspect-[3/4] overflow-hidden bg-brand-cream">
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
                  <p className="mt-3 font-display text-2xl font-bold leading-tight text-brand-navy text-balance">
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
              <h4 className="font-display font-semibold text-brand-navy">Ролл-ап 85×200 · найм</h4>
              <p className="text-sm leading-relaxed text-brand-navy/65">
                Мобильный стенд для бизнес-центров и точек найма. Фокус на привлечении новых водителей в автопарк.
              </p>
            </div>
          </article>

          {/* ========== DIGITAL / СОЦСЕТИ (квадрат, акция) ========== */}
          <article className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm">
            <div className="relative aspect-square overflow-hidden bg-brand-navy">
              <div
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-orange/90"
                aria-hidden="true"
              />
              <div className="relative flex h-full flex-col justify-between p-6">
                <PosterLogo tone="onDark" />

                <div>
                  <p className="font-display text-5xl font-bold leading-none text-brand-orange">−25%</p>
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
              <h4 className="font-display font-semibold text-brand-navy">Digital-баннер · соцсети</h4>
              <p className="text-sm leading-relaxed text-brand-navy/65">
                Квадратный макет для таргетированной рекламы и сторис. Промо-механика мотивирует на первый заказ.
              </p>
            </div>
          </article>

          {/* ========== ТРАНСПОРТ / БОРТ (широкий, на 2 колонки) ========== */}
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
              <h4 className="font-display font-semibold text-brand-navy">Брендирование борта · транспорт</h4>
              <p className="text-sm leading-relaxed text-brand-navy/65">
                Макет для оклейки автомобилей автопарка. Эмоциональный слоган и крупный номер — реклама едет по городу
                каждый день.
              </p>
            </div>
          </article>
        </div>
      </div>
      <PageNumber number={13} total={13} />
    </section>
  )
}
