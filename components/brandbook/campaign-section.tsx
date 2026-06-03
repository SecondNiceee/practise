import { SectionHeading } from "@/components/moodboard/section-heading"
import { KibitkaMark } from "@/components/moodboard/kibitka-mark"
import { cn } from "@/lib/utils"
import { Smartphone, Phone, Clock, BadgePercent, MapPin } from "lucide-react"
import { SlideWrapper } from "./slide-wrapper"

/* ------------------------------------------------------------------ *
 * Логотип «Кибитка» в компактном горизонтальном виде.
 * Собран вручную из векторного знака + надписи, чтобы аккуратно
 * вписываться в тесные рекламные макеты.
 * ------------------------------------------------------------------ */
type Tone = "onDark" | "onOrange" | "onLight"

const markTone: Record<Tone, Parameters<typeof KibitkaMark>[0]> = {
  onDark: {},
  onOrange: {
    bodyColor: "#2c3e50",
    windowColor: "#f5f0e8",
    wheelColor: "#2c3e50",
    wheelInner: "#f5f0e8",
    bumperColor: "#2c3e50",
    lightColor: "#f5f0e8",
  },
  onLight: {},
}

function CompactLogo({
  tone,
  className,
  markClassName = "h-5 w-8",
  wordClassName = "text-xs",
}: {
  tone: Tone
  className?: string
  markClassName?: string
  wordClassName?: string
}) {
  const word = tone === "onDark" ? "text-white" : "text-brand-navy"
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <KibitkaMark className={markClassName} {...markTone[tone]} />
      <span className={cn("font-display font-bold tracking-[0.2em]", word, wordClassName)}>
        КИБИТКА
      </span>
    </div>
  )
}

/* ------------------------------------------------------------------ *
 * Подпись под макетом — короткий номер + название формата.
 * ------------------------------------------------------------------ */
function MockupCaption({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-4">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-orange font-mono text-[11px] font-bold text-white">
        {num}
      </span>
      <h4 className="font-display text-sm font-semibold text-brand-navy">{label}</h4>
    </div>
  )
}

/* ------------------------------------------------------------------ *
 * РЕКЛАМНЫЕ КРЕАТИВЫ (свёрстаны вручную, без фотографий)
 * ------------------------------------------------------------------ */

/** Главное сообщение кампании — для билборда и широких форматов */
function CreativeSpeed({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-brand-navy p-4 md:p-5">
      <div
        className="pointer-events-none absolute -bottom-12 -right-8 h-[150%] w-1/3 rounded-full bg-brand-orange"
        aria-hidden="true"
      />
      <div className="relative flex items-start justify-between gap-3">
        <CompactLogo tone="onDark" />
        <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-medium text-white/80">
          городское такси
        </span>
      </div>
      <div className="relative flex items-end justify-between gap-3">
        <div>
          <p
            className={cn(
              "font-display font-bold leading-[0.95] text-white",
              compact ? "text-lg" : "text-xl md:text-3xl",
            )}
          >
            Домчим
            <br />
            <span className="text-brand-orange">с ветерком</span>
          </p>
          <p className="mt-1.5 text-xs text-white/80 md:text-sm">Подача за 3 минуты</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-orange px-3 py-1.5 font-display text-xs font-semibold text-brand-navy">
          <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
          В приложении
        </span>
      </div>
    </div>
  )
}

/** Промо первой поездки — скидка и промокод */
function CreativePromo() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-brand-navy p-5">
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-orange/90"
        aria-hidden="true"
      />
      <CompactLogo tone="onDark" />
      <div className="relative">
        <p className="font-display text-5xl font-black leading-none text-brand-orange">−25%</p>
        <p className="mt-2 font-display text-lg font-semibold text-white">на первую поездку</p>
        <p className="mt-2 text-xs text-white/70">
          Промокод{" "}
          <span className="rounded bg-white/10 px-1.5 py-0.5 font-display font-semibold text-white">
            ПЕРВАЯ
          </span>
        </p>
      </div>
      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-orange px-3.5 py-1.5 font-display text-xs font-semibold text-brand-navy">
        Активировать
      </span>
    </div>
  )
}

