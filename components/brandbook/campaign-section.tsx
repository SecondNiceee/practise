import { SectionHeading } from "@/components/moodboard/section-heading"
import { Car, Smartphone, Users, BadgePercent, MapPin, Clock } from "lucide-react"

const steps = [
  { num: "01", title: "Цель и аудитория", desc: "Определяем задачу кампании и портрет пассажира." },
  { num: "02", title: "Подбор носителей", desc: "Выбираем форматы под бюджет и охват: наружка, сити-лайт, ролл-ап." },
  { num: "03", title: "Макеты в фирстиле", desc: "Адаптируем логотип, цвета и паттерн под каждый формат." },
  { num: "04", title: "Размещение и аналитика", desc: "Запускаем кампанию и оцениваем эффективность." },
]

/* Маленький вордмарк бренда для использования внутри макетов */
function Wordmark({ className = "", tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-display font-bold tracking-tight ${
        tone === "light" ? "text-white" : "text-brand-navy"
      } ${className}`}
    >
      <span className="flex h-[1.4em] w-[1.4em] items-center justify-center rounded-full bg-brand-orange text-brand-navy">
        <Car className="h-[0.85em] w-[0.85em]" aria-hidden="true" />
      </span>
      КИБИТКА
    </span>
  )
}

/* ===== Креативы (чистые макеты, без обёрток) ===== */

function BillboardCreative() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-brand-navy">
      {/* оранжевый swoosh */}
      <div className="absolute -bottom-16 -right-10 h-[70%] w-1/2 rounded-[100%] bg-brand-orange" aria-hidden="true" />
      <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
        <div className="flex items-center justify-between">
          <Wordmark className="text-xl md:text-2xl" />
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
  )
}

function CityLightCreative() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-brand-orange">
      <div className="relative flex h-full flex-col justify-between p-4">
        <Wordmark className="text-sm" tone="dark" />
        <div>
          <p className="font-display text-xl font-bold leading-[0.95] text-brand-navy text-balance">
            Запрягать
            <br />
            не нужно —
            <br />
            просто закажи
          </p>
          <p className="mt-2 text-xs leading-snug text-brand-navy/70">Своя кибитка в кармане у каждого.</p>
        </div>
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-navy px-3 py-1.5 font-display text-xs font-semibold text-white">
          <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
          Скачать
        </span>
      </div>
    </div>
  )
}

function RollUpCreative() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-brand-cream">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-brand-orange" aria-hidden="true" />
      <div className="relative flex h-full flex-col justify-between p-4">
        <Wordmark className="text-sm" tone="dark" />
        <div>
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-orange/15 px-2.5 py-0.5 text-[10px] font-semibold text-brand-orange-dark">
            <Users className="h-3 w-3" aria-hidden="true" />
            набор водителей
          </span>
          <p className="mt-2 font-display text-lg font-bold leading-tight text-brand-navy text-balance">
            Стань водителем «Кибитки»
          </p>
          <ul className="mt-3 flex flex-col gap-1.5 text-xs text-brand-navy/70">
            <li className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 shrink-0 text-brand-orange-dark" aria-hidden="true" />
              Свободный график
            </li>
            <li className="flex items-center gap-1.5">
              <BadgePercent className="h-3.5 w-3.5 shrink-0 text-brand-orange-dark" aria-hidden="true" />
              Выгодные условия
            </li>
            <li className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-orange-dark" aria-hidden="true" />
              Заказы по городу
            </li>
          </ul>
        </div>
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-navy px-3 py-1.5 font-display text-xs font-semibold text-white">
          Оставить заявку
        </span>
      </div>
    </div>
  )
}

function TransportCreative() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-brand-cream">
      <div
        className="absolute inset-y-0 right-0 w-3/5 bg-brand-navy"
        style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)" }}
        aria-hidden="true"
      />
      <div className="relative flex h-full items-center justify-between gap-4 p-6 md:p-8">
        <div className="max-w-[48%]">
          <Wordmark className="text-lg" tone="dark" />
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
  )
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

        {/* ===== Наружная реклама — макеты на носителях ===== */}
        <h3 className="mb-1 font-display text-lg font-semibold text-brand-navy">Наружная реклама на носителях</h3>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-brand-navy/60">
          Креативы показаны в реальном окружении — на рекламных конструкциях. Так видно, как фирстиль «Кибитки» живёт на
          билборде, сити-лайте, ролл-апе и на борту автомобиля.
        </p>

        <div className="grid gap-5 lg:grid-cols-3">
          {/* ========== БИЛБОРД на конструкции (2 колонки) ========== */}
          <article className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm lg:col-span-2">
            <div className="bg-gradient-to-b from-brand-navy/5 to-brand-navy/15 p-6 md:p-10">
              <div className="mx-auto max-w-[92%]">
                {/* щит */}
                <div className="overflow-hidden rounded-md border-[6px] border-brand-navy/80 shadow-xl ring-1 ring-black/5">
                  <div className="aspect-[2/1]">
                    <BillboardCreative />
                  </div>
                </div>
                {/* опоры */}
                <div className="mx-auto flex w-1/3 justify-between">
                  <span className="h-14 w-2.5 bg-brand-navy/35" aria-hidden="true" />
                  <span className="h-14 w-2.5 bg-brand-navy/35" aria-hidden="true" />
                </div>
                <div className="mx-auto h-1.5 w-2/5 rounded-full bg-brand-navy/20" aria-hidden="true" />
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

          {/* ========== СИТИ-ЛАЙТ в лайтбоксе ========== */}
          <article className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm">
            <div className="flex justify-center bg-gradient-to-b from-brand-navy/5 to-brand-navy/15 p-6">
              <div className="flex flex-col items-center">
                {/* корпус лайтбокса */}
                <div className="rounded-xl border-4 border-brand-navy/15 bg-white p-1.5 shadow-xl ring-1 ring-black/5">
                  <div className="aspect-[3/4] w-44 overflow-hidden rounded-lg sm:w-48">
                    <CityLightCreative />
                  </div>
                </div>
                {/* ножка */}
                <span className="h-8 w-3 bg-brand-navy/25" aria-hidden="true" />
                <span className="h-1.5 w-20 rounded-full bg-brand-navy/20" aria-hidden="true" />
              </div>
            </div>
            <div className="flex flex-col gap-1 p-5">
              <h4 className="font-display font-semibold text-brand-navy">Сити-лайт на остановке</h4>
              <p className="text-sm leading-relaxed text-brand-navy/65">
                Подсвеченная панель в зоне ожидания транспорта. Игра со значением слова «кибитка» цепляет внимание.
              </p>
            </div>
          </article>

          {/* ========== РОЛЛ-АП на стойке ========== */}
          <article className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm">
            <div className="flex justify-center bg-gradient-to-b from-brand-navy/5 to-brand-navy/15 p-6">
              <div className="flex flex-col items-center">
                {/* полотно */}
                <div className="aspect-[3/4] w-44 overflow-hidden rounded-t-md shadow-xl ring-1 ring-black/5 sm:w-48">
                  <RollUpCreative />
                </div>
                {/* кассета */}
                <div className="h-3 w-[112%] rounded-full bg-brand-navy/70" aria-hidden="true" />
                {/* опора */}
                <span className="h-6 w-1.5 bg-brand-navy/30" aria-hidden="true" />
                <span className="h-1.5 w-24 rounded-full bg-brand-navy/25" aria-hidden="true" />
              </div>
            </div>
            <div className="flex flex-col gap-1 p-5">
              <h4 className="font-display font-semibold text-brand-navy">Ролл-ап 85×200 · найм</h4>
              <p className="text-sm leading-relaxed text-brand-navy/65">
                Мобильный стенд для бизнес-центров и точек найма. Фокус на привлечении новых водителей в автопарк.
              </p>
            </div>
          </article>

          {/* ========== ТРАНСПОРТ / БОРТ (2 колонки) ========== */}
          <article className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm lg:col-span-2">
            <div className="bg-gradient-to-b from-brand-navy/5 to-brand-navy/15 p-6 md:p-10">
              <div className="relative mx-auto max-w-[92%]">
                {/* борт автомобиля */}
                <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
                  {/* стеклянная полоса сверху */}
                  <div className="flex h-7 items-center gap-2 bg-brand-navy/80 px-4 md:h-9">
                    <span className="h-3 w-10 rounded-sm bg-white/20" aria-hidden="true" />
                    <span className="h-3 w-10 rounded-sm bg-white/20" aria-hidden="true" />
                    <span className="h-3 w-10 rounded-sm bg-white/20" aria-hidden="true" />
                  </div>
                  <div className="aspect-[5/2]">
                    <TransportCreative />
                  </div>
                </div>
                {/* колёса */}
                <div className="mx-auto flex w-3/4 justify-between">
                  <span className="-mt-5 h-10 w-10 rounded-full border-4 border-brand-navy/70 bg-brand-navy/30 md:h-12 md:w-12" aria-hidden="true" />
                  <span className="-mt-5 h-10 w-10 rounded-full border-4 border-brand-navy/70 bg-brand-navy/30 md:h-12 md:w-12" aria-hidden="true" />
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

        {/* ===== Digital — макет без обёртки ===== */}
        <h3 className="mb-1 mt-12 font-display text-lg font-semibold text-brand-navy">Digital · соцсети</h3>
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-brand-navy/60">
          Макет для сети показан как есть — чистый креатив без рамок и носителей, готовый к публикации в ленте и сторис.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* ========== DIGITAL / СОЦСЕТИ (квадрат, акция) — без обёртки ========== */}
          <article className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm">
            <div className="aspect-square overflow-hidden bg-brand-navy">
              <div className="relative h-full w-full">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-orange/90" aria-hidden="true" />
                <div className="relative flex h-full flex-col justify-between p-6">
                  <Wordmark className="text-lg" />
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
            </div>
            <div className="flex flex-col gap-1 p-5">
              <h4 className="font-display font-semibold text-brand-navy">Digital-баннер · соцсети</h4>
              <p className="text-sm leading-relaxed text-brand-navy/65">
                Квадратный макет для таргетированной рекламы и сторис. Промо-механика мотивирует на первый заказ.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
