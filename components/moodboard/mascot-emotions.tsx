type Emotion =
  | "happy"
  | "sad"
  | "surprised"
  | "angry"
  | "sleepy"
  | "love"

const labels: Record<Emotion, { name: string; color: string }> = {
  happy: { name: "Счастливая", color: "#27ae60" },
  sad: { name: "Грустная", color: "#3498db" },
  surprised: { name: "Удивлённая", color: "#e67e22" },
  angry: { name: "Злая", color: "#e74c3c" },
  sleepy: { name: "Сонная", color: "#9b59b6" },
  love: { name: "Влюблённая", color: "#e91e63" },
}

const order: Emotion[] = ["happy", "sad", "surprised", "angry", "sleepy", "love"]

/** Общая база машинки-маскота (кузов, окна, бампер, колёса). */
function CarBase() {
  return (
    <>
      <path
        d="M20 55 Q20 48 30 48 L110 48 Q120 48 120 55 L120 68 Q120 72 116 72 L24 72 Q20 72 20 68 Z"
        fill="#f39c12"
      />
      <path d="M38 48 L42 28 Q44 22 52 22 L88 22 Q96 22 98 28 L102 48" fill="#f39c12" />
      <path d="M46 46 L49 30 Q50 28 54 28 L66 28 Q68 28 68 30 L68 46 Z" fill="#2c3e50" />
      <path d="M72 46 L72 30 Q72 28 74 28 L86 28 Q90 28 91 30 L94 46 Z" fill="#2c3e50" />
      <rect x="18" y="68" width="104" height="4" rx="2" fill="#bdc3c7" />
      <circle cx="40" cy="76" r="12" fill="#2c3e50" />
      <circle cx="40" cy="76" r="8" fill="#ecf0f1" />
      <circle cx="40" cy="76" r="4" fill="#2c3e50" />
      <circle cx="100" cy="76" r="12" fill="#2c3e50" />
      <circle cx="100" cy="76" r="8" fill="#ecf0f1" />
      <circle cx="100" cy="76" r="4" fill="#2c3e50" />
    </>
  )
}