/** Имиджевый креатив — «своя кибитка в кармане» */
function CreativePocket() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-brand-orange p-5">
      <CompactLogo tone="onOrange" />
      <div>
        <p className="font-display text-2xl font-bold leading-[0.95] text-brand-navy text-balance">
          Своя кибитка
          <br />в кармане
        </p>
        <p className="mt-2 text-sm leading-snug text-brand-navy/75">
          Запрягать не нужно — просто закажи.
        </p>
      </div>
      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-navy px-3.5 py-1.5 font-display text-xs font-semibold text-white">
        <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
        Скачать приложение
      </span>
    </div>
  )
}

/** Набор водителей — вертикальный креатив */
function CreativeDrivers() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-brand-cream p-5">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-brand-orange" aria-hidden="true" />
      <CompactLogo tone="onLight" />
      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange/15 px-2.5 py-1 text-[11px] font-semibold text-brand-orange-dark">
          набор водителей
        </span>
        <p className="mt-3 font-display text-xl font-bold leading-tight text-brand-navy text-balance">
          Стань водителем «Кибитки»
        </p>
        <ul className="mt-4 flex flex-col gap-2 text-xs text-brand-navy/70">
          <li className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 shrink-0 text-brand-orange-dark" aria-hidden="true" />
            Свободный график
          </li>
          <li className="flex items-center gap-2">
            <BadgePercent className="h-3.5 w-3.5 shrink-0 text-brand-orange-dark" aria-hidden="true" />
            Выгодные условия
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-orange-dark" aria-hidden="true" />
            Заказы по всему городу
          </li>
        </ul>
      </div>
      <span className="inline-flex w-fit items-center rounded-full bg-brand-navy px-3.5 py-1.5 font-display text-xs font-semibold text-white">
        Оставить заявку
      </span>
    </div>
  )
}

/** Широкий «лидерборд» — горизонтальный digital-баннер */
function CreativeLeaderboard() {
  return (
    <div className="relative flex h-full w-full items-center justify-between gap-4 overflow-hidden bg-brand-navy px-5">
      <div
        className="pointer-events-none absolute -right-6 top-1/2 h-[180%] w-24 -translate-y-1/2 rounded-full bg-brand-orange/90"
        aria-hidden="true"
      />
      <CompactLogo tone="onDark" markClassName="h-6 w-9" wordClassName="text-sm" />
      <p className="relative hidden font-display text-lg font-bold text-white sm:block">
        Домчим <span className="text-brand-orange">с ветерком</span>
      </p>
      <span className="relative inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-orange px-4 py-1.5 font-display text-xs font-semibold text-brand-navy">
        <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
        Заказать
      </span>
    </div>
  )
}

