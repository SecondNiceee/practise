import { KibitkaMark } from "@/components/moodboard/kibitka-mark"
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, BadgeCheck } from "lucide-react"

/**
 * Мокап цифровых носителей «Кибитка»: оформление соцсетей и рекламных баннеров.
 * Слева — пара квадратных промо-постов для ленты, в центре — телефон с постом
 * Instagram-стиля. Всё собрано на чистом CSS/Tailwind в фирменных цветах.
 */

/** Телефон с постом в Instagram-стиле */
function SocialPhone() {
  return (
    <div className="relative h-[520px] w-[260px] rounded-[2.4rem] border-[9px] border-brand-navy bg-brand-navy shadow-2xl">
      <span className="absolute -right-[11px] top-32 h-16 w-[3px] rounded-r bg-brand-navy" aria-hidden="true" />

      <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-card">
        {/* Челка */}
        <div className="absolute left-1/2 top-2 z-30 h-5 w-24 -translate-x-1/2 rounded-full bg-brand-navy" aria-hidden="true" />

        {/* Статус-бар */}
        <div className="flex items-center justify-between px-5 pt-3 text-[10px] font-semibold text-brand-navy">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="h-2 w-3 rounded-sm border border-brand-navy" />
            <span className="h-2 w-1.5 rounded-sm bg-brand-navy" />
          </div>
        </div>

        {/* Шапка поста */}
        <div className="flex items-center justify-between px-3 py-2.5">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-navy ring-2 ring-brand-orange">
              <KibitkaMark className="h-3.5 w-5" />
            </span>
            <div className="flex flex-col leading-none">
              <span className="flex items-center gap-1 font-display text-[11px] font-bold text-brand-navy">
                kibitka
                <BadgeCheck className="h-3 w-3 text-brand-orange" aria-hidden="true" />
              </span>
              <span className="mt-0.5 font-sans text-[8px] text-brand-navy/50">Такси-сервис</span>
            </div>
          </div>
          <MoreHorizontal className="h-4 w-4 text-brand-navy/60" aria-hidden="true" />
        </div>

        {/* Картинка поста */}
        <div className="relative aspect-square w-full overflow-hidden bg-brand-navy">
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-orange/20 blur-2xl" />
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center">
            <KibitkaMark className="h-9 w-14" />
            <p className="font-display text-[22px] font-extrabold leading-none text-brand-cream">
              Первая поездка
            </p>
            <p className="font-display text-4xl font-black leading-none text-brand-orange">−50%</p>
            <span className="mt-1 rounded-md bg-brand-orange px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-brand-navy">
              ДОМОЙ50
            </span>
          </div>
        </div>

        {/* Действия */}
        <div className="flex items-center justify-between px-3 pb-1.5 pt-2.5">
          <div className="flex items-center gap-3">
            <Heart className="h-5 w-5 text-brand-orange" fill="#e8732b" aria-hidden="true" />
            <MessageCircle className="h-5 w-5 text-brand-navy" aria-hidden="true" />
            <Send className="h-5 w-5 text-brand-navy" aria-hidden="true" />
          </div>
          <Bookmark className="h-5 w-5 text-brand-navy" aria-hidden="true" />
        </div>

        {/* Лайки и подпись */}
        <div className="px-3">
          <p className="font-sans text-[11px] font-semibold text-brand-navy">1 248 отметок «Нравится»</p>
          <p className="mt-1 font-sans text-[11px] leading-snug text-brand-navy/80">
            <span className="font-semibold text-brand-navy">kibitka</span> Домчим быстро, уютно и по-честному.
          </p>
          <p className="mt-1 font-sans text-[10px] text-brand-orange-dark">
            #кибитка #такси #домой
          </p>
        </div>
      </div>
    </div>
  )
}

export function SocialMockup() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-brand-cream py-10">
      {/* мягкие фирменные акценты на фоне */}
      <div className="pointer-events-none absolute -left-10 top-6 h-40 w-40 rounded-full bg-brand-orange/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-12 bottom-8 h-44 w-44 rounded-full bg-brand-navy/10 blur-3xl" aria-hidden="true" />

      {/* Телефон с постом */}
      <div className="relative z-10">
        <SocialPhone />
      </div>
    </div>
  )
}
