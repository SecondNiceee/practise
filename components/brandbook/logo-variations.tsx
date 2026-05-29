import { SectionHeading } from "@/components/moodboard/section-heading"
import { KibitkaMark } from "@/components/moodboard/kibitka-mark"

export function LogoVariations() {
  return (
    <section id="variations" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          index="3"
          kicker="Вариации"
          title="Цветовые и монохромные версии"
          description="Логотип сохраняет узнаваемость на светлых, тёмных и акцентных фонах, а также в одноцветном исполнении для факса, гравировки и тиснения."
        />

        {/* Color versions */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-white p-10">
            <KibitkaMark className="h-24 w-36" />
            <span className="font-display text-lg font-bold tracking-[0.3em] text-brand-navy">КИБИТКА</span>
            <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand-sand">
              На белом фоне
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-brand-navy p-10">
            <KibitkaMark className="h-24 w-36" windowColor="#1a2533" wheelInner="#ecf0f1" />
            <span className="font-display text-lg font-bold tracking-[0.3em] text-white">КИБИТКА</span>
            <span className="font-display text-xs font-semibold uppercase tracking-wider text-white/50">
              На тёмном фоне
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange-dark p-10">
            <KibitkaMark
              className="h-24 w-36"
              bodyColor="#ffffff"
              windowColor="#2c3e50"
              bumperColor="#ffffff"
              lightColor="#2c3e50"
              wheelColor="#2c3e50"
              wheelInner="#ffffff"
            />
            <span className="font-display text-lg font-bold tracking-[0.3em] text-white">КИБИТКА</span>
            <span className="font-display text-xs font-semibold uppercase tracking-wider text-white/70">
              На акцентном фоне
            </span>
          </div>
        </div>

        {/* Monochrome versions */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-white p-10">
            <KibitkaMark
              className="h-24 w-36"
              bodyColor="#2c3e50"
              windowColor="#ffffff"
              bumperColor="#2c3e50"
              lightColor="#ffffff"
              wheelColor="#2c3e50"
              wheelInner="#ffffff"
            />
            <span className="font-display text-lg font-bold tracking-[0.3em] text-brand-navy">КИБИТКА</span>
            <span className="font-display text-xs font-semibold uppercase tracking-wider text-brand-sand">
              Монохром · тёмный
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-brand-navy p-10">
            <KibitkaMark
              className="h-24 w-36"
              bodyColor="#ffffff"
              windowColor="#2c3e50"
              bumperColor="#ffffff"
              lightColor="#2c3e50"
              wheelColor="#ffffff"
              wheelInner="#2c3e50"
            />
            <span className="font-display text-lg font-bold tracking-[0.3em] text-white">КИБИТКА</span>
            <span className="font-display text-xs font-semibold uppercase tracking-wider text-white/50">
              Монохром · светлый (выворотка)
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
