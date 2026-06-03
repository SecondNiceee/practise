import { SectionHeading } from "@/components/moodboard/section-heading"
import { KibitkaLogo } from "@/components/moodboard/kibitka-logo"
import { PageNumber } from "./page-number"

export function LogoColorsSection() {
  return (
    <section id="logo-colors" className="scroll-mt-20 bg-brand-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
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

        {/* Дополнительные цветные версии */}
        <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
          Дополнительные цветные версии
        </h3>
        <p className="mb-5 text-sm text-brand-navy/70">
          Расширенные варианты для специальных носителей и рекламных материалов — на бирюзовом, красном, золотом и индиго фонах.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* На бирюзовом */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl p-8" style={{ backgroundColor: "#1ABC9C" }}>
            <KibitkaLogo
              size="md"
              bodyColor="#ffffff"
              windowColor="#0d8e74"
              bumperColor="#ffffff"
              lightColor="#0d8e74"
              wheelColor="#ffffff"
              wheelInner="#0d8e74"
              wordmarkClassName="text-white"
            />
            <div className="text-center">
              <span className="block font-display text-sm font-semibold text-white">На бирюзовом</span>
              <span className="text-xs text-white/70">Бонусы, акции</span>
            </div>
          </div>

          {/* На красном */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl p-8" style={{ backgroundColor: "#E74C3C" }}>
            <KibitkaLogo
              size="md"
              bodyColor="#ffffff"
              windowColor="#c0392b"
              bumperColor="#ffffff"
              lightColor="#c0392b"
              wheelColor="#ffffff"
              wheelInner="#c0392b"
              wordmarkClassName="text-white"
            />
            <div className="text-center">
              <span className="block font-display text-sm font-semibold text-white">На красном</span>
              <span className="text-xs text-white/70">Срочные CTA</span>
            </div>
          </div>

          {/* На золотом */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl p-8" style={{ backgroundColor: "#D4AF37" }}>
            <KibitkaLogo
              size="md"
              bodyColor="#2c3e50"
              windowColor="#b8941e"
              bumperColor="#2c3e50"
              lightColor="#b8941e"
              wheelColor="#2c3e50"
              wheelInner="#d4af37"
              wordmarkClassName="text-brand-navy"
            />
            <div className="text-center">
              <span className="block font-display text-sm font-semibold text-brand-navy">На золотом</span>
              <span className="text-xs text-brand-navy/70">VIP, премиум</span>
            </div>
          </div>

          {/* На индиго */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl p-8" style={{ backgroundColor: "#1A237E" }}>
            <KibitkaLogo
              size="md"
              bodyColor="#F39C12"
              windowColor="#0d1550"
              bumperColor="#F39C12"
              lightColor="#0d1550"
              wheelColor="#F39C12"
              wheelInner="#0d1550"
              wordmarkClassName="text-white"
            />
            <div className="text-center">
              <span className="block font-display text-sm font-semibold text-white">На индиго</span>
              <span className="text-xs text-white/70">Ночной режим</span>
            </div>
          </div>
        </div>

        {/* Монохромные версии */}
        <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
          Монохромные версии
        </h3>
        <p className="mb-5 text-sm text-brand-navy/70">
          Используются когда цветная печать недоступна или для специальных применений (гравировка, тиснение).
        </p>
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

        {/* На фотографиях */}
        <h3 className="mb-5 mt-10 font-display text-lg font-semibold text-brand-navy">
          Логотип на фотографиях
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div 
            className="relative flex h-48 items-end justify-start rounded-2xl bg-cover bg-center p-6"
            style={{ 
              backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 200\"%3E%3Crect fill=\"%2334495e\" width=\"400\" height=\"200\"/%3E%3Ccircle fill=\"%232c3e50\" cx=\"50\" cy=\"180\" r=\"100\"/%3E%3Ccircle fill=\"%233d566e\" cx=\"350\" cy=\"30\" r=\"80\"/%3E%3C/svg%3E')" 
            }}
          >
            <div className="flex items-center gap-2">
              <KibitkaLogo
                size="sm"
                bodyColor="#ffffff"
                windowColor="#2c3e50"
                bumperColor="#ffffff"
                lightColor="#2c3e50"
                wheelColor="#ffffff"
                wheelInner="#2c3e50"
                wordmarkClassName="text-white"
              />
            </div>
            <span className="absolute right-4 top-4 rounded-full bg-brand-green px-3 py-1 text-xs font-semibold text-white">
              Правильно
            </span>
          </div>

          <div 
            className="relative flex h-48 items-end justify-start rounded-2xl bg-cover bg-center p-6"
            style={{ 
              backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 200\"%3E%3Crect fill=\"%23f5f0e8\" width=\"400\" height=\"200\"/%3E%3Ccircle fill=\"%23e8e2d8\" cx=\"100\" cy=\"150\" r=\"80\"/%3E%3Ccircle fill=\"%23ece6dc\" cx=\"300\" cy=\"50\" r=\"60\"/%3E%3C/svg%3E')" 
            }}
          >
            <div className="flex items-center gap-2">
              <KibitkaLogo size="sm" />
            </div>
            <span className="absolute right-4 top-4 rounded-full bg-brand-green px-3 py-1 text-xs font-semibold text-white">
              Правильно
            </span>
          </div>
        </div>

        <p className="mt-4 text-sm text-brand-navy/70">
          При размещении на фотографиях используйте затемнение или подложку для обеспечения читаемости. 
          Выбирайте версию логотипа в зависимости от тона изображения.
        </p>
      </div>
      <PageNumber number={6} total={13} />
    </section>
  )
}
