const links = [
  { href: "#contents", label: "Оглавление" },
  { href: "#about", label: "О бренде" },
  { href: "#logo", label: "Логотип" },
  { href: "#logo-rules", label: "Правила лого" },
  { href: "#colors", label: "Цвета" },
  { href: "#typography", label: "Шрифты" },
  { href: "#patterns", label: "Паттерны" },
  { href: "#photostyle", label: "Фотостиль" },
  { href: "#applications", label: "Носители" },
]

export function BrandbookNav() {
  return (
    <nav
      aria-label="Содержание брендбука"
      className="sticky top-0 z-40 border-b border-brand-navy/10 bg-background/90 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-5 py-3">
        <span className="mr-3 shrink-0 font-display text-sm font-bold tracking-[0.2em] text-brand-navy">
          КИБИТКА
        </span>
        <ul className="flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="inline-block whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium text-brand-navy/65 transition-colors hover:bg-brand-orange/10 hover:text-brand-orange-dark"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
