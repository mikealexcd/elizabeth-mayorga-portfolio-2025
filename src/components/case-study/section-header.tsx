interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({ title, subtitle, align = "left", className = "" }: SectionHeaderProps) {
  return (
    <div className={`mb-6 ${align === "center" ? "text-center" : ""} ${className}`}>
      {subtitle && <p className="text-xs uppercase tracking-wider font-medium mb-1">{subtitle}</p>}
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  )
}
