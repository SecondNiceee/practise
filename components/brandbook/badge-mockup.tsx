import { KibitkaMark } from "@/components/moodboard/kibitka-mark"

/**
 * Мокап бейджа водителя «Кибитка».
 * За основу взята настоящая фотография пустого бейдж-холдера на шнурке,
 * а фирменная вёрстка карточки реально вставлена внутрь прозрачного кармашка
 * поверх белой заготовки — как настоящий распечатанный бейдж.
 */
export function BadgeMockup() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden">
      {/* Фотография бейдж-холдера на шнурке */}
      <img
        src="/mockups/lanyard-holder.png"
        alt="Бейдж водителя «Кибитка» на шнурке"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Фирменная карточка, вставленная внутрь холдера поверх белой заготовки */}
      <div
        className="absolute overflow-hidden rounded-[3px]"
        style={{ left: "25.4%", top: "52.4%", width: "49.2%", height: "45%" }}
      >
        <div className="relative flex h-full w-full flex-col overflow-hidden bg-brand-cream">
          {/* Шапка с крупным логотипом */}
          <div className="flex shrink-0 flex-col items-center gap-[2px] bg-brand-navy px-2 py-[5px]">
            <KibitkaMark className="h-[22px] w-[34px]" />
            <div className="flex flex-col items-center leading-none">
              <span className="font-display text-[9px] font-extrabold tracking-[0.22em] text-brand-cream">
                КИБИТКА
              </span>
              <span className="mt-[1px] font-display text-[3.5px] font-semibold uppercase tracking-[0.3em] text-brand-orange">
                Такси-сервис
              </span>
            </div>
          </div>

          {/* Тело: фото + данные */}
          <div className="flex min-h-0 flex-1 items-center gap-2 overflow-hidden px-2 py-1.5">
            <div className="aspect-square w-[38%] shrink-0 overflow-hidden rounded-[2px] ring-1 ring-brand-orange/40">
              <img
                src="/mockups/driver-portrait.png"
                alt="Фото водителя"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-center gap-[2px]">
              <span className="truncate font-display text-[11px] font-bold leading-tight text-brand-navy">
                Иван Петров
              </span>
              <span className="font-sans text-[6px] font-semibold uppercase tracking-[0.15em] text-brand-orange-dark">
                Водитель
              </span>
              <div className="mt-[2px] flex flex-col gap-[1px] font-mono text-[6px] font-medium text-brand-navy/55">
                <span>ID 04-1271</span>
                <span>kibitka.ru</span>
              </div>
            </div>
          </div>

          {/* Нижняя оранжевая полоса */}
          <div className="h-[3px] w-full shrink-0 bg-brand-orange" />
        </div>
      </div>

      {/* Лёгкий блик прозрачного пластика поверх карточки */}
      <div
        className="pointer-events-none absolute bg-gradient-to-br from-white/35 via-transparent to-transparent"
        style={{ left: "25.4%", top: "52.4%", width: "49.2%", height: "45%" }}
        aria-hidden="true"
      />
    </div>
  )
}