/** Креатив для борта транспорта */
function CreativeTransit() {
  return (
    <div className="relative flex h-full w-full items-center justify-between gap-4 overflow-hidden bg-brand-cream p-4 md:p-6">
      <div
        className="absolute inset-y-0 right-0 w-1/2 bg-brand-navy"
        style={{ clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%)" }}
        aria-hidden="true"
      />
      <div className="relative max-w-[52%]">
        <CompactLogo tone="onLight" />
        <p className="mt-2 font-display text-lg font-bold leading-tight text-brand-navy text-balance md:text-2xl">
          Такси, которое <span className="text-brand-orange-dark">как дома</span>
        </p>
      </div>
      <div className="relative flex flex-col items-end gap-1.5 text-right">
        <span className="flex items-center gap-1.5 font-display text-base font-bold text-white md:text-2xl">
          <Phone className="h-4 w-4 text-brand-orange" aria-hidden="true" />
          8 800 555-03-55
        </span>
        <span className="rounded-full bg-brand-orange px-3 py-1 font-display text-xs font-semibold text-brand-navy">
          Вызов 24/7
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ *
 * МАКАПЫ (рамки носителей, собранные на CSS)
 * ------------------------------------------------------------------ */

/** Билборд на опорах вдоль дороги */
function BillboardMockup({
  num,
  label,
  children,
}: {
  num: string
  label: string
  children: React.ReactNode
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm">
      <div className="bg-brand-navy/[0.05] px-6 pt-7">
        <div className="mx-auto w-full max-w-xl">
          {/* Рекламный щит */}
          <div className="relative aspect-[3/1] w-full overflow-hidden rounded-md border-[5px] border-brand-navy shadow-lg">
            {children}
          </div>
          {/* Опоры */}
          <div className="mx-auto flex h-14 w-3/5 items-start justify-between">
            <span className="ml-[20%] block h-14 w-2.5 rounded-b bg-brand-navy/75" aria-hidden="true" />
            <span className="mr-[20%] block h-14 w-2.5 rounded-b bg-brand-navy/75" aria-hidden="true" />
          </div>
        </div>
        {/* Земля */}
        <div className="-mx-6 h-2.5 bg-brand-navy/10" aria-hidden="true" />
      </div>
      <MockupCaption num={num} label={label} />
    </article>
  )
}

/** Сити-лайт — отдельно стоящий световой короб */
function CityLightMockup({
  num,
  label,
  children,
}: {
  num: string
  label: string
  children: React.ReactNode
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm">
      <div className="flex flex-1 flex-col items-center bg-brand-navy/[0.05] px-6 pt-8">
        {/* Световой короб */}
        <div className="relative aspect-[9/16] w-52 overflow-hidden rounded-lg border-[6px] border-brand-navy shadow-lg">
          {children}
        </div>
        {/* Стойка и основание */}
        <span className="h-7 w-3 bg-brand-navy/75" aria-hidden="true" />
        <span className="h-2.5 w-28 rounded-full bg-brand-navy/20" aria-hidden="true" />
      </div>
      <MockupCaption num={num} label={label} />
    </article>
  )
}

/** Простая рамка digital-носителя (со «строкой» браузера) */
function DigitalMockup({
  num,
  label,
  ratioClass,
  widthClass,
  children,
}: {
  num: string
  label: string
  ratioClass: string
  widthClass: string
  children: React.ReactNode
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm">
      <div className="flex flex-1 flex-col items-center justify-center bg-brand-navy/[0.05] p-6">
        <div className={cn("overflow-hidden rounded-lg border border-brand-navy/15 bg-card shadow-md", widthClass)}>
          <div className="flex items-center gap-1.5 border-b border-brand-navy/10 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-brand-orange/70" aria-hidden="true" />
            <span className="h-2 w-2 rounded-full bg-brand-sand/50" aria-hidden="true" />
            <span className="h-2 w-2 rounded-full bg-brand-navy/20" aria-hidden="true" />
            <span className="ml-2 h-2 flex-1 rounded-full bg-brand-navy/10" aria-hidden="true" />
          </div>
          <div className={cn("w-full overflow-hidden", ratioClass)}>{children}</div>
        </div>
      </div>
      <MockupCaption num={num} label={label} />
    </article>
  )
}

/** Борт транспорта — широкий баннер с колёсами */
function TransitMockup({
  num,
  label,
  children,
}: {
  num: string
  label: string
  children: React.ReactNode
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-card shadow-sm">
      <div className="bg-brand-navy/[0.05] px-6 py-10">
        <div className="relative mx-auto w-full max-w-2xl">
          <div className="relative aspect-[4/1] w-full overflow-hidden rounded-xl rounded-tr-[2.5rem] border-[5px] border-brand-navy bg-brand-cream shadow-lg">
            {children}
          </div>
          {/* Колёса автобуса */}
          <span className="absolute -bottom-4 left-[18%] flex h-9 w-9 items-center justify-center rounded-full bg-brand-navy">
            <span className="h-3.5 w-3.5 rounded-full bg-brand-cream" aria-hidden="true" />
          </span>
          <span className="absolute -bottom-4 right-[18%] flex h-9 w-9 items-center justify-center rounded-full bg-brand-navy">
            <span className="h-3.5 w-3.5 rounded-full bg-brand-cream" aria-hidden="true" />
          </span>
        </div>
      </div>
      <MockupCaption num={num} label={label} />
    </article>
  )
}

/* ------------------------------------------------------------------ *
 * Заголовок слайда (короткий kicker + название)
 * ------------------------------------------------------------------ */
function SlideKicker({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-8 flex flex-col gap-2">
      <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-sand">
        {kicker}
      </span>
      <h3 className="font-display text-2xl font-bold text-brand-navy md:text-3xl">{title}</h3>
    </div>
  )
}

/* ------------------------------------------------------------------ *
 * СЛАЙДЫ
 * ------------------------------------------------------------------ */

// 17 — Обзор + герой-билборд
function CampaignOverviewSlide() {
  return (
    <SlideWrapper slideNumber={17} totalSlides={21} variant="light">
      <div id="campaign" className="scroll-mt-20 flex flex-col gap-10">
        <SectionHeading
          index="09"
          kicker="Реклама"
          title="Рекламная кампания"
          description="Единый фирменный стиль на наружных, digital- и транспортных носителях. Все макеты свёрстаны вручную в фирменных цветах бренда."
        />
        <BillboardMockup num="01" label="Билборд 3×6 — вдоль трассы">
          <CreativeSpeed />
        </BillboardMockup>
      </div>
    </SlideWrapper>
  )
}

// 18 — Сити-форматы
function CampaignCityLightsSlide() {
  return (
    <SlideWrapper slideNumber={18} totalSlides={21} variant="light">
      <SlideKicker kicker="Реклама" title="Сити-форматы" />
      <div className="grid gap-6 sm:grid-cols-2">
        <CityLightMockup num="02" label="Сити-лайт — имидж">
          <CreativePocket />
        </CityLightMockup>
        <CityLightMockup num="03" label="Сити-лайт — промо">
          <CreativePromo />
        </CityLightMockup>
      </div>
    </SlideWrapper>
  )
}

// 19 — Digital
function CampaignDigitalSlide() {
  return (
    <SlideWrapper slideNumber={19} totalSlides={21} variant="light">
      <SlideKicker kicker="Реклама" title="Digital-баннеры" />
      <div className="flex flex-col gap-6">
        <DigitalMockup
          num="04"
          label="Лидерборд 728×90"
          ratioClass="aspect-[8/1]"
          widthClass="w-full max-w-2xl"
        >
          <CreativeLeaderboard />
        </DigitalMockup>
        <div className="grid gap-6 sm:grid-cols-2">
          <DigitalMockup
            num="05"
            label="Пост / сторис 1×1"
            ratioClass="aspect-square"
            widthClass="w-full max-w-xs"
          >
            <CreativePromo />
          </DigitalMockup>
          <DigitalMockup
            num="06"
            label="Вертикальный 9×16"
            ratioClass="aspect-[9/16]"
            widthClass="w-full max-w-[15rem]"
          >
            <CreativeDrivers />
          </DigitalMockup>
        </div>
      </div>
    </SlideWrapper>
  )
}

// 20 — Транспорт
function CampaignTransitSlide() {
  return (
    <SlideWrapper slideNumber={20} totalSlides={21} variant="light">
      <SlideKicker kicker="Реклама" title="Транспорт" />
      <TransitMockup num="07" label="Брендирование борта">
        <CreativeTransit />
      </TransitMockup>
    </SlideWrapper>
  )
}

export function CampaignSection() {
  return (
    <>
      <CampaignOverviewSlide />
      <CampaignCityLightsSlide />
      <CampaignDigitalSlide />
      <CampaignTransitSlide />
    </>
  )
}
