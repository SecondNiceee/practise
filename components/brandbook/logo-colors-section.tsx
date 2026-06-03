import { SectionHeading } from "@/components/moodboard/section-heading"
import { KibitkaLogo } from "@/components/moodboard/kibitka-logo"
import { SlideWrapper } from "./slide-wrapper"

export function LogoColorsSection() {
  return (
    <SlideWrapper slideNumber={6} totalSlides={21} variant="light">
      <section id="logo-colors" className="flex min-h-screen flex-col justify-center scroll-mt-20 px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="02.2"
            kicker="Цветовые версии"
            title="Цветовые сочетания логотипа"
            description="Утверждённые цветовые варианты логотипа для различных фонов и носителей."
          />

          {/* Основные цветовые версии */}
          <h3 className="mb-5 font-display text-lg font-semibold text-brand-navy">
            Основные цветовые версии
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-white p-10">
              <KibitkaLogo size="md" />
              <div className="text-center">
                <span className="block font-display text-sm font-semibold text-brand-navy">На белом фоне</span>
                <span className="text-xs text-brand-sand">Основная версия</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-brand-navy p-10">
              <KibitkaLogo
                size="md"
                windowColor="#1a2533"
                wheelInner="#ecf0f1"
                wordmarkClassName="text-white"
              />
              <div className="text-center">
                <span className="block font-display text-sm font-semibold text-white">На тёмном фоне</span>
                <span className="text-xs text-white/50">Инверсия текста</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange-dark p-10">
              <KibitkaLogo
                size="md"
                bodyColor="#ffffff"
                windowColor="#2c3e50"
                bumperColor="#ffffff"
                lightColor="#2c3e50"
                wheelColor="#2c3e50"
                wheelInner="#ffffff"
                wordmarkClassName="text-white"
              />
              <div className="text-center">
                <span className="block font-display text-sm font-semibold text-white">На акцентном фоне</span>
                <span className="text-xs text-white/70">Белый знак</span>
              </div>
            </div>
          </div>

          {/* Монохромные версии */}
          <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
            Монохромные версии
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-white p-10">
              <KibitkaLogo
                size="md"
                bodyColor="#2c3e50"
                windowColor="#ffffff"
                bumperColor="#2c3e50"
                lightColor="#ffffff"
                wheelColor="#2c3e50"
                wheelInner="#ffffff"
              />
              <div className="text-center">
                <span className="block font-display text-sm font-semibold text-brand-navy">Монохром тёмный</span>
                <span className="text-xs text-brand-sand">Для светлых фонов</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-brand-navy p-10">
              <KibitkaLogo
                size="md"
                bodyColor="#ffffff"
                windowColor="#2c3e50"
                bumperColor="#ffffff"
                lightColor="#2c3e50"
                wheelColor="#ffffff"
                wheelInner="#2c3e50"
                wordmarkClassName="text-white"
              />
              <div className="text-center">
                <span className="block font-display text-sm font-semibold text-white">Монохром светлый</span>
                <span className="text-xs text-white/50">Выворотка</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SlideWrapper>
  )
}
