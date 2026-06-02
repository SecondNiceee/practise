import { MapPin, Navigation, Search, Clock, Star, Home, Menu, User, Wallet, Car } from "lucide-react"

/**
 * Реальный UI-прототип мобильного приложения «Кибитка»,
 * собранный на чистом CSS/Tailwind — без растровых картинок,
 * чтобы экран оставался чётким на любом разрешении.
 */
export function MobileAppMockup() {
  return (
    <div className="flex items-center justify-center bg-brand-navy/5 py-8">
      {/* Корпус телефона */}
      <div className="relative h-[620px] w-[300px] rounded-[2.75rem] border-[10px] border-brand-navy bg-brand-navy shadow-2xl">
        {/* Боковые кнопки */}
        <span className="absolute -left-[12px] top-28 h-12 w-[3px] rounded-l bg-brand-navy" aria-hidden="true" />
        <span className="absolute -left-[12px] top-44 h-16 w-[3px] rounded-l bg-brand-navy" aria-hidden="true" />
        <span className="absolute -right-[12px] top-36 h-20 w-[3px] rounded-r bg-brand-navy" aria-hidden="true" />

        {/* Экран */}
        <div className="relative h-full w-full overflow-hidden rounded-[2.05rem] bg-brand-cream">
          {/* Челка */}
          <div className="absolute left-1/2 top-2 z-30 h-6 w-32 -translate-x-1/2 rounded-full bg-brand-navy" aria-hidden="true" />

          {/* Статус-бар */}
          <div className="relative z-20 flex items-center justify-between px-6 pt-3 text-[11px] font-semibold text-brand-navy">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="h-2.5 w-3.5 rounded-sm border border-brand-navy" />
              <span className="h-2.5 w-2 rounded-sm bg-brand-navy" />
            </div>
          </div>

          {/* ===== Карта ===== */}
          <div className="relative h-[280px] w-full overflow-hidden bg-[#e8e2d6]">
            {/* Сетка кварталов */}
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(#d9d2c2 1px, transparent 1px), linear-gradient(90deg, #d9d2c2 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
              aria-hidden="true"
            />
            {/* Крупные дороги */}
            <div className="absolute left-0 top-[120px] h-3 w-full -rotate-6 bg-white/80" aria-hidden="true" />
            <div className="absolute left-[150px] top-0 h-full w-3 rotate-3 bg-white/80" aria-hidden="true" />
            {/* Парк */}
            <div className="absolute right-2 top-6 h-20 w-24 rounded-2xl bg-[#cdd9b8]" aria-hidden="true" />

            {/* Маршрут */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 280" fill="none" aria-hidden="true">
              <path
                d="M70 210 C 70 150, 150 150, 150 110 S 230 70, 230 60"
                stroke="#f39c12"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="0.1 14"
              />
            </svg>

            {/* Точка А (пользователь) */}
            <div className="absolute left-[60px] top-[198px] flex flex-col items-center" aria-hidden="true">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-brand-orange shadow-md">
                <Navigation className="h-3 w-3 text-white" fill="white" />
              </span>
            </div>
            {/* Точка Б (назначение) */}
            <div className="absolute left-[218px] top-[40px] flex flex-col items-center" aria-hidden="true">
              <MapPin className="h-7 w-7 text-brand-navy" fill="#2c3e50" />
            </div>

            {/* Машинки рядом */}
            <span className="absolute left-[110px] top-[88px] flex h-5 w-5 items-center justify-center rounded-md bg-brand-navy shadow" aria-hidden="true">
              <Car className="h-3 w-3 text-brand-orange" />
            </span>

            {/* Кнопка геолокации */}
            <button
              type="button"
              className="absolute bottom-4 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-card text-brand-navy shadow-md"
              aria-label="Моё местоположение"
            >
              <Navigation className="h-4 w-4" />
            </button>
          </div>

          {/* ===== Нижний лист заказа ===== */}
          <div className="relative -mt-5 rounded-t-3xl bg-card px-5 pb-24 pt-4 shadow-[0_-8px_24px_rgba(44,62,80,0.08)]">
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-brand-navy/15" aria-hidden="true" />

            <p className="mb-2 font-display text-base font-bold text-brand-navy">Куда едем?</p>

            {/* Поле поиска */}
            <div className="mb-3 flex items-center gap-2 rounded-xl bg-brand-cream px-3 py-2.5">
              <Search className="h-4 w-4 text-brand-navy/40" />
              <span className="text-sm text-brand-navy/45">Введите адрес</span>
            </div>

            {/* Тарифы */}
            <div className="mb-4 flex gap-2">
              {[
                { name: "Эконом", price: "от 199 ₽", active: true },
                { name: "Комфорт", price: "от 299 ₽", active: false },
                { name: "Бизнес", price: "от 499 ₽", active: false },
              ].map((t) => (
                <div
                  key={t.name}
                  className={`flex-1 rounded-xl border px-2 py-2 text-center ${
                    t.active
                      ? "border-brand-orange bg-brand-orange/10"
                      : "border-brand-navy/10 bg-card"
                  }`}
                >
                  <p className={`text-[11px] font-semibold ${t.active ? "text-brand-orange-dark" : "text-brand-navy"}`}>
                    {t.name}
                  </p>
                  <p className="text-[10px] text-brand-navy/50">{t.price}</p>
                </div>
              ))}
            </div>

            {/* Инфо о подаче */}
            <div className="mb-4 flex items-center justify-between text-xs text-brand-navy/60">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-brand-orange" />
                Подача 3 мин
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-brand-orange" fill="#f39c12" />
                4.9 рейтинг
              </span>
            </div>

            {/* CTA */}
            <button
              type="button"
              className="w-full rounded-xl bg-brand-orange py-3 font-display text-sm font-bold text-white shadow-md"
            >
              Заказать «Кибитку»
            </button>
          </div>

          {/* ===== Таб-бар ===== */}
          <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-around border-t border-brand-navy/10 bg-card px-2 py-3">
            {[
              { icon: Home, label: "Главная", active: true },
              { icon: Wallet, label: "Кошелёк", active: false },
              { icon: Clock, label: "Поездки", active: false },
              { icon: User, label: "Профиль", active: false },
            ].map((tab) => (
              <span
                key={tab.label}
                className={`flex flex-col items-center gap-0.5 text-[9px] ${
                  tab.active ? "text-brand-orange-dark" : "text-brand-navy/40"
                }`}
              >
                <tab.icon className="h-5 w-5" />
                {tab.label}
              </span>
            ))}
          </div>

          {/* ===== Верхняя шапка с меню ===== */}
          <div className="absolute left-0 right-0 top-9 z-20 flex items-center justify-between px-4">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-card text-brand-navy shadow-md"
              aria-label="Меню"
            >
              <Menu className="h-4 w-4" />
            </button>
            <span className="rounded-full bg-brand-navy px-3 py-1.5 font-display text-sm font-bold tracking-tight text-white">
              Кибитка
            </span>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-card text-brand-navy shadow-md"
              aria-label="Профиль"
            >
              <User className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
