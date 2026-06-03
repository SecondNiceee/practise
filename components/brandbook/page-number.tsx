interface PageNumberProps {
  number: number
  total?: number
}

export function PageNumber({ number, total = 12 }: PageNumberProps) {
  return (
    <div className="flex items-center justify-end px-5 py-4">
      <span className="font-mono text-sm text-brand-sand">
        {String(number).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
    </div>
  )
}
