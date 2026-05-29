import { SectionHeading } from "./section-heading"
import { KibitkaMark } from "./kibitka-mark"
import { MascotEmotions } from "./mascot-emotions"
import { ProtectiveField } from "./protective-field"

export function LogoSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <SectionHeading
        index="5"
        kicker="Логотип"
        title="Логотип и его вариации"
        description="Финальный знак — стилизованное ретро-такси с фирменной надписью. Работает на светлых, тёмных и акцентных фонах."
      />

      {/* Lockups */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* White */}
        <div className="flex flex-col items-center justify-center gap-5 rounded-2xl border border-brand-navy/10 bg-white p-10">
          <div className="flex flex-col items-center gap-1">
            <KibitkaMark className="h-24 w-36" />
            <span className="font-display text-xl font-bold tracking-[0.3em] text-brand-navy">
              КИБИТКА
            </span>
          </div>
          <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand-sand">
            На светлом фоне
          </span>
        </div>

        {/* Navy */}
        <div className="flex flex-col items-center justify-center gap-5 rounded-2xl bg-brand-navy p-10">
          <div className="flex flex-col items-center gap-1">
            <KibitkaMark className="h-24 w-36" windowColor="#1a2533" wheelInner="#ecf0f1" />
            <span className="font-display text-xl font-bold tracking-[0.3em] text-white">
              КИБИТКА
            </span>
          </div>
          <span className="font-display text-xs font-semibold uppercase tracking-wider text-white/50">
            На тёмном фоне
          </span>
        </div>

        {/* Orange */}
        <div className="flex flex-col items-center justify-center gap-5 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange-dark p-10">
          <div className="flex flex-col items-center gap-1">
            <KibitkaMark
              className="h-24 w-36"
              bodyColor="#ffffff"
              windowColor="#2c3e50"
              bumperColor="#ffffff"
              lightColor="#2c3e50"
              wheelColor="#2c3e50"
              wheelInner="#ffffff"
            />
            <span className="font-display text-xl font-bold tracking-[0.3em] text-white">
              КИБИТКА
            </span>
          </div>
          <span className="font-display text-xs font-semibold uppercase tracking-wider text-white/70">
            На акцентном фоне
          </span>
        </div>
      </div>

      {/* Protective field diagram */}
      <ProtectiveField />

      {/* Mascot */}
      <h3 className="mb-5 mt-12 font-display text-lg font-semibold text-brand-navy">
        Маскот бренда
      </h3>
      <MascotEmotions />
      <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-brand-navy/65">
        Маскотом служит сама машинка «Кибитка» с набором эмоций — она делает
        бренд тёплым и запоминающимся в приложении, соцсетях и рекламе.
      </p>
    </section>
  )
}
