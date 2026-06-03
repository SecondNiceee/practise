import { SectionHeading } from "@/components/moodboard/section-heading"
import { KibitkaLogo } from "@/components/moodboard/kibitka-logo"
import { SlideWrapper } from "./slide-wrapper"

export function LogoColorsSection() {
  return (
    <SlideWrapper slideNumber={6} totalSlides={21} variant="light">
      <div id="logo-colors" className="scroll-mt-20">
          <SectionHeading
            index="02.2"
            kicker="Цветовые версии"
            title="Цветовые сочетания логотипа"
            description="Утверждённые цветовые варианты логотипа для различных фонов и носителей. Выбор версии зависит от контекста использования."
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

          {/* На фирменных цветах */}
          <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
            На фирменных цветах
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Кремовый фон */}
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-brand-navy/10 bg-brand-cream p-8">
              <KibitkaLogo size="sm" />
              <div className="text-center">
                <span className="block font-display text-sm font-semibold text-brand-navy">Кремовый фон</span>
                <span className="text-xs text-brand-sand">#F5F0E8</span>
              </div>
            </div>

            {/* Бирюзовый фон */}
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl p-8" style={{ backgroundColor: "#1ABC9C" }}>
              <KibitkaLogo
                size="sm"
                bodyColor="#ffffff"
                windowColor="#0d5c4a"
                bumperColor="#ffffff"
                lightColor="#0d5c4a"
                wheelColor="#0d5c4a"
                wheelInner="#ffffff"
                wordmarkClassName="text-white"
              />
              <div className="text-center">
                <span className="block font-display text-sm font-semibold text-white">Бирюзовый фон</span>
                <span className="text-xs text-white/70">#1ABC9C</span>
              </div>
            </div>

            {/* Зелёный фон */}
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl p-8" style={{ backgroundColor: "#27AE60" }}>
              <KibitkaLogo
                size="sm"
                bodyColor="#ffffff"
                windowColor="#145a30"
                bumperColor="#ffffff"
                lightColor="#145a30"
                wheelColor="#145a30"
                wheelInner="#ffffff"
                wordmarkClassName="text-white"
              />
              <div className="text-center">
                <span className="block font-display text-sm font-semibold text-white">Зелёный фон</span>
                <span className="text-xs text-white/70">#27AE60</span>
              </div>
            </div>

            {/* Красный фон */}
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl p-8" style={{ backgroundColor: "#E74C3C" }}>
              <KibitkaLogo
                size="sm"
                bodyColor="#ffffff"
                windowColor="#7a1a10"
                bumperColor="#ffffff"
                lightColor="#7a1a10"
                wheelColor="#7a1a10"
                wheelInner="#ffffff"
                wordmarkClassName="text-white"
              />
              <div className="text-center">
                <span className="block font-display text-sm font-semibold text-white">Красный фон</span>
                <span className="text-xs text-white/70">#E74C3C</span>
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

          {/* Правила выбора версии */}
          <div className="mt-10 rounded-2xl border border-brand-navy/10 bg-card p-8">
            <h4 className="mb-4 font-display font-semibold text-brand-navy">
              Как выбрать версию?
            </h4>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <span className="font-semibold text-brand-orange-dark">Полноцветная</span>
                <p className="mt-1 text-sm leading-relaxed text-brand-navy/70">
                  Основной вариант. Используется везде, где фон позволяет сохранить контраст и читаемость.
                </p>
              </div>
              <div>
                <span className="font-semibold text-brand-orange-dark">На фирменных цветах</span>
                <p className="mt-1 text-sm leading-relaxed text-brand-navy/70">
                  Белый знак на ярких фонах. Для рекламы, баннеров, промо-материалов.
                </p>
              </div>
              <div>
                <span className="font-semibold text-brand-orange-dark">Монохром</span>
                <p className="mt-1 text-sm leading-relaxed text-brand-navy/70">
                  Для ч/б печати, гравировки, сувенирной продукции, документов.
                </p>
              </div>
            </div>
          </div>
      </div>
    </SlideWrapper>
  )
}
