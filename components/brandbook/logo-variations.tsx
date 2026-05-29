import { SectionHeading } from "@/components/moodboard/section-heading"
import { KibitkaLogo } from "@/components/moodboard/kibitka-logo"

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
          <div className="flex items-center justify-center rounded-2xl border border-brand-navy/10 bg-white p-10">
            <KibitkaLogo size="md" caption="На белом фоне" />
          </div>

          <div className="flex items-center justify-center rounded-2xl bg-brand-navy p-10">
            <KibitkaLogo
              size="md"
              windowColor="#1a2533"
              wheelInner="#ecf0f1"
              wordmarkClassName="text-white"
              caption="На тёмном фоне"
              captionClassName="text-white/50"
            />
          </div>

          <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange-dark p-10">
            <KibitkaLogo
              size="md"
              bodyColor="#ffffff"
              windowColor="#2c3e50"
              bumperColor="#ffffff"
              lightColor="#2c3e50"
              wheelColor="#2c3e50"
              wheelInner="#ffffff"
              wordmarkClassName="text-white"
              caption="На акцентном фоне"
              captionClassName="text-white/70"
            />
          </div>
        </div>

        {/* Monochrome versions */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="flex items-center justify-center rounded-2xl border border-brand-navy/10 bg-white p-10">
            <KibitkaLogo
              size="md"
              bodyColor="#2c3e50"
              windowColor="#ffffff"
              bumperColor="#2c3e50"
              lightColor="#ffffff"
              wheelColor="#2c3e50"
              wheelInner="#ffffff"
              caption="Монохром · тёмный"
            />
          </div>

          <div className="flex items-center justify-center rounded-2xl bg-brand-navy p-10">
            <KibitkaLogo
              size="md"
              bodyColor="#ffffff"
              windowColor="#2c3e50"
              bumperColor="#ffffff"
              lightColor="#2c3e50"
              wheelColor="#ffffff"
              wheelInner="#2c3e50"
              wordmarkClassName="text-white"
              caption="Монохром · светлый (выворотка)"
              captionClassName="text-white/50"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