function Face({ emotion }: { emotion: Emotion }) {
  switch (emotion) {
    case "happy":
      return (
        <>
          <ellipse cx="50" cy="58" rx="8" ry="6" fill="#ecf0f1" />
          <ellipse cx="90" cy="58" rx="8" ry="6" fill="#ecf0f1" />
          <ellipse cx="50" cy="59" rx="4" ry="3" fill="#2c3e50" />
          <ellipse cx="90" cy="59" rx="4" ry="3" fill="#2c3e50" />
          <path d="M42 52 Q50 49 58 52" fill="none" stroke="#2c3e50" strokeWidth="2" strokeLinecap="round" />
          <path d="M82 52 Q90 49 98 52" fill="none" stroke="#2c3e50" strokeWidth="2" strokeLinecap="round" />
          <path d="M55 66 Q70 74 85 66" fill="none" stroke="#e74c3c" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="35" cy="62" rx="6" ry="4" fill="#e8a0a0" opacity="0.6" />
          <ellipse cx="105" cy="62" rx="6" ry="4" fill="#e8a0a0" opacity="0.6" />
        </>
      )
    case "sad":
      return (
        <>
          <ellipse cx="50" cy="58" rx="8" ry="6" fill="#ecf0f1" />
          <ellipse cx="90" cy="58" rx="8" ry="6" fill="#ecf0f1" />
          <ellipse cx="50" cy="60" rx="4" ry="3" fill="#2c3e50" />
          <ellipse cx="90" cy="60" rx="4" ry="3" fill="#2c3e50" />
          <path d="M42 52 Q50 55 58 52" fill="none" stroke="#2c3e50" strokeWidth="2" strokeLinecap="round" />
          <path d="M82 52 Q90 55 98 52" fill="none" stroke="#2c3e50" strokeWidth="2" strokeLinecap="round" />
          <path d="M55 70 Q70 64 85 70" fill="none" stroke="#e74c3c" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="58" cy="64" rx="2" ry="3" fill="#3498db" opacity="0.8" />
        </>
      )
    case "surprised":
      return (
        <>
          <ellipse cx="50" cy="58" rx="10" ry="8" fill="#ecf0f1" />
          <ellipse cx="90" cy="58" rx="10" ry="8" fill="#ecf0f1" />
          <circle cx="50" cy="58" r="5" fill="#2c3e50" />
          <circle cx="90" cy="58" r="5" fill="#2c3e50" />
          <circle cx="52" cy="56" r="2" fill="#fff" />
          <circle cx="92" cy="56" r="2" fill="#fff" />
          <path d="M40 48 Q50 44 60 48" fill="none" stroke="#2c3e50" strokeWidth="2" strokeLinecap="round" />
          <path d="M80 48 Q90 44 100 48" fill="none" stroke="#2c3e50" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="70" cy="68" rx="6" ry="5" fill="#e74c3c" />
        </>
      )
    case "angry":
      return (
        <>
          <ellipse cx="50" cy="58" rx="8" ry="5" fill="#ecf0f1" />
          <ellipse cx="90" cy="58" rx="8" ry="5" fill="#ecf0f1" />
          <ellipse cx="50" cy="58" rx="4" ry="3" fill="#2c3e50" />
          <ellipse cx="90" cy="58" rx="4" ry="3" fill="#2c3e50" />
          <path d="M42 50 L58 54" fill="none" stroke="#2c3e50" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M98 50 L82 54" fill="none" stroke="#2c3e50" strokeWidth="2.5" strokeLinecap="round" />
          <path
            d="M55 68 L60 66 L65 68 L70 66 L75 68 L80 66 L85 68"
            fill="none"
            stroke="#e74c3c"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )
    case "sleepy":
      return (
        <>
          <ellipse cx="50" cy="58" rx="8" ry="6" fill="#ecf0f1" />
          <ellipse cx="90" cy="58" rx="8" ry="6" fill="#ecf0f1" />
          <path d="M42 55 Q50 53 58 55 L58 58 Q50 56 42 58 Z" fill="#f39c12" />
          <path d="M82 55 Q90 53 98 55 L98 58 Q90 56 82 58 Z" fill="#f39c12" />
          <ellipse cx="50" cy="60" rx="3" ry="2" fill="#2c3e50" />
          <ellipse cx="90" cy="60" rx="3" ry="2" fill="#2c3e50" />
          <ellipse cx="70" cy="68" rx="8" ry="6" fill="#e74c3c" />
          <ellipse cx="70" cy="67" rx="5" ry="3" fill="#c0392b" />
          <text x="115" y="45" fontFamily="Arial" fontSize="10" fill="#3498db" fontWeight="bold">Z</text>
          <text x="122" y="38" fontFamily="Arial" fontSize="8" fill="#3498db" fontWeight="bold">z</text>
          <text x="127" y="32" fontFamily="Arial" fontSize="6" fill="#3498db" fontWeight="bold">z</text>
        </>
      )
    case "love":
      return (
        <>
          <path d="M44 56 C44 53 47 51 50 54 C53 51 56 53 56 56 C56 60 50 64 50 64 C50 64 44 60 44 56" fill="#e74c3c" />
          <path d="M84 56 C84 53 87 51 90 54 C93 51 96 53 96 56 C96 60 90 64 90 64 C90 64 84 60 84 56" fill="#e74c3c" />
          <path d="M55 66 Q70 74 85 66" fill="none" stroke="#e74c3c" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="35" cy="62" rx="6" ry="4" fill="#e8a0a0" opacity="0.7" />
          <ellipse cx="105" cy="62" rx="6" ry="4" fill="#e8a0a0" opacity="0.7" />
          <path d="M20 40 C20 38 22 36 24 38 C26 36 28 38 28 40 C28 43 24 46 24 46 C24 46 20 43 20 40" fill="#e74c3c" opacity="0.6" />
          <path d="M112 35 C112 33 114 31 116 33 C118 31 120 33 120 35 C120 38 116 41 116 41 C116 41 112 38 112 35" fill="#e74c3c" opacity="0.6" />
        </>
      )
  }
}

/** Сетка машинок-маскотов с эмоциями (из практической работы №4). */
export function MascotEmotions() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {order.map((emotion) => (
        <div
          key={emotion}
          className="flex flex-col items-center gap-3 rounded-2xl border border-brand-navy/10 bg-white p-6"
        >
          <svg
            viewBox="0 0 200 180"
            className="h-auto w-full max-w-[200px]"
            role="img"
            aria-label={`Маскот Кибитка — ${labels[emotion].name.toLowerCase()}`}
          >
            <g transform="translate(30, 30) scale(1.2)">
              <CarBase />
              <Face emotion={emotion} />
            </g>
          </svg>
          <span className="font-display text-sm font-semibold" style={{ color: labels[emotion].color }}>
            {labels[emotion].name}
          </span>
        </div>
      ))}
    </div>
  )
}
